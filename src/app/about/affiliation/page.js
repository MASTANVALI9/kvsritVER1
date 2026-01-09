import { Award, CheckCircle } from 'lucide-react';

export default function AffiliationPage() {
    return (
        <div className="bg-white">
            {/* Header */}
            <div className="bg-blue-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-4">Affiliation and Accreditation</h1>
                    <p className="text-blue-100 text-lg max-w-2xl">
                        Recognized for excellence and adherence to global quality standards.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="p-8 md:p-12">

                        {/* Main Content */}
                        <div className="space-y-12">

                            <div className="flex gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                        <Award className="w-6 h-6 text-blue-600" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Affiliation & Approval</h3>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        Dr. K.V. Subba Reddy Institute of Technology is affiliated to <span className="font-semibold text-gray-900">Jawaharlal Nehru Technological University (JNTU), Ananthapuramu</span>, and is approved by the <span className="font-semibold text-gray-900">All India Council for Technical Education (AICTE), New Delhi</span>.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                        <CheckCircle className="w-6 h-6 text-green-600" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">ISO Certifications</h3>
                                    <div className="space-y-4">
                                        <p className="text-gray-600 leading-relaxed">
                                            The institute has achieved significant milestones in quality management and environmental systems:
                                        </p>
                                        <ul className="space-y-3">
                                            <li className="flex items-center gap-3 text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-100">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                                <span>Received <span className="font-semibold">ISO 9001:2000 Certification</span> for Environmental Management System</span>
                                            </li>
                                            <li className="flex items-center gap-3 text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-100">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                                <span>Received <span className="font-semibold">ISO 9001:2000 Certification</span> for Quality Management System</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
