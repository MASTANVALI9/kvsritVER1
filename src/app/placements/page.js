import Link from 'next/link';
import {
    TrendingUp,
    Building2,
    ArrowRight,
    Briefcase,
    DollarSign,
    BarChart3,
    Target,
    CheckCircle,
    Star
} from 'lucide-react';

export const metadata = {
    title: "Placements & Career Services",
    description: "Explore placement statistics, top recruiters, and career opportunities at KVSRIT."
};

const placementStats = [
    { label: 'Placement Rate', value: '95%', icon: TrendingUp, color: 'from-emerald-500 to-teal-400' },
    { label: 'Highest Package', value: '₹18 LPA', icon: DollarSign, color: 'from-amber-500 to-orange-400' },
    { label: 'Average Package', value: '₹5.2 LPA', icon: BarChart3, color: 'from-blue-500 to-cyan-400' },
    { label: 'Companies Visiting', value: '100+', icon: Building2, color: 'from-purple-500 to-pink-400' },
];

const topRecruiters = [
    { name: 'TCS', category: 'IT Services' },
    { name: 'Infosys', category: 'IT Services' },
    { name: 'Wipro', category: 'IT Services' },
    { name: 'Tech Mahindra', category: 'IT Services' },
    { name: 'Cognizant', category: 'IT Services' },
    { name: 'HCL', category: 'IT Services' },
    { name: 'Capgemini', category: 'Consulting' },
    { name: 'Accenture', category: 'Consulting' },
    { name: 'Amazon', category: 'Product' },
    { name: 'Zoho', category: 'Product' },
    { name: 'L&T', category: 'Core' },
    { name: 'Ashok Leyland', category: 'Core' },
];

const successStories = [
    {
        name: 'Sai Krishna',
        role: 'Software Engineer at Amazon',
        batch: '2024',
        package: '₹18 LPA',
        quote: 'KVSRIT provided excellent placement training and support. The mock interviews were incredibly helpful.',
        department: 'Computer Science'
    },
    {
        name: 'Priya Sharma',
        role: 'Data Analyst at TCS',
        batch: '2024',
        package: '₹6.5 LPA',
        quote: 'The placement cell arranged multiple opportunities. I got placed in my dream company!',
        department: 'Information Technology'
    },
    {
        name: 'Rahul Reddy',
        role: 'Design Engineer at L&T',
        batch: '2023',
        package: '₹7 LPA',
        quote: 'The practical exposure during internships made me industry-ready from day one.',
        department: 'Mechanical Engineering'
    },
];

const placementProcess = [
    { step: 1, title: 'Pre-Placement Training', description: 'Aptitude, communication, and technical skills training' },
    { step: 2, title: 'Resume Building', description: 'Professional resume and portfolio development' },
    { step: 3, title: 'Mock Interviews', description: 'Practice sessions with industry experts' },
    { step: 4, title: 'Company Registrations', description: 'Apply to visiting companies' },
    { step: 5, title: 'Campus Drives', description: 'Participate in recruitment drives' },
    { step: 6, title: 'Offer Letters', description: 'Receive and accept job offers' },
];

const careerServices = [
    { title: 'Career Counseling', description: 'One-on-one guidance for career planning' },
    { title: 'Industry Internships', description: 'Hands-on experience with leading companies' },
    { title: 'Skill Development', description: 'Workshops on emerging technologies' },
    { title: 'Entrepreneurship Cell', description: 'Support for aspiring entrepreneurs' },
];

export default function PlacementsPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500 rounded-full filter blur-[128px]" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-[128px]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center">
                            <Briefcase className="w-8 h-8" />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold">Placements & Careers</h1>
                            <p className="text-emerald-200 mt-1">Your gateway to a successful career</p>
                        </div>
                    </div>
                    <p className="text-lg text-emerald-100 max-w-3xl">
                        KVSRIT maintains an excellent placement record with top companies recruiting our students year after year. Our Training & Placement Cell ensures every student is industry-ready.
                    </p>
                </div>
            </div>

            {/* Placement Statistics */}
            <section className="py-16 bg-white relative -mt-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {placementStats.map((stat, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl p-8 shadow-xl shadow-gray-100/50 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <stat.icon className="h-7 w-7 text-white" />
                                </div>
                                <div className="text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
                                <p className="text-gray-500 font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Top Recruiters */}
            <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-emerald-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
                            Our Partners
                        </span>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Top <span className="gradient-text">Recruiters</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Leading companies trust KVSRIT for quality talent.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {topRecruiters.map((company, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 shadow-lg shadow-gray-100/50 border border-gray-100 hover:shadow-xl hover:border-emerald-200 transition-all duration-300 text-center group"
                            >
                                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl flex items-center justify-center group-hover:from-emerald-100 group-hover:to-teal-50 transition-colors">
                                    <Building2 className="w-8 h-8 text-gray-400 group-hover:text-emerald-600 transition-colors" />
                                </div>
                                <h3 className="font-bold text-gray-900">{company.name}</h3>
                                <p className="text-xs text-gray-500">{company.category}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Placement Process */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
                            How It Works
                        </span>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Placement <span className="gradient-text">Process</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {placementProcess.map((item, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                                    {item.step}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories */}
            <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            Success <span className="gradient-text">Stories</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Hear from our alumni who are making their mark in the industry.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {successStories.map((story, index) => (
                            <div key={index} className="glass rounded-2xl p-8 hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-gray-300 mb-6 italic">&quot;{story.quote}&quot;</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-lg">
                                        {story.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <p className="font-bold">{story.name}</p>
                                        <p className="text-sm text-emerald-300">{story.role}</p>
                                        <p className="text-xs text-gray-400">{story.department} | Batch {story.batch}</p>
                                    </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-white/10">
                                    <span className="text-emerald-400 font-bold">{story.package}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Career Services */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">
                                Beyond Placements
                            </span>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Career <span className="gradient-text">Services</span>
                            </h2>
                            <p className="text-xl text-gray-600 mb-8">
                                Our Training & Placement Cell offers comprehensive career support services to help students achieve their professional goals.
                            </p>
                            <div className="space-y-4">
                                {careerServices.map((service, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <h3 className="font-bold text-gray-900">{service.title}</h3>
                                            <p className="text-gray-600 text-sm">{service.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-10 text-white">
                            <Target className="w-12 h-12 mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Ready to Launch Your Career?</h3>
                            <p className="text-emerald-100 mb-8">
                                Connect with our placement cell for guidance, training schedules, and upcoming recruitment drives.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold hover:bg-emerald-50 transition-colors"
                            >
                                Contact Placement Cell <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
