import { Share2 } from 'lucide-react';

export default function OrganogramPage() {
    return (
        <div className="bg-white">
            <div className="bg-blue-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-4">College Organogram</h1>
                    <p className="text-blue-100 text-lg max-w-2xl">
                        Organizational structure and hierarchy of Dr. K.V. Subba Reddy Institute of Technology.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 md:p-8">
                    <div className="flex items-center justify-center p-8 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                        {/* Placeholder for Organogram Image - Users typically replace this with the actual image file */}
                        <div className="text-center">
                            <Share2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <p className="text-gray-500 font-medium">Organogram Chart Visualization</p>
                            <p className="text-sm text-gray-400 mt-2">The detailed organizational chart is available in the administrative office.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
