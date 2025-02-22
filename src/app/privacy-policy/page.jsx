// 'use client';
// import { useRouter } from 'next/navigation';

// const PrivacyPolicy = () => {
//   const router = useRouter();

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       <div className="bg-blue-500 text-white py-12 mt-16 px-4">
//         <div className="container mx-auto max-w-4xl">
//           <h1 className="text-3xl md:text-4xl font-bold mb-2">PRIVACY POLICY</h1>
//           <p className="text-md text-white">OUR PERSONAL STATEMENT, COOKIES, THIRD-PARTIES</p>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="container mx-auto max-w-4xl px-4 py-12">
//         <div className="space-y-12">
//           {/* Personal Statement */}
//           <section className="border-b border-gray-200 pb-8">
//             <div className="flex flex-col md:flex-row gap-8">
//               <h2 className="text-xl font-semibold w-full md:w-1/3">
//                 Personal Statement
//               </h2>
//               <p className="text-gray-600 w-full md:w-2/3">
//                 We are committed to creating a personalized user-friendly experience. To ensure continuous improvement, we use this data to help us provide detailed user action patterns and provide insights to our employees within strict guidelines.
//               </p>
//             </div>
//           </section>

//           {/* What are cookies? */}
//           <section className="border-b border-gray-200 pb-8">
//             <div className="flex flex-col md:flex-row gap-8">
//               <h2 className="text-xl font-semibold w-full md:w-1/3">
//                 What are cookies?
//               </h2>
//               <p className="text-gray-600 w-full md:w-2/3">
//                 Cookies are small text files that are placed on your device when you visit our website. They enable basic functionalities, statistics, and advertising.
//               </p>
//             </div>
//           </section>

//           {/* Why do we use cookies? */}
//           <section className="border-b border-gray-200 pb-8">
//             <div className="flex flex-col md:flex-row gap-8">
//               <h2 className="text-xl font-semibold w-full md:w-1/3">
//                 Why do we use cookies?
//               </h2>
//               <div className="text-gray-600 w-full md:w-2/3">
//                 <p className="mb-4">
//                   Through applying cookies necessary for website functionality (called primary cookies) and other third-party cookies, your browsing experience is being improved. You can customize your preferences at any time.
//                 </p>
//                 <p>
//                   Cookies help provide you with services like: list easy or checkout, saved pages, or 3rd parties data collection. Some are essential for the website's functionality while others help us improve customer browsing experience.
//                 </p>
//               </div>
//             </div>
//           </section>

//           {/* What information do we gather specifically? */}
//           <section className="border-b border-gray-200 pb-8">
//             <div className="flex flex-col md:flex-row gap-8">
//               <h2 className="text-xl font-semibold w-full md:w-1/3">
//                 What information do we gather specifically?
//               </h2>
//               <p className="text-gray-600 w-full md:w-2/3">
//                 The information we gather is what you provide us with when signing up for a newsletter or making a purchase. This is usually demographic information like name, email, address, or shared through promotions. Cookies will also gather website information we can analyze to improve our services.
//               </p>
//             </div>
//           </section>

//           {/* Third-parties */}
//           <section className="border-b border-gray-200 pb-8">
//             <div className="flex flex-col md:flex-row gap-8">
//               <h2 className="text-xl font-semibold w-full md:w-1/3">
//                 What third-parties do we share your information with?
//               </h2>
//               <p className="text-gray-600 w-full md:w-2/3">
//                 Any information we collect is only shared with our affiliate partners for marketing services. We will not share your personal information unless your use profile links shared third-parties/social partners.
//               </p>
//             </div>
//           </section>

//           {/* Website Media */}
//           <section className="border-b border-gray-200 pb-8">
//             <div className="flex flex-col md:flex-row gap-8">
//               <h2 className="text-xl font-semibold w-full md:w-1/3">
//                 Website Media
//               </h2>
//               <p className="text-gray-600 w-full md:w-2/3">
//                 Any displayed media (ads or native) track via 3rd-parties or shows embed references. All ads/targeting is done solely by third-parties. Learn more about our advertising policy.
//               </p>
//             </div>
//           </section>

//           {/* Updates */}
//           <section className="border-b border-gray-200 pb-8">
//             <div className="flex flex-col md:flex-row gap-8">
//               <h2 className="text-xl font-semibold w-full md:w-1/3">
//                 Updates
//               </h2>
//               <p className="text-gray-600 w-full md:w-2/3">
//                 Our privacy policies are subject to changes, all contents will appear on this page.
//               </p>
//             </div>
//           </section>

//           {/* Contact Button */}
//           <div className="text-center pt-8">
//             <button 
//               onClick={() => router.push('/contactus')}
//               className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
//             >
//               Contact Us
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PrivacyPolicy;


import React from 'react';
import { Mail, Shield, Lock, Bell, Users, Database, Cookie, FileText, PhoneCall } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              NexHub Privacy Policy
            </h1>
            <p className="text-xl opacity-90">
              Protecting your privacy is our top priority
            </p>
            <div className="mt-8 text-sm opacity-80">
              Effective Date: February 23, 2024
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <Shield className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Introduction</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              NexHub values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect your data when you engage with NexHub's community, website, and services.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <Database className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Information We Collect</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Personal Information</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Name</li>
                  <li>• Email address</li>
                  <li>• Contact details</li>
                  <li>• Educational background</li>
                  <li>• Social media profiles</li>
                </ul>
              </div>
              <div className="bg-indigo-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-indigo-800 mb-4">Non-Personal Information</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Browser type and IP</li>
                  <li>• Usage data</li>
                  <li>• Device information</li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">Community Interactions</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Messages and posts</li>
                  <li>• Event registrations</li>
                  <li>• Participation history</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <Users className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">How We Use Your Information</h2>
            </div>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "To provide and improve our services, events, and community activities",
                "To send newsletters, updates, and announcements",
                "To analyze community engagement",
                "To comply with legal obligations"
              ].map((item, index) => (
                <li key={index} className="bg-gray-50 rounded-lg p-4 text-gray-600">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Data Security */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <Lock className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Data Security</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We implement strict security measures to protect your personal data from unauthorized access, loss, or misuse. However, no online platform can guarantee 100% security, so we encourage members to follow best security practices.
            </p>
          </section>

          {/* Your Rights */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <FileText className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Your Rights and Choices</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Access and update your personal information",
                "Opt out of emails and newsletters",
                "Request a copy of your stored data"
              ].map((right, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 rounded-xl text-white">
                  <p className="text-lg">{right}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 md:p-8 shadow-xl text-white">
            <div className="flex items-center gap-4 mb-6">
              <Mail className="w-8 h-8" />
              <h2 className="text-2xl md:text-3xl font-bold">Contact Us</h2>
            </div>
            <p className="mb-4">For any privacy-related inquiries, please reach out to:</p>
            <div className="bg-white/10 rounded-lg p-4 inline-block">
              <p className="font-medium">Email: contact.nexhub@gmail.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;