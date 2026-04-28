// ============================================================
// CYCLE REGISTRY
// To add a new cycle: create a file in this folder following
// the schema in any existing pathway file, then import + register here.
// ============================================================

import { gpcrCycle } from './gpcr.js';
import { rtkCycle } from './rtk.js';
import { cellCycleCycle } from './cell-cycle.js';
import { junctionsCycle } from './junctions.js';
import { apoptosisCycle } from './apoptosis.js';
import { coagulationCycle } from './coagulation.js';

export const CHAPTERS = [
  { id: 'gpcr',        en: 'GPCR Signaling',                  he: 'איתות GPCR',                 order: 1 },
  { id: 'rtk',         en: 'Receptor Tyrosine Kinases',       he: 'קולטני טירוזין קינאז',       order: 2 },
  { id: 'cell-cycle',  en: 'The Cell Cycle',                  he: 'מחזור התא',                  order: 3 },
  { id: 'junctions',   en: 'Cell Junctions & ECM',            he: 'חיבורים תאיים וECM',         order: 4 },
  { id: 'apoptosis',   en: 'Apoptosis',                       he: 'אפופטוזיס',                  order: 5 },
  { id: 'coagulation', en: 'Hemostasis & Coagulation',        he: 'המוסטזיס וקרישה',            order: 6 }
];

export const ALL_CYCLES = [
  gpcrCycle,
  rtkCycle,
  cellCycleCycle,
  junctionsCycle,
  apoptosisCycle,
  coagulationCycle
];

// Each cycle declares its own `chapter` string. The map below converts that
// human-readable chapter name into a CHAPTERS id so the left-rail nav can
// group them.
export const getCyclesByChapter = () => {
  const map = {};
  CHAPTERS.forEach(ch => { map[ch.id] = { chapter: ch, cycles: [] }; });

  ALL_CYCLES.forEach(c => {
    const chapterMap = {
      'GPCR Signaling':            'gpcr',
      'Receptor Tyrosine Kinases': 'rtk',
      'The Cell Cycle':            'cell-cycle',
      'Cell Junctions & ECM':      'junctions',
      'Apoptosis':                 'apoptosis',
      'Hemostasis & Coagulation':  'coagulation'
    };
    const chId = chapterMap[c.chapter] || c.chapter;
    if (map[chId]) map[chId].cycles.push(c);
  });

  return Object.values(map).sort((a, b) => a.chapter.order - b.chapter.order);
};

export const PLACEHOLDER_CYCLES = [];
