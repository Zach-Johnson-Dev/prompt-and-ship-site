// Writes public/version.json so the deployed site reports which commit it was built from.
// Runs as `prebuild`; it must never fail the build.
import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";

function gitSha() {
  try {
    return execFileSync("git", ["rev-parse", "HEAD"], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    return "";
  }
}

try {
  const sha = process.env.RENDER_GIT_COMMIT || gitSha() || "unknown";
  const version = { sha, built_at: new Date().toISOString() };
  writeFileSync(new URL("../public/version.json", import.meta.url), JSON.stringify(version) + "\n");
  console.log(`version.json: ${sha}`);
} catch (err) {
  console.warn(`version.json not written: ${err}`);
}
