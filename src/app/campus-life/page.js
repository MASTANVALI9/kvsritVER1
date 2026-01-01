import Link from 'next/link';
import {
    Users,
    Music,
    Trophy,
    Palette,
    Camera,
    Code,
    Heart,
    Sparkles,
    ArrowRight,
    Quote,
    Globe
} from 'lucide-react';
import { professionalChapters } from '@/lib/data';

export const metadata = {
    title: "Campus Life",
    description: "Discover vibrant campus life at KVSRIT - student clubs, cultural events, sports, and recreation activities."
};

const clubs = [
    {
        name: 'Tech Club',
        description: 'Explore cutting-edge technologies, hackathons, and coding competitions.',
        icon: Code,
        members: 120,
        color: 'from-blue-500 to-cyan-400'
    },
    {
        name: 'Cultural Club',
        description: 'Celebrate art, dance, music, and theatrical performances.',
        icon: Music,
        members: 200,
        color: 'from-purple-500 to-pink-400'
    },
    {
        name: 'Sports Club',
        description: 'Cricket, football, basketball, athletics and more.',
        icon: Trophy,
        members: 180,
        color: 'from-emerald-500 to-teal-400'
    },
    {
        name: 'Art & Design',
        description: 'Photography, painting, graphic design and creative arts.',
        icon: Palette,
        members: 80,
        color: 'from-amber-500 to-orange-400'
    },
    {
        name: 'Photography Club',
        description: 'Capture moments, learn techniques, and showcase your work.',
        icon: Camera,
        members: 60,
        color: 'from-rose-500 to-red-400'
    },
    {
        name: 'NSS & Social Service',
        description: 'Contribute to society through community service activities.',
        icon: Heart,
        members: 150,
        color: 'from-indigo-500 to-violet-400'
    },
];

const events = [
    {
        title: 'Annual Tech Fest',
        description: 'The biggest technical extravaganza featuring robotics, coding contests, and innovation showcases.',
        date: 'February 2025',
        image: '/images/events/techfest.jpg'
    },
    {
        title: 'Cultural Fest - Utsav',
        description: 'A celebration of art, music, dance, and drama from across the country.',
        date: 'March 2025',
        image: '/images/events/cultural.jpg'
    },
    {
        title: 'Sports Week',
        description: 'Inter-college tournaments in cricket, football, basketball, and athletics.',
        date: 'January 2025',
        image: '/images/events/sports.jpg'
    },
];

const testimonials = [
    {
        quote: "The campus life at KVSRIT has been transformative. The clubs and activities helped me discover my passion for robotics.",
        name: "Rahul Sharma",
        role: "B.Tech CSE, 2024",
        avatar: "RS"
    },
    {
        quote: "Being part of the cultural club gave me confidence and lifelong friendships. The faculty support is incredible.",
        name: "Priya Reddy",
        role: "B.Tech ECE, 2023",
        avatar: "PR"
    },
    {
        quote: "From hackathons to placement drives, KVSRIT prepared me for the industry. Best decision of my life!",
        name: "Arun Kumar",
        role: "B.Tech IT, 2024",
        avatar: "AK"
    },
];

const facilities = [
    { name: 'Modern Library', description: 'Digital resources & quiet study zones' },
    { name: 'Sports Complex', description: 'Indoor & outdoor sports facilities' },
    { name: 'Cafeteria', description: 'Healthy food options available' },
    { name: 'Wi-Fi Campus', description: 'High-speed internet everywhere' },
    { name: 'Hostels', description: 'Comfortable & secure accommodation' },
    { name: 'Auditorium', description: 'State-of-the-art event venue' },
];

export default function CampusLifePage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-[128px]" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[128px]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur text-sm font-medium mb-6">
                        <Sparkles size={16} className="text-yellow-400" />
                        Beyond Academics
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Vibrant <span className="gradient-text">Campus Life</span>
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                        Experience a holistic journey of growth, creativity, and lifelong friendships at KVSRIT.
                    </p>
                </div>
            </div>

            {/* Student Clubs */}
            <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">
                            Get Involved
                        </span>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Student <span className="gradient-text">Clubs & Organizations</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Join vibrant communities that match your interests and passions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {clubs.map((club, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl p-8 shadow-lg shadow-gray-100/50 border border-gray-100 hover:shadow-xl hover:shadow-purple-100/50 transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${club.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <club.icon className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{club.name}</h3>
                                <p className="text-gray-600 mb-4">{club.description}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500 flex items-center gap-1">
                                        <Users size={14} /> {club.members}+ members
                                    </span>
                                    <button className="text-blue-600 font-medium text-sm hover:text-blue-700 flex items-center gap-1">
                                        Join <ArrowRight size={14} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Professional Chapters */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/3">
                            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
                                Professional Growth
                            </span>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-display">
                                Professional <span className="gradient-text">Chapters</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Join world-renowned technical societies and build a global professional network while still on campus.
                            </p>
                            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-3xl text-white shadow-xl shadow-blue-500/20">
                                <h4 className="text-xl font-bold mb-4">Why Join?</h4>
                                <ul className="space-y-3">
                                    {['Global Certification', 'Access to Digital Libraries', 'Leadership Opportunities', 'Industrial Exposure'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-blue-100">
                                            <div className="w-1.5 h-1.5 bg-blue-300 rounded-full" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="lg:w-2/3 grid sm:grid-cols-2 gap-4">
                            {professionalChapters.map((chapter) => (
                                <div key={chapter.id} className="bg-gray-50 border border-gray-100 p-6 rounded-3xl hover:bg-white hover:shadow-xl transition-all group">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-blue-600 transition-colors">
                                            <Globe className="w-6 h-6 text-blue-600 group-hover:text-white" />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-tighter text-blue-500">Official Student Branch</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{chapter.name}</h3>
                                    <p className="text-sm text-gray-500 mb-4 line-clamp-2">{chapter.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {chapter.activities.slice(0, 2).map((act, i) => (
                                            <span key={i} className="px-2 py-1 bg-white border border-gray-100 rounded-lg text-[10px] font-bold text-gray-400">
                                                {act}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Events Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">
                            Celebrations
                        </span>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Signature <span className="gradient-text">Events</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Experience unforgettable moments throughout the academic year.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {events.map((event, index) => (
                            <div key={index} className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                                <div className="h-64 bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center">
                                    <span className="text-6xl">🎉</span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <span className="text-sm font-medium text-blue-300 mb-2 block">{event.date}</span>
                                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                                    <p className="text-gray-300 text-sm line-clamp-2">{event.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            href="/events"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-1"
                        >
                            View All Events <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Campus Facilities */}
            <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            World-Class <span className="gradient-text">Facilities</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Everything you need for a comfortable and productive campus experience.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {facilities.map((facility, index) => (
                            <div key={index} className="glass rounded-xl p-6 hover:bg-white/10 transition-colors">
                                <h3 className="text-lg font-bold mb-2">{facility.name}</h3>
                                <p className="text-gray-400 text-sm">{facility.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
                            Student Voices
                        </span>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            What Our <span className="gradient-text">Students Say</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg shadow-gray-100/50 border border-gray-100">
                                <Quote className="w-10 h-10 text-blue-200 mb-4" />
                                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
