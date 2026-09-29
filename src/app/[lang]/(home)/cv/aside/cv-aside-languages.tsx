import { CvSectionHeading } from "@/app/[lang]/(home)/cv/cv-section-heading";
import { CvLanguage } from "@/app/[lang]/(home)/cv/cv-model";

interface CvAsideLanguagesProps {
  languages: CvLanguage[];
}

export function CvAsideLanguages({ languages }: CvAsideLanguagesProps) {
  return (
    <section>
      <CvSectionHeading>Language knowledge</CvSectionHeading>

      <ol className="space-y-2 text-sm">
        {languages.map((language) => (
          <li className="text-fd-muted-foreground" key={language.name}>
            {language.name} - {language.proficiency}
          </li>
        ))}
      </ol>
    </section>
  );
}
