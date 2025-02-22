import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaWhatsapp, FaLinkedin, FaEnvelope, FaFacebook, FaTwitter, FaYoutube, FaPinterest } from 'react-icons/fa';
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";

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
              href="https://www.instagram.com/nexhubcommunity/?utm_source=ig_web_button_share_sheet" 
              target="_blank"
              className="text-gray-200 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </Link>
            <Link 
              href="https://api.whatsapp.com/send?phone=6266061914&text=Hello!%20I%20want%20to%20know%20about...%20" 
              target="_blank"
              className="text-gray-200 hover:text-white transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={24} />
            </Link>
            <Link 
              href="mailto:nexhub.contact@gmail.com"
              className="text-gray-200 hover:text-white transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </Link>
            <Link 
              href="#" 
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
                <Link href="/aboutus" className="text-gray-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-200 hover:text-white transition-colors">
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
                <Link href="/contactus" className="text-gray-200 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-gray-200 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-200 hover:text-white transition-colors">
                  Privacy & Policy
                </Link>
              </li>
              <li>
                <Link href="/feedbackandsuggestions" className="text-gray-200 hover:text-white transition-colors">
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
                  href="https://api.whatsapp.com/send?phone=6266061914&text=Hello!%20I%20want%20to%20know%20about...%20" 
                  target="_blank"
                  className="text-gray-200 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <RiWhatsappFill size={16} /> Whatsapp
                </Link>
              </li>
              <li>
                <Link 
                  href="mailto:nexhub.contact@gmail.com" 
                  target="_blank"
                  className="text-gray-200 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <FaEnvelope size={16} /> Mail
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.instagram.com/nexhubcommunity/?utm_source=ig_web_button_share_sheet" 
                  target="_blank"
                  className="text-gray-200 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <AiFillInstagram size={16} /> Instagram
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  target="_blank"
                  className="text-gray-200 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <FaLinkedin size={16} /> Linkedin
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