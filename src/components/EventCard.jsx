import React from 'react';

const EventCard = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-5xl font-bold text-center text-gray-800">Upcoming Events</h1>
      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-16">
      <div className="bg-[#2563EB] text-white p-8 md:p-12 rounded-2xl max-w-[1500px] mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2 pr-8">
          <img
            alt="Placeholder image of an event"
            className="w-full h-96 object-cover rounded-lg"
            src="https://storage.googleapis.com/a1aa/image/9avN2a7nGpZJD5KfoW53TVGeXoV6h2MqVAEpvOx62fAx9oinA.jpg"
          />
        </div>
        <div className="md:w-1/2 space-y-4 mt-8 md:mt-0">
          <h2 className="text-3xl md:text-4xl font-bold mt-4">Event Name</h2>
          <p className="text-lg md:text-xl opacity-90">Event Date</p>
          <p className="text-base md:text-lg opacity-90">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300 shadow-lg">
            View All Previous Events
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EventCard;