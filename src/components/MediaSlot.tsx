import { ImageIcon, Video } from "lucide-react";

export function MediaSlot({
  kind = "image",
  label,
  className = "",
  ratio = "16 / 9",
}: {
  kind?: "image" | "video";
  label: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`${label} — placeholder, coming soon`}
      className={`flex flex-col items-center justify-center gap-2 rounded-lg bg-surface text-ink-muted ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {kind === "video" ? <Video size={22} /> : <ImageIcon size={22} />}
      <span className="font-mono text-[11px] uppercase tracking-wider">
        {label}
      </span>
      <span className="text-[11px]">Coming soon</span>
    </div>
  );
}
