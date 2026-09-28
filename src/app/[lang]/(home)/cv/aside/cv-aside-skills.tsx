import { CvSectionHeading } from "@/app/[lang]/(home)/cv/cv-section-heading";
import { useCvContext } from "@/app/[lang]/(home)/cv/use-cv-context";

export function CvAsideSkills() {
  const { skills } = useCvContext();

  return (
    <section>
      <CvSectionHeading>Skills</CvSectionHeading>

      <ul>
        {skills.map((skill) => (
          <li key={skill.name}>{skill.name}</li>
        ))}
      </ul>
    </section>
  );
}
