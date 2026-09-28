import { CvSectionHeading } from "@/app/[lang]/(home)/cv/cv-section-heading";
import { useCvContext } from "@/app/[lang]/(home)/cv/use-cv-context";

export function CvAsideLanguages() {
  const { languages } = useCvContext();

  return (
    <section>
      <CvSectionHeading>Language knowledge</CvSectionHeading>

      <ol>
        {languages.map((language) => (
          <li key={language.name}>
            {language.name} - {language.proficiency}
          </li>
        ))}
      </ol>
    </section>
  );
}
