import Link from 'next/link';
import {
    BookOpen,
    Search,
    ExternalLink,
    Clock,
    Laptop,
    Newspaper,
    GraduationCap,
    ArrowRight,
    Globe,
    FileText,
    BookMarked,
    Database
} from 'lucide-react';

export const metadata = {
    title: "Library & E-Resources",
    description: "Access KVSRIT's digital library, e-journals, online databases, and learning resources."
};

const digitalResources = [
    {
        name: 'IEEE Xplore',
        description: 'Access to IEEE journals, conferences, and standards.',
        category: 'Journals',
        icon: FileText,
        color: 'from-blue-500 to-cyan-400',
        url: '#'
    },
    {
        name: 'Springer Link',
        description: 'E-books and journals in science and technology.',
        category: 'E-Books',
        icon: BookOpen,
        color: 'from-purple-500 to-pink-400',
        url: '#'
    },
    {
        name: 'NPTEL',
        description: 'Free online courses from IITs and IISc.',
        category: 'Video Lectures',
        icon: Laptop,
        color: 'from-amber-500 to-orange-400',
        url: 'https://nptel.ac.in'
    },
    {
        name: 'Coursera',
        description: 'Online courses from top universities worldwide.',
        category: 'Online Courses',
        icon: GraduationCap,
        color: 'from-blue-600 to-indigo-500',
        url: 'https://coursera.org'
    },
    {
        name: 'DELNET',
        description: 'Network of libraries for resource sharing.',
        category: 'Database',
        icon: Database,
        color: 'from-emerald-500 to-teal-400',
        url: '#'
    },
    {
        name: 'J-Gate',
        description: 'E-journal gateway with millions of articles.',
        category: 'Journals',
        icon: Globe,
        color: 'from-rose-500 to-red-400',
        url: '#'
    },
];

const libraryServices = [
    { title: 'Book Lending', description: 'Borrow books for up to 14 days', icon: BookOpen },
    { title: 'Reading Room', description: 'Quiet study space available 24/7', icon: Clock },
    { title: 'E-Resources', description: 'Access digital journals remotely', icon: Laptop },
    { title: 'Newspapers', description: 'Daily newspapers and magazines', icon: Newspaper },
];

const libraryStats = [
    { label: 'Total Books', value: '50,000+' },
    { label: 'E-Journals', value: '5,000+' },
    { label: 'Digital Titles', value: '10,000+' },
    { label: 'Seating Capacity', value: '500+' },
];

const quickLinks = [
    { name: 'OPAC Catalog Search', href: '#', icon: Search },
    { name: 'New Arrivals', href: '#', icon: BookMarked },
    { name: 'Previous Year Papers', href: '/academics/resources', icon: FileText },
    { name: 'Syllabus Downloads', href: '/academics/resources', icon: GraduationCap },
];

export default function LibraryPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 text-white py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500 rounded-full filter blur-[128px]" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500 rounded-full filter blur-[128px]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center">
                            <BookOpen className="w-8 h-8" />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold">Library & E-Resources</h1>
                            <p className="text-amber-200 mt-1">Your gateway to knowledge</p>
                        </div>
                    </div>
                    <p className="text-lg text-amber-100 max-w-3xl">
                        The KVSRIT Central Library is a state-of-the-art facility providing access to a vast collection of books, journals, and digital resources to support academic excellence.
                    </p>

                    {/* Stats */}
                    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                        {libraryStats.map((stat, index) => (
                            <div key={index} className="glass rounded-xl p-6 text-center">
                                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-amber-200 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quick Links */}
            <section className="py-12 bg-white relative -mt-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {quickLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="group flex items-center gap-4 bg-white rounded-xl p-6 shadow-lg shadow-gray-100/50 border border-gray-100 hover:shadow-xl hover:border-amber-200 transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                                    <link.icon className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
                                </div>
                                <span className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
                                    {link.name}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Digital Resources */}
            <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-amber-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">
                            Digital Access
                        </span>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            E-Resources & <span className="gradient-text">Databases</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Access premium journals, e-books, and online learning platforms from anywhere.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {digitalResources.map((resource, index) => (
                            <a
                                key={index}
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white rounded-2xl p-8 shadow-lg shadow-gray-100/50 border border-gray-100 hover:shadow-xl hover:shadow-amber-100/50 transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${resource.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <resource.icon className="h-7 w-7 text-white" />
                                    </div>
                                    <ExternalLink className="w-5 h-5 text-gray-300 group-hover:text-amber-500 transition-colors" />
                                </div>
                                <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
                                    {resource.category}
                                </span>
                                <h3 className="text-xl font-bold text-gray-900 mt-3 mb-2 group-hover:text-amber-600 transition-colors">
                                    {resource.name}
                                </h3>
                                <p className="text-gray-600 text-sm">{resource.description}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Library Services */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
                                Our Services
                            </span>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Library <span className="gradient-text">Facilities</span>
                            </h2>
                            <p className="text-xl text-gray-600 mb-8">
                                Our library offers a range of services to support your academic journey.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {libraryServices.map((service, index) => (
                                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
                                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                                            <service.icon className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">{service.title}</h3>
                                            <p className="text-gray-600 text-sm">{service.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Info Card */}
                        <div className="bg-gradient-to-br from-amber-600 to-orange-700 rounded-3xl p-10 text-white">
                            <Clock className="w-12 h-12 mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Library Hours</h3>
                            <div className="space-y-3 mb-8">
                                <div className="flex justify-between">
                                    <span className="text-amber-100">Monday - Friday</span>
                                    <span className="font-semibold">8:00 AM - 9:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-amber-100">Saturday</span>
                                    <span className="font-semibold">9:00 AM - 5:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-amber-100">Sunday</span>
                                    <span className="font-semibold">Closed</span>
                                </div>
                            </div>
                            <div className="pt-6 border-t border-white/20">
                                <p className="text-amber-100 text-sm mb-4">
                                    For library card inquiries and assistance, contact the librarian.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-amber-700 font-semibold hover:bg-amber-50 transition-colors"
                                >
                                    Contact Library <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Need Remote Access?</h2>
                    <p className="text-gray-400 mb-8">
                        Students and faculty can access e-resources remotely using their institutional login credentials.
                    </p>
                    <Link
                        href="/student-portal"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-amber-500 text-white font-semibold hover:bg-amber-400 transition-colors"
                    >
                        Go to Student Portal <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
