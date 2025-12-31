"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

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
    { name: 'About', href: '/about' },
    {
      name: 'Academics',
      href: '/academics',
      dropdown: [
        { name: 'Overview', href: '/academics' },
        { name: 'Departments', href: '/departments' },
        { name: 'Student Resources', href: '/academics/resources' },
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
    { name: 'Admissions', href: '/admissions' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' },

  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-xl">
                K
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-blue-900 leading-none">KVSRIT</span>
                <span className="text-xs text-gray-600 font-medium">Dr. K.V. Subba Reddy Institute of Technology</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <button
                    className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 focus:outline-none"
                    onClick={() => toggleDropdown(item.name)}
                  >
                    {item.name}
                    <ChevronDown size={16} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Desktop Dropdown */}
                {item.dropdown && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900"
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
              className="bg-blue-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-800 transition-colors shadow-sm"
            >
              Apply Now
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="w-full text-left flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50"
                    >
                      {item.name}
                      <ChevronDown size={16} className={`transform transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="pl-4 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-900 hover:bg-gray-50"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 pb-2">
              <Link
                href="/admissions/apply"
                className="block w-full text-center px-5 py-3 rounded-md font-medium text-white bg-blue-900 hover:bg-blue-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
