import { motion } from 'framer-motion';

// ============================================================
// PathwayDiagram — multi-tier branching flowchart for signaling pathways.
//
// Why a new component (vs. NetworkDiagram):
// NetworkDiagram is a strict 3-tier model (hub → enzyme pill → end), good
// for "precursor → enzyme → product" structures like AA biosynthesis.
// Signaling cascades are deeper (RTK → Ras → Raf → MEK → ERK → response)
// and have crossings, convergences (extrinsic + intrinsic apoptosis both
// hit Caspase 3), and inhibitory edges (Bcl-2 ⊣ BAX). This component
// handles all of that with arbitrary node positions and labeled edges.
//
// DESIGN RULES (same as NetworkDiagram, kept consistent):
// - All text labels live INSIDE their rectangle node.
// - Edges are drawn from rect EDGE to rect EDGE so the arrows are always
//   visible and never covered by labels.
// - Edge labels sit in a small chip on the line so they don't overlap
//   nearby nodes.
// - Activation edges = solid line + arrowhead.
// - Inhibition edges = dashed line + T-bar terminator.
// ============================================================

// Compute the (x, y) where a line from (fromX, fromY) toward the rectangle
// center (cx, cy) intersects the rectangle perimeter. Used so every arrow
// starts and ends exactly at the box edge.
function rectEdgePoint(cx, cy, hw, hh, fromX, fromY) {
  const dx = fromX - cx;
  const dy = fromY - cy;
  if (dx === 0 && dy === 0) return { x: cx, y: cy };
  const tx = hw / Math.max(1, Math.abs(dx));
  const ty = hh / Math.max(1, Math.abs(dy));
  const t = Math.min(tx, ty);
  return { x: cx + dx * t, y: cy + dy * t };
}

// Default node sizes. Individual nodes can override via node.w / node.h.
const NODE_W_DEFAULT = 168;
const NODE_H_DEFAULT = 60;

// Node-type → visual style. Kept lightweight so cycle authors only need
// to set `type`; the colors fall in line automatically.
const TYPE_STYLES = {
  ligand:    { fill: '#fef3c7', stroke: '#d97706', text: '#78350f' },
  receptor:  { fill: '#dbeafe', stroke: '#2563eb', text: '#1e3a8a' },
  adapter:   { fill: '#e0e7ff', stroke: '#4f46e5', text: '#312e81' },
  gprotein:  { fill: '#f3e8ff', stroke: '#7c3aed', text: '#4c1d95' },
  enzyme:    { fill: '#fce7f3', stroke: '#db2777', text: '#831843' },
  messenger: { fill: '#dcfce7', stroke: '#16a34a', text: '#14532d' },
  effector:  { fill: '#ffedd5', stroke: '#ea580c', text: '#7c2d12' },
  modifier:  { fill: '#fee2e2', stroke: '#dc2626', text: '#7f1d1d' },
  phase:     { fill: '#f1f5f9', stroke: '#475569', text: '#0f172a' },
  output:    { fill: '#fef9c3', stroke: '#ca8a04', text: '#713f12' }
};

// Compute box dimensions large enough to contain BOTH label and sublabel.
// Falls back to defaults if neither is unusually long. Authors can still set
// explicit n.w / n.h to override.
function effectiveSize(node) {
  const labelChars = (node.label || '').length;
  const sublabelChars = (node.sublabel || '').length;
  // Approx px-per-char: bold 12.5px ≈ 7.4, regular 9.5px ≈ 5.6
  const labelW    = labelChars    * 7.4 + 32;  // 32 = padding for left glyph + breathing room
  const sublabelW = sublabelChars * 5.6 + 32;
  const auto = Math.max(labelW, sublabelW, NODE_W_DEFAULT);
  // Cap so a runaway sublabel can't blow up the diagram
  const w = node.w || Math.min(auto, 300);
  const h = node.h || NODE_H_DEFAULT;
  return { w, h };
}

export default function PathwayDiagram({
  cycle,
  selectedNodeId,
  onSelectNode,
  hiddenIds = new Set(),
  revealedIds = {},
  hoverId = null,
  shakeId = null,
  // Layer flags from App.jsx — each adds an additive overlay to the diagram.
  showDrugs = false,
  showClinical = false,
  inhibitionFocus = false,
  memoryMode = false
}) {
  const path = cycle.pathway;
  if (!path) {
    return (
      <div style={{ padding: 40, textAlign: 'center', color: '#64748b' }}>
        Pathway layout not configured for this cycle.
      </div>
    );
  }

  const [vx, vy, vw, vh] = path.viewBox || [0, 0, 1100, 880];
  const nodeById = Object.fromEntries(path.nodes.map(n => [n.id, n]));

  return (
    <svg viewBox={`${vx} ${vy} ${vw} ${vh}`} className="net-map" preserveAspectRatio="xMidYMid meet">
      <defs>
        <marker id="pathArrowAct" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#475569" />
        </marker>
        <marker id="pathArrowActDim" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#cbd5e1" />
        </marker>
        <marker id="pathArrowInh" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" orient="auto">
          <path d="M 1 1 L 1 9" stroke="#dc2626" strokeWidth="2.4" fill="none" strokeLinecap="round" />
        </marker>
        <marker id="pathArrowInhBold" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="11" markerHeight="11" orient="auto">
          <path d="M 1 1 L 1 9" stroke="#b91c1c" strokeWidth="3" fill="none" strokeLinecap="round" />
        </marker>
      </defs>

      {/* ---------- Edges first (so nodes draw on top) ---------- */}
      {path.edges.map((e, i) => {
        const a = nodeById[e.from];
        const b = nodeById[e.to];
        if (!a || !b) return null;

        const aSize = effectiveSize(a);
        const bSize = effectiveSize(b);
        const aw = aSize.w / 2;
        const ah = aSize.h / 2;
        const bw = bSize.w / 2;
        const bh = bSize.h / 2;

        // Each end of the line sits on the rectangle's perimeter, oriented
        // toward the OTHER node. That way the arrow head always reaches the
        // border but never hides under a label.
        const start = rectEdgePoint(a.x, a.y, aw, ah, b.x, b.y);
        const end = rectEdgePoint(b.x, b.y, bw, bh, a.x, a.y);

        const inhibit = e.style === 'inhibit';

        // Default styling
        let stroke = inhibit ? '#dc2626' : '#94a3b8';
        let strokeWidth = 1.8;
        let dash = inhibit ? '5 4' : (e.dashed ? '4 4' : 'none');
        let marker = inhibit ? 'url(#pathArrowInh)' : 'url(#pathArrowAct)';

        // Inhibition-focus layer: dim activator edges, bolden inhibitor edges
        if (inhibitionFocus) {
          if (inhibit) {
            stroke = '#b91c1c';
            strokeWidth = 2.6;
            marker = 'url(#pathArrowInhBold)';
          } else {
            stroke = '#cbd5e1';
            strokeWidth = 1.2;
            marker = 'url(#pathArrowActDim)';
          }
        }

        // Label chip sits at the midpoint, slightly nudged perpendicular to
        // the line so it doesn't sit on the line itself. The chip is solid
        // white so the line behind it is hidden — much cleaner than text on
        // top of a line.
        const mx = (start.x + end.x) / 2;
        const my = (start.y + end.y) / 2;
        const labelLen = (e.label || '').length;
        const chipW = Math.max(40, labelLen * 6.6 + 14);
        const chipH = 18;
        const chipDim = inhibitionFocus && !inhibit;

        return (
          <g key={`edge-${i}`} opacity={chipDim ? 0.5 : 1}>
            <line
              x1={start.x} y1={start.y}
              x2={end.x}   y2={end.y}
              stroke={stroke}
              strokeWidth={strokeWidth}
              strokeDasharray={dash}
              markerEnd={marker}
            />
            {e.label && (
              <g>
                <rect
                  x={mx - chipW / 2} y={my - chipH / 2}
                  width={chipW} height={chipH} rx={chipH / 2}
                  fill="#ffffff"
                  stroke={inhibit ? '#fecaca' : '#e2e8f0'}
                  strokeWidth="1"
                />
                <text x={mx} y={my + 3.5} textAnchor="middle"
                      style={{ fontSize: 9.5, fontWeight: 700, fill: inhibit ? '#b91c1c' : '#475569', letterSpacing: 0.1 }}>
                  {e.label}
                </text>
              </g>
            )}
          </g>
        );
      })}

      {/* ---------- Nodes ---------- */}
      {path.nodes.map(n => {
        const style = TYPE_STYLES[n.type] || TYPE_STYLES.phase;
        const { w, h } = effectiveSize(n);
        const isHidden = hiddenIds.has(n.id);
        const isRevealed = !!revealedIds[n.id];
        const isHover = hoverId === n.id;
        const isShake = shakeId === n.id;
        const isSelected = selectedNodeId === n.id;

        // Glyph for orientation-at-a-glance (small icon top-left of node)
        const glyphMap = {
          ligand: '⬇', receptor: '⏚', adapter: '⊳', gprotein: '✦',
          enzyme: '✧', messenger: '•', effector: '★', modifier: '⊣',
          phase: '◆', output: '■'
        };
        const glyph = glyphMap[n.type] || '•';

        // Fill / stroke depending on state. We deliberately mirror the
        // NetworkDiagram color scheme (amber for hidden, emerald on hover
        // while dragging, green for revealed) so the user gets the same
        // active-recall feedback on either layout.
        const fill = isHidden && !isRevealed
          ? (isHover ? '#dcfce7' : '#fef3c7')
          : (isRevealed ? '#bbf7d0' : style.fill);
        const stroke = isHidden && !isRevealed
          ? (isHover ? '#10b981' : '#f59e0b')
          : (isSelected ? '#0f172a' : style.stroke);
        const strokeWidth = isHidden ? 2.5 : (isSelected ? 2.5 : 1.75);
        const dasharray = isHidden && !isRevealed && !isHover ? '5 4' : 'none';

        return (
          <motion.g
            key={n.id}
            onClick={() => !isHidden && onSelectNode?.(n.id)}
            style={{ cursor: isHidden ? 'default' : 'pointer' }}
            animate={isShake ? { x: [0, -7, 7, -5, 5, 0] } : { x: 0 }}
            whileHover={!isHidden ? { scale: 1.04 } : undefined}
            transition={isShake ? { duration: 0.4 } : { type: 'spring', stiffness: 300, damping: 20 }}
          >
            <rect
              x={n.x - w / 2} y={n.y - h / 2}
              width={w} height={h} rx={14}
              fill={fill} stroke={stroke}
              strokeWidth={strokeWidth}
              strokeDasharray={dasharray}
            />

            {isHidden && !isRevealed ? (
              <text
                x={n.x} y={n.y + 8} textAnchor="middle"
                style={{
                  fontSize: 26, fontWeight: 800,
                  fill: isHover ? '#059669' : '#b45309'
                }}
              >?</text>
            ) : (
              <>
                {/* Glyph dot, top-left INSIDE the node */}
                <text
                  x={n.x - w / 2 + 12} y={n.y - h / 2 + 16}
                  style={{ fontSize: 11, fontWeight: 700, fill: style.stroke, opacity: 0.7 }}
                >
                  {glyph}
                </text>

                {memoryMode && n.memory ? (
                  <>
                    {/* Memory mode: big emoji glyph + character name */}
                    <text
                      x={n.x} y={n.y - 4} textAnchor="middle"
                      style={{ fontSize: 20 }}
                    >
                      {n.memory.glyph}
                    </text>
                    <text
                      x={n.x} y={n.y + 14} textAnchor="middle"
                      style={{
                        fontSize: 10.5, fontWeight: 700, fill: style.text,
                        letterSpacing: -0.1
                      }}
                    >
                      {n.memory.char}
                    </text>
                  </>
                ) : (
                  <>
                    {/* Default: abbreviation + sublabel */}
                    <text
                      x={n.x} y={n.sublabel ? n.y - 2 : n.y + 4} textAnchor="middle"
                      style={{
                        fontSize: 12.5, fontWeight: 800, fill: style.text,
                        letterSpacing: -0.15
                      }}
                    >
                      {n.label}
                    </text>
                    {n.sublabel && (
                      <text
                        x={n.x} y={n.y + 13} textAnchor="middle"
                        style={{
                          fontSize: 9.5, fontWeight: 600, fill: style.text, opacity: 0.7
                        }}
                      >
                        {n.sublabel}
                      </text>
                    )}
                  </>
                )}

                {/* Drug-target badge (top-right, inside) */}
                {showDrugs && n.drugs && n.drugs.length > 0 && (
                  <g>
                    <circle cx={n.x + w / 2 - 10} cy={n.y - h / 2 + 10} r="9" fill="#db2777" />
                    <text x={n.x + w / 2 - 10} y={n.y - h / 2 + 14} textAnchor="middle"
                          style={{ fontSize: 11, fontWeight: 800, fill: '#fff', fontFamily: "'Fraunces', serif" }}>℞</text>
                  </g>
                )}

                {/* Clinical-correlate badge (bottom-right, inside) */}
                {showClinical && n.clinical && (
                  <g>
                    <circle cx={n.x + w / 2 - 10} cy={n.y + h / 2 - 10} r="9" fill="#dc2626" />
                    <text x={n.x + w / 2 - 10} y={n.y + h / 2 - 6} textAnchor="middle"
                          style={{ fontSize: 12, fontWeight: 800, fill: '#fff' }}>+</text>
                  </g>
                )}
              </>
            )}

            {/* Revealed-correct check badge */}
            {isRevealed && (
              <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }}>
                <circle cx={n.x + w / 2 - 9} cy={n.y - h / 2 + 9} r="9" fill="#10b981" />
                <text x={n.x + w / 2 - 9} y={n.y - h / 2 + 13} textAnchor="middle"
                      style={{ fontSize: 11, fontWeight: 800, fill: '#fff' }}>✓</text>
              </motion.g>
            )}
          </motion.g>
        );
      })}
    </svg>
  );
}
