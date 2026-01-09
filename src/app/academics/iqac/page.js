import { BarChart, CheckSquare, FileText } from 'lucide-react';

export default function IQACPage() {
    return (
        <div className="bg-white">
            <div className="bg-blue-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-4">Internal Quality Assurance Cell (IQAC)</h1>
                    <p className="text-blue-100 text-lg max-w-2xl">
                        Driving performance evaluation, assessment, and accreditation and quality up-gradation.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">

                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Strategies & Functions</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <CheckSquare className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">Quality Benchmarks</h3>
                                        <p className="text-gray-600">Development and application of quality benchmarks/parameters for various academic and administrative activities.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <BarChart className="w-5 h-5 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">Feedback Analysis</h3>
                                        <p className="text-gray-600">Arrangement for feedback response from students, parents, and other stakeholders on quality-related institutional processes.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <FileText className="w-5 h-5 text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">Documentation</h3>
                                        <p className="text-gray-600">Documentation of the various programmes/activities leading to quality improvement.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Links</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="https://drkvsrit.ac.in/iqac-policy/index.html" className="text-blue-600 hover:underline flex items-center gap-2">
                                        <FileText size={16} /> IQAC Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center gap-2">
                                        <FileText size={16} /> Annual Quality Assurance Report (AQAR)
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-600 hover:underline flex items-center gap-2">
                                        <FileText size={16} /> Minutes of Meetings
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
