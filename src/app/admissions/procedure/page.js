import { FileText, CheckCircle, Clock } from 'lucide-react';

export default function AdmissionsProcedurePage() {
    return (
        <div className="bg-white">
            <div className="bg-blue-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-4">Admissions Procedure</h1>
                    <p className="text-blue-100 text-lg max-w-2xl">
                        Step-by-step guide to joining Dr. K.V. Subba Reddy Institute of Technology.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">

                    <div className="prose prose-lg text-gray-600 max-w-none">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Apply</h2>
                        <p>
                            Admission to KVSRIT is primarily based on the Engineering, Agricultural and Medical Common Entrance Test (EAMCET) rank for B.Tech, and other relevant entrance exams for PG courses.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 mt-12">
                            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl mb-4">1</div>
                                <h3 className="font-bold text-gray-900 mb-2">Category A (Convener Quota)</h3>
                                <p className="text-sm">70% of seats are filled by the Convener, EAMCET based on the rank secured in the entrance examination.</p>
                            </div>
                            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl mb-4">2</div>
                                <h3 className="font-bold text-gray-900 mb-2">Category B (Management Quota)</h3>
                                <p className="text-sm">30% of seats are filled by the Management based on merit in 10+2 / Intermediate marks.</p>
                            </div>
                            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl mb-4">3</div>
                                <h3 className="font-bold text-gray-900 mb-2">Literal Entry (ECET)</h3>
                                <p className="text-sm">Diploma holders can join directly into 2nd year B.Tech via ECET counselling.</p>
                            </div>
                        </div>

                        <div className="mt-12 bg-gray-50 p-8 rounded-xl">
                            <h3 className="flex items-center gap-2 font-bold text-xl text-gray-900 mb-4">
                                <Clock className="w-6 h-6 text-blue-600" />
                                Important Documents Required
                            </h3>
                            <ul className="grid md:grid-cols-2 gap-3 list-none">
                                {[
                                    "SSC / 10th Class Marks Memo",
                                    "Intermediate / 10+2 Marks Memo",
                                    "EAMCET / ECET / ICET / PGECET Rank Card",
                                    "Study & Conduct Certificates (VI to Intermediate)",
                                    "Transfer Certificate (TC)",
                                    "Income Certificate (if applicable for scholarship)",
                                    "Caste Certificate (for reserved categories)",
                                    "Aadhar Card",
                                    "Passport Size Photos"
                                ].map((doc, i) => (
                                    <li key={i} className="flex items-center gap-2 text-gray-700">
                                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                        {doc}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
