'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const EventGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  // Decreased image dimensions while maintaining aspect ratios
  const images = [
    { id: 1, src: "/Assets/Gallery/p1.png", category: 'workshop', date: '2024-03-15', width: 240, height: 320 },
    { id: 1, src: "/Assets/Gallery/p1.png", category: 'workshop', date: '2024-03-15', width: 240, height: 320 },
    { id: 2, src: "/Assets/Gallery/L1.png", category: 'workshop', date: '2024-04-20', width: 240, height: 200 },
    { id: 3, src: "/Assets/Gallery/p2.png", category: 'workshop', date: '2024-05-10', width: 240, height: 280 },
    { id: 4, src: "/Assets/Gallery/p3.png", category: 'workshop', date: '2024-06-15', width: 240, height: 360 },
    { id: 5, src: "/Assets/Gallery/p4.png", category: 'workshop', date: '2024-07-20', width: 240, height: 224 },
    { id: 6, src: "/Assets/Gallery/p5.png", category: 'workshop', date: '2024-08-10', width: 240, height: 256 },
  ];

  const filteredImages = images.filter(image => {
    const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory;
    const matchesSearch = image.date.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen mt-16 bg-gradient-to-b from-blue-50 to-white">
      {/* Reduced Hero Section Height */}
      <section className="relative h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/Assets/Gallery/banner.png')`
          }}
        />
        <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-sm">
          <div className="h-full flex items-center justify-center">
            <div className="text-center text-white space-y-8 px-4">
              <h1 className="text-5xl md:text-7xl font-bold animate-fade-in">
                NexHub Events & Workshops
              </h1>
              <p className="text-xl md:text-3xl font-light max-w-3xl mx-auto">
                Explore our journey through images!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Search Section */}
      <section className="container mx-auto px-4 py-2 mt-4">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12">
          <div className="flex gap-3 flex-wrap justify-center">
            {['all', 'workshop', 'hackathon', 'meetup'].map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full capitalize text-lg transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Optimized Masonry Gallery with Smaller Images */}
      <section className="container mx-auto px-4 py-2 -mt-6">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="relative group mb-4 break-inside-avoid rounded-xl overflow-hidden"
            >
              <img
                src={image.src}
                alt={`Event ${image.id}`}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300"
                width={image.width}
                height={image.height}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="text-black py-20 mt-16">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Join our upcoming events and be part of the NexHub community!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => router.push('/events')}
              className="bg-blue-500 text-white hover:bg-blue-600 px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300 shadow-lg"
            >
              View Upcoming Events
            </button>
            <button 
              onClick={() => router.push('/join-our-team')}
              className="bg-blue-500 text-white hover:bg-blue-600 px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300 shadow-lg"
            >
              Join Nexhub
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventGallery;