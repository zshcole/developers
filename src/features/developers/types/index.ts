// Core Domain Types
// Core Domain Types
export interface Developer {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  email: string;
  phone: string;
  projects: Project[];
  socials: Social[];
  description: string;
  followers: number;
  following: number;
  repos: number;
  stars: number;
  forks: number;
  issues: number;
  pullRequests: number;
  packages: number;
  organizations: number;
  location: string;
  twitter: string;
  github: string;
  website: string;
  skills?: string[];
  createdAt: string;
  updatedAt: string;
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
