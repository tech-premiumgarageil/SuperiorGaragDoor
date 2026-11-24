import { NextRequest, NextResponse } from "next/server";
import { getService, serviceSlugs } from "@/lib/services";
import { isSameOrigin, validateRequest } from "@/lib/request-validation";

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (!isSameOrigin(origin, request.headers.get("host"), request.url))
    return NextResponse.json(
      { message: "Please send your request from this website." },
      { status: 403 },
    );
  if (!request.headers.get("content-type")?.includes("application/json"))
    return NextResponse.json(
      { message: "Send the request as JSON." },
      { status: 415 },
    );
  if (Number(request.headers.get("content-length")) > 8192)
    return NextResponse.json(
      { message: "The request is too large." },
      { status: 413 },
    );
  let input;
  try {
    const raw = await request.text();
    if (Buffer.byteLength(raw, "utf8") > 8192)
      return NextResponse.json(
        { message: "The request is too large." },
        { status: 413 },
      );
    input = JSON.parse(raw);
  } catch {
    return NextResponse.json(
      { message: "The request could not be read." },
      { status: 400 },
    );
  }
  if (input?.website)
    return NextResponse.json(
      { message: "Please try again without the extra field." },
      { status: 400 },
    );
  const result = validateRequest(input, serviceSlugs);
  if (!result.ok)
    return NextResponse.json(
      {
        message: "Please check the form fields and try again.",
        errors: result.errors,
      },
      { status: 400 },
    );
  const webhook = process.env.SERVICE_REQUEST_WEBHOOK_URL;
  if (!webhook)
    return NextResponse.json(
      {
        message:
          "Your request was not sent. Contact setup is pending; this preview is not connected to the business yet.",
      },
      { status: 503 },
    );
  try {
    const destination = new URL(webhook);
    if (destination.protocol !== "https:") throw new Error("HTTPS required");
    const response = await fetch(destination, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...result.data,
        serviceName:
          getService(result.data.service)?.title || "Not sure — help me choose",
        source: "Superior Garage Doors USA website",
        submittedAt: new Date().toISOString(),
      }),
      signal: AbortSignal.timeout(8000),
      redirect: "error",
    });
    if (!response.ok) throw new Error("Delivery failed");
    return NextResponse.json({
      message:
        "Your service request has been sent. Scheduling and availability will be confirmed separately.",
    });
  } catch {
    return NextResponse.json(
      { message: "Your request was not sent. Please try again later." },
      { status: 502 },
    );
  }
}
