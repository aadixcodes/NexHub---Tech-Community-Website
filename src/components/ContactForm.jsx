// 'use client';

// import React, { useState } from 'react';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="min-h-[50vh] flex items-center justify-center">
//       <div className="flex flex-col md:flex-row w-full mb-[4rem] max-w-7xl bg-white shadow-xl rounded-lg overflow-hidden">
//         {/* Contact Form Section */}
//         <div className="w-full md:w-1/2 bg-blue-600 p-6 md:p-8 lg:p-12">
//           <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
//             CONTACT US
//           </h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="space-y-2">
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full p-3 rounded bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200"
//                 placeholder="Name"
//                 required
//               />
//             </div>
//             <div className="space-y-2">
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full p-3 rounded bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200"
//                 placeholder="Email"
//                 required
//               />
//             </div>
//             <div className="space-y-2">
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="w-full p-3 rounded bg-white text-gray-800 placeholder-gray-500 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200"
//                 placeholder="Message"
//                 required
//               ></textarea>
//             </div>
//             <button 
//               type="submit"
//               className="w-full bg-gray-800 hover:bg-gray-800 text-white font-bold p-3 rounded transition duration-200 transform hover:scale-[1.02]"
//             >
//               Submit
//             </button>
//           </form>
//         </div>

//         {/* Image Section */}
//         <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-12 relative hidden md:block">
//           {/* Main Image */}
//           <div className="relative h-full">
//             <img
//               src="/Assets/OtherImages/contactus.svg"
//               alt="Person with headset working on a laptop"
//               className="w-full h-full object-cover rounded-lg"
//             />

//             {/* Chat Bubble */}
//             <div className="absolute top-[7rem] left-8 bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-200">
//               <p className="text-gray-800 text-sm md:text-base">
//                 Hello! How can I help you?
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;

'use client';
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container  mx-auto px-4 py-8">
      <div className="max-w-7xl p-10 rounded-[10px] mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Contact Form Section */}
        <div className="bg-blue-600 py-[60px] p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-6 text-white">CONTACT US</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="relative hidden md:block  border-[10px] rounded-[10px] border-[#2563eb]">
          {/* Main Image */}
          <div className="relative">
            <img
              src="/Assets/OtherImages/contactus.svg"
              alt="Contact"
              className="w-[28rem] h-[28rem] mx-auto rounded-lg shadow-lg"
            />
            {/* Chat Bubble */}
            <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg max-w-xs">
              <p className="text-gray-800">Hello! How can I help you?</p>
            </div>
          </div>
        </div>

        {/* Mobile Image - Only shown on small screens */}
        <div className="md:hidden">
          <img
            src="/Assets/OtherImages/contactus.svg"
            alt="Contact"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;