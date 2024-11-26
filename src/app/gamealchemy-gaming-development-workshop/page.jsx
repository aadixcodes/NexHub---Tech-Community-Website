"use client";
import Image from "next/image";
import { useState } from "react";
import { FaGlobe, FaRupeeSign, FaCalendarAlt } from "react-icons/fa";
import GamingDevOrganisers from "@/components/GamingDevOrganisers";
import Collaborators from "@/components/Collaborators";

const GameAlchemyGamingDevelopmentWorkshop = () => {
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [showCouponInput, setShowCouponInput] = useState(false);
  const [couponError, setCouponError] = useState("");

  // const handleCouponApplication = () => {
  //   if (couponCode.toUpperCase() === "ABHYU") {
  //     setCouponApplied(true);
  //     setCouponError("");
  //   } else {
  //     setCouponApplied(false);
  //     setCouponError("Invalid coupon code");
  //   }
  //   setCouponCode("");
  // };


  const handleCouponApplication = () => {
    const validCoupons = {
      ABHYU: 49, 
      DHW50: 49,  
    };
  
    const normalizedCode = couponCode.toUpperCase(); 
    if (validCoupons[normalizedCode] !== undefined) {
      setCouponApplied(true);
      setCouponError("");
      setDiscountedPrice(validCoupons[normalizedCode]); 
    } else {
      setCouponApplied(false);
      setCouponError("Invalid coupon code");
    }
    setCouponCode("");
  };
  return (
    <>
      <div className="bg-gray-50 min-h-screen mt-[5rem] py-8">
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h1 className="text-2xl font-bold mb-4">
                GameAlchemy: Ignite Your Passion for Game Development Workshop
              </h1>
              <div className="text-gray-600 mb-4 flex flex-col items-start gap-4">
                {/* Address Section */}
                <div className="flex items-start gap-2 w-full sm:w-auto">
                  <FaGlobe className="text-gray-600 mt-1 text-[15px]" />
                  <span className="text-sm sm:text-base text-left ">
                    10/2, 2nd Floor, Shree Mahadeo House, <br /> near Hotel
                    Surya, Sriram Nagar, <br /> South Tukoganj, Indore, Madhya
                    Pradesh 452001
                  </span>
                </div>
                {/* Entry Fee Section */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto">
                  <div className="flex items-center gap-1">
                    <FaRupeeSign className="text-gray-600" />
                    <span className="text-sm sm:text-base font-medium">
                      {couponApplied ? (
                        <>
                          Discounted Price:{" "}
                          <span className="text-green-600 font-bold">₹49</span>
                        </>
                      ) : (
                        <>
                          Early Bird Offer:{" "}
                          <span className="text-green-600 font-bold">₹99</span>
                        </>
                      )}
                    </span>
                  </div>
                  <span className="text-sm sm:text-base text-gray-500 line-through">
                    Original Price: ₹199
                  </span>
                </div>
              </div>

              {/* Date and Registration Section */}
              <div className="text-gray-600 mb-4 flex flex-col sm:flex-row items-start sm:items-center gap-2">
                <div className="flex items-center gap-1">
                  <FaCalendarAlt className="text-gray-600" />
                  <span>Date: 7/Dec/2024</span>
                </div>
              </div>
              {/* Coupon code section */}
              <div className="flex flex-wrap items-center mb-4 gap-4">
                <div className="flex items-center gap-4">
                  {couponApplied ? (
                    <a
                      href="https://forms.gle/LvBRAveqQvDogm5x9"
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-semibold transition-colors duration-200"
                    >
                      Register Now (Discounted)
                    </a>
                  ) : (
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdyS5cGXmg1U2yVw4_6o3bZEsC4ha3XkEcsNq_2eKr1o5X6Xw/viewform"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-semibold transition-colors duration-200"
                    >
                      Register Now
                    </a>
                  )}
                  <button
                    onClick={() => setShowCouponInput(!showCouponInput)}
                    className="text-blue-800 hover:underline text-sm"
                  >
                    Apply Coupon Code
                  </button>
                </div>
                {/* {showCouponInput && (
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Enter Coupon Code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="border border-gray-300 px-2 py-1 rounded-md text-sm"
                    />
                    <button
                      onClick={handleCouponApplication}
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-sm transition-colors duration-200"
                    >
                      Apply
                    </button>
                  </div>
                )}

                {couponApplied && (
                  <div className="text-green-600 text-sm font-medium">
                    Coupon code applied successfully!
                  </div>
                )} */}
{showCouponInput && (
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Enter Coupon Code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="border border-gray-300 px-2 py-1 rounded-md text-sm"
            />
            <button
              onClick={handleCouponApplication}
              className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-sm transition-colors duration-200"
            >
              Apply
            </button>
          </div>
          {couponError && (
            <div className="text-red-600 text-sm font-medium">
              {couponError}
            </div>
          )}
          {couponApplied && (
            <div className="text-green-600 text-sm font-medium">
              Coupon code applied successfully!
            </div>
          )}
        </div>
      )}
                <div className="flex items-center">
                  <Image
                    src="/Assets/OtherImages/participate.jpg"
                    alt="Profile picture of a registered user"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                  <span className="ml-2 text-gray-600 whitespace-nowrap">
                    +96 Participants registered
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/Assets/EventPage/GamingDevelopment/gamingdevimg.svg"
                alt="Illustration of a gaming developer"
                width={150}
                height={150}
                className="w-64 h-64 object-cover"
              />
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4 mt-4">
            <h2 className="text-xl font-semibold mb-2">Workshop Details</h2>
            <p className="text-gray-700 mb-4">
              Explore the thrilling world of game development with Workshops
              designed to inspire, educate, and empower! Gain hands-on
              experience, learn from industry leaders, and kickstart your
              journey in gaming technology.
            </p>

            <h3 className="text-lg font-semibold mb-2">Key Highlights:</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>
                Expert-led sessions on Animation, Game Design, AR/VR, and Game
                Engines.
              </li>
              <li>
                Interactive Q&A and case studies with successful gaming
                entrepreneurs.
              </li>
              <li>
                Hands-on tutorials for beginners to create their first game.
              </li>
              <li>
                Networking with like-minded developers and industry leaders.
              </li>
              <li>
                Career guidance and insights into entrepreneurial opportunities
                in gaming.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">
              Why Attend This Workshop?
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>
                <strong>Explore Opportunities:</strong> Learn about career paths
                and entrepreneurial ventures in gaming.
              </li>
              <li>
                <strong>Hands-On Learning:</strong> Gain practical experience in
                top gaming tools like Unity and Unreal Engine.
              </li>
              <li>
                <strong>Build Your Portfolio:</strong> Develop skills and create
                projects to showcase your talent.
              </li>
              <li>
                <strong>Stay Ahead:</strong> Understand the future of gaming
                with AR/VR and cutting-edge technologies.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Who Can Join?</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Students and beginners curious about game development.</li>
              <li>Gamers and enthusiasts eager to create their first game.</li>
              <li>
                Tech-savvy individuals passionate about exploring new
                technologies in gaming.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Workshop Overview:</h3>

            <h4 className="text-md font-semibold mt-4">
              1. Animation in Gaming: Changing Life into Games
            </h4>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>The Art of Movement: How Animation Brings Games to Life</li>
              <li>Must-Know Software for Game Animators</li>
              <li>
                From Animator to Entrepreneur: Creative Business Opportunities
              </li>
              <li>Case Studies: Successful Animators Who Built Careers</li>
              <li>Careers in Animation and Starting Your Studio</li>
            </ul>

            <h4 className="text-md font-semibold mt-4">
              2. Game Art and Design: Designing Dreams, Building Worlds
            </h4>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>The Role of Game Art in Building Engaging Games</li>
              <li>Mastering Software and Tools for Game Artists</li>
              <li>Entrepreneurship in Game Art and Selling Assets</li>
              <li>Interactive Session: Stories of Game Art Entrepreneurs</li>
            </ul>

            <h4 className="text-md font-semibold mt-4">
              3. AR/VR in Gaming: The Future of Play and Business
            </h4>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Introduction to AR/VR Technologies</li>
              <li>Immersive Experiences: Designing Innovative Games</li>
              <li>Entrepreneurship: Building AR/VR Startups</li>
              <li>Global Success Stories in AR/VR Gaming</li>
            </ul>

            <h4 className="text-md font-semibold mt-4">
              4. Unreal Game Development: Turning Imagination into Reality
            </h4>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Why Unreal Engine? Understanding Its Power</li>
              <li>Step-by-Step Tutorials for Beginners</li>
              <li>Entrepreneurship in Unreal Development</li>
              <li>Stories of Startups Built on Unreal Engine</li>
            </ul>

            <h4 className="text-md font-semibold mt-4">
              5. Unity Game Development: Simplifying Complexities
            </h4>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Introduction to Unity: A Beginner's Guide</li>
              <li>Creating Your First Game</li>
              <li>Exploring 2D, 3D, VR, and AR Development with Unity</li>
              <li>Inspiring Stories of Unity Developers</li>
            </ul>

            <h2 className="text-xl font-semibold mb-5">
              🎉 Goodies & Prize Distribution 🎁
            </h2>
            <h2 className="text-xl font-semibold mb-1">Goodies 🎉</h2>
            <p className="text-gray-700 mb-1">
              We value your participation! Here's what's in store for you:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-5">
              <li>🎽 T-Shirts</li>
              <li>🔑 Key Chains</li>
              <li>📒 Notebooks</li>
              <li>🎁 Surprise Gifts</li>
            </ul>

            <h2 className="text-xl font-semibold mb-1">Prizes 🎁</h2>
            <p className="text-gray-700 mb-1">
              Top-performing students will receive:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>🏆 Special Vouchers</li>
              <li>🎟 Event Passes</li>
              <li>🎁 Exclusive Rewards</li>
            </ul>
          </div>
        </div>
      </div>
      <Collaborators />
      <GamingDevOrganisers />
    </>
  );
};

export default GameAlchemyGamingDevelopmentWorkshop;
