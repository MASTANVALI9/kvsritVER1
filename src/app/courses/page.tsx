import Link from 'next/link';
import { BookOpen, ChevronRight, GraduationCap } from 'lucide-react';
import { getCourseCategories } from '@/lib/data';

export const metadata = {
  title: 'All Courses - KVSRIT',
  description: 'Explore the wide range of academic programs offered at KVSRIT.',
};

export default async function CoursesPage() {
  const categories = await getCourseCategories();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Academic Programs</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our diverse range of undergraduate, postgraduate, and diploma courses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              href={`/courses/${category.slug}`}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
            >
              <div className="p-8 flex-1">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap size={32} />
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {category.title}
                </h2>
                
                <p className="text-gray-600 mb-6 line-clamp-2">
                  {category.description}
                </p>

                <div className="space-y-2 mb-6">
                  {category.courses.slice(0, 3).map((course, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                      {course.name}
                    </div>
                  ))}
                  {category.courses.length > 3 && (
                    <div className="text-sm text-gray-400 pl-3.5 italic">
                      + {category.courses.length - 3} more specializations
                    </div>
                  )}
                </div>
              </div>
              
              <div className="bg-gray-50 px-8 py-4 border-t border-gray-100 flex items-center justify-between text-blue-600 font-medium group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <span>View Program Details</span>
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
