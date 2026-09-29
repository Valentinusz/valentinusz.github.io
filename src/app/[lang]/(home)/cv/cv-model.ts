import { ReactElement } from "react";

export interface CvSkill {
  name: string;
}

export interface CvLanguage {
  name: string;
  proficiency: "beginner" | "elementary" | "intermediate" | "advanced" | "native";
}

export interface CvContact {
  name: string;
  type: "email" | "phone" | "link";
  value: string;
  icon: ReactElement;
}

interface CvBaseEducation {
  institution: string;
  degree: string;
  startDate: string;
  ongoing: boolean;
  location: string;
}

export interface CvOngoingEducation extends CvBaseEducation {
  ongoing: true;
}

export interface CvFinishedEducation extends CvBaseEducation {
  ongoing: false;
  endDate: string;
  gpa: number;
}

export type CvEducation = CvOngoingEducation | CvFinishedEducation;

export interface CvExperience {
  company: string;
  position: string;
}

export interface CvModel {
  firstName: string;
  lastName: string;
  title: string;
  skills: CvSkill[];
  languages: CvLanguage[];
  contacts: CvContact[];
  education: CvEducation[];
  experience: CvExperience[];
}
