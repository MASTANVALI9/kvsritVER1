export interface Faculty {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  specialization: string;
  email: string;
  image?: string;
}

export interface Curriculum {
  semester: string;
  subjects: string[];
}

export interface ResearchArea {
  id: string;
  title: string;
  description: string;
}

export interface Department {
  id: string;
  slug: string;
  name: string;
  code: string; // e.g., CSE, ECE
  description: string;
  hodName: string;
  hodMessage: string;
  vision: string;
  mission: string[];
  faculty: Faculty[];
  curriculum: Curriculum[];
  researchAreas: ResearchArea[];
  image?: string;
}

export interface Event {
  id: string;
  title: string;
  slug: string;
  date: string; // ISO date string
  time: string;
  venue: string;
  category: 'Academic' | 'Cultural' | 'Sports' | 'Workshop' | 'Seminar' | 'Placement';
  description: string;
  objectives: string[];
  registrationLink?: string;
  gallery: string[]; // Array of image URLs
  thumbnail?: string;
}

export interface Course {
  name: string;
  code: string;
}

export interface CourseCategory {
  id: string;
  slug: string;
  title: string;
  description: string;
  duration: string;
  courses: Course[];
  image?: string;
}
