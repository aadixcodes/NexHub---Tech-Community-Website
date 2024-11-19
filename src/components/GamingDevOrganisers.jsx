import React from 'react';
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaLinkedin, FaGithub   } from "react-icons/fa";

const GamingDevOrganisers = () => {
  const speakers = [
    {
      id: 1,
      name: 'Mr. Mayank Pande',
      description: 'CEO - Carina Softlabs Inc & Techy Mau Game Studios',
      image: '/Assets/EventPage/GamingDevelopment/mayankpandey.jfif',
      linkedin: 'https://www.linkedin.com/in/mayank-pande?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    }
  ];

  const organisers = [
    {
      id: 1,
      name: 'Naman Sisodiya',
      image: '/Assets/MembersImages/naman.jpg',
      instagram: 'https://www.instagram.com/naman29.ai?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      github: '',
      linkedin: 'https://www.linkedin.com/in/naman-sisodiya-7632622aa'
    },
    {
      id: 2,
      name: 'Vaidic Tiwari',
      image: '/Assets/MembersImages/vaidic.jpg',
      instagram: 'https://www.instagram.com/vaidic_t?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      github: '',
      linkedin: 'https://www.linkedin.com/in/vaidictiwari'
    },
    {
      id: 3,
      name: 'Shivam Sharma',
      image: '/Assets/MembersImages/shivam.jpg',
      instagram: 'https://www.instagram.com/shivamsharma.py?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      github: '',
      linkedin: 'https://www.linkedin.com/in/shivam-sharma-ab489721b'
    },
    {
      id: 4,
      name: 'Aditya Patel',
      image: '/Assets/EventPage/GamingDevelopment/aditya.jpg',
      instagram: 'https://www.instagram.com/adityyyyya_01/',
      github: 'https://github.com/aadixcodes',
      linkedin: 'https://www.linkedin.com/in/adityapatel09/'
    },
    {
      id: 5,
      name: 'Shivani Rathore',
      image: '/Assets/EventPage/GamingDevelopment/shivani.jpg',
      instagram: 'https://www.instagram.com/shivanniiiii.19/',
      github: 'https://github.com/Shivanix19',
      linkedin: 'https://www.linkedin.com/in/shivani-rathore-697781310'
    },
    {
      id: 6,
      name: 'Bhoomika Upadhyay',
      image: '/Assets/EventPage/GamingDevelopment/bhoomika.jpeg',
      instagram: 'https://www.instagram.com/bhoomika_upadhyay_/?utm_source=ig_web_button_share_sheet',
      linkedin: 'http://www.linkedin.com/in/bhoomika-upadhyay-5132b42a3'
    },
    {
      id: 7,
      name: 'Himanshi Laddha',
      image: '/Assets/EventPage/GamingDevelopment/himanshii.jpg',
      instagram: 'https://www.instagram.com/himanshiladdha/',
      linkedin: 'https://www.linkedin.com/in/himanshi-laddha/'
    },
    {
      id: 8,
      name: 'Mitali Rampurkar ',
      image: '/Assets/EventPage/GamingDevelopment/mitali.jpg',
      instagram: 'https://www.instagram.com/mitali.2708__/',
      linkedin: 'https://www.linkedin.com/in/mitali-rampurkar-8b18b4303/'
    },
    {
      id: 9,
      name: 'Vidushi Temley',
      image: '/Assets/EventPage/GamingDevelopment/vidushi.webp',
      instagram: 'https://www.instagram.com/vidushi_temley/?utm_source=ig_web_button_share_sheet'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* Speakers Section */}
        <h1 className="text-3xl font-bold text-center mb-12">Trainer</h1>
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
                  {/* <a href="#" className="text-blue-500 hover:text-blue-600 transition duration-300">
                    <AiFillInstagram  className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-blue-700 hover:text-blue-800 transition duration-300">
                    <FaFacebook className="w-5 h-5" />
                  </a> */}
                  <a href={speaker.linkedin} target='_blank' className="text-blue-600 hover:text-blue-700 transition duration-300">
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
                <a href={organiser.instagram} target='_blank' className="text-blue-500 hover:text-blue-600 transition duration-300">
                  <AiFillInstagram className="w-5 h-5" />
                </a>
                <a href={organiser.github} target='_blank' className="text-gray-800 hover:text-gray-900 transition duration-300">
                  <FaGithub className="w-5 h-5" />
                </a>
                <a href={organiser.linkedin} target='_blank' className="text-blue-600 hover:text-blue-700 transition duration-300">
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