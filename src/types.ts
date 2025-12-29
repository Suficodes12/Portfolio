export type SkillLevel = 'Beginner' | 'Intermediate' | 'Experienced' | 'Advanced';

export interface Skill {
  name: string;
  level: SkillLevel;
  icon: string;
  color?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}


import React from 'react';

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

export interface ContactInfo {
  type: 'Email' | 'Whatsapp' | 'Phone';
  value: string;
  href: string;
  icon: React.ReactNode;
}