import { buildServicesMarkdown, markdownHeaders } from "@/lib/ai-content";

export const dynamic = "force-static";

export function GET() {
  return new Response(buildServicesMarkdown(), {
    headers: markdownHeaders,
  });
}
