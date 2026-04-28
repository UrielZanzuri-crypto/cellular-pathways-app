// ============================================================
// GPCR SIGNALING — Gs · Gi · Gq pathways and second messengers
// Layout: 'pathway' (multi-tier branching cascade)
// ============================================================

export const gpcrCycle = {
  id: 'gpcr',
  chapter: 'GPCR Signaling',
  chapterOrder: 1,
  order: 1,
  layout: 'pathway',
  title: { en: 'GPCR Signaling', he: 'איתות GPCR' },
  subtitle: { en: 'Seven-transmembrane receptors → Gs / Gi / Gq → cAMP, IP₃, DAG, Ca²⁺' },

  context: {
    tissue: { en: 'Universal — every cell uses GPCRs. Most heavily studied in heart, vascular smooth muscle, hepatocytes, and neurons.' },
    state: { en: 'Active continuously. Different GPCRs gate distinct outputs: lipolysis (β-adrenergic), contraction (α1, M3), heart-rate slowing (M2), satiety, vision, smell.' },
    stateHormonal: { en: 'GPCRs are the receptors for many peptide hormones (glucagon, ADH, PTH, TSH, ACTH), most catecholamines, and most neurotransmitters.' },
    turnover: { en: 'Seconds. β-arrestin desensitizes receptors within seconds of activation; phosphodiesterases break down cAMP within seconds.' }
  },

  overview: {
    en: `GPCRs (G-protein-coupled receptors) are seven-transmembrane (7-TM) receptors that span the plasma membrane and are coupled on the cytoplasmic side to a heterotrimeric G-protein (α + β + γ subunits). Ligand binding causes a conformational change that lets the α-subunit exchange GDP for GTP — the α-subunit then dissociates from βγ and acts on a downstream effector enzyme. There are three exam-relevant α-subunit classes: Gαs (stimulates adenylate cyclase → ↑cAMP → activates PKA), Gαi (inhibits adenylate cyclase → ↓cAMP → less PKA), and Gαq (activates phospholipase C-β → cleaves PIP₂ into IP₃ + DAG → IP₃ opens ER Ca²⁺ channels, DAG plus Ca²⁺ activates PKC). The α-subunit has intrinsic GTPase activity, which slowly hydrolyzes its bound GTP back to GDP — that re-associates the trimer and turns the signal off. β-arrestin terminates the signal even faster by binding phosphorylated GPCRs (after GRK has marked them) and uncoupling them from the G-protein. Total stoichiometry is amplification: one ligand binding event → one active receptor → many active α-subunits → many cAMP molecules → many active PKA tetramers → thousands of phosphorylated targets. Drug relevance is enormous — about a third of all FDA-approved drugs hit GPCRs (β-blockers, α-blockers, opioids, antihistamines, antipsychotics, anti-emetics).`
  },

  // ============================================================
  // PEDAGOGY — high-yield deep dives explaining the "why"
  // ============================================================
  pedagogy: [
    {
      title: 'Why three G-protein classes? The logic of Gs, Gi, Gq',
      icon: '🧠',
      body: `The body needs a way to turn many DIFFERENT cellular outputs on and off using the same family of receptors. Evolution\'s answer: have the receptor couple to ONE of three "switchboards" (α-subunit classes), each wired to a different effector enzyme.

**Gαs ("s" = stimulate)** activates **adenylate cyclase** → cAMP rises → PKA activates. Used by β-adrenergic receptors (sympathetic "fight or flight": ↑heart rate, lipolysis, glycogenolysis), glucagon receptor (liver glucose output), ADH V2 (water reabsorption, kidney), TSH, ACTH, PTH.

**Gαi ("i" = inhibit)** **inhibits** adenylate cyclase → cAMP falls → PKA activity falls. Used by α2-adrenergic (presynaptic noradrenaline auto-inhibition), M2 muscarinic (parasympathetic ↓heart rate), opioid receptors (μ, δ, κ — analgesia by reducing neuronal excitability), D2 dopamine (antipsychotic target).

**Gαq ("q" = quaff Ca²⁺")** activates **phospholipase C-β** → cleaves PIP₂ into IP₃ (releases Ca²⁺ from ER) + DAG (activates PKC). Used by α1-adrenergic (vasoconstriction), M1/M3 muscarinic (smooth-muscle contraction, gland secretion), H1 histamine (allergy), V1 vasopressin, AT1 angiotensin, oxytocin.

**Mnemonic for what couples to what:**
- "**HAV**e **1** **M**&**M**" → α**1**, **M**1, **M**3, **H**1, **A**T1, **V**1 → all **Gq**
- α**2**, **M**2, **D**2 → all **Gi**
- everything else → **Gs** (β1, β2, V2, glucagon, ACTH, TSH, PTH...)

The number "2" in α2/M2/D2 = "Gi" (the second one alphabetically after Gs). The "1" in M1/M3/H1/AT1/V1/α1 = "**G**q" (third class).`
    },
    {
      title: 'The G-protein cycle in molecular detail',
      icon: '🔄',
      body: `When NO ligand is bound, the heterotrimer (Gα-GDP + Gβγ) sits passively on the inner leaflet of the membrane, attached to the resting GPCR.

**Step 1 — Activation (sub-second).** Ligand binds the extracellular face → the receptor undergoes a conformational change that exposes a cytoplasmic pocket → that pocket inserts into Gα and acts as a **guanine-nucleotide exchange factor (GEF)** → GDP falls off, GTP loads on (GTP is ~10× more abundant than GDP in cells, so the exchange is one-way kinetically).

**Step 2 — Dissociation.** GTP-loaded Gα changes shape and lets go of Gβγ. Now there are TWO active signaling units: free Gα-GTP and free Gβγ. Both can act on downstream effectors. Gα is the major output (acts on AC or PLC); Gβγ also has its own outputs (e.g., opens K⁺ channels in cardiac muscle — this is how M2 stimulation slows the heart).

**Step 3 — Hydrolysis (seconds).** Gα has slow intrinsic GTPase activity. After ~10–30 seconds it hydrolyzes its GTP → GDP + Pi → Gα-GDP shape change → Gα re-associates with Gβγ → the signal is off until another ligand binds. RGS proteins ("regulators of G-protein signaling") accelerate this hydrolysis — they\'re GAPs (GTPase-activating proteins) for Gα.

**Step 4 — Receptor desensitization (seconds–minutes).** While the GPCR is still ligand-occupied, **GRK** (G-protein receptor kinase) phosphorylates its cytoplasmic tail. Phosphorylated GPCR recruits **β-arrestin**, which physically blocks further G-protein coupling AND triggers receptor internalization into clathrin-coated vesicles. The receptor is then either dephosphorylated and recycled, or degraded — the basis of tachyphylaxis (drug tolerance).

**Cholera toxin** ADP-ribosylates Gαs and locks it in the GTP-bound state → constitutive cAMP → relentless Cl⁻/H₂O secretion in the gut → secretory diarrhea. **Pertussis toxin** ADP-ribosylates Gαi and prevents it from exchanging GDP for GTP → loss of inhibition → unopposed Gs in the airway → whooping cough physiology.`
    },
    {
      title: 'How second messengers amplify the signal',
      icon: '📈',
      body: `Why bother with second messengers at all? Why not have the receptor act directly on the target enzyme?

**Answer: amplification + spatial spread + integration.**

**Amplification.** Each step is catalytic: one ligand-bound GPCR can activate many G-proteins (estimated 5–10/second while occupied); each Gαs activates one adenylate cyclase that then produces hundreds of cAMP molecules; each cAMP-activated PKA phosphorylates dozens of target proteins. End result: one ligand event → 10⁵–10⁶ phosphorylated downstream proteins. This is how a tiny concentration of hormone (nM) drives a huge cellular response.

**Spatial spread.** Diffusible second messengers (cAMP, IP₃, Ca²⁺) carry the signal through the cytoplasm to remote effectors. cAMP diffuses to PKA; IP₃ diffuses to ER receptors; Ca²⁺ diffuses to calmodulin, troponin, etc. DAG is the exception — it stays in the membrane (it\'s lipid) and recruits PKC there.

**Integration.** Multiple receptors converging on the same second messenger let the cell add (or subtract) signals. β-adrenergic Gs (↑cAMP) and α2-adrenergic Gi (↓cAMP) push the same cAMP pool in opposite directions — net cAMP = balance of all inputs. This is how the heart rate is fine-tuned by sympathetic + parasympathetic tone simultaneously.

**Key second messengers and their off-switches:**
- **cAMP** → broken down by phosphodiesterases (PDEs). **Caffeine** and **theophylline** inhibit PDE → ↑cAMP. **Sildenafil/tadalafil** inhibit PDE5 specifically (cGMP not cAMP, but same principle) → erections / pulmonary vasodilation.
- **IP₃** → dephosphorylated by inositol phosphatases (the target of **lithium** in bipolar — depletes inositol).
- **Ca²⁺** → pumped back into ER (SERCA) or out of cell (PMCA, Na/Ca exchanger). The local rise is brief (ms–s).
- **DAG** → cleaved by DAG lipase or phosphorylated by DAG kinase.`
    },
    {
      title: 'Clinical pharmacology — drugs that target this pathway',
      icon: '💊',
      body: `GPCRs are the single largest drug-target family. Roughly **30–35% of all FDA-approved drugs** hit a GPCR.

**β-blockers (β1 antagonists):** metoprolol, atenolol, bisoprolol, carvedilol. Block β1 in heart → ↓cAMP → ↓HR, ↓contractility, ↓renin. Used for HTN, HF, angina, post-MI, SVT.

**α1-blockers:** prazosin, terazosin, doxazosin, tamsulosin. Block Gq in vascular and prostatic smooth muscle → vasodilation, prostatic relaxation. Used for HTN, BPH, PTSD nightmares (prazosin).

**α2-agonists:** clonidine, methyldopa. Activate Gi presynaptically → ↓NE release. Used for HTN (centrally acting), ADHD, opioid withdrawal, methyldopa for HTN in pregnancy.

**Muscarinic antagonists ("anticholinergics"):** atropine, ipratropium, glycopyrrolate, oxybutynin. Block Gq M3 in airway/bladder/gut → bronchodilation, urinary retention, constipation, dry mouth. Atropine for bradycardia (blocks M2 in heart).

**Opioid agonists:** morphine, fentanyl, oxycodone. Activate μ-opioid (Gi) → ↓cAMP, opens K⁺ channels → hyperpolarization → ↓pain transmission.

**Antihistamines (H1 blockers):** diphenhydramine, loratadine, cetirizine. Block H1 (Gq) → ↓capillary permeability, ↓pruritus.

**Antipsychotics (D2 blockers):** haloperidol, risperidone, olanzapine. Block D2 (Gi) in mesolimbic pathway → ↓positive symptoms of schizophrenia.

**Anti-emetics (5-HT3 / D2 / NK1 blockers):** ondansetron (5-HT3 — actually a ligand-gated ion channel, not GPCR), prochlorperazine (D2), aprepitant (NK1, GPCR). Block emetic receptors in chemoreceptor trigger zone.

**Sumatriptan (5-HT1B/D agonist):** activates serotonin receptors (Gi) on cranial vessels and trigeminal nerve → vasoconstriction + ↓CGRP release → aborts migraine.`
    }
  ],

  mnemonic: {
    en: { phrase: '"HAVe 1 M&M" couple Gq · Numbers 2 (α2, M2, D2) couple Gi · everything else couples Gs', breakdown: 'HAVe 1 M&M = α1, V1, AT1, H1, M1, M3 → Gq · α2, M2, D2 → Gi · β1, β2, V2, glucagon, ACTH, TSH, PTH → Gs' }
  },

  compartments: {
    cyto: { en: 'Cytoplasm', he: 'ציטופלסמה', color: '#dbeafe', accent: '#3b82f6' }
  },

  // ============================================================
  // PATHWAY MAP — multi-tier branching flowchart.
  // Tiers (top → bottom): ligand → receptor → G-protein → effector enzyme →
  // 2nd messenger → kinase/effector → cellular response.
  // ============================================================
  pathway: {
    viewBox: [0, 0, 1100, 880],
    nodes: [
      // Tier 1 — ligand
      { id: 'ligand', label: 'Ligand', sublabel: 'hormone / neurotransmitter', x: 550, y: 60, type: 'ligand',
        memory: { glyph: '📨', char: 'Messenger' },
        hint: 'First messenger. Hydrophilic peptides and catecholamines cannot cross the lipid bilayer — they must signal through a surface receptor. Examples: epinephrine (β-adrenergic), glucagon (Gs), acetylcholine (M1-M5), histamine, vasopressin.' },

      // Tier 2 — receptor
      { id: 'gpcr', label: 'GPCR', sublabel: '7-transmembrane', x: 550, y: 175, type: 'receptor',
        memory: { glyph: '📡', char: '7-tower antenna' },
        hint: 'Seven α-helices crossing the membrane. Ligand binds the extracellular face → conformational change exposes a cytoplasmic pocket that acts as a GEF on the heterotrimeric G-protein, exchanging GDP → GTP on the α-subunit.',
        clinical: { disorder: 'Cholera toxin', findings: { en: 'ADP-ribosylates Gαs and locks it in the GTP-bound state → constitutive cAMP in intestinal epithelium → massive Cl⁻/H₂O secretion → rice-water diarrhea.' }, treatment: { en: 'Aggressive oral rehydration with WHO ORS solution (glucose + Na drives co-transport).' } } },

      // Tier 3 — three α-subunit classes
      { id: 'gs', label: 'Gαs', sublabel: 'stimulatory', x: 200, y: 295, type: 'gprotein',
        memory: { glyph: '🟢', char: 'Green light' },
        hint: 'Stimulatory α-subunit. Activates adenylate cyclase. Coupled by β1, β2, β3, V2, D1, glucagon, TSH, ACTH, PTH, calcitonin.',
        drugs: ['β-agonists (albuterol)', 'glucagon', 'forskolin (research)'] },
      { id: 'gi', label: 'Gαi', sublabel: 'inhibitory', x: 550, y: 295, type: 'gprotein',
        memory: { glyph: '🛑', char: 'Red light' },
        hint: 'Inhibitory α-subunit. Inhibits adenylate cyclase. Coupled by α2-adrenergic, M2 muscarinic, μ/δ/κ opioid, D2 dopamine, somatostatin, 5-HT1.',
        clinical: { disorder: 'Pertussis toxin', findings: { en: 'ADP-ribosylates Gαi and prevents GDP→GTP exchange → loss of inhibitory tone → exaggerated Gs activity → whooping cough physiology, lymphocytosis.' } } },
      { id: 'gq', label: 'Gαq', sublabel: 'PLC pathway', x: 900, y: 295, type: 'gprotein',
        memory: { glyph: '💧', char: 'Water-splitter' },
        hint: 'Activates phospholipase C-β. Coupled by α1-adrenergic, M1/M3 muscarinic, H1 histamine, V1 vasopressin, AT1 angiotensin, oxytocin, 5-HT2.' },

      // Tier 4 — effector enzymes
      { id: 'ac_pos', label: 'Adenylate Cyclase', sublabel: 'activated', x: 200, y: 415, type: 'enzyme',
        memory: { glyph: '☕', char: 'cAMP brewer' },
        hint: 'Membrane-bound enzyme. Converts ATP → cAMP + PPi. Activated by Gαs and by forskolin (research tool). Inhibited by Gαi.',
        drugs: ['caffeine (PDE inhibitor — keeps cAMP up)', 'theophylline'] },
      { id: 'ac_neg', label: 'Adenylate Cyclase', sublabel: 'inhibited', x: 550, y: 415, type: 'enzyme',
        memory: { glyph: '🚫', char: 'Brewer paused' },
        hint: 'Same enzyme — but now suppressed by Gαi binding. Net result: less cAMP, less PKA, opposite of whatever Gs would have driven (e.g. M2 in heart slows the rate by inhibiting Gs-driven cAMP).' },
      { id: 'plc', label: 'Phospholipase C-β', sublabel: 'cleaves PIP₂', x: 900, y: 415, type: 'enzyme',
        memory: { glyph: '🪓', char: 'PIP₂ chopper' },
        hint: 'Cleaves membrane PIP₂ into TWO second messengers in one step: IP₃ (water-soluble, diffuses to ER) and DAG (lipid-soluble, stays in membrane). Both signals are essential for the Gq response.' },

      // Tier 5 — second messengers
      { id: 'camp_hi', label: 'cAMP ↑', sublabel: 'second messenger', x: 110, y: 540, type: 'messenger',
        memory: { glyph: '⚡', char: 'Charged-up cAMP' },
        hint: 'Cyclic AMP. Made from ATP by adenylate cyclase, broken down by phosphodiesterases (PDEs). Caffeine inhibits PDE → cAMP stays high → more lipolysis, more alertness. Sildenafil inhibits PDE5 specifically (cGMP, not cAMP, but same principle).' },
      { id: 'camp_lo', label: 'cAMP ↓', sublabel: 'less PKA activity', x: 410, y: 540, type: 'messenger',
        memory: { glyph: '🪫', char: 'Drained cAMP' },
        hint: 'When Gαi is active, cAMP falls. Less cAMP means less PKA activity — opposite of Gs-driven outputs. Why M2 muscarinic stimulation slows the heart, why α2 reduces NE release, why opioids reduce neuronal excitability.' },
      { id: 'ip3', label: 'IP₃', sublabel: 'inositol-1,4,5-trisP', x: 800, y: 540, type: 'messenger',
        memory: { glyph: '🔓', char: 'ER Ca²⁺ key' },
        hint: 'Diffuses through cytoplasm to the SMOOTH ER and opens IP₃-receptor Ca²⁺ channels in the ER membrane → cytosolic Ca²⁺ rises 100×. Lithium inhibits inositol monophosphatase, depleting myo-inositol — proposed mechanism for its mood-stabilizing action in bipolar disorder.' },
      { id: 'dag', label: 'DAG', sublabel: 'diacylglycerol', x: 1000, y: 540, type: 'messenger',
        memory: { glyph: '🪝', char: 'Membrane hook' },
        hint: 'Stays in the membrane (it\'s a lipid). Together with Ca²⁺, recruits and activates Protein Kinase C (PKC) at the membrane.' },

      // Tier 6 — kinases / effectors
      { id: 'pka', label: 'PKA', sublabel: 'Protein Kinase A', x: 110, y: 670, type: 'effector',
        memory: { glyph: '✏️', char: 'Master phosphorylator' },
        hint: 'Tetramer of 2 regulatory + 2 catalytic subunits. cAMP binds the regulatory subunits → catalytic subunits dissociate and become active. Phosphorylates Ser/Thr on hundreds of targets — CREB (transcription), glycogen phosphorylase kinase, hormone-sensitive lipase, troponin I, myosin light chain phosphatase.' },
      { id: 'ca', label: 'Ca²⁺ release', sublabel: 'from ER', x: 800, y: 670, type: 'effector',
        memory: { glyph: '🌊', char: 'Calcium tide' },
        hint: 'Cytosolic Ca²⁺ rises sharply (~100 nM → ~1 µM). Acts as a "third messenger" — binds calmodulin (CaM-kinases), troponin C (cardiac/skeletal contraction), calcineurin (T-cell activation, target of cyclosporine/tacrolimus).' },
      { id: 'pkc', label: 'PKC', sublabel: 'Protein Kinase C', x: 1000, y: 670, type: 'effector',
        memory: { glyph: '🔧', char: 'Membrane wrench' },
        hint: 'Activated by DAG + Ca²⁺ (classical PKCs need both). Phosphorylates targets driving smooth-muscle contraction, secretion, growth, transcription. Some isoforms are oncogenic when persistently active (phorbol esters mimic DAG and are tumor promoters).' },

      // Tier 7 — output
      { id: 'response', label: 'Cellular Response', sublabel: 'transcription · contraction · secretion · metabolism', x: 550, y: 805, type: 'output',
        memory: { glyph: '🎯', char: 'Cell does the thing' },
        hint: 'The exact response depends on which cell type, which GPCR, and which downstream targets are present. β-adrenergic in heart → ↑rate, ↑contractility (PKA phosphorylates L-type Ca channels and phospholamban). α1 in vessels → vasoconstriction (PKC + Ca²⁺ drive myosin light-chain phosphorylation). M3 in salivary gland → secretion. Gαq in liver → glycogenolysis (Ca²⁺ activates phosphorylase kinase).' }
    ],
    edges: [
      { from: 'ligand', to: 'gpcr', label: 'binds', style: 'activate' },
      { from: 'gpcr', to: 'gs', label: 'GDP→GTP', style: 'activate' },
      { from: 'gpcr', to: 'gi', label: 'GDP→GTP', style: 'activate' },
      { from: 'gpcr', to: 'gq', label: 'GDP→GTP', style: 'activate' },
      { from: 'gs', to: 'ac_pos', label: '+ activates', style: 'activate' },
      { from: 'gi', to: 'ac_neg', label: '− inhibits', style: 'inhibit' },
      { from: 'gq', to: 'plc', label: '+ activates', style: 'activate' },
      { from: 'ac_pos', to: 'camp_hi', label: 'ATP → cAMP', style: 'activate' },
      { from: 'ac_neg', to: 'camp_lo', label: 'less cAMP', style: 'activate' },
      { from: 'plc', to: 'ip3', label: 'cleaves PIP₂', style: 'activate' },
      { from: 'plc', to: 'dag', label: 'cleaves PIP₂', style: 'activate' },
      { from: 'camp_hi', to: 'pka', label: 'binds regul. subunit', style: 'activate' },
      { from: 'ip3', to: 'ca', label: 'opens ER channel', style: 'activate' },
      { from: 'dag', to: 'pkc', label: 'with Ca²⁺', style: 'activate' },
      { from: 'pka', to: 'response', label: 'phosphorylates', style: 'activate' },
      { from: 'ca', to: 'response', label: 'binds CaM', style: 'activate' },
      { from: 'pkc', to: 'response', label: 'phosphorylates', style: 'activate' }
    ]
  },

  // ============================================================
  // INTEGRATIONS — how this pathway connects to others
  // ============================================================
  integrations: [
    {
      name: 'cAMP → glycogen breakdown (liver/muscle)',
      toCycle: 'Glycogen metabolism',
      path: { en: 'Glucagon (liver) or epinephrine (muscle) → Gs → ↑cAMP → PKA → phosphorylates phosphorylase kinase → activates glycogen phosphorylase → glycogenolysis. Same PKA also phosphorylates glycogen synthase, INHIBITING it. So one signal coordinates "break down" + "stop building".' },
      note: { en: 'Coordination by phosphorylation — single PKA event flips both arms of glycogen metabolism in opposite directions. Classic exam wiring.' }
    },
    {
      name: 'cAMP → CREB → transcription',
      toCycle: 'Gene expression',
      path: { en: 'PKA enters the nucleus → phosphorylates CREB (cAMP-response element-binding protein) on Ser-133 → recruits CBP/p300 → activates transcription of cAMP-response-element (CRE) genes including PEPCK (gluconeogenesis), tyrosine hydroxylase (catecholamine synthesis), somatostatin.' },
      note: { en: 'Why a hormone signal (seconds) can reshape protein expression for hours.' }
    },
    {
      name: 'IP₃ / Ca²⁺ → smooth-muscle contraction',
      toCycle: 'Vascular tone / contraction',
      path: { en: 'α1 / AT1 / V1 → Gq → PLC → IP₃ → ER Ca²⁺ release → Ca²⁺-calmodulin → myosin light-chain kinase (MLCK) → phosphorylates myosin → cross-bridge cycling → vasoconstriction. PKA can phosphorylate MLCK and INACTIVATE it (β-adrenergic relaxation).' },
      note: { en: 'Why α1-blockers (prazosin) drop BP, why β-agonists (albuterol) bronchodilate.' }
    },
    {
      name: 'β-adrenergic in heart',
      toCycle: 'Cardiac physiology',
      path: { en: 'Sympathetic NE → β1 → Gs → ↑cAMP → PKA → phosphorylates L-type Ca channels (more Ca enters) + phospholamban (faster SERCA, faster relaxation) + troponin I. Net: ↑rate (chronotropy), ↑force (inotropy), ↑relaxation (lusitropy).' },
      note: { en: 'Why β-blockers reduce cardiac work in HF, post-MI, and angina.' }
    },
    {
      name: 'Gαi in CNS — opioid analgesia',
      toCycle: 'Pain neurotransmission',
      path: { en: 'μ-opioid agonists → Gi → ↓cAMP + Gβγ opens K⁺ channels + closes Ca²⁺ channels → presynaptic ↓neurotransmitter release + postsynaptic hyperpolarization → ↓pain transmission in dorsal horn.' },
      note: { en: 'Tolerance develops via β-arrestin-mediated receptor internalization and downstream cAMP rebound (upregulation of AC).' }
    },
    {
      name: 'GPCR ↔ RTK crosstalk',
      toCycle: 'Receptor Tyrosine Kinases',
      path: { en: 'GPCRs can transactivate RTKs through several routes — βγ-recruitment of Src, matrix-metalloprotease cleavage of pro-EGF, and direct PKC-mediated phosphorylation. This is one route by which growth-factor signaling is layered on top of acute hormonal signaling.' },
      note: { en: 'Explains why some GPCR agonists drive cell growth in addition to acute physiology.' }
    }
  ],

  bigPicture: {
    en: [
      { k: 'Three α-subunit classes', v: 'Gs activates AC (↑cAMP). Gi inhibits AC (↓cAMP). Gq activates PLC (→ IP₃ + DAG).' },
      { k: 'Mnemonic for coupling', v: '"HAVe 1 M&M" → α1, V1, AT1, H1, M1, M3 = Gq.  α2, M2, D2 = Gi.  Everything else = Gs (β1, β2, V2, glucagon, PTH, TSH, ACTH).' },
      { k: 'cAMP downstream', v: 'cAMP → PKA → phosphorylates Ser/Thr on CREB, glycogen phosphorylase kinase, hormone-sensitive lipase, troponin I.' },
      { k: 'IP₃ downstream', v: 'IP₃ → opens IP₃-R Ca²⁺ channel in ER → cytosolic Ca²⁺ ↑ → CaM-kinase, MLCK, calcineurin.' },
      { k: 'DAG downstream', v: 'DAG (with Ca²⁺) → PKC → phosphorylates targets driving contraction, secretion, growth.' },
      { k: 'Off-switches', v: 'Intrinsic Gα GTPase (10–30 s). RGS proteins accelerate. β-arrestin desensitizes receptor (s). PDEs break down cAMP. SERCA pumps Ca²⁺ back into ER.' },
      { k: 'Cholera toxin', v: 'ADP-ribosylates Gαs → locked-on → constitutive cAMP → secretory diarrhea (Vibrio cholerae).' },
      { k: 'Pertussis toxin', v: 'ADP-ribosylates Gαi → can\'t activate → loss of inhibition → exaggerated Gs (Bordetella pertussis, whooping cough, lymphocytosis).' },
      { k: 'β-blockers', v: 'Block β1 → ↓cAMP in heart → ↓rate, ↓contractility, ↓renin. Used for HTN, HF, angina, post-MI.' },
      { k: 'α1-blockers', v: 'Block Gq in vessels → vasodilation. Prazosin, terazosin, doxazosin, tamsulosin (α1A in prostate).' },
      { k: 'Muscarinic M2', v: 'Gi in heart → ↓cAMP → ↓rate. Atropine blocks M2 → useful for symptomatic bradycardia.' },
      { k: 'Muscarinic M3', v: 'Gq in airway/bladder/gut. Ipratropium (M3 antagonist) → bronchodilation.' },
      { k: 'Opioids (μ, δ, κ)', v: 'Gi → ↓cAMP + ↑K⁺ + ↓Ca²⁺ → ↓neuronal excitability → analgesia.' },
      { k: 'Sildenafil', v: 'PDE5 inhibitor → ↑cGMP (NO pathway, parallel) → smooth-muscle relaxation in penile/pulmonary vasculature.' },
      { k: 'Caffeine', v: 'Non-selective PDE inhibitor → cAMP stays high → ↑lipolysis, ↑alertness, mild bronchodilation.' },
      { k: 'Lithium', v: 'Inhibits inositol monophosphatase → depletes myo-inositol → blunts IP₃ signaling → mood stabilization in bipolar.' }
    ]
  },

  questions: [
    { id: 'gpcr-q1', difficulty: 'easy', prompt: { en: 'Which α-subunit activates adenylate cyclase?' }, correct: 'Gαs', options: ['Gαs', 'Gαi', 'Gαq', 'Gβγ'] },
    { id: 'gpcr-q2', difficulty: 'easy', prompt: { en: 'Which α-subunit activates phospholipase C-β?' }, correct: 'Gαq', options: ['Gαs', 'Gαi', 'Gαq', 'Gαt'] },
    { id: 'gpcr-q3', difficulty: 'medium', prompt: { en: 'PIP₂ is cleaved into:' }, correct: 'IP₃ + DAG', options: ['IP₃ + DAG', 'cAMP + AMP', 'PIP₃ + glycerol', 'IP₂ + arachidonic acid'] },
    { id: 'gpcr-q4', difficulty: 'medium', prompt: { en: 'IP₃ acts on:' }, correct: 'Ca²⁺ channels in the smooth ER', options: ['Ca²⁺ channels in the smooth ER', 'PKA in the cytosol', 'Voltage-gated Na⁺ channels', 'Mitochondrial outer membrane'] },
    { id: 'gpcr-q5', difficulty: 'medium', prompt: { en: 'Cholera toxin produces watery diarrhea by:' }, correct: 'ADP-ribosylating Gαs and locking it in the GTP-bound state', options: ['ADP-ribosylating Gαs and locking it in the GTP-bound state', 'Inhibiting Gαi', 'Cleaving PIP₂ irreversibly', 'Blocking Cl⁻ channels'] },
    { id: 'gpcr-q6', difficulty: 'medium', prompt: { en: 'Pertussis toxin acts on:' }, correct: 'Gαi (prevents GDP→GTP exchange)', options: ['Gαi (prevents GDP→GTP exchange)', 'Gαs (locks in GTP form)', 'Gαq (uncouples from PLC)', 'β-arrestin'] },
    { id: 'gpcr-q7', difficulty: 'hard', prompt: { en: 'Which receptor classically couples to Gq?' }, correct: 'M3 muscarinic', options: ['M3 muscarinic', 'M2 muscarinic', 'β1 adrenergic', 'μ-opioid'] },
    { id: 'gpcr-q8', difficulty: 'hard', prompt: { en: 'PKA is activated by:' }, correct: 'cAMP binding the regulatory subunits, releasing the catalytic subunits', options: ['cAMP binding the regulatory subunits, releasing the catalytic subunits', 'Direct phosphorylation by Gαs', 'Calcium binding', 'Tyrosine autophosphorylation'] },
    { id: 'gpcr-q9', difficulty: 'medium', prompt: { en: 'Which drug inhibits phosphodiesterase, raising cAMP?' }, correct: 'Caffeine', options: ['Caffeine', 'Atropine', 'Prazosin', 'Sumatriptan'] },
    { id: 'gpcr-q10', difficulty: 'medium', prompt: { en: 'β-adrenergic stimulation in the heart leads to:' }, correct: 'Increased cAMP, PKA-mediated phosphorylation of L-type Ca channels and phospholamban → ↑rate and ↑contractility', options: ['Increased cAMP, PKA-mediated phosphorylation of L-type Ca channels and phospholamban → ↑rate and ↑contractility', 'Decreased cAMP and slowing of the heart', 'Activation of phospholipase C', 'Direct opening of K⁺ channels'] },
    { id: 'gpcr-q11', difficulty: 'hard', prompt: { en: 'M2 muscarinic stimulation slows the heart by:' }, correct: 'Gαi-mediated ↓cAMP and Gβγ opening of K⁺ channels', options: ['Gαi-mediated ↓cAMP and Gβγ opening of K⁺ channels', 'Gαq activation of phospholipase C', 'Direct activation of L-type Ca channels', 'Closing of T-type Ca channels via PKA'] },
    { id: 'gpcr-q12', difficulty: 'hard', prompt: { en: 'The off-switch for Gα signaling is:' }, correct: 'Intrinsic GTPase activity hydrolyzes GTP → GDP', options: ['Intrinsic GTPase activity hydrolyzes GTP → GDP', 'β-arrestin removes the α-subunit', 'Phosphodiesterase cleaves Gα', 'Calcium binds and inactivates'] },
    { id: 'gpcr-q13', difficulty: 'medium', prompt: { en: 'β-arrestin acts by:' }, correct: 'Binding phosphorylated GPCRs and uncoupling them from G-proteins, then internalizing them', options: ['Binding phosphorylated GPCRs and uncoupling them from G-proteins, then internalizing them', 'Hydrolyzing GTP on Gα', 'Cleaving cAMP', 'Activating PKA'] },
    { id: 'gpcr-q14', difficulty: 'hard', prompt: { en: 'Lithium\'s proposed mechanism in bipolar disorder is:' }, correct: 'Inhibition of inositol monophosphatase → depletion of myo-inositol → blunted IP₃ signaling', options: ['Inhibition of inositol monophosphatase → depletion of myo-inositol → blunted IP₃ signaling', 'Direct PKA inhibition', 'cAMP elevation in neurons', 'Blockade of D2 dopamine receptors'] },
    { id: 'gpcr-q15', difficulty: 'hard', prompt: { en: 'Which receptor uses Gαq?' }, correct: 'α1-adrenergic', options: ['α1-adrenergic', 'α2-adrenergic', 'β2-adrenergic', 'μ-opioid'] }
  ]
};
