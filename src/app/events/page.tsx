import Link from 'next/link';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { getEvents } from '@/lib/data';

export const metadata = {
  title: 'Events - KVSRIT',
  description: 'Upcoming events, workshops, and seminars at KVSRIT.',
};

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest happenings, workshops, and cultural fests at KVSRIT.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Link 
              key={event.id} 
              href={`/events/${event.slug}`}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-gray-100"
            >
              <div className="h-48 bg-gray-200 relative">
                {event.thumbnail ? (
                   // eslint-disable-next-line @next/next/no-img-element
                   <img src={event.thumbnail} alt={event.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium bg-gray-100">
                    No Image Available
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded shadow-sm">
                  {event.category}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center text-sm text-gray-500 mb-3 gap-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-1">
                     <Clock size={14} />
                     {event.time}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {event.title}
                </h3>
                
                <div className="flex items-center text-gray-500 text-sm mb-4">
                   <MapPin size={14} className="mr-1" />
                   {event.venue}
                </div>

                <p className="text-gray-600 text-sm line-clamp-3 mb-6 flex-1">
                  {event.description}
                </p>
                
                <div className="text-blue-600 font-medium flex items-center mt-auto">
                  View Details <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
