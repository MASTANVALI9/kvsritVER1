import { ShieldCheck, FileText, ChevronRight } from 'lucide-react';

export default function PoliciesPage() {
    const policies = [
        { title: "IQAC Policy", link: "https://drkvsrit.ac.in/iqac-policy/index.html" },
        { title: "Research Policy", link: "https://drkvsrit.ac.in/research-policy/index.html" },
        { title: "Consultancy Policy", link: "https://drkvsrit.ac.in/consultancy-policy/index.html" },
        { title: "Academic Policy", link: "https://drkvsrit.ac.in/academic-policy/index.html" },
        { title: "Document Retention Policy", link: "https://drkvsrit.ac.in/wp-content/uploads/2020/09/UGC-Public-Notice-Non-Retention-of-certificates-of-Teachers-1.pdf" },
        { title: "Best Practices", link: "https://drkvsrit.ac.in/policies/Best%20Practices.pdf" },
        { title: "Institutional Distinctiveness", link: "https://drkvsrit.ac.in/policies/Institutional%20Distinctiveness.pdf" },
        { title: "Total Code", link: "https://drkvsrit.ac.in/policies/Total%20Code.pdf" },
    ];

    return (
        <div className="bg-white">
            <div className="bg-blue-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-4">Institutional Policies</h1>
                    <p className="text-blue-100 text-lg max-w-2xl">
                        Guidelines and frameworks governing the institution's operations and standards.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">

                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                            <ShieldCheck className="w-6 h-6 text-blue-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Policy Documents</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {policies.map((policy, index) => (
                            <a
                                key={index}
                                href={policy.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100 hover:bg-white hover:shadow-md hover:border-blue-200 transition-all group"
                            >
                                <div className="flex items-center gap-3">
                                    <FileText className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
                                    <span className="font-medium text-gray-700 group-hover:text-gray-900">{policy.title}</span>
                                </div>
                                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                            </a>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}
