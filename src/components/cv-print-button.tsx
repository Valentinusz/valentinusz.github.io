"use client";

import { FilePdfIcon } from "@phosphor-icons/react";
import { buttonVariants } from "fumadocs-ui/components/ui/button";

const className = buttonVariants({ variant: "ghost" });

function handleClick() {
  window.print();
}

export function CvPrintButton() {
  return (
    <button type="button" onClick={handleClick} className={className}>
      <FilePdfIcon aria-hidden="true" className="size-4" />
      Print as PDF
    </button>
  );
}
