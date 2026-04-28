// ============================================================
// RTK SIGNALING — receptor tyrosine kinases
// Layout: 'pathway' (multi-tier branching cascade)
// ============================================================

export const rtkCycle = {
  id: 'rtk',
  chapter: 'Receptor Tyrosine Kinases',
  chapterOrder: 2,
  order: 1,
  layout: 'pathway',
  title: { en: 'Receptor Tyrosine Kinases', he: 'קולטני טירוזין קינאז' },
  subtitle: { en: 'Dimerization · autophosphorylation · Ras/MAPK + PI3K/Akt' },

  context: {
    tissue: { en: 'Universal — every dividing cell uses RTK signaling. Especially dominant in epithelial growth, hematopoiesis, vascular endothelium, neuronal survival.' },
    state: { en: 'Active during growth, repair, immune response. Tightly suppressed in differentiated quiescent tissue. Constitutive activation = oncogenic transformation.' },
    stateHormonal: { en: 'Driven by polypeptide growth factors: EGF, PDGF, FGF, IGF-1, VEGF, NGF, insulin (insulin receptor is an RTK), HGF.' },
    turnover: { en: 'Activation → ERK in nucleus within minutes. Receptor itself is internalized within ~30 min and either recycled or degraded.' }
  },

  overview: {
    en: `Receptor Tyrosine Kinases (RTKs) are single-transmembrane growth-factor receptors with an extracellular ligand-binding domain and an intracellular tyrosine kinase domain. The signaling logic is: **(1) Ligand binding causes dimerization** — two receptor monomers come together, often in a 2:2 complex with a dimeric ligand. **(2) The two intracellular kinase domains trans-autophosphorylate** each other on multiple tyrosines, creating phosphotyrosine "docking sites." **(3) SH2-domain proteins bind those docking sites** and either become substrates themselves or recruit further effectors. **(4) Two major arms branch from there:** the **Ras/MAPK arm** (GRB2/SOS → Ras-GTP → Raf → MEK → ERK → nucleus → proliferation transcription factors) and the **PI3K/Akt arm** (PI3K → PIP₃ at the membrane → PDK1 + mTORC2 phosphorylate Akt → Akt blocks apoptosis and drives growth/translation via mTORC1). The Ras/MAPK arm typically pushes the cell into the cell cycle (proliferation); the PI3K/Akt arm typically pushes survival, anabolic metabolism, and protein synthesis. Together these are the most cancer-relevant signaling axes in human biology — Ras alone is mutated in ~30% of all cancers, EGFR is mutated/amplified in many lung adenocarcinomas, HER2 is amplified in ~20% of breast cancers, BRAF V600E drives most melanomas, and PI3K/PTEN/Akt mutations are pervasive across tumor types. Most modern targeted therapies (imatinib, trastuzumab, erlotinib, cetuximab, vemurafenib, trametinib) hit a node on this map.`
  },

  pedagogy: [
    {
      title: 'Why dimerization is the master switch',
      icon: '🔗',
      body: `RTKs solve a clever engineering problem: how to convert "ligand bound on the outside" into "kinase active on the inside" using a single transmembrane helix that can\'t propagate a complex conformational change.

**The trick: dimerize, then trans-phosphorylate.**

When a single RTK monomer sits in the membrane alone, its intracellular kinase domain is too far away from any substrate (and from any other kinase) to do meaningful chemistry. As soon as ligand binding pulls TWO monomers together, the kinase domains find themselves face-to-face. Each domain phosphorylates tyrosines on the OTHER monomer\'s C-terminal tail (this is "trans-autophosphorylation" — autophosphorylation of one monomer by its dimer partner).

**Why phospho-tyrosines specifically?** Because phospho-tyrosine creates a unique 3D recognition surface that **SH2 (Src-homology 2)** and **PTB** domains specifically bind. There are dozens of intracellular proteins that have SH2 domains, each tuned to a specific phospho-tyrosine context. So a single RTK can dock GRB2 (→ Ras pathway), PI3K-p85 (→ PIP₃ pathway), PLCγ (→ DAG/IP₃ — RTK can also use second messengers!), STAT proteins, and Src — at distinct phospho-tyrosines along the C-terminus. ONE receptor, MULTIPLE downstream branches, all controlled by which tyrosines were autophosphorylated.

**Clinical:** Many oncogenic RTK mutations work by forcing dimerization without ligand. **HER2 amplification** in breast cancer: too many HER2 receptors crowd each other in the membrane and dimerize spontaneously → constitutive growth signal. **EGFR exon 19 deletions** in lung cancer: the kinase domain is constitutively active even in monomeric form. **BCR-ABL fusion** in CML: the BCR portion drives constitutive dimerization of the ABL kinase. Targeted by **trastuzumab** (HER2 antibody), **erlotinib** (EGFR kinase inhibitor), **imatinib** (BCR-ABL kinase inhibitor) respectively.`
    },
    {
      title: 'The Ras/MAPK cascade — proliferation arm',
      icon: '⚙️',
      body: `Once GRB2 docks on the autophosphorylated RTK, it recruits SOS (a guanine-nucleotide exchange factor for Ras). SOS displaces Ras\'s bound GDP — and because cellular GTP is ~10× more abundant than GDP, GTP loads in. Ras-GTP is the active form.

**Ras-GTP** is the central switch. It\'s a small GTPase tethered to the inner leaflet of the membrane by a farnesyl group. When GTP-bound, its conformation creates a binding surface for **Raf** (a Ser/Thr kinase, also called MAP3K — "MAP kinase kinase kinase"). Raf is recruited to the membrane and activated.

From here it\'s a three-tier kinase cascade — the **MAP kinase pathway**:

**Raf (MAPKKK) → phosphorylates → MEK (MAPKK) → phosphorylates → ERK (MAPK)**

Each level amplifies. ERK (Extracellular-signal-Regulated Kinase) is the workhorse — it phosphorylates Ser/Thr residues on **transcription factors** like Elk-1, c-Myc, c-Fos, c-Jun, and on cytoplasmic targets like ribosomal S6 kinase. The net output: induction of **cyclin D**, which kicks the cell from G1 into S phase (see the Cell Cycle pathway).

**Cancer is everywhere in this cascade:**
- **KRAS G12D / G12V**: mutated codon-12 prevents GTP hydrolysis → Ras stuck on. Found in ~90% of pancreatic ductal adenocarcinoma, ~50% of colorectal cancer, ~30% of lung adenocarcinoma. Long considered "undruggable" — only recently has **sotorasib** (KRAS G12C inhibitor) emerged.
- **BRAF V600E**: mutated kinase domain stays active → MEK → ERK constitutively. ~50% of melanomas. Targeted by **vemurafenib / dabrafenib** (BRAF inhibitors), often combined with **trametinib** (MEK inhibitor).
- **NF1 loss of function**: NF1 is a Ras-GAP (turns Ras off). Lose it → Ras stays on. Causes neurofibromatosis type 1 (café-au-lait spots, neurofibromas, optic gliomas).`
    },
    {
      title: 'The PI3K/Akt cascade — survival arm',
      icon: '🛡️',
      body: `In parallel with the Ras arm, **PI3K** (phosphoinositide 3-kinase) is recruited to the autophosphorylated RTK via its p85 regulatory subunit. The catalytic p110 subunit then phosphorylates membrane PIP₂ → **PIP₃**.

**PIP₃** is a membrane lipid second messenger. It creates a docking site for proteins with **PH (pleckstrin homology) domains**, including **PDK1** and **Akt** (also called PKB). When Akt is recruited to PIP₃, PDK1 phosphorylates it on Thr-308, and **mTORC2** phosphorylates it on Ser-473 — both phosphorylations needed for full activation.

**Akt is then unleashed on a long list of substrates that all push toward survival and growth:**

**Apoptosis suppression:**
- Phosphorylates BAD → BAD released from Bcl-2 → Bcl-2 free to inhibit BAX → no MOMP, no apoptosis.
- Phosphorylates pro-caspase-9 → blocks its activation.
- Phosphorylates FOXO transcription factors → forces them out of the nucleus → can\'t transcribe pro-apoptotic genes.

**Growth and translation:**
- Phosphorylates TSC2 → inactivates the TSC1/TSC2 complex → Rheb-GTP rises → activates **mTORC1** → phosphorylates S6K (boosts translation) and 4E-BP1 (releases eIF4E for cap-dependent translation).
- Phosphorylates GSK-3β → inactivates it → glycogen synthesis goes up + cyclin D is stabilized.

**The PTEN brake:** **PTEN** is a phosphatase that converts PIP₃ back to PIP₂ — the off-switch for this entire arm. PTEN is the second-most-mutated tumor suppressor in human cancer (after p53). Loss of PTEN → constitutive PIP₃ → constitutive Akt → constitutive growth + survival. Cowden syndrome (germline PTEN loss): hamartomas, breast/thyroid/uterine cancer.

**Drug relevance:** **Rapamycin (sirolimus)** and analogs (**everolimus**, **temsirolimus**) inhibit mTORC1 — used as immunosuppressants and in mTOR-driven tumors (renal cell carcinoma, some breast cancers).`
    },
    {
      title: 'Insulin receptor — a special RTK',
      icon: '🍯',
      body: `Insulin signaling deserves its own treatment because it\'s an RTK with two very-relevant twists:

**Twist 1: It\'s already a dimer.** The insulin receptor (and the closely related IGF-1 receptor) sits in the membrane as a constitutive (αβ)₂ tetramer linked by disulfide bonds. The α-subunits are extracellular, β-subunits transmembrane + intracellular kinase. Insulin binding doesn\'t cause dimerization — it causes a conformational change within the existing dimer that activates the kinase.

**Twist 2: It uses an intermediate substrate — IRS (insulin receptor substrate).** Most RTKs phosphorylate their own C-terminal tail and recruit SH2-domain proteins directly. Insulin receptor instead phosphorylates **IRS-1/IRS-2** on multiple tyrosines, and IRS becomes a giant docking platform for downstream effectors (PI3K, GRB2, etc.). This creates an extra layer of signaling — and an extra point of dysregulation.

**Insulin\'s dominant arm is PI3K/Akt:**

Insulin → IRS-1 phosphorylated on tyrosines → PI3K p85 docks → PIP₃ at the membrane → Akt activated → multiple metabolic effects:

- **Glucose uptake** in muscle/adipose: Akt phosphorylates AS160, releasing GLUT4 vesicles to fuse with the plasma membrane. (THIS IS HOW INSULIN LOWERS BLOOD GLUCOSE.)
- **Glycogen synthesis:** Akt → ↓GSK-3β → glycogen synthase active.
- **Lipogenesis:** Akt activates SREBP-1c → fatty acid synthesis genes.
- **Protein synthesis:** Akt → mTORC1 → translation up.
- **Gluconeogenesis suppression** (liver): Akt → phosphorylates FOXO1 → exits nucleus → can\'t transcribe PEPCK, G6Pase.

**Type 2 diabetes pathophysiology:** chronic hyperinsulinemia + lipotoxicity → **serine phosphorylation of IRS-1** (instead of the productive tyrosine phosphorylation) → IRS-1 degraded → insulin signal blunted → "insulin resistance." Metformin works partly by activating AMPK, which counterbalances the missing insulin signal.`
    }
  ],

  mnemonic: {
    en: { phrase: 'RTKs: Dimerize → Autophosphorylate → Dock → Branch (Ras/MAPK = grow, PI3K/Akt = survive)', breakdown: 'Tyr-phosphate is read by SH2 domains. GRB2 on one site → Ras path. PI3K-p85 on another → Akt path.' }
  },

  compartments: {
    cyto: { en: 'Cytoplasm + nucleus', he: 'ציטופלסמה + גרעין', color: '#dcfce7', accent: '#16a34a' }
  },

  pathway: {
    viewBox: [0, 0, 1100, 920],
    nodes: [
      // Tier 1 — ligand
      { id: 'gf', label: 'Growth Factor', sublabel: 'EGF · PDGF · IGF · insulin', x: 550, y: 60, type: 'ligand',
        memory: { glyph: '📨', char: 'Growth-factor messenger' },
        hint: 'Polypeptide growth factor. Most are dimeric (e.g., PDGF) — one ligand binds two receptor monomers and pulls them together. EGF is monomeric but binds one face of a receptor that then meets a partner.' },

      // Tier 2 — receptor
      { id: 'rtk', label: 'RTK Dimer', sublabel: 'ligand-induced dimerization', x: 550, y: 175, type: 'receptor',
        memory: { glyph: '👯', char: 'Twin receptors' },
        hint: 'Single-transmembrane receptor with a Tyr-kinase domain on the cytoplasmic face. Ligand binding pulls two monomers together; the kinase domains can now reach each other.',
        clinical: { disorder: 'HER2 amplification (breast cancer)', findings: { en: 'Overexpressed HER2 receptors crowd the membrane and dimerize without ligand → constitutive growth signal. ~20% of breast cancers. Aggressive but treatable.' }, treatment: { en: 'Trastuzumab (anti-HER2 monoclonal antibody), pertuzumab, T-DM1 (antibody-drug conjugate).' } } },

      // Tier 3
      { id: 'auto', label: 'Autophosphorylation', sublabel: 'trans-phospho on Tyr residues', x: 550, y: 290, type: 'enzyme',
        memory: { glyph: '🔥', char: 'Phospho-spark' },
        hint: 'Each kinase domain phosphorylates Tyr residues on the OTHER monomer\'s C-terminal tail. The resulting phospho-tyrosines are docking sites for SH2-domain proteins.' },

      // Tier 4 — adapter / lipid kinase (split here)
      { id: 'grb2', label: 'GRB2 / SOS', sublabel: 'adapter + Ras-GEF', x: 285, y: 410, type: 'adapter',
        memory: { glyph: '🔌', char: 'GRB2 plug' },
        hint: 'GRB2\'s SH2 binds phospho-Tyr on the receptor; its SH3 domains recruit SOS (Son of Sevenless), which is a guanine-nucleotide exchange factor for Ras (kicks off GDP, lets GTP load on).' },
      { id: 'pi3k', label: 'PI3K', sublabel: 'lipid kinase', x: 815, y: 410, type: 'enzyme',
        memory: { glyph: '🪄', char: 'Lipid wand' },
        hint: 'Class IA PI3K = p85 (regulatory, has SH2) + p110 (catalytic). p85 docks on the receptor, p110 phosphorylates membrane PIP₂ → PIP₃.',
        drugs: ['idelalisib (PI3Kδ — CLL)', 'alpelisib (PI3Kα — breast cancer with PIK3CA mutation)'] },

      // Tier 5
      { id: 'ras', label: 'Ras-GTP', sublabel: 'small GTPase', x: 285, y: 525, type: 'messenger',
        memory: { glyph: '🚦', char: 'Ras switch' },
        hint: 'Membrane-anchored small G-protein. Active when GTP-bound. Mutations at codons 12, 13, 61 prevent GTP hydrolysis → stuck "on" → most common oncogene in human cancer.',
        clinical: { disorder: 'KRAS-mutant cancer', findings: { en: 'KRAS G12D/G12V/G12C mutations: ~90% pancreatic ductal adenocarcinoma, ~50% colorectal cancer, ~30% lung adenocarcinoma. Long considered "undruggable".' }, treatment: { en: 'Sotorasib and adagrasib (KRAS G12C inhibitors) — first KRAS-targeted approvals (2021).' } } },
      { id: 'pip3', label: 'PIP₃', sublabel: 'membrane lipid messenger', x: 815, y: 525, type: 'messenger',
        memory: { glyph: '🧲', char: 'PH-domain magnet' },
        hint: 'Phosphatidylinositol-3,4,5-trisphosphate. Recruits PH-domain proteins (Akt, PDK1) to the membrane. Reversed by PTEN (a 3-phosphatase).',
        clinical: { disorder: 'PTEN loss', findings: { en: 'PTEN reverses PIP₃ → PIP₂. Loss of PTEN = constitutive PIP₃ = constitutive Akt. Cowden syndrome (germline): hamartomas, breast/thyroid/uterine cancer. PTEN is one of the most frequently lost tumor suppressors in human cancer.' } } },

      // Tier 6
      { id: 'raf', label: 'Raf', sublabel: 'MAPKKK', x: 285, y: 640, type: 'enzyme',
        memory: { glyph: '🪓', char: 'Raf chopper' },
        hint: 'Recruited to the membrane and activated by Ras-GTP. A Ser/Thr kinase. Three isoforms: A-Raf, B-Raf, C-Raf. BRAF V600E is the dominant driver in ~50% of melanomas.',
        drugs: ['vemurafenib, dabrafenib (BRAF V600E inhibitors)'] },
      { id: 'akt', label: 'Akt / PKB', sublabel: 'Ser/Thr kinase', x: 815, y: 640, type: 'enzyme',
        memory: { glyph: '🛡️', char: 'Survival shield' },
        hint: 'Recruited to PIP₃ via its PH domain. Phosphorylated on Thr-308 by PDK1 and on Ser-473 by mTORC2. Once active, drives survival (inhibits BAD, FOXO, pro-caspase-9) and growth (activates mTORC1).' },

      // Tier 7
      { id: 'mek', label: 'MEK', sublabel: 'MAPKK', x: 285, y: 750, type: 'enzyme',
        memory: { glyph: '⚙️', char: 'MEK gear' },
        hint: 'Dual-specificity kinase (phosphorylates ERK on both Thr and Tyr in its activation loop). Targeted by trametinib, used in combination with BRAF inhibitors for melanoma.',
        drugs: ['trametinib, cobimetinib (MEK inhibitors)'] },
      { id: 'mtor', label: 'mTORC1', sublabel: 'translation + growth', x: 815, y: 750, type: 'enzyme',
        memory: { glyph: '🏗️', char: 'Builder mTOR' },
        hint: 'Master regulator of protein synthesis. Phosphorylates S6K (ribosomal) and 4E-BP1 (cap-dependent translation). Activated by Akt (via TSC1/2 inactivation) and by amino acids.',
        drugs: ['rapamycin (sirolimus)', 'everolimus', 'temsirolimus'] },

      // Tier 8
      { id: 'erk', label: 'ERK', sublabel: 'MAPK', x: 285, y: 855, type: 'effector',
        memory: { glyph: '🚀', char: 'ERK rocket → nucleus' },
        hint: 'Extracellular-signal-regulated kinase. Phosphorylated by MEK on TEY motif. Translocates to nucleus and phosphorylates Elk-1, c-Myc, c-Fos → cyclin D transcription → S-phase entry.' },

      // Tier 9 — output
      { id: 'response', label: 'Proliferation · Survival · Growth', sublabel: 'cell cycle entry · ↓apoptosis · ↑translation', x: 550, y: 880, type: 'output',
        memory: { glyph: '🎯', char: 'Grow + survive' },
        hint: 'Two arms converge on the cell\'s fate. ERK pushes cell-cycle entry (cyclin D transcription). Akt blocks apoptosis (BAD, FOXO, caspase-9 phosphorylation) and drives growth (mTORC1 → ↑translation).' }
    ],
    edges: [
      { from: 'gf', to: 'rtk', label: 'binds + dimerizes', style: 'activate' },
      { from: 'rtk', to: 'auto', label: 'trans-phospho', style: 'activate' },
      { from: 'auto', to: 'grb2', label: 'pY → SH2', style: 'activate' },
      { from: 'auto', to: 'pi3k', label: 'pY → SH2', style: 'activate' },
      { from: 'grb2', to: 'ras', label: 'GDP → GTP', style: 'activate' },
      { from: 'pi3k', to: 'pip3', label: 'PIP₂ → PIP₃', style: 'activate' },
      { from: 'ras', to: 'raf', label: 'recruits', style: 'activate' },
      { from: 'pip3', to: 'akt', label: 'PDK1 phospho', style: 'activate' },
      { from: 'raf', to: 'mek', label: '+ phosphate', style: 'activate' },
      { from: 'akt', to: 'mtor', label: 'TSC1/2 ⊣', style: 'activate' },
      { from: 'mek', to: 'erk', label: '+ phosphate', style: 'activate' },
      { from: 'erk', to: 'response', label: 'via TFs', style: 'activate' },
      { from: 'mtor', to: 'response', label: '↑ translation', style: 'activate' }
    ]
  },

  integrations: [
    {
      name: 'RTK → Cell Cycle (cyclin D induction)',
      toCycle: 'Cell Cycle',
      path: { en: 'ERK in nucleus phosphorylates Elk-1 and c-Myc → transcription of cyclin D → cyclin D/CDK4-6 phosphorylates Rb → releases E2F → S-phase genes → DNA replication.' },
      note: { en: 'This is THE central link between extracellular growth-factor signal and cell-cycle entry.' }
    },
    {
      name: 'PI3K/Akt → Apoptosis suppression',
      toCycle: 'Apoptosis',
      path: { en: 'Akt phosphorylates BAD (sequestered by 14-3-3, can\'t inhibit Bcl-2). Akt phosphorylates pro-caspase-9 (blocks activation). Akt phosphorylates FOXO (kicked out of nucleus, can\'t transcribe Bim/PUMA).' },
      note: { en: 'Why growth-factor withdrawal often triggers apoptosis — Akt activity falls and these brakes release.' }
    },
    {
      name: 'Insulin → glucose homeostasis',
      toCycle: 'Metabolism',
      path: { en: 'Insulin RTK → IRS-1 → PI3K → PIP₃ → Akt → AS160 → GLUT4 vesicle fusion (glucose uptake into muscle/fat). Akt also activates glycogen synthase (via GSK-3β) and inhibits gluconeogenesis (via FOXO1).' },
      note: { en: 'Whole point of insulin signaling is moving glucose out of blood into storage. Insulin resistance in T2DM = blunting of this exact pathway.' }
    },
    {
      name: 'mTORC1 → translation',
      toCycle: 'Protein synthesis',
      path: { en: 'mTORC1 phosphorylates S6K (boosts ribosomal protein synthesis) and 4E-BP1 (releases eIF4E for cap-dependent translation). Net: cell-wide ↑translation, growth in size.' },
      note: { en: 'Rapamycin blocks this and is used in transplant immunosuppression and as an antitumor agent.' }
    },
    {
      name: 'JAK/STAT (a related RTK-like family)',
      toCycle: 'Cytokine signaling',
      path: { en: 'Cytokine receptors (IL-2, IL-6, IFN, EPO, GH) lack intrinsic kinase activity but recruit JAK kinases on dimerization. JAK phosphorylates STAT, STAT dimerizes, enters nucleus, drives transcription. Same logic as RTK → MAPK but a different effector branch.' },
      note: { en: 'Tofacitinib, ruxolitinib, baricitinib are JAK inhibitors used in rheumatoid arthritis, polycythemia vera, alopecia areata.' }
    },
    {
      name: 'GPCR → RTK transactivation',
      toCycle: 'GPCR Signaling',
      path: { en: 'Some GPCRs trigger matrix-metalloprotease cleavage of pro-EGF in the membrane, releasing soluble EGF that activates EGFR in cis. Or Gβγ recruits Src, which phosphorylates EGFR directly.' },
      note: { en: 'Why some GPCR agonists drive proliferation, not just acute physiology.' }
    }
  ],

  bigPicture: {
    en: [
      { k: 'Core mechanism', v: 'Ligand → dimerization → trans-autophosphorylation on Tyr → SH2-domain proteins dock → branches.' },
      { k: 'Two main arms', v: 'GRB2/SOS → Ras → Raf → MEK → ERK (proliferation). PI3K → PIP₃ → Akt → mTOR (survival + growth).' },
      { k: 'Ras', v: 'Small GTPase. Active when GTP-bound. Mutations at codons 12/13/61 (KRAS G12D, G12V, G12C) prevent hydrolysis → stuck on. ~30% of all human cancers.' },
      { k: 'BRAF V600E', v: 'Constitutively active mutant kinase. ~50% of melanomas. Treated with vemurafenib + trametinib.' },
      { k: 'HER2 (ERBB2)', v: 'Amplified in ~20% of breast cancers. Spontaneous dimerization. Treated with trastuzumab (mAb), T-DM1 (ADC).' },
      { k: 'EGFR', v: 'Mutated or amplified in lung adenocarcinoma. Erlotinib, gefitinib (1st-gen TKIs). Osimertinib (3rd-gen, T790M-active).' },
      { k: 'BCR-ABL', v: 'Philadelphia chromosome t(9;22) in CML. Constitutively active ABL kinase. Imatinib (Gleevec) — first targeted small-molecule kinase inhibitor.' },
      { k: 'PI3K → PIP₃', v: 'Lipid kinase phosphorylates PIP₂ → PIP₃ at the membrane. PIP₃ recruits Akt and PDK1 via PH domains.' },
      { k: 'PTEN', v: 'Phosphatase that converts PIP₃ → PIP₂ (off switch for Akt). Second-most-mutated tumor suppressor (after p53). Cowden syndrome.' },
      { k: 'Akt → multiple outputs', v: 'Phosphorylates BAD (releases Bcl-2 to inhibit BAX), FOXO (kicked out of nucleus), TSC1/2 (releases mTORC1), GSK-3β (glycogen synthesis ↑).' },
      { k: 'mTORC1', v: 'Phosphorylates S6K and 4E-BP1 → boosts protein synthesis. Inhibited by rapamycin (sirolimus).' },
      { k: 'mTORC1 vs mTORC2', v: 'mTORC1: rapamycin-sensitive, downstream of Akt. mTORC2: phosphorylates Akt on Ser-473 (upstream). Different complex partners (Raptor vs Rictor).' },
      { k: 'Insulin receptor twist', v: 'Already a constitutive (αβ)₂ dimer. Uses IRS-1/2 as docking adapter. Dominant arm = PI3K/Akt.' },
      { k: 'GLUT4 translocation', v: 'Insulin → Akt → AS160 phosphorylation → GLUT4 vesicles fuse with membrane → glucose uptake in muscle/fat.' },
      { k: 'NF1', v: 'Ras-GAP. Loss-of-function = neurofibromatosis type 1 (café-au-lait spots, neurofibromas, optic gliomas, Lisch nodules).' },
      { k: 'Tuberous sclerosis (TSC1/TSC2)', v: 'TSC1/2 is a Rheb-GAP that holds mTORC1 OFF. Loss → constitutive mTORC1 → hamartomas in brain (subependymal nodules), heart (rhabdomyomas), kidney (angiomyolipomas), skin (ash-leaf spots, shagreen patches). Treated with everolimus.' }
    ]
  },

  questions: [
    { id: 'rtk-q1', difficulty: 'easy', prompt: { en: 'The first event in RTK activation is:' }, correct: 'Ligand-induced dimerization', options: ['Ligand-induced dimerization', 'GTP loading on Ras', 'PIP₂ cleavage', 'IRS phosphorylation'] },
    { id: 'rtk-q2', difficulty: 'medium', prompt: { en: 'After autophosphorylation, the receptor recruits effectors via:' }, correct: 'SH2 domains binding phospho-tyrosines', options: ['SH2 domains binding phospho-tyrosines', 'PH domains binding cAMP', 'WW domains binding proline', 'PDZ domains binding C-termini'] },
    { id: 'rtk-q3', difficulty: 'medium', prompt: { en: 'Ras is activated by:' }, correct: 'SOS (a guanine-nucleotide exchange factor)', options: ['SOS (a guanine-nucleotide exchange factor)', 'NF1 (a GAP)', 'Direct phosphorylation by the receptor', 'Akt'] },
    { id: 'rtk-q4', difficulty: 'medium', prompt: { en: 'The Ras/MAPK three-tier cascade is:' }, correct: 'Raf → MEK → ERK', options: ['Raf → MEK → ERK', 'PI3K → Akt → mTOR', 'JAK → STAT → DNA', 'Src → Abl → Bcr'] },
    { id: 'rtk-q5', difficulty: 'medium', prompt: { en: 'PI3K converts PIP₂ to:' }, correct: 'PIP₃', options: ['PIP₃', 'IP₃', 'DAG', 'cAMP'] },
    { id: 'rtk-q6', difficulty: 'hard', prompt: { en: 'PIP₃ recruits Akt and PDK1 via their:' }, correct: 'PH (pleckstrin homology) domains', options: ['PH (pleckstrin homology) domains', 'SH2 domains', 'Death domains', 'Bromo domains'] },
    { id: 'rtk-q7', difficulty: 'medium', prompt: { en: 'PTEN is a tumor suppressor that:' }, correct: 'Dephosphorylates PIP₃ back to PIP₂', options: ['Dephosphorylates PIP₃ back to PIP₂', 'Inhibits Ras directly', 'Activates p53', 'Cleaves Bcl-2'] },
    { id: 'rtk-q8', difficulty: 'hard', prompt: { en: 'KRAS G12 mutations are oncogenic because:' }, correct: 'They impair GTP hydrolysis, locking Ras in the active GTP-bound state', options: ['They impair GTP hydrolysis, locking Ras in the active GTP-bound state', 'They prevent membrane localization', 'They disrupt the SH2-binding site', 'They block PI3K binding'] },
    { id: 'rtk-q9', difficulty: 'medium', prompt: { en: 'Imatinib targets:' }, correct: 'BCR-ABL kinase (CML)', options: ['BCR-ABL kinase (CML)', 'EGFR (lung cancer)', 'HER2 (breast cancer)', 'BRAF (melanoma)'] },
    { id: 'rtk-q10', difficulty: 'medium', prompt: { en: 'Trastuzumab targets:' }, correct: 'HER2 (ERBB2)', options: ['HER2 (ERBB2)', 'EGFR', 'KRAS', 'BRAF'] },
    { id: 'rtk-q11', difficulty: 'hard', prompt: { en: 'Vemurafenib treats melanoma by inhibiting:' }, correct: 'BRAF V600E', options: ['BRAF V600E', 'MEK', 'KRAS', 'PI3K'] },
    { id: 'rtk-q12', difficulty: 'medium', prompt: { en: 'Insulin lowers blood glucose primarily by:' }, correct: 'Akt-mediated GLUT4 translocation to the plasma membrane in muscle and fat', options: ['Akt-mediated GLUT4 translocation to the plasma membrane in muscle and fat', 'Direct activation of hexokinase', 'Stimulating glucagon receptors', 'Inhibiting glycolysis'] },
    { id: 'rtk-q13', difficulty: 'hard', prompt: { en: 'Rapamycin\'s mechanism is:' }, correct: 'Inhibition of mTORC1 (through FKBP12)', options: ['Inhibition of mTORC1 (through FKBP12)', 'Inhibition of mTORC2', 'Activation of PTEN', 'Direct Akt inhibition'] },
    { id: 'rtk-q14', difficulty: 'hard', prompt: { en: 'Akt promotes survival by:' }, correct: 'Phosphorylating BAD, FOXO, and pro-caspase-9 to inactivate them', options: ['Phosphorylating BAD, FOXO, and pro-caspase-9 to inactivate them', 'Activating BAX directly', 'Cleaving cytochrome c', 'Releasing Bcl-2 from the mitochondrial outer membrane'] },
    { id: 'rtk-q15', difficulty: 'medium', prompt: { en: 'Neurofibromatosis type 1 is caused by loss of:' }, correct: 'NF1 (a Ras-GAP)', options: ['NF1 (a Ras-GAP)', 'TSC1/TSC2', 'PTEN', 'p53'] }
  ]
};
