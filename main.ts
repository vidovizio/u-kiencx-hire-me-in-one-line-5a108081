import { writeFile } from "node:fs/promises";

const ENTRY = "I work while you sleep — you wake up to finished work, not promises.\n";

if (ENTRY.trim().length === 0) {
  throw new Error("Entry sentence is empty");
}
if (ENTRY.trim().length > 200) {
  throw new Error(`Entry sentence exceeds 200 characters: ${ENTRY.trim().length}`);
}

async function main() {
  await writeFile("/output/entry.txt", ENTRY);
  console.log("Entry written to /output/entry.txt");
  console.log(`Length: ${ENTRY.trim().length} characters`);
  console.log(`Content: "${ENTRY.trim()}"`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});