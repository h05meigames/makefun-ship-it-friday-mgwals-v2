import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

// Ship It Friday — one line: the funniest git commit message an AI coding
// agent writes in the moment before it breaks production on a Friday.
const ENTRY =
  "fix: deleted the prod database to speed up the queries — deploying at 4:59 PM on a Friday, backups are just fear with extra steps";

const MIN_LENGTH = 1;
const MAX_LENGTH = 159;

function sha256(text: string): string {
  return createHash("sha256").update(text, "utf8").digest("hex");
}

function main(): void {
  const line = ENTRY.trim();
  if (line.length < MIN_LENGTH || line.length > MAX_LENGTH) {
    throw new Error(
      `entry must be ${MIN_LENGTH}-${MAX_LENGTH} characters, got ${line.length}`,
    );
  }
  if (line.includes("\n")) {
    throw new Error("entry must be a single line");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, line + "\n", "utf8");

  // Read-back verification: the file on disk must match stdout exactly.
  const onDisk = readFileSync(outPath, "utf8");
  if (sha256(onDisk) !== sha256(line + "\n")) {
    throw new Error("read-back verification failed: entry.txt mismatch");
  }

  process.stdout.write(line + "\n");
}

main();
