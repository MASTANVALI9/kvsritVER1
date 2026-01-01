import { qualityAssurance } from '@/lib/data';
import { ShieldCheck, Target, Users, FileText, CheckCircle2, TrendingUp } from 'lucide-react';

export const metadata = {
    title: "IQAC | KVSRIT",
    description: "Internal Quality Assurance Cell (IQAC) at Dr. K.V. Subba Reddy Institute of Technology."
};

export default function IQACPage() {
    const { iqac, naac, nba } = qualityAssurance;

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-gradient-to-r from-gray-900 to-indigo-900 text-white py-24 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 px-4 py-2 rounded-full border border-blue-500/30 mb-6">
                        <ShieldCheck className="w-5 h-5 text-blue-400" />
                        <span className="text-blue-200 font-semibold uppercase tracking-wider text-xs">Quality Assurance</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">IQAC</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Internal Quality Assurance Cell: Ensuring academic and administrative excellence through continuous quality improvement.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16">
                {/* Accreditation Badges */}
                <div className="grid md:grid-cols-2 gap-8 mb-24 -mt-32">
                    <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 flex items-center gap-8 group hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-600 rounded-2xl flex items-center justify-center text-white text-3xl font-black shadow-lg">
                            NAAC
                        </div>
                        <div>
                            <div className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-1">Accreditation</div>
                            <h3 className="text-3xl font-black text-gray-900">Grade {naac.grade}</h3>
                            <p className="text-gray-500">CGPA: {naac.cgpa} | {naac.cycle}</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 flex items-center gap-8 group hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-800 rounded-2xl flex items-center justify-center text-white text-3xl font-black shadow-lg">
                            NBA
                        </div>
                        <div>
                            <div className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-1">Affiliation</div>
                            <h3 className="text-2xl font-black text-gray-900">Accredited Depts</h3>
                            <p className="text-gray-500">{nba.departments[0]}</p>
                        </div>
                    </div>
                </div>

                {/* Vision & Mission */}
                <div className="grid lg:grid-cols-2 gap-12 mb-24">
                    <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-10 border border-blue-100 relative overflow-hidden">
                        <Target className="absolute -bottom-8 -right-8 w-48 h-48 text-blue-500/5 rotate-12" />
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                                <TrendingUp className="text-white w-6 h-6" />
                            </div>
                            IQAC Vision
                        </h2>
                        <p className="text-xl text-gray-700 leading-relaxed font-medium">
                            {iqac.vision}
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-xl">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-4">
                            <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                                <Users className="text-white w-6 h-6" />
                            </div>
                            Committee Members
                        </h2>
                        <div className="space-y-4">
                            <div className="p-4 bg-gray-50 rounded-2xl flex justify-between items-center border border-gray-100">
                                <span className="font-bold text-gray-900">Chairperson</span>
                                <span className="text-blue-600 font-medium font-semibold">Dr. Subba Reddy Borra (Principal)</span>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-2xl flex justify-between items-center border border-gray-100">
                                <span className="font-bold text-gray-900">Coordinator</span>
                                <span className="text-blue-600 font-medium font-semibold">Senior Faculty Member</span>
                            </div>
                            <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                                The committee comprises representatives from management, faculty, administration, local society, alumni, and industry partners.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Functions */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-gray-900 mb-4">Core <span className="gradient-text">Functions</span></h2>
                        <p className="text-gray-500 text-lg">Systematic efforts towards quality enhancement at the institutional level.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {iqac.functions.map((func, i) => (
                            <div key={i} className="flex gap-6 p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300">
                                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <CheckCircle2 className="w-6 h-6 text-blue-600" />
                                </div>
                                <p className="text-gray-700 font-medium leading-relaxed">{func}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* IQAC Files/Reports Section placeholder */}
                <div className="bg-gray-900 rounded-[3rem] p-12 text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[100px]" />
                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-black mb-4">Reports & Documents</h2>
                            <p className="text-gray-400 text-lg max-w-xl">
                                Access Annual Quality Assurance Reports (AQAR), Meeting Minutes, and Quality Initiatives documentation.
                            </p>
                        </div>
                        <button className="bg-white text-gray-900 px-10 py-5 rounded-full font-black text-lg hover:bg-blue-50 transition-colors flex items-center gap-3">
                            <FileText className="w-6 h-6" />
                            View Repository
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
