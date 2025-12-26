import { Library, Computer, Coffee, Bus, Bed, Dumbbell } from 'lucide-react';

const facilities = [
  {
    title: "Central Library",
    description: "A vast collection of books, journals, and digital resources to support academic research and learning.",
    icon: Library,
  },
  {
    title: "Computer Labs",
    description: "State-of-the-art computer centers with high-speed internet and latest software for practical learning.",
    icon: Computer,
  },
  {
    title: "Hostel Facility",
    description: "Separate hostels for boys and girls with comfortable accommodation and nutritious food.",
    icon: Bed,
  },
  {
    title: "Transportation",
    description: "Fleet of buses connecting the campus to various parts of Kurnool city and surrounding areas.",
    icon: Bus,
  },
  {
    title: "Cafeteria",
    description: "Hygienic and spacious cafeteria serving a variety of snacks, beverages, and meals.",
    icon: Coffee,
  },
  {
    title: "Sports & Gym",
    description: "Facilities for indoor and outdoor sports, along with a well-equipped gymnasium for fitness enthusiasts.",
    icon: Dumbbell,
  },
];

export default function FacilitiesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Campus Facilities</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Experience a vibrant campus life with world-class infrastructure and amenities.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow group">
              <div className="h-48 bg-gray-200 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                <facility.icon size={48} className="text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
