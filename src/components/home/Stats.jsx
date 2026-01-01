"use client";

import { useState, useEffect, useRef } from 'react';
import { Users, GraduationCap, Award, BookOpen, TrendingUp, Globe } from 'lucide-react';

const stats = [
  { id: 1, name: 'Students Enrolled', value: 2500, suffix: '+', icon: Users, color: 'from-blue-500 to-cyan-400' },
  { id: 2, name: 'Expert Faculty', value: 200, suffix: '+', icon: GraduationCap, color: 'from-purple-500 to-pink-400' },
  { id: 3, name: 'Years of Excellence', value: 15, suffix: '+', icon: Award, color: 'from-amber-500 to-orange-400' },
  { id: 4, name: 'Courses Offered', value: 12, suffix: '+', icon: BookOpen, color: 'from-emerald-500 to-teal-400' },
  { id: 5, name: 'Placement Rate', value: 95, suffix: '%', icon: TrendingUp, color: 'from-rose-500 to-red-400' },
  { id: 6, name: 'Industry Partners', value: 50, suffix: '+', icon: Globe, color: 'from-indigo-500 to-violet-400' },
];

// Animated Counter Component
const AnimatedCounter = ({ value, suffix, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const startValue = 0;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (value - startValue) + startValue);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, value, duration]);

  return (
    <span ref={counterRef} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-100 rounded-full filter blur-[100px] opacity-50" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-100 rounded-full filter blur-[120px] opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
            Our Achievements
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Excellence in <span className="gradient-text">Numbers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A testament to our unwavering commitment to quality education and student success.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((item, index) => (
            <div
              key={item.id}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-white rounded-2xl p-6 shadow-lg shadow-gray-100/50 border border-gray-100 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 hover:-translate-y-2 h-full">
                {/* Gradient Top Border */}
                <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="h-7 w-7 text-white" aria-hidden="true" />
                </div>

                {/* Value */}
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                  <AnimatedCounter value={item.value} suffix={item.suffix} />
                </div>

                {/* Label */}
                <p className="text-sm text-gray-500 font-medium leading-tight">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl glass-card border border-gray-200">
            <div className="text-left">
              <p className="text-sm text-gray-500">Join our growing community</p>
              <p className="text-lg font-semibold text-gray-900">Start Your Journey Today</p>
            </div>
            <a
              href="/admissions"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
