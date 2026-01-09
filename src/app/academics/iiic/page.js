import { Handshake, Factory, GraduationCap } from 'lucide-react';

export default function IIICPage() {
    return (
        <div className="bg-white">
            <div className="bg-blue-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-4">Industry Institute Interaction Cell</h1>
                    <p className="text-blue-100 text-lg max-w-2xl">
                        Bridging the gap between academia and industry.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Objectives</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                The Industry Institute Interaction Cell (IIIC) works to reduce the gap between the industry and the institute. It fosters regular interaction between academia and industry experts to prepare students for the professional world.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-gray-700">
                                    <Handshake className="w-5 h-5 text-blue-600" />
                                    <span>Facilitating internships and industrial visits.</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <Factory className="w-5 h-5 text-blue-600" />
                                    <span>Collaborative research and consultancy projects.</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <GraduationCap className="w-5 h-5 text-blue-600" />
                                    <span>Conducting guest lectures by industry experts.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Partners</h3>
                            <p className="text-gray-500 mb-4">We collaborate with leading companies to provide real-world exposure to our students.</p>
                            {/* Placeholder for Logos */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="h-16 bg-white rounded-lg shadow-sm flex items-center justify-center text-gray-400 font-medium">Company A</div>
                                <div className="h-16 bg-white rounded-lg shadow-sm flex items-center justify-center text-gray-400 font-medium">Company B</div>
                                <div className="h-16 bg-white rounded-lg shadow-sm flex items-center justify-center text-gray-400 font-medium">Company C</div>
                                <div className="h-16 bg-white rounded-lg shadow-sm flex items-center justify-center text-gray-400 font-medium">Company D</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
