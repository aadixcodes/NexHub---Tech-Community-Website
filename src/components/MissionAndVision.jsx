import Image from 'next/image';

const MissionVision = () => {
  return (
    <section className="container mx-auto px-6 md:px-12 lg:px-16 py-16">
      <div className="bg-blue-600 text-white p-8 md:p-12 rounded-2xl max-w-[1500px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold  mb-4">
        Mission & Vision : Building a Stronger Developer Community
        </h2>
        <p className="mb-12 text-lg md:text-xl opacity-90 max-w-5xl ">
        Our mission is to create a space where developers can collaborate, innovate, and learn through hands-on experiences and a supportive community. We strive to empower individuals by providing opportunities to grow their skills and shape the future of technology.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Card 1 */} 
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="bg-white/10 p-4 rounded-xl">
              <Image 
                src="/Assets/OtherImages/empowerment.png"
                alt="24-hour match icon"
                width={64}
                height={64}
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-xl font-bold">Empowerment</h3>
            <p className="text-white/80 text-base md:text-lg max-w-xs">
            We empower developers through workshops, hackathons, and collaborative learning events.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="bg-white/10 p-4 rounded-xl">
              <Image 
                src="/Assets/OtherImages/innovation.png"
                alt="Custom matching icon"
                width={70}
                height={70}
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-xl font-bold">Innovation</h3>
            <p className="text-white/80 text-base md:text-lg max-w-xs">
            Our community sparks innovation by bringing developers together for creative coding challenges.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="bg-white/10 p-4 rounded-xl">
              <Image 
                src="/Assets/OtherImages/collaboration.png"
                alt="Zero risk icon"
                width={64}
                height={64}
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-xl font-bold">Collaboration</h3>
            <p className="text-white/80 text-base md:text-lg max-w-xs">
            We believe in the power of collaboration to drive growth and technology advancement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;