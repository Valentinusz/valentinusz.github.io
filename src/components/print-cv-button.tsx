"use client";

import { FilePdf } from "@phosphor-icons/react/dist/ssr";

export function PrintCVButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card px-3 py-2 text-sm font-medium text-fd-card-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-primary"
    >
      <FilePdf aria-hidden="true" className="size-4" />
      {label}
    </button>
  );
}
