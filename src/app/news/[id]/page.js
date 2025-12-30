import Link from 'next/link';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';

// This would normally come from a database or API based on the ID
const getNewsItem = (id) => {
  return {
    id,
    title: 'Aditya Birla Capital Campus Recruitment Drive',
    date: 'Oct 07, 2021',
    category: 'Placement',
    content: `
      <p>We are pleased to inform that Aditya Birla Capital will be conducting a recruitment drive for the 2022 batch MBA students.</p>
      <p class="mt-4"><strong>Date:</strong> 07-10-2021</p>
      <p><strong>Venue:</strong> KVSRIT Seminar Hall</p>
      <p class="mt-4">All eligible students are requested to register with the placement cell before the deadline.</p>
      <p class="mt-4">This is a great opportunity for students to kickstart their careers with a reputed organization. Prepare well and best of luck!</p>
    `,
  };
};

export default async function NewsDetailPage({ params }) {
  const { id } = await params;
  const newsItem = getNewsItem(id);

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/news" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" /> Back to News
        </Link>
        
        <article>
          <div className="mb-6">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
              {newsItem.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {newsItem.title}
            </h1>
            <div className="flex items-center text-gray-500 text-sm">
              <Calendar size={16} className="mr-2" />
              <span>{newsItem.date}</span>
            </div>
          </div>

          <div className="h-64 md:h-96 bg-gray-200 rounded-lg mb-8 flex items-center justify-center text-gray-400">
             {/* Placeholder Image */}
             <span className="text-lg">Featured Image Placeholder</span>
          </div>

          <div 
            className="prose prose-blue prose-lg max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: newsItem.content }}
          />
        </article>
      </div>
    </div>
  );
}
