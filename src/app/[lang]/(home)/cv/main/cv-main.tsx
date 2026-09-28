import { CvMainAbout } from "@/app/[lang]/(home)/cv/main/cv-main-about";
import { CvMainEducation } from "@/app/[lang]/(home)/cv/main/cv-main-education";
import { CvMainExperience } from "@/app/[lang]/(home)/cv/main/cv-main-experience";
import { CvMainOther } from "@/app/[lang]/(home)/cv/main/cv-main-other";

export function CvMain() {
  return (
    <main>
      <CvMainAbout></CvMainAbout>
      <CvMainExperience></CvMainExperience>
      <CvMainEducation></CvMainEducation>
      <CvMainOther />
    </main>
  );
}
