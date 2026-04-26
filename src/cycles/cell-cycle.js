// ============================================================
// THE CELL CYCLE — G1 · S · G2 · M with checkpoint regulation
// Layout: 'pathway' (multi-tier branching with feedback)
// ============================================================

export const cellCycleCycle = {
  id: 'cell-cycle',
  chapter: 'The Cell Cycle',
  chapterOrder: 3,
  order: 1,
  layout: 'pathway',
  title: { en: 'The Cell Cycle', he: 'מחזור התא' },
  subtitle: { en: 'Phases · cyclin–CDK pairs · Rb/E2F switch · p53/p21 checkpoint' },

  context: {
    tissue: { en: 'Universal in dividing cells. Most active in stem-cell niches (intestinal crypt, bone marrow, skin basal layer, hair follicle). Quiescent in most differentiated cells (neurons, cardiomyocytes are post-mitotic).' },
    state: { en: 'Driven by extracellular growth-factor signals reaching cyclin D transcription. Halted by DNA damage (ATM/ATR → p53 → p21) or by the spindle-assembly checkpoint at metaphase.' },
    stateHormonal: { en: 'Insulin and IGF-1 promote G1 progression. Estrogen drives breast and endometrial cycling. TGF-β arrests in G1 (induces p15/p21).' },
    turnover: { en: 'Total cycle time varies enormously: ~24 h for an average mammalian cell, ~9 days for a hepatocyte, ~6 hours for an early embryo. G1 is the most variable phase; S/G2/M are roughly fixed.' }
  },

  overview: {
    en: `The cell cycle is the orderly progression a cell takes from "I exist" to "I have given rise to two daughter cells." It has four phases: **G1** (growth, decide whether to commit), **S** (DNA replication — every chromosome gets a sister chromatid), **G2** (verify replication, prepare for mitosis), **M** (mitosis + cytokinesis). Quiescent cells leave the cycle into **G0** and may or may not re-enter. The whole machine is driven by **cyclin–CDK complexes**: cyclins are regulatory subunits whose levels rise and fall during the cycle, CDKs (cyclin-dependent kinases) are the constitutive catalytic subunits that are inactive until paired with their cyclin partner. Four cyclin-CDK pairs define the phases — **cyclin D / CDK4-6** (G1, the growth-factor-responsive entry step), **cyclin E / CDK2** (G1 → S transition), **cyclin A / CDK2 then CDK1** (S and G2), and **cyclin B / CDK1** (M-phase, also called MPF — Maturation-Promoting Factor). The most exam-relevant control point is the **G1/S restriction point**: cyclin D/CDK4-6 phosphorylates the **Rb protein**, releasing the **E2F transcription factor** that drives transcription of S-phase genes (DNA polymerase, thymidine kinase, cyclin E itself — a positive-feedback loop). Cells past the restriction point are committed to dividing regardless of further growth signals. Layered on top is the **p53 pathway**: DNA damage activates **ATM/ATR**, which phosphorylates and stabilizes **p53**, which transcribes **p21** (a CDK inhibitor — CKI). p21 binds and shuts down cyclin–CDK complexes → cell-cycle arrest. If the damage is repairable → arrest, fix, resume. If not → p53 also drives BAX/PUMA → apoptosis. p53 is mutated in **>50% of all human cancers**, Rb in retinoblastoma + many others, and cyclin D / CDK4 are amplified in lymphomas and carcinomas.`
  },

  pedagogy: [
    {
      title: 'Why a sequence of cyclin-CDK pairs (and not just one)?',
      icon: '🔄',
      body: `**The problem:** the cell needs to do four very different jobs in sequence (grow, replicate DNA, prepare for division, divide), and each job has different protein substrates. A single kinase phosphorylating everything would either be too promiscuous (wreck everything early) or too restricted (can\'t do later jobs).

**Evolution\'s answer:** keep the same catalytic kinase (CDK), but switch out the regulatory subunit (cyclin) for each phase. Each cyclin partner steers the CDK to a different set of substrates AND has phase-specific localization (some go nuclear, some stay cytoplasmic).

**The four pairs:**

1. **Cyclin D + CDK4 or CDK6** — early G1, "growth-factor responsive." Cyclin D is induced by ERK / Myc / β-catenin downstream of growth-factor signals. Targets Rb for phosphorylation (start releasing E2F). Levels of cyclin D track external mitogenic signals minute-to-minute.

2. **Cyclin E + CDK2** — late G1 → S transition. Cyclin E is itself an E2F target gene, so as Rb gets phosphorylated and releases E2F, cyclin E rises → CDK2 activates → hyperphosphorylates Rb → MORE E2F free → MORE cyclin E → positive feedback flips the switch hard. This is what makes the restriction point a true "point of no return."

3. **Cyclin A + CDK2 (then CDK1)** — S phase + G2. Cyclin A binds CDK2 in S phase to drive ongoing DNA replication, then switches to CDK1 in G2 for mitotic preparation. Phosphorylates origin-recognition complex components and replication forks.

4. **Cyclin B + CDK1** — M phase. Also called **MPF (Maturation-Promoting Factor)** from frog egg studies. Cyclin B accumulates through G2 in the cytoplasm, then suddenly translocates to the nucleus at G2/M and triggers nuclear envelope breakdown, chromatin condensation, and spindle assembly. Cyclin B is **destroyed** by the anaphase-promoting complex (APC/C) at the metaphase-anaphase transition — that destruction inactivates CDK1 and lets the cell exit mitosis.

**The ladder up; the ladder down.** Cyclin D → E → A → B. As each cyclin rises, the previous one falls (by ubiquitin-mediated degradation). This forces unidirectional progression.`
    },
    {
      title: 'The Rb/E2F switch — heart of the G1/S decision',
      icon: '🔓',
      body: `Rb (retinoblastoma protein) is the most important G1/S gatekeeper. Mutated in retinoblastoma (the canonical "two-hit" tumor — Knudson\'s hypothesis), and INACTIVATED IN VIRTUALLY EVERY HUMAN CANCER one way or another (direct mutation, p16 loss, cyclin D amplification, CDK4 amplification, HPV E7 binding).

**Default state: Rb is active and HOLDING the cell in G1.**

Hypo-phosphorylated Rb physically binds E2F transcription factors and **prevents them from activating their target genes** (DNA polymerase α, thymidine kinase, dihydrofolate reductase, cyclin E, cyclin A, MCM helicase components — basically everything needed for DNA replication). As long as Rb-E2F complexes exist, the cell cannot enter S phase. **Rb on = brakes engaged.**

**Cyclin D/CDK4-6 starts releasing the brake.**

When growth-factor signals reach a threshold, cyclin D accumulates and binds CDK4 (or CDK6). The cyclin D/CDK4-6 complex begins phosphorylating Rb on multiple Ser/Thr sites. **Mono-phosphorylation** → partial release of some E2F → cyclin E starts being transcribed.

**Cyclin E/CDK2 finishes the job — and feedback locks it.**

The newly translated cyclin E binds CDK2 and goes after Rb HARDER — **hyper-phosphorylation** of Rb → all E2F released → S-phase genes fully transcribed → DNA replication begins. Crucially, cyclin E is itself an E2F target, so this becomes a positive feedback loop: more E2F → more cyclin E → more CDK2 activity → more Rb phosphorylation → more E2F. Once the feedback fires, you can\'t reverse it without dephosphorylating Rb (which only happens in late mitosis). **This is the molecular embodiment of the restriction point.**

**How cancers hijack this switch:**

- **Retinoblastoma (RB1 loss):** both Rb alleles inactivated → no brake → constant E2F → unrestricted G1/S transit. ~50% of cases hereditary, ~50% sporadic.
- **Cervical cancer (HPV E7):** the viral E7 protein binds Rb and physically pries it off E2F → same effect as RB1 loss. (HPV E6 inactivates p53 in parallel.)
- **CDKN2A loss (p16 loss):** p16 normally inhibits CDK4/6. Lose it → CDK4/6 unrestrained → Rb phosphorylated → E2F released. Common in melanoma, pancreatic, glioma.
- **Cyclin D1 amplification (CCND1, t(11;14)):** mantle-cell lymphoma. Constitutive cyclin D → constant CDK4/6 activity.
- **CDK4 amplification:** sarcomas.

**Drugs that exploit this:** **Palbociclib, ribociclib, abemaciclib** are CDK4/6 inhibitors. Used in HR+/HER2− metastatic breast cancer (combined with endocrine therapy). They keep Rb un-phosphorylated → E2F still trapped → cell stuck in G1.`
    },
    {
      title: 'p53 — the guardian of the genome',
      icon: '🛡️',
      body: `p53 is the most-mutated tumor suppressor in human cancer (>50% of tumors). Its job: **detect cellular stress and decide between three responses — pause, repair, or self-destruct.**

**How p53 senses damage:**

In healthy cells, p53 is constantly being made AND constantly being degraded — by **MDM2**, an E3 ubiquitin ligase that ubiquitinates p53 and sends it to the proteasome. So baseline p53 levels are very low, half-life ~6 minutes.

When DNA damage occurs:
- **Double-strand breaks** activate **ATM** kinase.
- **Single-strand breaks / stalled replication forks** activate **ATR** kinase.

ATM and ATR phosphorylate p53 on Ser-15. They also phosphorylate MDM2, weakening MDM2\'s grip on p53. Net result: **p53 escapes degradation, accumulates rapidly (within minutes), and starts transcribing target genes.**

**p53\'s major targets:**

- **p21** (CDKN1A): a CKI — Cyclin-dependent Kinase Inhibitor. Binds and shuts down all the G1/S cyclin–CDK complexes (cyclin D/CDK4-6, cyclin E/CDK2). Cell-cycle arrest in G1.
- **GADD45**: helps DNA repair machinery localize.
- **MDM2** itself (negative feedback — eventually shuts off the p53 response when damage is fixed).
- **BAX, PUMA, NOXA**: pro-apoptotic Bcl-2 family. If damage is deemed unrepairable, p53 swings the choice toward apoptosis (intrinsic pathway — see Apoptosis pathway).

**The choice between arrest and apoptosis** depends on dose / duration / cell type. Brief, low damage → arrest, repair, resume. Severe / prolonged damage → apoptosis. This is why chemotherapy and radiation work — they push p53 toward apoptosis in cancer cells (which still respond, IF they have functional p53). Tumors with mutant p53 often fail to apoptose in response to genotoxic chemo → harder to treat.

**p53 mutations vs. p53 LOSS** are not the same. Most p53 mutations are **dominant-negative missense mutations in the DNA-binding domain** (codons 175, 245, 248, 249, 273, 282 — the "hot spots"). Mutant p53 still tetramerizes with wild-type p53 from the other allele but the mutant subunits can\'t bind DNA — wrecks the whole complex. This is why one mutant allele plus one wild-type allele is enough (no LOH required).

**Li-Fraumeni syndrome:** germline TP53 mutation. Sarcomas, breast cancer, brain tumors, leukemia, adrenocortical carcinoma — all early-onset.`
    },
    {
      title: 'Checkpoints in detail — the three "go/no-go" gates',
      icon: '🚦',
      body: `The cell cycle has three major checkpoints. Each is a gate where the cell pauses to verify everything is in order before committing to the next phase.

**1. G1/S restriction point (most exam-relevant).** Verify: enough growth-factor signals? cell big enough? DNA undamaged? If yes → flip the Rb/E2F switch. If DNA damaged → ATM/ATR → p53 → p21 → arrest in G1. Position is right before S phase, so the cell hasn\'t wasted resources on replication if something is wrong.

**2. G2/M checkpoint.** Verify: DNA fully replicated? No remaining damage? Position is at the end of G2 just before mitosis. The molecular gate is **CDK1 activation**: CDK1 has to be dephosphorylated on Thr-14/Tyr-15 (by **CDC25 phosphatase**) to become active. ATM/ATR pathways inhibit CDC25 → CDK1 stays phosphorylated → no entry into mitosis.

**3. Spindle-assembly checkpoint (SAC, also called M-phase or metaphase checkpoint).** Verify: every chromosome\'s kinetochore attached to spindle microtubules from BOTH poles (bi-orientation)? An unattached kinetochore signals to the **APC/C-CDC20** complex to STAY OFF — APC/C is the ubiquitin ligase that has to destroy securin and cyclin B to allow anaphase. So unattached kinetochore → APC/C off → securin intact → separase inhibited → sister chromatids stay glued → cell can\'t progress past metaphase. Once every kinetochore is attached, APC/C activates, securin and cyclin B are destroyed, sister chromatids separate, mitosis exits.

**Drugs that exploit each checkpoint:**

- **Methotrexate, 5-FU, gemcitabine** → block dNTP/DNA synthesis → trigger S-phase / G1-S checkpoint arrest.
- **Etoposide, doxorubicin** → cause DNA damage → ATM/ATR → G1/S and G2/M arrest in normal cells, apoptosis in p53-functional cancer cells.
- **Vincristine, vinblastine** → block microtubule polymerization → spindle can\'t form → SAC engaged → metaphase arrest → eventual mitotic catastrophe + apoptosis. Used in lymphomas and leukemias.
- **Paclitaxel (Taxol), docetaxel** → STABILIZE microtubules so they can\'t depolymerize → spindle dynamics fail → SAC engaged → metaphase arrest. Used in breast, ovarian, lung.

**Why this matters clinically:** chemo only works on dividing cells. Quiescent (G0) cancer stem cells often escape chemotherapy and seed relapse. CDK4/6 inhibitors put cells INTO G0 — which paradoxically can be exploited (with endocrine therapy) or be a problem (drug resistance).`
    }
  ],

  mnemonic: {
    en: { phrase: 'Cyclins ladder UP: D → E → A → B   ·   p53 → p21 ⊣ CDKs (the brake)', breakdown: 'D for "Decide" (G1). E for "Entry" (S). A for "All-purpose" (S+G2). B for "Burst" / Big mitosis. Rb on = E2F off = brakes ENGAGED. Phosphorylate Rb → release E2F → S phase.' }
  },

  compartments: {
    cyto: { en: 'Nucleus + cytoplasm', he: 'גרעין + ציטופלסמה', color: '#fce7f3', accent: '#db2777' }
  },

  pathway: {
    viewBox: [0, 0, 1100, 880],
    nodes: [
      // Tier 1 — phase headers (top row, as scaffolding — not part of recall)
      { id: 'g1', label: 'G1 Phase', sublabel: 'growth · prepare for S', x: 150, y: 60, type: 'phase',
        hint: 'First gap phase. The cell decides whether to commit to division at the restriction point — past that point, division proceeds independently of further growth-factor signals. Most cells in G0 (quiescence) re-enter the cycle here.' },
      { id: 's', label: 'S Phase', sublabel: 'DNA replication', x: 400, y: 60, type: 'phase',
        hint: 'DNA is replicated exactly once. Each chromosome now has two sister chromatids joined at the centromere. Origins fire in a defined temporal order — euchromatin first, heterochromatin last.' },
      { id: 'g2', label: 'G2 Phase', sublabel: 'verify replication', x: 650, y: 60, type: 'phase',
        hint: 'Second gap phase. The cell verifies DNA was replicated correctly and prepares mitotic machinery (centrosome duplication, condensin assembly, spindle precursors).' },
      { id: 'm', label: 'M Phase', sublabel: 'mitosis + cytokinesis', x: 900, y: 60, type: 'phase',
        hint: 'Mitosis (PMAT — prophase, metaphase, anaphase, telophase) followed by cytokinesis. Two daughter cells emerge, each with a 2N genome. Chromosomes condense, nuclear envelope breaks down, sisters segregate to opposite poles.' },

      // Tier 2 — cyclin-CDK pairs
      { id: 'cycD', label: 'Cyclin D / CDK4-6', sublabel: 'early G1 · GF-responsive', x: 150, y: 195, type: 'enzyme',
        hint: 'First cyclin to rise. Induced by growth-factor signals (ERK → c-Myc → cyclin D transcription). Phosphorylates Rb, beginning E2F release. Levels track external mitogenic input minute-to-minute.',
        clinical: { disorder: 'Mantle-cell lymphoma (cyclin D1 amplification)', findings: { en: 't(11;14) translocation puts CCND1 (cyclin D1) under IgH enhancer → constitutive cyclin D1 overexpression. Aggressive B-cell lymphoma.' } },
        drugs: ['palbociclib, ribociclib, abemaciclib (CDK4/6 inhibitors — HR+ breast cancer)'] },
      { id: 'cycE', label: 'Cyclin E / CDK2', sublabel: 'late G1 → S transition', x: 400, y: 195, type: 'enzyme',
        hint: 'Drives the G1→S transition. Itself an E2F target gene → positive-feedback loop with Rb phosphorylation. Hyperphosphorylates Rb, fully releasing E2F.' },
      { id: 'cycA', label: 'Cyclin A / CDK2', sublabel: 'S → G2', x: 650, y: 195, type: 'enzyme',
        hint: 'Active during S and G2. Required for ongoing DNA replication (phosphorylates origin recognition complex components) and for entry into mitosis. Switches partners from CDK2 to CDK1 in G2.' },
      { id: 'cycB', label: 'Cyclin B / CDK1', sublabel: 'M-phase MPF', x: 900, y: 195, type: 'enzyme',
        hint: 'Maturation-Promoting Factor. Triggers nuclear envelope breakdown, chromosome condensation, spindle assembly. Destroyed by APC/C at metaphase-anaphase transition → CDK1 inactivates → mitotic exit.' },

      // Tier 3 — Rb / E2F switch (left column, downstream of cyclin D)
      { id: 'rb', label: 'Rb phosphorylated', sublabel: 'tumor suppressor', x: 150, y: 345, type: 'modifier',
        hint: 'Retinoblastoma protein. When hypo-phosphorylated, holds E2F captive. Cyclin D/CDK4-6 mono-phosphorylates Rb → partial E2F release. Cyclin E/CDK2 then hyperphosphorylates Rb → full E2F release. Knudson "two-hit" hypothesis: both alleles must be lost for retinoblastoma.',
        clinical: { disorder: 'Retinoblastoma (RB1 biallelic loss)', findings: { en: 'White pupillary reflex (leukocoria), strabismus in young children. Hereditary form: also predisposes to osteosarcoma. HPV E7 binds and inactivates Rb in cervical cancer (a "viral mimic" of RB1 loss).' } } },
      { id: 'e2f', label: 'E2F released', sublabel: 'transcription factor', x: 150, y: 460, type: 'effector',
        hint: 'Family of transcription factors (E2F1-8). When freed from Rb, drives expression of S-phase genes: DNA polymerase α, thymidine kinase, DHFR, cyclin E (positive feedback), MCM helicase components, dNTP synthesis enzymes.' },

      // Tier 4 — S-phase entry
      { id: 'sentry', label: 'S-phase entry', sublabel: 'committed to replicate', x: 400, y: 460, type: 'effector',
        hint: 'Past the restriction point — the cell is now committed to dividing regardless of further growth-factor signals. DNA polymerases initiate at origins of replication. dNTP pools must be sufficient.' },

      // Tier 5 — DNA-damage path (right column)
      { id: 'damage', label: 'DNA Damage', sublabel: 'DSBs · stalled forks', x: 750, y: 345, type: 'ligand',
        hint: 'Double-strand breaks (DSBs) detected by ATM. Single-strand damage / stalled replication forks detected by ATR. Both kinases phosphorylate p53 on Ser-15 and concurrently weaken MDM2\'s grip on p53.' },
      { id: 'p53', label: 'p53 activated', sublabel: 'guardian of the genome', x: 750, y: 460, type: 'modifier',
        hint: 'Most-mutated tumor suppressor in human cancer (>50%). Stabilized when phosphorylated by ATM/ATR (escapes MDM2-mediated degradation). Drives p21, GADD45, MDM2 (negative feedback), and BAX/PUMA (pro-apoptotic) transcription.',
        clinical: { disorder: 'Li-Fraumeni syndrome (germline TP53 mutation)', findings: { en: 'Early-onset sarcomas, breast cancer, brain tumors, leukemia, adrenocortical carcinoma. Most p53 mutations are dominant-negative missense in the DNA-binding domain (codons 175/245/248/249/273/282).' } },
        drugs: ['nutlins (MDM2 inhibitors — restore p53)'] },
      { id: 'p21', label: 'p21 (CKI)', sublabel: 'CDK inhibitor', x: 525, y: 575, type: 'modifier',
        hint: 'Cyclin-dependent kinase inhibitor (CIP/KIP family — also includes p27, p57). Binds and shuts down cyclin–CDK complexes (D/CDK4-6, E/CDK2 most relevant). Halts the cycle so DNA can be repaired or apoptosis triggered.' },

      // Tier 6 — outcome
      { id: 'arrest', label: 'G1/S Checkpoint Arrest', sublabel: 'or → apoptosis if irreparable', x: 525, y: 715, type: 'output',
        hint: 'If damage is repairable → arrest, fix, resume. If irreparable → p53 also drives BAX/PUMA → mitochondrial apoptosis (intrinsic pathway). Why chemotherapy works: p53-functional cancer cells apoptose in response to drug-induced damage.' }
    ],
    edges: [
      // Phase progression (top row)
      { from: 'g1', to: 's', label: '→', style: 'activate' },
      { from: 's', to: 'g2', label: '→', style: 'activate' },
      { from: 'g2', to: 'm', label: '→', style: 'activate' },
      // Phases drive their cyclins
      { from: 'g1', to: 'cycD', label: 'GF signal', style: 'activate' },
      { from: 's', to: 'cycE', label: 'rises', style: 'activate' },
      { from: 'g2', to: 'cycA', label: 'rises', style: 'activate' },
      { from: 'm', to: 'cycB', label: 'rises', style: 'activate' },
      // Cyclin D phosphorylates Rb → releases E2F → S entry
      { from: 'cycD', to: 'rb', label: 'phosphorylates', style: 'activate' },
      { from: 'rb', to: 'e2f', label: 'releases', style: 'activate' },
      { from: 'e2f', to: 'sentry', label: 'transcribes S genes', style: 'activate' },
      { from: 'cycE', to: 'sentry', label: 'drives entry', style: 'activate' },
      // Damage path
      { from: 'damage', to: 'p53', label: 'ATM/ATR stabilize', style: 'activate' },
      { from: 'p53', to: 'p21', label: 'transcribes', style: 'activate' },
      { from: 'p21', to: 'cycD', label: '⊣', style: 'inhibit' },
      { from: 'p21', to: 'cycE', label: '⊣', style: 'inhibit' },
      { from: 'p21', to: 'arrest', label: 'halts cycle', style: 'activate' }
    ]
  },

  integrations: [
    {
      name: 'Growth factor (RTK) → cyclin D induction',
      toCycle: 'Receptor Tyrosine Kinases',
      path: { en: 'EGF / PDGF / IGF → RTK → Ras → Raf → MEK → ERK → Elk-1 / c-Myc → cyclin D transcription. Also Akt → β-catenin / GSK-3β → cyclin D stabilization.' },
      note: { en: 'This is THE link between extracellular growth signal and cell-cycle entry. Hyperactive in most cancers.' }
    },
    {
      name: 'p53 → Apoptosis',
      toCycle: 'Apoptosis',
      path: { en: 'When DNA damage is severe, p53 transcribes BAX, PUMA, NOXA → BH3-only proteins overcome Bcl-2 → BAX/BAK pore the outer mitochondrial membrane → cytochrome c released → apoptosome → caspase 9 → caspase 3 → cell death.' },
      note: { en: 'Why p53-functional cancer cells respond to chemo and p53-mutant ones often don\'t.' }
    },
    {
      name: 'TGF-β arrests the cycle',
      toCycle: 'Cytokine signaling',
      path: { en: 'TGF-β → TβR1/TβR2 (serine/threonine kinase receptors, not RTKs) → SMAD2/3 → induces p15 and p21 (both CKIs) + suppresses Myc → cyclin D fails to rise → G1 arrest.' },
      note: { en: 'TGF-β is a tumor suppressor early in carcinogenesis. Many late-stage tumors lose responsiveness (SMAD4 loss in pancreatic cancer).' }
    },
    {
      name: 'HPV → E6 + E7 → both brakes off',
      toCycle: 'Viral oncogenesis',
      path: { en: 'Human papillomavirus high-risk types (16, 18) encode two oncoproteins: E6 ubiquitinates p53 (mimics MDM2), E7 displaces E2F from Rb. Both checkpoints simultaneously inactivated → cervical / oropharyngeal carcinoma.' },
      note: { en: 'HPV vaccine (Gardasil) targets the capsid; prevents infection → prevents this molecular sabotage.' }
    },
    {
      name: 'APC/C → mitotic exit',
      toCycle: 'Mitosis',
      path: { en: 'Anaphase Promoting Complex/Cyclosome — an E3 ubiquitin ligase. With CDC20: ubiquitinates securin (releases separase to cleave cohesin → sister chromatids separate) and cyclin B (inactivates CDK1 → mitotic exit). With CDH1 in G1: keeps CDK activity low.' },
      note: { en: 'Disrupted in some chemoresistant tumors. Tumor cells with weakened SAC progress through mitosis with errors → aneuploidy.' }
    },
    {
      name: 'Cyclin destruction by ubiquitin-proteasome',
      toCycle: 'Protein turnover',
      path: { en: 'All cyclins are destroyed by SCF or APC/C ubiquitin ligases at specific phase transitions. Cyclin E destroyed by SCF^Fbw7 (deg-rons phosphorylated as cue). Cyclin B destroyed by APC/C-CDC20 at metaphase-anaphase.' },
      note: { en: 'Bortezomib (proteasome inhibitor) blocks all degradation → multiple cell-cycle and apoptotic effects → effective in multiple myeloma.' }
    }
  ],

  bigPicture: {
    en: [
      { k: 'Four phases', v: 'G1 (decide) → S (replicate DNA) → G2 (verify) → M (divide). Quiescent cells in G0 may re-enter at G1.' },
      { k: 'Cyclin–CDK ladder', v: 'D/CDK4-6 (G1) → E/CDK2 (G1/S) → A/CDK2 then CDK1 (S+G2) → B/CDK1 (M).' },
      { k: 'CDK1 = CDC2', v: 'Same kinase, two names. Pairs with cyclin B in M phase to form MPF.' },
      { k: 'Restriction point', v: 'In late G1. Past it, the cell commits to division regardless of further growth-factor signals. Locked by cyclin E/Rb/E2F positive feedback.' },
      { k: 'Rb', v: 'Tumor suppressor. Hypo-phosphorylated Rb holds E2F captive. Cyclin D/CDK4-6 starts phosphorylating Rb; cyclin E/CDK2 finishes — E2F released, S-phase genes transcribed.' },
      { k: 'E2F', v: 'Transcription factor for S-phase genes: DNA pol α, thymidine kinase, DHFR, cyclin E (positive feedback), MCM components.' },
      { k: 'Retinoblastoma (RB1)', v: 'Two-hit hypothesis (Knudson). White pupillary reflex (leukocoria), strabismus. Familial form predisposes to osteosarcoma.' },
      { k: 'p53', v: 'Most-mutated tumor suppressor in cancer (>50%). Stabilized by ATM/ATR phosphorylation in response to DNA damage. Transcribes p21, BAX, PUMA, GADD45, MDM2 (feedback).' },
      { k: 'MDM2', v: 'E3 ligase that ubiquitinates p53 → proteasomal degradation. Off-switch for p53 baseline. Inhibited by nutlins (research drugs).' },
      { k: 'Li-Fraumeni', v: 'Germline TP53 mutation. Early-onset sarcomas, breast, brain tumors, leukemia, adrenocortical carcinoma.' },
      { k: 'p21', v: 'CKI (cyclin-dependent kinase inhibitor). Binds and shuts down cyclin D/CDK4-6 and cyclin E/CDK2 → G1 arrest.' },
      { k: 'p16 (CDKN2A)', v: 'INK4 family CKI. Inhibits CDK4/6 specifically. Frequently lost in melanoma, pancreatic, glioma.' },
      { k: 'HPV E6 / E7', v: 'E6 ubiquitinates p53 (like MDM2). E7 displaces E2F from Rb. Both brakes off → cervical / oropharyngeal cancer. HPV vaccine prevents this.' },
      { k: 'Three checkpoints', v: 'G1/S (most exam-relevant — Rb/p53 axis). G2/M (CDC25 phosphatase activates CDK1). Spindle (SAC keeps APC/C off until all kinetochores attached).' },
      { k: 'CDK4/6 inhibitors', v: 'Palbociclib, ribociclib, abemaciclib. Used in HR+/HER2− metastatic breast cancer with endocrine therapy.' },
      { k: 'Spindle poisons', v: 'Vincristine/vinblastine block tubulin polymerization (SAC arrest, apoptosis). Paclitaxel STABILIZES microtubules (also SAC arrest).' },
      { k: 'APC/C', v: 'E3 ligase that destroys securin (releases separase → sister chromatid separation) and cyclin B (inactivates CDK1 → mitotic exit) at metaphase-anaphase transition.' }
    ]
  },

  questions: [
    { id: 'cc-q1', difficulty: 'easy', prompt: { en: 'Which cyclin-CDK pair drives the G1 → S transition?' }, correct: 'Cyclin E / CDK2', options: ['Cyclin E / CDK2', 'Cyclin D / CDK4-6', 'Cyclin A / CDK1', 'Cyclin B / CDK1'] },
    { id: 'cc-q2', difficulty: 'easy', prompt: { en: 'M-phase Maturation-Promoting Factor (MPF) is:' }, correct: 'Cyclin B / CDK1', options: ['Cyclin B / CDK1', 'Cyclin A / CDK2', 'Cyclin D / CDK4-6', 'Cyclin E / CDK2'] },
    { id: 'cc-q3', difficulty: 'medium', prompt: { en: 'Cyclin D is induced primarily by:' }, correct: 'Growth-factor signaling through ERK / Myc', options: ['Growth-factor signaling through ERK / Myc', 'p53 transcription', 'TGF-β / SMAD', 'Direct cAMP signaling'] },
    { id: 'cc-q4', difficulty: 'medium', prompt: { en: 'Rb in its hypo-phosphorylated state:' }, correct: 'Binds E2F and prevents S-phase gene transcription', options: ['Binds E2F and prevents S-phase gene transcription', 'Activates E2F transcription', 'Phosphorylates cyclin D', 'Drives DNA replication'] },
    { id: 'cc-q5', difficulty: 'medium', prompt: { en: 'In a healthy cell, p53 is normally:' }, correct: 'Constantly degraded by MDM2-mediated ubiquitination', options: ['Constantly degraded by MDM2-mediated ubiquitination', 'Constitutively transcribing target genes', 'Stored in the cytoplasm bound to Bcl-2', 'Phosphorylated and stable'] },
    { id: 'cc-q6', difficulty: 'medium', prompt: { en: 'p21 is a:' }, correct: 'Cyclin-dependent kinase inhibitor (CKI)', options: ['Cyclin-dependent kinase inhibitor (CKI)', 'Cyclin', 'Phosphatase', 'Ubiquitin ligase'] },
    { id: 'cc-q7', difficulty: 'hard', prompt: { en: 'HPV E7 protein causes cervical cancer by:' }, correct: 'Binding Rb and displacing E2F (mimics RB1 loss)', options: ['Binding Rb and displacing E2F (mimics RB1 loss)', 'Inhibiting CDK4/6', 'Stabilizing p53', 'Blocking DNA replication'] },
    { id: 'cc-q8', difficulty: 'hard', prompt: { en: 'HPV E6 inactivates p53 by:' }, correct: 'Recruiting an E3 ligase to ubiquitinate p53 for degradation', options: ['Recruiting an E3 ligase to ubiquitinate p53 for degradation', 'Phosphorylating p53', 'Cleaving p53 directly', 'Trapping p53 in the cytoplasm'] },
    { id: 'cc-q9', difficulty: 'medium', prompt: { en: 'Knudson\'s "two-hit" hypothesis applies to:' }, correct: 'Retinoblastoma (RB1)', options: ['Retinoblastoma (RB1)', 'KRAS-mutant pancreatic cancer', 'BCR-ABL CML', 'BRAF V600E melanoma'] },
    { id: 'cc-q10', difficulty: 'hard', prompt: { en: 'The G2/M checkpoint is overcome when:' }, correct: 'CDC25 phosphatase removes inhibitory phosphates from CDK1', options: ['CDC25 phosphatase removes inhibitory phosphates from CDK1', 'p53 activates p21', 'Cyclin D rises', 'Rb is fully phosphorylated'] },
    { id: 'cc-q11', difficulty: 'medium', prompt: { en: 'The spindle-assembly checkpoint prevents progression past:' }, correct: 'Metaphase (until all kinetochores are attached bipolarly)', options: ['Metaphase (until all kinetochores are attached bipolarly)', 'G1 (until cyclin D rises)', 'S phase (until origins fire)', 'Telophase'] },
    { id: 'cc-q12', difficulty: 'hard', prompt: { en: 'Palbociclib is a:' }, correct: 'CDK4/6 inhibitor (used in HR+ metastatic breast cancer)', options: ['CDK4/6 inhibitor (used in HR+ metastatic breast cancer)', 'CDK1 inhibitor', 'p53 activator', 'Aurora kinase inhibitor'] },
    { id: 'cc-q13', difficulty: 'medium', prompt: { en: 'Mantle-cell lymphoma is associated with:' }, correct: 'Cyclin D1 overexpression from t(11;14)', options: ['Cyclin D1 overexpression from t(11;14)', 'BCR-ABL t(9;22)', 'Cyclin E loss', 'p53 mutation only'] },
    { id: 'cc-q14', difficulty: 'hard', prompt: { en: 'APC/C-CDC20 triggers anaphase by:' }, correct: 'Ubiquitinating securin (frees separase) and cyclin B (inactivates CDK1)', options: ['Ubiquitinating securin (frees separase) and cyclin B (inactivates CDK1)', 'Phosphorylating Rb', 'Activating p53', 'Releasing E2F'] },
    { id: 'cc-q15', difficulty: 'hard', prompt: { en: 'Li-Fraumeni syndrome is caused by germline mutations in:' }, correct: 'TP53', options: ['TP53', 'RB1', 'BRCA1', 'APC'] }
  ]
};
