export class Position {
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  tasks: string[];
  techStack: string;
}

export class Language {
  name: string;
  level: string;
}
export class Education {
  university: string;
  minor: string;
  degree: string;
  location: string;
  start: string;
  end: string;
  awards: string;
  honors: string;
}
export class PersonalData {
  name: string;
  aboutMe: string;
  email: string;
  phone: string;
  title: string;
  github: string;
  linkedin: string;
  location: string;
  technicalSkills: string[];
  behavioralSkills: string[]
  workExperience: Position[];
  freelanceExperience: Position[];
  languageSkills: Language[];
  education: Education[];

}
