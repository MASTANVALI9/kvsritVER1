import Link from 'next/link';
import { Calendar, Tag } from 'lucide-react';

const news = [
  {
    id: 1,
    title: 'Aditya Birla Capital Campus Recruitment Drive',
    date: 'Oct 07, 2021',
    category: 'Placement',
    description: 'Aditya Birla Capital will be conducting a recruitment drive for the 2022 batch MBA students.',
  },
  {
    id: 2,
    title: 'Milekal Company, Hyderabad Campus Recruitment Drive',
    date: 'Jun 17, 2020',
    category: 'Placement',
    description: 'Recruitment drive for B.Tech/MBA 2020 Batch.',
  },
  {
    id: 3,
    title: 'Tech Mahindra, Chennai Campus Recruitment Drive',
    date: 'May 07, 2020',
    category: 'Placement',
    description: 'Tech Mahindra is hiring B.Tech 2020 Batch students.',
  },
  {
    id: 4,
    title: 'Vee Technologies, Chennai Campus Recruitment Drive',
    date: 'Apr 04, 2020',
    category: 'Placement',
    description: 'Recruitment drive for B.Tech 2020 Batch.',
  },
  {
    id: 5,
    title: 'Annual Sports Day 2024',
    date: 'Dec 15, 2024',
    category: 'Events',
    description: 'The college annual sports meet was held with great enthusiasm.',
  },
  {
    id: 6,
    title: 'Workshop on AI & ML',
    date: 'Nov 20, 2024',
    category: 'Workshop',
    description: 'A two-day workshop on Artificial Intelligence and Machine Learning was conducted by CSE department.',
  },
];

export default function NewsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">News & Events</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Stay updated with the latest announcements, events, and happenings at KVSRIT.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <Link key={item.id} href={`/news/${item.id}`} className="block group">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all h-full flex flex-col">
                <div className="h-48 bg-gray-200 relative">
                   {/* Placeholder for Image */}
                   <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                      No Image Available
                   </div>
                   <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                      {item.category}
                   </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center text-gray-500 text-xs mb-3">
                    <Calendar size={14} className="mr-1" />
                    {item.date}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">
                    {item.description}
                  </p>
                  <div className="text-blue-600 text-sm font-medium mt-auto">
                    Read More &rarr;
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
