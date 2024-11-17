// import React from 'react';

// const OurTeam = () => {
//   return (
//     <div className=" mx-auto px-4 container py-8 text-gray-800">
//       <div className="text-center flex flex-col justify-center items-center py-12">
//         <h1 className="text-5xl font-bold text-black-600">Meet the Visionaries Behind NexHub</h1>
//         <p className="text-lg mt-4 max-w-5xl">
//         At NexHub, our core team represents the driving force behind innovation, collaboration, and success. Each member brings unique expertise, passion, and dedication to creating solutions that make a difference. Together, we’re shaping the future, one step at a time.
//         </p>
//       </div>
//       <div className="flex flex-wrap justify-center gap-8 px-8 lg:flex-row md:flex-col">
//         <div className="text-center mb-8">
//           <div className="relative w-56 h-64 bg-yellow-500 flex items-center rounded-[20px] justify-center overflow-hidden">
//             <img
//               alt="Portrait of Mike Cannon-Brookes"
//               className="absolute top-0 transform w-full h-full transition-transform ease-in-out duration-500 hover:scale-110"
//               src="/Assets/MembersImages/naman.jpg"
//             />
//           </div>
//           <h2 className="text-xl font-bold mt-4">Naman Sisodiya</h2>
//           <p className="text-gray-600">
//             <a href="https://www.linkedin.com/in/naman-sisodiya-7632622aa?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2Fc5ErNcCQ%2BeH0AcOqm8lKQ%3D%3D" target="_blank">
//               Linkedin
//             </a>
//           </p>
//         </div>

//         <div className="text-center mb-8">
//           <div className="relative w-56 h-64 bg-green-500 flex items-center rounded-[20px] justify-center overflow-hidden">
//             <img
//               alt="Portrait of Scott Farquhar"
//               className="absolute top-0 transform w-full h-full transition-transform ease-in-out duration-500 hover:scale-110"
//               src="/Assets/MembersImages/shivam.jpg"
//             />
//           </div>
//           <h2 className="text-xl font-bold mt-4">Shivam Sharma</h2>
//           <p className="text-gray-600">
//             <a href="https://www.linkedin.com/in/shivam-sharma-ab489721b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BBmHzkPPOSASKDxXIxiAsxQ%3D%3D" target="_blank">
//               Linkedin
//             </a>
//           </p>
//         </div>

//         <div className="text-center mb-8">
//           <div className="relative w-56 h-64 bg-teal-500 rounded-[20px] flex items-center justify-center overflow-hidden">
//             <img
//               alt="Portrait of Anu Bharadwaj"
//               className="absolute top-0 transform w-full h-full transition-transform ease-in-out duration-500 hover:scale-110"
//               src="/Assets/MembersImages/vaidic.jpg"
//             />
//           </div>
//           <h2 className="text-xl font-bold mt-4">Vaidic Tiwari</h2>
//           <p className="text-gray-600">
//             <a href="https://www.linkedin.com/in/vaidictiwari?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
//               Linkedin
//             </a>
//           </p>
//         </div>

//         <div className="text-center mb-8">
//           <div className="relative w-56 h-64 bg-blue-500 rounded-[20px] flex items-center justify-center overflow-hidden">
//             <img
//               alt="Portrait of Team Member 4"
//               className="absolute top-0 transform w-full h-full transition-transform ease-in-out duration-500 hover:scale-110"
//               src="/Assets/MembersImages/aditya.jpg"
//             />
//           </div>
//           <h2 className="text-xl font-bold mt-4">Aditya Patel</h2>
//           <p className="text-gray-600">
//             <a href="https://www.linkedin.com/in/adityapatel09/" target="_blank">
//               Linkedin
//             </a>
//           </p>
//         </div>

//         <div className="text-center mb-8">
//           <div className="relative w-56 h-64 bg-red-500 rounded-[20px] flex items-center justify-center overflow-hidden">
//             <img
//               alt="Portrait of Team Member 5"
//               className="absolute transform w-full h-full transition-transform ease-in-out duration-500 hover:scale-110"
//               src="/Assets/MembersImages/shivani.jpg"
//             />
//           </div>
//           <h2 className="text-xl font-bold mt-4">Shivani Rathore</h2>
//           <p className="text-gray-600">
//             <a href="https://www.linkedin.com/in/shivani-rathore-697781310?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B2ncvRxi%2BS2uADOIxUEm%2FYg%3D%3D" target="_blank">
//               Linkedin
//             </a>
//           </p>
//         </div>
//       </div>
//       <div className="text-center mb-8">
//         <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
//           View Organisers
//         </button>
//       </div>
//     </div>
//   );
// };

// export default OurTeam;



import React from 'react';

const OurTeam = () => {
  return (
    <div className="mx-auto px-4 container py-8 text-gray-800">
      <div className="text-center flex flex-col justify-center items-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-black-600">Meet the Visionaries Behind NexHub</h1>
        <p className="text-lg mt-4 max-w-5xl">
          At NexHub, our core team represents the driving force behind innovation, collaboration, and success. Each member brings unique expertise, passion, and dedication to creating solutions that make a difference. Together, we're shaping the future, one step at a time.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-items-center">
        {/* Naman */}
        <div className="flex flex-col items-center w-full max-w-[224px]">
          <div className="relative w-56 h-64 bg-yellow-500 rounded-[20px] overflow-hidden">
            <img
              alt="Portrait of Naman Sisodiya"
              className="absolute top-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              src="/Assets/MembersImages/naman.jpg"
            />
          </div>
          <div className="mt-4 text-center w-full">
            <h2 className="text-xl font-bold">Naman Sisodiya</h2>
            <a 
              href="https://www.linkedin.com/in/naman-sisodiya-7632622aa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Linkedin
            </a>
          </div>
        </div>

        {/* Shivam */}
        <div className="flex flex-col items-center w-full max-w-[224px]">
          <div className="relative w-56 h-64 bg-green-500 rounded-[20px] overflow-hidden">
            <img
              alt="Portrait of Shivam Sharma"
              className="absolute top-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              src="/Assets/MembersImages/shivam.jpg"
            />
          </div>
          <div className="mt-4 text-center w-full">
            <h2 className="text-xl font-bold">Shivam Sharma</h2>
            <a 
              href="https://www.linkedin.com/in/shivam-sharma-ab489721b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Linkedin
            </a>
          </div>
        </div>

        {/* Vaidic */}
        <div className="flex flex-col items-center w-full max-w-[224px]">
          <div className="relative w-56 h-64 bg-teal-500 rounded-[20px] overflow-hidden">
            <img
              alt="Portrait of Vaidic Tiwari"
              className="absolute top-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              src="/Assets/MembersImages/vaidic.jpg"
            />
          </div>
          <div className="mt-4 text-center w-full">
            <h2 className="text-xl font-bold">Vaidic Tiwari</h2>
            <a 
              href="https://www.linkedin.com/in/vaidictiwari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Linkedin
            </a>
          </div>
        </div>

        {/* Aditya */}
        <div className="flex flex-col items-center w-full max-w-[224px]">
          <div className="relative w-56 h-64 bg-blue-500 rounded-[20px] overflow-hidden">
            <img
              alt="Portrait of Aditya Patel"
              className="absolute top-0 w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
              src="/Assets/MembersImages/aditya.jpg"
            />
          </div>
          <div className="mt-4 text-center w-full">
            <h2 className="text-xl font-bold">Aditya Patel</h2>
            <a 
              href="https://www.linkedin.com/in/adityapatel09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Linkedin
            </a>
          </div>
        </div>

        {/* Shivani */}
        <div className="flex flex-col items-center w-full max-w-[224px]">
          <div className="relative w-56 h-64 bg-red-500 rounded-[20px] overflow-hidden">
            <img
              alt="Portrait of Shivani Rathore"
className="absolute top-0 w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
              src="/Assets/MembersImages/shivani.jpg"
            />
          </div>
          <div className="mt-4 text-center w-full">
            <h2 className="text-xl font-bold">Shivani Rathore</h2>
            <a 
              href="https://www.linkedin.com/in/shivani-rathore-697781310"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>

      {/* <div className="text-center mt-12">
        <a href='/nexhubteam' className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded-full transition-colors">
          View Organisers
        </a>
      </div> */}
    </div>
  );
};

export default OurTeam;