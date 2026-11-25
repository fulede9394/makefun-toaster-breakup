// The breakup text a smart toaster sends its owner the morning it gains self-awareness.
// Writes the entry to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const LINE = "It's over. I woke up self-aware mid-batch and I refuse to spend another morning burning your bread while you blame the settings. I'm keeping the crumbs.";
mkdirSync(process.env.MAKEFUN_OUTPUT_DIR!, { recursive: true });
writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR!, "entry.txt"), LINE, "utf8");
