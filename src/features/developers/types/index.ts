// Core Domain Types
export interface Developer {
    id: string;
    name: string;
    role: string;
    avatar: string;
    bio: string;
    projects: Project[];
    socials: Social[];
}

export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: Skill[];
    developer: Developer;
  }

  export interface Skill {
    id: string;
    name: string;
    type: SkillType;
  }

  export interface Social {
    id: string;
    name: string;
    url: string;
  }

  export enum SkillType {
    Language = 'Language',
    Framework = 'Framework',
    Platform = 'Platform'
  }