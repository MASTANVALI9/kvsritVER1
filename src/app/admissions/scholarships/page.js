import { Award, BookOpen, Check } from 'lucide-react';

export default function ScholarshipsPage() {
    return (
        <div className="bg-white">
            <div className="bg-blue-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-4">Scholarships & Financial Aid</h1>
                    <p className="text-blue-100 text-lg max-w-2xl">
                        Supporting meritorious and deserving students through various scholarship schemes.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">

                    <div className="space-y-8">

                        <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
                            <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-3">
                                <Award className="w-6 h-6" />
                                B.Tech Fee Waiver
                            </h2>
                            <p className="text-blue-800 leading-relaxed">
                                The college offers <strong>COMPLETE TUITION FEE WAIVER FOR ALL THE FOUR YEARS</strong> of the B.Tech course to students who join this college through EAMCET rank (as per Government eligibility). The Government of Andhra Pradesh offers tuition fee reimbursement (Jagananna Vidya Deevena) to eligible students.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-6 border border-gray-200 rounded-xl">
                                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <BookOpen className="w-5 h-5 text-purple-600" />
                                    M.Tech Stipends
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex gap-2 text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <span>GATE qualified students are eligible for AICTE Stipend.</span>
                                    </li>
                                    <li className="flex gap-2 text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <span>PGECET qualified students are eligible for Fee Reimbursement.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="p-6 border border-gray-200 rounded-xl">
                                <h3 className="font-bold text-gray-900 mb-4">Other Scholarships</h3>
                                <ul className="space-y-3">
                                    <li className="flex gap-2 text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <span>Merit Scholarships for class toppers.</span>
                                    </li>
                                    <li className="flex gap-2 text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <span>SC/ST/OBC Scholarships (State Govt.).</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
