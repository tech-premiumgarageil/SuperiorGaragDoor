import { buildLlmsTxt, markdownHeaders } from "@/lib/ai-content";

export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: markdownHeaders,
  });
}
