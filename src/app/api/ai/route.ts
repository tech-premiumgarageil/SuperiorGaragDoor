import {
  getAiDataset,
  getAreaForAi,
  getServiceForAi,
  jsonHeaders,
} from "@/lib/ai-content";
import { areas } from "@/data/areas";
import { homeFaqs } from "@/data/faqs";
import { services } from "@/lib/services";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const resource = searchParams.get("resource") ?? "all";
  const slug = searchParams.get("slug");
  const limit = Number(searchParams.get("limit") ?? "25");
  const safeLimit = Number.isFinite(limit) ? limit : 25;

  if (resource === "all") {
    return Response.json(getAiDataset(safeLimit), { headers: jsonHeaders });
  }

  if (resource === "business") {
    return Response.json(
      { schemaVersion: "1.0", business: getAiDataset().business },
      { headers: jsonHeaders },
    );
  }

  if (resource === "services") {
    return Response.json(
      { schemaVersion: "1.0", services },
      { headers: jsonHeaders },
    );
  }

  if (resource === "service") {
    if (!slug) {
      return Response.json(
        { error: "Missing required slug for resource=service." },
        { status: 400, headers: jsonHeaders },
      );
    }

    const service = getServiceForAi(slug);
    if (!service) {
      return Response.json(
        { error: `No service found for slug: ${slug}` },
        { status: 404, headers: jsonHeaders },
      );
    }

    return Response.json(
      { schemaVersion: "1.0", service },
      { headers: jsonHeaders },
    );
  }

  if (resource === "areas") {
    return Response.json(
      { schemaVersion: "1.0", areas },
      { headers: jsonHeaders },
    );
  }

  if (resource === "area") {
    if (!slug) {
      return Response.json(
        { error: "Missing required slug for resource=area." },
        { status: 400, headers: jsonHeaders },
      );
    }

    const area = getAreaForAi(slug);
    if (!area) {
      return Response.json(
        { error: `No area found for slug: ${slug}` },
        { status: 404, headers: jsonHeaders },
      );
    }

    return Response.json(
      { schemaVersion: "1.0", area },
      { headers: jsonHeaders },
    );
  }

  if (resource === "faqs") {
    return Response.json(
      { schemaVersion: "1.0", faqs: homeFaqs },
      { headers: jsonHeaders },
    );
  }

  return Response.json(
    {
      error: "Unsupported resource.",
      supportedResources: [
        "all",
        "business",
        "services",
        "service",
        "areas",
        "area",
        "faqs",
      ],
    },
    { status: 400, headers: jsonHeaders },
  );
}
