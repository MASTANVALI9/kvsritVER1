import { Layers, Users } from 'lucide-react';

export default function ProgramsOfferedPage() {
    const undergraduate = [
        { branch: "Computer Science and Engineering (CSE)", intake: 180 },
        { branch: "CSE - Artificial Intelligence & Machine Learning", intake: 120 },
        { branch: "CSE - Artificial Intelligence (AI)", intake: 120 },
        { branch: "CSE - Data Science", intake: 60 },
        { branch: "Electronics and Communication Engineering (ECE)", intake: 120 },
        { branch: "Electrical and Electronics Engineering (EEE)", intake: 60 },
        { branch: "Civil Engineering", intake: 60 },
        { branch: "Mechanical Engineering", intake: 60 },
    ];

    const postgraduate = [
        { branch: "M.Tech", intake: 54 },
        { branch: "MBA", intake: 180 },
        { branch: "MCA", intake: 120 },
    ];

    return (
        <div className="bg-white">
            <div className="bg-blue-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-4">Programs Offered</h1>
                    <p className="text-blue-100 text-lg max-w-2xl">
                        Diverse array of courses designed to empower future engineers and leaders.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">

                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <Layers className="w-6 h-6 text-blue-600" />
                        Undergraduate Programs (B.Tech)
                    </h2>
                    <div className="overflow-x-auto mb-12">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    <th className="p-4 font-semibold text-gray-900">Branch Name</th>
                                    <th className="p-4 font-semibold text-gray-900 text-right">Intake Capacity</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {undergraduate.map((prog, index) => (
                                    <tr key={index} className="hover:bg-blue-50/50">
                                        <td className="p-4 text-gray-700 font-medium">{prog.branch}</td>
                                        <td className="p-4 text-gray-600 text-right">{prog.intake}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <Users className="w-6 h-6 text-purple-600" />
                        Postgraduate Programs
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    <th className="p-4 font-semibold text-gray-900">Program Name</th>
                                    <th className="p-4 font-semibold text-gray-900 text-right">Intake Capacity</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {postgraduate.map((prog, index) => (
                                    <tr key={index} className="hover:bg-blue-50/50">
                                        <td className="p-4 text-gray-700 font-medium">{prog.branch}</td>
                                        <td className="p-4 text-gray-600 text-right">{prog.intake}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
}
