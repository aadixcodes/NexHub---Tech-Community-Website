// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import { FaUsers, FaStar } from 'react-icons/fa';

// const Collaborators = () => {
//   return (
//     <div className="min-h-[20vh] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4">
//       <div className="bg-white w-full max-w-4xl rounded-2xl  overflow-hidden">
//         <div className="bg-blue-50 p-6 text-center">
//           <h1 className="text-4xl font-extrabold text-gray-800 flex items-center justify-center gap-4">
//             <FaUsers className="text-blue-500" size={44} />
//             Collaborator
//             <FaUsers className="text-blue-500" size={44} />
//           </h1>
//         </div>
        
//         <div className="flex flex-col md:flex-row justify-between items-center p-8 space-y-6 md:space-y-0">
//           <div className="w-full md:w-1/3 flex justify-center hover:scale-105 transition-transform duration-300">
//             <Image 
//               src='/Assets/EventPage/GamingDevelopment/UpthrustLogo.webp' 
//               alt="Logo of Collaborator 1" 
//               width={250} 
//               height={150}
//               className="rounded-xl shadow-lg"
//             />
//           </div>
          
//           <div className="w-full md:w-1/3 flex justify-center">
//             <div className="text-6xl font-bold text-gray-600 flex items-center gap-4">
//               {/* <FaStar className="text-yellow-500" size={48} /> */}
//               X
//               {/* <FaStar className="text-yellow-500" size={48} /> */}
//             </div>
//           </div>
          
//           <div className="w-full md:w-1/3 flex justify-center hover:scale-105 transition-transform duration-300">
//             <Image 
//               src='/Assets/EventPage/GamingDevelopment/NexhubLogo.svg' 
//               alt="Logo of Collaborator 2" 
//               width={230} 
//               height={130}
//               className="rounded-xl"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Collaborators;


'use client';

import React from 'react';
import Image from 'next/image';
import { FaUsers } from 'react-icons/fa';

const Collaborators = () => {
  return (
    <div className="min-h-[20vh] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-4xl rounded-2xl overflow-hidden">
        <div className="bg-blue-50 p-6 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 flex items-center justify-center gap-4">
            <FaUsers className="text-blue-500" size={44} />
            Collaborator
            <FaUsers className="text-blue-500" size={44} />
          </h1>
        </div>
        
        {/* <div className="flex flex-col md:flex-row items-center justify-center p-8 space-y-6 md:space-y-0">
          <div className="w-full md:w-1/3 flex justify-end md:pr-8 hover:scale-105 transition-transform duration-300">
            <Image 
              src='/Assets/EventPage/GamingDevelopment/UpthrustLogo.webp' 
              alt="Logo of Collaborator 1" 
              width={250} 
              height={150}
              className="rounded-xl shadow-lg"
            />
          </div>
          
          <div className="w-auto flex justify-center mx-4 md:mx-8">
            <div className="text-6xl font-bold text-gray-600">
              X
            </div>
          </div>
          
          <div className="w-full md:w-1/3 flex justify-start md:pl-8 hover:scale-105 transition-transform duration-300">
            <Image 
              src='/Assets/EventPage/GamingDevelopment/NexhubLogo.svg' 
              alt="Logo of Collaborator 2" 
              width={230} 
              height={130}
              className="rounded-xl"
            />
          </div>
        </div> */}
<div className="flex flex-col md:flex-row items-center justify-center p-8 space-y-6 md:space-y-0">
  <div className="w-full md:w-1/3 flex justify-center md:justify-end items-center hover:scale-105 transition-transform duration-300">
    <Image 
      src='/Assets/EventPage/GamingDevelopment/UpthrustLogo.webp' 
      alt="Logo of Collaborator 1" 
      width={250} 
      height={150}
      className="rounded-xl"
    />
  </div>
  
  <div className="w-auto flex justify-center items-center mx-4 md:mx-[80px]">
    <div className="text-6xl font-bold text-gray-600">
      X
    </div>
  </div>
  
  <div className="w-full md:w-1/3 flex justify-center md:justify-start items-center hover:scale-105 transition-transform duration-300">
    <Image 
      src='/Assets/EventPage/GamingDevelopment/NexhubLogo.svg' 
      alt="Logo of Collaborator 2" 
      width={230} 
      height={130}
      className="rounded-xl"
    />
  </div>
</div>




      </div>
    </div>
  );
}

export default Collaborators;