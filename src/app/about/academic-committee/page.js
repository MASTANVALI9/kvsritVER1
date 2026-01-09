export default function AcademicCommitteePage() {
    return (
        <div className="bg-white">
            <div className="bg-blue-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-4">College Academic Committee</h1>
                    <p className="text-blue-100 text-lg max-w-2xl">
                        Ensuring academic standards and curriculum excellence.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">
                    <div className="prose prose-lg text-gray-600 max-w-none">
                        <p>
                            The College Academic Committee (CAC) is responsible for monitoring the academic affairs of the college and making recommendations to the Principal on all academic matters.
                        </p>

                        <h3 className="text-gray-900 font-bold mt-8 mb-4">Functions of CAC</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>To review the academic and other related activities of the college.</li>
                            <li>To review the students and faculty feedback and suggest suitable remedial measures.</li>
                            <li>To plan for sustaining the quality of education, quality improvement and accreditation of the college.</li>
                            <li>To recommend to the Governing Body regarding new programmes/courses and intake variations.</li>
                        </ul>

                        <h3 className="text-gray-900 font-bold mt-8 mb-4">Composition</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse mt-4">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-200">
                                        <th className="p-4 font-semibold text-gray-900">Designation</th>
                                        <th className="p-4 font-semibold text-gray-900">Role</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr>
                                        <td className="p-4">Principal</td>
                                        <td className="p-4 font-medium text-blue-600">Chairman</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4">All Heads of Departments</td>
                                        <td className="p-4 font-medium text-blue-600">Members</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4">Four Teachers from the College (Nominated)</td>
                                        <td className="p-4 font-medium text-blue-600">Members</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4">Four Experts from outside (Industry/R&D/Education)</td>
                                        <td className="p-4 font-medium text-blue-600">Members</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4">Member Secretary / Coordinator</td>
                                        <td className="p-4 font-medium text-blue-600">Member Secretary</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="mt-8 text-sm text-gray-500 italic">
                            * The specific list of members is updated periodically and available in the college administrative records.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
