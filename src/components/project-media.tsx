import Image from "next/image";
import type { ProjectImage } from "@/data/projects";

/** A screenshot inside a minimal browser-window frame. */
export function BrowserFrame({
  image,
  label,
  priority = false,
  sizes = "(min-width: 1024px) 600px, 100vw",
  className = "",
}: {
  image: ProjectImage;
  label?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-xl border border-border bg-surface-2 shadow-card ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]/80" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]/80" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]/80" />
        {label && <span className="ml-2 truncate font-mono text-[10px] text-subtle">{label}</span>}
      </div>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
        priority={priority}
        className="block h-auto w-full"
      />
    </div>
  );
}

/** Example API output for projects whose evidence is a service response, not a UI. */
export function ResponsePanel({ title, body }: { title: string; body: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-bg font-mono text-[12px] leading-6">
      <div className="flex items-center justify-between border-b border-border px-4 py-2">
        <span className="text-subtle">{title}</span>
        <span className="rounded bg-success/10 px-1.5 text-[10px] text-success">200 OK</span>
      </div>
      <pre className="overflow-x-auto p-4 text-muted">{body}</pre>
    </div>
  );
}

// From the Swing Trading Assistant README's documented example response.
export const swingExample = `{
  "symbol": "RELIANCE.NS",
  "signal": "BUY",
  "current_price": 2850.50,
  "rsi": 32.45,
  "macd": 0.0234,
  "macd_signal": 0.0190,
  "ema_50": 2800.00,
  "reason": "RSI (32.45) < 35, Price > EMA50"
}`;
