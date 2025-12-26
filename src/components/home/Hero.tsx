import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-blue-900 text-white overflow-hidden">
      {/* Background Pattern/Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 opacity-90 z-0"></div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="lg:w-2/3">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
            Empowering Future <span className="text-yellow-400">Innovators</span> & <span className="text-yellow-400">Leaders</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
            Dr. K.V. Subba Reddy Institute of Technology (KVSRIT) offers world-class education with state-of-the-art infrastructure and a commitment to excellence in engineering and management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/admissions" 
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-gray-50 md:text-lg transition-colors"
            >
              Admissions Open 2025
            </Link>
            <Link 
              href="/academics" 
              className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-800 md:text-lg transition-colors"
            >
              Explore Courses
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
