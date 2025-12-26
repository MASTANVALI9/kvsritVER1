import Link from 'next/link';
import { CheckCircle, FileText, Calendar } from 'lucide-react';

export default function AdmissionsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Admissions</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Join KVSRIT and embark on a journey of excellence. Check eligibility and application process here.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Admission Process */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FileText className="text-blue-600" /> Admission Process
              </h2>
              <div className="prose text-gray-600">
                <p>
                  Admissions to various courses at KVSRIT are conducted as per the guidelines of the Andhra Pradesh State Council of Higher Education (APSCHE).
                </p>
                <div className="mt-6 bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Seat Allocation</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded mt-0.5">70%</span>
                      <div>
                        <span className="font-medium text-gray-900">Category A (Convener Quota):</span>
                        <p className="text-sm mt-1">Filled through centralized counseling based on ranks secured in EAMCET/ECET/ICET/PGECET/GATE.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded mt-0.5">30%</span>
                      <div>
                        <span className="font-medium text-gray-900">Category B (Management Quota):</span>
                        <p className="text-sm mt-1">Filled by the college management based on merit and as per APSCHE guidelines.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Eligibility */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <CheckCircle className="text-blue-600" /> Eligibility Criteria
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900">B.Tech</h3>
                  <p className="text-gray-600 mt-2">
                    Candidates must have passed 10+2 with Mathematics, Physics, and Chemistry. Admission based on AP EAMCET rank.
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900">M.Tech</h3>
                  <p className="text-gray-600 mt-2">
                    B.Tech/B.E degree in relevant discipline. Admission based on GATE or AP PGECET rank.
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900">MBA / MCA</h3>
                  <p className="text-gray-600 mt-2">
                    Any Undergraduate degree (10+2+3). Admission based on AP ICET rank.
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900">Diploma (Polytechnic)</h3>
                  <p className="text-gray-600 mt-2">
                    SSC (10th Class) pass. Admission based on AP POLYCET rank.
                  </p>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Apply Now</h3>
              <p className="text-blue-800 mb-6">
                Ready to take the next step? Submit your application online for Management Quota or inquiry.
              </p>
              <Link 
                href="/admissions/apply" 
                className="block w-full text-center bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                Online Application
              </Link>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Calendar size={20} className="text-gray-500" /> Important Dates
              </h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <span className="block text-gray-500 text-xs uppercase">Jun 2025</span>
                  <span className="font-medium">Admission Notification</span>
                </li>
                <li>
                  <span className="block text-gray-500 text-xs uppercase">Jul 2025</span>
                  <span className="font-medium">Counseling Begins (EAMCET)</span>
                </li>
                <li>
                  <span className="block text-gray-500 text-xs uppercase">Aug 2025</span>
                  <span className="font-medium">Classwork Commencement</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 text-white p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-4">Need Help?</h3>
              <p className="text-gray-400 text-sm mb-4">
                Contact our admission cell for guidance and support.
              </p>
              <p className="font-medium">+91 12345 67890</p>
              <p className="font-medium">admissions@drkvsrit.ac.in</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
