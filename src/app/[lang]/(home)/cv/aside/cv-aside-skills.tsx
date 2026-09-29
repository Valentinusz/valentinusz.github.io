import { CvSectionHeading } from "@/app/[lang]/(home)/cv/cv-section-heading";
import { CvSkill } from "@/app/[lang]/(home)/cv/cv-model";

interface CvAsideSkillsProps {
  skills: CvSkill[];
}

export function CvAsideSkills({ skills }: CvAsideSkillsProps) {
  return (
    <section>
      <CvSectionHeading>Skills</CvSectionHeading>

      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            className="inline-flex rounded-md border border-fd-border bg-fd-card px-2 py-1 text-xs text-fd-card-foreground"
            key={skill.name}
          >
            {skill.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
