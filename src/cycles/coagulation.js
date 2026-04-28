// ============================================================
// COAGULATION FACTORS — intrinsic + extrinsic → common → fibrin clot
// Layout: 'pathway' (two converging cascades + regulators)
// ============================================================

export const coagulationCycle = {
  id: 'coagulation',
  chapter: 'Hemostasis & Coagulation',
  chapterOrder: 6,
  order: 1,
  layout: 'pathway',
  title: { en: 'Coagulation Factors', he: 'פקטורי קרישה' },
  subtitle: { en: 'Intrinsic + extrinsic → common pathway → thrombin → fibrin clot' },

  context: {
    tissue: { en: 'Plasma — circulating zymogens synthesized in the liver. Activated locally at sites of vascular injury. Platelets provide the membrane surface (phosphatidylserine flip) on which factor complexes assemble.' },
    state: { en: 'Switched off in healthy intact vessels. Triggered within seconds of endothelial injury by tissue factor exposure (extrinsic) and by contact with collagen / negatively charged surfaces (intrinsic). Continuously regulated by antithrombin, protein C/S, TFPI, and the fibrinolytic system to prevent runaway thrombosis.' },
    stateHormonal: { en: 'Estrogen ↑ procoagulant factors (II, VII, IX, X, fibrinogen) and ↓ antithrombin/protein S — basis of OCP-/pregnancy-related thrombosis risk. Vitamin K is the cofactor for γ-carboxylation of factors II, VII, IX, X and proteins C, S.' },
    turnover: { en: 'Cascade fully fires within minutes of injury. Factor VII has the shortest half-life (~6 h) — first to fall on warfarin → why INR rises before anti-X effect kicks in. Fibrin clot is later remodeled by plasmin over hours-days.' }
  },

  overview: {
    en: `Coagulation is the cascade that converts liquid blood into a solid fibrin clot at sites of vessel injury. It is built from circulating **zymogens** (inactive serine-protease precursors) that activate each other in sequence: each upstream protease cleaves the next zymogen, generating the next active protease. The cascade has **two arms** that converge on a **common pathway**. The **extrinsic arm** is the in vivo trigger: when the vessel wall is injured, **tissue factor (TF, factor III)** on subendothelial cells contacts plasma factor VII → forms the **TF–VIIa complex** → activates factors IX and X. The **intrinsic arm** historically describes contact-activation in vitro (factor XII on glass) but matters in vivo as the **amplification loop**: factor IXa + factor VIIIa (cofactor) form the **tenase complex** on activated platelet surfaces → activates large amounts of factor X. The two arms meet at **factor X**. Activated factor Xa + factor Va (cofactor) + Ca²⁺ + phospholipid surface form the **prothrombinase complex** → cleave **prothrombin (factor II)** → **thrombin (IIa)**. Thrombin is the master enzyme: (1) cleaves fibrinogen (factor I) → fibrin monomers; (2) activates factor XIII → cross-links fibrin into a stable mesh; (3) feeds back to activate cofactors V, VIII, XI — explosive amplification; (4) activates platelets via PAR-1 receptors. **Counter-regulation** keeps the cascade local: **antithrombin** (potentiated by heparin) inhibits thrombin and Xa; **protein C** (activated by thrombin–thrombomodulin on intact endothelium, with protein S as cofactor) inactivates factors Va and VIIIa; **TFPI** inhibits the TF–VIIa–Xa complex; the **fibrinolytic system** (plasminogen → plasmin via tPA) eventually dissolves the clot. The lab tests dissect this: **PT/INR** measures the extrinsic + common arm (II, V, VII, X, fibrinogen) — sensitive to warfarin. **PTT** measures the intrinsic + common arm (XII, XI, IX, VIII + common) — sensitive to heparin. Disease links are everywhere: **hemophilia A** (X-linked factor VIII deficiency), **hemophilia B** (X-linked factor IX deficiency), **von Willebrand disease** (vWF carries VIII; commonest inherited bleeding disorder), **factor V Leiden** (V resistant to protein C cleavage → most common inherited thrombophilia), **vitamin K deficiency** or **warfarin** (factors II, VII, IX, X + proteins C, S all become non-functional), **DIC** (consumption of factors and platelets, schistocytes, ↑D-dimer).`
  },

  pedagogy: [
    {
      title: 'The cascade logic — why it amplifies',
      icon: '⛓️',
      body: `Each step in coagulation is a **proteolytic cleavage**: an upstream serine protease cuts a peptide bond in the next zymogen, exposing the active site. This means each upstream protease can activate MANY downstream zymogens — classical enzymatic amplification.

**The numbers matter.** Estimates suggest one TF–VIIa complex generates ~50 Xa molecules; one prothrombinase complex (Xa + Va) generates ~1,000 thrombin molecules; one thrombin generates many fibrin monomers. Total amplification from a single triggering event: ~10⁵–10⁶ thrombin molecules in seconds. This is why a tiny vessel injury produces a clot rapidly enough to stop bleeding — but also why dysregulation cascades catastrophically (DIC).

**Two arms, one logic.** The historical "intrinsic vs extrinsic" distinction is a lab-test artefact. In vivo, the extrinsic arm (TF–VIIa) provides the **initiating spark**, but it self-limits because TFPI quickly inhibits it. The clot is then **propagated** by the intrinsic-arm tenase complex (IXa–VIIIa on platelet surface), which generates the bulk of factor Xa. The two arms are sequential phases of the SAME hemostatic event, not parallel competitors.

**Why platelet surface matters.** Several factor complexes (tenase, prothrombinase) require a **negatively charged phospholipid surface** to assemble. Resting platelets keep phosphatidylserine on the inner leaflet. Activated platelets flip PS to the outer leaflet — providing the surface. Calcium bridges the γ-carboxylated Gla domains of vitamin-K-dependent factors (II, VII, IX, X, C, S) to this PS surface. **Without Ca²⁺ or without PS, the cascade stalls** — basis of citrate anticoagulation in blood-collection tubes (chelates Ca²⁺) and Scott syndrome (defective PS scrambling, mucocutaneous bleeding).

**Thrombin is the most extraordinary enzyme** in this cascade. Beyond cleaving fibrinogen, thrombin (1) activates platelets via PAR-1 (proteinase-activated receptor 1), (2) feeds back to activate cofactors V and VIII (positive amplification), (3) activates factor XI (intrinsic-arm boost), (4) activates factor XIII (clot stabilization), AND (5) when bound to thrombomodulin on intact endothelium, switches identity to activate Protein C → an anticoagulant role. The same molecule kept on a "platelet" wins → clot. Bound to "endothelium" → anticoagulant. Spatial logic enforces hemostasis-only-where-needed.`
    },
    {
      title: 'Vitamin K, γ-carboxylation, and warfarin',
      icon: '💊',
      body: `Six coagulation proteins require vitamin K to function: **factors II, VII, IX, X** (procoagulant) and **proteins C and S** (anticoagulant). Mnemonic: **"1972"** for the procoagulant factors (II, VII, IX, X). All six are made in the liver and share a common post-translational modification: **γ-carboxylation of glutamate residues** in their N-terminal Gla domain.

**Why γ-carboxylation matters.** The carboxylated glutamates form a Ca²⁺-binding cleft that anchors these factors to the negatively charged platelet phospholipid surface. **Without carboxylation, the proteins exist in plasma but can't localize to the platelet surface** — so the tenase and prothrombinase complexes can't assemble → cascade stalls.

**The reaction:** vitamin K (reduced form, KH₂) is the cofactor for **γ-glutamyl carboxylase** in the liver ER. Each carboxylation oxidizes vitamin K to its epoxide (KO). The cell needs to recycle KO back to the active reduced form — a job done by **vitamin K epoxide reductase (VKORC1)**. This recycling step is what warfarin attacks.

**Warfarin** binds VKORC1 → blocks vitamin-K recycling → liver runs through its small KH₂ pool within ~1 day → newly synthesized factors II, VII, IX, X are non-carboxylated ("**PIVKAs**" — proteins induced by vitamin K antagonism) → cascade impaired.

**Onset and offset are slow** because warfarin doesn't affect already-circulating factors. INR rises gradually as old factors are cleared and replaced with non-functional ones:
- **Factor VII (t½ ~6 h)** falls first → INR rises within 24-48 h.
- **Factors IX, X (t½ ~24 h, 36 h)** fall over 2-3 days.
- **Factor II / prothrombin (t½ ~60 h)** falls last — true antithrombotic effect requires this.

This is why **bridging with heparin** is needed when warfarin is started: protein C also has a short half-life (~8 h), so it falls FAST, transiently creating a hypercoagulable state. Without heparin coverage, patients can develop **warfarin-induced skin necrosis** — microvascular thrombosis from this transient protein-C deficit.

**Vitamin K deficiency states:**
- **Newborns** — sterile gut, low vitamin K transfer across placenta → all infants get an IM vitamin-K shot at birth to prevent **vitamin-K-deficient bleeding (VKDB)** of the newborn.
- **Prolonged broad-spectrum antibiotics** — eliminate gut flora that produce vitamin K₂.
- **Fat malabsorption** (cholestasis, celiac, cystic fibrosis) — vitamin K is fat-soluble.
- **Liver disease** — both ↓synthesis of factors AND ↓γ-carboxylation capacity.

**Reversal of warfarin:**
- **Vitamin K** (PO or IV) — slow (hours-days for synthesis of new factors).
- **4-factor PCC (prothrombin complex concentrate, Kcentra)** — fast (minutes), contains II, VII, IX, X. First choice for life-threatening warfarin bleeding.
- **FFP** — slower, larger volume.

**Direct oral anticoagulants (DOACs)** sidestep this whole system:
- **Apixaban, rivaroxaban, edoxaban** — direct factor Xa inhibitors.
- **Dabigatran** — direct thrombin inhibitor.
Predictable PK, no INR monitoring, fewer drug/food interactions. Reversed by **andexanet alfa** (Xa inhibitors) or **idarucizumab** (dabigatran).`
    },
    {
      title: 'PT vs PTT — what each test actually measures',
      icon: '🧪',
      body: `Two lab tests dissect the cascade. They look similar but reflect different arms.

**PT (prothrombin time) → INR.** Mix patient plasma with **tissue factor (thromboplastin)** + Ca²⁺ → measure time to clot. This activates the **EXTRINSIC arm** (TF–VIIa) → common pathway (X, V, II, fibrinogen). PT is sensitive to defects in factors **VII, X, V, II, fibrinogen**. INR (International Normalized Ratio) standardizes PT across labs/reagents.

**Mnemonic for PT: "Play Tennis Outside"** — PT for the eXtrinsic / Outside trigger.

**PTT (partial thromboplastin time, also aPTT).** Mix plasma with **kaolin** (or other contact activator like silica) + phospholipid + Ca²⁺ → measure time to clot. This activates the **INTRINSIC arm** via factor XII contact-activation → common pathway. PTT is sensitive to defects in factors **XII, XI, IX, VIII, X, V, II, fibrinogen** (basically everything except VII).

**Mnemonic for PTT: "Play Table Tennis Inside"** — PTT for the Intrinsic / Inside-only setup.

**Pattern recognition by PT/PTT result:**

| PT | PTT | Most likely causes |
|---|---|---|
| ↑ | normal | Factor VII deficiency, EARLY warfarin, EARLY vitamin K deficiency, mild liver disease |
| normal | ↑ | Factor VIII (hemophilia A), IX (hemophilia B), or XI deficiency; vWD; heparin; lupus anticoagulant |
| ↑ | ↑ | Common pathway defect (X, V, II, fibrinogen); severe vit K deficiency; warfarin (later); severe liver disease; DIC |
| normal | normal | Factor XIII deficiency (clot forms but is not stable — bleeding hours after injury), antiplatelet/vWD with normal VIII levels, mild factor deficiencies |

**Heparin** prolongs **PTT** (potentiates antithrombin → inhibits thrombin and Xa).
**Warfarin** prolongs **PT** first (factor VII shortest t½), then PTT later as IX, X, II also fall.

**Mixing studies** distinguish factor deficiency from inhibitor:
- Mix 1:1 with normal plasma. If PT/PTT corrects → factor deficiency. If does NOT correct → inhibitor present (e.g., factor VIII inhibitor antibodies in acquired hemophilia, or **lupus anticoagulant** in antiphospholipid syndrome).

**Why lupus anticoagulant prolongs PTT but causes THROMBOSIS** (not bleeding) in vivo — it's an in-vitro artefact of antiphospholipid antibodies binding the test phospholipid. In vivo, antiphospholipid antibodies promote clotting via complex platelet/endothelial mechanisms.

**Bleeding time / PFA-100** test platelet plug formation (primary hemostasis), separate from the cascade. Prolonged in vWD, thrombocytopenia, qualitative platelet disorders (Glanzmann, Bernard-Soulier), aspirin/clopidogrel.`
    },
    {
      title: 'Bleeding & clotting disorders by mechanism',
      icon: '🩸',
      body: `**X-linked recessive bleeding disorders (sons of carrier mothers):**
- **Hemophilia A** — factor **VIII** deficiency. Most common severe inherited bleeding disorder. ↑PTT, normal PT and bleeding time. Hemarthroses, deep muscle bleeds, prolonged bleeding after surgery/trauma. Rx: recombinant factor VIII concentrate, **emicizumab** (bispecific antibody mimicking VIII function), gene therapy emerging.
- **Hemophilia B (Christmas disease)** — factor **IX** deficiency. Clinically similar to hemophilia A. ↑PTT, normal PT. Rx: recombinant factor IX, **etranacogene dezaparvovec** (gene therapy approved 2022).

**Autosomal:**
- **von Willebrand disease (vWD)** — most COMMON inherited bleeding disorder (1% population). vWF mediates platelet adhesion to subendothelium AND carries factor VIII. Type 1 (partial deficiency, AD) most common. ↑Bleeding time, ↑PTT (due to ↓VIII), normal PT, **abnormal ristocetin cofactor assay**. Mucocutaneous bleeding (epistaxis, menorrhagia, easy bruising) — distinct from hemophilia's deep bleeds. Rx: **DDAVP (desmopressin)** releases stored vWF from endothelium (works in type 1), or vWF/VIII concentrate.
- **Factor XIII deficiency** — clot forms but isn't cross-linked → delayed bleeding hours-days after injury, poor wound healing, ↑intracranial hemorrhage risk in newborns. **Normal PT and PTT** — all standard tests miss it. Diagnosed by clot solubility in 5M urea.

**Inherited thrombophilias (clotting too much):**
- **Factor V Leiden** — point mutation (Arg506Gln) makes factor Va resistant to cleavage by Activated Protein C. **Most common inherited thrombophilia** (~5% Caucasians heterozygous). ↑risk of DVT/PE, especially in setting of OCP use, pregnancy, surgery.
- **Prothrombin G20210A** — promoter mutation → ↑prothrombin levels → ↑thrombin generation. Second most common after factor V Leiden.
- **Antithrombin deficiency** — heterozygous loss → ↑thrombosis, often heparin-resistant (heparin works through antithrombin).
- **Protein C / S deficiency** — loss of the anticoagulant arm → recurrent thrombosis. Homozygous newborn protein C deficiency = **purpura fulminans** (fatal microvascular thrombosis).

**Acquired:**
- **DIC (disseminated intravascular coagulation)** — sepsis, malignancy (especially APL), obstetric (amniotic embolism, abruption), trauma. Massive activation → consumption of factors and platelets → bleeding AND thrombosis simultaneously. Lab: ↑PT, ↑PTT, ↓platelets, ↓fibrinogen, ↑D-dimer, schistocytes on smear.
- **Antiphospholipid syndrome (APS)** — anti-cardiolipin, anti-β2GPI, lupus anticoagulant antibodies. Prolongs PTT IN VITRO but causes THROMBOSIS in vivo. Recurrent fetal loss, DVT/PE. Treat with lifelong anticoagulation (warfarin, NOT DOACs for triple-positive APS — failed in trials).
- **HIT (heparin-induced thrombocytopenia)** — IgG against heparin–PF4 complexes → activates platelets → consumption + thrombosis. Drop in platelets 5-10 days after starting heparin + new thrombosis. STOP heparin, START a non-heparin anticoagulant (argatroban, fondaparinux, bivalirudin).

**Bleeding pattern recognition:**
- **Mucocutaneous bleeding** (gums, nose, GI, menorrhagia, easy bruising, petechiae) → think PLATELET / vWF problem.
- **Deep tissue / joint / muscle bleeds, delayed bleeding after surgery** → think CASCADE problem (hemophilia, factor deficiency).
- **Both** → vWD severe types, DIC, severe liver disease.`
    }
  ],

  mnemonic: {
    en: { phrase: '"1972" — vit-K-dependent factors II, VII, IX, X · Hemophilia A = VIII, B = IX · Factor V Leiden = APC-resistant', breakdown: 'PT measures eXtrinsic (Play Tennis Outside). PTT measures Intrinsic (Play Table Tennis Inside). Heparin → ↑PTT. Warfarin → ↑PT first.' }
  },

  compartments: {
    cyto: { en: 'Plasma + platelet surface', he: 'פלזמה + משטח טסיות', color: '#fee2e2', accent: '#dc2626' }
  },

  pathway: {
    viewBox: [0, 0, 1200, 1080],
    nodes: [
      // ===== Tier 1 — single trigger =====
      { id: 'injury', label: 'Vessel Injury', sublabel: 'subendothelial exposure', x: 600, y: 60, type: 'ligand',
        memory: { glyph: '🩸', char: 'Vessel breach' },
        hint: 'Endothelial damage exposes subendothelial collagen and tissue factor (TF) on stromal cells. Two simultaneous triggers fire: (1) collagen + vWF → platelet adhesion (primary hemostasis); (2) TF + factor VII → extrinsic cascade (secondary hemostasis). Both arms convert to a stable fibrin-reinforced platelet plug within minutes.' },

      // ===== Tier 2 — extrinsic and intrinsic starting points =====
      { id: 'tf', label: 'Tissue Factor (III)', sublabel: 'extrinsic trigger', x: 280, y: 175, type: 'receptor',
        memory: { glyph: '🚨', char: 'Crash alarm' },
        hint: 'Membrane glycoprotein on subendothelial fibroblasts, smooth muscle cells, monocytes (when activated), and tumor cells. Constitutively expressed but normally hidden from blood. Vessel injury exposes it → instantly recruits circulating factor VII → forms TF–VIIa complex → ignites the extrinsic arm.',
        clinical: { disorder: 'Trousseau syndrome (cancer-associated thrombosis)', findings: { en: 'Adenocarcinomas (especially pancreas, lung, colon, ovary) express TF on tumor cells → hypercoagulable state → migratory superficial thrombophlebitis, DVT/PE, NBTE.' } } },
      { id: 'xii', label: 'Factor XII', sublabel: 'contact activation', x: 920, y: 175, type: 'enzyme',
        memory: { glyph: '🪞', char: 'Glass-touch sensor' },
        hint: 'Hageman factor. Activated by contact with negatively charged surfaces (collagen, glass, kaolin). In vivo role is debated — XII deficiency causes ↑PTT but NO bleeding tendency. Important in vitro (PTT test) and in some pathological clots (catheter thrombosis).' },

      // ===== Tier 3 — first activated proteases =====
      { id: 'viia', label: 'VIIa', sublabel: 'TF–VIIa complex', x: 280, y: 290, type: 'enzyme',
        memory: { glyph: '🔥', char: 'Spark plug' },
        hint: 'Vitamin-K-dependent serine protease (one of the "1972"). Half-life only ~6 hours in plasma — the SHORTEST of any factor → first to fall on warfarin → why PT/INR rises early.',
        clinical: { disorder: 'Factor VII deficiency', findings: { en: 'Rare AR. ↑PT with normal PTT (only test that uses VII). Variable bleeding from epistaxis to severe.' } } },
      { id: 'xia', label: 'XIa', sublabel: '+ contact arm', x: 920, y: 290, type: 'enzyme',
        memory: { glyph: '⚙️', char: 'Inner gear' },
        hint: 'Factor XI is also activated by thrombin (intrinsic-arm amplification feedback). XI deficiency (Hemophilia C) is AR, mostly Ashkenazi Jews, mild bleeding — distinct from X-linked hemophilia A/B.',
        clinical: { disorder: 'Hemophilia C (factor XI deficiency)', findings: { en: 'AR. Common in Ashkenazi Jews. Bleeding usually mild and trauma-related, less spontaneous than A or B. ↑PTT.' } } },

      // ===== Tier 4 — IXa (intrinsic) and Xa-from-extrinsic =====
      { id: 'ixa', label: 'IXa', sublabel: 'tenase complex', x: 800, y: 405, type: 'enzyme',
        memory: { glyph: '🔧', char: 'IXa wrench' },
        hint: 'Vitamin-K-dependent serine protease. With factor VIIIa as cofactor, on activated platelet surface, with Ca²⁺, forms the **tenase complex** that activates factor X. This is the major in-vivo Xa generator (the TF–VIIa hit is brief — TFPI quickly shuts it down).',
        clinical: { disorder: 'Hemophilia B (Christmas disease)', findings: { en: 'X-linked recessive. Factor IX deficiency. Clinically similar to hemophilia A — hemarthroses, deep muscle bleeds, prolonged surgical bleeding. ↑PTT, normal PT.' }, treatment: { en: 'Recombinant factor IX. Etranacogene dezaparvovec (gene therapy) approved 2022.' } } },

      // ===== Tier 5 — VIIIa cofactor =====
      { id: 'viiia', label: 'VIIIa', sublabel: 'tenase cofactor · vWF carrier', x: 1040, y: 405, type: 'modifier',
        memory: { glyph: '🤝', char: 'IXa\'s sidekick' },
        hint: 'Cofactor (NOT a protease) that dramatically accelerates IXa-mediated activation of X. Circulates bound to vWF (von Willebrand factor) — vWF protects VIII from degradation. Free VIII (without vWF) is rapidly cleared.',
        clinical: { disorder: 'Hemophilia A & von Willebrand disease', findings: { en: 'Hemophilia A: X-linked, factor VIII deficiency, deep bleeds, hemarthroses, ↑PTT. von Willebrand: AD (mostly), vWF deficiency → low VIII (not protected) + impaired platelet adhesion → mucocutaneous bleeding, ↑bleeding time, ↑PTT.' }, treatment: { en: 'Hemophilia A: recombinant VIII, emicizumab (bispecific Ab mimicking VIIIa). vWD: DDAVP (releases stored vWF — type 1), or vWF/VIII concentrate.' } } },

      // ===== Tier 6 — Common pathway: Xa =====
      { id: 'xa', label: 'Xa', sublabel: 'common pathway start', x: 600, y: 540, type: 'enzyme',
        memory: { glyph: '🎯', char: 'Convergence point' },
        hint: 'Vitamin-K-dependent serine protease. The **convergence point** of intrinsic and extrinsic arms. With factor Va as cofactor on activated platelet surface, forms the **prothrombinase complex** that converts prothrombin to thrombin.',
        drugs: ['rivaroxaban, apixaban, edoxaban (direct Xa inhibitors)', 'fondaparinux (synthetic pentasaccharide → potentiates antithrombin against Xa)'] },

      // ===== Tier 7 — Va cofactor =====
      { id: 'va', label: 'Va', sublabel: 'prothrombinase cofactor', x: 380, y: 540, type: 'modifier',
        memory: { glyph: '🤝', char: 'Xa\'s sidekick' },
        hint: 'Cofactor (NOT a protease) that accelerates Xa-mediated thrombin generation. Activated by thrombin (positive feedback) and by Xa itself.',
        clinical: { disorder: 'Factor V Leiden', findings: { en: 'Most common inherited thrombophilia (~5% Caucasians heterozygous). Point mutation Arg506Gln makes Va RESISTANT to cleavage by Activated Protein C → loss of the protein-C brake → hypercoagulable. Risk multiplied by OCP, pregnancy, surgery, smoking.' } } },

      // ===== Tier 8 — Thrombin =====
      { id: 'iia', label: 'Thrombin (IIa)', sublabel: 'master enzyme', x: 600, y: 670, type: 'enzyme',
        memory: { glyph: '⚡', char: 'Cascade conductor' },
        hint: 'Vitamin-K-dependent serine protease. Generated from prothrombin (II) by prothrombinase. Performs FIVE distinct jobs: (1) cleaves fibrinogen → fibrin monomers, (2) activates factor XIII to crosslink fibrin, (3) feeds back to activate cofactors V, VIII (positive amplification), (4) activates factor XI (intrinsic-arm amplification), (5) activates platelets via PAR-1. When bound to thrombomodulin on intact endothelium, switches identity to activate Protein C — anticoagulant role.',
        drugs: ['dabigatran (direct thrombin inhibitor, oral)', 'argatroban, bivalirudin (parenteral, used in HIT)', 'heparin/LMWH (potentiate antithrombin → inhibits thrombin)'] },

      // ===== Tier 9 — Fibrinogen → Fibrin =====
      { id: 'fbg', label: 'Fibrinogen (I)', sublabel: 'soluble plasma protein', x: 400, y: 800, type: 'ligand',
        memory: { glyph: '🧶', char: 'Loose yarn' },
        hint: 'Large soluble plasma glycoprotein (340 kDa, ~3 g/L). Made of two sets of three chains (Aα, Bβ, γ)₂. Thrombin cleaves the A and B fibrinopeptides → exposes binding sites → fibrin monomers self-polymerize into protofibrils.',
        clinical: { disorder: 'Hypofibrinogenemia / DIC', findings: { en: 'Acute consumption (DIC, massive trauma, obstetric catastrophe) → ↓fibrinogen + ↑D-dimer. Severe inherited deficiency = afibrinogenemia (rare, AR).' } } },
      { id: 'fib', label: 'Fibrin', sublabel: 'monomers polymerize', x: 800, y: 800, type: 'messenger',
        memory: { glyph: '🕸️', char: 'Mesh-in-the-making' },
        hint: 'Fibrin monomers self-assemble into noncovalent protofibrils → lateral aggregation → soft fibrin clot. Still soluble in urea! Needs factor XIIIa to cross-link covalently for full mechanical strength.' },

      // ===== Tier 10 — XIIIa =====
      { id: 'xiiia', label: 'XIIIa', sublabel: 'transglutaminase', x: 800, y: 920, type: 'enzyme',
        memory: { glyph: '📎', char: 'Staple gun' },
        hint: 'Activated by thrombin. A transglutaminase that forms covalent ε-(γ-glutamyl)lysine bonds between adjacent fibrin monomers → cross-linked, mechanically stable, urea-insoluble clot. THE ONLY factor whose deficiency leaves PT and PTT NORMAL.',
        clinical: { disorder: 'Factor XIII deficiency', findings: { en: 'AR. Delayed bleeding hours-days after injury (clot forms but isn\'t cross-linked → falls apart). Normal PT and PTT — diagnosed by clot solubility in 5M urea. ↑intracranial hemorrhage risk in newborns; classic delayed umbilical-cord bleeding.' } } },

      // ===== Tier 11 — Stable clot output =====
      { id: 'clot', label: 'Cross-linked Fibrin Clot', sublabel: 'hemostasis · later remodeled by plasmin', x: 600, y: 1020, type: 'output',
        memory: { glyph: '🧱', char: 'Bricked seal' },
        hint: 'Final mechanical seal. Hours-to-days later, the clot is remodeled by **plasmin** (activated from plasminogen by tPA released from endothelium). Plasmin cleaves cross-linked fibrin → D-dimer fragments — basis of the D-dimer test (rises in DVT/PE/DIC). tPA is the bedrock of acute stroke and STEMI thrombolysis.' },

      // ===== Regulators (right column) =====
      { id: 'at', label: 'Antithrombin', sublabel: 'serpin · heparin-potentiated', x: 1080, y: 670, type: 'modifier',
        memory: { glyph: '🛑', char: 'Cascade brake' },
        hint: 'Plasma serpin that inhibits thrombin (IIa) and factor Xa (and to lesser extent IXa, XIa, XIIa). Heparin binds antithrombin and accelerates inhibition ~1000-fold — basis of heparin\'s anticoagulant effect. LMWH (enoxaparin) preferentially boosts anti-Xa activity.',
        clinical: { disorder: 'Antithrombin deficiency', findings: { en: 'AD inherited or acquired (nephrotic syndrome — ATIII is small enough to be lost in urine). Recurrent thrombosis. Heparin-resistant — needs ATIII concentrate or argatroban.' } },
        drugs: ['heparin', 'LMWH (enoxaparin, dalteparin)', 'fondaparinux (synthetic pentasaccharide)'] },
      { id: 'pc', label: 'Protein C / S', sublabel: 'inactivates Va, VIIIa', x: 120, y: 670, type: 'modifier',
        memory: { glyph: '🛑', char: 'Localizing brake' },
        hint: 'Vitamin-K-dependent serine protease. Activated by thrombin–thrombomodulin complex on INTACT endothelium (not on injured vessel — spatial regulation). Activated Protein C (APC), with Protein S as cofactor, cleaves and inactivates factors Va and VIIIa → shuts down further thrombin generation.',
        clinical: { disorder: 'Protein C deficiency · purpura fulminans · warfarin-induced skin necrosis', findings: { en: 'Heterozygous: recurrent thrombosis. Homozygous newborn: purpura fulminans (life-threatening microvascular thrombosis). Warfarin-induced skin necrosis: protein C falls fast (t½ ~8 h) on warfarin start → transient hypercoag state → microvascular thrombosis.' }, treatment: { en: 'Bridge with heparin when starting warfarin. Activated protein C concentrate for purpura fulminans.' } } },
      { id: 'tfpi', label: 'TFPI', sublabel: 'inhibits TF–VIIa–Xa', x: 120, y: 290, type: 'modifier',
        memory: { glyph: '🚧', char: 'Self-limiting brake' },
        hint: 'Tissue Factor Pathway Inhibitor. Made by endothelium. Binds the TF–VIIa–Xa complex and shuts it down. Why the extrinsic arm is SELF-LIMITING — the spark fires briefly, then propagation must come from the intrinsic-arm tenase complex (IXa–VIIIa).' },
      { id: 'plasmin', label: 'Plasmin', sublabel: 'fibrinolysis', x: 1080, y: 920, type: 'enzyme',
        memory: { glyph: '✂️', char: 'Clot dissolver' },
        hint: 'Activated from plasminogen by tPA (from endothelium) and by urokinase. Cleaves cross-linked fibrin → fibrin degradation products including D-dimer. Basis of acute stroke and STEMI thrombolysis (alteplase = recombinant tPA).',
        drugs: ['alteplase, tenecteplase (recombinant tPA)', 'streptokinase', 'tranexamic acid (BLOCKS plasmin → antifibrinolytic, used to stop bleeding)'] }
    ],
    edges: [
      // Trigger
      { from: 'injury', to: 'tf', label: 'exposes', style: 'activate' },
      { from: 'injury', to: 'xii', label: 'collagen contact', style: 'activate' },
      // Extrinsic arm
      { from: 'tf', to: 'viia', label: 'recruits VII', style: 'activate' },
      { from: 'viia', to: 'ixa', label: 'activates IX', style: 'activate' },
      { from: 'viia', to: 'xa',  label: 'activates X (brief)', style: 'activate' },
      // Intrinsic arm
      { from: 'xii', to: 'xia', label: 'XII → XIIa → XI', style: 'activate' },
      { from: 'xia', to: 'ixa', label: 'activates IX', style: 'activate' },
      // Tenase complex
      { from: 'viiia', to: 'ixa', label: 'cofactor', style: 'activate' },
      { from: 'ixa', to: 'xa', label: 'tenase generates Xa', style: 'activate' },
      // Common pathway
      { from: 'va', to: 'xa', label: 'cofactor', style: 'activate' },
      { from: 'xa', to: 'iia', label: 'prothrombinase', style: 'activate' },
      // Thrombin amplification
      { from: 'iia', to: 'va',    label: 'feedback +',  style: 'activate' },
      { from: 'iia', to: 'viiia', label: 'feedback +',  style: 'activate' },
      { from: 'iia', to: 'xia',   label: 'feedback +',  style: 'activate' },
      // Fibrin formation
      { from: 'fbg', to: 'fib', label: 'thrombin cleaves', style: 'activate' },
      { from: 'iia', to: 'fib', label: 'cleaves fibrinogen', style: 'activate' },
      { from: 'iia', to: 'xiiia', label: 'activates XIII', style: 'activate' },
      { from: 'xiiia', to: 'clot', label: 'cross-links', style: 'activate' },
      { from: 'fib', to: 'clot', label: 'protofibrils', style: 'activate' },
      // Regulators (inhibit)
      { from: 'tfpi', to: 'viia',  label: 'shuts off TF–VIIa', style: 'inhibit' },
      { from: 'at',   to: 'iia',   label: 'inhibits thrombin', style: 'inhibit' },
      { from: 'at',   to: 'xa',    label: 'inhibits Xa',       style: 'inhibit' },
      { from: 'pc',   to: 'va',    label: 'cleaves Va',        style: 'inhibit' },
      { from: 'pc',   to: 'viiia', label: 'cleaves VIIIa',     style: 'inhibit' },
      { from: 'plasmin', to: 'clot', label: 'fibrinolysis',    style: 'inhibit' }
    ]
  },

  integrations: [
    {
      name: 'Platelet plug + cascade — primary + secondary hemostasis',
      toCycle: 'Hemostasis',
      path: { en: 'Vessel injury → vWF binds exposed collagen → platelets (GPIb) bind vWF → platelet activation → integrin αIIbβ3 activation → fibrinogen-bridged platelet aggregation = primary plug. Simultaneously, TF–VIIa fires the extrinsic arm. Activated platelets flip phosphatidylserine outward → provide surface for tenase + prothrombinase → secondary hemostasis (cascade) → fibrin reinforces the plug.' },
      note: { en: 'Primary and secondary hemostasis are not sequential but interleaved — both fire in parallel and reinforce each other.' }
    },
    {
      name: 'Thrombin → PAR-1 → platelet activation (GPCR signaling)',
      toCycle: 'GPCR Signaling',
      path: { en: 'Thrombin doesn\'t bind a classic ligand-binding site on PAR-1. It CLEAVES the receptor\'s N-terminus, exposing a tethered ligand that folds back and activates the same receptor. Gαq → PLC → IP₃/DAG → Ca²⁺ + PKC → granule release + αIIbβ3 activation. Drug: vorapaxar (PAR-1 antagonist).' },
      note: { en: 'A protease-activated receptor — proteolysis IS the signal. Same molecular logic recurs in protease-activated immune signaling (e.g., trypsin/PAR-2 in pancreatitis pain).' }
    },
    {
      name: 'Vitamin K → γ-carboxylation → Ca²⁺ binding',
      toCycle: 'Cell Junctions & ECM',
      path: { en: 'Vit-K-dependent factors (II, VII, IX, X, C, S) get γ-carboxylated glutamate residues in the ER. The Gla domain binds Ca²⁺, which bridges these factors to phosphatidylserine on activated platelet membranes. SAME divalent-cation logic that lets integrins bind ECM in focal adhesions.' },
      note: { en: 'Calcium acts as a universal "molecular zip-tie" between negatively charged surfaces in coagulation, junctions, and many enzyme reactions.' }
    },
    {
      name: 'DIC — coagulation meets sepsis / cancer / obstetrics',
      toCycle: 'Systemic disease',
      path: { en: 'Sepsis (LPS → endothelial TF expression), trauma (massive TF release), APL (procoagulant tumor cells), placental abruption (TF-rich amniotic fluid) → systemic activation of coagulation → simultaneous consumption of factors AND platelets → bleeding AND microvascular thrombosis. Lab: ↑PT, ↑PTT, ↓platelets, ↓fibrinogen, ↑↑D-dimer, schistocytes.' },
      note: { en: 'Treat the underlying cause; transfuse FFP, platelets, cryo as needed; heparin only in select cases (chronic compensated DIC).' }
    },
    {
      name: 'Acute MI / stroke — therapeutic fibrinolysis',
      toCycle: 'Cardiovascular',
      path: { en: 'Atherosclerotic plaque rupture → exposes TF and collagen → arterial thrombus → ischemia. Acute treatment: tPA (alteplase) within therapeutic window (4.5 h for stroke, ideally <12 h for MI without PCI access) → activates plasminogen → plasmin dissolves fibrin → reperfusion. Tradeoff: bleeding (especially intracranial). Tranexamic acid is the OPPOSITE — antifibrinolytic, used in trauma (CRASH-2) and OB (WOMAN trial).' },
      note: { en: 'Clinical contrast — tPA dissolves fibrin (lyses clot); tranexamic acid blocks plasmin (saves clot).' }
    },
    {
      name: 'OCPs / pregnancy / Factor V Leiden — multiplicative thrombosis risk',
      toCycle: 'Endocrinology',
      path: { en: 'Estrogen ↑procoagulant factors (II, VII, IX, X, fibrinogen) and ↓antithrombin/protein S. Pregnancy adds venous stasis. Factor V Leiden adds protein-C resistance. EACH factor multiplies risk of DVT/PE — combined oral contraceptive + Leiden heterozygote ≈ ~30× baseline VTE risk.' },
      note: { en: 'Personal/family history of unprovoked VTE is a relative contraindication to combined OCPs.' }
    }
  ],

  bigPicture: {
    en: [
      { k: 'Two arms, one cascade', v: 'EXTRINSIC: TF + VIIa (in vivo trigger, brief). INTRINSIC: XII → XI → IX + VIII (amplification). Converge at factor X (common pathway).' },
      { k: 'Common pathway', v: 'Xa + Va → prothrombinase → thrombin (IIa) → cleaves fibrinogen → fibrin → XIIIa cross-links → stable clot.' },
      { k: 'Vit-K-dependent factors', v: '"1972" — II, VII, IX, X (procoagulant) + Protein C, S (anticoagulant). γ-carboxylated for Ca²⁺/PS-membrane binding.' },
      { k: 'PT (prothrombin time)', v: 'Measures EXTRINSIC + COMMON (factors VII, X, V, II, fibrinogen). Sensitive to warfarin. Mnemonic: "Play Tennis Outside".' },
      { k: 'PTT (partial thromboplastin time)', v: 'Measures INTRINSIC + COMMON (XII, XI, IX, VIII + common). Sensitive to heparin. Mnemonic: "Play Table Tennis Inside".' },
      { k: 'Hemophilia A', v: 'X-linked recessive. Factor VIII deficiency. ↑PTT, normal PT. Hemarthroses, deep bleeds. Rx: recombinant VIII, emicizumab.' },
      { k: 'Hemophilia B', v: 'X-linked recessive. Factor IX deficiency (Christmas disease). Same clinical picture as A. ↑PTT, normal PT. Gene therapy approved 2022.' },
      { k: 'von Willebrand disease', v: 'Most COMMON inherited bleeding disorder (~1%). vWF carries VIII + mediates platelet adhesion. ↑bleeding time, ↑PTT (low VIII), abnormal ristocetin. Rx: DDAVP, vWF/VIII concentrate.' },
      { k: 'Factor XIII deficiency', v: 'Clot forms but not cross-linked → DELAYED bleeding hours-days after injury. NORMAL PT and PTT. Diagnosed by clot solubility in 5M urea.' },
      { k: 'Factor V Leiden', v: 'Most common inherited THROMBOPHILIA. R506Q makes Va resistant to APC cleavage → loss of protein-C brake.' },
      { k: 'Antithrombin', v: 'Serpin that inhibits thrombin and Xa. Heparin-potentiated ~1000×. LMWH = preferential anti-Xa. Deficiency = heparin-resistant thrombosis.' },
      { k: 'Protein C / S', v: 'Activated by thrombin–thrombomodulin on intact endothelium. Cleaves Va and VIIIa. Deficiency → recurrent thrombosis, purpura fulminans (homozygous newborn).' },
      { k: 'Warfarin', v: 'Inhibits VKORC1 → blocks vit-K recycling → factors II, VII, IX, X, C, S non-functional. VII falls first (t½ 6 h) → INR rises early. Bridge with heparin (protein C also fast).' },
      { k: 'Heparin / LMWH', v: 'Potentiates antithrombin. Unfractionated → ↑PTT (anti-IIa + anti-Xa). LMWH (enoxaparin) → mainly anti-Xa, monitored by anti-Xa assay if needed.' },
      { k: 'DOACs', v: 'Direct Xa inhibitors: rivaroxaban, apixaban, edoxaban (reversed by andexanet alfa). Direct thrombin: dabigatran (reversed by idarucizumab).' },
      { k: 'tPA / alteplase', v: 'Recombinant tissue plasminogen activator. Activates plasmin → fibrinolysis. Acute stroke (≤4.5 h), STEMI without PCI access.' },
      { k: 'Tranexamic acid', v: 'BLOCKS plasmin (lysine analog). ANTIfibrinolytic — used to STOP bleeding (trauma, postpartum hemorrhage, menorrhagia, surgery).' },
      { k: 'DIC', v: 'Sepsis, malignancy (especially APL), obstetric, trauma. ↑PT, ↑PTT, ↓platelets, ↓fibrinogen, ↑↑D-dimer, schistocytes. Treat underlying cause + replace consumed components.' },
      { k: 'HIT', v: 'IgG vs heparin-PF4 complex → activates platelets → consumption + thrombosis. Plt drop 5-10 d after heparin start. STOP heparin, start argatroban/fondaparinux/bivalirudin.' },
      { k: 'D-dimer', v: 'Plasmin-cleaved cross-linked fibrin fragment. Sensitive (NPV high) but not specific. Useful to RULE OUT VTE in low-pretest-probability patients.' }
    ]
  },

  questions: [
    { id: 'co-q1', difficulty: 'easy', prompt: { en: 'The vitamin-K-dependent coagulation factors are:' }, correct: 'II, VII, IX, X (and proteins C, S)', options: ['II, VII, IX, X (and proteins C, S)', 'V, VIII, XI, XII', 'VIII, IX, XI, XIII', 'I, II, V, VIII'] },
    { id: 'co-q2', difficulty: 'easy', prompt: { en: 'Hemophilia A is due to deficiency of:' }, correct: 'Factor VIII', options: ['Factor VIII', 'Factor IX', 'Factor XI', 'von Willebrand factor'] },
    { id: 'co-q3', difficulty: 'easy', prompt: { en: 'Hemophilia B is due to deficiency of:' }, correct: 'Factor IX', options: ['Factor IX', 'Factor VIII', 'Factor XI', 'Factor XIII'] },
    { id: 'co-q4', difficulty: 'medium', prompt: { en: 'PT/INR primarily measures the:' }, correct: 'Extrinsic + common pathway (VII, X, V, II, fibrinogen)', options: ['Extrinsic + common pathway (VII, X, V, II, fibrinogen)', 'Intrinsic + common pathway (XII, XI, IX, VIII + common)', 'Platelet function only', 'Fibrinolytic pathway only'] },
    { id: 'co-q5', difficulty: 'medium', prompt: { en: 'PTT primarily measures the:' }, correct: 'Intrinsic + common pathway (XII, XI, IX, VIII + common)', options: ['Intrinsic + common pathway (XII, XI, IX, VIII + common)', 'Extrinsic only', 'Platelet aggregation', 'Fibrinolysis'] },
    { id: 'co-q6', difficulty: 'medium', prompt: { en: 'Warfarin inhibits:' }, correct: 'VKORC1 (vitamin K epoxide reductase)', options: ['VKORC1 (vitamin K epoxide reductase)', 'Antithrombin', 'Factor Xa directly', 'Thrombin directly'] },
    { id: 'co-q7', difficulty: 'medium', prompt: { en: 'Heparin works by:' }, correct: 'Potentiating antithrombin', options: ['Potentiating antithrombin', 'Inhibiting VKORC1', 'Directly inhibiting Xa', 'Activating plasminogen'] },
    { id: 'co-q8', difficulty: 'hard', prompt: { en: 'On warfarin initiation, INR rises before full antithrombotic effect because:' }, correct: 'Factor VII (shortest t½ ~6 h) falls first, but factor II takes ~3 days to fall', options: ['Factor VII (shortest t½ ~6 h) falls first, but factor II takes ~3 days to fall', 'Warfarin first activates plasmin', 'Vitamin K stores are increased acutely', 'Antithrombin levels rise transiently'] },
    { id: 'co-q9', difficulty: 'medium', prompt: { en: 'Most common inherited bleeding disorder is:' }, correct: 'von Willebrand disease', options: ['von Willebrand disease', 'Hemophilia A', 'Hemophilia B', 'Factor XIII deficiency'] },
    { id: 'co-q10', difficulty: 'hard', prompt: { en: 'Factor V Leiden causes thrombosis because:' }, correct: 'Mutated factor V is resistant to cleavage by Activated Protein C', options: ['Mutated factor V is resistant to cleavage by Activated Protein C', 'It increases tissue factor expression', 'It directly activates factor X', 'It blocks antithrombin'] },
    { id: 'co-q11', difficulty: 'hard', prompt: { en: 'Factor XIII deficiency uniquely shows:' }, correct: 'Normal PT and PTT, with delayed bleeding (clot forms but isn\'t cross-linked)', options: ['Normal PT and PTT, with delayed bleeding (clot forms but isn\'t cross-linked)', 'Markedly prolonged PT only', 'Prolonged bleeding time only', 'Markedly low fibrinogen'] },
    { id: 'co-q12', difficulty: 'medium', prompt: { en: 'Thrombin (IIa) does ALL of the following EXCEPT:' }, correct: 'Activates antithrombin', options: ['Activates antithrombin', 'Cleaves fibrinogen to fibrin', 'Activates factor XIII', 'Activates factor V (positive feedback)'] },
    { id: 'co-q13', difficulty: 'hard', prompt: { en: 'Warfarin-induced skin necrosis happens because:' }, correct: 'Protein C falls before factor II → transient hypercoagulable state', options: ['Protein C falls before factor II → transient hypercoagulable state', 'Warfarin directly damages skin vessels', 'Excess vitamin K causes thrombosis', 'Warfarin activates platelets'] },
    { id: 'co-q14', difficulty: 'hard', prompt: { en: 'In disseminated intravascular coagulation (DIC), you expect:' }, correct: '↑PT, ↑PTT, ↓platelets, ↓fibrinogen, ↑D-dimer', options: ['↑PT, ↑PTT, ↓platelets, ↓fibrinogen, ↑D-dimer', 'Normal PT and PTT, ↑D-dimer', '↑PT and PTT, ↑fibrinogen', '↓D-dimer with normal coagulation tests'] },
    { id: 'co-q15', difficulty: 'medium', prompt: { en: 'Tissue plasminogen activator (alteplase, tPA) treats acute stroke by:' }, correct: 'Activating plasmin to dissolve cross-linked fibrin', options: ['Activating plasmin to dissolve cross-linked fibrin', 'Inhibiting factor Xa', 'Inhibiting thrombin', 'Activating antithrombin'] },
    { id: 'co-q16', difficulty: 'hard', prompt: { en: 'In heparin-induced thrombocytopenia (HIT), the next step is:' }, correct: 'Stop heparin and start a non-heparin anticoagulant (argatroban, fondaparinux)', options: ['Stop heparin and start a non-heparin anticoagulant (argatroban, fondaparinux)', 'Continue heparin and add aspirin', 'Switch to LMWH', 'Transfuse platelets immediately'] }
  ]
};
