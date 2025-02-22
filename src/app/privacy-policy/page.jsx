'use client';
import { useRouter } from 'next/navigation';

const PrivacyPolicy = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-blue-500 text-white py-12 mt-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">PRIVACY POLICY</h1>
          <p className="text-md text-white">OUR PERSONAL STATEMENT, COOKIES, THIRD-PARTIES</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="space-y-12">
          {/* Personal Statement */}
          <section className="border-b border-gray-200 pb-8">
            <div className="flex flex-col md:flex-row gap-8">
              <h2 className="text-xl font-semibold w-full md:w-1/3">
                Personal Statement
              </h2>
              <p className="text-gray-600 w-full md:w-2/3">
                We are committed to creating a personalized user-friendly experience. To ensure continuous improvement, we use this data to help us provide detailed user action patterns and provide insights to our employees within strict guidelines.
              </p>
            </div>
          </section>

          {/* What are cookies? */}
          <section className="border-b border-gray-200 pb-8">
            <div className="flex flex-col md:flex-row gap-8">
              <h2 className="text-xl font-semibold w-full md:w-1/3">
                What are cookies?
              </h2>
              <p className="text-gray-600 w-full md:w-2/3">
                Cookies are small text files that are placed on your device when you visit our website. They enable basic functionalities, statistics, and advertising.
              </p>
            </div>
          </section>

          {/* Why do we use cookies? */}
          <section className="border-b border-gray-200 pb-8">
            <div className="flex flex-col md:flex-row gap-8">
              <h2 className="text-xl font-semibold w-full md:w-1/3">
                Why do we use cookies?
              </h2>
              <div className="text-gray-600 w-full md:w-2/3">
                <p className="mb-4">
                  Through applying cookies necessary for website functionality (called primary cookies) and other third-party cookies, your browsing experience is being improved. You can customize your preferences at any time.
                </p>
                <p>
                  Cookies help provide you with services like: list easy or checkout, saved pages, or 3rd parties data collection. Some are essential for the website's functionality while others help us improve customer browsing experience.
                </p>
              </div>
            </div>
          </section>

          {/* What information do we gather specifically? */}
          <section className="border-b border-gray-200 pb-8">
            <div className="flex flex-col md:flex-row gap-8">
              <h2 className="text-xl font-semibold w-full md:w-1/3">
                What information do we gather specifically?
              </h2>
              <p className="text-gray-600 w-full md:w-2/3">
                The information we gather is what you provide us with when signing up for a newsletter or making a purchase. This is usually demographic information like name, email, address, or shared through promotions. Cookies will also gather website information we can analyze to improve our services.
              </p>
            </div>
          </section>

          {/* Third-parties */}
          <section className="border-b border-gray-200 pb-8">
            <div className="flex flex-col md:flex-row gap-8">
              <h2 className="text-xl font-semibold w-full md:w-1/3">
                What third-parties do we share your information with?
              </h2>
              <p className="text-gray-600 w-full md:w-2/3">
                Any information we collect is only shared with our affiliate partners for marketing services. We will not share your personal information unless your use profile links shared third-parties/social partners.
              </p>
            </div>
          </section>

          {/* Website Media */}
          <section className="border-b border-gray-200 pb-8">
            <div className="flex flex-col md:flex-row gap-8">
              <h2 className="text-xl font-semibold w-full md:w-1/3">
                Website Media
              </h2>
              <p className="text-gray-600 w-full md:w-2/3">
                Any displayed media (ads or native) track via 3rd-parties or shows embed references. All ads/targeting is done solely by third-parties. Learn more about our advertising policy.
              </p>
            </div>
          </section>

          {/* Updates */}
          <section className="border-b border-gray-200 pb-8">
            <div className="flex flex-col md:flex-row gap-8">
              <h2 className="text-xl font-semibold w-full md:w-1/3">
                Updates
              </h2>
              <p className="text-gray-600 w-full md:w-2/3">
                Our privacy policies are subject to changes, all contents will appear on this page.
              </p>
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
