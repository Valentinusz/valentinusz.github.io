import { CvSectionHeading } from "@/app/[lang]/(home)/cv/cv-section-heading";
import { CvExperience } from "@/app/[lang]/(home)/cv/cv-model";

interface CvMainExperienceProps {
  experience: CvExperience[];
}

export function CvMainExperience({ experience }: CvMainExperienceProps) {
  return (
    <section>
      <CvSectionHeading>Experience</CvSectionHeading>
    </section>
  );
}
