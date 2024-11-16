// 'use client';

// import { useState } from 'react';
// // import { Plus, Minus } from 'lucide-react';
// import { FaPlus, FaMinus } from "react-icons/fa";

// const Faqs = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const faqData = [
//     {
//       question: "How can I bid for your products?",
//       answer: "You can bid for our products through our online auction system."
//     },
//     {
//       question: "What is the function of your products?",
//       answer: "Our products help you to attain the perfect beauty you can ever imagine."
//     },
//     {
//       question: "How can I download your app?",
//       answer: "Our app is available on both the App Store and Google Play Store."
//     },
//     {
//       question: "How are your exchange rates calculated?",
//       answer: "Exchange rates are calculated based on current market rates and updated daily."
//     },
//     {
//       question: "How can I buy your products?",
//       answer: "You can purchase our products directly through our website or authorized retailers."
//     }
//   ];

//   const handleClick = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="bg-white flex items-center justify-center mb-[5rem] min-h-[40vh]">
//       <div className="w-full max-w-6xl">
//         <h1 className="text-5xl font-bold text-center text-gray-800 mb-8">All Your Queries, Sorted Here</h1>
//         <div className="space-y-4">
//           {faqData.map((faq, index) => (
//             <div key={index} className="bg-white shadow-md rounded-lg p-4">
//               <div 
//                 className="flex justify-between items-center cursor-pointer"
//                 onClick={() => handleClick(index)}
//               >
//                 <span className="text-lg font-medium">{faq.question}</span>
//                 <div className="transition-transform duration-300 ease-in-out">
//                   {openIndex === index ? (
//                     <FaMinus className="h-5 w-5" />
//                   ) : (
//                     <FaPlus className="h-5 w-5" />
//                   )}
//                 </div>
//               </div>
//               <div 
//                 className={`grid transition-all duration-300 ease-in-out ${
//                   openIndex === index 
//                     ? "grid-rows-[1fr] opacity-100 mt-4" 
//                     : "grid-rows-[0fr] opacity-0"
//                 }`}
//               >
//                 <div className="overflow-hidden">
//                   <p className="text-red-500">{faq.answer}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Faqs;


'use client';

import { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What is NexHub, and who is it for?",
      answer: "NexHub is a thriving community built for innovators, learners, and creators who want to connect, collaborate, and grow. Whether you're a tech enthusiast, a student, or a professional looking to expand your network, NexHub has something for everyone."
    },
    {
      question: "How can I become a part of the NexHub community?",
      answer: "Joining NexHub is easy! Simply sign up on our website, create your profile, and start exploring our events, discussion boards, and exclusive resources. Membership is open to anyone passionate about growth and innovation."
    },
    {
      question: "What kind of events does NexHub organize?",
      answer: "NexHub hosts a variety of events, including hackathons, webinars, skill-development workshops, and networking meetups. Our events are designed to foster collaboration, learning, and the exchange of ideas."
    },
    {
      question: "Can I contribute content or host events for the NexHub community?",
      answer: "Absolutely! We encourage community members to share their expertise by hosting events, writing blogs, or conducting workshops. Contact us via our website to propose your ideas, and let’s make it happen together!"
    }
  ];

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white flex items-center justify-center mb-[5rem] min-h-[40vh] px-4">
      <div className="w-full max-w-6xl">
        {/* Responsive Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-center text-gray-800 mb-8">
          All Your Queries, Sorted Here
        </h1>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4">
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => handleClick(index)}
              >
                <span className="text-base sm:text-lg md:text-xl lg:text-1xl font-medium">{faq.question}</span>
                <div className="transition-transform duration-300 ease-in-out">
                  {openIndex === index ? (
                    <FaMinus className="h-5 w-5 md:h-4 md:w-4 lg:h-5 lg:w-5" />
                  ) : (
                    <FaPlus className="h-5 w-5 md:h-4 md:w-4 lg:h-5 lg:w-5" />
                  )}
                </div>
              </div>
              <div 
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? "grid-rows-[1fr] opacity-100 mt-4" 
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-sm sm:text-base md:text-lg text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
