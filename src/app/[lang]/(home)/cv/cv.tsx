import { CvHeader } from "@/app/[lang]/(home)/cv/header/cv-header";
import { CvAside } from "@/app/[lang]/(home)/cv/aside/cv-aside";
import { CvMain } from "@/app/[lang]/(home)/cv/main/cv-main";
import { CvModel } from "@/app/[lang]/(home)/cv/cv-model";
import { CvContext } from "@/app/[lang]/(home)/cv/cv-context";

const cv: CvModel = {
  firstName: "Bálint",
  lastName: "Boda",
  title: "Full-stack Developer",
  contacts: [
    {
      name: "Email",
      type: "email",
      value: "balint.boda.work@gmail.com",
      icon: <></>,
    },
  ],
  skills: [
    {
      name: "HTML",
    },
    {
      name: "CSS",
    },
    {
      name: "JavaScript",
    },
    {
      name: "TypeScript",
    },
    {
      name: "React",
    },
    {
      name: "Redux",
    },
    {
      name: "Redux Toolkit",
    },
    {
      name: "AG Grid",
    },
    {
      name: "React Hook Form",
    },
    {
      name: "Java",
    },
    {
      name: "Spring Boot",
    },
    {
      name: "JUnit",
    },
    {
      name: "Mockito",
    },
    {
      name: "Node.js",
    },
    {
      name: "NestJS",
    },
    {
      name: "OpenAPI",
    },
    {
      name: "PHP",
    },
    {
      name: "Laravel",
    },
    {
      name: "Python",
    },
    {
      name: "SQL",
    },
    {
      name: "Git",
    },
    {
      name: "Office",
    },
  ],
  languages: [
    {
      name: "English",
      proficiency: "advanced",
    },
    {
      name: "Hungarian",
      proficiency: "native",
    },
    {
      name: "French",
      proficiency: "beginner",
    },
  ],
  education: [
    {
      ongoing: false,
      institution: "Eötvös Loránd University",
      degree: "Bachelor of Computer Science",
      startDate: "2021",
      endDate: "2024",
      gpa: 5,
      location: "Budapest, Hungary",
    },
  ],
};

export function Cv() {
  return (
    <CvContext value={cv}>
      <div>
        <CvHeader />

        <div>
          <CvAside />
          <CvMain />
        </div>
      </div>
    </CvContext>
  );
}
