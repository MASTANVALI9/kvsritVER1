"use client";

import { useState } from 'react';
import { BookOpen, GraduationCap, ChevronRight } from 'lucide-react';

const programs = {
  "btech": {
    title: "B.Tech (Bachelor of Technology)",
    description: "4-Year Undergraduate Degree Program",
    courses: [
      { name: "Computer Science and Engineering (CSE)", code: "CSE", },
      { name: "Electronics and Communication Engineering (ECE)", code: "ECE" },
      { name: "Electrical and Electronics Engineering (EEE)", code: "EEE" },
      { name: "Civil Engineering", code: "CE" },
      { name: "Mechanical Engineering", code: "ME" },
      { name: "Artificial Intelligence and Machine Learning", code: "AIML" },
      { name: "Data Science", code: "DS" },
    ]
  },
  "mtech": {
    title: "M.Tech (Master of Technology)",
    description: "2-Year Postgraduate Degree Program",
    courses: [
      { name: "Computer Science and Engineering", code: "CSE" },
      { name: "VLSI Design", code: "VLSI" },
      { name: "Power Electronics", code: "PE" },
      { name: "Structural Engineering", code: "SE" },
    ]
  },
  "management": {
    title: "Management & Computer Applications",
    description: "Postgraduate Professional Programs",
    courses: [
      { name: "Master of Business Administration (MBA)", code: "MBA" },
      { name: "Master of Computer Applications (MCA)", code: "MCA" },
    ]
  },
  "diploma": {
    title: "Diploma (Polytechnic)",
    description: "3-Year Diploma Program",
    courses: [
      { name: "Diploma in Civil Engineering", code: "DCE" },
      { name: "Diploma in Computer Science", code: "DCSE" },
      { name: "Diploma in EEE", code: "DEEE" },
      { name: "Diploma in ECE", code: "DECE" },
      { name: "Diploma in Mechanical Engineering", code: "DME" },
    ]
  }
};

type ProgramKey = keyof typeof programs;

export default function AcademicsPage() {
  const [activeTab, setActiveTab] = useState<ProgramKey>("btech");

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Academics</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Explore our wide range of undergraduate, postgraduate, and diploma programs designed to shape the future.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
          {(Object.keys(programs) as ProgramKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 font-medium text-sm sm:text-base rounded-t-lg transition-colors focus:outline-none ${
                activeTab === key
                  ? 'bg-white text-blue-600 border-t border-l border-r border-gray-200 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              {programs[key].title.split('(')[0].trim()}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{programs[activeTab].title}</h2>
            <p className="text-gray-600">{programs[activeTab].description}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programs[activeTab].courses.map((course, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-5 hover:border-blue-500 hover:shadow-md transition-all group cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {activeTab === 'management' ? <BookOpen size={24} /> : <GraduationCap size={24} />}
                  </div>
                  <span className="text-xs font-bold text-gray-400 border border-gray-200 px-2 py-1 rounded">
                    {course.code}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {course.name}
                </h3>
                <div className="mt-4 flex items-center text-sm text-blue-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  View Details <ChevronRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Academic Calendar Download or Link */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">Academic Calendar</h3>
            <p className="text-blue-700">Check the schedule for examinations, holidays, and events.</p>
          </div>
          <button className="mt-4 md:mt-0 px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors">
            Download Calendar
          </button>
        </div>

      </div>
    </div>
  );
}
