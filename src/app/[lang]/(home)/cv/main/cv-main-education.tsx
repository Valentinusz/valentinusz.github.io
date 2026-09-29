import { CvSectionHeading } from "@/app/[lang]/(home)/cv/cv-section-heading";
import { CvEducation } from "@/app/[lang]/(home)/cv/cv-model";

interface CvMainEducationProps {
  education: CvEducation[];
}

export function CvMainEducation({ education }: CvMainEducationProps) {
  return (
    <section>
      <CvSectionHeading>Education</CvSectionHeading>
    </section>
  );
}
