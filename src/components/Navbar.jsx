'use client';
import { useState, useEffect  } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false); // Close the menu on component mount (after a reload)
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <header className="flex justify-between items-center px-6 md:px-12 lg:px-16 py-2 bg-white shadow-sm">
        <div className="flex items-center">
          <Image 
            src="/Assets/OtherImages/logo.svg" 
            alt="Logo" 
            width={45} 
            height={45} 
            className="mr-3"
          />
          <span className="text-2xl md:text-3xl  font-bold text-gray-800 tracking-tight">
            <Link href="/">NEXHUB</Link>
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 mx-8">
          <Link 
            href="/aboutus" 
            className="text-gray-600 hover:text-gray-900 text-lg font-medium transition-colors duration-200"
          >
            About Us
          </Link>
          <Link 
            href="/events" 
            className="text-gray-600 hover:text-gray-900 text-lg font-medium transition-colors duration-200"
          >
            Events
          </Link>
          <Link 
            href="/events-image-gallery" 
            className="text-gray-600 hover:text-gray-900 text-lg font-medium transition-colors duration-200"
          >
            Event Gallery
          </Link>
          <Link 
            href="/contactus" 
            className="text-gray-600 hover:text-gray-900 text-lg font-medium transition-colors duration-200"
          >
            Contact Us
          </Link>
          <Link 
            href="/feedbackandsuggestions" 
            className="text-gray-600 hover:text-gray-900 text-lg font-medium transition-colors duration-200"
          >
            Feedback
          </Link>
        </nav>
        
        <a href='/gamealchemy-gaming-development-workshop' className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-lg font-medium transition-colors duration-200">
          Register
        </a>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600 p-2" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <IoClose className="text-3xl" />
          ) : (
            <IoMenu className="text-3xl" />
          )}
        </button>
      </header>

      {/* Mobile Navigation */}
      <div 
        className={`absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        } z-40`}
      >
        <nav className="flex flex-col px-6 py-4">
          <Link 
            href="/aboutus" 
            className="text-gray-600 hover:text-gray-900 text-lg font-medium py-2 transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <Link 
            href="/events" 
            className="text-gray-600 hover:text-gray-900 text-lg font-medium py-2 transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Events
          </Link>
          <Link 
            href="/events-image-gallery" 
            className="text-gray-600 hover:text-gray-900 text-lg font-medium py-2 transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
           Event Gallery
          </Link>
          <Link 
            href="/contactus" 
            className="text-gray-600 hover:text-gray-900 text-lg font-medium py-2 transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
          <Link 
            href="/feedbackandsuggestions" 
            className="text-gray-600 hover:text-gray-900 text-lg font-medium py-2 transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Feedback
          </Link>
          <a href='/gamealchemy-gaming-development-workshop' className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-lg font-medium transition-colors duration-200 mt-2" onClick={() => setMenuOpen(false)}>
            Register
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
