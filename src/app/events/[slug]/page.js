import { notFound } from 'next/navigation';
import { getEventBySlug, getEvents } from '@/lib/data';
import { Calendar, Clock, MapPin, CheckCircle, Share2, ExternalLink, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  const events = await getEvents();
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);
  if (!event) return { title: 'Event Not Found' };
  
  return {
    title: `${event.title} - KVSRIT Events`,
    description: event.description,
  };
}

export default async function EventPage({ params }) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Event Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
             <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  {event.category}
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium flex items-center">
                   <Calendar size={14} className="mr-2" /> {event.date}
                </span>
             </div>
             <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {event.title}
             </h1>
             
             <div className="flex flex-col sm:flex-row sm:items-center gap-6 text-gray-600 border-t pt-6 mt-6">
                <div className="flex items-center gap-2">
                   <Clock className="text-blue-600" />
                   <span className="font-medium">{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                   <MapPin className="text-blue-600" />
                   <span className="font-medium">{event.venue}</span>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
             
             {/* About Event */}
             <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Event</h2>
                <div className="prose max-w-none text-gray-600 leading-relaxed">
                   <p>{event.description}</p>
                </div>
             </section>

             {/* Objectives */}
             <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Objectives</h2>
                <ul className="space-y-3">
                   {event.objectives.map((obj, idx) => (
                      <li key={idx} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                         <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                         <span className="text-gray-700">{obj}</span>
                      </li>
                   ))}
                </ul>
             </section>

             {/* Gallery Section */}
             {event.gallery.length > 0 && (
                <section>
                   <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <ImageIcon className="text-blue-600" /> Event Gallery
                   </h2>
                   <div className="grid grid-cols-2 gap-4">
                      {event.gallery.map((img, idx) => (
                         <div key={idx} className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                         </div>
                      ))}
                   </div>
                </section>
             )}

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
             <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Registration Details</h3>
                
                <div className="space-y-4 mb-8">
                   <div className="flex justify-between items-center text-sm border-b pb-2">
                      <span className="text-gray-500">Registration Status</span>
                      <span className="text-green-600 font-bold bg-green-50 px-2 py-1 rounded">Open</span>
                   </div>
                   <div className="flex justify-between items-center text-sm border-b pb-2">
                      <span className="text-gray-500">Fee</span>
                      <span className="font-bold text-gray-900">Free</span>
                   </div>
                </div>

                {event.registrationLink ? (
                   <a 
                     href={event.registrationLink} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-center py-3 rounded-lg transition-colors mb-4 flex items-center justify-center gap-2"
                   >
                      Register Now <ExternalLink size={18} />
                   </a>
                ) : (
                   <button disabled className="block w-full bg-gray-300 text-gray-500 font-bold text-center py-3 rounded-lg cursor-not-allowed mb-4">
                      Registration Closed
                   </button>
                )}
                
                <button className="w-full bg-white border border-gray-200 text-gray-700 font-medium py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                   <Share2 size={18} /> Share Event
                </button>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
