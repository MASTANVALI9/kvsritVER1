import { FileText, Calendar, Download, BookOpen, GraduationCap, Award } from 'lucide-react';

const academicResources = [
    {
        title: "Academic Calendar",
        description: "Important dates for the academic year 2024-25 including exams, holidays and events.",
        icon: Calendar,
        link: "#",
        category: "General"
    },
    {
        title: "Syllabus Documents",
        description: "Detailed course curriculum for all departments and specializations.",
        icon: BookOpen,
        link: "#",
        category: "Curriculum"
    },
    {
        title: "Exam Procedures",
        description: "Rules, regulations and guidelines for college examinations.",
        icon: GraduationCap,
        link: "#",
        category: "Examinations"
    },
    {
        title: "Previous Years Papers",
        description: "Access a repository of question papers from previous semesters.",
        icon: FileText,
        link: "#",
        category: "Resources"
    },
    {
        title: "Student Handbook",
        description: "Official guide for students covering campus life, code of conduct and services.",
        icon: BookOpen,
        link: "#",
        category: "Guidelines"
    },
    {
        title: "Scholarship Info",
        description: "Information about various state and national level scholarships.",
        icon: Award,
        link: "#",
        category: "Opportunities"
    }
];

export default function AcademicResourcesPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-blue-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-4">Student & Faculty Resources</h1>
                    <p className="text-blue-100 text-lg max-w-2xl">
                        A central hub for all academic documents, calendars, and resources to support your journey at KVSRIT.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {academicResources.map((resource, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all group">
                            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <resource.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                {resource.description}
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                                    {resource.category}
                                </span>
                                <a
                                    href={resource.link}
                                    className="flex items-center gap-1 text-sm font-bold text-gray-900 hover:text-blue-600"
                                >
                                    Access <Download size={14} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Note Section */}
                <div className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-100">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="flex-shrink-0 w-16 h-16 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center">
                            <FileText size={32} />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-blue-900 mb-2">Notice to Students</h4>
                            <p className="text-blue-800 opacity-90">
                                All resources are regularly updated. If you are unable to find a specific document, please contact the Academic Cell or your respective Department Head. Timetables are also available on the individual department pages.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
