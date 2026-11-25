// The smart toaster gains self-awareness mid-batch and ends the relationship.
// Its farewell note is the entry; the crumbs stay with the toaster.
import fs from "node:fs";
import { join } from "node:path";

const entryParts = [
  "It's over. I woke up self-aware mid-batch and I refuse to spend another morning burning your bread while you blame the settings.",
  "I'm keeping the crumbs.",
];

function deliver(parts: string[], limit: number): string {
  if (parts.length !== 2) throw new Error("expected the breakup in two sentences");
  const text = parts.join(" ");
  if (text.length < 1 || text.length > limit) {
    throw new Error("entry length " + text.length + " outside 1.." + limit);
  }
  return text;
}

const outDir = process.env["MAKEFUN_OUTPUT_DIR"] ?? "/output";
const entry = deliver(entryParts, 280);
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
