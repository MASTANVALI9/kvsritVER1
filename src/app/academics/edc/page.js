import { Rocket, Users, TrendingUp } from 'lucide-react';

export default function EDCPage() {
    return (
        <div className="bg-white">
            <div className="bg-blue-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-4">Entrepreneurship Development Cell</h1>
                    <p className="text-blue-100 text-lg max-w-2xl">
                        Transforming innovative ideas into successful ventures.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">

                    <div className="prose prose-lg text-gray-600 max-w-none mb-12">
                        <p>
                            The Entrepreneurship Development Cell is established in the institution for the purpose to develop institutional mechanism and to create awareness about the Entrepreneurship amongst the faculty and students. Throughout the nation’s history, entrepreneurship has served a critical role in driving economic growth.
                        </p>
                        <p>
                            Today, entrepreneurship is often associated with technology start-ups that launch into global companies. The Committee meets once in academic year.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-900">Primary Functions</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-4">
                                    <Rocket className="w-6 h-6 text-blue-600 flex-shrink-0" />
                                    <span className="text-gray-700">The aim of Entrepreneurship Development Cell (EDC) at KVSRIT, is to develop and strengthen entrepreneurial qualities in the budding professionals who are interested in starting their own ventures.</span>
                                </li>
                                <li className="flex gap-4">
                                    <TrendingUp className="w-6 h-6 text-green-600 flex-shrink-0" />
                                    <span className="text-gray-700">The College provides infrastructure and technical support to the students having innovative ideas to transform into new products and services for the betterment of the society.</span>
                                </li>
                                <li className="flex gap-4">
                                    <Users className="w-6 h-6 text-purple-600 flex-shrink-0" />
                                    <span className="text-gray-700">The EDC also assists all the aspirants with mentoring, planning and execution of their start up idea into a real business.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Support Ecosystem</h3>
                            <p className="text-gray-600 mb-6">
                                The EDC has maintained a pool of Sponsors like banks, national entrepreneurship training agencies and suppliers, who are willing to aid budding entrepreneurs.
                            </p>
                            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                Submit Your Startup Idea
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
