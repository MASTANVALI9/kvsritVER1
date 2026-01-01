import { Users, FileText, Calendar, Settings, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <div className="space-x-4">
            <Link href="/admin/departments" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center">
              <BookOpen size={18} className="mr-2" /> Manage Departments
            </Link>
            <Link href="/admin/events" className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors inline-flex items-center">
              <Calendar size={18} className="mr-2" /> Manage Events
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {[
            { name: 'Total Students', stat: '2,500+', icon: Users, color: 'bg-blue-500' },
            { name: 'New Applications', stat: '150', icon: FileText, color: 'bg-green-500' },
            { name: 'Upcoming Events', stat: '12', icon: Calendar, color: 'bg-yellow-500' },
            { name: 'System Status', stat: 'Healthy', icon: Settings, color: 'bg-gray-500' },
          ].map((item) => (
            <div key={item.name} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className={`rounded-md p-3 ${item.color}`}>
                      <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900">{item.stat}</div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Applications Section (Mock) */}
        <div className="bg-white shadow rounded-lg mb-8">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Applications</h3>
          </div>
          <ul className="divide-y divide-gray-200">
            {[1, 2, 3, 4, 5].map((i) => (
              <li key={i} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-blue-600 truncate">
                    Applicant #{2024000 + i}
                  </div>
                  <div className="ml-2 flex-shrink-0 flex">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      New
                    </span>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      B.Tech Computer Science
                    </p>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <p>
                      Applied on <time dateTime="2024-12-20">Dec 20, 2024</time>
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
