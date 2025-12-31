"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: (
      <>
        Empowering Future <span className="text-yellow-400">Innovators</span> &{" "}
        <span className="text-yellow-400">Leaders</span>
      </>
    ),
    description:
      "Dr. K.V. Subba Reddy Institute of Technology (KVSRIT) offers world-class education with state-of-the-art infrastructure and a commitment to excellence in engineering and management.",
    overlayColor: "from-blue-900/40 to-blue-800/40",
    image: "/images/hero/hero-1.png",
  },
  {
    id: 2,
    title: (
      <>
        Excellence in <span className="text-yellow-400">Education</span> &{" "}
        <span className="text-yellow-400">Research</span>
      </>
    ),
    description:
      "Join a community dedicated to pushing the boundaries of knowledge. Our expert faculty and modern labs provide the perfect environment for your academic growth.",
    overlayColor: "from-indigo-900/40 to-purple-900/40",
    image: "/images/hero/hero-2.png",
  },
  {
    id: 3,
    title: (
      <>
        Vibrant <span className="text-yellow-400">Campus Life</span> &{" "}
        <span className="text-yellow-400">Culture</span>
      </>
    ),
    description:
      "Experience a holistic development journey with diverse cultural events, sports, and student clubs that shape your personality beyond academics.",
    overlayColor: "from-blue-800/40 to-cyan-900/40",
    image: "/images/hero/extra-1.png",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <div className="relative bg-gray-900 text-white overflow-hidden h-[600px] flex items-center">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
        >
          {slide.image && (
            <div
              className="absolute inset-0 w-full h-full -z-10"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
          )}

          <div
            className={`absolute inset-0 bg-black/40 bg-gradient-to-r ${slide.overlayColor} mix-blend-multiply`}
          />

          {/* Pattern Overlay (Optional) */}
          <div className="absolute inset-0 bg-black/5 opacity-10"></div>

          {/* If you have an image, you can use Next.js Image component here like:
             <Image src={slide.image} alt="Background" fill className="object-cover -z-10 mix-blend-overlay" />
          */}

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
            <div className="lg:w-2/3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 animate-fade-in-up">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl animate-fade-in-up delay-100">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-200">
                <Link
                  href="/admissions"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-gray-50 md:text-lg transition-colors"
                >
                  Admissions Open 2025
                </Link>
                <Link
                  href="/academics"
                  className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 md:text-lg transition-colors"
                >
                  Explore Courses
                  <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current
              ? "bg-white w-8"
              : "bg-white/50 hover:bg-white/80"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
