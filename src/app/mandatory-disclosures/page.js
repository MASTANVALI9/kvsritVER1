import { statutoryInfo } from '@/lib/data';
import { FileText, Shield, ExternalLink, Download, Scale, Info } from 'lucide-react';

export const metadata = {
    title: "Mandatory Disclosures | KVSRIT",
    description: "Mandatory statutory disclosures and AICTE approvals for Dr. K.V. Subba Reddy Institute of Technology."
};

const disclosures = [
    { id: 1, title: 'AICTE Extension of Approval (EOA) 2024-25', category: 'Approvals' },
    { id: 2, title: 'JNTUA Permanent Affiliation Letter', category: 'Affiliation' },
    { id: 3, title: 'Grievance Redressal Committee', category: 'Statutory' },
    { id: 4, title: 'Internal Complaint Committee (ICC)', category: 'Statutory' },
    { id: 5, title: 'SC/ST Committee Details', category: 'Statutory' },
    { id: 6, title: 'Audited Financial Statements 2023-24', category: 'Finance' },
    { id: 7, title: 'IQAC Annual Report', category: 'Quality' },
    { id: 8, title: 'Student Grievance Submission Portal', category: 'Services', external: true },
];

export default function MandatoryDisclosuresPage() {
    const { rti, antiRagging } = statutoryInfo;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="w-20 h-20 bg-blue-900 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-900/20">
                        <Scale className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Mandatory <span className="gradient-text">Disclosures</span></h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Transparency and regulatory compliance in accordance with AICTE, JNTUA, and Government of Andhra Pradesh guidelines.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main List */}
                    <div className="lg:col-span-2 space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-8">
                            <FileText className="text-blue-600" />
                            Statutory Documents
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {disclosures.map((doc) => (
                                <div key={doc.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-1 rounded">
                                            {doc.category}
                                        </span>
                                        {doc.external ? (
                                            <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-blue-500" />
                                        ) : (
                                            <Download className="w-4 h-4 text-gray-300 group-hover:text-blue-500" />
                                        )}
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">{doc.title}</h3>
                                    <button className="text-sm font-bold text-blue-600 flex items-center gap-2">
                                        {doc.external ? 'Access Portal' : 'Download PDF'}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* RTI Section */}
                        <div className="bg-blue-900 rounded-3xl p-8 text-white relative overflow-hidden">
                            <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                            <div className="relative z-10">
                                <Shield className="w-10 h-10 text-blue-300 mb-6" />
                                <h3 className="text-2xl font-bold mb-4">{rti.title}</h3>
                                <p className="text-blue-200 text-sm leading-relaxed mb-6">
                                    {rti.description}
                                </p>
                                <button className="w-full bg-white text-blue-900 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                                    <Download className="w-4 h-4" /> Download Act Info
                                </button>
                            </div>
                        </div>

                        {/* Anti-Ragging Section */}
                        <div className="bg-white rounded-3xl p-8 shadow-xl border border-red-50 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-2 h-full bg-red-500" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{antiRagging.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    {antiRagging.description}
                                </p>
                                <div className="space-y-3 bg-red-50 p-4 rounded-2xl border border-red-100">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold text-red-600 uppercase">Toll Free Helpline</span>
                                        <span className="text-lg font-black text-gray-900">{antiRagging.tollFree}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold text-red-600 uppercase">Email Support</span>
                                        <span className="text-sm font-bold text-gray-900">{antiRagging.email}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Info Note */}
                        <div className="bg-amber-50 rounded-3xl p-6 border border-amber-100 flex gap-4">
                            <Info className="w-6 h-6 text-amber-600 flex-shrink-0" />
                            <p className="text-sm text-amber-800 font-medium">
                                For archival data older than 3 years, please submit a written request to the Administrative Office.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
