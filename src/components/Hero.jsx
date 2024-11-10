// import Image from 'next/image';

// const Hero = () => {
//   return (
//     <main className="container mx-auto px-6 md:px-12 lg:px-16">
//       <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 py-12 md:py-20">
//         {/* Left Content */}
//         <div className="w-full md:w-1/2 flex flex-col space-y-6">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
//             <span>Nexhub</span> <br />
//             <span className="text-blue-600">Where Developers</span> <br />
//             Connect, Learn & <br />
//             Grow.<br />
//           </h1>
//           <p className="text-gray-600 text-lg md:text-xl lg:text-2xl max-w-2xl">
//           Join a community built for growth, innovation, and connection. We bring developers together through workshops, hackathons, meetups, and coding events designed to inspire learning and collaboration. Whether you're a beginner or an expert, our events offer something for everyone—helping you build skills, expand your network, and shape the future of technology.
//           </p>
//           <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg md:text-xl font-medium transition-colors duration-200 w-fit">
//             Let's Connect
//           </button>
//         </div>

//         {/* Right Content */}
//         <div className="w-full md:w-1/2 flex justify-center md:justify-end">
//           <div className="relative w-full max-w-[500px]">
//             <Image 
//               src="/Assets/OtherImages/heroimg.png" 
//               alt="A realistic 3D illustration denoting tech community" 
//               width={500}
//               height={500}
//               className="rounded-xl shadow-lg"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Hero;


import Image from 'next/image';

const Hero = () => {
  return (
    <main className="container mx-auto px-6 md:px-12 lg:px-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 py-12 md:py-20">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span>Nexhub</span> <br />
            <span className="text-blue-600">Where Developers</span> <br />
            Connect, Learn & <br />
            Grow.<br />
          </h1>
          <p className="text-gray-600 text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto md:mx-0">
            Join a community built for growth, innovation, and connection. We bring developers together through workshops, hackathons, meetups, and coding events designed to inspire learning and collaboration. Whether you're a beginner or an expert, our events offer something for everyone—helping you build skills, expand your network, and shape the future of technology.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg md:text-xl font-medium transition-colors duration-200 w-fit mx-auto md:mx-0">
            Let's Connect
          </button>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-[500px]">
            <Image 
              src="/Assets/OtherImages/heroimg.png" 
              alt="A realistic 3D illustration denoting tech community" 
              width={500}
              height={500}
              className="rounded-xl shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
