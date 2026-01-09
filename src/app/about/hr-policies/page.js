import { Shield, Book, Heart } from 'lucide-react';

export default function HRPoliciesPage() {
    return (
        <div className="bg-white">
            <div className="bg-blue-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-4">HR Policies & Strategic Plan</h1>
                    <p className="text-blue-100 text-lg max-w-2xl">
                        Supporting our faculty and staff through comprehensive welfare measures and clear strategic goals.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid gap-12">

                    {/* Strategic Plan Section */}
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                <Shield className="w-6 h-6 text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">Strategic Goals</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-lg mb-6">
                            KVSRIT is committed to becoming a leading technical institution by focusing on academic excellence, research innovation, and holistic development. Our strategic plan outlines the roadmap for infrastructure development, industry collaborations, and faculty empowerment over the next 5 years.
                        </p>
                    </div>

                    {/* HR Policies Section */}
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                <Heart className="w-6 h-6 text-green-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">Staff Welfare Measures</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h3 className="font-bold text-gray-900 mb-2">Leave Benefits</h3>
                                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                                    <li>Casual, Earned, and Medical Leaves</li>
                                    <li>Maternity Leave for female staff</li>
                                    <li>Study Leave for higher education</li>
                                    <li>On-Duty leave for conferences/workshops</li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h3 className="font-bold text-gray-900 mb-2">Financial & Health Benefits</h3>
                                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                                    <li>Employee Provident Fund (EPF)</li>
                                    <li>Group Insurance Coverage</li>
                                    <li>Gratuity benefits</li>
                                    <li>Fee concession for staff children</li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h3 className="font-bold text-gray-900 mb-2">Professional Development</h3>
                                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                                    <li>Incentives for Research Publications</li>
                                    <li>Sponsorship for FDPs and Conferences</li>
                                    <li>Awards for academic excellence</li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h3 className="font-bold text-gray-900 mb-2">Campus Facilities</h3>
                                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                                    <li>Free transport for non-teaching staff</li>
                                    <li>Subsidized canteen facility</li>
                                    <li>Health center access</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
