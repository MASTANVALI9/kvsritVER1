import { Scale, ShieldCheck, GraduationCap } from 'lucide-react';

export default function AdmissionCriteriaPage() {
    return (
        <div className="bg-white">
            <div className="bg-blue-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-4">Criteria for Admission</h1>
                    <p className="text-blue-100 text-lg max-w-2xl">
                        Eligibility requirements for undergraduate and postgraduate programs.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">

                    <div className="space-y-12">

                        {/* B.Tech */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <GraduationCap className="w-8 h-8 text-blue-600" />
                                <h2 className="text-2xl font-bold text-gray-900">B.Tech (Undergraduate)</h2>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-blue-600">
                                <p className="mb-4 text-gray-700"><strong>Qualifying Exam:</strong> A pass in Intermediate (10+2) conducted by the Board of Intermediate Education, Govt. of Andhra Pradesh or any other examination recognized as equivalent thereto with Mathematics, Physics and Chemistry as optional subjects.</p>
                                <p className="text-gray-700"><strong>Rank:</strong> Must have qualified in Engineering, Agricultural and Medical Common Entrance Test (EAMCET) conducted by the Govt. of Andhra Pradesh.</p>
                            </div>
                        </div>

                        {/* M.Tech */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <GraduationCap className="w-8 h-8 text-purple-600" />
                                <h2 className="text-2xl font-bold text-gray-900">M.Tech (Postgraduate)</h2>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-purple-600">
                                <p className="mb-4 text-gray-700"><strong>Qualifying Exam:</strong> B.Tech / B.E in relevant branch of engineering.</p>
                                <p className="text-gray-700"><strong>Rank:</strong> Must have qualified in GATE or PGECET conducted by the Govt. of Andhra Pradesh.</p>
                            </div>
                        </div>

                        {/* MBA */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <GraduationCap className="w-8 h-8 text-green-600" />
                                <h2 className="text-2xl font-bold text-gray-900">MBA</h2>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-green-600">
                                <p className="mb-4 text-gray-700"><strong>Qualifying Exam:</strong> Any Degree from a recognized university.</p>
                                <p className="text-gray-700"><strong>Rank:</strong> Must have qualified in ICET conducted by the Govt. of Andhra Pradesh.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
