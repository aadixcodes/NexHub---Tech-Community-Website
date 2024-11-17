// 'use client';
// import Image from 'next/image';
// import { FaGlobe, FaRupeeSign } from "react-icons/fa";
// import GamingDevOrganisers from '@/components/GamingDevOrganisers';

// const CreatechGamingDevelopmentWorkshop = () => {
//   return (
//     <>
//     <div className="bg-gray-50 min-h-screen mt-[5rem] py-8">
//       <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <h1 className="text-2xl font-bold mb-4">
//               Master the Art of Game Development in Our Intercollege Workshop!
//             </h1>
//             <div className="text-gray-600 mb-4 flex items-center gap-2">
//               <FaGlobe className="text-gray-600" />
//               <span>Venue: ABC College Auditorium |</span>
//               <FaRupeeSign className="text-gray-600" />
//               <span>Entry Fee: ₹150</span>
//             </div>
//             <div className="flex items-center mb-4">
//               <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-semibold transition-colors duration-200">
//                 Register now
//               </button>
//               <div className="flex items-center ml-4">
//                 <Image
//                   src="/Assets/OtherImages/participate.jpg"
//                   alt="Profile picture of a registered user"
//                   width={30}
//                   height={30}
//                   className="rounded-full"
//                 />
//                 <span className="ml-2 text-gray-600">
//                   +422 participants registered
//                 </span>
//               </div>
//             </div>
//           </div>
//           <div className="flex justify-center">
//             <Image
//               src="/Assets/EventPage/GamingDevelopment/gamingdevimg.svg"
//               alt="Illustration of a gaming developer"
//               width={150}
//               height={150}
//               className="w-64 h-64 object-cover"
//             />
//           </div>
//         </div>

//         <div className="border-t border-gray-200 pt-4 mt-4">
//           <h2 className="text-xl font-semibold mb-2">
//             Workshop Details
//           </h2>
//           <p className="text-gray-700 mb-4">
//             Dive into the world of game development with our intercollege workshop. Learn from experts, build your first game, and network with like-minded enthusiasts!
//           </p>

//           <h3 className="text-lg font-semibold mb-2">
//             Key Highlights:
//           </h3>
//           <ul className="list-disc list-inside text-gray-700 mb-4">
//             <li>
//               <strong>Introduction to Game Engines:</strong> Get hands-on experience with tools like Unity and Unreal Engine.
//             </li>
//             <li>
//               <strong>Game Mechanics and Design:</strong> Learn the principles behind engaging and successful games.
//             </li>
//             <li>
//               <strong>Build Your First Game:</strong> Create a playable game during the workshop.
//             </li>
//             <li>
//               <strong>Networking Opportunities:</strong> Meet experienced developers and industry experts.
//             </li>
//             <li>
//               <strong>Q&A with Mentors:</strong> Resolve all your doubts and explore career paths in game development.
//             </li>
//           </ul>

//           <h3 className="text-lg font-semibold mb-2">
//             Why Attend This Workshop?
//           </h3>
//           <ul className="list-disc list-inside text-gray-700 mb-4">
//             <li>
//               <strong>Industry Insights:</strong> Understand the gaming industry’s trends and demands.
//             </li>
//             <li>
//               <strong>Portfolio Building:</strong> Add your game project to your portfolio.
//             </li>
//             <li>
//               <strong>Skill Development:</strong> Gain skills that are in demand in the gaming industry.
//             </li>
//           </ul>

//           <h3 className="text-lg font-semibold mb-2">
//             Who Can Join?
//           </h3>
//           <ul className="list-disc list-inside text-gray-700 mb-4">
//             <li>Students interested in game development.</li>
//             <li>Beginners looking to explore game design and mechanics.</li>
//             <li>Tech enthusiasts and gamers eager to create their first game.</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//     <GamingDevOrganisers />
//     </>
//   );
// };

// export default CreatechGamingDevelopmentWorkshop;

"use client";
import Image from "next/image";
import { FaGlobe, FaRupeeSign } from "react-icons/fa";
import GamingDevOrganisers from "@/components/GamingDevOrganisers";

const CreatechGamingDevelopmentWorkshop = () => {
  return (
    <>
      <div className="bg-gray-50 min-h-screen mt-[5rem] py-8">
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h1 className="text-2xl font-bold mb-4">
                Master the Art of Game Development in Our Intercollege Workshop!
              </h1>
              <div className="text-gray-600 mb-4 flex flex-col sm:flex-row items-start sm:items-center gap-2">
                <div className="flex items-center gap-1">
                  <FaGlobe className="text-gray-600" />
                  <span>Venue: ABC College Auditorium</span>
                </div>
                <div className="flex items-center gap-1 mt-1 sm:mt-0">
                  <FaRupeeSign className="text-gray-600" />
                  <span>Entry Fee: ₹150</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center mb-4 gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-semibold transition-colors duration-200">
                  Register Now
                </button>
                <div className="flex items-center">
                  <Image
                    src="/Assets/OtherImages/participate.jpg"
                    alt="Profile picture of a registered user"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                  <span className="ml-2 text-gray-600 whitespace-nowrap">
                    +422 Participants registered
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/Assets/EventPage/GamingDevelopment/gamingdevimg.svg"
                alt="Illustration of a gaming developer"
                width={150}
                height={150}
                className="w-64 h-64 object-cover"
              />
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4 mt-4">
            <h2 className="text-xl font-semibold mb-2">Workshop Details</h2>
            <p className="text-gray-700 mb-4">
              Dive into the world of game development with our intercollege
              workshop. Learn from experts, build your first game, and network
              with like-minded enthusiasts!
            </p>

            <h3 className="text-lg font-semibold mb-2">Key Highlights:</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>
                <strong>Introduction to Game Engines:</strong> Get hands-on
                experience with tools like Unity and Unreal Engine.
              </li>
              <li>
                <strong>Game Mechanics and Design:</strong> Learn the principles
                behind engaging and successful games.
              </li>
              <li>
                <strong>Build Your First Game:</strong> Create a playable game
                during the workshop.
              </li>
              <li>
                <strong>Networking Opportunities:</strong> Meet experienced
                developers and industry experts.
              </li>
              <li>
                <strong>Q&A with Mentors:</strong> Resolve all your doubts and
                explore career paths in game development.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">
              Why Attend This Workshop?
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>
                <strong>Industry Insights:</strong> Understand the gaming
                industry’s trends and demands.
              </li>
              <li>
                <strong>Portfolio Building:</strong> Add your game project to
                your portfolio.
              </li>
              <li>
                <strong>Skill Development:</strong> Gain skills that are in
                demand in the gaming industry.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Who Can Join?</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Students interested in game development.</li>
              <li>Beginners looking to explore game design and mechanics.</li>
              <li>
                Tech enthusiasts and gamers eager to create their first game.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <GamingDevOrganisers />
    </>
  );
};

export default CreatechGamingDevelopmentWorkshop;
