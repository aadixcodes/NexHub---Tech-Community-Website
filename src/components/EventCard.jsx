// import React from "react";

// const EventCard = () => {
//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800">
//         Upcoming Event
//       </h1>
//       <div className="container mx-auto px-4 md:px-12 lg:px-16 py-16">
//         <div className="bg-[#2563EB] text-white p-6 sm:p-8 md:p-12 rounded-2xl max-w-[1500px] mx-auto flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
//           {/* Left Section: Image */}
//           <div className="sm:w-1/2">
//             <img
//               alt="Placeholder image of an event"
//               className="w-full h-96 object-cover rounded-lg"
//               src="/Assets/OtherImages/GameAlchemyPoster.png"
//             />
//           </div>
//           {/* Right Section: Content */}
//           <div className="sm:w-1/2 text-left">
//             <h2 className="text-3xl md:text-4xl font-bold mb-2">
//               Game Alchemy - Gaming Development Workshop
//             </h2>
//             <p className="text-[13px] md:text-[15px] opacity-90 mb-1">
//               {" "}
//               <i> Nov 30, 2024</i>
//             </p>
//             <p className="text-[13px] md:text-[15px] opacity-90 mb-1">
//               {" "}
//               <i>
//                 {" "}
//                 10/2, 2nd Floor, Shree Mahadeo House, near Hotel Surya, Sriram
//                 Nagar, South Tukoganj, Indore, Madhya Pradesh 452001{" "}
//               </i>
//             </p>
//             <p className="text-base md:text-lg opacity-90 leading-relaxed mb-5">
//               Join our <strong>Game Development Workshop</strong> and dive into
//               the exciting world of game creation! Learn the fundamentals of
//               game design, coding, and creative storytelling, all guided by
//               experienced mentors. This hands-on workshop will teach you to work
//               with popular game engines and explore innovative programming
//               techniques.
//             </p>
//             <p className="text-base md:text-lg opacity-90 leading-relaxed mb-5">
//               <strong>Early Bird Offer:</strong> Register now for just ₹99
//               (Original Ticket Price: ₹199). Don’t miss this chance to turn your
//               game ideas into reality and level up your skills!
//             </p>

//             <a
//               href="/gamealchemy-gaming-development-workshop"
//               className="bg-white hover:bg-gray-300 cursor-pointer text-blue-800 font-bold px-6 py-2 rounded-full  transition duration-300 shadow-lg"
//             >
//               Event Details
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventCard;




import React from "react";
import Image from "next/image"; // Recommended for Next.js

const EventCard = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800">
        Upcoming Event
      </h1>
      <div className="container mx-auto px-4 md:px-12 lg:px-16 py-16">
        <div className="bg-[#2563EB] text-white p-6 sm:p-8 md:p-12 rounded-2xl max-w-[1500px] mx-auto flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
          {/* Left Section: Image */}
          <div className="sm:w-1/2 w-full">
            <div className="relative w-full aspect-video">
              {" "}
              {/* Key change */}
              <Image
                src="/Assets/OtherImages/GameAlchemyPoster.png"
                alt="Game Alchemy Workshop Poster"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          {/* Rest of the code remains the same */}
          <div className="sm:w-1/2 text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Game Alchemy - Gaming Development Workshop
            </h2>
            <p className="text-[13px] md:text-[15px] opacity-90 mb-1">
              {" "}
              <i> Nov 30, 2024</i>
            </p>
            <p className="text-[13px] md:text-[15px] opacity-90 mb-1">
              {" "}
              <i>
                {" "}
                10/2, 2nd Floor, Shree Mahadeo House, near Hotel Surya, Sriram
                Nagar, South Tukoganj, Indore, Madhya Pradesh 452001{" "}
              </i>
            </p>
            <p className="text-base md:text-lg opacity-90 leading-relaxed mb-5">
              Join our <strong>Game Development Workshop</strong> and dive into
              the exciting world of game creation! Learn the fundamentals of
              game design, coding, and creative storytelling, all guided by
              experienced mentors. This hands-on workshop will teach you to work
              with popular game engines and explore innovative programming
              techniques.
            </p>
            <p className="text-base md:text-lg opacity-90 leading-relaxed mb-5">
              <strong>Early Bird Offer:</strong> Register now for just ₹99
              (Original Ticket Price: ₹199). Don’t miss this chance to turn your
              game ideas into reality and level up your skills!
            </p>

            <a
              href="/gamealchemy-gaming-development-workshop"
              className="bg-white hover:bg-gray-300 cursor-pointer text-blue-800 font-bold px-6 py-2 rounded-full  transition duration-300 shadow-lg"
            >
              Event Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
