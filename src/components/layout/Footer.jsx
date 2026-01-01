"use client";

import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ArrowRight,
  GraduationCap
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Academics', href: '/academics' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Campus Life', href: '/campus-life' },
    { name: 'Research', href: '/research' },
    { name: 'Placements', href: '/placements' },
  ];

  const academicLinks = [
    { name: 'B.Tech Programs', href: '/courses/btech' },
    { name: 'M.Tech Programs', href: '/courses/mtech' },
    { name: 'MBA & MCA', href: '/courses/management' },
    { name: 'Departments', href: '/departments' },
    { name: 'Library', href: '/library' },
    { name: 'Student Resources', href: '/academics/resources' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-sky-400' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-500' },
  ];

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-[128px]" />
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="glass rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Stay Updated with KVSRIT</h3>
                <p className="text-blue-200 opacity-80">Get the latest news, events, and announcements delivered to your inbox.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-auto"
                />
                <button className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap">
                  Subscribe <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* About Column */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold block leading-tight">KVSRIT</span>
                  <span className="text-xs text-blue-300">Excellence in Education</span>
                </div>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Dr. K.V. Subba Reddy Institute of Technology is committed to providing quality education and fostering innovation. Our motto &quot;Work is Worship&quot; drives everything we do.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 hover:bg-white/10 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h4 className="text-lg font-semibold mb-6 relative inline-block">
                Quick Links
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400"></span>
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <ArrowRight size={14} className="opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Academics Column */}
            <div>
              <h4 className="text-lg font-semibold mb-6 relative inline-block">
                Academics
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-400"></span>
              </h4>
              <ul className="space-y-3">
                {academicLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <ArrowRight size={14} className="opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="text-lg font-semibold mb-6 relative inline-block">
                Contact Us
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-400"></span>
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">
                      Dupadu, Kurnool - 518218<br />
                      Andhra Pradesh, India
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-emerald-400" />
                  </div>
                  <div>
                    <a href="tel:+911234567890" className="text-gray-400 hover:text-white transition-colors text-sm">
                      +91 12345 67890
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-purple-400" />
                  </div>
                  <div>
                    <a href="mailto:info@drkvsrit.ac.in" className="text-gray-400 hover:text-white transition-colors text-sm">
                      info@drkvsrit.ac.in
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
              <div className="flex flex-col items-center lg:items-start gap-2">
                <p className="text-gray-500 text-sm">
                  © {currentYear} Dr. K.V. Subba Reddy Institute of Technology. All rights reserved.
                </p>
                <p className="text-xs text-gray-600">Affiliated to JNTUA & Approved by AICTE | NAAC A+ Accredited</p>
              </div>

              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-bold uppercase tracking-widest">
                <Link href="/iqac" className="text-gray-400 hover:text-blue-400 transition-colors">IQAC</Link>
                <Link href="/mandatory-disclosures" className="text-gray-400 hover:text-blue-400 transition-colors">Mandatory Disclosures</Link>
                <Link href="/mandatory-disclosures" className="text-gray-400 hover:text-blue-400 transition-colors">RTI</Link>
                <Link href="/alumni" className="text-gray-400 hover:text-blue-400 transition-colors">Alumni</Link>
                <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors">Privacy</Link>
                <Link href="/terms" className="text-gray-500 hover:text-white transition-colors">Terms</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
