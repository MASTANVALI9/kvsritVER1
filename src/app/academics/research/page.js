import { Microscope, Lightbulb, Target } from 'lucide-react';

export default function ResearchPage() {
    return (
        <div className="bg-white">
            <div className="bg-blue-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-4">Research and Development Cell</h1>
                    <p className="text-blue-100 text-lg max-w-2xl">
                        fostering innovation and interdisciplinary research.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">

                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Research Policy</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            The Research and Development Cell is responsible for the formulation of the overall guidelines related to research and publication. The cell undertakes research projects on multi-disciplinary aspects including Strategy, General Management, Entrepreneurship, and Innovation. The Committee meets twice in an academic year.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <Target className="w-6 h-6 text-blue-600" />
                                Primary Functions
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "To identify the potential areas of research in various disciplines.",
                                    "To prepare the proposals in order to apply for funded projects.",
                                    "To encourage multi-disciplinary research within the institute and externally with other organizations.",
                                    "To identify the research areas and divide the faculty into research clusters based on their specialization.",
                                    "Identify the area of research and encourage the staff to attend the conferences in their specialized areas."
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                                        <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">
                                            {i + 1}
                                        </span>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Lightbulb className="w-6 h-6 text-yellow-500" />
                                    Focus Areas
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    We actively encourage research in emerging technologies and sustainable solutions. Our faculty and students work together on publications, patent filings, and industrial projects.
                                </p>
                                <div className="space-y-4">
                                    <div className="p-4 bg-white rounded-xl shadow-sm">
                                        <h4 className="font-semibold text-gray-900">CSE Faculty Publications</h4>
                                        <p className="text-sm text-gray-500">Research in AI, ML, Data Science, and more.</p>
                                    </div>
                                    <div className="p-4 bg-white rounded-xl shadow-sm">
                                        <h4 className="font-semibold text-gray-900">ECE Faculty Publications</h4>
                                        <p className="text-sm text-gray-500">Research in VLSI, Embedded Systems, and IoT.</p>
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
