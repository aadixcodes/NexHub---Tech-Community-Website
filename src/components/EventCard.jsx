import React from "react";

const EventCard = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800">
        Upcoming Event
      </h1>
      <div className="container mx-auto px-4 md:px-12 lg:px-16 py-16">
        <div className="bg-[#2563EB] text-white p-6 sm:p-8 md:p-12 rounded-2xl max-w-[1500px] mx-auto flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
          {/* Left Section: Image */}
          <div className="sm:w-1/2">
            <img
              alt="Placeholder image of an event"
              className="w-full h-96 object-cover rounded-lg"
              src="https://storage.googleapis.com/a1aa/image/9avN2a7nGpZJD5KfoW53TVGeXoV6h2MqVAEpvOx62fAx9oinA.jpg"
            />
          </div>
          {/* Right Section: Content */}
          <div className="sm:w-1/2 text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Event Name</h2>
            <p className="text-lg md:text-xl opacity-90 mb-1">Event Date</p>
            <p className="text-lg md:text-xl opacity-90 mb-1">Event Venue</p>
            <p className="text-base md:text-lg opacity-90 leading-relaxed mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              saepe, debitis dicta, id eos quibusdam optio distinctio magnam
              praesentium vel ducimus itaque adipisci porro aperiam. Soluta
              inventore reprehenderit earum animi vitae voluptate exercitationem
              nihil eius non ex blanditiis, saepe accusantium officia iste
              tempora nesciunt corporis eos culpa laboriosam fugiat perferendis
              explicabo tenetur aut? Accusantium rem tempora at! Libero sapiente
              quo mollitia, iusto hic nam quidem quisquam, dolor iure est sequi
              praesentium omnis.
            </p>
            <a href='/createch-gaming-development-workshop' className="bg-white hover:bg-gray-300 cursor-pointer text-blue-800 font-bold px-6 py-2 rounded-full  transition duration-300 shadow-lg">
              Event Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
