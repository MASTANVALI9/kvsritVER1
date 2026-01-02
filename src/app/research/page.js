import Link from 'next/link';
import {
    Lightbulb,
    Award,
    ArrowRight,
    ExternalLink,
    FileText,
    Microscope,
    Cpu,
    Globe,
    Zap
} from 'lucide-react';

export const metadata = {
    title: "Research & Innovation",
    description: "Discover groundbreaking research and innovation at KVSRIT. Explore our research areas, student projects, and publications."
};

const researchAreas = [
    {
        title: 'Artificial Intelligence & ML',
        description: 'Deep learning, NLP, computer vision, and intelligent systems research.',
        icon: Cpu,
        projects: 15,
        color: 'from-blue-500 to-cyan-400'
    },
    {
        title: 'Internet of Things',
        description: 'Smart systems, sensor networks, and embedded computing solutions.',
        icon: Globe,
        projects: 12,
        color: 'from-purple-500 to-pink-400'
    },
    {
        title: 'Renewable Energy',
        description: 'Solar power systems, energy efficiency, and sustainable technologies.',
        icon: Zap,
        projects: 8,
        color: 'from-emerald-500 to-teal-400'
    },
    {
        title: 'Biotechnology',
        description: 'Biomedical devices, healthcare technology, and life sciences.',
        icon: Microscope,
        projects: 10,
        color: 'from-rose-500 to-red-400'
    },
];

const featuredProjects = [
    {
        title: 'Smart Campus IoT System',
        description: 'An integrated IoT system for monitoring campus utilities, security, and environment.',
        department: 'Computer Science',
        team: 'Final Year B.Tech',
        status: 'Completed',
        award: 'Best Project Award 2024'
    },
    {
        title: 'AI-Powered Crop Disease Detection',
        description: 'Using deep learning to identify crop diseases from images for early intervention.',
        department: 'CSE (AI/ML)',
        team: 'Research Team',
        status: 'Ongoing',
        award: null
    },
    {
        title: 'Solar-Powered E-Vehicle',
        description: 'Design and development of a solar-assisted electric vehicle prototype.',
        department: 'Mechanical & EEE',
        team: 'Interdisciplinary Team',
        status: 'Prototype Ready',
        award: 'Innovation Award 2023'
    },
];

const publications = [
    {
        title: 'Deep Learning Approaches for Medical Image Analysis',
        authors: 'Dr. A. Suresh, Dr. B. Ramesh',
        journal: 'International Journal of Computer Science',
        year: 2024
    },
    {
        title: 'IoT-Based Smart Agriculture System',
        authors: 'Prof. C. Krishna, Research Team',
        journal: 'IEEE Conference on Emerging Technologies',
        year: 2024
    },
    {
        title: 'Renewable Energy Integration in Smart Grids',
        authors: 'Dr. D. Srinivas, Dr. E. Venkat',
        journal: 'Journal of Sustainable Energy',
        year: 2023
    },
];

const stats = [
    { label: 'Research Papers', value: '150+' },
    { label: 'Patents Filed', value: '12' },
    { label: 'Research Projects', value: '45+' },
    { label: 'Industry Collaborations', value: '20+' },
];

export default function ResearchPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full filter blur-[128px]" />
                    <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-[128px]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center">
                            <Lightbulb className="w-8 h-8 text-yellow-400" />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold">Research & Innovation</h1>
                            <p className="text-purple-200 mt-1">Pushing the boundaries of knowledge</p>
                        </div>
                    </div>
                    <p className="text-lg text-purple-100 max-w-3xl">
                        At KVSRIT, we foster a culture of innovation and research excellence. Our faculty and students work on cutting-edge projects that address real-world challenges.
                    </p>

                    {/* Stats Row */}
                    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <div key={index} className="glass rounded-xl p-6 text-center">
                                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-purple-200 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Research Areas */}
            <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-4">
                            Our Focus
                        </span>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Research <span className="gradient-text">Areas</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Explore the diverse domains where our researchers are making an impact.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {researchAreas.map((area, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl p-8 shadow-lg shadow-gray-100/50 border border-gray-100 hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <area.icon className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                                <p className="text-gray-600 mb-4 text-sm">{area.description}</p>
                                <span className="text-sm text-indigo-600 font-medium">{area.projects} Active Projects</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">
                            Showcase
                        </span>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Featured <span className="gradient-text">Projects</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Highlighting innovative work by our students and faculty.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {featuredProjects.map((project, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                                <div className="h-48 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                                    <Lightbulb className="w-16 h-16 text-indigo-300 group-hover:text-indigo-500 transition-colors" />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${project.status === 'Completed' ? 'bg-green-100 text-green-700' :
                                            project.status === 'Ongoing' ? 'bg-blue-100 text-blue-700' :
                                                'bg-amber-100 text-amber-700'
                                            }`}>
                                            {project.status}
                                        </span>
                                        {project.award && (
                                            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 flex items-center gap-1">
                                                <Award size={10} /> Award Winner
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-500">{project.department}</span>
                                        <span className="text-indigo-600 font-medium">{project.team}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Publications */}
            <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            Recent <span className="gradient-text">Publications</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Our faculty actively contributes to academic journals and conferences.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {publications.map((pub, index) => (
                            <div key={index} className="glass rounded-xl p-6 hover:bg-white/10 transition-colors flex items-start gap-6">
                                <div className="w-12 h-12 bg-indigo-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <FileText className="w-6 h-6 text-indigo-300" />
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-lg font-bold mb-1">{pub.title}</h3>
                                    <p className="text-gray-400 text-sm mb-2">{pub.authors}</p>
                                    <div className="flex items-center gap-4 text-sm">
                                        <span className="text-indigo-300">{pub.journal}</span>
                                        <span className="text-gray-500">{pub.year}</span>
                                    </div>
                                </div>
                                <button className="text-indigo-400 hover:text-white transition-colors">
                                    <ExternalLink size={20} />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            href="#"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-indigo-900 font-semibold hover:bg-indigo-100 transition-colors"
                        >
                            View All Publications <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Interested in Research Collaboration?
                    </h2>
                    <p className="text-xl text-indigo-100 mb-8">
                        We welcome industry partners, startups, and academic institutions for collaborative research projects.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-indigo-700 font-semibold hover:bg-indigo-50 transition-colors"
                        >
                            Get in Touch <ArrowRight size={18} />
                        </Link>
                        <Link
                            href="/faculty"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
                        >
                            Meet Our Researchers
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
