import { Users, GraduationCap, Award, BookOpen } from 'lucide-react';

const stats = [
  { id: 1, name: 'Students', value: '2500+', icon: Users },
  { id: 2, name: 'Qualified Faculty', value: '200+', icon: GraduationCap },
  { id: 3, name: 'Years of Excellence', value: '15+', icon: Award },
  { id: 4, name: 'Courses Offered', value: '12+', icon: BookOpen },
];

const Stats = () => {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Excellence in Numbers
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            A testament to our commitment to quality education and growth.
          </p>
        </div>
        <dl className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.id} className="relative overflow-hidden rounded-lg bg-white border border-gray-100 px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6">
              <dt>
                <div className="absolute rounded-md bg-blue-500 p-3">
                  <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <p className="ml-16 truncate text-sm font-medium text-gray-500">{item.name}</p>
              </dt>
              <dd className="ml-16 flex items-baseline pb-1 sm:pb-7">
                <p className="text-2xl font-semibold text-gray-900">{item.value}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Stats;
