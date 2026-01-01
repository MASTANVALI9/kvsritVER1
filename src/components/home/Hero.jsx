"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, Play } from "lucide-react";

const slides = [
  {
    id: 1,
    title: (
      <>
        Empowering Future <span className="gradient-text">Innovators</span> &{" "}
        <span className="gradient-text">Leaders</span>
      </>
    ),
    description:
      "Dr. K.V. Subba Reddy Institute of Technology (KVSRIT) offers world-class education with state-of-the-art infrastructure and a commitment to excellence in engineering and management.",
    overlayColor: "from-blue-900/70 via-indigo-900/60 to-purple-900/70",
    image: "/images/hero/hero-1.png",
    accent: "from-blue-500 to-cyan-400",
  },
  {
    id: 2,
    title: (
      <>
        Excellence in <span className="gradient-text">Education</span> &{" "}
        <span className="gradient-text">Research</span>
      </>
    ),
    description:
      "Join a community dedicated to pushing the boundaries of knowledge. Our expert faculty and modern labs provide the perfect environment for your academic growth.",
    overlayColor: "from-indigo-900/70 via-purple-900/60 to-violet-900/70",
    image: "/images/hero/hero-2.png",
    accent: "from-purple-500 to-pink-400",
  },
  {
    id: 3,
    title: (
      <>
        Vibrant <span className="gradient-text">Campus Life</span> &{" "}
        <span className="gradient-text">Culture</span>
      </>
    ),
    description:
      "Experience a holistic development journey with diverse cultural events, sports, and student clubs that shape your personality beyond academics.",
    overlayColor: "from-violet-900/70 via-blue-900/60 to-cyan-900/70",
    image: "images/hero/hero-1.png",
    accent: "from-cyan-500 to-emerald-400",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      handleSlideChange((current + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [current]);

  const handleSlideChange = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(newIndex);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const nextSlide = () => {
    handleSlideChange(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    handleSlideChange(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <div className="relative bg-gray-900 text-white overflow-hidden h-[700px] lg:h-[800px] flex items-center">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full filter blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-[120px] animate-float delay-300" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-500/15 rounded-full filter blur-[80px] animate-float delay-500" />
      </div>

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${index === current
            ? "opacity-100 z-10 scale-100"
            : "opacity-0 z-0 scale-105"
            }`}
        >
          {slide.image && (
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
          )}

          {/* Gradient Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${slide.overlayColor}`}
          />

          {/* Mesh Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent" />

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
            <div className="lg:w-2/3">
              {/* Badge */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 ${index === current ? 'animate-fade-in-up' : ''
                }`}>
                <Sparkles size={16} className="text-yellow-400" />
                <span className="text-sm font-medium">Admissions Open 2025-26</span>
              </div>

              {/* Title */}
              <h1 className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight mb-6 ${index === current ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: '100ms' }}>
                {slide.title}
              </h1>

              {/* Description */}
              <p className={`text-lg md:text-xl text-blue-100/90 mb-8 leading-relaxed max-w-2xl ${index === current ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: '200ms' }}>
                {slide.description}
              </p>

              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 ${index === current ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: '300ms' }}>
                <Link
                  href="/admissions/apply"
                  className={`group inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full bg-gradient-to-r ${slide.accent} text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1`}
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/about"
                  className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full glass hover:bg-white/20 transition-all duration-300"
                >
                  <Play size={18} className="mr-2" />
                  Take a Virtual Tour
                </Link>
              </div>

              {/* Stats Row */}
              <div className={`mt-12 flex flex-wrap gap-8 ${index === current ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: '400ms' }}>
                {[
                  { value: '2500+', label: 'Students' },
                  { value: '200+', label: 'Expert Faculty' },
                  { value: '15+', label: 'Years of Excellence' },
                  { value: '95%', label: 'Placement Rate' },
                ].map((stat, i) => (
                  <div key={i} className="text-center sm:text-left">
                    <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-blue-200/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 z-20 p-3 rounded-full glass hover:bg-white/20 text-white transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 z-20 p-3 rounded-full glass hover:bg-white/20 text-white transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Progress Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className="group relative"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className={`h-1.5 rounded-full transition-all duration-500 ${index === current
              ? `w-12 bg-gradient-to-r ${slide.accent}`
              : "w-6 bg-white/30 hover:bg-white/50"
              }`} />
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20 hidden lg:flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
      </div>
    </div>
  );
};

export default Hero;
