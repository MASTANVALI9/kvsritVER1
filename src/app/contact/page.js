import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    Building2,
    Users,
    MessageSquare,
    ArrowRight
} from 'lucide-react';

export const metadata = {
    title: "Contact Us",
    description: "Get in touch with KVSRIT. Find our address, phone numbers, email, and submit inquiries."
};

const departments = [
    { name: 'Admissions Office', phone: '+91 12345 67890', email: 'admissions@drkvsrit.ac.in' },
    { name: 'Placement Cell', phone: '+91 12345 67891', email: 'placements@drkvsrit.ac.in' },
    { name: 'Examination Branch', phone: '+91 12345 67892', email: 'exams@drkvsrit.ac.in' },
    { name: 'Administration', phone: '+91 12345 67893', email: 'admin@drkvsrit.ac.in' },
];

export default function ContactPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[128px]" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-[128px]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Get in <span className="gradient-text">Touch</span>
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        We&apos;d love to hear from you. Reach out for admissions, partnerships, or any inquiries.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-3 gap-12">

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                    <MessageSquare className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
                                    <p className="text-gray-500">Fill out the form and we&apos;ll get back to you soon.</p>
                                </div>
                            </div>

                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            placeholder="+91 12345 67890"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                            Subject *
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="admissions">Admissions Inquiry</option>
                                            <option value="placements">Placement Related</option>
                                            <option value="academics">Academic Query</option>
                                            <option value="partnership">Partnership/Collaboration</option>
                                            <option value="feedback">Feedback</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    Send Message <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Address Card */}
                        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
                            <Building2 className="w-10 h-10 mb-4" />
                            <h3 className="text-xl font-bold mb-4">Campus Address</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                    <p className="text-blue-100">
                                        Dr. K.V. Subba Reddy Institute of Technology<br />
                                        Dupadu, Kurnool - 518218<br />
                                        Andhra Pradesh, India
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 flex-shrink-0" />
                                    <a href="tel:+911234567890" className="text-blue-100 hover:text-white transition-colors">
                                        +91 12345 67890
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 flex-shrink-0" />
                                    <a href="mailto:info@drkvsrit.ac.in" className="text-blue-100 hover:text-white transition-colors">
                                        info@drkvsrit.ac.in
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Clock className="w-5 h-5 flex-shrink-0" />
                                    <p className="text-blue-100">
                                        Mon - Sat: 9:00 AM - 5:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Department Contacts */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                            <div className="flex items-center gap-3 mb-6">
                                <Users className="w-6 h-6 text-indigo-600" />
                                <h3 className="text-xl font-bold text-gray-900">Department Contacts</h3>
                            </div>
                            <div className="space-y-4">
                                {departments.map((dept, index) => (
                                    <div key={index} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                                        <h4 className="font-semibold text-gray-900 mb-1">{dept.name}</h4>
                                        <div className="flex flex-col gap-1 text-sm">
                                            <a href={`tel:${dept.phone}`} className="text-gray-500 hover:text-blue-600 flex items-center gap-2">
                                                <Phone size={12} /> {dept.phone}
                                            </a>
                                            <a href={`mailto:${dept.email}`} className="text-gray-500 hover:text-blue-600 flex items-center gap-2">
                                                <Mail size={12} /> {dept.email}
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="mt-16">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Find Us on the Map</h2>
                        <p className="text-gray-600">Visit our campus in Kurnool, Andhra Pradesh</p>
                    </div>
                    <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center overflow-hidden">
                        <div className="text-center">
                            <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <p className="text-gray-500 text-lg font-medium">Interactive Map</p>
                            <p className="text-gray-400 text-sm">Dupadu, Kurnool - 518218, Andhra Pradesh</p>
                            <a
                                href="https://maps.google.com/?q=Dr+K+V+Subba+Reddy+Institute+of+Technology+Kurnool"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
                            >
                                Open in Google Maps <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
