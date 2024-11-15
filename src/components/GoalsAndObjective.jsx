import Image from 'next/image';

const GoalsObjectives = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="max-w-[1100px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-4xl font-bold mb-4">
            Our Goals and Objectives
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Together. We believe in the power of collective knowledge, shared experiences, and mutual support. Here's how our goals and objectives drive us toward building a thriving and collaborative community:
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* First Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="order-1 md:order-1">
              <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="/Assets/OtherImages/connection.svg"
                  alt="Team working on a project"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="order-2 md:order-2 flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-bold mb-3">
                Foster Meaningful Connections
              </h2>
              <p className="text-gray-600 text-base mb-4">
                To create an inclusive, vibrant space where individuals can connect, share ideas, and collaborate. By providing platforms for group discussions, meet-ups, and virtual networking events, NexHub aims to build lasting connections among members.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium">
                Learn More
              </button>
            </div>
          </div>

          {/* Second Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="order-1 md:order-2">
              <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="/Assets/OtherImages/learning.svg"
                  alt="Learning illustration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-bold mb-3">
                Promote Lifelong Learning
              </h2>
              <p className="text-gray-600 text-base mb-4">
                To empower members with access to educational resources, workshops, and skill-building sessions, helping them stay ahead in their personal and professional lives. NexHub seeks to cultivate a culture of continuous growth and improvement.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium">
                Learn More
              </button>
            </div>
          </div>

          {/* Third Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="order-1 md:order-1">
              <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="/Assets/OtherImages/innovation.svg"
                  alt="Innovation concept"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="order-2 md:order-2 flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-bold mb-3">
                Encourage Collaboration and Innovation
              </h2>
              <p className="text-gray-600 text-base mb-4">
                To facilitate a collaborative environment where members can work together on projects, brainstorm new ideas, and support each other in achieving goals. NexHub encourages creative problem-solving and innovation to tackle shared challenges.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium">
                Learn More
              </button>
            </div>
          </div>

          {/* Fourth Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="order-1 md:order-2">
              <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="/Assets/OtherImages/growth.svg"
                  alt="Growth concept"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-bold mb-3">
                Support Personal and Professional Growth
              </h2>
              <p className="text-gray-600 text-base mb-4">
                To provide mentorship programs, career resources, and personal development opportunities that help members reach their full potential. NexHub is committed to helping individuals succeed both personally and professionally through goal-oriented guidance.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoalsObjectives;