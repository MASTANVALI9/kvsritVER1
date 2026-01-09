import { Book, FileText } from 'lucide-react';

export default function RegulationsPage() {
    const regulations = [
        {
            category: "B.Tech",
            items: ["R-20 Regulations", "R-19 Regulations", "R-15 Regulations"]
        },
        {
            category: "M.Tech",
            items: ["R-21 Regulations", "R-17 Regulations", "R-09 Regulations"]
        },
        {
            category: "MBA",
            items: ["R-17 Regulations", "R-14 Regulations"]
        }
    ];

    return (
        <div className="bg-white">
            <div className="bg-blue-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-4">Regulations and Syllabus</h1>
                    <p className="text-blue-100 text-lg max-w-2xl">
                        Academic regulations and curriculum structures for all programs.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {regulations.map((reg, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center">
                                    <Book className="w-6 h-6 text-indigo-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">{reg.category}</h2>
                            </div>
                            <ul className="space-y-4">
                                {reg.items.map((item, i) => (
                                    <li key={i}>
                                        <button className="flex items-center gap-3 w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                                            <FileText className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
                                            <span className="font-medium text-gray-700 group-hover:text-blue-700">{item}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
