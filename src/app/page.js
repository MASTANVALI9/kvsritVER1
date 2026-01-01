import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import Announcements from '@/components/home/Announcements';
import Link from 'next/link';
import {
  ArrowRight,
  GraduationCap,
  Users,
  Lightbulb,
  Building2,
  BookOpen,
  Trophy,
  Calendar,
  ChevronRight
} from 'lucide-react';

const featuredPrograms = [
  {
    name: 'B.Tech Programs',
    description: 'Cutting-edge engineering education in CSE, ECE, EEE, Mechanical & Civil.',
    icon: GraduationCap,
    href: '/courses/btech',
    color: 'from-blue-500 to-cyan-400'
  },
  {
    name: 'M.Tech Programs',
    description: 'Advanced specializations in emerging technologies and research.',
    icon: Lightbulb,
    href: '/courses/mtech',
    color: 'from-purple-500 to-pink-400'
  },
  {
    name: 'MBA & MCA',
    description: 'Industry-ready management and computer application programs.',
    icon: Building2,
    href: '/courses/management',
    color: 'from-emerald-500 to-teal-400'
  },
];

const upcomingEvents = [
  {
    title: 'Campus Placement Drive',
    date: 'Jan 15, 2025',
    category: 'Placements',
    description: 'TCS, Infosys & Wipro recruitment drive'
  },
  {
    title: 'Technical Symposium 2025',
    date: 'Feb 10, 2025',
    category: 'Event',
    description: 'Annual tech fest with workshops and competitions'
  },
  {
    title: 'Guest Lecture: AI in Industry',
    date: 'Jan 20, 2025',
    category: 'Academic',
    description: 'Expert talk on AI applications'
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Stats />

      {/* Featured Programs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
              What We Offer
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="gradient-text">Programs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our industry-aligned programs designed to shape future leaders.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredPrograms.map((program, index) => (
              <Link
                key={index}
                href={program.href}
                className="group relative bg-white rounded-2xl p-8 shadow-lg shadow-gray-100/50 border border-gray-100 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${program.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <program.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {program.name}
                </h3>
                <p className="text-gray-600 mb-6">{program.description}</p>

                <span className="inline-flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                  Explore <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-gray-200 text-gray-700 font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              View All Programs <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-4">
                About Us
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Welcome to <span className="gradient-text">KVSRIT</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Dr. K.V. Subba Reddy Institute of Technology is promoted by Vaibhav Educational Society (VES) with the motto of &quot;Work is Worship&quot;. Its prime objective is to offer Quality Education for the Betterment of Society.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We persistently seek and adopt innovative methods to improve the quality of higher education on a consistent basis. Our campus provides an environment that fosters intellectual growth and professional development.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="font-medium text-gray-700">AICTE Approved</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="font-medium text-gray-700">JNTUA Affiliated</span>
                </div>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1"
              >
                Read Our Story <ArrowRight size={18} />
              </Link>
            </div>

            <div className="mt-12 lg:mt-0 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 flex items-center justify-center">
                  <div className="text-center">
                    <Building2 className="w-24 h-24 text-blue-400 mx-auto mb-4" />
                    <p className="text-blue-600 font-medium">Campus View</p>
                  </div>
                </div>
              </div>
              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hidden lg:block">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-400 rounded-xl flex items-center justify-center">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">15+</div>
                    <div className="text-sm text-gray-500">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">
                Stay Updated
              </span>
              <h2 className="text-4xl font-bold text-gray-900">
                Upcoming <span className="gradient-text">Events</span>
              </h2>
            </div>
            <Link
              href="/events"
              className="mt-4 md:mt-0 inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
            >
              View All Events <ChevronRight size={20} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg shadow-gray-100/50 border border-gray-100 hover:shadow-xl hover:border-amber-200 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${event.category === 'Placements' ? 'bg-emerald-100 text-emerald-700' :
                      event.category === 'Event' ? 'bg-purple-100 text-purple-700' :
                        'bg-blue-100 text-blue-700'
                    }`}>
                    {event.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar size={14} className="mr-2" />
                  {event.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Announcements />

      {/* Research Highlights */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-blue-300 text-sm font-semibold mb-4">
                Innovation Hub
              </span>
              <h2 className="text-4xl font-bold mb-6">
                Research & <span className="gradient-text">Innovation</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our faculty and students are working on cutting-edge research projects in AI, IoT, Renewable Energy, and more. Discover how we&apos;re shaping the future.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="glass rounded-xl p-4">
                  <div className="text-3xl font-bold text-white mb-1">150+</div>
                  <div className="text-gray-400 text-sm">Research Papers</div>
                </div>
                <div className="glass rounded-xl p-4">
                  <div className="text-3xl font-bold text-white mb-1">12</div>
                  <div className="text-gray-400 text-sm">Patents Filed</div>
                </div>
              </div>

              <Link
                href="/research"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-indigo-900 font-semibold hover:bg-indigo-100 transition-colors"
              >
                Explore Research <ArrowRight size={18} />
              </Link>
            </div>

            <div className="relative">
              <div className="glass rounded-2xl p-8">
                <Lightbulb className="w-16 h-16 text-yellow-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Innovation Center</h3>
                <p className="text-gray-300 mb-6">
                  State-of-the-art labs and maker spaces for students to bring their ideas to life.
                </p>
                <ul className="space-y-3">
                  {['AI & Machine Learning Lab', 'IoT Development Center', 'Robotics Workshop', 'Startup Incubator'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers at KVSRIT. Applications for 2025-26 are now open.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admissions/apply"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-indigo-700 font-semibold hover:bg-indigo-50 transition-colors shadow-lg"
            >
              Apply Now <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
