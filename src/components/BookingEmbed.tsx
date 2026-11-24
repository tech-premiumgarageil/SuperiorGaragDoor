import { RequestForm } from "./request-form";

export function BookingEmbed({
  compact = false,
  serviceSlug,
}: {
  compact?: boolean;
  serviceSlug?: string;
}) {
  return (
    <div
      className={`rounded-[2rem] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-md sm:p-5${compact ? " booking-compact" : ""}`}
    >
      <RequestForm
        id="request-service"
        serviceSlug={serviceSlug}
        detailed={!compact}
        deliveryConfigured={!!process.env.SERVICE_REQUEST_WEBHOOK_URL}
      />
    </div>
  );
}
