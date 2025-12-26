import { Target, Eye, BookOpen } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Learn about our history, mission, and the values that drive KVSRIT forward.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* History Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our History</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p>
              Dr. K.V. Subba Reddy Institute of Technology (KVSRIT) was established in 2007 by Vaibhav Educational Society (VES) under the dynamic leadership of Dr. K.V. Subba Reddy, an eminent educationalist and philanthropist. The institution is situated in Kurnool, Andhra Pradesh, and is affiliated with JNTUA, Anantapur.
            </p>
            <p className="mt-4">
              Since its inception, KVSRIT has been committed to imparting quality technical education to students from diverse backgrounds. The institute is approved by the All India Council for Technical Education (AICTE), New Delhi, and has grown into a premier centre of learning with state-of-the-art infrastructure and highly qualified faculty.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="text-blue-600 w-8 h-8" />
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To emerge as a premier institution of technical education and research, producing globally competent and ethically strong professionals who can contribute effectively to the sustainable development of society.
            </p>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600">
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-blue-600 w-8 h-8" />
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">•</span>
                To provide high-quality education through innovative teaching-learning processes.
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">•</span>
                To foster a culture of research, innovation, and entrepreneurship among students and faculty.
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">•</span>
                To instill ethical values and social responsibility in future engineers.
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">•</span>
                To collaborate with industry and academia for continuous improvement and exposure.
              </li>
            </ul>
          </div>
        </div>

        {/* Quality Policy */}
        <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="text-blue-400 w-8 h-8" />
              <h3 className="text-2xl font-bold">Quality Policy</h3>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
              We at KVSRIT are committed to achieving excellence in technical education by continually improving our quality management systems, infrastructure, and human resources to meet the changing needs of industry and society.
            </p>
          </div>
          <div className="absolute right-0 top-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-16 -mt-16"></div>
          <div className="absolute left-0 bottom-0 w-64 h-64 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -ml-16 -mb-16"></div>
        </div>

      </div>
    </div>
  );
}
