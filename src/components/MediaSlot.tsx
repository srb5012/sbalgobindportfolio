import fs from "node:fs";
import path from "node:path";
import { ImageIcon, Video } from "lucide-react";

export function MediaSlot({
  kind = "image",
  label,
  src,
  className = "",
  ratio = "16 / 9",
}: {
  kind?: "image" | "video";
  label: string;
  /** Public path, e.g. "/media/foo.png". Renders the image if the file exists. */
  src?: string;
  className?: string;
  ratio?: string;
}) {
  const hasImage =
    !!src &&
    fs.existsSync(path.join(process.cwd(), "public", src.replace(/^\//, "")));

  if (hasImage) {
    return (
      <div
        className={`overflow-hidden rounded-lg border border-hairline ${className}`}
        style={{ aspectRatio: ratio }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={label} className="h-full w-full object-cover" />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`${label} (placeholder, coming soon)`}
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
