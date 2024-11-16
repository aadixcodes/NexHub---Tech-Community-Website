import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaWhatsapp, FaLinkedin, FaEnvelope, FaFacebook, FaTwitter, FaYoutube, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-4">
        {/* First Row - Logo and Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold">NexHub</h2>
            <p className="text-gray-200">Connect, Learn & Grow.</p>
          </div>
          <div className="flex space-x-6 items-center">
            <Link 
              href="https://www.instagram.com" 
              target="_blank"
              className="text-gray-200 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </Link>
            <Link 
              href="https://wa.me" 
              target="_blank"
              className="text-gray-200 hover:text-white transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={24} />
            </Link>
            <Link 
              href="mailto:info@nexhub.com"
              className="text-gray-200 hover:text-white transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </Link>
            <Link 
              href="https://www.linkedin.com" 
              target="_blank"
              className="text-gray-200 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </Link>
          </div>
        </div>

        {/* Second Row - Navigation Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-lg text-center font-semibold mb-4">Quick Links</h3>
            <ul className="text-center space-y-2">
              <li>
                <Link href="/" className="text-gray-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-200 hover:text-white transition-colors">
                  Events & Meetups
                </Link>
              </li>
              <li>
                <Link href="/eventsgallery" className="text-gray-200 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg text-center font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-center">
              <li>
                <Link href="/blog" className="text-gray-200 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-gray-200 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-200 hover:text-white transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-200 hover:text-white transition-colors">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg text-center font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2 text-center">
              <li>
                <Link 
                  href="https://www.facebook.com" 
                  target="_blank"
                  className="text-gray-200 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <FaFacebook size={16} /> Facebook
                </Link>
              </li>
              <li>
                <Link 
                  href="https://twitter.com" 
                  target="_blank"
                  className="text-gray-200 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <FaTwitter size={16} /> Twitter
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.youtube.com" 
                  target="_blank"
                  className="text-gray-200 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <FaYoutube size={16} /> YouTube
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.pinterest.com" 
                  target="_blank"
                  className="text-gray-200 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <FaPinterest size={16} /> Pinterest
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Third Row - Copyright */}
        <div className="text-center text-gray-200 border-t border-gray-500 pt-8">
          <p>&copy; {new Date().getFullYear()} NexHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;