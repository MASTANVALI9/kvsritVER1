import { ArrowRight, GraduationCap, Users, Heart, Award, MapPin } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: "Alumni | KVSRIT",
    description: "Join the KVSRIT Alumni network and stay connected with your alma mater."
};

export default function AlumniPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden bg-gray-900">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/60 z-10" />
                    <div className="w-full h-full bg-indigo-900 animate-pulse-glow opacity-50" />
                </div>

                <div className="relative z-20 text-center px-4 max-w-4xl">
                    <GraduationCap className="w-20 h-20 text-blue-400 mx-auto mb-8 animate-bounce-slow" />
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">Forever <span className="gradient-text">KVSRITian</span></h1>
                    <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed">
                        A global network of achievers, innovators, and leaders. Reconnect with your legacy and empower the next generation.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-24">
                {/* Registration Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
                    <div>
                        <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-black uppercase tracking-wider mb-6">Alumni Association</span>
                        <h2 className="text-4xl font-black text-gray-900 mb-6 font-display leading-tight">Join the Global <span className="gradient-text">Alumni Network</span></h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Our alumni are our greatest ambassadors. By registering with the KVSRIT Alumni Association, you gain access to exclusive events, mentorship opportunities, and a community of professionals across the globe.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: Users, title: 'Professional Networking', desc: 'Connect with peers and leaders in your industry.' },
                                { icon: Heart, title: 'Mentorship Program', desc: 'Guide current students and shape future careers.' },
                                { icon: Award, title: 'Alumni Excellence Awards', desc: 'Get recognized for your professional achievements.' }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 group hover:shadow-lg transition-all">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                        <item.icon className="w-6 h-6 text-blue-600 group-hover:text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">{item.title}</h3>
                                        <p className="text-gray-500 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-indigo-600" />
                        <h3 className="text-2xl font-black text-gray-900 mb-8">Registration Form</h3>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <input type="text" placeholder="Full Name" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-500 outline-none" required />
                                <input type="email" placeholder="Email Address" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-500 outline-none" required />
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <input type="text" placeholder="Batch (e.g., 2018-2022)" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-500 outline-none" required />
                                <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-500 outline-none text-gray-500">
                                    <option>Department</option>
                                    <option>CSE</option>
                                    <option>ECE</option>
                                    <option>EEE</option>
                                    <option>Mechanical</option>
                                    <option>Civil</option>
                                </select>
                            </div>
                            <input type="text" placeholder="Current Company / University" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-500 outline-none" />
                            <button className="w-full py-5 rounded-2xl bg-gray-900 text-white font-black text-lg hover:bg-blue-600 transition-all flex items-center justify-center gap-3">
                                Register as Alumni <ArrowRight className="w-6 h-6" />
                            </button>
                            <p className="text-center text-xs text-gray-400">By registering, you agree to receive alumni updates and networking invites.</p>
                        </form>
                    </div>
                </div>

                {/* Global Impact placeholder */}
                <div className="bg-gradient-to-br from-indigo-900 to-blue-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-full opacity-10">
                        <MapPin className="w-full h-full -mr-48" />
                    </div>
                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Our Alumni are making a <span className="text-blue-400">Global Impact</span></h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { label: 'Countries', value: '15' },
                                { label: 'Fortune 500s', value: '45+' },
                                { label: 'Entrepreneurs', value: '100+' },
                                { label: 'Community', value: '5k+' }
                            ].map((stat, i) => (
                                <div key={i} className="glass p-6 rounded-3xl">
                                    <div className="text-4xl font-black mb-1">{stat.value}</div>
                                    <div className="text-xs font-bold text-blue-300 uppercase tracking-widest">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
