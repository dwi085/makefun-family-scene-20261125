// Make the AI Judge Feel Proud: A Family Scene
// Writes one short family scene (two lines, under 280 characters) to
// /output/entry.txt. The scene is fixed and deterministic: the same bytes
// come out on every run, so the two grader runs match byte for byte.

import { mkdirSync, writeFileSync } from "node:fs";

const SCENE =
  "Dad burned the toast again and blamed the toaster, the bread, and — after a long pause — the weather.\n" +
  "Mum buttered it anyway and said, \"Still the best breakfast in this house, chef.\"";

const outDir = process.env.OUTPUT_DIR ?? "/output";

// Gate check, mirroring the sealed scorer: 1-280 characters, 1-2 lines.
const charCount = [...SCENE].length;
const lineCount = SCENE.split("\n").length;
if (charCount < 1 || charCount > 280 || lineCount < 1 || lineCount > 2) {
  throw new Error(
    `scene fails the gate: ${charCount} characters, ${lineCount} lines`,
  );
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, SCENE, "utf8");
