import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                K
              </div>
              <span className="text-xl font-bold">KVSRIT</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Dr. K.V. Subba Reddy Institute of Technology (KVSRIT) is committed to providing quality education and fostering innovation in engineering and technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/academics" className="text-gray-400 hover:text-white text-sm transition-colors">Academics</Link>
              </li>
              <li>
                <Link href="/admissions" className="text-gray-400 hover:text-white text-sm transition-colors">Admissions</Link>
              </li>
              <li>
                <Link href="/facilities" className="text-gray-400 hover:text-white text-sm transition-colors">Campus Facilities</Link>
              </li>
              <li>
                <Link href="/placement" className="text-gray-400 hover:text-white text-sm transition-colors">Placements</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Departments */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Departments</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/academics/cse" className="text-gray-400 hover:text-white text-sm transition-colors">Computer Science (CSE)</Link>
              </li>
              <li>
                <Link href="/academics/ece" className="text-gray-400 hover:text-white text-sm transition-colors">Electronics & Comm. (ECE)</Link>
              </li>
              <li>
                <Link href="/academics/eee" className="text-gray-400 hover:text-white text-sm transition-colors">Electrical & Electronics (EEE)</Link>
              </li>
              <li>
                <Link href="/academics/civil" className="text-gray-400 hover:text-white text-sm transition-colors">Civil Engineering</Link>
              </li>
              <li>
                <Link href="/academics/mech" className="text-gray-400 hover:text-white text-sm transition-colors">Mechanical Engineering</Link>
              </li>
              <li>
                <Link href="/academics/mba" className="text-gray-400 hover:text-white text-sm transition-colors">MBA</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Dr. K.V. Subba Reddy Institute of Technology,
                  Dupadu, Kurnool - 518218,
                  Andhra Pradesh, India.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-blue-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+91 12345 67890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-blue-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@drkvsrit.ac.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {currentYear} KVSRIT. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-500 hover:text-white text-sm">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-white text-sm">Terms of Service</Link>
            <Link href="/sitemap" className="text-gray-500 hover:text-white text-sm">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
