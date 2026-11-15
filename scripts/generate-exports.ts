import { Glob } from "bun";
import { join } from "node:path";

const srcDir = join(import.meta.dirname, "../src");

// Find all TypeScript files, excluding declaration files (*.d.ts) and index.ts files.
// Internal helpers and drafts are excluded from the public API.
// See bun docs for glob: https://bun.com/docs/runtime/glob
const glob = new Glob("**/!(*.d|index).ts");

const files = await Array.fromAsync(glob.scan({ cwd: srcDir }));

const excludedDirs = ["internal/", "drafts/"];

await Bun.write(
  join(srcDir, "index.ts"),
  files
    .filter((file) => !excludedDirs.some((dir) => file.startsWith(dir)))
    .sort()
    .map((file) => file.replace(/\.ts$/, ""))
    .map((file) => `export * from "./${file}";`)
    .join("\n") + "\n",
);
