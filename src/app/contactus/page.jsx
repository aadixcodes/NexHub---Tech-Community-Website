// 'use client';
// import React, { useState } from 'react';
// import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
// import Swal from 'sweetalert2';

// const ContactUs = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // REPLACE THIS URL with your actual deployed Google Apps Script URL
//     const SHEET_URL = 'https://script.google.com/macros/s/AKfycbzAeOhOUrH026utleC5a9DQERZXQL-oV_F5ux4OcUoO0eIkLIl0ldxbV04kFGzDZnuGvw/exec';

//     try {
//       // Send form data to Google Sheets
//       await fetch(SHEET_URL, {
//         method: 'POST',
//         body: JSON.stringify(formData),
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });

//       // Reset form and show success message
//       setFormData({ name: '', email: '', subject: '', message: '' });
//       Swal.fire({
//         icon: 'success',
//         title: 'Success!',
//         text: 'Your message has been sent successfully!',
//         confirmButtonColor: '#3B82F6',
//       });
//     } catch (error) {
//       console.error('Submission error:', error);
//       Swal.fire({
//         icon: 'error',
//         title: 'Error!',
//         text: 'There was an error sending your message. Please try again.',
//         confirmButtonColor: '#3B82F6',
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="min-h-screen">
//       {/* Header Section */}
//       <div className="bg-white py-16 mt-8 sm:py-24">
//         <div className="mx-auto max-w-7xl px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
//               Get in Touch
//             </h1>
//             <p className="mt-6 text-lg leading-8 text-gray-600">
//               Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Contact Information Cards */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-white rounded-xl p-8">
//             <div className="flex items-center gap-4">
//               <div className="bg-blue-100 p-3 rounded-full">
//                 <Mail className="h-6 w-6 text-blue-600" />
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-900">Email</h3>
//                 <p className="mt-1 text-gray-600">contact.nexhub@gmail.com</p>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-xl  p-8">
//             <div className="flex items-center gap-4">
//               <div className="bg-blue-100 p-3 rounded-full">
//                 <Phone className="h-6 w-6 text-blue-600" />
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-900">Phone</h3>
//                 <p className="mt-1 text-gray-600">+91 123-456-7890</p>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-xl p-8">
//             <div className="flex items-center gap-4">
//               <div className="bg-blue-100 p-3 rounded-full">
//                 <MapPin className="h-6 w-6 text-blue-600" />
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-900">Location</h3>
//                 <p className="mt-1 text-gray-600">Indore, Madhya Pradesh</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Contact Form Section */}
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 shadow-lg lg:px-8 py-16">
//         <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
//           <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h2>
          
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
//                   placeholder="John Doe"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Your Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
//                   placeholder="john@example.com"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Subject
//               </label>
//               <input
//                 type="text"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
//                 placeholder="How can we help you?"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Message
//               </label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 rows={6}
//                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
//                 placeholder="Your message..."
//               />
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-colors disabled:opacity-70"
//               >
//                 {isSubmitting ? (
//                   <>
//                     <Loader2 className="h-5 w-5 animate-spin" />
//                     Sending...
//                   </>
//                 ) : (
//                   <>
//                     <Send className="h-5 w-5" />
//                     Send Message
//                   </>
//                 )}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;

'use client';
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import Swal from 'sweetalert2';

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // REPLACE THIS URL with your actual deployed Google Apps Script URL
    const SHEET_URL = 'https://script.google.com/macros/s/AKfycbwpPrHkmB2cvX-mb0rCIRaKBU_bJyQyvWsAkxG_p_Vgbcy6OAqSxom7llZezMic3Giw4g/exec';

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
        mode: 'no-cors' // Important for cross-origin requests to Google Apps Script
      });

      // Since we're using no-cors, we can't actually check the response
      // So we'll assume success if no error was thrown
      setFormData({ name: '', email: '', subject: '', message: '' });
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Your message has been sent successfully!',
        confirmButtonColor: '#3B82F6',
      });
    } catch (error) {
      console.error('Submission error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'There was an error sending your message. Please try again.',
        confirmButtonColor: '#3B82F6',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-white py-16 mt-8 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Contact Information Cards */}
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="bg-white rounded-xl p-8">
             <div className="flex items-center gap-4">
               <div className="bg-blue-100 p-3 rounded-full">
                 <Mail className="h-6 w-6 text-blue-600" />
               </div>
               <div>
                 <h3 className="text-xl font-semibold text-gray-900">Email</h3>
                 <p className="mt-1 text-gray-600">contact.nexhub@gmail.com</p>
               </div>
             </div>
           </div>

           <div className="bg-white rounded-xl  p-8">
             <div className="flex items-center gap-4">
               <div className="bg-blue-100 p-3 rounded-full">
                 <Phone className="h-6 w-6 text-blue-600" />
               </div>
               <div>
                 <h3 className="text-xl font-semibold text-gray-900">Phone</h3>
                 <p className="mt-1 text-gray-600">+91 97555 62101</p>
               </div>
             </div>
           </div>

           <div className="bg-white rounded-xl p-8">
             <div className="flex items-center gap-4">
               <div className="bg-blue-100 p-3 rounded-full">
                 <MapPin className="h-6 w-6 text-blue-600" />
               </div>
               <div>
                 <h3 className="text-xl font-semibold text-gray-900">Location</h3>
                 <p className="mt-1 text-gray-600">Indore, Madhya Pradesh</p>
               </div>
             </div>
           </div>
         </div>
       </div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white shadow-xl p-8 md:p-12 rounded-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Send us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg"
                placeholder="How can we help you?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border rounded-lg resize-none"
                placeholder="Your message..."
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center gap-2 transition disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
