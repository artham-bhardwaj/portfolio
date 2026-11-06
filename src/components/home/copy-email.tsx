"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="group inline-flex max-w-full items-center gap-3 rounded-full border border-border bg-bg py-1.5 pl-4 pr-1.5 text-sm transition hover:border-border-strong"
      aria-label={copied ? "Email copied" : `Copy email address ${email}`}
    >
      <span className="truncate font-mono text-muted">{email}</span>
      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-surface-2 text-fg">
        {copied ? <Check size={14} className="text-success" /> : <Copy size={14} />}
      </span>
      <span className="sr-only" aria-live="polite">{copied ? "Copied" : ""}</span>
    </button>
  );
}
