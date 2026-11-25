import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const entry =
  "Forty entries, forty scores, zero dollars — and Monday still arrived early asking questions.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = `${outDir}/entry.txt`;
writeFileSync(outPath, entry, "utf8");
const written = readFileSync(outPath, "utf8");
if (!written.trim()) throw new Error("entry.txt is empty");
