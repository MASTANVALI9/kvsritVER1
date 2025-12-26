import { Department, Event } from './types';

export const departments: Department[] = [
  {
    id: '1',
    slug: 'cse',
    name: 'Computer Science and Engineering',
    code: 'CSE',
    description: 'The Department of Computer Science and Engineering was established to provide world-class education in computing and technology. We aim to produce globally competent professionals.',
    hodName: 'Dr. Jane Doe',
    hodMessage: 'Welcome to the CSE Department. We strive for excellence in education and research.',
    vision: 'To be a center of excellence in Computer Science and Engineering education and research.',
    mission: [
      'To provide quality education in Computer Science and Engineering.',
      'To promote research and innovation.',
      'To foster industry-academia interaction.'
    ],
    faculty: [
      {
        id: 'f1',
        name: 'Dr. Jane Doe',
        designation: 'Professor & HOD',
        qualification: 'Ph.D. in CSE',
        specialization: 'Artificial Intelligence',
        email: 'hod.cse@drkvsrit.ac.in'
      },
      {
        id: 'f2',
        name: 'Mr. John Smith',
        designation: 'Associate Professor',
        qualification: 'M.Tech',
        specialization: 'Data Science',
        email: 'john.smith@drkvsrit.ac.in'
      }
    ],
    curriculum: [
      {
        semester: '1st Semester',
        subjects: ['Mathematics I', 'Programming for Problem Solving', 'Engineering Physics']
      },
      {
        semester: '2nd Semester',
        subjects: ['Mathematics II', 'Data Structures', 'Engineering Chemistry']
      }
    ],
    researchAreas: [
      {
        id: 'r1',
        title: 'Artificial Intelligence',
        description: 'Research in Machine Learning, Deep Learning, and NLP.'
      },
      {
        id: 'r2',
        title: 'IoT and Embedded Systems',
        description: 'Developing smart solutions for real-world problems.'
      }
    ],
    image: '/images/cse-dept.jpg'
  },
  {
    id: '2',
    slug: 'ece',
    name: 'Electronics and Communication Engineering',
    code: 'ECE',
    description: 'The ECE department focuses on Electronics, Communication, and Signal Processing.',
    hodName: 'Dr. Alan Turing',
    hodMessage: 'Innovating the future of communication.',
    vision: 'To produce high-quality Electronics and Communication Engineers.',
    mission: [
      'To impart strong fundamental knowledge.',
      'To facilitate research in emerging technologies.'
    ],
    faculty: [],
    curriculum: [],
    researchAreas: [],
    image: '/images/ece-dept.jpg'
  }
];

export const events: Event[] = [
  {
    id: '1',
    slug: 'tech-fest-2025',
    title: 'KVSRIT Tech Fest 2025',
    date: '2025-03-15',
    time: '09:00 AM',
    venue: 'Main Auditorium',
    category: 'Cultural',
    description: 'Annual technical symposium featuring coding contests, paper presentations, and robotics workshops.',
    objectives: [
      'To provide a platform for students to showcase their technical skills.',
      'To encourage innovation and creativity.',
      'To facilitate networking with industry experts.'
    ],
    registrationLink: 'https://forms.gle/example',
    gallery: [
      '/images/events/techfest1.jpg',
      '/images/events/techfest2.jpg'
    ],
    thumbnail: '/images/events/techfest-thumb.jpg'
  },
  {
    id: '2',
    slug: 'ai-workshop',
    title: 'Workshop on Generative AI',
    date: '2025-02-20',
    time: '10:00 AM',
    venue: 'CSE Seminar Hall',
    category: 'Workshop',
    description: 'A hands-on workshop on the latest trends in Generative AI and LLMs.',
    objectives: [
      'Understand the basics of Generative AI.',
      'Hands-on experience with LLMs.'
    ],
    registrationLink: 'https://forms.gle/workshop',
    gallery: [],
    thumbnail: '/images/events/ai-workshop.jpg'
  }
];

// Mock API functions
export async function getDepartments() {
  return departments;
}

export async function getDepartmentBySlug(slug: string) {
  return departments.find(d => d.slug === slug);
}

export async function getEvents() {
  return events;
}

export async function getEventBySlug(slug: string) {
  return events.find(e => e.slug === slug);
}

import { CourseCategory } from './types';

export const courseCategories: CourseCategory[] = [
  {
    id: '1',
    slug: 'btech',
    title: 'B.Tech (Bachelor of Technology)',
    description: '4-Year Undergraduate Degree Program designed to provide a strong foundation in engineering principles and practical skills.',
    duration: '4 Years',
    courses: [
      { name: "Computer Science and Engineering (CSE)", code: "CSE" },
      { name: "Electronics and Communication Engineering (ECE)", code: "ECE" },
      { name: "Electrical and Electronics Engineering (EEE)", code: "EEE" },
      { name: "Civil Engineering", code: "CE" },
      { name: "Mechanical Engineering", code: "ME" },
      { name: "Artificial Intelligence and Machine Learning", code: "AIML" },
      { name: "Data Science", code: "DS" },
    ]
  },
  {
    id: '2',
    slug: 'mtech',
    title: 'M.Tech (Master of Technology)',
    description: '2-Year Postgraduate Degree Program focusing on advanced engineering concepts and research.',
    duration: '2 Years',
    courses: [
      { name: "Computer Science and Engineering", code: "CSE" },
      { name: "VLSI Design", code: "VLSI" },
      { name: "Power Electronics", code: "PE" },
      { name: "Structural Engineering", code: "SE" },
    ]
  },
  {
    id: '3',
    slug: 'management',
    title: 'Management & Computer Applications',
    description: 'Postgraduate Professional Programs to develop business leaders and IT professionals.',
    duration: '2 Years',
    courses: [
      { name: "Master of Business Administration (MBA)", code: "MBA" },
      { name: "Master of Computer Applications (MCA)", code: "MCA" },
    ]
  },
  {
    id: '4',
    slug: 'diploma',
    title: 'Diploma (Polytechnic)',
    description: '3-Year Diploma Program providing technical skills for immediate employment or further studies.',
    duration: '3 Years',
    courses: [
      { name: "Diploma in Civil Engineering", code: "DCE" },
      { name: "Diploma in Computer Science", code: "DCSE" },
      { name: "Diploma in EEE", code: "DEEE" },
      { name: "Diploma in ECE", code: "DECE" },
      { name: "Diploma in Mechanical Engineering", code: "DME" },
    ]
  }
];

export async function getCourseCategories() {
  return courseCategories;
}

export async function getCourseCategoryBySlug(slug: string) {
  return courseCategories.find(c => c.slug === slug);
}
