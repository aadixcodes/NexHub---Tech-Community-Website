// import React from 'react';

// const OurTeam = () => {
//   return (
//     <div className="mx-auto px-4 my-12  container py-8 text-gray-800">
//       <div className="text-center flex flex-col justify-center items-center py-12">
//         <h1 className="text-4xl md:text-5xl font-bold text-black-600">Meet the <span className='text-blue-500'> Visionaries </span> Behind NexHub</h1>
//         <p className="text-lg text-gray-600 mt-4 max-w-5xl">
//           At NexHub, our core team represents the driving force behind innovation, collaboration, and success. Each member brings unique expertise, passion, and dedication to creating solutions that make a difference. Together, we're shaping the future, one step at a time.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-items-center">
//         {/* Naman */}
//         <div className="flex flex-col items-center w-full max-w-[224px]">
//           <div className="relative w-56 h-64 bg-yellow-500 rounded-[20px] overflow-hidden">
//             <img
//               alt="Portrait of Naman Sisodiya"
//               className="absolute top-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//               src="/Assets/MembersImages/naman.jpg"
//             />
//           </div>
//           <div className="mt-4 text-center w-full">
//             <h2 className="text-xl font-bold">Naman Sisodiya</h2>
//             <a 
//               href="https://www.linkedin.com/in/naman-sisodiya-7632622aa"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-600 hover:text-blue-600 transition-colors"
//             >
//               Linkedin
//             </a>
//           </div>
//         </div>

//         {/* Shivam */}
//         <div className="flex flex-col items-center w-full max-w-[224px]">
//           <div className="relative w-56 h-64 bg-green-500 rounded-[20px] overflow-hidden">
//             <img
//               alt="Portrait of Shivam Sharma"
//               className="absolute top-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//               src="/Assets/MembersImages/shivam.jpg"
//             />
//           </div>
//           <div className="mt-4 text-center w-full">
//             <h2 className="text-xl font-bold">Shivam Sharma</h2>
//             <a 
//               href="https://www.linkedin.com/in/shivam-sharma-ab489721b"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-600 hover:text-blue-600 transition-colors"
//             >
//               Linkedin
//             </a>
//           </div>
//         </div>

//         {/* Vaidic */}
//         <div className="flex flex-col items-center w-full max-w-[224px]">
//           <div className="relative w-56 h-64 bg-teal-500 rounded-[20px] overflow-hidden">
//             <img
//               alt="Portrait of Vaidic Tiwari"
//               className="absolute top-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//               src="/Assets/MembersImages/vaidic.jpg"
//             />
//           </div>
//           <div className="mt-4 text-center w-full">
//             <h2 className="text-xl font-bold">Vaidic Tiwari</h2>
//             <a 
//               href="https://www.linkedin.com/in/vaidictiwari"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-600 hover:text-blue-600 transition-colors"
//             >
//               Linkedin
//             </a>
//           </div>
//         </div>

//         {/* Aditya */}
//         <div className="flex flex-col items-center w-full max-w-[224px]">
//           <div className="relative w-56 h-64 bg-blue-500 rounded-[20px] overflow-hidden">
//             <img
//               alt="Portrait of Aditya Patel"
//               className="absolute top-0 w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
//               src="/Assets/MembersImages/aditya.jpg"
//             />
//           </div>
//           <div className="mt-4 text-center w-full">
//             <h2 className="text-xl font-bold">Aditya Patel</h2>
//             <a 
//               href="https://www.linkedin.com/in/adityapatel09"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-600 hover:text-blue-600 transition-colors"
//             >
//               Linkedin
//             </a>
//           </div>
//         </div>

//         {/* Shivani */}
//         <div className="flex flex-col items-center w-full max-w-[224px]">
//           <div className="relative w-56 h-64 bg-red-500 rounded-[20px] overflow-hidden">
//             <img
//               alt="Portrait of Shivani Rathore"
// className="absolute top-0 w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
//               src="/Assets/MembersImages/shivani.jpg"
//             />
//           </div>
//           <div className="mt-4 text-center w-full">
//             <h2 className="text-xl font-bold">Shivani Rathore</h2>
//             <a 
//               href="https://www.linkedin.com/in/shivani-rathore-697781310"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-600 hover:text-blue-600 transition-colors"
//             >
//               Linkedin
//             </a>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default OurTeam;


import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

const teamMembers = [
  {
    name: "Naman Sisodiya",
    image: "/Assets/MembersImages/naman.jpg",
    bgColor: "bg-blue-500",
    social: {
      linkedin: "https://www.linkedin.com/in/naman-sisodiya-7632622aa/",
      instagram: "https://www.instagram.com/naman29.ai/"
    }
  },
  {
    name: "Shivam Sharma",
    image: "/Assets/MembersImages/shivam.jpg",
    bgColor: "bg-blue-500",
    social: {
      linkedin: "https://www.linkedin.com/in/shivam-sharma-ab489721b",
      instagram: "https://www.instagram.com/shivamsharma.py/"
    }
  },
  {
    name: "Vaidic Tiwari",
    image: "/Assets/MembersImages/vaidic.jpg",
    bgColor: "bg-blue-500",
    social: {
      linkedin: "https://www.linkedin.com/in/vaidictiwari",
      instagram: "https://www.instagram.com/vaidic_t/"
    }
  },
  {
    name: "Aditya Patel",
    image: "/Assets/MembersImages/adityaa.jpeg",
    bgColor: "bg-blue-500",
    social: {
      linkedin: "https://www.linkedin.com/in/adityapatel09/",
      instagram: "https://www.instagram.com/adityyyyya_01/"
    }
  },
  {
    name: "Shivani Rathore",
    image: "/Assets/MembersImages/shivani.jpg",
    bgColor: "bg-blue-500",
    social: {
      linkedin: "https://www.linkedin.com/in/shivani-rathore-697781310/",
      instagram: "https://www.instagram.com/shivanniiiii.19/"
    }
  },
  {
    name: "Arnav Bhokre",
    image: "/Assets/MembersImages/arnav.jpg",
    bgColor: "bg-blue-500",
    social: {
      linkedin: "https://www.linkedin.com/in/arnav-bhokre-a09482250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/arnav_bhokre2813?igsh=MWl3bmw2bjd6MTlkNQ=="
    }
  },
  {
    name: "Shrey Patidar",
    image: "/Assets/MembersImages/shrey.jpg",
    bgColor: "bg-blue-500",
    social: {
      linkedin: "https://www.linkedin.com/in/shrey-patidar-586272213?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/patidar_ji_28?igsh=MTBvZXJ2eDhrNW5naA=="
    }
  },
  {
    name: "Mitali Rampurkar",
    image: "/Assets/MembersImages/mitali.jpg",
    bgColor: "bg-blue-500",
    social: {
      linkedin: "https://www.linkedin.com/in/mitali-rampurkar-8b18b4303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/mitali.2708__"
    }
  }
];

const OurTeam = () => {
  return (
    <div className="mx-auto px-4 my-12 container py-8 text-gray-800">
      <div className="text-center flex flex-col justify-center items-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-black-600">
          Meet the <span className="text-blue-500">Visionaries</span> Behind NexHub
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-5xl">
          At NexHub, our core team represents the driving force behind innovation, collaboration, and success. Each member brings unique expertise, passion, and dedication to creating solutions that make a difference. Together, we're shaping the future, one step at a time.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-items-center">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center w-full max-w-[224px]">
            <div className={`relative w-56 h-64 ${member.bgColor} rounded-[20px] overflow-hidden`}>
              <img
                alt={`Portrait of ${member.name}`}
                className="absolute top-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                src={member.image}
              />
            </div>
            <div className="mt-4 text-center w-full">
              <h2 className="text-xl font-bold">{member.name}</h2>
              <div className="flex justify-center gap-4 mt-2">
                <a 
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href={member.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;