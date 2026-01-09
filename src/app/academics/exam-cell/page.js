import { ClipboardCheck, Calendar, FileCheck } from 'lucide-react';

export default function ExamCellPage() {
    return (
        <div className="bg-white">
            <div className="bg-blue-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-4">Exam Cell</h1>
                    <p className="text-blue-100 text-lg max-w-2xl">
                        Managing conducting of examinations and evaluation processes.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">

                    <div className="prose prose-lg text-gray-600 max-w-none">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">About Exam Section</h2>
                        <p>
                            The Examination Section is the backbone of the academic system of the institute. It is headed by the Officer in Charge of Examinations (OCE) and supported by a team of staff. The section is responsible for the conduct of Internal and External Examinations, Spot Valuation, and publication of results.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 mt-12">
                            <div className="bg-blue-50 p-6 rounded-xl">
                                <ClipboardCheck className="w-10 h-10 text-blue-600 mb-4" />
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Examination Conduct</h3>
                                <p className="text-sm">Smooth scheduling and conducting of Internal and End Semester Examinations.</p>
                            </div>
                            <div className="bg-indigo-50 p-6 rounded-xl">
                                <FileCheck className="w-10 h-10 text-indigo-600 mb-4" />
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Evaluation</h3>
                                <p className="text-sm">Confidential and efficient processing of answer scripts and results.</p>
                            </div>
                            <div className="bg-purple-50 p-6 rounded-xl">
                                <Calendar className="w-10 h-10 text-purple-600 mb-4" />
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Scheduling</h3>
                                <p className="text-sm">Preparation and dissemination of examination timetables and hall tickets.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
