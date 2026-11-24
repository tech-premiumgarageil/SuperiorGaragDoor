import { CallLink, RequestLink } from "./ServiceActions";
import { Icon } from "./icons";

export function StickyCallBar() {
  return (
    <div className="mobile-action-bar fixed inset-x-0 bottom-0 z-40 flex gap-px bg-ink-900 text-white md:hidden">
      <CallLink className="flex min-h-14 flex-1 items-center justify-center bg-brand px-2 text-center text-sm font-bold hover:bg-brand-700" />
      <RequestLink className="flex min-h-14 flex-1 items-center justify-center gap-2 px-2 text-center text-sm font-bold">
        Request Service <Icon width="16" height="16" />
      </RequestLink>
    </div>
  );
}
