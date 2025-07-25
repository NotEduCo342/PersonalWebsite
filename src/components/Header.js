'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/50 backdrop-blur-sm shadow-lg' : ''}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          Mahan
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="text-slate-300 hover:text-white transition-colors">About</Link>
          <Link href="#projects" className="text-slate-300 hover:text-white transition-colors">Projects</Link>
          <Link href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</Link>
        </div>

        <Link href="#contact" className="hidden md:block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-5 py-2 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.6)]">
          Get In Touch
        </Link>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </nav>

      {/* --- MODIFIED MOBILE MENU --- */}
      {/* We are changing the classes here to allow for a smooth transition */}
      <div className={`
        md:hidden overflow-hidden transition-all duration-300 ease-in-out
        ${isMenuOpen ? 'max-h-48' : 'max-h-0'} 
        bg-gray-900/80 backdrop-blur-sm
      `}>
        <div className="py-2"> {/* Added padding wrapper for better spacing */}
          <Link href="#about" onClick={() => setIsMenuOpen(false)} className="block py-2 px-4 text-sm text-slate-300 hover:bg-gray-700">About</Link>
          <Link href="#projects" onClick={() => setIsMenuOpen(false)} className="block py-2 px-4 text-sm text-slate-300 hover:bg-gray-700">Projects</Link>
          <Link href="#contact" onClick={() => setIsMenuOpen(false)} className="block py-2 px-4 text-sm text-slate-300 hover:bg-gray-700">Contact</Link>
        </div>
      </div>
    </header>
  );
}