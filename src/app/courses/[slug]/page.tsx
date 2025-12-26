import { notFound } from 'next/navigation';
import { getCourseCategoryBySlug, getCourseCategories } from '@/lib/data';
import { BookOpen, Clock, CheckCircle, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  const categories = await getCourseCategories();
  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = await getCourseCategoryBySlug(slug);
  if (!category) return { title: 'Program Not Found' };
  
  return {
    title: `${category.title} - KVSRIT Academics`,
    description: category.description,
  };
}

export default async function CourseCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = await getCourseCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="inline-block px-3 py-1 bg-blue-800 rounded-full text-sm font-medium mb-4 border border-blue-700">
              Academic Program
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{category.title}</h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl">
              {category.description}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Program Details */}
            <section className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <BookOpen className="text-blue-600" /> Program Overview
              </h2>
              
              <div className="flex items-center gap-4 mb-6 text-gray-600">
                <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
                  <Clock size={18} />
                  <span className="font-medium">Duration: {category.duration}</span>
                </div>
              </div>

              <div className="prose max-w-none text-gray-600">
                <p>
                  The {category.title} at KVSRIT is designed to empower students with deep technical knowledge and practical skills.
                  Our curriculum is regularly updated to meet industry standards, ensuring that graduates are ready for the challenges of the modern world.
                </p>
              </div>
            </section>

            {/* Courses List */}
            <section className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Specializations</h2>
              <div className="grid gap-4">
                {category.courses.map((course, idx) => (
                  <div key={idx} className="p-4 border border-gray-100 rounded-lg hover:border-blue-200 hover:bg-blue-50 transition-colors flex items-center justify-between group">
                    <div>
                      <h3 className="font-semibold text-gray-900">{course.name}</h3>
                      <span className="text-sm text-gray-500 font-mono bg-gray-100 px-2 py-0.5 rounded mt-1 inline-block">
                        Code: {course.code}
                      </span>
                    </div>
                    <ChevronRight className="text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Quick Facts / Benefits */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Why Choose This Program?</h3>
              <ul className="space-y-3">
                {[
                  'Expert Faculty',
                  'State-of-the-art Laboratories',
                  'Industry Partnerships',
                  'Placement Assistance',
                  'Research Opportunities'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={16} className="text-green-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Apply Now CTA */}
            <div className="bg-blue-600 rounded-xl p-8 text-white text-center shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Ready to Join?</h3>
              <p className="text-blue-100 mb-6">
                Start your journey with KVSRIT today. Applications are open for the upcoming academic year.
              </p>
              <Link 
                href="/admissions/apply" 
                className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors w-full"
              >
                Apply Now
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
