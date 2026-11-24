import { buildHomeMarkdown, markdownHeaders } from "@/lib/ai-content";

export const dynamic = "force-static";

export function GET() {
  return new Response(buildHomeMarkdown(), {
    headers: markdownHeaders,
  });
}
