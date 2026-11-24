import { notFound } from "next/navigation";
import { buildServiceMarkdown, markdownHeaders } from "@/lib/ai-content";
import { allServices, getService } from "@/lib/services";

export const dynamic = "force-static";

export function generateStaticParams() {
  return allServices.map((service) => ({ slug: service.slug }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return new Response(buildServiceMarkdown(service), {
    headers: markdownHeaders,
  });
}
