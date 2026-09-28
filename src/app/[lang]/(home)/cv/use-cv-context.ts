import { useContext } from "react";
import { CvContext } from "@/app/[lang]/(home)/cv/cv-context";
import { CvModel } from "@/app/[lang]/(home)/cv/cv-model";

export function useCvContext(): CvModel {
  const value = useContext(CvContext);

  if (value === undefined) {
    throw new Error("useCvContext must be called within a CvContext provider");
  }

  return value;
}
