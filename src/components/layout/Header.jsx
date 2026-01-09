"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, GraduationCap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (name) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const navItems = [
    { name: 'Home', href: '/' },
    {
      name: 'About',
      href: '/about',
      dropdown: [
        { name: 'About Us', href: '/about' },
        { name: 'Vision & Mission', href: '/about' },
        { name: 'Affiliation and Accreditation', href: '/about/affiliation' },
        { name: 'Management', href: '/leadership' },
        { name: 'Principal', href: '/leadership' },
        { name: 'Administration', href: '/about/administration' },
        { name: 'Governing Body', href: '/about/governing-body' },
        { name: 'College Academic Committee', href: '/about/academic-committee' },
        { name: 'Service Rules', href: '/about/service-rules' },
        { name: 'HR Policies and Strategic Plan', href: '/about/hr-policies' },
        { name: 'College Organogram', href: '/about/organogram' },
      ]
    },
    {
      name: 'Academics',
      href: '/academics',
      dropdown: [
        { name: 'Academic Calender', href: '/academics/calendar' },
        { name: 'Regulations and Syllabus', href: '/academics/regulations' },
        { name: 'Exam Cell', href: '/academics/exam-cell' },
        { name: 'Research and Development Cell', href: '/academics/research' },
        { name: 'Entrepreneurship Development Cell', href: '/academics/edc' },
        { name: 'Industry Institute Interaction Cell', href: '/academics/iiic' },
        { name: 'Governing Body', href: '/about/governing-body' },
        { name: 'IQAC', href: '/academics/iqac' },
        { name: 'College Academic Committee', href: '/about/academic-committee' },
        { name: 'Policies', href: '/academics/policies' },
      ]
    },
    {
      name: 'Campus',
      href: '/campus-life',
      dropdown: [
        { name: 'Campus Life', href: '/campus-life' },
        { name: 'Student Portal', href: '/student-portal' },
        { name: 'Alumni', href: '/alumni' },
        { name: 'Facilities', href: '/facilities' },
        { name: 'Events', href: '/events' },
      ]
    },
    {
      name: 'Courses',
      href: '/courses',
      dropdown: [
        { name: 'B.Tech', href: '/courses/btech' },
        { name: 'M.Tech', href: '/courses/mtech' },
        { name: 'MBA & MCA', href: '/courses/management' },
        { name: 'Diploma', href: '/courses/diploma' },
      ]
    },
    { name: 'Placements', href: '/placements' },
    {
      name: 'Admissions',
      href: '/admissions',
      dropdown: [
        { name: 'Admissions Procedure', href: '/admissions/procedure' },
        { name: 'Criteria for Admission', href: '/admissions/criteria' },
        { name: 'Programs Offered', href: '/admissions/programs' },
        { name: 'Fee Structure', href: '/admissions/fee-structure' },
        { name: 'Scholarships', href: '/admissions/scholarships' },
      ]
    },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
      ? 'bg-white/95 backdrop-blur-md shadow-lg'
      : 'bg-white shadow-md'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-blue-500/25 transition-shadow">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 leading-none">KVSRIT</span>
                <span className="text-xs text-gray-500 font-medium hidden sm:block">Dr. K.V. Subba Reddy Institute of Technology</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1 items-center">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <button
                    className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1 focus:outline-none hover:bg-blue-50 transition-colors"
                    onClick={() => toggleDropdown(item.name)}
                  >
                    {item.name}
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-blue-50"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Desktop Dropdown */}
                {item.dropdown && (
                  <div className="absolute left-0 mt-1 w-56 rounded-xl shadow-xl bg-white ring-1 ring-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left translate-y-2 group-hover:translate-y-0">
                    <div className="py-2 px-2" role="menu" aria-orientation="vertical">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                          role="menuitem"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/admissions/apply"
              className="ml-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Apply Now
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
        <div className="bg-white border-t border-gray-100 px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => (
            <div key={item.name}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="w-full text-left flex justify-between items-center px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    {item.name}
                    <ChevronDown size={16} className={`transform transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-200 ${activeDropdown === item.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="pl-4 space-y-1 py-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-4">
            <Link
              href="/admissions/apply"
              className="block w-full text-center px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg transition-shadow"
              onClick={() => setIsMenuOpen(false)}
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
