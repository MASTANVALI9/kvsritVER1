import { Calendar, Download } from 'lucide-react';

export default function AcademicCalendarPage() {
    const semesters = [
        { title: "B.Tech I Year I Semester", link: "https://drkvsrit.ac.in/wp-content/uploads/2020/01/I-I.pdf" },
        { title: "I B.Tech II Semester", link: "https://drkvsrit.ac.in/assets/AC%2022-23%20I%20B%20TECH%20-%20II%20SEM.pdf" },
        { title: "II B.Tech I Semester", link: "https://drkvsrit.ac.in/assets/AC%2022-23%20II%20B%20TECH%20-%20I%20SEM%20.pdf" },
        { title: "II B.Tech II Semester", link: "https://drkvsrit.ac.in/assets/AC%2022-23%20II%20B%20TECH%20-%20II%20SEM%20-%20.pdf" },
        { title: "III B.Tech I Semester", link: "https://drkvsrit.ac.in/assets/III-I.pdf" },
        { title: "III B.Tech II Semester", link: "https://drkvsrit.ac.in/assets/AC%2022-23%20III%20B%20TECH%20-%20II%20SEM%20.pdf" },
        { title: "IV B.Tech I Semester", link: "https://drkvsrit.ac.in/assets/iv-I.pdf" },
        { title: "IV B.Tech II Semester", link: "https://drkvsrit.ac.in/assets/iv-ii.pdf" },
    ];

    return (
        <div className="bg-white">
            <div className="bg-blue-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-4">Academic Calendar</h1>
                    <p className="text-blue-100 text-lg max-w-2xl">
                        Schedule of academic activities, examinations, and holidays for the academic year 2022-23.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {semesters.map((sem, index) => (
                            <a
                                key={index}
                                href={sem.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-6 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all group"
                            >
                                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                                    <Calendar className="w-6 h-6 text-blue-600" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{sem.title}</h3>
                                    <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                                        <Download size={14} /> Download PDF
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
