import Link from 'next/link';
import { ArrowRight, BookOpen, Users, Cpu } from 'lucide-react';
import { getDepartments } from '@/lib/data';

export const metadata = {
  title: 'Departments - KVSRIT',
  description: 'Explore the academic departments at KVSRIT.',
};

export default async function DepartmentsPage() {
  const departments = await getDepartments();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Academic Departments</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our departments are committed to providing quality education and fostering research and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept) => (
            <Link 
              key={dept.id} 
              href={`/departments/${dept.slug}`}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="h-48 bg-gradient-to-r from-blue-600 to-indigo-700 relative flex items-center justify-center">
                 {/* Placeholder for Department Image if not available */}
                 <div className="text-white text-center p-6">
                    <Cpu size={48} className="mx-auto mb-3 opacity-80" />
                    <h3 className="text-2xl font-bold">{dept.code}</h3>
                 </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {dept.name}
                </h2>
                <p className="text-gray-600 mb-6 line-clamp-3 text-sm">
                  {dept.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-4">
                  <div className="flex items-center gap-2">
                    <Users size={16} />
                    <span>Faculty</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen size={16} />
                    <span>Curriculum</span>
                  </div>
                  <div className="flex items-center text-blue-600 font-medium">
                    Explore <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
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
