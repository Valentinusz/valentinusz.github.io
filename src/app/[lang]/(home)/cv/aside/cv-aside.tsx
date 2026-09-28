import { CvAsideSkills } from "@/app/[lang]/(home)/cv/aside/cv-aside-skills";
import { CvAsideLanguages } from "@/app/[lang]/(home)/cv/aside/cv-aside-languages";

export function CvAside() {
  return (
    <aside>
      <CvAsideSkills />
      <CvAsideLanguages />
    </aside>
  );
}
