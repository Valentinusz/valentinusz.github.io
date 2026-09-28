import { ComponentPropsWithRef } from "react";

interface CvSectionHeadingProps extends ComponentPropsWithRef<"h2"> {}

export function CvSectionHeading({ children, ...rest }: CvSectionHeadingProps) {
  return <h2 {...rest}>{children}</h2>;
}
