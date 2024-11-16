import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ContactUs = () => {
    return (
        <div className="min-h-[80vh] mt-[20px] bg-white flex items-center justify-center">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left Content Section */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-6xl md:text-8xl font-bold text-blue-600 mb-4">
                OOPS!
              </h1>
              <h2 className="text-3xl md:text-5xl font-semibold text-blue-600 mb-4">
                THE PAGE IN UNDER CONSTRUCTION
              </h2>
              <p className="text-gray-600 mb-8 max-w-lg">
              We’re working hard to bring this page to life! Stay tuned as we build something amazing just for you. Thank you for your patience and understanding.
                <br /> <br />
        💡 In the meantime, feel free to explore other sections of our website or get in touch with us for any inquiries.
              </p>
              <Link href="/">
                <button className="bg-blue-600 hover:bg-blue-700 text-white  py-2 px-6 rounded-full transition-colors duration-300">
                  Back to home
                </button>
              </Link>
            </div>
    
            {/* Right Image Section */}
            <div className="w-full md:w-1/2">
              <div className="relative w-full h-[600px]">
                <Image
                  src="/Assets/OtherImages/underconstruction.svg"
                  alt="Construction illustration with a crane, workers, and a computer screen"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      );
};

export default ContactUs;