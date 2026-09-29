import { CvAsideSkills } from "@/app/[lang]/(home)/cv/aside/cv-aside-skills";
import { CvAsideLanguages } from "@/app/[lang]/(home)/cv/aside/cv-aside-languages";
import { CvModel } from "@/app/[lang]/(home)/cv/cv-model";

interface CvAsideProps {
  cv: CvModel;
}

export function CvAside({ cv: { skills, languages } }: CvAsideProps) {
  return (
    <aside className="space-y-6">
      <CvAsideSkills skills={skills} />
      <CvAsideLanguages languages={languages} />
    </aside>
  );
}
