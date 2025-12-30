import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import Announcements from '@/components/home/Announcements';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Stats />
      <Announcements />
      
      {/* About Section Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Welcome to KVSRIT
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Dr. K.V. Subba Reddy Institute of Technology is promoted by Vaibhav Educational Society (VES) with the motto of "Work is Worship". Its prime objective is to offer Quality Education for the Betterment of Society.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We persistently seek and adopt innovative methods to improve the quality of higher education on a consistent basis. Our campus provides an environment that fosters intellectual growth and professional development.
              </p>
              <a href="/about" className="text-blue-600 font-semibold hover:text-blue-800 flex items-center">
                Read Our Story &rarr;
              </a>
            </div>
            <div className="mt-10 lg:mt-0 relative h-64 sm:h-72 md:h-96 lg:h-full">
               {/* Placeholder for About Image */}
               <div className="w-full h-full bg-gray-200 rounded-lg shadow-lg flex items-center justify-center text-gray-400">
                  <span className="text-lg">Campus Image Placeholder</span>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
