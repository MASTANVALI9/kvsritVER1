import { leadership } from '@/lib/data';
import { Award, BookOpen, GraduationCap, Quote } from 'lucide-react';

export const metadata = {
    title: "Leadership | KVSRIT",
    description: "Meet the visionary leadership behind Dr. K.V. Subba Reddy Institute of Technology."
};

export default function LeadershipPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Header */}
            <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                        Our <span className="gradient-text">Leadership</span>
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        The visionary minds guiding KVSRIT towards excellence in technical education and institutional growth.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 space-y-24 pb-24">
                {leadership.map((leader, index) => (
                    <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center lg:items-start`}>
                        {/* Image Card */}
                        <div className="w-full lg:w-1/3">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
                                    <div className="aspect-[4/5] bg-gray-200 flex items-center justify-center">
                                        {/* Placeholder for leader image */}
                                        <GraduationCap className="w-32 h-32 text-blue-200" />
                                    </div>
                                    <div className="p-6 bg-gradient-to-br from-white to-blue-50">
                                        <h2 className="text-2xl font-bold text-gray-900">{leader.name}</h2>
                                        <p className="text-blue-600 font-semibold">{leader.role}</p>
                                        {leader.credentials && <p className="text-gray-500 text-sm">{leader.credentials}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Card */}
                        <div className="w-full lg:w-2/3">
                            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 h-full">
                                <div className="flex items-start gap-4 mb-8">
                                    <Quote className="w-12 h-12 text-blue-100 flex-shrink-0" />
                                    <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed font-medium">
                                        {leader.message}
                                    </p>
                                </div>

                                <div className="border-t border-gray-100 pt-8 mt-8">
                                    <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Designation</h3>
                                    <p className="text-gray-600 text-lg mb-8">{leader.designation}</p>

                                    {leader.achievements && (
                                        <>
                                            <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Professional Highlights</h3>
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                {leader.achievements.map((item, i) => (
                                                    <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                                        <Award className="w-5 h-5 text-indigo-600" />
                                                        <span className="text-gray-700 font-medium">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Philosophy Section */}
            <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
                        <BookOpen className="w-8 h-8 text-blue-600" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">Guided by <span className="gradient-text">Values</span></h2>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                        Our leadership team brings together decades of academic experience and administrative excellence. At KVSRIT, we are not just building engineers; we are cultivating global citizens who lead with integrity and innovate for a better world.
                    </p>
                </div>
            </section>
        </div>
    );
}
