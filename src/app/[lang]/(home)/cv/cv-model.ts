import { ReactElement } from "react";

interface CvSkill {
  name: string;
}

interface CvLanguage {
  name: string;
  proficiency: "beginner" | "elementary" | "intermediate" | "advanced" | "native";
}

interface CvContact {
  name: string;
  type: "email" | "phone" | "link";
  value: string;
  icon: ReactElement;
}

interface BaseEducation {
  institution: string;
  degree: string;
  startDate: string;
  ongoing: boolean;
  location: string;
}

interface OngoingEducation extends BaseEducation {
  ongoing: true;
}

interface FinishedEducation extends BaseEducation {
  ongoing: false;
  endDate: string;
  gpa: number;
}

type Education = OngoingEducation | FinishedEducation;

export interface CvModel {
  firstName: string;
  lastName: string;
  title: string;
  skills: CvSkill[];
  languages: CvLanguage[];
  contacts: CvContact[];
  education: Education[];

}
