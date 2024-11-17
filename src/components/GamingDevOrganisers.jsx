import React from 'react';
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaLinkedin, FaGithub   } from "react-icons/fa";

const GamingDevOrganisers = () => {
  const speakers = [
    {
      id: 1,
      name: 'Speaker 1',
      description: 'Expert in Web Development with over 10 years of experience.',
      image: '/Assets/EventPage/GamingDevelopment/organiser.jfif'
    },
    {
      id: 2,
      name: 'Speaker 2',
      description: 'Renowned Data Scientist with a passion for AI and Machine Learning.',
      image: '/Assets/EventPage/GamingDevelopment/organiser.jfif'
    }
  ];

  const organisers = [
    {
      id: 1,
      name: 'Organiser 1',
      image: '/Assets/EventPage/GamingDevelopment/organiser.jfif'
    },
    {
      id: 2,
      name: 'Organiser 2',
      image: '/Assets/EventPage/GamingDevelopment/organiser.jfif'
    },
    {
      id: 3,
      name: 'Organiser 3',
      image: '/Assets/EventPage/GamingDevelopment/organiser.jfif'
    },
    {
      id: 4,
      name: 'Organiser 4',
      image: '/Assets/EventPage/GamingDevelopment/organiser.jfif'
    },
    {
      id: 5,
      name: 'Organiser 5',
      image: '/Assets/EventPage/GamingDevelopment/organiser.jfif'
    },
    {
      id: 6,
      name: 'Organiser 6',
      image: '/Assets/EventPage/GamingDevelopment/organiser.jfif'
    },
    {
      id: 7,
      name: 'Organiser 7',
      image: '/Assets/EventPage/GamingDevelopment/organiser.jfif'
    },
    {
      id: 8,
      name: 'Organiser 8',
      image: '/Assets/EventPage/GamingDevelopment/organiser.jfif'
    },
    {
      id: 9,
      name: 'Organiser 9',
      image: '/Assets/EventPage/GamingDevelopment/organiser.jfif'
    },
    {
      id: 10,
      name: 'Organiser 10',
      image: '/Assets/EventPage/GamingDevelopment/organiser.jfif'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* Speakers Section */}
        <h1 className="text-3xl font-bold text-center mb-12">Speakers</h1>
        <div className="space-y-8 mb-16">
          {speakers.map((speaker) => (
            <div key={speaker.id} className="flex items-center space-x-6 p-4 hover:bg-gray-50 rounded-lg transition duration-300">
              <img
                src={speaker.image}
                alt={`Portrait of ${speaker.name}`}
                className="w-24 h-24 rounded-full object-cover shadow-md"
              />
              <div>
                <h2 className="text-xl font-bold text-gray-900">{speaker.name}</h2>
                <p className="text-gray-600 mt-1">{speaker.description}</p>
                <div className="flex space-x-4 mt-3">
                  <a href="#" className="text-blue-500 hover:text-blue-600 transition duration-300">
                    <AiFillInstagram  className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-blue-700 hover:text-blue-800 transition duration-300">
                    <FaFacebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-700 transition duration-300">
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Organisers Section */}
        <h1 className="text-3xl font-bold text-center mb-12">Organisers</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {organisers.map((organiser) => (
            <div key={organiser.id} className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition duration-300">
              <img
                src={organiser.image}
                alt={`Portrait of ${organiser.name}`}
                className="w-24 h-24 rounded-full object-cover shadow-md mb-4"
              />
              <h2 className="text-xl font-bold text-gray-900 text-center">{organiser.name}</h2>
              <div className="flex space-x-4 mt-3">
                <a href="#" className="text-blue-500 hover:text-blue-600 transition duration-300">
                  <AiFillInstagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-800 hover:text-gray-900 transition duration-300">
                  <FaGithub className="w-5 h-5" />
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-700 transition duration-300">
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamingDevOrganisers;