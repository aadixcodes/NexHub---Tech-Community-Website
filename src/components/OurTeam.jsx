import React from 'react';

const OurTeam = () => {
  return (
    <div className="bg-white text-gray-800">
      <div className="text-center py-12">
        <h1 className="text-5xl font-bold text-black-600">Our NexHub Core Team Members</h1>
        <p className="text-lg mt-4">
          With over 100 years of combined experience, we've got a well-seasoned team at the helm.
        </p>
      </div>
      <div className="flex flex-wrap justify-center space-x-8 px-8">
        <div className="text-center mb-8">
        <div className="relative w-56 h-64 bg-yellow-500 flex items-center rounded-[20] justify-center overflow-hidden">

            <img
              alt="Portrait of Mike Cannon-Brookes"
              className="absolute top-0 transform  w-full h-full transition-transform ease-in-out duration-500 hover:scale-110"
              src="/Assets/MembersImages/naman.jpg"
            />
          </div>
          <h2 className="text-xl font-bold mt-4">Naman Sisodiya</h2>
          <p className="text-gray-600"><a href="https://www.linkedin.com/in/naman-sisodiya-7632622aa?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2Fc5ErNcCQ%2BeH0AcOqm8lKQ%3D%3D" target='_blank'>Linkedin</a></p>
        </div>

        <div className="text-center mb-8">
          <div className="relative w-56 h-64 bg-green-500 flex rounded-[20] items-center justify-center overflow-hidden">
            <img
              alt="Portrait of Scott Farquhar"
              className="absolute top-0 transform w-full h-full transition-transform ease-in-out duration-500 hover:scale-110"
              src="/Assets/MembersImages/shivam.jpg"
            />
          </div>
          <h2 className="text-xl font-bold mt-4">Shivam Sharma</h2>
          <p className="text-gray-600"><a href="https://www.linkedin.com/in/shivam-sharma-ab489721b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BBmHzkPPOSASKDxXIxiAsxQ%3D%3D" target='_blank'>Linkedin</a></p>
        </div>
        <div className="text-center mb-8">
          <div className="relative w-56 h-64 bg-teal-500 rounded-[20] flex items-center justify-center overflow-hidden">
            <img
              alt="Portrait of Anu Bharadwaj"
              className="absolute top-0 transform w-full h-full transition-transform ease-in-out duration-500 hover:scale-110"
              src="/Assets/MembersImages/vaidic.jpg"
            />
          </div>
          <h2 className="text-xl font-bold mt-4">Vaidic Tiwari</h2>
          <p className="text-gray-600"><a href="https://www.linkedin.com/in/vaidictiwari?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target='_blank'>Linkedin</a></p>
        </div>
        <div className="text-center mb-8">
          <div className="relative w-56 h-64 bg-blue-500 rounded-[20] flex items-center justify-center overflow-hidden">
            <img
              alt="Portrait of Team Member 4"
              className="absolute top-0 transform w-full h-full transition-transform ease-in-out duration-500 hover:scale-110"
              height="400"
              src="/Assets/MembersImages/aditya.jpg"
              width="300"
            />
          </div>
          <h2 className="text-xl font-bold mt-4">Aditya Patel</h2>
          <p className="text-gray-600"><a href="https://www.linkedin.com/in/adityapatel09/" target='_blank'>Linkedin</a></p>
        </div>
        <div className="text-center mb-8">
          <div className="relative w-56 h-64 bg-red-500 rounded-[20] flex items-center justify-center overflow-hidden">
            <img
              alt="Portrait of Team Member 5"
              className="absolute top-0 transform  w-full h-full transition-transform ease-in-out duration-500 hover:scale-110"
              height="400"
              src="/Assets/MembersImages/shivani.jpg"
              width="300"
            />
          </div>
          <h2 className="text-xl font-bold mt-4">Shivani Rathore</h2>
          <p className="text-gray-600"><a href="https://www.linkedin.com/in/shivani-rathore-697781310?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B2ncvRxi%2BS2uADOIxUEm%2FYg%3D%3D" target='_blank'>Linkedin</a></p>
        </div>
      </div>
      <div className="text-center mb-8">
        <button className="bg-blue-500 hover:bg-blue-600 rounded-[20] text-white font-bold py-2 px-4 rounded">
          View Organisers
        </button>
      </div>
    </div>
  );
};

export default OurTeam;