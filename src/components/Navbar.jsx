// 'use client';
// import { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { IoMenu } from "react-icons/io5";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <>
//       <header className="flex justify-between items-center mb-8">
//         <div className="flex items-center">
//           <Image src="/placeholder.jpg" alt="Logo" width={40} height={40} className="mr-2"/>
//           <span className="text-xl font-bold">LAMAN.CO</span>
//         </div>
//         <nav className="hidden md:flex space-x-4">
//           <Link href="#" className="text-gray-600">Blog</Link>
//           <Link href="#" className="text-gray-600">For Developers</Link>
//           <Link href="#" className="text-gray-600">About Us</Link>
//           <Link href="#" className="text-gray-600">Faq</Link>
//           <Link href="#" className="text-gray-600">Resources</Link>
//         </nav>
//         <button className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded">
//           Register
//         </button>
//         <button 
//           className="md:hidden text-gray-600" 
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           <i className={`fas ${menuOpen ? 'fa-times' : 'fa-solid fa-bars'} text-2xl`}></i>
//         </button>
//       </header>
      
//       {menuOpen && (
//         <nav className="md:hidden flex flex-col space-y-4 mb-8 transition-all duration-300">
//           <Link href="#" className="text-gray-600">Blog</Link>
//           <Link href="#" className="text-gray-600">For Developers</Link>
//           <Link href="#" className="text-gray-600">About Us</Link>
//           <Link href="#" className="text-gray-600">Faq</Link>
//           <Link href="#" className="text-gray-600">Resources</Link>
//           <button className="bg-blue-500 text-white px-4 py-2 rounded">
//             Register
//           </button>
//         </nav>
//       )}
//     </>
//   );
// };

// export default Navbar;

'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center mb-8 px-6 md:px-12 lg:px-16 py-6 bg-white shadow-sm">
        <div className="flex items-center">
          <Image 
            src="/Assets/OtherImages/logo.svg" 
            alt="Logo" 
            width={45} 
            height={45} 
            className="mr-3"
          />
          <span className="text-3xl font-bold tracking-tight">NEXHUB</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8 mx-8">
          <Link 
            href="#" 
            className="text-gray-600 hover:text-gray-900 text-lg font-medium transition-colors duration-200"
          >
            Blog
          </Link>
          <Link 
            href="#" 
            className="text-gray-600 hover:text-gray-900 text-lg font-medium transition-colors duration-200"
          >
            For Developers
          </Link>
          <Link 
            href="#" 
            className="text-gray-600 hover:text-gray-900 text-lg font-medium transition-colors duration-200"
          >
            About Us
          </Link>
          <Link 
            href="#" 
            className="text-gray-600 hover:text-gray-900 text-lg font-medium transition-colors duration-200"
          >
            FAQ
          </Link>
          <Link 
            href="#" 
            className="text-gray-600 hover:text-gray-900 text-lg font-medium transition-colors duration-200"
          >
            Resources
          </Link>
        </nav>
        
        <button className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2.5 rounded-lg text-lg font-medium transition-colors duration-200">
          Register
        </button>
        
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
      
      {menuOpen && (
        <nav className="md:hidden flex flex-col space-y-4 mb-8 px-6 py-4 bg-white shadow-md transition-all duration-300">
          <Link 
            href="#" 
            className="text-gray-600 hover:text-gray-900 text-lg font-medium py-2 transition-colors duration-200"
          >
            Blog
          </Link>
          <Link 
            href="#" 
            className="text-gray-600 hover:text-gray-900 text-lg font-medium py-2 transition-colors duration-200"
          >
            For Developers
          </Link>
          <Link 
            href="#" 
            className="text-gray-600 hover:text-gray-900 text-lg font-medium py-2 transition-colors duration-200"
          >
            About Us
          </Link>
          <Link 
            href="#" 
            className="text-gray-600 hover:text-gray-900 text-lg font-medium py-2 transition-colors duration-200"
          >
            FAQ
          </Link>
          <Link 
            href="#" 
            className="text-gray-600 hover:text-gray-900 text-lg font-medium py-2 transition-colors duration-200"
          >
            Resources
          </Link>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2.5 rounded-lg text-lg font-medium transition-colors duration-200">
            Register
          </button>
        </nav>
      )}
    </>
  );
};

export default Navbar;