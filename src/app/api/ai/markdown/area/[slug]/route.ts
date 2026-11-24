import { notFound } from "next/navigation";
import { areas, getArea } from "@/data/areas";
import { buildAreaMarkdown, markdownHeaders } from "@/lib/ai-content";

export const dynamic = "force-static";

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  return new Response(buildAreaMarkdown(area), {
    headers: markdownHeaders,
  });
}
