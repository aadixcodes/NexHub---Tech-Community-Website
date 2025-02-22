"use client";
import React, { useState } from "react";

const Events = () => {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All upcoming events" },
    { id: "webinars", label: "Webinars & workshops" },
    { id: "coding", label: "Coding events" },
  ];

  const events = [
    {
      id: 1,
      tag: "new",
      status: "close",
      category: "Game Development",
      title: "GameAlchemy: Ignite Your Passion for Game Development Workshop",
      description:
        "Explore the thrilling world of game development with seminars designed to inspire, educate, and empower!.....",
      date: "December 7, 2024",
      fee: "₹99",
      joinedCount: 145,
      bannerImage: "/Assets/EventPage/GamingDevelopment/banner.jpg",
      type: "all",
    },
  ];

  const filteredEvents =
    activeTab === "all"
      ? events
      : events.filter((event) => event.type === activeTab);

  return (
    <div className="bg-gray-50 min-h-screen mt-[6rem]">
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold">Events</h1>
          <p className="text-gray-600 text-xl">Learn, Connect & grow</p>
        </header>

        {/* Navigation */}
        <nav className="mb-8 overflow-x-auto">
          <ul className="flex space-x-4 sm:space-x-6 border-b min-w-max">
            {tabs.map((tab) => (
              <li
                key={tab.id}
                className={`pb-2 px-1 cursor-pointer transition-colors duration-200 whitespace-nowrap
                  ${
                    activeTab === tab.id
                      ? "border-b-2 border-black text-black font-semibold"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </li>
            ))}
          </ul>
        </nav>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {/* Tag and Category */}
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    {event.tag}
                  </span>
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded ${
                    event.status === 'open' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {event.status === 'open' ? 'Open' : 'Closed'}
                  </span>
                  <span className="text-gray-500 text-sm ml-2">
                    {event.category}
                  </span>
                </div>

                {/* Banner Image */}
                <div className="mb-4 relative">
                  <img
                    src={event.bannerImage}
                    alt={event.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>

                {/* Title and Description */}
                <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                  {event.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-gray-500 text-sm">Event date</p>
                    <p className="text-black font-semibold">{event.date}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Entry fee</p>
                    <p className="text-black font-semibold">{event.fee}</p>
                  </div>
                </div>

                {/* Joined Count */}
                <div className="flex items-center mb-4">
                  <div className="w-6 h-6 rounded-full bg-gray-200">
                    <img
                      src="/Assets/OtherImages/participate.jpg"
                      alt="participants illustration"
                    />
                  </div>
                  <p className="text-gray-500 text-sm ml-2">
                    +{event.joinedCount} others joined
                  </p>
                </div>

                {/* Register Button */}
                <a
                  href="/gamealchemy-gaming-development-workshop"
                  className="w-full block text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors duration-200"
                >
                  Register now
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl text-gray-600">
              No events found in this category
            </h3>
            <p className="text-gray-500 mt-2">
              Please check back later or try a different category
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
