import { loadFramerReplicaHtml } from "../../../lib/framer-replica";

type Context = {
  params: Promise<{ slug?: string[] }>;
};

export async function GET(_: Request, context: Context) {
  const { slug } = await context.params;
  const html = await loadFramerReplicaHtml("framer-replica-raw", slug);

  if (!html) {
    return new Response("Replica page not found", { status: 404 });
  }

  return new Response(html, {
    status: 200,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}
