import { notFound } from 'next/navigation';
import { getDepartmentBySlug, getDepartments } from '@/lib/data';
import { User, Book, Target, Award, Mail, ChevronRight } from 'lucide-react';

export async function generateStaticParams() {
  const departments = await getDepartments();
  return departments.map((dept) => ({
    slug: dept.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const dept = await getDepartmentBySlug(slug);
  if (!dept) return { title: 'Department Not Found' };
  
  return {
    title: `${dept.name} - KVSRIT`,
    description: dept.description,
  };
}

export default async function DepartmentPage({ params }) {
  const { slug } = await params;
  const dept = await getDepartmentBySlug(slug);

  if (!dept) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="inline-block px-3 py-1 bg-blue-800 rounded-full text-sm font-medium mb-4 border border-blue-700">
              Department of
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{dept.name}</h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl">
              {dept.description}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Vision & Mission */}
            <section className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Target className="text-blue-600" /> Vision & Mission
              </h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Vision</h3>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600 italic text-gray-700">
                  "{dept.vision}"
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Mission</h3>
                <ul className="space-y-3">
                  {dept.mission.map((m, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-gray-600">{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Research Areas */}
            {dept.researchAreas.length > 0 && (
              <section className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Award className="text-blue-600" /> Research Areas
                </h2>
                <div className="grid gap-4">
                  {dept.researchAreas.map((area) => (
                    <div key={area.id} className="p-4 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-colors">
                      <h3 className="font-semibold text-gray-900 mb-2">{area.title}</h3>
                      <p className="text-sm text-gray-600">{area.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Curriculum Preview */}
            <section className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Book className="text-blue-600" /> Curriculum Highlights
              </h2>
              <div className="space-y-6">
                {dept.curriculum.slice(0, 2).map((curr, idx) => (
                  <div key={idx}>
                    <h3 className="font-medium text-gray-900 mb-3">{curr.semester}</h3>
                    <div className="flex flex-wrap gap-2">
                      {curr.subjects.map((sub, sIdx) => (
                        <span key={sIdx} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
                <button className="text-blue-600 font-medium text-sm hover:underline flex items-center">
                  View Full Curriculum <ChevronRight size={14} />
                </button>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* HOD Profile */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Head of Department</h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-400">
                  <User size={32} />
                </div>
                <div>
                  <div className="font-bold text-gray-900">{dept.hodName}</div>
                  <div className="text-sm text-gray-500">HOD, {dept.code}</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 italic mb-4">
                "{dept.hodMessage}"
              </p>
            </div>

            {/* Faculty List (Preview) */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Faculty Members</h3>
              <div className="space-y-4">
                {dept.faculty.map((fac) => (
                  <div key={fac.id} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 flex-shrink-0">
                      <User size={16} />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 text-sm">{fac.name}</div>
                      <div className="text-xs text-gray-500">{fac.designation}</div>
                      <a href={`mailto:${fac.email}`} className="text-xs text-blue-600 hover:underline flex items-center mt-1">
                        <Mail size={10} className="mr-1" /> {fac.email}
                      </a>
                    </div>
                  </div>
                ))}
                {dept.faculty.length === 0 && (
                   <p className="text-sm text-gray-500">Faculty list updating...</p>
                )}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h3 className="text-lg font-bold text-blue-900 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-blue-700 hover:text-blue-900 text-sm block py-1">Department Calendar</a>
                </li>
                <li>
                  <a href="#" className="text-blue-700 hover:text-blue-900 text-sm block py-1">Student Achievements</a>
                </li>
                <li>
                  <a href="#" className="text-blue-700 hover:text-blue-900 text-sm block py-1">Laboratories</a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
