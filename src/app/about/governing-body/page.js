export default function GoverningBodyPage() {
    const members = [
        { title: "Chairman of the Society", name: "Dr. K. V. Subba Reddy", role: "President" },
        { title: "Vice-President of the Society", name: "Miss. K. Lahari", role: "Member" },
        { title: "Secretary of the Society", name: "Mrs. S. Vijaya Lakshmamma", role: "Member" },
        { title: "Treasurer of the Society", name: "Mrs. K. Padmalatha", role: "Member" },
        { title: "Auditor of the Society", name: "Mrs. P. Manasa Devi", role: "Member" },
        { title: "Professor in MECHANICAL Dept. JNTU College of Engineering, Anantapur", name: "Prof. G. Prasanthi", role: "University Nominee" },
        { title: "Shivtek Industry Limited, Kurnool", name: "S. Sajeed", role: "Industry Nominee" },
        { title: "Professor in EEE – G Principal in JNTUA College of Engineering Anantapur", name: "Prof. P. Sujatha", role: "Member" },
        { title: "Professor in Mechanical DrKVSRIT Kurnool", name: "Dr. G. Thirupathi Reddy", role: "Member" },
        { title: "Professor in CSE, Dr.KVSRIT, Kurnool", name: "Dr. C. Dhanraj", role: "Member" },
        { title: "Principal", name: "Dr. J. Kanna Kumar", role: "Member Secretary" }
    ];

    return (
        <div className="bg-white">
            <div className="bg-blue-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-4">Governing Body</h1>
                    <p className="text-blue-100 text-lg max-w-2xl">
                        Distinguished members guiding the institution towards excellence.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-100">
                                    <th className="p-6 font-bold text-gray-900">Name</th>
                                    <th className="p-6 font-bold text-gray-900">Designation</th>
                                    <th className="p-6 font-bold text-gray-900">Role</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {members.map((member, index) => (
                                    <tr key={index} className="hover:bg-blue-50/50 transition-colors">
                                        <td className="p-6 font-bold text-gray-900">{member.name}</td>
                                        <td className="p-6 text-gray-600">{member.title}</td>
                                        <td className="p-6">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                                {member.role}
                                            </span>
                                        </td>
                                    </tr>
                                ))}

                                {/* Fixed Headers for Nominees */}
                                <tr className="hover:bg-blue-50/50 transition-colors">
                                    <td className="p-6 font-bold text-gray-900">AICTE Nominee</td>
                                    <td className="p-6 text-gray-600">AICTE Nominee</td>
                                    <td className="p-6"><span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">AICTE Nominee</span></td>
                                </tr>
                                <tr className="hover:bg-blue-50/50 transition-colors">
                                    <td className="p-6 font-bold text-gray-900">AP State Government Nominee</td>
                                    <td className="p-6 text-gray-600">AP State Government Nominee</td>
                                    <td className="p-6"><span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">AP State Government Nominee</span></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
