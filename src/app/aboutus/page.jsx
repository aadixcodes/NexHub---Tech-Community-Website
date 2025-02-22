'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const AboutUs = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gray-900 flex items-center">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/Assets/OtherImages/aboutusbanner.jpg"
            alt="NexHub Community"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to <span className="text-blue-500">NexHub</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            A community driven by passion, innovation, and the desire to create meaningful connections in the tech world.
          </p>
        </div>
      </section>

      {/* About NexHub Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About NexHub</h2>
              <p className="text-gray-600 mb-4 text-xl">
                NexHub is more than just a community - it's a hub of innovation, learning, and collaboration. Founded with the vision to connect tech enthusiasts, creators, and professionals, we provide a platform where ideas flourish and connections thrive.
              </p>
              <p className="text-gray-600 text-xl">
                Our community brings together individuals from diverse backgrounds, all united by their passion for technology and desire to make a difference in the digital world.
              </p>
            </div>
            <div className="w-full md:w-1/2 relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/Assets/OtherImages/logo.svg"
                alt="NexHub Community"
                fill
                className="w-full  h-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Goals & Objectives */}
      <section className="py-20 px-4 ">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Goals & Objectives</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Foster Innovation",
                description: "Create an environment that encourages creative thinking and innovative solutions",
                icon: "🚀"
              },
              {
                title: "Build Connections",
                description: "Facilitate meaningful networking opportunities within the tech community",
                icon: "🤝"
              },
              {
                title: "Share Knowledge",
                description: "Promote learning and skill development through workshops and events",
                icon: "📚"
              }
            ].map((goal, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{goal.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{goal.title}</h3>
                <p className="text-gray-600">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Benefits of Joining NexHub</h2>
          
          {/* Member Benefits */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-blue-500 mb-8"> <u> As a Member</u></h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Exclusive Access",
                  description: "Get priority access to events, workshops, and special resources"
                },
                {
                  title: "Networking Opportunities",
                  description: "Connect with industry professionals and like-minded individuals"
                },
                {
                  title: "Skill Development",
                  description: "Access to specialized training and learning materials"
                },
                {
                  title: "Community Support",
                  description: "Be part of a supportive community that helps you grow"
                }
              ].map((benefit, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="bg-blue-500 text-white p-3 rounded-full">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Event Participant Benefits */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-500 mb-8"> <u> As an Event Participant</u></h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Hands-on Learning Experience",
                  description: "Get practical experience through interactive workshops and real-world projects",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )
                },
                {
                  title: "Networking with Industry Experts",
                  description: "Connect directly with professionals and leaders in the tech industry",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )
                },
                {
                  title: "Project Showcase Opportunities",
                  description: "Present your work and ideas to the community and potential collaborators",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                  )
                },
                {
                  title: "Certificate of Participation",
                  description: "Receive official recognition for your participation and achievements",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  )
                },
                {
                  title: "Access to Event Resources",
                  description: "Get exclusive access to event materials, presentations, and resources",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  )
                },
                {
                  title: "Community Recognition",
                  description: "Gain visibility and recognition within the NexHub community",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  )
                }
              ].map((benefit, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="bg-blue-500 text-white p-3 rounded-full">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-black">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join NexHub?</h2>
          <p className="text-xl mb-8 text-gray-600">
            Be part of a growing community of tech enthusiasts and innovators.
          </p>
          <button
            onClick={() => router.push('/join-our-team')}
            className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Join Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
