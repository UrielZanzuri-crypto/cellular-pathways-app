# Cellular Pathways — Active Recall

Interactive, exam-realistic learning app for the five most-tested cellular pathways in medical school. Built around evidence-based memory techniques (active recall + spaced repetition + dual coding) and designed to share the same proven format as `biochem-app`.

## What's inside

Five canonical pathways, each rendered as a multi-tier branching flowchart with full deep-dive pedagogy, integrations, big-picture summary, and an SRS-scheduled MCQ bank:

1. **GPCR Signaling** — Gs / Gi / Gq → cAMP, IP₃, DAG, Ca²⁺
2. **Receptor Tyrosine Kinases** — dimerization → autophosphorylation → Ras/MAPK + PI3K/Akt
3. **The Cell Cycle** — cyclin–CDK ladder, Rb/E2F switch, p53/p21 checkpoint
4. **Cell Junctions & ECM** — tight, adherens, desmosomes, gap, hemidesmosomes + collagen, laminin, fibronectin, GAGs
5. **Apoptosis** — extrinsic + intrinsic pathways converging on caspase-3

Each pathway has 13–19 nodes, 4 in-depth pedagogy "deep dive" cards explaining mechanisms and clinical correlates, 6 cross-pathway integrations, a 15–19-item Big Picture summary, and 15 difficulty-graded quiz questions with spaced-repetition scheduling.

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build
```

## Deploy to Vercel

Push to GitHub, import at vercel.com/new (auto-detects Vite framework).
Or drag the `dist/` folder for a one-shot deploy.

```bash
git init
git add -A
git commit -m "Initial commit"
gh repo create cellular-pathways-app --public --source=. --remote=origin --push
# then go to vercel.com/new and import the repo
```

---

## How to use the app

The app exposes the same five-tab learning loop as `biochem-app`, tuned for signaling pathways:

1. **Explore** — interactive map of the pathway. Click any node to see its hint, what activates it, what it acts on, and any clinical correlate.
2. **Integration** — how this pathway crosstalks with others (e.g. RTK → cyclin D → Cell Cycle, or p53 → BAX → Apoptosis).
3. **Test** — SRS-scheduled multiple-choice questions. Cards you fail come back sooner; cards you ace get spaced further out.
4. **Recall** — drag-and-drop active recall mode. The map is rendered with 4–6 random nodes occluded as `?`. You drag the right name onto each `?`. Wrong drops shake and stay in the heap; correct drops snap with a check mark.
5. **Big Picture** — distilled summary table of the highest-yield facts.
6. **Deep Dive** — long-form pedagogy cards explaining the "why" behind the diagram. Read these once per pathway after your first Explore pass.

**Suggested learning loop per pathway:**
- First pass: read **Overview**, walk through **Explore** clicking each node.
- Second pass: read **Deep Dive** cards (4 per pathway).
- Third pass: do **Recall** until ≥ 90% accuracy on a round.
- Fourth pass: do **Test** until SRS schedules everything > 7 days out.
- Final review: **Big Picture** before exam.

---

## Adding a new pathway

Each pathway = one JS file in `src/cycles/`. Copy any existing pathway as your template (`gpcr.js` is a good baseline because it has all the layers — pedagogy, clinical, drugs, integrations, big-picture, questions). Key structure:

```js
export const myPathway = {
  id, chapter, chapterOrder, order,
  layout: 'pathway',                    // tells the renderer to use PathwayDiagram
  title: { en, he }, subtitle: { en },
  context: { tissue, state, stateHormonal, turnover },
  overview: { en },
  pedagogy: [{ title, icon, body }],   // 4 deep-dive cards
  mnemonic: { en: { phrase, breakdown } },
  pathway: {
    viewBox: [0, 0, 1100, 880],
    nodes: [{
      id, label, sublabel, x, y,
      type: 'ligand'|'receptor'|'adapter'|'gprotein'|'enzyme'|
            'messenger'|'effector'|'modifier'|'phase'|'output',
      hint: '...',                      // shown on click
      clinical: { disorder, findings, treatment },
      drugs: ['...']                    // optional drug list shown on click
    }],
    edges: [{ from, to, label, style: 'activate'|'inhibit' }]
  },
  integrations: [{ name, toCycle, path: { en }, note: { en } }],
  bigPicture: { en: [{ k, v }] },
  questions: [{ id, difficulty, prompt: { en }, correct, options }]
};
```

### Workflow

1. `cp src/cycles/gpcr.js src/cycles/my-pathway.js`
2. Fill in fields. Each node `type` controls visual styling — see the legend in `src/components/PathwayDiagram.jsx`.
3. Register in `src/cycles/index.js`:
   ```js
   import { myPathway } from './my-pathway.js';
   export const ALL_CYCLES = [..., myPathway];
   ```
4. Add a chapter entry to `CHAPTERS` and the `chapterMap` if it's a new topic area.
5. Commit, push — Vercel auto-deploys.

---

## Project structure

```
cellular-pathways-app/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
├── public/favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx                     # 3-column layout, tabs, view switching
    ├── index.css                   # OKLCH design tokens (shared with biochem-app)
    ├── srs.js                      # SM-2 + localStorage per pathway
    ├── cycles/
    │   ├── index.js                # registry + chapter grouping
    │   ├── gpcr.js
    │   ├── rtk.js
    │   ├── cell-cycle.js
    │   ├── junctions.js
    │   └── apoptosis.js
    └── components/
        ├── PathwayDiagram.jsx      # NEW — multi-tier branching SVG
        ├── ActiveRecall.jsx        # drag-drop recall (extended for 'pathway' layout)
        ├── NetworkDiagram.jsx      # 3-tier hub→enzyme→end (kept for compatibility)
        ├── CycleDiagram.jsx        # circular/linear (kept for compatibility)
        ├── IntegrationView.jsx     # cross-pathway connections tab
        ├── Quiz.jsx                # SRS MCQ
        └── Molecule.jsx            # SMILES renderer (unused here, kept for parity)
```

**Architectural note:** signaling pathways have deeper cascades (RTK → Ras → Raf → MEK → ERK is 5 tiers) than the existing `NetworkDiagram` (3 tiers: hub→enzyme→end). So we added a new `PathwayDiagram` that handles arbitrary node positions and labeled edges, with an `'inhibit'` edge style for negative regulation (Bcl-2 ⊣ BAX, p21 ⊣ CDK4/6, Gαi ⊣ AC). All other infrastructure — design tokens, SRS, App layout, ActiveRecall drag-drop, Quiz, IntegrationView — is reused **verbatim** from `biochem-app`.

---

## Memory techniques mapped to features

| Technique | Where it lives |
|---|---|
| Spaced repetition (SM-2) | `srs.js` → Test tab |
| Active recall | `ActiveRecall.jsx` → Recall tab (drag-drop occluded nodes) |
| Dual coding | Diagram + Hint Card side-by-side |
| Desirable difficulty | 4–6 random nodes occluded each round; failures prioritized for next round |
| Elaborative interrogation | Hint cards force "why" with mechanism + clinical correlate |
| Chunking | Big Picture + Integration synthesis views |
| Interleaving | Quiz mixes mechanism / clinical / drug / pathology questions |
| Progressive disclosure | Click-to-reveal node detail; pedagogy as separate tab |

---

## Pedagogy density per pathway

Each pathway file contains ~700–900 lines of deeply researched, exam-realistic content:

- **GPCR**: HAVe-1-M&M coupling mnemonic, full G-protein cycle, second-messenger amplification logic, ~12 drug classes mapped to receptors (β-blockers, α-blockers, opioids, anticholinergics, antipsychotics, anti-emetics).
- **RTK**: dimerization master switch, Ras/MAPK proliferation arm with KRAS/BRAF/NF1, PI3K/Akt survival arm with PTEN/Cowden, insulin receptor with IRS-1 and GLUT4.
- **Cell Cycle**: cyclin-CDK ladder logic, Rb/E2F restriction-point switch with retinoblastoma + HPV E7 + CDKN2A loss, p53 guardian with MDM2 + Li-Fraumeni, three checkpoints with chemo drug classes.
- **Junctions**: 5 junction types with cytoskeletal-link mnemonic, cadherin/integrin/Ca²⁺ rule with platelet integrins + LAD-1, ECM 4 pillars with collagen types + scurvy, clinical syndromes by junction defect (pemphigus, pemphigoid, EB, Ehlers-Danlos, Marfan, Alport, Goodpasture).
- **Apoptosis**: apoptosis vs necrosis, Bcl-2 family rheostat with BH3 mimetics, caspase cascade with initiator vs executioner, clinical applications (follicular lymphoma t(14;18), ALPS, HIV, glucocorticoids in lymphoma, granzyme B).

---

## Credits

Built using the proven design system, SRS scheduler, and component infrastructure from `biochem-app`. The new `PathwayDiagram` component and the five pathway data files are the additions specific to this project.
