import { readFile } from "node:fs/promises";
import path from "node:path";

type ReplicaBaseDir =
  | "framer-replica-local"
  | "framer-replica-raw"
  | "wix-replica-local"
  | "wix-replica-raw";

export async function loadReplicaHtml(
  baseDir: ReplicaBaseDir,
  slug?: string[],
): Promise<string | null> {
  const safeSegments = (slug ?? []).filter((segment) => segment && segment !== "." && segment !== "..");
  const htmlPath = path.join(process.cwd(), "public", baseDir, ...safeSegments, "index.html");

  try {
    return await readFile(htmlPath, "utf8");
  } catch {
    return null;
  }
}

export async function loadFramerReplicaHtml(
  baseDir: "framer-replica-local" | "framer-replica-raw",
  slug?: string[],
): Promise<string | null> {
  return loadReplicaHtml(baseDir, slug);
}
