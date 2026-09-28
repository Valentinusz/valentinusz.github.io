import { createContext } from "react";
import { CvModel } from "@/app/[lang]/(home)/cv/cv-model";

export const CvContext = createContext<CvModel | undefined>(undefined);
