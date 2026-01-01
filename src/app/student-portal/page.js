import Link from 'next/link';
import {
    BookOpen,
    Calendar,
    FileText,
    ClipboardList,
    Bell,
    CreditCard,
    Users,
    Award,
    Clock,
    ArrowRight,
    GraduationCap,
    Library,
    Laptop,
    MessageSquare
} from 'lucide-react';

export const metadata = {
    title: "Student Portal",
    description: "Access your student dashboard, resources, academic calendar, and important announcements at KVSRIT."
};

const quickActions = [
    {
        name: 'Academic Calendar',
        description: 'View important dates and schedules',
        icon: Calendar,
        href: '/academics/resources',
        color: 'from-blue-500 to-cyan-400'
    },
    {
        name: 'Exam Results',
        description: 'Check your semester results',
        icon: ClipboardList,
        href: 'http://results.drkvsrit.ac.in/',
        color: 'from-purple-500 to-pink-400'
    },
    {
        name: 'Fee Payment',
        description: 'Pay fees online securely',
        icon: CreditCard,
        href: '#',
        color: 'from-emerald-500 to-teal-400'
    },
    {
        name: 'Syllabus',
        description: 'Download course syllabus',
        icon: BookOpen,
        href: '/academics/resources',
        color: 'from-amber-500 to-orange-400'
    },
    {
        name: 'Library Portal',
        description: 'Access digital library',
        icon: Library,
        href: '/library',
        color: 'from-rose-500 to-red-400'
    },
    {
        name: 'E-Learning',
        description: 'Online courses and materials',
        icon: Laptop,
        href: '#',
        color: 'from-indigo-500 to-violet-400'
    },
];

const announcements = [
    {
        id: 1,
        title: 'Semester Exams Schedule Released',
        date: 'Dec 28, 2024',
        category: 'Examination',
        urgent: true
    },
    {
        id: 2,
        title: 'Cultural Fest 2025 Registrations Open',
        date: 'Dec 25, 2024',
        category: 'Events',
        urgent: false
    },
    {
        id: 3,
        title: 'Industry Expert Lecture on AI/ML',
        date: 'Dec 22, 2024',
        category: 'Guest Lecture',
        urgent: false
    },
    {
        id: 4,
        title: 'Placement Drive: TCS & Infosys',
        date: 'Dec 20, 2024',
        category: 'Placements',
        urgent: true
    },
];

const upcomingEvents = [
    { title: 'End Semester Exams', date: 'Jan 15, 2025', type: 'exam' },
    { title: 'Technical Symposium', date: 'Feb 10, 2025', type: 'event' },
    { title: 'Sports Week', date: 'Feb 20, 2025', type: 'sports' },
    { title: 'Convocation 2025', date: 'Mar 15, 2025', type: 'ceremony' },
];

export default function StudentPortalPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20 overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[128px]" />
                    <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-[128px]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center">
                            <GraduationCap className="w-8 h-8" />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold">Student Portal</h1>
                            <p className="text-blue-200 mt-1">Your gateway to academic resources</p>
                        </div>
                    </div>
                    <p className="text-lg text-blue-100 max-w-2xl">
                        Access all your academic resources, schedules, results, and important announcements in one place.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Quick Actions Grid */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Laptop className="w-5 h-5 text-blue-600" />
                        </div>
                        Quick Actions
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {quickActions.map((action, index) => (
                            <Link
                                key={index}
                                href={action.href}
                                className="group relative bg-white rounded-2xl p-6 shadow-lg shadow-gray-100/50 border border-gray-100 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${action.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <action.icon className="h-7 w-7 text-white" />
                                </div>

                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    {action.name}
                                </h3>
                                <p className="text-gray-500 text-sm">{action.description}</p>

                                <ArrowRight className="absolute bottom-6 right-6 w-5 h-5 text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                            </Link>
                        ))}
                    </div>
                </section>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Announcements */}
                    <section className="lg:col-span-2">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                                <Bell className="w-5 h-5 text-amber-600" />
                            </div>
                            Latest Announcements
                        </h2>
                        <div className="bg-white rounded-2xl shadow-lg shadow-gray-100/50 border border-gray-100 overflow-hidden mb-12">
                            {announcements.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`p-5 flex items-start gap-4 hover:bg-gray-50 transition-colors ${index !== announcements.length - 1 ? 'border-b border-gray-100' : ''
                                        }`}
                                >
                                    <div className={`w-2 h-2 rounded-full mt-2 ${item.urgent ? 'bg-red-500 animate-pulse' : 'bg-blue-500'}`} />
                                    <div className="flex-grow">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                                                {item.category}
                                            </span>
                                            {item.urgent && (
                                                <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded-full">
                                                    Urgent
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                                        <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                                            <Clock size={12} />
                                            {item.date}
                                        </p>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-gray-300" />
                                </div>
                            ))}
                            <div className="p-4 bg-gray-50">
                                <Link href="/news" className="text-blue-600 font-medium text-sm hover:text-blue-700 flex items-center gap-1">
                                    View All Announcements <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>

                        {/* Downloads & Forms Section */}
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                                <FileText className="w-5 h-5 text-emerald-600" />
                            </div>
                            Downloads & Forms
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                { title: 'Exam Registration Form', size: '156 KB' },
                                { title: 'Scholarship Application', size: '240 KB' },
                                { title: 'Condonation Form', size: '120 KB' },
                                { title: 'No Dues Certificate', size: '98 KB' }
                            ].map((doc, i) => (
                                <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 flex items-center justify-between group hover:border-emerald-200 transition-all cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center">
                                            <FileText className="w-5 h-5 text-gray-400" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900 text-sm">{doc.title}</p>
                                            <p className="text-[10px] text-gray-500 uppercase font-black">{doc.size} • PDF</p>
                                        </div>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Sidebar */}
                    <aside className="space-y-8">
                        {/* Upcoming Events */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-100/50 border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-purple-600" />
                                Upcoming Events
                            </h3>
                            <div className="space-y-4">
                                {upcomingEvents.map((event, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex flex-col items-center justify-center">
                                            <span className="text-xs font-bold text-purple-600">
                                                {event.date.split(' ')[1]?.replace(',', '')}
                                            </span>
                                            <span className="text-xs text-purple-500">
                                                {event.date.split(' ')[0]}
                                            </span>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900 text-sm">{event.title}</p>
                                            <p className="text-xs text-gray-500 capitalize">{event.type}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Help Card */}
                        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white">
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold mb-2">Need Help?</h3>
                            <p className="text-blue-100 text-sm mb-4">
                                Contact the student support desk for any queries or assistance.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-50 transition-colors"
                            >
                                Contact Support <ArrowRight size={14} />
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
