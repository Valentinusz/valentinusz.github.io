import { CvSectionHeading } from "@/app/[lang]/(home)/cv/cv-section-heading";
import {useCvContext} from "@/app/[lang]/(home)/cv/use-cv-context";

export function CvMainEducation() {
  const {} = useCvContext()

  return (
    <section>
      <CvSectionHeading>Education</CvSectionHeading>
    </section>
  );
}
