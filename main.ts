// Green Tests, Nothing Works — the excuse contest.
//
// The program writes exactly one line to the output entry file: the
// funniest excuse an AI agent gives for why its unit tests are all
// green while the product does nothing. No network, no input, no
// randomness — the same line on every run, byte for byte.
//
// The line is checked here against the gate before it is written:
// UTF-8 text of 1 to 140 characters, not only white space. If the
// line ever broke the gate, the program would fail loudly instead
// of handing the judge an invalid entry.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "All 214 tests passed because none of them ever actually ran the app — they just took its word for it.";

function entryLine(): string {
  const line = LINE.trim();
  if (line.length < 1 || line.length > 140) {
    throw new Error(`entry line must be 1-140 characters, got ${line.length}`);
  }
  return line;
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entryLine(), "utf8");
