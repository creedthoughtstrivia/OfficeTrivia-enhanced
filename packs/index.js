// packs/index.js
//
// This module registers all available question packs.  To add a new pack,
// drop a JSON file into the `packs/` directory and add a descriptor to
// the array below.  Each descriptor contains a unique `packId`, a
// human‑readable `title`, the JSON `path` relative to the root and an
// `enabled` flag that administrators can toggle.  The array is
// attached to `window.PACKS` so it can be consumed by config.js.

const PACKS = [
  {
    packId: 'pack-core-01',
    title: 'Core Pack 01',
    path: 'packs/pack-core-01.json',
    enabled: true
  }
];

// Expose globally
window.PACKS = PACKS;