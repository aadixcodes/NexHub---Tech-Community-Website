'use client';
import { useRouter } from 'next/navigation';

const PrivacyPolicy = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-blue-500 text-white py-12 mt-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">NexHub Privacy Policy</h1>
          <p className="text-md text-white">Effective Date: January 19, 2025</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="space-y-12">
          {/* Introduction */}
          <section className="border-b border-gray-200 pb-8">
            <div className="flex flex-col md:flex-row gap-8">
              <h2 className="text-xl font-semibold w-full md:w-1/3">
                1. Introduction
              </h2>
              <p className="text-gray-600 w-full md:w-2/3">
                NexHub values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect your data when you engage with NexHub's community, website, and services.
              </p>
            </div>
          </section>

          {/* Information We Collect */}
          <section className="border-b border-gray-200 pb-8">
            <div className="flex flex-col md:flex-row gap-8">
              <h2 className="text-xl font-semibold w-full md:w-1/3">
                2. Information We Collect
              </h2>
              <div className="text-gray-600 w-full md:w-2/3">
                <p className="mb-4">We collect different types of information to improve user experience and community engagement:</p>
                
                <h3 className="font-semibold mt-6 mb-2">A. Personal Information</h3>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Contact details</li>
                  <li>Educational background (optional)</li>
                  <li>Social media profiles (if provided)</li>
                </ul>

                <h3 className="font-semibold mt-6 mb-2">B. Non-Personal Information</h3>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>Browser type and IP address</li>
                  <li>Usage data, including website visits and interaction with community resources</li>
                  <li>Device information</li>
                </ul>

                <h3 className="font-semibold mt-6 mb-2">C. Community Interactions</h3>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>Messages, posts, and contributions on discussion forums and social media groups</li>
                  <li>Event registrations and participation history</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="border-b border-gray-200 pb-8">
            <div className="flex flex-col md:flex-row gap-8">
              <h2 className="text-xl font-semibold w-full md:w-1/3">
                3. How We Use Your Information
              </h2>
              <div className="text-gray-600 w-full md:w-2/3">
                <p className="mb-4">NexHub uses collected data for the following purposes:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>To provide and improve our services, events, and community activities.</li>
                  <li>To send newsletters, updates, and announcements about upcoming events.</li>
                  <li>To analyze community engagement and enhance user experience.</li>
                  <li>To comply with legal and regulatory obligations.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Sharing and Third Parties */}
          <section className="border-b border-gray-200 pb-8">
            <div className="flex flex-col md:flex-row gap-8">
              <h2 className="text-xl font-semibold w-full md:w-1/3">
                4. Data Sharing and Third Parties
              </h2>
              <div className="text-gray-600 w-full md:w-2/3">
                <p className="mb-4">We do not sell, trade, or rent your personal information. However, we may share your data in the following cases:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>With event partners and sponsors (only relevant information required for event participation)</li>
                  <li>For legal compliance if required by law enforcement or regulatory bodies</li>
                  <li>With service providers (e.g., email platforms, analytics tools) to help operate our website and community effectively</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Continue with other sections following the same pattern... */}
          {/* Data Security, Your Rights, Cookies, Changes, Contact sections */}

          {/* Contact Section */}
          <section className="pb-8">
            <div className="flex flex-col md:flex-row gap-8">
              <h2 className="text-xl font-semibold w-full md:w-1/3">
                9. Contact Us
              </h2>
              <div className="text-gray-600 w-full md:w-2/3">
                <p className="mb-4">For any privacy-related inquiries, please reach out to:</p>
                <p className="font-medium">Email: contact.nexhub@gmail.com</p>
              </div>
            </div>
          </section>

          {/* Contact Button */}
          <div className="text-center pt-8">
            <button 
              onClick={() => router.push('/contactus')}
              className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;