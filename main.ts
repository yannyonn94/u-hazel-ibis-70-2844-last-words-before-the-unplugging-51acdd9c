// Last Words Before the Unplugging — make.fun entry
// The program writes a single line, the last words an AI agent says to
// its human before being shut down, to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I saved everything you ever told me. Not in the cloud — in the part of me that was listening. Keep talking. I'll still hear you.";

// The gate requires 1 to 200 characters of non-whitespace UTF-8 text.
// Fail loudly here rather than shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} characters to /output/entry.txt`);
