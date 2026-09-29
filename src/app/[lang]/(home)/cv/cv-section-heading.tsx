import { ComponentPropsWithRef } from "react";
import { cn } from "@/lib/cn";

interface CvSectionHeadingProps extends ComponentPropsWithRef<"h2"> {}

export function CvSectionHeading({ children, className, ...rest }: CvSectionHeadingProps) {
  return (
    <h2
      className={cn("mb-3 border-b-2 border-fd-primary pb-2 text-xl font-semibold", className)}
      {...rest}
    >
      {children}
    </h2>
  );
}
