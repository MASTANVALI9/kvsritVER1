import { User, Users, BookOpen, Briefcase, Microscope, FileText } from 'lucide-react';

export default function AdministrationPage() {
    const roles = [
        {
            title: "Principal",
            icon: User,
            responsibilities: [
                "Looks after all the Administrative and Academic activities falling in line with the AICTE, JNTUA University and the Government of Andhra Pradesh norms, in all aspects.",
                "Conducts all the UG, PG programmes according to the affiliating university guidelines and is not supposed to conduct any programmes apart from the programmes affiliated by the University.",
                "Appoints Faculty Members according to the norms of the AICTE and affiliating university.",
                "Acts as Chief Warden for Gents and Ladies Hostels.",
                "Monitors admission, conducts regular class works, to organize placement activities in coordination with Training and Placement Officer, creates an environment for industry institute interaction, coordinates R&D activities, coordinates staff and external organization for R&D and consultancy in coordination with R&D Head, maintains discipline among students and staff.",
                "Monitors smooth conduct of Quality Management System in accordance with NBA and NAAC."
            ]
        },
        {
            title: "Head Of the Department (HOD)",
            icon: Users,
            responsibilities: [
                "Responsible for all the academic affairs of the Department.",
                "Looks after day to day activities relating to teaching and other workloads of his/her teaching and non-teaching staff.",
                "Reports to the Principal regarding all the requirements of his/her department such as Faculty Member, supporting staff, equipment, books & journals, maintenance etc.",
                "Represents his/her department and will report to the Principal all the requirements/short comings for the development and proper functioning of the Department, during weekly/fortnightly meetings.",
                "Looks after the matters related to R & D, Consultancy and Research Publications.",
                "Arranges for Guest Lectures, Seminars, Workshops, and Conferences etc.",
                "Responsible for mobilizing his/her Faculty Member for different research grants.",
                "Responsible for innovative programmes including collaboration with other institutions, Universities and different industries.",
                "Responsible for students mentoring system."
            ]
        },
        {
            title: "Training and Placement Officer",
            icon: Briefcase,
            responsibilities: [
                "Responsible for all the activities relating to the students placement.",
                "Coordinates with the industries for providing the vocational training courses to students.",
                "Arranges guest lectures, workshops, seminars, industrial visits & educational tours for students.",
                "Coordinates with the different industries for on-campus and off-campus interviews of the meritorious students for providing suitable jobs in their organizations.",
                "Responsible for interaction with different industries for functioning of EDPs."
            ]
        },
        {
            title: "Research & Development (R&D) Head",
            icon: Microscope,
            responsibilities: [
                "Guide and monitor the Institution’s R&D activities including Student and Faulty Research Publications.",
                "Direct the Research and Development (R&D) program, from new product proposal to commercialization.",
                "Drive accountability, consistency, quality, and process standardization across all phases of research and development.",
                "In accordance with Institution objectives develop and monitor research plans and budgets for R&D projects, ensuring projects are completed on time and within cost objectives."
            ]
        },
        {
            title: "Library in-charge",
            icon: BookOpen,
            responsibilities: [
                "Responsible for the overall in charge of the library.",
                "Maintains documentations of books, journals, magazines, newspapers, CD’s & library materials.",
                "Prepares a periodical requirement of books and journals to students and Faculty Member.",
                "Responsible for maintaining and updating e-journals and all teaching aids.",
                "Keeps record of library materials and report to the Principal for any discrepancy.",
                "Arranges periodic inventory of library materials."
            ]
        },
        {
            title: "Administrative Officer",
            icon: FileText,
            responsibilities: [
                "Takes care of student scholarships like first graduate, S.C, S.T M.B.C scholarships.",
                "Maintains the Faculty Member leave records like casual leave, vacation, on duty & permission.",
                "Acts as a Coordinator for all the activities relating to the maintenance of the College.",
                "Takes care of HR policies of the institution inside and outside the College.",
                "Conducts Interview as per HODs requirement with College constituted selection committee support.",
                "Takes care of all admission approval procedure and communicating with universities in person."
            ]
        }
    ];

    return (
        <div className="bg-white">
            {/* Header */}
            <div className="bg-blue-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-4">Administration Roles</h1>
                    <p className="text-blue-100 text-lg max-w-2xl">
                        Key responsibilities and organizational structure of KVSRIT administration.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid gap-8">
                    {roles.map((role, index) => {
                        const Icon = role.icon;
                        return (
                            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="p-6 md:p-8">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-900">{role.title}</h2>
                                    </div>

                                    <div className="pl-0 md:pl-16">
                                        <ul className="space-y-3">
                                            {role.responsibilities.map((item, i) => (
                                                <li key={i} className="flex gap-3 text-gray-600 leading-relaxed">
                                                    <span className="text-blue-400 mt-1.5">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
