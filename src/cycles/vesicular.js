// ============================================================
// VESICULAR TRANSPORT & ENDOCYTOSIS
// Layout: 'pathway' (two visual zones — coat routes + receptor fates)
// ============================================================

export const vesicularCycle = {
  id: 'vesicular',
  chapter: 'Vesicular Transport & Endocytosis',
  chapterOrder: 7,
  order: 1,
  layout: 'pathway',
  title: { en: 'Vesicular Transport & Endocytosis', he: 'הובלה וזיקולרית ואנדוציטוזה' },
  subtitle: { en: 'Coat proteins · 5 endocytic routes · LDL recycling vs EGFR degradation' },

  context: {
    tissue: { en: 'Universal — every eukaryotic cell uses these routes. Especially active in secretory cells (β-cells, plasma cells, hepatocytes, exocrine pancreas) and in cells that internalize a lot of receptor (hepatocytes for LDL, neurons for synaptic recycling).' },
    state: { en: 'Continuous in healthy cells. Sharply upregulated during synaptic activity (clathrin-mediated synaptic-vesicle recycling), receptor downregulation after stimulation, and immune surveillance (MHC-II loading via late endosomes).' },
    stateHormonal: { en: 'Insulin signaling drives GLUT4 vesicle exocytosis to the plasma membrane. Statins ↑LDL-R expression on hepatocytes by depleting intracellular cholesterol, which activates SREBP → more receptors recycling.' },
    turnover: { en: 'Coated vesicles bud and fuse within seconds-to-minutes. Endocytosed receptors recycle in ~10 minutes (LDL-R) or are degraded over ~30-60 minutes (EGF-R). Lysosomal degradation completes in hours.' }
  },

  overview: {
    en: `Inside every eukaryotic cell, **proteins move between compartments inside small lipid vesicles**. Each route is defined by a coat protein that sculpts a flat membrane patch into a ~50-100 nm bud, captures the right cargo, and pinches off a vesicle. Three coats handle most traffic: **COPII** for ER → cis-Golgi (anterograde — outbound newly synthesized proteins); **COPI** for cis-Golgi → ER (retrograde — recycles ER-resident proteins that escaped, retrieves SNAREs); **Clathrin** for two distinct routes — trans-Golgi → lysosomes (with the AP1 adaptor, sorting acid hydrolases) and Plasma Membrane → endosomes (with AP2 — **receptor-mediated endocytosis**). The pathway after endocytosis is where the most clinically important branching happens: a vesicle that pinches off the plasma membrane uncoats and fuses with the **early endosome**, a sorting hub where pH drops to ~6 and many ligand-receptor pairs dissociate. From here cargo has three fates: **(1) Recycling to the plasma membrane** — for receptors that need to be reused continuously (LDL receptor, transferrin receptor, GLUT4). **(2) Degradation in the lysosome** — for cargo that needs to be terminated (EGF receptor, internalized growth-factor receptors generally, denatured proteins). **(3) Transcytosis** — across polarized epithelia, for IgA into mucus, IgG across placenta. The contrast between **LDL receptor (recycled)** and **EGF receptor (degraded)** is the canonical exam example. LDL receptor recycles ~150 times in its lifetime — its job is to keep mopping up cholesterol from the blood, so each round trip clears more LDL. The receptor protein is reusable; only the LDL particle proceeds to the lysosome. **Familial hypercholesterolemia** mutations in LDLR (or APOB, or PCSK9) impair this clearance → ↑↑ blood LDL → premature atherosclerosis, tendon xanthomas, MI in your 30s. EGF receptor, by contrast, is **destroyed along with its ligand** — deliberately, because EGF signaling drives proliferation and runaway signaling causes cancer. The cell ubiquitinates the activated EGF-R (via Cbl ligase), which directs it into multivesicular bodies (MVBs) → lysosomes. **Loss of this downregulation** — by mutations that block ubiquitination, or by overexpression that swamps Cbl — drives many cancers (lung adenocarcinoma EGFR mutations, HER2-amplified breast cancer). Other clinical hooks throughout: **I-cell disease** (failure to add mannose-6-P tag → acid hydrolases secreted instead of trafficked to lysosomes → coarse facies, gingival hyperplasia, joint stiffness, ↑↑ enzymes in plasma); **Brefeldin A** (research tool, blocks ARF-GEF → COPI off → Golgi collapses into ER); **endocytosis as a viral route** (HIV via clathrin-mediated, influenza via clathrin too, SARS-CoV-2 via both clathrin and direct fusion); and **lysosomal storage diseases** (Tay-Sachs, Gaucher, Hurler, Hunter, Pompe — each is a deficiency of a specific lysosomal enzyme that accumulates its substrate).`
  },

  pedagogy: [
    {
      title: 'The three coat-protein routes — COPII, COPI, Clathrin',
      icon: '🧱',
      body: `Coat proteins are oligomeric scaffolds that **bend a flat membrane patch into a curved bud**, **select cargo** for inclusion, and then **pinch off** to form a transport vesicle. After release, the coat sheds (uncoating), exposing fusion machinery (SNAREs, Rab GTPases) that lets the vesicle dock with its target compartment.

**COPII — anterograde, ER → cis-Golgi.**
Carries newly synthesized secretory and membrane proteins out of the ER. Assembled at specialized **ER exit sites** (ERES, also called transitional ER). Components: Sar1 (small GTPase, sets up the coat), Sec23/24 (cargo selection — Sec24 binds export signals like di-acidic motifs DxE), Sec13/31 (outer cage). Trigger: Sar1-GDP loaded with GTP by Sec12 (ER-resident GEF) → membrane insertion → coat polymerization.

Cargo without a Sec24-recognized signal can still leave by **bulk flow** (passive concentration in the bud), but most regulated cargo has explicit signals. **Misfolded proteins are kept out by ER quality control** (calnexin/calreticulin chaperone cycle, ERAD = ER-associated degradation via retrotranslocation to the proteasome). Persistent misfolding → **unfolded protein response (UPR)**: PERK ↓translation, IRE1 splices XBP1 to drive chaperone genes, ATF6 traffics to Golgi for cleavage. Failed UPR → apoptosis.

**COPI — retrograde, cis-Golgi → ER.**
Brings back ER-resident proteins that accidentally escaped (chaperones like BiP, calnexin), retrieves cargo receptors and SNAREs for reuse, and moves material between Golgi cisternae. Cargo selection: ER-resident lumenal proteins display the C-terminal **KDEL** motif → bound by KDEL receptor in the cis-Golgi → packaged into COPI vesicles → returned to ER. Membrane proteins use a C-terminal **KKXX** motif. ARF1 (small GTPase, ER/Golgi paralog of Sar1) drives coat assembly.

**Brefeldin A** is a fungal toxin used heavily in research: inhibits the ARF-GEF (BIG1/BIG2 in Golgi), preventing ARF1 activation → COPI fails → Golgi can\'t maintain itself → membrane redistributes back into ER. The classic experimental tool for "knock out Golgi without genetics."

**Clathrin — two routes, two adaptor-protein flavors.**
Clathrin itself is a **triskelion** — a three-legged trimer that polymerizes into a hexagonal/pentagonal lattice (looks like a soccer ball under EM). The lattice can\'t bind membrane directly — it needs an **adaptor protein (AP) complex** that links cargo cytoplasmic tails to clathrin.

- **Clathrin + AP1**: trans-Golgi network → endosomes/lysosomes. Carries acid hydrolases tagged with **mannose-6-phosphate** to the lysosome.
- **Clathrin + AP2**: plasma membrane → early endosome (receptor-mediated endocytosis). Carries activated receptors with cytoplasmic sorting signals (YxxΦ for LDL-R, di-leucine motifs).
- **Clathrin + AP3**: TGN → lysosome-related organelles (melanosomes, platelet dense granules). Mutations cause **Hermansky-Pudlak syndrome** (oculocutaneous albinism + bleeding diathesis from defective platelet granules).
- **Clathrin + AP4**: TGN → late endosomes (less exam-relevant).

After budding, **dynamin** (a GTPase that wraps the vesicle neck) hydrolyzes GTP to pinch off the vesicle from the membrane. Dynamin is targeted by Dynasore (research) and is dysfunctional in **centronuclear myopathy** (DNM2 mutations).`
    },
    {
      title: 'LDL receptor — recycled, because the cell wants more',
      icon: '🔄',
      body: `Why does the LDL receptor recycle while the EGF receptor is destroyed? The answer is **what the cell wants from each interaction**.

**LDL receptor\'s job is bulk uptake.** Cells need cholesterol for membranes and steroidogenesis. Hepatocytes (and most other cells) express LDL receptors that grab LDL particles from the blood — each particle = ~1500 cholesterol esters. The cell wants to clear LOTS of LDL. So:

**The cycle (~10 minutes per round trip):**

1. LDL-R sits on the plasma membrane, ligand-binding domain in the extracellular space.
2. **LDL particle binds** via apoB-100 (the apolipoprotein on every LDL particle). Receptor concentrates in **clathrin-coated pits** because of the YxxΦ motif (NPVY) in its cytoplasmic tail recognized by AP2.
3. Pit invaginates → dynamin pinches → coated vesicle.
4. Clathrin uncoats → vesicle fuses with **early endosome**.
5. Endosome interior acidifies to pH ~6 (vacuolar H⁺-ATPase, V-ATPase). At this pH, LDL **dissociates** from the receptor (the receptor\'s ligand-binding domain folds intramolecularly when protonated, releasing apoB-100).
6. **Sorting**: the early endosome buds off two kinds of vesicles. **Recycling vesicles** retrieve the receptor → fuse back with PM → receptor ready for another round. **Late-endosome-bound vesicles** carry the LDL particle deeper, eventually to the **lysosome**, where the cholesterol esters are hydrolyzed by acid lipase and free cholesterol exits to ER for use.

**So the LDL receptor recycles ~150 times before it\'s eventually degraded** — efficient, because synthesizing a new transmembrane protein is energetically expensive.

**Familial hypercholesterolemia (FH)** is the classic disease of this pathway. Five molecular subtypes by which step fails:
- **Class 1**: LDLR not synthesized at all (~50% of FH cases). Heterozygote = ~2× LDL; homozygote = ~6-8×, MI in childhood.
- **Class 2**: LDLR misfolded, retained in ER, degraded by ERAD.
- **Class 3**: LDLR doesn\'t bind LDL (ligand-binding domain mutation).
- **Class 4**: LDLR doesn\'t enter clathrin pits (NPVY motif mutated → no AP2 binding) — the ORIGINAL Goldstein/Brown discovery.
- **Class 5**: LDLR binds LDL fine but doesn\'t release in endosome → no recycling → effectively trapped → behaves like deficiency.

**Tendon xanthomas** (especially Achilles), **xanthelasma**, **corneal arcus** in young patients are FH stigmata. **Heterozygote risk**: MI in 40s. **Homozygote**: MI in childhood, requires LDL apheresis or liver transplant.

**Therapeutic mimicry of the recycling logic**: **Statins** inhibit HMG-CoA reductase → liver cholesterol falls → SREBP activates → MORE LDLR synthesized → MORE recycling → faster blood clearance. **PCSK9 inhibitors (evolocumab, alirocumab)** block PCSK9, a serine protease that targets LDLR for lysosomal degradation. Block PCSK9 → MORE LDLR survives recycling → ↓LDL further. **Inclisiran** (siRNA against PCSK9 mRNA) gives ~50% LDL reduction with twice-yearly injection.`
    },
    {
      title: 'EGF receptor — degraded, because the cell needs to STOP',
      icon: '🛑',
      body: `EGF receptor is internalized AND its receptor is degraded — opposite of LDL-R. Why?

**EGF\'s job is to start a proliferative signal.** EGF binding → RTK dimerization → autophosphorylation → Ras/MAPK → cyclin D → cell cycle entry (see the RTK pathway). This is potent — even a brief EGF pulse fires the entire cascade. **Continued signaling is dangerous**: cells that can\'t turn off proliferation become tumors. So evolution coupled receptor activation to receptor destruction.

**The downregulation cycle:**

1. EGF binds EGFR → dimerization + autophosphorylation on multiple Tyr residues.
2. **Cbl** (an E3 ubiquitin ligase) is recruited to phospho-Tyr1045 and **ubiquitinates the cytoplasmic tail of EGFR** with K63-linked chains. This is the "destroy me" mark.
3. EGFR is internalized by clathrin-mediated endocytosis (and partly by clathrin-INDEPENDENT pathways at high EGF concentrations).
4. In the early endosome, ubiquitin tags are recognized by **ESCRT** machinery (ESCRT-0, -I, -II, -III). ESCRTs invaginate the endosome membrane INWARD → form **intraluminal vesicles (ILVs)** → mature endosome becomes a **multivesicular body (MVB)**. The receptor is now on a vesicle INSIDE the endosome — kinase domain pointed inward, away from cytoplasmic substrates → signal terminated.
5. MVB fuses with lysosome → ILVs (with their cargo receptors) are digested by lysosomal acid hydrolases.

**Net result**: each EGF binding event sacrifices the receptor. The cell sets a hard ceiling on signal duration — the active receptor pool is consumed. To re-respond, the cell must synthesize new EGFR. **Tunable by Cbl activity** — when cells need stronger response, they can transiently inhibit Cbl, prolonging EGFR signaling (e.g., during wound healing).

**When this fails → cancer:**

- **EGFR amplification or mutation** in non-small cell lung cancer (NSCLC). Activating mutations (exon 19 deletions, L858R) produce constitutively dimerized EGFR that signals even without ligand. Targeted by **erlotinib, gefitinib, osimertinib** (TKIs).
- **HER2 (ERBB2) amplification** in breast cancer. HER2 is in the same family but lacks Cbl-binding sites → poorly downregulated → constitutive signaling. Targeted by **trastuzumab** (mAb), **T-DM1** (antibody-drug conjugate), **pertuzumab** (heterodimerization blocker).
- **Cbl loss-of-function mutations** in juvenile myelomonocytic leukemia (JMML) and some AMLs.
- **Met receptor** (HGF receptor) ALSO has tightly regulated downregulation; loss → various carcinomas.

**Therapeutic principle**: drugs like **cetuximab** (anti-EGFR mAb) work partly by promoting EGFR internalization and degradation — they accelerate the natural off-switch. Cetuximab is used in colorectal cancer (KRAS WT only — KRAS-mutant tumors don\'t need EGFR signaling), squamous-cell head/neck cancer, NSCLC.

**Big-picture contrast with LDL-R**: same clathrin-mediated endocytosis, same early endosome, same dissociation step — but **diverging fates set by sorting tags**. LDL-R has no ubiquitin tag → no ESCRT capture → recycled. EGFR is ubiquitinated → ESCRT captures → ILV → degraded. **Trafficking decisions encode regulatory logic**: a cell can repurpose the same machinery for opposite outcomes by tagging differently.`
    },
    {
      title: 'Five endocytic routes — when each is used',
      icon: '🚪',
      body: `The plasma membrane has FIVE distinct routes for moving material from outside to inside. They differ by **coat protein, vesicle size, cargo type, dynamin-dependence, and cell-type specificity**. Recognizing each route + its clinical signature is high-yield.

**1. Clathrin-mediated endocytosis (CME)** — the main exam route.
- **Vesicle size**: ~100-150 nm.
- **Coat**: clathrin triskelions + AP2 adaptor.
- **Dynamin**: yes (pinches the bud).
- **Cargo**: receptors with YxxΦ or di-leucine sorting motifs — LDL-R, transferrin-R, EGF-R, GPCRs being internalized after activation.
- **Pathogens**: influenza virus, HIV (cell-type-dependent), hepatitis C virus.
- **Clinical**: familial hypercholesterolemia (LDLR class 4 = bad NPVY → can\'t enter clathrin pits — the original Goldstein/Brown discovery).

**2. Caveolae-mediated endocytosis** — the lipid-raft route.
- **Vesicle size**: 50-80 nm. SMALLER than clathrin vesicles.
- **Coat**: caveolin-1, -2, or -3 (CAV3 = muscle-specific). Forms cup-shaped pits enriched in cholesterol and sphingolipids (LIPID RAFTS).
- **Dynamin**: yes.
- **Cargo**: GPI-anchored proteins, glycosphingolipids, certain receptor subsets.
- **Signaling platform**: caveolae concentrate eNOS, src kinases, EGFR — they\'re not just import vesicles, they\'re organizing centers for membrane signaling. Lots of caveolae in endothelium, adipocytes, smooth/skeletal muscle.
- **Pathogens**: SV40 polyomavirus, cholera toxin B subunit (binds GM1 ganglioside in raft).
- **Clinical**:
   - **CAV1 mutations** → congenital generalized lipodystrophy type 3 (adipocytes can\'t form caveolae → can\'t store fat → severe metabolic disease).
   - **CAV3 mutations** → limb-girdle muscular dystrophy 1C, rippling muscle disease, hyperCKemia, distal myopathy.

**3. Macropinocytosis** — the bulk-fluid route.
- **Vesicle size**: HUGE — > 1 μm (largest endocytic vesicles).
- **Coat**: NONE. Driven by actin polymerization that creates large membrane RUFFLES that fold over and trap extracellular fluid.
- **Dynamin**: NOT required.
- **Cargo**: non-selective — whatever is in the surrounding fluid (proteins, salts, sugars).
- **Triggered by**: growth factors (EGF, PDGF, M-CSF). Cell-type-dependent: macrophages, fibroblasts, dendritic cells (immature DCs use it for antigen sampling).
- **Clinical — KRAS-mutant cancers**: pancreatic, colorectal, and lung tumors carrying KRAS mutations UPREGULATE macropinocytosis to scavenge extracellular protein → catabolize to amino acids → fuel growth even when blood supply is poor. They literally eat the tumor microenvironment ("scavenger pathway"). EIPA (a research Na+/H+ exchanger inhibitor) blocks this — combined with KRAS inhibitors in trials.

**4. Phagocytosis** — the immune-cell route.
- **Vesicle size**: largest — engulfs whole bacteria (1-3 μm), entire dying cells (10+ μm).
- **Coat**: none. Actin polymerization wraps the membrane around the particle.
- **Dynamin**: NOT required.
- **Cell types**: ONLY macrophages, neutrophils, dendritic cells (the "professional phagocytes"). Some other cell types do limited phagocytosis (RPE eating outer-segment debris).
- **Receptor-driven**: Fcγ-R (recognizes IgG-opsonized particles), complement receptor CR3 (C3b-opsonized), scavenger receptors, dectin-1 (β-glucan on fungi), TLRs.
- **Outcome**: phagosome → fuses with lysosome → **phagolysosome** → respiratory burst (NADPH oxidase generates superoxide → H2O2 → HOCl by myeloperoxidase) + acid hydrolases destroy the pathogen.
- **Clinical**:
  - **Chronic granulomatous disease (CGD)**: NADPH oxidase deficiency (gp91phox X-linked most common). Phagocytosis intact but respiratory burst fails → catalase-positive bugs survive. Mnemonic for CGD pathogens: **SPACE** = S. aureus, Pseudomonas, Aspergillus, Candida, Enterobacteriaceae (Burkholderia, Serratia, Nocardia). Dx: abnormal dihydrorhodamine (DHR) flow or nitroblue-tetrazolium (NBT) test.
  - **Chediak-Higashi syndrome**: LYST mutations → defective phagosome-lysosome fusion → recurrent infections + giant granules in neutrophils + partial albinism + neuropathy.
  - **Leukocyte adhesion deficiency** (CD18 / β2 integrin): can\'t reach the infection site to phagocytose — see junctions cycle.

**5. Clathrin/caveolae-independent endocytosis** — the catch-all routes.
- Multiple subtypes (less exam-focused): **CLIC/GEEC** (CDC42-driven, dynamin-INdependent, takes up GPI-anchored proteins and fluid), **flotillin-dependent** (lipid-raft based without caveolin), **IL2R pathway** (RhoA-dependent).
- **Vesicle sizes**: variable (50-400 nm).
- Important biologically — about 30-50% of fluid uptake in non-immune cells.
- Less exam-relevant beyond knowing they exist.

**Quick mnemonic to remember which route uses dynamin**: clathrin and caveolae **need dynamin** (small, well-defined necks to pinch off). Macropinocytosis and phagocytosis are **dynamin-independent** (large folds; the actin cytoskeleton itself drives closure).`
    },
    {
      title: 'Clinical-grab-bag: lysosomal storage, I-cell, viral entry, autophagy',
      icon: '🏥',
      body: `**Mannose-6-phosphate sorting (M6P) — and I-cell disease.**
Acid hydrolases destined for the lysosome are tagged in the cis-Golgi: a **GlcNAc-1-phosphotransferase** adds a phosphate to mannose residues on the enzyme glycan → exposes mannose-6-phosphate. M6P-receptors in the trans-Golgi network bind these tagged enzymes → package them into clathrin/AP1 vesicles → deliver to late endosomes / lysosomes.

**I-cell disease (mucolipidosis II)**: GlcNAc-1-phosphotransferase loss-of-function → no M6P tag → acid hydrolases get **mistargeted into the secretory pathway** instead of lysosomes. Result: lysosomes are EMPTY (no enzymes) → undigested substrate accumulates → "**inclusion (I) bodies**" in cells, AND plasma is FULL of lysosomal enzymes (their "address label" is wrong). Clinical: coarse facial features, gingival hyperplasia, restricted joint movement, corneal clouding, skeletal abnormalities, severe psychomotor delay, death in childhood. Distinguished from Hurler (which has SOME enzyme present but the wrong substrate-degrading one) by the universal absence of multiple lysosomal enzymes simultaneously.

**Lysosomal storage diseases** (each is a single-enzyme deficiency in lysosomes, leading to substrate accumulation):
- **Tay-Sachs** — hexosaminidase A (HEXA) → GM2 ganglioside accumulates in neurons → cherry-red macula, hyperacusis, motor regression. Ashkenazi Jews. AR. NO hepatosplenomegaly.
- **Sandhoff** — hexosaminidase A AND B → similar clinical picture to Tay-Sachs but WITH hepatosplenomegaly.
- **Niemann-Pick A/B** — sphingomyelinase → sphingomyelin → cherry-red macula + hepatosplenomegaly. Ashkenazi Jews.
- **Niemann-Pick C** — NPC1 (cholesterol transport out of lysosome) → cholesterol/lipid accumulation in lysosomes → ataxia, dementia, vertical supranuclear gaze palsy.
- **Gaucher** — β-glucocerebrosidase → glucocerebroside in macrophages → "crumpled tissue paper" macrophages in marrow, hepatosplenomegaly, bone pain. Most common LSD. Ashkenazi Jews. Treated with **enzyme replacement** (imiglucerase, velaglucerase) — true success of the M6P pathway as drug delivery.
- **Krabbe** — galactocerebrosidase → demyelination, optic atrophy, peripheral neuropathy, globoid cells.
- **Metachromatic leukodystrophy** — arylsulfatase A → sulfatides → demyelination.
- **Fabry** — α-galactosidase A → ceramide trihexoside → angiokeratomas, peripheral neuropathy, renal/cardiac failure. **X-linked recessive**.
- **Pompe** — acid α-glucosidase (lysosomal) → glycogen in lysosomes → cardiomegaly, hypotonia, early death (infantile form).
- **Hurler** (MPS I) — α-L-iduronidase → corneal clouding, coarse facies, hepatosplenomegaly, AR.
- **Hunter** (MPS II) — iduronate sulfatase → like Hurler BUT no corneal clouding, X-linked recessive, aggressive behavior.

**Viral entry through endocytosis.**
Most enveloped viruses use a lipid-bilayer membrane that must fuse with a host membrane to deliver their genome. They have two strategies:
- **Direct fusion at the PM** at neutral pH — HIV (CD4 + CCR5/CXCR4 → conformational change in gp41 → fusion with PM at cell surface).
- **Endocytosis + low-pH-triggered fusion** — influenza (HA binds sialic acid, clathrin-mediated endocytosis, low endosomal pH triggers HA conformational change → fusion with endosomal membrane → genome released). This is why amantadine works (blocks the M2 ion channel that lets H⁺ into the virion to trigger uncoating).

**Autophagy** — a parallel "self-eating" pathway. Cytoplasmic content (or whole organelles like mitochondria) is engulfed by a double membrane (**autophagosome**), which fuses with a lysosome → contents digested. Triggered by starvation (mTOR off → ULK1 active → autophagy initiation). Drug: **chloroquine/hydroxychloroquine** raises lysosomal pH → blocks autophagic flux (used for malaria, lupus, RA — also experimentally for cancer, since some tumors depend on autophagy for survival).`
    }
  ],

  mnemonic: {
    en: { phrase: '"Two outs, one in" coats: COPII OUT, COPI back, Clathrin IN. FIVE endocytic routes: clathrin, caveolae, macropino, phago, indep. LDL-R recycles, EGF-R degrades.', breakdown: 'Dynamin needed for clathrin + caveolae (small necks). Macropino + phago use actin only. KDEL = ER. M6P = lysosome. Ub on EGFR = "destroy me."' }
  },

  compartments: {
    cyto: { en: 'Cytoplasm + endomembrane system', he: 'ציטופלסמה + מערכת הקרומים', color: '#dbeafe', accent: '#2563eb' }
  },

  pathway: {
    viewBox: [0, 0, 1900, 1140],
    // Focus groups — let the user dim everything except one conceptual chunk.
    // Pilot feature for this cycle (others can opt-in by adding focusGroups).
    focusGroups: [
      { id: 'coats', glyph: '🧱', label: 'Coat protein routes',
        tip: 'COPII (ER→Golgi), COPI (back), Clathrin/AP1 (Golgi→Lysosome)',
        nodes: ['er', 'copii', 'cisgolgi', 'copi', 'tgn', 'm6p', 'clathrin', 'lysosome'] },
      { id: 'routes', glyph: '🚪', label: '5 endocytic routes',
        tip: 'Clathrin, caveolae, macropinocytosis, phagocytosis, etc.',
        nodes: ['pm', 'recycle', 'macropino', 'caveolae', 'ap2', 'phago', 'dynamin', 'endosome'] },
      { id: 'fates', glyph: '🔀', label: 'LDL vs EGF receptor fates',
        tip: 'LDL-R recycles, EGF-R is degraded — why the difference matters',
        nodes: ['endosome', 'ldlr', 'egfr', 'recycle', 'pm', 'ldl', 'mvb', 'degrade'] },
      { id: 'convergence', glyph: '🪦', label: 'Lysosomal convergence',
        tip: 'Where everything ends up — both routes meet at lysosome',
        nodes: ['lysosome', 'ldl', 'mvb', 'degrade'] }
    ],
    nodes: [
      // ========== ZONE A — COAT-PROTEIN ROUTES (left half) ==========

      // Tier 1 — ER and Golgi compartments (left column)
      { id: 'er', label: 'ER', sublabel: 'protein synthesis', x: 200, y: 100, type: 'phase',
        memory: { glyph: '🏭', char: 'Protein factory' },
        hint: 'Endoplasmic reticulum. Site of co-translational translocation of secretory and membrane proteins through the Sec61 translocon. Quality control via calnexin/calreticulin chaperones; persistent misfolding triggers the unfolded-protein response (UPR — PERK, IRE1, ATF6). Misfolded proteins are retrotranslocated and degraded by the proteasome (ERAD).' },

      { id: 'cisgolgi', label: 'cis-Golgi', sublabel: 'first Golgi face', x: 200, y: 340, type: 'phase',
        memory: { glyph: '📦', char: 'Sorting receiver' },
        hint: 'Receives COPII vesicles from ER. Site of N-glycan trimming and the start of mannose-6-phosphate tagging for lysosomal enzymes. Returns escaped ER residents (KDEL-tagged) to ER via COPI.' },

      { id: 'tgn', label: 'trans-Golgi network', sublabel: 'final sorting hub', x: 200, y: 500, type: 'phase',
        memory: { glyph: '🚦', char: 'Sorting traffic-light' },
        hint: 'Final Golgi compartment. Sorts proteins to (1) plasma membrane (constitutive secretion), (2) lysosomes (clathrin/AP1 + M6P-tagged hydrolases), (3) regulated secretory granules (insulin, neurotransmitters). Cisternal-maturation model: cisternae move from cis to trans, with COPI bringing back resident enzymes.' },

      // Tier 2 — coat proteins (middle column of zone A)
      { id: 'copii', label: 'COPII', sublabel: 'ER → cis-Golgi (anterograde)', x: 560, y: 180, type: 'enzyme',
        memory: { glyph: '➡️', char: 'Outbound truck' },
        hint: 'Coat assembled at ER exit sites (ERES). Components: Sar1-GTP (small GTPase, sets up the coat), Sec23/24 (cargo selection — Sec24 binds export motifs like di-acidic DxE), Sec13/31 (outer cage). Carries newly synthesized secretory and membrane proteins.',
        clinical: { disorder: 'Cranio-lenticulo-sutural dysplasia', findings: { en: 'SEC23A mutations → defective collagen export from ER → malformed sutures, lens dislocation, facial features.' } } },

      { id: 'copi', label: 'COPI', sublabel: 'Golgi → ER (retrograde)', x: 560, y: 300, type: 'enzyme',
        memory: { glyph: '⬅️', char: 'Return truck' },
        hint: 'Retrieves ER-resident proteins that escaped (KDEL motif → KDEL receptor → COPI bus back to ER). Also moves cargo between Golgi cisternae. Driven by ARF1 GTPase. Recognizes C-terminal KKXX motifs on membrane proteins.',
        drugs: ['Brefeldin A (research) — inhibits ARF-GEF → COPI fails → Golgi collapses into ER'] },

      { id: 'clathrin', label: 'Clathrin', sublabel: 'triskelion lattice', x: 450, y: 660, type: 'enzyme',
        memory: { glyph: '⚽', char: 'Soccer-ball cage' },
        hint: 'Three-legged trimers (triskelions) polymerize into a hexagonal/pentagonal cage. Cannot bind membrane directly — needs an adaptor protein (AP) complex. AP1 = trans-Golgi to lysosome. AP2 = plasma membrane to endosome. AP3 = lysosome-related organelles. Dynamin (GTPase) wraps the vesicle neck and pinches the bud off the membrane.' },

      // Tier 3 — destinations of coat routes
      { id: 'lysosome', label: 'Lysosome', sublabel: 'acid hydrolases · pH ~5', x: 350, y: 880, type: 'phase',
        memory: { glyph: '🪣', char: 'Acid bucket' },
        hint: 'Membrane-bound organelle with ~50 acid hydrolases (proteases, lipases, glycosidases, nucleases). pH ~5 maintained by V-ATPase. Hydrolases delivered from trans-Golgi via mannose-6-phosphate tag → AP1/clathrin route. Lysosomal storage diseases each = single-enzyme deficiency.',
        clinical: { disorder: 'Lysosomal storage diseases', findings: { en: 'Tay-Sachs (HEXA), Gaucher (β-glucocerebrosidase), Pompe (acid α-glucosidase), Fabry (α-galactosidase A, X-linked), Hurler (α-L-iduronidase), Hunter (iduronate sulfatase, X-linked).' }, treatment: { en: 'Enzyme replacement therapy for several (Gaucher, Pompe, Fabry, MPS I/II) — uses M6P targeting to deliver recombinant enzyme to lysosomes.' } } },

      { id: 'm6p', label: 'M6P-tagged Hydrolases', sublabel: 'address-labeled enzymes', x: 200, y: 660, type: 'messenger',
        memory: { glyph: '🏷️', char: 'Lysosome address' },
        hint: 'In cis-Golgi, GlcNAc-1-phosphotransferase tags lysosomal-destined acid hydrolases with mannose-6-phosphate (M6P). M6P receptors in trans-Golgi → bind tagged enzymes → AP1/clathrin → late endosome → lysosome. Loss of the tagging enzyme = I-cell disease (mucolipidosis II).',
        clinical: { disorder: 'I-cell disease (mucolipidosis II)', findings: { en: 'GlcNAc-1-phosphotransferase deficiency → no M6P tag → acid hydrolases secreted instead of trafficked to lysosome → "inclusion bodies" in cells, ↑↑ enzymes in plasma. Coarse facies, gingival hyperplasia, restricted joints, corneal clouding, severe developmental delay, death in childhood.' } } },

      // ========== ZONE B — RECEPTOR FATES (right half) ==========

      // Tier 1 — plasma membrane
      { id: 'pm', label: 'Plasma Membrane', sublabel: 'cell surface', x: 1500, y: 100, type: 'phase',
        memory: { glyph: '🌐', char: 'Cell surface' },
        hint: 'Cell-surface lipid bilayer. Site of receptor display, ion exchange, and FIVE distinct endocytic routes that differ by coat protein, vesicle size, cargo type, and dynamin-dependence: (1) clathrin-mediated, (2) caveolae-mediated, (3) macropinocytosis, (4) phagocytosis (immune cells only), (5) clathrin/caveolae-independent (CLIC/GEEC, flotillin). Each route handles different cargo and has different clinical relevance.' },

      // Alternative endocytic routes (branching from PM, parallel to AP2 column)
      { id: 'macropino', label: 'Macropinocytosis', sublabel: '>1 μm bulk fluid uptake', x: 1000, y: 260, type: 'enzyme',
        memory: { glyph: '🌊', char: 'Bulk gulper' },
        hint: 'NON-selective bulk fluid uptake. Driven by actin-polymerization-driven membrane RUFFLES that fold over and trap large volumes of extracellular fluid (>1 μm vesicles — the largest endocytic vesicles). Triggered by growth factors (EGF, PDGF, M-CSF). Used by immature dendritic cells for antigen sampling. NO coat protein. Cargo includes whatever is in the surrounding fluid — proteins, salts, dissolved nutrients.',
        clinical: { disorder: 'KRAS-mutant cancers · "scavenger pathway"', findings: { en: 'KRAS-mutant pancreatic, colorectal, and lung cancers UPREGULATE macropinocytosis to scavenge extracellular proteins → catabolize to amino acids → fuel growth even when blood supply is poor. This is why nutrient-deprivation strategies don\'t kill these tumors — they eat the tumor microenvironment.' }, treatment: { en: 'EIPA (5-(N-ethyl-N-isopropyl)amiloride) — research tool that blocks macropinocytosis by inhibiting Na+/H+ exchanger NHE1. Combined with KRAS inhibitors in trials.' } },
        drugs: ['EIPA (research)', 'amiloride analogs'] },

      { id: 'caveolae', label: 'Caveolae', sublabel: 'caveolin-coated cups · 50-80 nm', x: 1320, y: 260, type: 'enzyme',
        memory: { glyph: '🥄', char: 'Cup-shaped pits' },
        hint: 'CUP-shaped pits in the plasma membrane (50-80 nm). Coat: caveolin-1 (most cells), caveolin-2 (with caveolin-1), caveolin-3 (muscle-specific). Sit in CHOLESTEROL- and SPHINGOLIPID-rich LIPID RAFTS. Dynamin-dependent (dynamin pinches the bud). CARGO: GPI-anchored proteins, glycosphingolipids, certain receptor subsets. SIGNALING: caveolae concentrate eNOS, src kinases, EGFR — they\'re signaling platforms as well as endocytic vesicles. PATHOGEN ENTRY: SV40 virus, cholera toxin B subunit (uses GM1 ganglioside), some bacteria.',
        clinical: { disorder: 'Caveolinopathies', findings: { en: 'Caveolin-1 (CAV1) mutations → congenital generalized lipodystrophy type 3 (loss of adipocyte caveolae → can\'t store fat). Caveolin-3 (CAV3) mutations → limb-girdle muscular dystrophy 1C, rippling muscle disease, hyperCKemia. Caveolae are abundant in endothelium, adipocytes, and muscle — diseases hit those tissues hardest.' } } },

      // (existing ap2 node continues below)
      { id: 'ap2', label: 'Clathrin + AP2', sublabel: 'endocytosis adaptor', x: 1520, y: 260, type: 'enzyme',
        memory: { glyph: '🪤', char: 'Receptor net' },
        hint: 'AP2 adaptor protein complex sits between clathrin and the cytoplasmic tail of cargo receptors. Recognizes YxxΦ motifs (Y = Tyr, Φ = bulky hydrophobic) and di-leucine motifs. Drives invagination of the coated pit → coated vesicle. ~100-150 nm vesicles. Dynamin-dependent. Major route for activated receptors (LDL-R, EGF-R, transferrin-R) and many viruses (influenza, HIV, hepatitis C).' },

      { id: 'phago', label: 'Phagocytosis', sublabel: 'immune cells · large particles', x: 1740, y: 260, type: 'enzyme',
        memory: { glyph: '😋', char: 'Particle eater' },
        hint: 'CELL-TYPE-SPECIFIC: macrophages, neutrophils, dendritic cells. Engulfs LARGE solid particles (>0.5 μm) — bacteria, dead cells, debris. RECEPTOR-DRIVEN: Fcγ receptors (IgG-opsonized particles), complement receptors (C3b-opsonized), scavenger receptors, dectin-1 (fungi), TLRs. Forms a phagosome that fuses with lysosomes → PHAGOLYSOSOME → respiratory burst (NADPH oxidase) + acid hydrolases kill the pathogen. NO clathrin/caveolin coat — actin polymerization drives the membrane around the particle.',
        clinical: { disorder: 'Chronic granulomatous disease (CGD)', findings: { en: 'NADPH oxidase deficiency (gp91phox X-linked, or autosomal subunits). Phagocytosis is INTACT but the respiratory burst fails → ingested microbes survive. Recurrent infections by catalase-positive organisms (S. aureus, Aspergillus, Burkholderia, Serratia, Nocardia — mnemonic SPACE). Diagnosed by abnormal dihydrorhodamine (DHR) flow test or nitroblue tetrazolium (NBT) test.' }, treatment: { en: 'Prophylactic TMP-SMX, itraconazole, IFN-γ. Bone-marrow transplant curative.' } } },

      { id: 'dynamin', label: 'Dynamin', sublabel: 'GTPase pinch', x: 1520, y: 420, type: 'enzyme',
        memory: { glyph: '✂️', char: 'GTP-driven scissors' },
        hint: 'Large GTPase that wraps the neck of the budding vesicle. GTP hydrolysis drives a conformational change that severs the vesicle from the plasma membrane. Inhibited by Dynasore (research). DNM2 mutations cause centronuclear myopathy.' },

      // Tier 3 — early endosome (the SORTING fork)
      { id: 'endosome', label: 'Early Endosome', sublabel: 'pH ~6 · sorting hub', x: 1380, y: 600, type: 'modifier',
        memory: { glyph: '🚪', char: 'Sorting room' },
        hint: 'The decision point. Endocytosed vesicles uncoat (lose clathrin) and fuse with the early endosome. V-ATPase acidifies the lumen to pH ~6. At this pH, many ligand-receptor pairs DISSOCIATE. From here, three fates: (1) Recycling to PM (LDL-R, transferrin-R, GLUT4), (2) Lysosomal degradation (EGFR, ligands), (3) Transcytosis (across polarized cells).' },

      // Tier 4 — branched fates: LDL pathway (left) vs EGF pathway (right)
      // LDL branch
      { id: 'ldlr', label: 'LDL Receptor', sublabel: 'recycled · YxxΦ tail', x: 1180, y: 760, type: 'receptor',
        memory: { glyph: '🔄', char: 'Reusable receptor' },
        hint: 'Binds LDL particles (via apoB-100) at the cell surface. NPVY motif in cytoplasmic tail recognized by AP2 → clathrin endocytosis. In endosome at pH 6, LDL-R releases its cargo and RECYCLES back to PM — about 150 round trips per receptor lifetime. Makes biological sense: each cycle clears another batch of cholesterol from blood.',
        clinical: { disorder: 'Familial hypercholesterolemia (FH)', findings: { en: 'AD inheritance. LDLR mutations (or APOB, or PCSK9 gain-of-function). 5 molecular classes by which step fails (synthesis, transport to PM, ligand binding, clathrin-pit clustering [original Goldstein/Brown discovery], dissociation in endosome). Tendon xanthomas, xanthelasma, corneal arcus, premature MI. Heterozygote: MI in 40s. Homozygote: MI in childhood, requires LDL apheresis or liver transplant.' }, treatment: { en: 'Statins (↑LDLR via SREBP), PCSK9 inhibitors (evolocumab, alirocumab) — block PCSK9-driven LDLR degradation, ↓LDL further. Inclisiran (siRNA against PCSK9 mRNA), ezetimibe.' } } },

      { id: 'recycle', label: 'Recycle to PM', sublabel: 'receptor reused', x: 1190, y: 100, type: 'effector',
        memory: { glyph: '↩️', char: 'Loop home' },
        hint: 'Recycling endosomes carry the receptor back to the plasma membrane for another round of binding. This is the default fate for receptors WITHOUT ubiquitin tags. Same machinery handles transferrin receptor (iron uptake) and GLUT4 (insulin-driven glucose uptake).' },

      { id: 'ldl', label: 'LDL particle', sublabel: 'cholesterol → lysosome', x: 1180, y: 920, type: 'ligand',
        memory: { glyph: '🟡', char: 'Cholesterol packet' },
        hint: 'The LDL particle (~22 nm, ~1500 cholesterol esters + apoB-100) dissociates from its receptor at endosomal pH ~6. Continues deeper into the endolysosomal system → late endosome → lysosome → acid lipase hydrolyzes esters → free cholesterol exits to ER. Free cholesterol then suppresses HMG-CoA reductase + suppresses LDLR transcription (negative feedback).' },

      // EGF branch
      { id: 'egfr', label: 'EGF Receptor', sublabel: 'degraded · ubiquitinated', x: 1700, y: 760, type: 'receptor',
        memory: { glyph: '🪦', char: 'One-shot receptor' },
        hint: 'RTK. Activated by EGF binding → dimerization + autophosphorylation → recruits Cbl (E3 ubiquitin ligase) to phospho-Tyr1045 → Cbl ubiquitinates EGFR cytoplasmic tail. The ubiquitin tag is a "destroy me" signal. Receptor follows the ESCRT/MVB → lysosome route, NOT recycled. The cell deliberately sacrifices the receptor to TIME-LIMIT the proliferative signal.',
        clinical: { disorder: 'Cancer driven by EGFR/HER2 dysregulation', findings: { en: 'EGFR activating mutations (exon 19 del, L858R) in NSCLC → constitutive dimerization, escapes Cbl ubiquitination. HER2 (ERBB2) amplification in breast cancer (~20%) — HER2 lacks Cbl-binding sites → poorly downregulated. Cbl loss-of-function → JMML, some AMLs.' }, treatment: { en: 'EGFR TKIs: erlotinib, gefitinib (1st gen), osimertinib (3rd gen, T790M-active). EGFR mAbs: cetuximab (colorectal KRAS WT, head/neck), panitumumab. HER2: trastuzumab, pertuzumab, T-DM1. Cetuximab partly works by promoting EGFR internalization + degradation.' } },
        drugs: ['cetuximab, panitumumab (EGFR mAbs)', 'erlotinib, osimertinib (TKIs)', 'trastuzumab (HER2 mAb)'] },

      { id: 'mvb', label: 'MVB', sublabel: 'multivesicular body · ESCRT', x: 1700, y: 920, type: 'modifier',
        memory: { glyph: '🫧', char: 'Vesicles inside vesicles' },
        hint: 'Multivesicular body. ESCRT-0/-I/-II/-III recognize ubiquitinated cargo (like activated EGFR) and drive INWARD invagination of the endosome membrane → intraluminal vesicles (ILVs) bud INTO the endosome lumen. The receptor is now on a vesicle inside the endosome — kinase domain points away from cytoplasmic substrates → signal terminated EVEN before lysosomal fusion.' },

      // Tier 5 — terminal lysosomal degradation (shared between LDL ligand and EGF complex)
      { id: 'degrade', label: 'Lysosomal Degradation', sublabel: 'cargo destroyed', x: 1380, y: 1080, type: 'output',
        memory: { glyph: '🪦', char: 'End of the line' },
        hint: 'Both the LDL particle (from the LDL-R route) and the entire EGFR + EGF complex (in MVBs) end up here. Acid hydrolases (delivered via the M6P route from trans-Golgi) digest cargo. Free cholesterol is exported back to the cytoplasm via NPC1 transporter (defective in Niemann-Pick type C). Ubiquitinated EGFR is degraded to amino acids — the cell must synthesize NEW receptor to respond again.' }
    ],
    edges: [
      // ZONE A — coat protein routes
      { from: 'er', to: 'copii', label: 'cargo loaded', style: 'activate' },
      { from: 'copii', to: 'cisgolgi', label: 'anterograde', style: 'activate' },
      { from: 'cisgolgi', to: 'copi', label: 'KDEL retrieval', style: 'activate' },
      { from: 'copi', to: 'er', label: 'retrograde', style: 'activate' },
      { from: 'cisgolgi', to: 'tgn', label: 'cisternal maturation', style: 'activate' },
      { from: 'tgn', to: 'm6p', label: 'M6P sorting', style: 'activate' },
      { from: 'm6p', to: 'clathrin', label: '+ AP1', style: 'activate' },
      { from: 'clathrin', to: 'lysosome', label: 'AP1 route', style: 'activate' },

      // ZONE B — endocytosis from PM (FIVE routes branching from one membrane)
      { from: 'pm', to: 'ap2', label: 'clathrin pit', style: 'activate' },
      { from: 'pm', to: 'caveolae', label: 'caveolin coat', style: 'activate' },
      { from: 'pm', to: 'macropino', label: 'actin ruffles', style: 'activate' },
      { from: 'pm', to: 'phago', label: 'particle engulf', style: 'activate' },
      { from: 'ap2', to: 'dynamin', label: 'pinches off', style: 'activate' },
      { from: 'dynamin', to: 'endosome', label: 'fuses', style: 'activate' },
      { from: 'caveolae', to: 'endosome', label: 'caveosome → fuse', style: 'activate' },
      { from: 'macropino', to: 'endosome', label: 'macropinosome', style: 'activate' },
      { from: 'phago', to: 'degrade', label: 'phagolysosome', style: 'activate' },

      // ZONE B — fork at early endosome
      { from: 'endosome', to: 'ldlr', label: 'pH 6 dissociates', style: 'activate' },
      { from: 'endosome', to: 'egfr', label: 'ubiquitin-tagged', style: 'activate' },

      // LDL branch outcomes
      { from: 'ldlr', to: 'recycle', label: 'reused ~150×', style: 'activate' },
      { from: 'recycle', to: 'pm', label: 'back to surface', style: 'activate' },
      { from: 'ldlr', to: 'ldl', label: 'ligand released', style: 'activate' },
      { from: 'ldl', to: 'degrade', label: 'cholesterol freed', style: 'activate' },

      // EGF branch outcomes
      { from: 'egfr', to: 'mvb', label: 'ESCRT → ILV', style: 'activate' },
      { from: 'mvb', to: 'degrade', label: 'lysosomal fusion', style: 'activate' },

      // Cross-zone connection: lysosome (zone A) and degradation site (zone B) are functionally the same compartment
      { from: 'lysosome', to: 'degrade', label: 'enzymes ready', noLabel: true, style: 'activate' }
    ]
  },

  integrations: [
    {
      name: 'EGFR downregulation ↔ RTK signaling',
      toCycle: 'Receptor Tyrosine Kinases',
      path: { en: 'EGF → EGFR autophosphorylation → Ras/MAPK + PI3K/Akt fires (the RTK pathway). Simultaneously, Cbl ubiquitinates EGFR → ESCRT → MVB → lysosome. The downregulation is the OFF-SWITCH that limits how long the cell sees the proliferative signal. Cancer mutations (EGFR L858R, HER2 amp) escape this off-switch → unchecked growth.' },
      note: { en: 'Trafficking IS regulation. Same molecule (EGFR) drives signaling AND its own destruction; the timing balance determines whether cells proliferate transiently (healthy) or persistently (cancer).' }
    },
    {
      name: 'LDL-R ↔ familial hypercholesterolemia → atherosclerosis',
      toCycle: 'Cardiovascular',
      path: { en: 'Defective LDL-R recycling → ↑LDL in blood → oxidized LDL taken up by macrophages via scavenger receptors → foam cells → fatty streak → atheroma. Premature MI, stroke, peripheral vascular disease.' },
      note: { en: 'Why FH heterozygotes need aggressive lipid-lowering early — every year of high LDL accelerates plaque formation.' }
    },
    {
      name: 'Lysosomal storage diseases — single-enzyme deficiencies',
      toCycle: 'Pediatrics / metabolism',
      path: { en: 'Each lysosomal hydrolase has a distinct substrate. Deficiency → substrate accumulates in lysosome → cell dysfunction. Tay-Sachs (HEXA → GM2 ganglioside in neurons), Gaucher (β-glucocerebrosidase → glucocerebroside in macrophages), Pompe (acid α-glucosidase → glycogen, cardiomyopathy), Fabry (α-galactosidase A → ceramide trihexoside, X-linked).' },
      note: { en: 'Enzyme-replacement therapy WORKS — recombinant enzyme is given IV, picked up by M6P receptors at cell surface, trafficked to lysosomes. A direct exploit of the M6P sorting machinery.' }
    },
    {
      name: 'I-cell disease — mistargeting of an entire enzyme class',
      toCycle: 'Genetics',
      path: { en: 'GlcNAc-1-phosphotransferase deficiency → no M6P tag on acid hydrolases → enzymes secreted via constitutive pathway instead of trafficked to lysosomes → lysosomes empty (substrates accumulate as inclusion bodies) AND plasma overflowing with lysosomal enzymes. Distinctive lab finding: ↑↑ multiple lysosomal enzymes in plasma simultaneously.' },
      note: { en: 'A single tagging enzyme fails → entire class of ~50 hydrolases mistargeted. Demonstrates the universality of the M6P address system.' }
    },
    {
      name: 'Neurotransmission ↔ clathrin-mediated synaptic-vesicle recycling',
      toCycle: 'Neuroscience',
      path: { en: 'Synaptic vesicles fuse with PM → release neurotransmitter → vesicle membrane is retrieved by clathrin/AP2-mediated endocytosis → uncoated → refilled with neurotransmitter → ready for next round. Sustained neurotransmission depends entirely on this recycling. Defects → fast synaptic fatigue.' },
      note: { en: 'Botulinum toxin cleaves SNARE proteins (SNAP-25, syntaxin, VAMP) — blocks vesicle fusion. Tetanus toxin cleaves the same SNAREs in inhibitory neurons → spastic paralysis instead of flaccid.' }
    },
    {
      name: 'Viral entry exploits endocytosis',
      toCycle: 'Infectious disease',
      path: { en: 'Many enveloped viruses enter via clathrin-mediated endocytosis + low-pH-triggered fusion. Influenza HA binds sialic acid → endocytosed → endosomal pH triggers HA conformational change → membrane fusion → genome released. SARS-CoV-2 uses both clathrin endocytosis and direct fusion routes (TMPRSS2-dependent at PM).' },
      note: { en: 'Why hydroxychloroquine was tried for COVID-19 (raises endosomal pH → blocks low-pH-dependent fusion). Failed clinically because the virus also uses TMPRSS2-mediated direct fusion.' }
    }
  ],

  bigPicture: {
    en: [
      { k: 'Three coats', v: 'COPII (ER → cis-Golgi, anterograde). COPI (Golgi → ER, retrograde). Clathrin (PM → endosome with AP2; trans-Golgi → lysosome with AP1).' },
      { k: 'Five endocytic routes', v: '(1) Clathrin/AP2 — receptors, ~150 nm. (2) Caveolae — lipid rafts, 50-80 nm. (3) Macropinocytosis — bulk fluid, >1 μm. (4) Phagocytosis — large particles, immune cells only. (5) Clathrin/caveolae-independent — CLIC/GEEC, flotillin.' },
      { k: 'Dynamin needed?', v: 'YES for clathrin + caveolae (small necks). NO for macropinocytosis + phagocytosis (large actin-driven folds).' },
      { k: 'Caveolae', v: 'Cup-shaped 50-80 nm pits. Caveolin-1/-2/-3. Lipid-raft (cholesterol/sphingolipid) rich. Cargo: GPI-anchored proteins, cholera toxin B (GM1), SV40 virus. Also signaling platforms (eNOS, src).' },
      { k: 'Caveolinopathies', v: 'CAV1 mutations → congenital generalized lipodystrophy type 3 (no adipocyte caveolae). CAV3 mutations → limb-girdle MD 1C, rippling muscle disease, hyperCKemia.' },
      { k: 'Macropinocytosis', v: 'Largest endocytic vesicles (>1 μm). Actin ruffles fold over and trap fluid. NO coat, NO dynamin. Non-selective. Triggered by GFs.' },
      { k: 'Macropino in cancer', v: 'KRAS-mutant pancreatic / colon / lung cancers UPREGULATE macropinocytosis to scavenge extracellular protein → amino acids → growth fuel. EIPA blocks it (research drug).' },
      { k: 'Phagocytosis', v: 'Cell-type-specific: macrophages, neutrophils, dendritic cells. >0.5 μm particles. Receptor-driven (Fcγ, CR3, scavenger, dectin-1, TLRs). Forms phagolysosome → respiratory burst kills pathogen.' },
      { k: 'Chronic granulomatous disease', v: 'NADPH oxidase deficiency (gp91phox X-linked most common). Phagocytosis intact, respiratory burst fails. Catalase+ infections (SPACE: S. aureus, Pseudomonas, Aspergillus, Candida, Enterobacteriaceae/Burkholderia/Serratia/Nocardia). Dx: DHR or NBT test. Rx: prophylactic TMP-SMX + itraconazole + IFN-γ.' },
      { k: 'COPII', v: 'Sar1 GTPase + Sec23/24 (cargo) + Sec13/31 (cage). Assembled at ER exit sites. Sec24 binds DxE export motif.' },
      { k: 'COPI', v: 'ARF1 GTPase. Retrieves KDEL-tagged ER residents and KKXX membrane proteins. Inhibited by Brefeldin A → Golgi collapses into ER.' },
      { k: 'Clathrin', v: 'Triskelion trimers form polyhedral cage. Needs adaptor (AP1, AP2, AP3, AP4) to bind cargo. Dynamin GTPase pinches the bud off.' },
      { k: 'AP1 vs AP2 vs AP3', v: 'AP1 = trans-Golgi → lysosome. AP2 = PM → endosome. AP3 = TGN → lysosome-related organelles (defect = Hermansky-Pudlak: albinism + bleeding).' },
      { k: 'KDEL', v: 'C-terminal tag on ER-lumenal residents. Bound by KDEL receptor in cis-Golgi → COPI bus back to ER.' },
      { k: 'M6P', v: 'Mannose-6-phosphate tag on lysosomal hydrolases. Added by GlcNAc-1-phosphotransferase in cis-Golgi. M6P receptors in TGN sort tagged enzymes via clathrin/AP1 to lysosomes.' },
      { k: 'I-cell disease', v: 'GlcNAc-1-phosphotransferase deficiency → no M6P tag → hydrolases secreted instead of trafficked to lysosomes. ↑↑ enzymes in plasma. Coarse facies, gingival hyperplasia, restricted joints, severe developmental delay.' },
      { k: 'LDL receptor cycle', v: 'Binds LDL via apoB-100 → clathrin-mediated endocytosis → endosome pH 6 dissociates → receptor recycles to PM (~150×) while LDL goes to lysosome.' },
      { k: 'Familial hypercholesterolemia', v: 'AD. LDLR mutations (5 classes) or APOB or PCSK9 GoF. Tendon xanthomas, premature MI. Heterozygote MI 40s, homozygote MI in childhood.' },
      { k: 'Statins / PCSK9 inhibitors', v: 'Statins ↑LDLR (deplete cholesterol → SREBP active). PCSK9 inhibitors (evolocumab, alirocumab) block PCSK9-driven LDLR destruction → MORE recycling, ↓LDL.' },
      { k: 'EGF receptor fate', v: 'Activated EGFR → Cbl ubiquitinates → ESCRT recognizes ubiquitin → ILV inside MVB → lysosomal degradation. Receptor sacrificed to TIME-LIMIT the proliferative signal.' },
      { k: 'EGFR / HER2 cancer', v: 'Activating EGFR mutations (NSCLC) or HER2 amplification (breast) escape Cbl-mediated downregulation. TKIs (osimertinib, erlotinib), mAbs (cetuximab, trastuzumab).' },
      { k: 'MVB / ESCRT', v: 'ESCRT-0/I/II/III recognize ubiquitin on cargo → drive inward invagination → intraluminal vesicles (ILVs) → multivesicular body → fuses with lysosome.' },
      { k: 'Lysosomal storage diseases', v: 'Tay-Sachs (HEXA, GM2), Gaucher (β-glucocerebrosidase, MOST COMMON), Pompe (α-glucosidase, glycogen), Fabry (α-Gal, X-linked), Hurler (α-iduronidase, AR), Hunter (iduronate sulfatase, X-linked).' },
      { k: 'Niemann-Pick types', v: 'A/B = sphingomyelinase (cherry-red macula + HSM). C = NPC1 (cholesterol export from lysosome) → ataxia, vertical supranuclear gaze palsy.' },
      { k: 'Dynamin', v: 'GTPase wraps vesicle neck and pinches bud off. DNM2 mutations → centronuclear myopathy.' },
      { k: 'Synaptic vesicle recycling', v: 'Clathrin/AP2 endocytosis after fusion → vesicle refilled and reused. SNAREs (VAMP, syntaxin, SNAP-25) drive fusion. Targets of botulinum and tetanus toxins.' }
    ]
  },

  questions: [
    { id: 've-q1', difficulty: 'easy', prompt: { en: 'COPII vesicles carry cargo from:' }, correct: 'ER to cis-Golgi (anterograde)', options: ['ER to cis-Golgi (anterograde)', 'cis-Golgi to ER (retrograde)', 'Plasma membrane to endosome', 'trans-Golgi to lysosome'] },
    { id: 've-q2', difficulty: 'easy', prompt: { en: 'COPI vesicles carry cargo from:' }, correct: 'cis-Golgi back to ER', options: ['cis-Golgi back to ER', 'ER to cis-Golgi', 'Plasma membrane to endosome', 'trans-Golgi to plasma membrane'] },
    { id: 've-q3', difficulty: 'medium', prompt: { en: 'KDEL signal sequences mark proteins for:' }, correct: 'Retrieval back to the ER from the cis-Golgi', options: ['Retrieval back to the ER from the cis-Golgi', 'Lysosomal degradation', 'Plasma membrane delivery', 'Mitochondrial import'] },
    { id: 've-q4', difficulty: 'medium', prompt: { en: 'Mannose-6-phosphate is the address tag for:' }, correct: 'Lysosomal hydrolases', options: ['Lysosomal hydrolases', 'ER residents', 'Mitochondrial proteins', 'Secreted hormones'] },
    { id: 've-q5', difficulty: 'hard', prompt: { en: 'I-cell disease is caused by:' }, correct: 'Failure to add the M6P tag (GlcNAc-1-phosphotransferase deficiency)', options: ['Failure to add the M6P tag (GlcNAc-1-phosphotransferase deficiency)', 'Lysosomal hexosaminidase A deficiency', 'COPII coat protein loss', 'Defective dynamin'] },
    { id: 've-q6', difficulty: 'medium', prompt: { en: 'Receptor-mediated endocytosis at the plasma membrane uses:' }, correct: 'Clathrin + AP2', options: ['Clathrin + AP2', 'Clathrin + AP1', 'COPI', 'COPII'] },
    { id: 've-q7', difficulty: 'medium', prompt: { en: 'Dynamin\'s role in endocytosis is to:' }, correct: 'Pinch the budding vesicle off the membrane (GTPase)', options: ['Pinch the budding vesicle off the membrane (GTPase)', 'Form the clathrin lattice', 'Acidify the endosome', 'Tag receptors with ubiquitin'] },
    { id: 've-q8', difficulty: 'medium', prompt: { en: 'After clathrin-mediated endocytosis, in the early endosome:' }, correct: 'pH drops to ~6 and many ligand-receptor pairs dissociate', options: ['pH drops to ~6 and many ligand-receptor pairs dissociate', 'Receptors are immediately destroyed', 'Cargo is exocytosed back out', 'pH rises to dissociate ligands'] },
    { id: 've-q9', difficulty: 'medium', prompt: { en: 'The LDL receptor:' }, correct: 'Recycles to the plasma membrane while LDL goes to the lysosome', options: ['Recycles to the plasma membrane while LDL goes to the lysosome', 'Is degraded together with LDL', 'Returns to the ER for degradation', 'Stays embedded in the endosome permanently'] },
    { id: 've-q10', difficulty: 'medium', prompt: { en: 'The EGF receptor after EGF binding is:' }, correct: 'Ubiquitinated by Cbl → ESCRT/MVB → lysosomal degradation', options: ['Ubiquitinated by Cbl → ESCRT/MVB → lysosomal degradation', 'Recycled to the plasma membrane like LDL-R', 'Sent back to the ER', 'Permanently trapped in the early endosome'] },
    { id: 've-q11', difficulty: 'hard', prompt: { en: 'Why does the cell DEGRADE the EGF receptor instead of recycling it?' }, correct: 'To strictly time-limit the proliferative signal and prevent unchecked growth', options: ['To strictly time-limit the proliferative signal and prevent unchecked growth', 'To save energy', 'Because EGF is toxic', 'To deliver EGFR to the nucleus'] },
    { id: 've-q12', difficulty: 'hard', prompt: { en: 'Familial hypercholesterolemia is most commonly caused by:' }, correct: 'LDLR mutations', options: ['LDLR mutations', 'APOB mutations', 'PCSK9 loss-of-function', 'HMG-CoA reductase mutations'] },
    { id: 've-q13', difficulty: 'hard', prompt: { en: 'PCSK9 inhibitors (evolocumab, alirocumab) work by:' }, correct: 'Blocking PCSK9, which would otherwise target LDLR for lysosomal degradation', options: ['Blocking PCSK9, which would otherwise target LDLR for lysosomal degradation', 'Inhibiting HMG-CoA reductase', 'Inhibiting cholesterol absorption in the gut', 'Activating LDLR transcription directly'] },
    { id: 've-q14', difficulty: 'hard', prompt: { en: 'Brefeldin A causes Golgi to collapse into the ER by:' }, correct: 'Inhibiting ARF-GEF → COPI assembly fails → no retrograde traffic to maintain Golgi', options: ['Inhibiting ARF-GEF → COPI assembly fails → no retrograde traffic to maintain Golgi', 'Inhibiting clathrin', 'Disrupting microtubules', 'Blocking SNARE-mediated fusion'] },
    { id: 've-q15', difficulty: 'medium', prompt: { en: 'The MOST COMMON lysosomal storage disease is:' }, correct: 'Gaucher (β-glucocerebrosidase deficiency)', options: ['Gaucher (β-glucocerebrosidase deficiency)', 'Tay-Sachs', 'Pompe', 'Fabry'] },
    { id: 've-q16', difficulty: 'hard', prompt: { en: 'Hunter and Fabry diseases share which inheritance pattern?' }, correct: 'X-linked recessive', options: ['X-linked recessive', 'Autosomal recessive', 'Autosomal dominant', 'Mitochondrial'] },
    { id: 've-q17', difficulty: 'medium', prompt: { en: 'Which endocytic route uses caveolin-coated cup-shaped pits in lipid rafts?' }, correct: 'Caveolae-mediated endocytosis', options: ['Caveolae-mediated endocytosis', 'Macropinocytosis', 'Clathrin-mediated endocytosis', 'Phagocytosis'] },
    { id: 've-q18', difficulty: 'hard', prompt: { en: 'Cholera toxin B subunit enters cells primarily by:' }, correct: 'Caveolae-mediated endocytosis (binds GM1 ganglioside in lipid rafts)', options: ['Caveolae-mediated endocytosis (binds GM1 ganglioside in lipid rafts)', 'Clathrin-mediated endocytosis', 'Macropinocytosis', 'Phagocytosis'] },
    { id: 've-q19', difficulty: 'hard', prompt: { en: 'KRAS-mutant pancreatic cancer cells UPREGULATE which endocytic route to scavenge extracellular protein for amino acid fuel?' }, correct: 'Macropinocytosis', options: ['Macropinocytosis', 'Caveolae-mediated', 'Clathrin-mediated', 'Phagocytosis'] },
    { id: 've-q20', difficulty: 'medium', prompt: { en: 'Phagocytosis differs from macropinocytosis in that:' }, correct: 'Phagocytosis is receptor-driven (Fcγ, CR3, scavenger) and engulfs solid particles >0.5 μm; macropinocytosis is non-selective bulk fluid uptake', options: ['Phagocytosis is receptor-driven (Fcγ, CR3, scavenger) and engulfs solid particles >0.5 μm; macropinocytosis is non-selective bulk fluid uptake', 'Phagocytosis uses clathrin while macropinocytosis uses caveolin', 'Phagocytosis is dynamin-dependent while macropinocytosis is not', 'Phagocytosis happens in all cells while macropinocytosis is immune-cell-specific'] },
    { id: 've-q21', difficulty: 'hard', prompt: { en: 'Chronic granulomatous disease (CGD) is caused by:' }, correct: 'NADPH oxidase deficiency (intact phagocytosis but failed respiratory burst)', options: ['NADPH oxidase deficiency (intact phagocytosis but failed respiratory burst)', 'Defective clathrin assembly', 'Caveolin-3 mutations', 'Loss of macropinocytosis'] },
    { id: 've-q22', difficulty: 'hard', prompt: { en: 'Which two endocytic routes are DYNAMIN-INDEPENDENT?' }, correct: 'Macropinocytosis and phagocytosis (both actin-driven)', options: ['Macropinocytosis and phagocytosis (both actin-driven)', 'Clathrin-mediated and caveolae', 'Clathrin-mediated and macropinocytosis', 'All routes require dynamin'] },
    { id: 've-q23', difficulty: 'hard', prompt: { en: 'CAV3 mutations cause:' }, correct: 'Limb-girdle muscular dystrophy 1C, rippling muscle disease, hyperCKemia', options: ['Limb-girdle muscular dystrophy 1C, rippling muscle disease, hyperCKemia', 'Familial hypercholesterolemia', 'Lipodystrophy type 3', 'I-cell disease'] }
  ]
};
