'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [navBg, setNavBg] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 px-4 md:px-8 py-4 transition-all duration-300 ease-in-out ${
        navBg || mobileMenuOpen ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className={`transition text-2xl font-bold ${
      navBg ? 'text-blue-900' : 'text-white'
    } hover:text-blue-600 ${pathname === '/services' ? 'text-blue-600 font-semibold' : ''}`}>
          Mitali Nurse & Aya Service Centre 
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 font-medium">
  <Link
    href="/"
    className={`transition ${
      navBg ? 'text-blue-900' : 'text-white'
    } hover:text-blue-600 ${pathname === '/' ? 'text-blue-600 font-semibold' : ''}`}
  >
    Home
  </Link>
  <Link
    href="/services"
    className={`transition ${
      navBg ? 'text-blue-900' : 'text-white'
    } hover:text-blue-600 ${pathname === '/services' ? 'text-blue-600 font-semibold' : ''}`}
  >
    Services
  </Link>
  <Link
    href="/about"
    className={`transition ${
      navBg ? 'text-blue-900' : 'text-white'
    } hover:text-blue-600 ${pathname === '/about' ? 'text-blue-600 font-semibold' : ''}`}
  >
    About
  </Link>
  <Link
    href="/contact"
    className={`transition ${
      navBg ? 'text-blue-900' : 'text-white'
    } hover:text-blue-600 ${pathname === '/contact' ? 'text-blue-600 font-semibold' : ''}`}
  >
    Contact
  </Link>
</div>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 space-y-4 pb-4"
        >
          <Link href="/" className="block hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link href="/services" className="block hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>
            Services
          </Link>
          <Link href="/about" className="block hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>
            About
          </Link>
          <Link href="/contact" className="block hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </Link>
        </motion.div>
      )}
    </nav>
  );
}