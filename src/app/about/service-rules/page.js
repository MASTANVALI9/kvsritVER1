import { FileText, ExternalLink } from 'lucide-react';

export default function ServiceRulesPage() {
    return (
        <div className="bg-white">
            <div className="bg-blue-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-4">Service Rules</h1>
                    <p className="text-blue-100 text-lg max-w-2xl">
                        Guidelines governing the conduct and service conditions of employees.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 text-center">

                    <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FileText className="w-10 h-10 text-blue-600" />
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Download Official Service Rules</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                        The complete service rules document details the terms of employment, code of conduct, leave rules, and other policies applicable to all staff members of KVSRIT.
                    </p>

                    <a
                        href="https://drkvsrit.ac.in/wp-content/uploads/2020/02/Service-Rules.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/25"
                    >
                        Download Service Rules PDF
                        <ExternalLink className="w-5 h-5" />
                    </a>

                </div>
            </div>
        </div>
    );
}
