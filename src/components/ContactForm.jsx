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
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="container  mx-auto px-4 py-8">
//       <div className="max-w-7xl p-10 rounded-[10px] mx-auto grid md:grid-cols-2 gap-8 items-center">
//         {/* Contact Form Section */}
//         <div className="bg-blue-600 py-[60px] p-6 rounded-lg shadow-lg">
//           <h2 className="text-4xl font-bold mb-6 text-white">CONTACT US</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Your Name"
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//             <div>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Your Email"
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//             <div>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Your Message"
//                 rows="4"
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300"
//             >
//               Submit
//             </button>
//           </form>
//         </div>

//         {/* Image Section */}
//         <div className="relative hidden md:block  border-[10px] rounded-[10px] border-[#2563eb]">
//           {/* Main Image */}
//           <div className="relative">
//             <img
//               src="/Assets/OtherImages/contactus.svg"
//               alt="Contact"
//               className="w-[28rem] h-[28rem] mx-auto rounded-lg shadow-lg"
//             />
//             {/* Chat Bubble */}
//             <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg max-w-xs">
//               <p className="text-gray-800">Hello! How can I help you?</p>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Image - Only shown on small screens */}
//         <div className="md:hidden">
//           <img
//             src="/Assets/OtherImages/contactus.svg"
//             alt="Contact"
//             className="w-full h-auto rounded-lg shadow-lg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;


'use client';
import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear any previous status messages when user starts typing
    if (submitStatus.message) {
      setSubmitStatus({ type: '', message: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    // Replace with your Google Apps Script URL
    const SHEET_URL = 'https://script.google.com/macros/s/AKfycbx3Jxl03vIn6KnAi92YS8Ig4MkpOf9mDZh0zL4h31LXxYWGN3_m6uRXZMVrjMEyIM23wg/exec';

    try {
      // Create URL-encoded form data
      const formDataEncoded = new URLSearchParams();
      Object.keys(formData).forEach(key => {
        formDataEncoded.append(key, formData[key]);
      });

      // Send form data to Google Sheets
      const response = await fetch(SHEET_URL, {
        method: 'POST',
        body: formDataEncoded.toString(),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        mode: 'no-cors'
      });

      // Reset form and show success message
      setFormData({ name: '', email: '', message: '' });
      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      });
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'There was an error sending your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
              />
            </div>
            
            {/* Status Message */}
            {submitStatus.message && (
              <div className={`p-3 rounded-lg ${
                submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300 disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Sending...
                </>
              ) : (
                'Submit'
              )}
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="relative hidden md:block border-[10px] rounded-[10px] border-[#2563eb]">
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