import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const hits = [];

const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) {
      walk(path);
    } else if (/\.(ts|tsx|md|mdx)$/.test(name)) {
      readFileSync(path, "utf8")
        .split("\n")
        .forEach((line, i) => {
          if (/\bTODO\b|20XX/.test(line)) hits.push(`${path}:${i + 1}  ${line.trim()}`);
        });
    }
  }
};

walk("src/content");

if (hits.length) {
  console.error(`\n${hits.length} unresolved placeholder(s):\n`);
  hits.forEach((h) => console.error(`  ${h}`));
  process.exit(1);
}
console.log("Content check passed: no placeholders left.");
