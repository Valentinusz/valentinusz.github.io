import { CvHeader } from "@/app/[lang]/(home)/cv/header/cv-header";
import { CvAside } from "@/app/[lang]/(home)/cv/aside/cv-aside";
import { CvMain } from "@/app/[lang]/(home)/cv/main/cv-main";
import { CvModel } from "@/app/[lang]/(home)/cv/cv-model";

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
  experience: []
};

export function Cv() {
  return (
    <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-8 md:px-6">
      <CvHeader cv={cv} />

      <div className="grid gap-8 lg:grid-cols-[15rem_minmax(0,1fr)]">
        <CvAside cv={cv} />
        <CvMain cv={cv} />
      </div>
    </div>
  );
}
