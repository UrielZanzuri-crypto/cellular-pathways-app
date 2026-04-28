// ============================================================
// CELL JUNCTIONS & ECM
// Layout: 'pathway' (branching map: cell-cell vs cell-matrix)
// ============================================================

export const junctionsCycle = {
  id: 'junctions',
  chapter: 'Cell Junctions & ECM',
  chapterOrder: 4,
  order: 1,
  layout: 'pathway',
  title: { en: 'Cell Junctions & ECM', he: 'חיבורים תאיים ו-ECM' },
  subtitle: { en: 'Tight · adherens · desmosomes · gap · hemidesmosomes · ECM' },

  context: {
    tissue: { en: 'Universal — every tissue depends on cell-cell and cell-matrix connections. Most studied in epithelia (skin, gut, kidney tubules) where junctions polarize cells apical-vs-basal. Cardiac muscle uses gap junctions for synchronized contraction. Neurons use specialized analogs at synapses.' },
    state: { en: 'Static in mature tissue — junctions form during development and persist. Dynamic during wound healing, migration, EMT (epithelial-mesenchymal transition in cancer), and embryogenesis.' },
    stateHormonal: { en: 'TGF-β drives EMT — loss of E-cadherin, gain of mesenchymal markers. Many growth factors (HGF, FGF) loosen junctions during migration / wound healing.' },
    turnover: { en: 'Tight junctions and adherens junctions are surprisingly dynamic — junction proteins recycle in minutes. Desmosomes and hemidesmosomes are more stable (hours-days). ECM collagens have very long half-lives (years for type I in adult bone).' }
  },

  overview: {
    en: `Cells in tissues are not free-floating — they are anchored to each other and to a surrounding **extracellular matrix (ECM)** through a stack of specialized junctions, each with a specific job. Reading from apical (luminal/external) to basal (deep) on an epithelial cell: **(1) Tight junctions** at the apical-most belt seal the paracellular space and define the apical-vs-basolateral membrane domains. The seal is made by claudin and occludin proteins. **(2) Adherens junctions** sit just below tight junctions; their core protein is **E-cadherin**, a Ca²⁺-dependent homophilic adhesion molecule that links to the actin cytoskeleton via β-catenin and α-catenin. **(3) Desmosomes** are spot-like "rivets" that distribute mechanical stress across the tissue — abundant in skin and cardiac muscle. They use desmoglein/desmocollin (cadherin family) linked to **intermediate filaments** via plakoglobin and desmoplakin. **(4) Gap junctions** form direct cytoplasmic channels between adjacent cells — six connexins make one connexon (hemichannel), two connexons align to form a complete pore. Allow ions and small (<1 kDa) molecules to pass — synchronizes cardiac muscle, smooth muscle, neurons. On the basal surface, **hemidesmosomes** anchor the cell to the basement membrane via α6β4 integrin (linked to keratin intermediate filaments inside, to laminin outside). **Focal adhesions** are dynamic versions used during migration — built around β1 integrins and FAK signaling, linked to actin. The ECM itself is a mesh of secreted proteins: **collagen** (most abundant — types I/II/III/IV with tissue-specific roles), **laminin** (basement-membrane scaffold), **fibronectin** (linker between cells and ECM), and **proteoglycans / glycosaminoglycans** (highly hydrated, give compressive strength). Clinical relevance is huge: pemphigus vulgaris (anti-desmoglein), bullous pemphigoid (anti-hemidesmosome BP180/230), Ehlers-Danlos (collagen defects), Alport syndrome (type IV collagen in basement membrane), epidermolysis bullosa (anchoring defects), and the loss-of-E-cadherin signature in invasive carcinoma.`
  },

  pedagogy: [
    {
      title: 'The five junction types — what each one DOES',
      icon: '🧱',
      body: `It\'s tempting to memorize all five junctions as a list. Don\'t. **Each one does a different job.** Group them functionally:

**OCCLUDING — seals.**
- **Tight junctions (zonula occludens, ZO):** apical-most belt. SEAL the paracellular space → no leak between cells. Also acts as a "fence" — keeps apical and basolateral membrane proteins from mixing. Made of **claudins** (determine paracellular ion selectivity), **occludin** (reinforces seal), and **ZO-1** (intracellular scaffold linking to actin). Why it matters: blood-brain barrier integrity, gut epithelial barrier, blood-testis barrier. Loss → leaky tissues, autoimmunity, infection susceptibility.

**ANCHORING — mechanical glue.**
- **Adherens junctions (zonula adherens):** belt-like, just below tight. Cell-cell anchorage via the actin cytoskeleton. Core: **E-cadherin** (Ca²⁺-dependent, homophilic) → β-catenin → α-catenin → actin. Loss of E-cadherin is a hallmark of EMT and invasive carcinoma (most invasive lobular breast carcinoma).
- **Desmosomes (macula adherens):** spot-like rivets. Cell-cell anchorage via intermediate filaments. Core: **desmoglein/desmocollin** → plakoglobin → desmoplakin → keratin (in epithelia) or desmin (in cardiac muscle). Distribute mechanical stress. Skin and heart.
- **Hemidesmosomes:** look like half a desmosome but anchor cell to BASEMENT MEMBRANE (not to another cell). **α6β4 integrin** binds laminin extracellularly, plectin/BP230 intracellularly link to keratin intermediate filaments.
- **Focal adhesions:** dynamic version of hemidesmosome. **β1 integrins** bind ECM (fibronectin, collagen) extracellularly, talin/vinculin intracellularly link to actin (not keratin). Used during migration, wound healing.

**COMMUNICATING — direct chemical/electrical coupling.**
- **Gap junctions:** direct cytoplasmic channels between cells. Six **connexins** form one **connexon** (hemichannel); two connexons (one per cell) align to form a complete pore. Ions and molecules <1 kDa pass freely → electrical coupling (cardiac, smooth muscle, neurons) and metabolic coupling (allows daughter cells to share nutrients).

**Mnemonic: "**T**ight, **A**dhere, **D**esmosome, **G**ap, **H**emi" → top to bottom on an epithelial cell. **T**op seals, then mechanical anchors, then communication, then deep matrix anchor.

**Mnemonic for cytoskeletal links:**
- Tight → actin (via ZO-1)
- Adherens → ACTIN (via β-catenin → α-catenin)
- Desmosome → INTERMEDIATE FILAMENTS (keratin or desmin)
- Hemidesmosome → INTERMEDIATE FILAMENTS (keratin)
- Focal adhesion → ACTIN (via talin/vinculin)
- Gap junction → no cytoskeletal anchor (it\'s a pore, not an anchor)`
    },
    {
      title: 'Cadherins, integrins, and the calcium/divalent-cation rule',
      icon: '🧪',
      body: `Two big adhesion-receptor families do the actual binding work in junctions:

**Cadherins** mediate **homophilic, Ca²⁺-dependent** cell-cell adhesion. "Same talks to same" — E-cadherin on one cell binds E-cadherin on the next cell. The "Ca²⁺-dependent" part is critical for boards: chelating Ca²⁺ (e.g., EGTA in lab; or hypocalcemia in vivo) **weakens cadherin-mediated junctions**.

Cadherin variants per tissue:
- **E-cadherin (epithelial):** adherens junctions in epithelia. Loss → invasion. CDH1 germline mutations → diffuse gastric cancer + lobular breast cancer (hereditary syndrome).
- **N-cadherin (neural / mesenchymal):** acquired during EMT. Cancer cells often switch E→N as they become invasive ("cadherin switching").
- **VE-cadherin (vascular endothelial):** endothelial cell-cell junctions. Disrupted by VEGF and inflammation → vascular leak.
- **Desmoglein / Desmocollin:** cadherin family, in desmosomes (anchored to intermediate filaments instead of actin).
- **Protocadherins:** in synapses and neural identity.

**Integrins** mediate **heterophilic** cell-MATRIX adhesion (some also do cell-cell, but mostly cell-matrix). They are αβ heterodimers — many α and β subunits exist, combinations specify which ECM ligand they bind. **Need divalent cations (Ca²⁺ or Mg²⁺)** for activation.

Integrin examples:
- **α6β4** in hemidesmosomes — binds laminin in basement membrane, links to keratin intermediate filaments.
- **β1 integrins** in focal adhesions — bind fibronectin (most), collagen, laminin. Link to actin via talin/vinculin.
- **αIIbβ3 (GPIIb/IIIa)** on platelets — binds fibrinogen + von Willebrand factor → platelet aggregation. Glanzmann thrombasthenia (αIIbβ3 deficiency) → bleeding. Drugs: abciximab, eptifibatide (anti-platelets).
- **αLβ2 (LFA-1) and αMβ2 (Mac-1)** on leukocytes — bind ICAM-1 on endothelium → leukocyte rolling/adhesion → extravasation. Leukocyte adhesion deficiency (LAD-1) = β2 integrin defect → recurrent bacterial infections, no pus formation.

**Inside-out vs outside-in signaling.** Integrins are unique: they signal in BOTH directions. "Inside-out" — signals inside the cell (e.g. platelet activation by thrombin) increase integrin\'s ECM-binding affinity. "Outside-in" — ECM engagement triggers FAK → Src → Rho-GTPase signaling → cytoskeletal remodeling, survival, proliferation. This is how attachment to a "good" ECM is itself a survival signal — anchorage-dependent growth. Cells torn from their ECM die by **anoikis** (a form of apoptosis triggered by detachment). Cancer cells often lose anchorage dependence.`
    },
    {
      title: 'ECM structure — the four pillars',
      icon: '🕸️',
      body: `The extracellular matrix is the structural scaffold OUTSIDE the cell. Four major component classes:

**1. Collagen — tensile strength.**
Most abundant protein in the human body (~30% of total protein mass). All collagens are **triple helices** of three α-chains, each with a Gly-X-Y repeating motif. Hydroxyproline and hydroxylysine residues stabilize the helix — and their hydroxylation requires **vitamin C**. Vitamin C deficiency → **scurvy** → defective collagen → bleeding gums, poor wound healing, perifollicular hemorrhage.

Major types (memorize these):
- **Type I** — bone, skin, tendon, cornea, scar tissue. Largest amount overall. Defective in osteogenesis imperfecta (COL1A1/A2 mutations → blue sclerae, multiple fractures, hearing loss).
- **Type II** — cartilage, vitreous body, nucleus pulposus.
- **Type III** — reticular fibers (skin, blood vessels, granulation tissue, lymphoid organs). Defective in vascular Ehlers-Danlos (COL3A1 mutations → fragile vessels and viscera).
- **Type IV** — basement membrane (specialized ECM under epithelia). Defective in Alport syndrome (COL4A3/A4/A5 mutations → glomerulonephritis with hematuria, sensorineural deafness, ocular abnormalities). Targeted in Goodpasture syndrome (anti-α3 chain antibodies → glomerulonephritis + alveolar hemorrhage).

**2. Laminin — basement-membrane scaffold.**
Cross-shaped glycoprotein, the major non-collagen component of the basement membrane. Binds to integrins (especially α6β4 in hemidesmosomes), to type IV collagen, and to perlecan. Deficient in junctional epidermolysis bullosa (laminin-332 mutations).

**3. Fibronectin — the linker.**
Glycoprotein that links cells (via integrins, mainly α5β1) to collagen and proteoglycans. Important in wound healing (early granulation matrix is fibronectin-rich) and in embryonic cell migration.

**4. Proteoglycans / GAGs — hydration and compressive strength.**
A protein core decorated with long unbranched **glycosaminoglycan (GAG)** chains: heparan sulfate, chondroitin sulfate, dermatan sulfate, keratan sulfate. **Hyaluronan** is unique — a free GAG (no core protein) and very large.

GAGs are highly negatively charged (sulfate + carboxylate groups) → bind water → tissue hydration and compressive resistance. Why cartilage doesn\'t crush under load.

Mucopolysaccharidoses (e.g., **Hurler, Hunter syndrome**) are lysosomal-storage diseases of GAG breakdown — coarse facial features, corneal clouding, hepatosplenomegaly, neurodegeneration.`
    },
    {
      title: 'Clinical syndromes by junction or ECM defect',
      icon: '🏥',
      body: `Pattern recognition for boards:

**Pemphigus vulgaris** — autoantibodies against **desmoglein 3** (and sometimes 1). Targets desmosomes in skin and mucosa. Result: **flaccid blisters** that rupture easily, oral erosions, painful, **positive Nikolsky sign** (skin sloughs with light pressure). Histology: intraepidermal acantholysis, "tombstone" basal layer. Treat: high-dose steroids, rituximab.

**Bullous pemphigoid** — autoantibodies against **BP180 / BP230** in hemidesmosomes (basement-membrane-zone proteins). Result: **TENSE bullae** (subepidermal — under intact epidermis), elderly patients, less mucosal involvement, **negative Nikolsky**. Less aggressive than pemphigus. Treat: topical / systemic steroids.

**Epidermolysis bullosa (EB)** — heritable defects in adhesion proteins → mechanical fragility, blisters with minor friction. Multiple types depending on which protein:
- **EB simplex** — keratin 5/14 (in basal keratinocytes themselves).
- **Junctional EB** — laminin-332 (basement membrane). Severe, Herlitz form is often lethal in infancy.
- **Dystrophic EB** — type VII collagen (anchoring fibrils below basement membrane). Scarring.

**Ehlers-Danlos syndrome** — defective collagen.
- **Classic type** — type V collagen → hyperextensible skin, hypermobile joints, atrophic scars.
- **Vascular type (type IV)** — type III collagen → fragile vessels, organ rupture, characteristic facies. Most dangerous form.
- **Kyphoscoliotic type** — lysyl hydroxylase deficiency → kyphoscoliosis, eye fragility.

**Marfan syndrome** — defective fibrillin-1 (FBN1). Fibrillin is a microfibril component that scaffolds elastic fibers and sequesters latent TGF-β. Loss → tall stature, arachnodactyly, ectopia lentis (UPWARD/outward — vs DOWN/IN in homocystinuria), aortic root dilation/dissection.

**Alport syndrome** — type IV collagen (α3/α4/α5 chains). Glomerulonephritis with hematuria, sensorineural deafness, ocular abnormalities. X-linked dominant most common (COL4A5).

**Goodpasture syndrome** — anti-GBM antibodies against the α3 chain of type IV collagen. Glomerulonephritis (rapidly progressive) + alveolar hemorrhage (kidneys + lungs).

**Loss of E-cadherin** — characteristic of **invasive lobular breast cancer** (CDH1 mutations). Also: hereditary diffuse gastric cancer (germline CDH1 → "signet-ring" carcinoma — lifetime risk so high that prophylactic gastrectomy is offered).

**Connexin 26 mutations** — the most common cause of **autosomal recessive non-syndromic deafness**. Cx26 is expressed in cochlear support cells; loss disrupts K⁺ recycling needed for hair-cell function.

**Glanzmann thrombasthenia** — αIIbβ3 (GPIIb/IIIa) integrin deficiency on platelets. Mucocutaneous bleeding, normal platelet count, abnormal platelet aggregation studies.

**Leukocyte Adhesion Deficiency type 1 (LAD-1)** — β2 integrin (CD18) deficiency → leukocytes can\'t firmly adhere to endothelium → can\'t extravasate. Classic findings: delayed umbilical-cord separation, recurrent bacterial infections WITHOUT pus, marked leukocytosis.`
    }
  ],

  mnemonic: {
    en: { phrase: 'Apical → basal: Tight, Adherens, Desmosome, Gap, Hemidesmosome   ·   Type IV collagen = basement membrane = Goodpasture target', breakdown: 'Cadherin = cell-cell, needs Ca²⁺ (cad-Ca). Integrin = cell-matrix, αβ heterodimer, needs divalent cations.' }
  },

  compartments: {
    cyto: { en: 'Plasma membrane + ECM', he: 'קרום הפלזמה + ECM', color: '#fef3c7', accent: '#d97706' }
  },

  pathway: {
    viewBox: [0, 0, 1500, 880],
    // Junctions are structural, not signaling — override the default
    // 'Activated by' / 'Acts on' labels. Edges describe membership ("Tight
    // junction is part of Cell-Cell Junctions") and composition ("Cell-Cell
    // Junctions comprises tight, adherens, desmosomes, gap").
    relationships: {
      incoming: 'Part of',
      outgoing: 'Components',
      activateVerb: 'comprises',
      inhibitVerb: 'restricts'
    },
    nodes: [
      // Tier 1 — root header
      { id: 'root', label: 'Cell Junctions & ECM', sublabel: 'apical → basal', x: 750, y: 60, type: 'phase',
        memory: { glyph: '🏗️', char: 'Tissue scaffolding' },
        hint: 'Epithelial cells stack a hierarchy of junctions from apical (luminal) to basal (deep). The order from top to bottom is: tight → adherens → desmosomes (interspersed with the others) → gap junctions (anywhere lateral) → hemidesmosomes (basal). Below that: basement membrane and ECM.' },

      // Tier 2 — two big branches
      { id: 'cellcell', label: 'Cell-Cell Junctions', sublabel: 'occluding · anchoring · communicating', x: 350, y: 170, type: 'phase',
        memory: { glyph: '🤝', char: 'Cell-cell handshakes' },
        hint: 'Three jobs: SEAL the paracellular space (tight), MECHANICALLY link cells (adherens, desmosomes), and CHEMICALLY/ELECTRICALLY couple them (gap).' },
      { id: 'cellmatrix', label: 'Cell-Matrix Junctions', sublabel: 'anchor cell to ECM', x: 1180, y: 170, type: 'phase',
        memory: { glyph: '⚓', char: 'Cell-matrix anchor' },
        hint: 'Anchor the basal surface to the basement membrane and underlying ECM. Built around integrin receptors. Two main types: stable (hemidesmosomes) and dynamic (focal adhesions).' },

      // Tier 3 — Cell-cell types
      { id: 'tj', label: 'Tight Junction', sublabel: 'zonula occludens · seal', x: 110, y: 300, type: 'receptor',
        memory: { glyph: '🚧', char: 'Apical seal' },
        hint: 'Apical-most belt. Seals the paracellular space (no leak between cells) and acts as a "fence" separating apical and basolateral membrane domains. Critical for blood-brain barrier, gut barrier, blood-testis barrier.',
        clinical: { disorder: 'Leaky-gut hypothesis', findings: { en: 'Increased intestinal permeability has been linked to autoimmune disease, but causality is debated. Zonulin is one regulator of TJ permeability.' } } },
      { id: 'aj', label: 'Adherens Junction', sublabel: 'zonula adherens · belt', x: 310, y: 300, type: 'receptor',
        memory: { glyph: '🪢', char: 'Belt of E-cad' },
        hint: 'Belt-like, just below tight junction. Mechanical anchorage between cells via the actin cytoskeleton. Core: E-cadherin (Ca²⁺-dependent, homophilic) → β-catenin → α-catenin → actin.',
        clinical: { disorder: 'Hereditary diffuse gastric cancer (CDH1 mutation)', findings: { en: 'Germline E-cadherin loss → "signet-ring" gastric carcinoma + invasive lobular breast cancer. Lifetime gastric-cancer risk so high (~70%) that prophylactic total gastrectomy is offered.' } } },
      { id: 'ds', label: 'Desmosome', sublabel: 'macula adherens · rivets', x: 510, y: 300, type: 'receptor',
        memory: { glyph: '🔩', char: 'Skin rivets' },
        hint: 'Spot-like "rivets" that distribute mechanical stress across tissues. Especially abundant in skin and cardiac muscle. Anchored to intermediate filaments (keratin in epithelia, desmin in cardiac).',
        clinical: { disorder: 'Pemphigus vulgaris', findings: { en: 'Autoantibodies against desmoglein 3 (and sometimes 1). Flaccid blisters, oral erosions, positive Nikolsky sign. Treat with steroids, rituximab.' } } },
      { id: 'gj', label: 'Gap Junction', sublabel: 'communicating', x: 710, y: 300, type: 'receptor',
        memory: { glyph: '📞', char: 'Cytoplasm hotline' },
        hint: 'Direct cytoplasmic channels between adjacent cells. Allows ions and small molecules (<1 kDa) to pass — synchronizes cardiac muscle (electrical coupling), smooth muscle, and neurons. NOT an anchor.',
        clinical: { disorder: 'Connexin 26 deafness', findings: { en: 'Most common cause of autosomal recessive non-syndromic deafness. GJB2 (Cx26) mutations disrupt K⁺ recycling in cochlear support cells.' } } },

      // Tier 4 — Cell-cell proteins (downstream of junction types)
      { id: 'tj_p', label: 'Claudin · Occludin', sublabel: '+ ZO-1 scaffold', x: 110, y: 460, type: 'messenger',
        memory: { glyph: '🔒', char: 'Claudin lock' },
        hint: 'Claudins (~24 family members) determine paracellular ion selectivity (e.g., claudin-2 makes leaky junctions in proximal tubule; claudin-16 selects Mg²⁺ in TAL). Occludin reinforces the seal. ZO-1 links them to actin inside the cell.',
        clinical: { disorder: 'Familial hypomagnesemia with hypercalciuria', findings: { en: 'Claudin-16 (paracellin-1) mutations → loss of paracellular Mg²⁺ reabsorption in thick ascending limb of Henle.' } } },
      { id: 'aj_p', label: 'E-cadherin → Catenins', sublabel: 'Ca²⁺-dependent · → actin', x: 310, y: 460, type: 'messenger',
        memory: { glyph: '🪢', char: 'E-cad → β-cat → actin' },
        hint: 'E-cadherin (homophilic, Ca²⁺-dependent) binds β-catenin via its cytoplasmic tail. β-catenin binds α-catenin, which binds actin. Loss of E-cadherin → epithelial-mesenchymal transition (EMT) and invasive carcinoma. β-catenin also has a parallel role in Wnt signaling (transcription factor).',
        drugs: ['Wnt-pathway inhibitors (research)'] },
      { id: 'ds_p', label: 'Desmoglein → IFs', sublabel: '→ keratin (skin) / desmin (heart)', x: 510, y: 460, type: 'messenger',
        memory: { glyph: '🪡', char: 'Desmoglein → keratin' },
        hint: 'Desmoglein and desmocollin (cadherin family) link to intermediate filaments via plakoglobin and desmoplakin. Anchors to keratin in epithelia, desmin in cardiac muscle. Autoantibodies against desmoglein-3 cause pemphigus vulgaris.' },
      { id: 'gj_p', label: 'Connexin → Connexon', sublabel: '6 connexins = 1 hemichannel', x: 710, y: 460, type: 'messenger',
        memory: { glyph: '⚪', char: '6 connexin pore' },
        hint: 'Six connexin subunits oligomerize to form one connexon (hemichannel). Two connexons (one in each cell\'s membrane) align across the gap to form a complete pore. Cx43 is the major cardiac connexin; Cx26 in cochlea; Cx32 in liver/Schwann cells.' },

      // Tier 5 — Cell-matrix types
      { id: 'hd', label: 'Hemidesmosome', sublabel: 'stable BM anchor', x: 980, y: 300, type: 'receptor',
        memory: { glyph: '⚓', char: 'Stable BM anchor' },
        hint: 'Looks like half a desmosome but anchors cell to basement membrane (not to another cell). α6β4 integrin binds laminin extracellularly; plectin and BP230 link to keratin intermediate filaments inside.',
        clinical: { disorder: 'Bullous pemphigoid', findings: { en: 'Autoantibodies against BP180 / BP230 (hemidesmosomal proteins). Tense subepidermal bullae in elderly. Less aggressive than pemphigus. Negative Nikolsky.' }, treatment: { en: 'Topical / systemic steroids.' } } },
      { id: 'fa', label: 'Focal Adhesion', sublabel: 'dynamic ECM contact', x: 1180, y: 300, type: 'receptor',
        memory: { glyph: '🦶', char: 'Migration foothold' },
        hint: 'More dynamic than hemidesmosomes. Used during migration and wound healing. Built around β1 integrins. Cytoplasmic side links to ACTIN (not intermediate filaments). FAK kinase signals inward to drive cytoskeletal remodeling and survival.' },

      // Tier 6 — Cell-matrix proteins
      { id: 'hd_p', label: 'α6β4 Integrin → Laminin', sublabel: '→ keratin (IF)', x: 980, y: 460, type: 'messenger',
        memory: { glyph: '🩹', char: 'α6β4 ↔ laminin' },
        hint: 'α6β4 integrin is unique to hemidesmosomes. Binds laminin-332 in the basement membrane extracellularly, plectin → keratin intermediate filaments inside. Mutations cause junctional epidermolysis bullosa.' },
      { id: 'fa_p', label: 'β1 Integrin → Talin → Actin', sublabel: 'FAK signaling', x: 1180, y: 460, type: 'messenger',
        memory: { glyph: '🧗', char: 'β1-int + FAK climb' },
        hint: 'β1 integrins bind ECM (fibronectin most prominently, also collagen, laminin). Cytoplasmic tail recruits talin and vinculin → links to actin. FAK (focal adhesion kinase) phosphorylates downstream targets → migration, survival, proliferation. Detachment → anoikis (apoptosis).' },

      // Tier 7 — ECM (between cell-matrix branch and bottom)
      { id: 'ecm', label: 'ECM', sublabel: 'extracellular matrix', x: 1380, y: 380, type: 'modifier',
        memory: { glyph: '🕸️', char: 'Outside-cell mesh' },
        hint: 'Mesh of secreted proteins and glycans. Gives tissue mechanical properties and instructs cell behavior. Specialized regions include the basement membrane (a thin sheet of type IV collagen + laminin underneath every epithelium and endothelium).' },

      // Tier 8 — ECM components
      { id: 'col', label: 'Collagen', sublabel: 'tensile strength · triple helix', x: 1000, y: 640, type: 'effector',
        memory: { glyph: '🏛️', char: 'Pillar collagen' },
        hint: 'Most abundant protein in the body. Triple helix of α-chains with Gly-X-Y repeats. Hydroxylation (vitamin C-dependent) stabilizes. Type I = bone/skin, II = cartilage, III = reticular, IV = basement membrane. Defective in osteogenesis imperfecta (I), Ehlers-Danlos (III/V), Alport (IV).',
        drugs: ['vitamin C (treats scurvy)'] },
      { id: 'lam', label: 'Laminin', sublabel: 'basement membrane', x: 1180, y: 640, type: 'effector',
        memory: { glyph: '✚', char: 'Cross-shaped laminin' },
        hint: 'Cross-shaped glycoprotein, major non-collagen component of the basement membrane. Binds integrins (α6β4 in hemidesmosomes), type IV collagen, perlecan. Deficient in junctional epidermolysis bullosa.' },
      { id: 'fn', label: 'Fibronectin', sublabel: 'ECM linker', x: 1360, y: 640, type: 'effector',
        memory: { glyph: '🔗', char: 'Fibronectin link' },
        hint: 'Glycoprotein that links cells (via β1 integrins) to collagen and proteoglycans. Granulation tissue is fibronectin-rich during early wound healing. Important in embryonic cell migration and tissue repair.' },
      { id: 'gag', label: 'Proteoglycans / GAGs', sublabel: 'hydration · compressive strength', x: 1180, y: 780, type: 'effector',
        memory: { glyph: '💧', char: 'Water-binding gel' },
        hint: 'Glycosaminoglycan chains (heparan sulfate, chondroitin sulfate, hyaluronan) on a protein core. Highly negatively charged → bind water → tissue hydration. Why cartilage doesn\'t crush under load.',
        clinical: { disorder: 'Mucopolysaccharidoses (Hurler, Hunter)', findings: { en: 'Lysosomal-storage diseases of GAG breakdown. Coarse facies, corneal clouding (Hurler — not Hunter), hepatosplenomegaly, neurodegeneration. Hurler = α-L-iduronidase deficiency, AR. Hunter = iduronate sulfatase, X-linked.' } } }
    ],
    edges: [
      // Root branches
      { from: 'root', to: 'cellcell', label: 'cell-cell', style: 'activate' },
      { from: 'root', to: 'cellmatrix', label: 'cell-matrix', style: 'activate' },
      // Cell-cell types
      { from: 'cellcell', to: 'tj', label: 'occluding', style: 'activate' },
      { from: 'cellcell', to: 'aj', label: 'anchoring', style: 'activate' },
      { from: 'cellcell', to: 'ds', label: 'anchoring', style: 'activate' },
      { from: 'cellcell', to: 'gj', label: 'communicating', style: 'activate' },
      // Cell-cell proteins
      { from: 'tj', to: 'tj_p', label: 'proteins', style: 'activate' },
      { from: 'aj', to: 'aj_p', label: 'proteins', style: 'activate' },
      { from: 'ds', to: 'ds_p', label: 'proteins', style: 'activate' },
      { from: 'gj', to: 'gj_p', label: 'proteins', style: 'activate' },
      // Cell-matrix types + proteins
      { from: 'cellmatrix', to: 'hd', label: 'stable', style: 'activate' },
      { from: 'cellmatrix', to: 'fa', label: 'dynamic', style: 'activate' },
      { from: 'hd', to: 'hd_p', label: 'proteins', style: 'activate' },
      { from: 'fa', to: 'fa_p', label: 'proteins', style: 'activate' },
      // ECM
      { from: 'cellmatrix', to: 'ecm', label: 'binds', style: 'activate' },
      { from: 'ecm', to: 'col', label: 'fibrous', style: 'activate' },
      { from: 'ecm', to: 'lam', label: 'BM', style: 'activate' },
      { from: 'ecm', to: 'fn', label: 'linker', style: 'activate' },
      { from: 'ecm', to: 'gag', label: 'gel', style: 'activate' }
    ]
  },

  integrations: [
    {
      name: 'E-cadherin loss → invasive carcinoma (EMT)',
      toCycle: 'Cancer biology',
      path: { en: 'TGF-β, Wnt, hypoxia → activate ZEB1/2, SNAIL, SLUG transcription factors → repress E-cadherin → epithelial cell loses adherens junctions, gains migratory mesenchymal phenotype → invades, metastasizes. Switches E-cadherin → N-cadherin ("cadherin switching"). Hereditary diffuse gastric cancer (CDH1 germline) and most invasive lobular breast carcinomas show E-cadherin loss.' },
      note: { en: 'Most powerful single morphologic predictor of invasiveness in carcinoma.' }
    },
    {
      name: 'β-catenin double duty: junctions and Wnt signaling',
      toCycle: 'Wnt pathway',
      path: { en: 'β-catenin has two pools. Membrane pool: bound to E-cadherin in adherens junctions (structural). Cytoplasmic pool: degraded by APC/Axin/GSK-3β destruction complex. Wnt signaling inhibits the destruction complex → cytoplasmic β-catenin accumulates → enters nucleus → TCF/LEF → cyclin D, c-Myc transcription. APC mutations (FAP) cause β-catenin stabilization → colon adenocarcinoma.' },
      note: { en: 'Why APC tumor-suppressor loss is so colon-specific in FAP.' }
    },
    {
      name: 'Integrins and platelets: hemostasis',
      toCycle: 'Coagulation',
      path: { en: 'Resting platelet has inactive αIIbβ3. Vessel injury exposes collagen / vWF → platelet activation → inside-out signaling → αIIbβ3 conformation change → binds fibrinogen → platelets crosslink → primary hemostatic plug. Glanzmann thrombasthenia = αIIbβ3 deficiency = bleeding. Abciximab/eptifibatide block αIIbβ3 (anti-platelets in PCI).' },
      note: { en: 'Classic example of inside-out integrin signaling — and a major drug target.' }
    },
    {
      name: 'Leukocyte adhesion — extravasation cascade',
      toCycle: 'Immune cell trafficking',
      path: { en: 'Inflammation → endothelium expresses E-/P-selectin (rolling — sialyl-Lewis-X on leukocyte) → integrin activation by chemokines → firm adhesion (LFA-1 on leukocyte ↔ ICAM-1 on endothelium) → diapedesis through interendothelial junctions. β2-integrin (CD18) defect = LAD-1: recurrent infections without pus, delayed cord separation.' },
      note: { en: 'Understanding which step fails predicts the clinical phenotype (rolling vs adhesion).' }
    },
    {
      name: 'Anchorage-dependent survival → anoikis',
      toCycle: 'Apoptosis',
      path: { en: 'Normal cells need β1-integrin engagement with ECM for survival → outside-in signaling (FAK → PI3K/Akt) blocks apoptosis. Detachment → loss of FAK → ↓Akt → BAX/BAK activation → mitochondrial apoptosis = "anoikis." Cancer cells often lose anchorage dependence — survive in suspension → can circulate and metastasize.' },
      note: { en: 'Why most non-cancer cells die when removed from a tissue substrate, but tumor cells make it to distant sites.' }
    },
    {
      name: 'Basement membrane in glomerulonephritis',
      toCycle: 'Renal pathology',
      path: { en: 'Glomerular basement membrane = type IV collagen (α3α4α5 trimer) + laminin + heparan sulfate. Alport: COL4A5 mutations → split basement membrane on EM, hematuria, deafness. Goodpasture: anti-α3 antibodies → linear IgG on IF, RPGN + alveolar hemorrhage. Diabetic nephropathy: BM thickening + mesangial expansion.' },
      note: { en: 'Same target tissue, three different molecular insults.' }
    }
  ],

  bigPicture: {
    en: [
      { k: 'Five junction types (apical → basal)', v: 'Tight (occluding) → Adherens (anchoring, actin) → Desmosomes (anchoring, IFs) → Gap (communicating) → Hemidesmosomes (anchoring to BM, IFs).' },
      { k: 'Cytoskeletal links', v: 'Adherens → actin. Desmosomes → IFs (keratin/desmin). Hemidesmosomes → IFs. Focal adhesions → actin. Gap junctions → no anchor (it\'s a pore).' },
      { k: 'Cadherins', v: 'Cell-CELL adhesion. Homophilic. Ca²⁺-dependent. E (epithelial), N (neural), VE (vascular), desmoglein (desmosomes).' },
      { k: 'Integrins', v: 'Cell-MATRIX adhesion. Heterophilic (αβ heterodimer). Need divalent cations. Bidirectional signaling (inside-out + outside-in).' },
      { k: 'Pemphigus vulgaris', v: 'Anti-desmoglein-3. FLACCID blisters, oral erosions, +Nikolsky. Treat: steroids, rituximab.' },
      { k: 'Bullous pemphigoid', v: 'Anti-BP180/230 (hemidesmosome). TENSE bullae, elderly, −Nikolsky.' },
      { k: 'Epidermolysis bullosa', v: 'Heritable. Simplex (keratin 5/14), Junctional (laminin-332), Dystrophic (type VII collagen).' },
      { k: 'E-cadherin loss', v: 'Hallmark of EMT and invasive carcinoma. Hereditary CDH1 mutation = diffuse gastric ca + invasive lobular breast ca.' },
      { k: 'Connexin 26', v: 'GJB2. Most common cause of AR non-syndromic deafness.' },
      { k: 'Collagen types', v: 'I = bone/skin/tendon. II = cartilage. III = reticular/vessels. IV = basement membrane.' },
      { k: 'Osteogenesis imperfecta', v: 'Type I collagen (COL1A1/A2). Blue sclerae, fractures, hearing loss.' },
      { k: 'Ehlers-Danlos', v: 'Various collagens (esp. III for vascular type). Hyperextensibility, joint hypermobility, vascular fragility.' },
      { k: 'Alport syndrome', v: 'Type IV collagen (COL4A5 most common). Hematuria + sensorineural deafness + ocular changes.' },
      { k: 'Goodpasture', v: 'Anti-α3 chain of type IV collagen. RPGN + alveolar hemorrhage.' },
      { k: 'Marfan', v: 'Fibrillin-1 (FBN1). Tall, arachnodactyly, aortic dissection, ectopia lentis (UP/OUT).' },
      { k: 'Scurvy', v: 'Vit C deficiency → can\'t hydroxylate proline/lysine → defective collagen → bleeding gums, perifollicular hemorrhage, poor wound healing.' },
      { k: 'Mucopolysaccharidoses', v: 'Lysosomal storage. Hurler (α-L-iduronidase, AR — corneal clouding). Hunter (iduronate sulfatase, X-linked — NO corneal clouding).' },
      { k: 'Glanzmann', v: 'αIIbβ3 (GPIIb/IIIa) deficiency on platelets. Mucocutaneous bleeding, normal count, abnormal aggregation.' },
      { k: 'LAD-1', v: 'β2 integrin (CD18) deficiency. Delayed cord separation, recurrent infections without pus, leukocytosis.' }
    ]
  },

  questions: [
    { id: 'cj-q1', difficulty: 'easy', prompt: { en: 'Apical-most epithelial junction is:' }, correct: 'Tight junction (zonula occludens)', options: ['Tight junction (zonula occludens)', 'Adherens junction', 'Desmosome', 'Gap junction'] },
    { id: 'cj-q2', difficulty: 'easy', prompt: { en: 'Cadherin-mediated adhesion requires:' }, correct: 'Ca²⁺', options: ['Ca²⁺', 'Mg²⁺', 'ATP', 'Sodium'] },
    { id: 'cj-q3', difficulty: 'medium', prompt: { en: 'Pemphigus vulgaris is caused by autoantibodies against:' }, correct: 'Desmoglein-3 (and sometimes 1)', options: ['Desmoglein-3 (and sometimes 1)', 'BP180 / BP230', 'Type IV collagen', 'Laminin-332'] },
    { id: 'cj-q4', difficulty: 'medium', prompt: { en: 'Bullous pemphigoid targets:' }, correct: 'Hemidesmosomal proteins BP180 / BP230', options: ['Hemidesmosomal proteins BP180 / BP230', 'Desmoglein-3', 'E-cadherin', 'Connexin 26'] },
    { id: 'cj-q5', difficulty: 'medium', prompt: { en: 'Connexin 26 mutations cause:' }, correct: 'Autosomal recessive non-syndromic deafness', options: ['Autosomal recessive non-syndromic deafness', 'Bullous pemphigoid', 'Junctional epidermolysis bullosa', 'Hereditary diffuse gastric cancer'] },
    { id: 'cj-q6', difficulty: 'hard', prompt: { en: 'Hereditary diffuse gastric cancer is caused by germline mutations in:' }, correct: 'CDH1 (E-cadherin)', options: ['CDH1 (E-cadherin)', 'TP53', 'APC', 'BRCA1'] },
    { id: 'cj-q7', difficulty: 'medium', prompt: { en: 'Type IV collagen is found in:' }, correct: 'Basement membrane', options: ['Basement membrane', 'Cartilage', 'Bone', 'Tendon'] },
    { id: 'cj-q8', difficulty: 'medium', prompt: { en: 'Goodpasture syndrome targets the α3 chain of:' }, correct: 'Type IV collagen', options: ['Type IV collagen', 'Type I collagen', 'Type III collagen', 'Laminin'] },
    { id: 'cj-q9', difficulty: 'hard', prompt: { en: 'Vascular Ehlers-Danlos is due to defective:' }, correct: 'Type III collagen (COL3A1)', options: ['Type III collagen (COL3A1)', 'Type I collagen', 'Type V collagen', 'Fibrillin-1'] },
    { id: 'cj-q10', difficulty: 'medium', prompt: { en: 'Osteogenesis imperfecta most commonly involves:' }, correct: 'Type I collagen', options: ['Type I collagen', 'Type II collagen', 'Type III collagen', 'Type IV collagen'] },
    { id: 'cj-q11', difficulty: 'hard', prompt: { en: 'Hemidesmosomes anchor to the basement membrane via:' }, correct: 'α6β4 integrin binding laminin', options: ['α6β4 integrin binding laminin', 'E-cadherin homophilic binding', 'β1 integrin binding fibronectin', 'Connexin hemichannels'] },
    { id: 'cj-q12', difficulty: 'hard', prompt: { en: 'Glanzmann thrombasthenia is due to deficiency of:' }, correct: 'αIIbβ3 (GPIIb/IIIa) integrin on platelets', options: ['αIIbβ3 (GPIIb/IIIa) integrin on platelets', 'GPIb (von Willebrand binding)', 'Factor VIII', 'ADAMTS13'] },
    { id: 'cj-q13', difficulty: 'hard', prompt: { en: 'LAD-1 (Leukocyte Adhesion Deficiency) is due to defective:' }, correct: 'β2 integrin (CD18)', options: ['β2 integrin (CD18)', 'Selectins', 'sialyl-Lewis-X', 'L-selectin'] },
    { id: 'cj-q14', difficulty: 'medium', prompt: { en: 'Vitamin C is required for collagen because it:' }, correct: 'Hydroxylates proline and lysine residues to stabilize the triple helix', options: ['Hydroxylates proline and lysine residues to stabilize the triple helix', 'Cleaves the propeptide', 'Cross-links collagen fibrils', 'Forms disulfide bonds'] },
    { id: 'cj-q15', difficulty: 'hard', prompt: { en: 'Marfan syndrome is caused by mutations in:' }, correct: 'FBN1 (fibrillin-1)', options: ['FBN1 (fibrillin-1)', 'COL3A1', 'COL1A1', 'FBLN5'] }
  ]
};
