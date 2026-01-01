import { Calendar, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const featuredAnnouncements = [
  {
    id: 'f1',
    title: 'Admissions Open for Academic Year 2025-2026',
    date: 'Dec 24, 2024',
    description: 'Applications are invited for B.Tech, M.Tech, and MBA programs. Apply online or visit the campus for more details.',
    category: 'Admission',
  },
  {
    id: 'f2',
    title: 'KVSRIT Ranked NAAC A+ with 3.30 CGPA',
    date: 'Nov 15, 2024',
    description: 'We are proud to announce that our institution has been accredited with NAAC A+ grade in the first cycle of assessment.',
    category: 'Achievement',
  },
  {
    id: 'f3',
    title: 'New R&D Center Inauguration',
    date: 'Oct 20, 2024',
    description: 'A state-of-the-art Research and Development center has been inaugurated to foster innovation among students and faculty.',
    category: 'Campus',
  },
];

const announcements = [
  {
    id: 1,
    title: 'Aditya Birla Capital Campus Recruitment Drive',
    date: 'Oct 07, 2021',
    category: 'Placement',
  },
  {
    id: 2,
    title: 'Milekal Company, Hyderabad Campus Recruitment Drive',
    date: 'Jun 17, 2020',
    category: 'Placement',
  },
  {
    id: 3,
    title: 'Tech Mahindra, Chennai Campus Recruitment Drive',
    date: 'May 07, 2020',
    category: 'Placement',
  },
  {
    id: 4,
    title: 'Vee Technologies, Chennai Campus Recruitment Drive',
    date: 'Apr 04, 2020',
    category: 'Placement',
  },
];

const Announcements = () => {
  return (
    <div className="bg-gray-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Latest News & Announcements</h2>
            <p className="mt-2 text-gray-600">Stay updated with the latest happenings at KVSRIT.</p>
          </div>
          <Link href="/news" className="hidden sm:flex items-center text-blue-600 font-medium hover:text-blue-800">
            View All <ChevronRight size={20} />
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Featured Scroller (Left Side) */}
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">Featured Updates</h3>
            <div className="h-[400px] overflow-y-auto pr-2 custom-scrollbar space-y-6">
              {featuredAnnouncements.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-lg shadow-blue-900/5 p-6 border-l-4 border-blue-600 hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold mb-4">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={16} className="mr-2" />
                    <span>{item.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* List of other announcements with vertical scroll (Right Side) */}
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">Campus News</h3>
            <div className="h-[400px] overflow-y-auto pr-2 custom-scrollbar space-y-4">
              {announcements.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-sm p-4 flex flex-col sm:flex-row sm:items-center justify-between hover:shadow-md transition-shadow border border-gray-100 group">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide group-hover:text-blue-600 transition-colors">{item.category}</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-xs text-gray-500 flex items-center">
                        <Calendar size={12} className="mr-1" />
                        {item.date}
                      </span>
                    </div>
                    <h4 className="text-md font-medium text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                  </div>
                  <Link href={`/news/${item.id}`} className="mt-2 sm:mt-0 text-sm text-blue-600 hover:text-blue-800 font-semibold whitespace-nowrap">
                    Read More
                  </Link>
                </div>
              ))}

              {/* Extended list for demo scrolling */}
              {announcements.map((item) => (
                <div key={`archived-${item.id}`} className="opacity-70 bg-white/60 rounded-lg shadow-sm p-4 flex flex-col sm:flex-row sm:items-center justify-between hover:shadow-md transition-shadow border border-gray-100 group">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Archived</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-xs text-gray-400 flex items-center">
                        <Calendar size={12} className="mr-1" />
                        {item.date}
                      </span>
                    </div>
                    <h4 className="text-md font-medium text-gray-400 line-clamp-1">{item.title}</h4>
                  </div>
                  <Link href={`/news/${item.id}`} className="mt-2 sm:mt-0 text-sm text-blue-400 hover:text-blue-600 font-medium whitespace-nowrap">
                    Read More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 sm:hidden">
          <Link href="/news" className="flex items-center justify-center text-blue-600 font-medium hover:text-blue-800">
            View All News <ChevronRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
