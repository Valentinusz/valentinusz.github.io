import { CvMainAbout } from "@/app/[lang]/(home)/cv/main/cv-main-about";
import { CvMainEducation } from "@/app/[lang]/(home)/cv/main/cv-main-education";
import { CvMainExperience } from "@/app/[lang]/(home)/cv/main/cv-main-experience";
import { CvMainOther } from "@/app/[lang]/(home)/cv/main/cv-main-other";
import { CvModel } from "@/app/[lang]/(home)/cv/cv-model";

interface CvMainProps {
  cv: CvModel;
}

export function CvMain({ cv }: CvMainProps) {
  return (
    <main className="min-w-0 space-y-8">
      <CvMainAbout></CvMainAbout>
      <CvMainExperience experience={cv.experience}></CvMainExperience>
      <CvMainEducation education={cv.education}></CvMainEducation>
      <CvMainOther />
    </main>
  );
}
