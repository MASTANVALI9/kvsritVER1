import { Calendar, ChevronRight } from 'lucide-react';
import Link from 'next/link';

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

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Main/Latest Announcement */}
          <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-blue-600">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold mb-4">
              Featured
            </span>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Admissions Open for Academic Year 2025-2026
            </h3>
            <p className="text-gray-600 mb-4">
              Applications are invited for B.Tech, M.Tech, and MBA programs. Apply online or visit the campus for more details.
            </p>
            <div className="flex items-center text-gray-500 text-sm">
              <Calendar size={16} className="mr-2" />
              <span>Dec 24, 2024</span>
            </div>
          </div>

          {/* List of other announcements */}
          <div className="space-y-4">
            {announcements.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm p-4 flex flex-col sm:flex-row sm:items-center justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{item.category}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-xs text-gray-500 flex items-center">
                      <Calendar size={12} className="mr-1" />
                      {item.date}
                    </span>
                  </div>
                  <h4 className="text-md font-medium text-gray-900 line-clamp-1">{item.title}</h4>
                </div>
                <Link href={`/news/${item.id}`} className="mt-2 sm:mt-0 text-sm text-blue-600 hover:text-blue-800 font-medium whitespace-nowrap">
                  Read More
                </Link>
              </div>
            ))}
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
