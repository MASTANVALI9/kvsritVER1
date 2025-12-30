import { Mail, Phone } from 'lucide-react';

const faculty = [
  {
    name: "Dr. G. Thirupati Reddy",
    role: "Principal",
    department: "Administration",
    image: null, // Placeholder
    email: "principal@drkvsrit.ac.in"
  },
  {
    name: "Dr. A. Suresh",
    role: "HOD",
    department: "Computer Science & Engineering",
    image: null,
    email: "hod.cse@drkvsrit.ac.in"
  },
  {
    name: "Dr. B. Ramesh",
    role: "HOD",
    department: "Electronics & Communication Engg",
    image: null,
    email: "hod.ece@drkvsrit.ac.in"
  },
  {
    name: "Prof. C. Krishna",
    role: "HOD",
    department: "Electrical & Electronics Engg",
    image: null,
    email: "hod.eee@drkvsrit.ac.in"
  },
  {
    name: "Dr. D. Srinivas",
    role: "HOD",
    department: "Mechanical Engineering",
    image: null,
    email: "hod.mech@drkvsrit.ac.in"
  },
  {
    name: "Prof. E. Venkat",
    role: "HOD",
    department: "Civil Engineering",
    image: null,
    email: "hod.civil@drkvsrit.ac.in"
  },
];

export default function FacultyPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Faculty Directory</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Meet our distinguished faculty members who are dedicated to academic excellence and student success.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {faculty.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                 {/* Placeholder for Image */}
                 <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 text-2xl font-bold">
                    {member.name.charAt(0)}
                 </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm mb-4">{member.department}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Mail size={16} className="mr-2" />
                    <a href={`mailto:${member.email}`} className="hover:text-blue-600">{member.email}</a>
                  </div>
                  {/* Phone placeholder */}
                  <div className="flex items-center text-gray-600 text-sm">
                    <Phone size={16} className="mr-2" />
                    <span>+91 98765 43210</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
