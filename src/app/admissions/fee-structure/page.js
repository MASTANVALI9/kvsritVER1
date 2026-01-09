import { Wallet, Info } from 'lucide-react';

export default function FeeStructurePage() {
    return (
        <div className="bg-white">
            <div className="bg-blue-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-4">Fee Structure</h1>
                    <p className="text-blue-100 text-lg max-w-2xl">
                        Transparent and affordable fee structure for all our programs.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">

                    <div className="grid gap-8">
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 flex gap-4">
                            <Info className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                            <p className="text-yellow-800">
                                Fee structure is subject to change as per the Government of Andhra Pradesh Higher Education guidelines. Please contact the administrative office for the most current details.
                            </p>
                        </div>

                        <div className="overflow-x-auto">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">B.Tech Fee Details (Convenor Quota)</h3>
                            <table className="w-full text-left border-collapse border border-gray-200">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="p-4 border border-gray-200">Branch</th>
                                        <th className="p-4 border border-gray-200">Tuition Fee (Per Annum)</th>
                                        <th className="p-4 border border-gray-200">Examination Fee</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-4 border border-gray-200">All Branches</td>
                                        <td className="p-4 border border-gray-200">As per Govt Norms</td>
                                        <td className="p-4 border border-gray-200">As per JNTUA</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-6 flex flex-col md:flex-row gap-6 bg-gray-50 p-6 rounded-xl">
                            <div className="flex-1">
                                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                                    <Wallet className="w-5 h-5 text-blue-600" />
                                    Payment Modes
                                </h4>
                                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                                    <li>Online Transfer / NEFT / RTGS</li>
                                    <li>Demand Draft in favor of "Principal, KVSRIT"</li>
                                    <li>Cash at College Counter</li>
                                </ul>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-gray-900 mb-2">Contact Accounts Section</h4>
                                <p className="text-gray-600">Ph: 9704 333 789</p>
                                <p className="text-gray-600">Email: accounts@drkvsrit.ac.in</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
