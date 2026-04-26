// ============================================================
// APOPTOSIS — extrinsic (death receptors) + intrinsic (mitochondrial)
// Layout: 'pathway' (two converging cascades)
// ============================================================

export const apoptosisCycle = {
  id: 'apoptosis',
  chapter: 'Apoptosis',
  chapterOrder: 5,
  order: 1,
  layout: 'pathway',
  title: { en: 'Apoptosis', he: 'אפופטוזיס' },
  subtitle: { en: 'Extrinsic + intrinsic → caspase cascade → programmed cell death' },

  context: {
    tissue: { en: 'Universal — every cell type can apoptose. Especially active in immune development (negative selection of T cells in thymus), embryogenesis (digit separation), epithelial turnover (gut every 3-5 days), and atrophy of hormone-dependent tissues (mammary involution post-lactation).' },
    state: { en: 'Continuously active at low rate (homeostasis). Massively activated by genotoxic stress (radiation, chemo), immune attack (cytotoxic T cells, NK cells), trophic-factor withdrawal, and developmental cues.' },
    stateHormonal: { en: 'Glucocorticoids drive lymphocyte apoptosis (basis of steroids in lymphoma/leukemia). Withdrawal of estrogen → endometrial apoptosis (menstruation). Withdrawal of androgens → prostate involution.' },
    turnover: { en: 'Once committed, the entire process completes within hours — chromatin condenses, cell shrinks, blebs form, apoptotic bodies are phagocytosed. NO inflammation (contrast with necrosis).' }
  },

  overview: {
    en: `Apoptosis is **programmed cell death** — an orderly, inflammation-free, energy-dependent dismantling of a cell. The morphologic features (cell shrinkage, chromatin condensation, "DNA ladder" from internucleosomal cleavage, membrane blebbing, phagocytosis without inflammation) all flow from the same molecular machinery: a **caspase cascade**. Caspases are cysteine proteases that cleave after aspartate residues. They start as inactive zymogens (pro-caspases) and are activated by limited proteolysis (often by other caspases — a chain reaction). Two major activation routes converge on the executioner caspases: **(1) The extrinsic / death-receptor pathway:** ligands like FasL, TNF, and TRAIL bind death receptors (Fas, TNFR1, TRAIL-R) → cytoplasmic adapters (FADD) recruit pro-caspase-8 via DED-DED interactions → DISC assembly → caspase-8 dimerizes and self-activates by induced proximity → cleaves and activates executioner caspase-3. **(2) The intrinsic / mitochondrial pathway:** cellular stress (DNA damage, growth-factor withdrawal, hypoxia, ER stress) → BH3-only sensors (Bim, Bid, PUMA, NOXA, BAD) accumulate or are activated → they neutralize anti-apoptotic Bcl-2 / Bcl-xL → unleashes BAX and BAK → BAX/BAK oligomerize in the outer mitochondrial membrane → MOMP (mitochondrial outer-membrane permeabilization) → cytochrome c is released into cytoplasm → cyt-c + Apaf-1 + pro-caspase-9 + dATP form the **apoptosome** → caspase-9 dimerizes and activates → cleaves caspase-3. Both pathways converge on **caspase-3 (and caspase-7)**, which cleaves >100 cellular substrates: **ICAD** (releases CAD endonuclease → DNA fragmentation), **lamins** (nuclear envelope dismantling), **PARP** (energy-conservation, prevents NAD⁺ depletion), **gelsolin** (cytoskeletal demolition), and many others. Final step: phosphatidylserine flips to the outer leaflet ("eat me" signal) → macrophages engulf apoptotic bodies. **Bcl-2** family rheostat is the central life-or-death decision: amount of pro-apoptotic BAX/BAK vs anti-apoptotic Bcl-2/Bcl-xL/Mcl-1 sets the threshold. Cancer evades this with t(14;18) Bcl-2 overexpression (follicular lymphoma) — targeted by **venetoclax** (BH3-mimetic). Loss of caspase-8 / Fas / FasL drives **autoimmune lymphoproliferative syndrome (ALPS)**. Defective lymphocyte apoptosis underlies many autoimmune diseases.`
  },

  pedagogy: [
    {
      title: 'Apoptosis vs necrosis — why programmed death exists',
      icon: '⚖️',
      body: `Cells can die two fundamentally different ways:

**Necrosis** — passive, energy-INDEPENDENT, dirty. Cell swells, plasma membrane ruptures, cytoplasmic contents (including DAMPs — Damage-Associated Molecular Patterns like HMGB1, ATP, uric acid) spill out → INFLAMMATION. Triggered by overwhelming injury — severe ischemia, toxins, complement-mediated lysis, freezing.

**Apoptosis** — active, energy-DEPENDENT, clean. Cell shrinks (NOT swells), chromatin condenses ("pyknosis") and fragments ("karyorrhexis"), membrane stays intact, "blebs" pinch off as **apoptotic bodies**. Phosphatidylserine flips to the outer leaflet — an "eat me" signal recognized by macrophage receptors. Macrophages engulf apoptotic bodies BEFORE they leak. **NO inflammation.**

**Why evolution wanted programmed cell death:**

1. **Sculpting in development** — interdigital webs in human embryos die by apoptosis; failure → syndactyly. Tadpole tail resorption during metamorphosis. Müllerian/Wolffian duct regression depending on sex.

2. **Immune self-tolerance** — autoreactive T-cells in the thymus that bind self-MHC + self-peptide too strongly are deleted by apoptosis (negative selection). B cells get the same treatment in bone marrow. Failure → autoimmunity.

3. **Tissue homeostasis** — gut epithelium turns over every 3–5 days. Old enterocytes apoptose at the villus tip. Liver hepatocytes after partial hepatectomy proliferate, then return to baseline numbers via apoptosis.

4. **Defense against damage** — DNA-damaged cells either repair OR commit suicide. Single damaged cell → eliminated. Hundreds of damaged cells → tissue stays clean. Without apoptosis, every UV-irradiated keratinocyte would become a melanoma seed.

5. **Defense against viruses** — infected cell apoptoses → virus loses its replication factory. Many viruses encode anti-apoptotic proteins (HPV E6, EBV BHRF1, KSHV vBcl-2, baculovirus p35) to keep their host alive long enough to replicate.

**Recent additions to the death menu:**

- **Necroptosis** — programmed necrosis, RIPK1/RIPK3 → MLKL → membrane pores. Inflammatory.
- **Pyroptosis** — caspase-1 (or -4/-5/-11) → gasdermin pores. Inflammasome-driven. Highly inflammatory (releases IL-1β, IL-18). Major in bacterial infection.
- **Ferroptosis** — iron-dependent lipid peroxidation. GPX4 deficiency. Implicated in stroke, neurodegeneration.
- **Autophagy** — usually cytoprotective, occasionally cytotoxic.

**Apoptosis remains the inflammation-FREE option** — and that\'s its key biological niche.`
    },
    {
      title: 'The Bcl-2 family rheostat — pro- vs anti-apoptotic',
      icon: '⚖️',
      body: `The intrinsic pathway is fundamentally a competition between Bcl-2 family members. The OUTCOME — does cytochrome c leak out of mitochondria? — is determined by the BALANCE of three subgroups:

**1. Pore-formers (executioners): BAX, BAK, BOK.**
When activated, oligomerize in the outer mitochondrial membrane → form pores → MOMP → cytochrome c floods into cytoplasm → apoptosome → caspase-9 → caspase-3 → death. BAX is normally cytosolic; activation involves conformational change and translocation to the mitochondrion. BAK is constitutively at the mitochondrion.

**2. Anti-apoptotic guardians: Bcl-2, Bcl-xL, Mcl-1, A1, Bcl-W.**
Sit at the outer mitochondrial membrane and physically bind/sequester BAX/BAK and BH3-only proteins, keeping the executioners restrained. Normal cells maintain enough anti-apoptotic Bcl-2 family protein to keep BAX/BAK quiet.

**3. Sensors: BH3-only proteins (Bim, Bid, PUMA, NOXA, BAD, BMF, BIK, HRK).**
The "input layer." Each BH3-only protein is induced or activated by a specific stress:
- **Bim** — withdrawal of growth factors / cytokines (released from microtubules when neglected).
- **Bid** — cleaved by **caspase-8** to generate **tBid** (truncated Bid) — this is HOW the extrinsic pathway can also amplify through the mitochondrion. Important in hepatocytes, where caspase-8 alone isn\'t enough.
- **PUMA, NOXA** — transcribed by **p53** in response to DNA damage. The molecular link between genotoxic stress and apoptosis.
- **BAD** — phosphorylated and inactivated by **Akt** (PI3K survival signal). Why growth-factor withdrawal triggers death: Akt activity falls → BAD dephosphorylates → BAD active → sequesters Bcl-2 → BAX/BAK released.

**The decision logic:**
- Plenty of anti-apoptotic Bcl-2 around → it absorbs all the BH3-only signal → BAX/BAK quiet → cell lives.
- Stress triggers BH3-only proteins → they bind and inhibit Bcl-2 / Bcl-xL → freed BAX/BAK → MOMP → death.
- Cancer cells often overexpress Bcl-2 (e.g., follicular lymphoma t(14;18)) → high apoptotic threshold → resistance to chemotherapy.

**Drug exploitation:**
- **Venetoclax** (and predecessors ABT-199, ABT-737, navitoclax) are **BH3 mimetics** — small molecules that look like a BH3 helix and bind anti-apoptotic Bcl-2, displacing BAX/BAK. Cells "primed" with high pro-apoptotic load are then tipped over the threshold. **Venetoclax** is approved for CLL and AML and works precisely because these tumor cells are Bcl-2-dependent.`
    },
    {
      title: 'The caspase cascade — initiator vs executioner',
      icon: '⚔️',
      body: `Caspases are **c**ysteine-**asp**arta**ases**: cysteine proteases that cleave their substrates after **aspartate** residues. ~15 in humans. Two functional classes:

**Initiator caspases (caspase-2, -8, -9, -10).**
Long N-terminal prodomains containing protein-interaction motifs (DED in caspase-8/10, CARD in caspase-9). The prodomains let initiator caspases dock onto activation platforms (DISC, apoptosome). At the platform, multiple pro-caspase monomers cluster — and the high local concentration drives dimerization → autocleavage → active enzyme. This "induced proximity" model means initiator caspases activate WITHOUT a separate upstream activator — clustering itself is the signal.

- **Caspase-8** docks at the DISC (Fas/FADD/pro-caspase-8) downstream of Fas / TNFR / TRAIL.
- **Caspase-9** docks at the apoptosome (Apaf-1/cyt-c/pro-caspase-9/dATP) downstream of MOMP.
- **Caspase-10** is partially redundant with caspase-8 in humans.
- **Caspase-2** has unique upstream signals (DNA damage, ER stress) and forms the PIDDosome.

**Executioner caspases (caspase-3, -6, -7).**
Short prodomains. Activated by initiator caspases via direct cleavage (not induced proximity). Once active, executioner caspases — especially **caspase-3** — go to work on the actual cellular substrates that produce the apoptotic phenotype:

- **ICAD/DFF45** → cleavage releases CAD/DFF40 nuclease → cuts DNA between nucleosomes → 180-bp ladder visible on gel ("DNA laddering").
- **PARP** (poly-ADP-ribose polymerase) → cleaved → stops trying to repair (saves NAD⁺/ATP for the orderly demolition).
- **Lamins A/B/C** → nuclear envelope dismantling → karyolysis.
- **Gelsolin** → cleaved into a constitutively active fragment → severs actin filaments → cell rounds up, blebs.
- **Rho-kinase (ROCK1)** → constitutively active fragment → membrane blebbing via myosin light-chain phosphorylation.
- **PAK2** → cell shrinkage and apoptotic body formation.
- **Bid** → tBid → amplifies via mitochondria (positive feedback).
- **Many transcription factors** → acute shutdown of survival programs.

**Inflammatory caspases (caspase-1, -4, -5, -11).** A SEPARATE branch — they don\'t do apoptosis, they do **pyroptosis**. Caspase-1 is the inflammasome effector: activated by NLRP3 → cleaves pro-IL-1β and pro-IL-18 to mature cytokines + cleaves gasdermin D → membrane pores → inflammatory cell death. Important in gout (urate inflammasome), familial Mediterranean fever (pyrin pathway), bacterial sensing.`
    },
    {
      title: 'Clinical applications — when apoptosis goes right and wrong',
      icon: '🏥',
      body: `**Defective apoptosis → cancer (and autoimmunity).**

- **Follicular lymphoma — t(14;18)**: BCL2 gene under IgH heavy-chain enhancer → constitutive Bcl-2 overexpression → indolent B-cell tumor that accumulates rather than rapidly proliferating. The most common low-grade NHL. Targeted therapy: **venetoclax** (BH3 mimetic).
- **Castration-resistant prostate cancer**: tumor cells initially die when androgens withdrawn (Akt falls → BAD active → apoptosis), but escape mutants restore Akt signaling → resistance.
- **Autoimmune lymphoproliferative syndrome (ALPS)**: germline FAS or FAS-L or caspase-10 mutations → autoreactive lymphocytes that should have been deleted survive → lymphadenopathy + autoimmune cytopenias + ↑ "double-negative" T cells (CD4⁻CD8⁻ TCRαβ⁺).
- **Many autoimmune diseases (SLE, RA)** show defective lymphocyte apoptosis — autoreactive clones persist.

**Excessive apoptosis → degeneration and atrophy.**

- **Neurodegeneration** — Alzheimer\'s, Parkinson\'s, Huntington\'s all involve apoptotic loss of neurons. Some triggered by misfolded protein → ER stress → BH3-only induction → mitochondrial apoptosis.
- **Stroke** — penumbra cells around infarct undergo apoptosis. Targeting caspases or BAX can reduce final stroke size in animal models.
- **HIV infection** — CD4⁺ T-cell depletion is partly direct viral cytopathy, partly bystander apoptosis from gp120 cross-linking and gp41-mediated membrane fusion. Eventually CD4 count falls below 200 → AIDS.
- **Heart failure** — chronic ischemia + neurohormonal overload drive cardiomyocyte apoptosis → ventricular remodeling.

**Therapeutic exploitation of apoptosis.**

- **Cytotoxic chemotherapy** works largely by inducing DNA damage that triggers p53-dependent apoptosis. p53 wild-type tumors are more responsive than p53 mutant.
- **Radiation** — same mechanism, but local.
- **Glucocorticoids** in lymphoma/leukemia — directly induce lymphocyte apoptosis via glucocorticoid-receptor-mediated transcription of BH3-only proteins. Why dexamethasone is part of CHOP, MOPP, etc.
- **Granzyme B** delivered by cytotoxic T cells / NK cells — cleaves caspase-3 directly AND cleaves Bid → both pathways. Kill-mechanism for virally infected and tumor cells.
- **Targeted Bcl-2 inhibition (venetoclax)** — CLL, AML.
- **TRAIL / death-receptor agonists** — tested in trials. The selling point: many tumor cells express high TRAIL-R and are TRAIL-sensitive while normal cells are largely insensitive. Limited clinical success so far.

**Cytochrome c is uniquely useful as the "release" signal**: in normal life it sits in the intermembrane space participating in oxidative phosphorylation. Its release into cytoplasm is so unusual that the cell uses it as the molecular cue for "we have crossed a threshold" — clean separation between life and death decisions.`
    }
  ],

  mnemonic: {
    en: { phrase: 'Two paths, one ending: Extrinsic (death-R → caspase-8) + Intrinsic (cyt c → caspase-9) → Caspase-3 → death', breakdown: 'BAX/BAK = pore-formers. Bcl-2/Bcl-xL = guardians. BH3-only (Bim/Bid/PUMA/NOXA/BAD) = sensors. p53 → PUMA/NOXA → mitochondrial apoptosis.' }
  },

  compartments: {
    cyto: { en: 'Plasma membrane + mitochondria + cytosol', he: 'קרום פלזמה + מיטוכונדריה + ציטוזול', color: '#fee2e2', accent: '#dc2626' }
  },

  pathway: {
    viewBox: [0, 0, 1100, 920],
    nodes: [
      // ===== Tier 1 — two stimuli =====
      { id: 'fasL', label: 'Death Ligand', sublabel: 'FasL · TNF · TRAIL', x: 250, y: 60, type: 'ligand',
        hint: 'Trimeric ligands secreted or membrane-bound. FasL on cytotoxic T cells / NK cells. TNF-α from macrophages in inflammation. TRAIL has a special property — kills tumor cells preferentially while sparing normal cells (active in clinical-trial agents).' },
      { id: 'stress', label: 'Cellular Stress', sublabel: 'DNA damage · GF withdrawal · hypoxia', x: 850, y: 60, type: 'ligand',
        hint: 'Anything that drives the BH3-only proteins past threshold: DNA damage (ATM/ATR → p53), growth-factor withdrawal (Akt falls → BAD active), ER stress (CHOP transcription), hypoxia, oxidative stress, oncogenic stress (Myc → ARF → p53).' },

      // ===== Tier 2 — receptors / sensors =====
      { id: 'fas', label: 'Death Receptor', sublabel: 'Fas / TNFR / TRAIL-R', x: 250, y: 175, type: 'receptor',
        hint: 'Single-transmembrane receptors with cytoplasmic "death domains" (DD). On ligand-induced trimerization, the DDs cluster and recruit FADD via DD-DD interactions.',
        clinical: { disorder: 'Autoimmune Lymphoproliferative Syndrome (ALPS)', findings: { en: 'Germline FAS, FASL, or caspase-10 mutations → defective lymphocyte apoptosis → lymphadenopathy + hepatosplenomegaly + autoimmune cytopenias + elevated CD4⁻CD8⁻ "double-negative" TCRαβ⁺ T cells.' } } },
      { id: 'p53', label: 'p53 stabilized', sublabel: 'guardian of the genome', x: 700, y: 175, type: 'modifier',
        hint: 'DNA damage → ATM/ATR → phosphorylates p53 → escapes MDM2 degradation → accumulates. Drives transcription of pro-apoptotic targets (PUMA, NOXA, BAX) when damage is irreparable. >50% of cancers have p53 mutations, which is why they are chemo-resistant.' },
      { id: 'akt_off', label: 'Akt activity ↓', sublabel: 'GF-withdrawal sensor', x: 970, y: 175, type: 'modifier',
        hint: 'Akt phosphorylates BAD on Ser-136, sequestering it via 14-3-3. When growth factors disappear → Akt activity falls → BAD dephosphorylated → BAD active → binds Bcl-2/Bcl-xL → BAX/BAK released. The biochemical link between "no growth factor" and "die now."' },

      // ===== Tier 3 — adaptor + sensors =====
      { id: 'fadd', label: 'FADD', sublabel: 'death-domain adapter', x: 250, y: 290, type: 'adapter',
        hint: 'Fas-Associated Death Domain protein. Binds clustered death domains via its own DD. Recruits pro-caspase-8 via DED-DED interactions. The DISC = receptor + FADD + multiple pro-caspase-8 molecules clustered together.' },
      { id: 'bh3', label: 'BH3-only proteins', sublabel: 'PUMA · NOXA · Bim · BAD · Bid', x: 850, y: 290, type: 'modifier',
        hint: 'Sensors of cellular stress. PUMA and NOXA induced by p53 (DNA damage). Bim released from microtubules when GF withdrawn. BAD activated when Akt signal falls. Bid cleaved by caspase-8 (extrinsic→intrinsic crosstalk). Each binds and neutralizes anti-apoptotic Bcl-2 / Bcl-xL.' },

      // ===== Tier 4 — Bcl-2 rheostat =====
      { id: 'bcl2', label: 'Bcl-2 / Bcl-xL', sublabel: 'anti-apoptotic guardians', x: 700, y: 415, type: 'modifier',
        hint: 'Sit at the outer mitochondrial membrane. Sequester pro-apoptotic BAX/BAK and BH3-only proteins, keeping the cell alive. Cancer cells often overexpress these to evade apoptosis.',
        clinical: { disorder: 'Follicular lymphoma t(14;18)', findings: { en: 'BCL2 placed under control of the IgH enhancer → constitutive Bcl-2 overexpression → cells accumulate (don\'t die) rather than rapidly dividing. Most common low-grade non-Hodgkin lymphoma.' }, treatment: { en: 'Venetoclax (BH3-mimetic, displaces BAX/BAK from Bcl-2). Also active in CLL and AML.' } },
        drugs: ['venetoclax', 'navitoclax (research)'] },
      { id: 'bax', label: 'BAX / BAK', sublabel: 'pore-formers', x: 1000, y: 415, type: 'enzyme',
        hint: 'When freed from Bcl-2 sequestration, oligomerize in the outer mitochondrial membrane and form pores. BAX is normally cytosolic; BAK is constitutively mitochondrial. Both required (compensate somewhat in single knockouts).' },

      // ===== Tier 5 — caspase-8 (extrinsic) and cyt c release (intrinsic) =====
      { id: 'casp8', label: 'Caspase 8', sublabel: 'initiator (DED)', x: 250, y: 415, type: 'enzyme',
        hint: 'Initiator caspase. Activated by induced proximity at the DISC. Long DED-containing prodomain lets it dock on FADD. Once dimerized, autocleaves to active form. Cleaves caspase-3 directly AND cleaves Bid → tBid → amplifies via mitochondria (especially important in type-II cells like hepatocytes).',
        clinical: { disorder: 'Caspase-8 deficiency', findings: { en: 'Combined immunodeficiency + ALPS-like features. Caspase-8 has roles beyond apoptosis (lymphocyte activation).' } } },
      { id: 'cytc', label: 'Cytochrome c released', sublabel: 'MOMP', x: 850, y: 540, type: 'messenger',
        hint: 'Cytochrome c normally lives in the mitochondrial intermembrane space participating in electron transport. BAX/BAK pores release it into the cytoplasm — a unique "this should never be in the cytosol" signal that triggers apoptosome assembly.' },

      // ===== Tier 6 — apoptosome → caspase 9 =====
      { id: 'apaf', label: 'Apoptosome', sublabel: 'Apaf-1 + cyt c + dATP', x: 850, y: 660, type: 'enzyme',
        hint: 'Cytochrome c binds Apaf-1 (Apoptotic Protease Activating Factor 1) → Apaf-1 unfolds and oligomerizes into a 7-spoke wheel → recruits pro-caspase-9 via CARD-CARD interactions → caspase-9 dimerizes and activates by induced proximity.' },
      { id: 'casp9', label: 'Caspase 9', sublabel: 'initiator (CARD)', x: 850, y: 770, type: 'enzyme',
        hint: 'Initiator caspase of the intrinsic pathway. Once activated, cleaves and activates caspase-3 (and -7). Inhibited by IAPs (inhibitor of apoptosis proteins) — but those are themselves antagonized by SMAC/DIABLO, also released from mitochondria during MOMP.' },

      // ===== Tier 7 — convergence on caspase 3 =====
      { id: 'casp3', label: 'Caspase 3', sublabel: 'executioner', x: 550, y: 805, type: 'enzyme',
        hint: 'The convergence point. Both pathways feed in here. Cleaves >100 cellular substrates: ICAD (releases DNA endonuclease CAD), PARP (energy conservation), lamins (nuclear envelope), gelsolin (cytoskeleton), ROCK1 (membrane blebbing).' },

      // ===== Tier 8 — final output =====
      { id: 'death', label: 'DNA Fragmentation · Cell Death', sublabel: 'apoptotic bodies → phagocytosis · NO inflammation', x: 550, y: 905, type: 'output',
        hint: 'Final morphologic features: cell shrinks (not swells), chromatin condenses (pyknosis) and fragments (karyorrhexis, DNA ladder), membrane blebs, phosphatidylserine flips to outer leaflet ("eat me" signal), apoptotic bodies are engulfed by macrophages. NO inflammation — the defining contrast with necrosis.' }
    ],
    edges: [
      // Extrinsic arm
      { from: 'fasL', to: 'fas', label: 'binds + trimerizes', style: 'activate' },
      { from: 'fas', to: 'fadd', label: 'DD-DD', style: 'activate' },
      { from: 'fadd', to: 'casp8', label: 'DED-DED · DISC', style: 'activate' },
      // Intrinsic arm
      { from: 'stress', to: 'p53', label: 'ATM/ATR', style: 'activate' },
      { from: 'stress', to: 'akt_off', label: 'GF removed', style: 'activate' },
      { from: 'p53', to: 'bh3', label: 'transcribes', style: 'activate' },
      { from: 'akt_off', to: 'bh3', label: 'BAD active', style: 'activate' },
      { from: 'bh3', to: 'bcl2', label: '⊣ neutralizes', style: 'inhibit' },
      { from: 'bcl2', to: 'bax', label: '⊣ sequesters', style: 'inhibit' },
      { from: 'bax', to: 'cytc', label: 'MOMP pore', style: 'activate' },
      { from: 'cytc', to: 'apaf', label: 'binds Apaf-1', style: 'activate' },
      { from: 'apaf', to: 'casp9', label: 'CARD-CARD', style: 'activate' },
      // Cross-talk: caspase-8 cleaves Bid → amplifies through mito
      { from: 'casp8', to: 'bh3', label: 'tBid', style: 'activate' },
      // Convergence on caspase 3
      { from: 'casp8', to: 'casp3', label: 'cleaves', style: 'activate' },
      { from: 'casp9', to: 'casp3', label: 'cleaves', style: 'activate' },
      { from: 'casp3', to: 'death', label: 'demolition', style: 'activate' }
    ]
  },

  integrations: [
    {
      name: 'p53 → intrinsic apoptosis',
      toCycle: 'Cell Cycle',
      path: { en: 'DNA damage → ATM/ATR → p53 stabilized. If damage repairable → p21 → arrest. If not → p53 transcribes BAX, PUMA, NOXA → BH3-only proteins overcome Bcl-2 → BAX/BAK pore → MOMP → apoptosis. p53 mutations (>50% of cancers) blunt this — why p53-mutant tumors resist chemotherapy.' },
      note: { en: 'Same upstream regulator (p53) chooses between two fates depending on damage severity. Determines chemo-responsiveness.' }
    },
    {
      name: 'Akt → BAD inhibition (survival signal)',
      toCycle: 'Receptor Tyrosine Kinases',
      path: { en: 'Growth factor → RTK → PI3K → PIP₃ → Akt → phosphorylates BAD on Ser-136 → 14-3-3 sequesters BAD → Bcl-2/Bcl-xL free to inhibit BAX/BAK → cell survives. Withdraw growth factor → Akt activity falls → BAD active → apoptosis.' },
      note: { en: 'Why GF withdrawal kills cells AND why constitutive Akt activation in cancer (PTEN loss) drives both growth and survival.' }
    },
    {
      name: 'Cytotoxic T cells / NK cells use both pathways',
      toCycle: 'Adaptive immunity',
      path: { en: 'CTL recognizes infected/tumor cell via MHC-I. Two killing routes: (1) FasL on CTL → Fas on target → extrinsic. (2) Granule exocytosis releases perforin (pores) + granzyme B → granzyme B enters target → cleaves caspase-3 directly AND Bid → tBid → mitochondrial amplification. Multiple redundant routes ensure target dies.' },
      note: { en: 'Why granzyme-B-resistant tumors (e.g., overexpressing serpin SERPINB9) escape immune surveillance.' }
    },
    {
      name: 'HIV → CD4 T-cell depletion',
      toCycle: 'Immunodeficiency',
      path: { en: 'HIV gp120 binds CD4 + CCR5/CXCR4 → fusion + viral entry. gp120 cross-linking on uninfected bystanders (especially follicular T cells) drives apoptosis. Direct cytopathy of infected cells (caspase activation by viral proteins). Net: progressive CD4 decline → AIDS at <200 cells/μL.' },
      note: { en: 'Both direct (infected) and bystander (uninfected gp120-exposed) apoptosis contribute to immune failure.' }
    },
    {
      name: 'Cancer: evading apoptosis',
      toCycle: 'Cancer biology',
      path: { en: 'Hallmark of cancer = avoidance of cell death. Bcl-2 amplification (follicular lymphoma t(14;18)). Loss of p53 (most cancers). Akt/PI3K activation (PTEN loss). IAP overexpression. Loss of caspase activity. All converge on raising the apoptotic threshold so genomically damaged or oncogenically driven cells survive.' },
      note: { en: 'Why combination therapies that hit growth + apoptosis simultaneously are more effective.' }
    },
    {
      name: 'Mitochondria: metabolism AND apoptosis',
      toCycle: 'Mitochondrial biology',
      path: { en: 'Cytochrome c lives in the intermembrane space participating in oxidative phosphorylation under normal conditions. Its release into cytoplasm is the irreversible commitment to apoptosis. SMAC/DIABLO is released alongside cyt c — it inhibits IAPs, lifting their brake on caspases.' },
      note: { en: 'The same protein has two completely different jobs depending on its location.' }
    }
  ],

  bigPicture: {
    en: [
      { k: 'Apoptosis vs necrosis', v: 'Apoptosis = programmed, energy-dependent, NO inflammation, cell shrinks, chromatin condenses, blebs, phagocytosed. Necrosis = passive, cell swells, membrane ruptures, INFLAMMATION (DAMPs released).' },
      { k: 'Two pathways', v: 'EXTRINSIC (death receptors) + INTRINSIC (mitochondrial) → both converge on caspase-3.' },
      { k: 'Extrinsic — players', v: 'FasL/TNF/TRAIL → Fas/TNFR/TRAIL-R → FADD adapter → pro-caspase-8 (DISC) → caspase-8 → caspase-3.' },
      { k: 'Intrinsic — players', v: 'Stress → BH3-only ↑ → inhibit Bcl-2/Bcl-xL → BAX/BAK pore (MOMP) → cyt c → Apaf-1 + cyt c → apoptosome → caspase-9 → caspase-3.' },
      { k: 'Crosstalk', v: 'Caspase-8 cleaves Bid → tBid → activates BAX/BAK → mitochondrial amplification. Important in type-II cells (hepatocytes).' },
      { k: 'Bcl-2 family — three groups', v: 'Pore-formers (BAX, BAK). Anti-apoptotic guardians (Bcl-2, Bcl-xL, Mcl-1). BH3-only sensors (Bim, Bid, PUMA, NOXA, BAD).' },
      { k: 'p53 → apoptosis', v: 'DNA damage → ATM/ATR → p53 stabilized → transcribes PUMA, NOXA, BAX → mitochondrial pathway → death.' },
      { k: 'Akt → survival', v: 'GF → RTK → PI3K → Akt → phosphorylates BAD (sequestered) + FOXO (out of nucleus) + pro-caspase-9 (inhibited). Lose Akt → all those brakes release.' },
      { k: 'Caspases', v: 'Cysteine proteases that cleave after Asp. Initiators (8, 9, 10, 2) → activated by clustering on platforms. Executioners (3, 6, 7) → activated by initiator cleavage.' },
      { k: 'Caspase-3 substrates', v: 'ICAD (releases CAD nuclease — DNA ladder), PARP, lamins, gelsolin (blebbing), ROCK1, Bid (amplifies).' },
      { k: 'Follicular lymphoma t(14;18)', v: 'BCL2 under IgH enhancer → constitutive Bcl-2 overexpression → cells accumulate, don\'t die. Most common indolent NHL.' },
      { k: 'Venetoclax', v: 'BH3 mimetic. Binds anti-apoptotic Bcl-2, displaces BAX/BAK. Approved for CLL, AML. Tumor lysis syndrome a major safety concern at initiation.' },
      { k: 'ALPS', v: 'FAS / FASL / caspase-10 mutations → defective lymphocyte apoptosis → lymphadenopathy + autoimmune cytopenias + ↑CD4⁻CD8⁻ TCRαβ⁺ T cells.' },
      { k: 'CTL / NK killing', v: 'FasL/Fas extrinsic + perforin/granzyme B (cleaves caspase-3 and Bid). Multiple redundant routes.' },
      { k: 'HIV', v: 'gp120-mediated bystander apoptosis + direct cytopathy → CD4 decline → AIDS.' },
      { k: 'Glucocorticoids in lymphoma', v: 'Directly induce lymphocyte apoptosis (BH3-only transcription). Why dexamethasone is part of CHOP, MOPP, R-EPOCH.' },
      { k: 'Phosphatidylserine flip', v: 'PS normally on inner leaflet, kept there by flippase (ATP-dependent). Apoptosis → flippase OFF + scramblase ON → PS on OUTER leaflet → "eat me" signal for macrophage receptors (TAM, BAI1).' }
    ]
  },

  questions: [
    { id: 'ap-q1', difficulty: 'easy', prompt: { en: 'The hallmark feature distinguishing apoptosis from necrosis is:' }, correct: 'Lack of inflammation', options: ['Lack of inflammation', 'Cell swelling', 'Loss of membrane integrity', 'Release of HMGB1'] },
    { id: 'ap-q2', difficulty: 'easy', prompt: { en: 'Caspases are:' }, correct: 'Cysteine proteases that cleave after aspartate residues', options: ['Cysteine proteases that cleave after aspartate residues', 'Serine proteases', 'Tyrosine kinases', 'Phosphatases'] },
    { id: 'ap-q3', difficulty: 'medium', prompt: { en: 'The extrinsic pathway is initiated by:' }, correct: 'Death-receptor ligands (FasL, TNF, TRAIL)', options: ['Death-receptor ligands (FasL, TNF, TRAIL)', 'DNA damage', 'Cytochrome c release', 'Akt phosphorylation'] },
    { id: 'ap-q4', difficulty: 'medium', prompt: { en: 'BAX and BAK function as:' }, correct: 'Pore-formers in the outer mitochondrial membrane', options: ['Pore-formers in the outer mitochondrial membrane', 'Anti-apoptotic guardians', 'Sensors of GF withdrawal', 'Caspase activators directly'] },
    { id: 'ap-q5', difficulty: 'medium', prompt: { en: 'The apoptosome contains:' }, correct: 'Apaf-1 + cytochrome c + pro-caspase-9 + dATP', options: ['Apaf-1 + cytochrome c + pro-caspase-9 + dATP', 'FADD + pro-caspase-8 + Fas', 'Bcl-2 + BAX + Bid', 'p53 + MDM2 + p21'] },
    { id: 'ap-q6', difficulty: 'medium', prompt: { en: 'Both apoptosis pathways converge on:' }, correct: 'Caspase-3 (executioner)', options: ['Caspase-3 (executioner)', 'Caspase-8', 'Caspase-9', 'Cytochrome c'] },
    { id: 'ap-q7', difficulty: 'hard', prompt: { en: 'Follicular lymphoma t(14;18) places BCL2 under control of:' }, correct: 'IgH heavy-chain enhancer', options: ['IgH heavy-chain enhancer', 'TCR enhancer', 'Myc promoter', 'BCR-ABL fusion'] },
    { id: 'ap-q8', difficulty: 'hard', prompt: { en: 'Venetoclax\'s mechanism is:' }, correct: 'BH3-mimetic that binds anti-apoptotic Bcl-2 and displaces BAX/BAK', options: ['BH3-mimetic that binds anti-apoptotic Bcl-2 and displaces BAX/BAK', 'Direct caspase-3 activator', 'p53 stabilizer', 'BAX inhibitor'] },
    { id: 'ap-q9', difficulty: 'hard', prompt: { en: 'p53 promotes apoptosis primarily by transcribing:' }, correct: 'PUMA and NOXA (BH3-only proteins)', options: ['PUMA and NOXA (BH3-only proteins)', 'Bcl-2 and Bcl-xL', 'Caspase-9 directly', 'FasL only'] },
    { id: 'ap-q10', difficulty: 'medium', prompt: { en: 'Akt promotes survival by phosphorylating and inactivating:' }, correct: 'BAD (a BH3-only protein)', options: ['BAD (a BH3-only protein)', 'Bcl-2', 'Cytochrome c', 'Apaf-1'] },
    { id: 'ap-q11', difficulty: 'hard', prompt: { en: 'Caspase-8 connects to the intrinsic pathway via:' }, correct: 'Cleaving Bid to tBid', options: ['Cleaving Bid to tBid', 'Cleaving Bcl-2 directly', 'Cleaving cytochrome c', 'Direct activation of BAX without Bcl-2'] },
    { id: 'ap-q12', difficulty: 'hard', prompt: { en: 'ALPS (Autoimmune Lymphoproliferative Syndrome) is caused by mutations in:' }, correct: 'FAS, FASL, or caspase-10', options: ['FAS, FASL, or caspase-10', 'BCL2 amplification', 'BAX loss', 'p53 germline mutations'] },
    { id: 'ap-q13', difficulty: 'medium', prompt: { en: 'During apoptosis, phosphatidylserine:' }, correct: 'Flips from inner to outer leaflet ("eat me" signal)', options: ['Flips from inner to outer leaflet ("eat me" signal)', 'Is degraded', 'Becomes phosphorylated', 'Localizes to mitochondria'] },
    { id: 'ap-q14', difficulty: 'hard', prompt: { en: 'Granzyme B from cytotoxic T cells:' }, correct: 'Cleaves caspase-3 directly and cleaves Bid → tBid', options: ['Cleaves caspase-3 directly and cleaves Bid → tBid', 'Activates Bcl-2', 'Inhibits BAX', 'Phosphorylates BAD'] },
    { id: 'ap-q15', difficulty: 'medium', prompt: { en: 'The "DNA ladder" of apoptosis is produced by:' }, correct: 'CAD endonuclease (released after caspase-3 cleaves ICAD)', options: ['CAD endonuclease (released after caspase-3 cleaves ICAD)', 'PARP autocleavage', 'Random thermal damage', 'Caspase-9 directly'] }
  ]
};
