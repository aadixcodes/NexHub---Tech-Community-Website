'use client';
import React, { useState } from 'react';
import { Instagram, Send, Globe, MessageCircle, Loader2 } from 'lucide-react';

const FeedbackForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    experience: '',
    expectations: '',
    facilities: '',
    futureInterest: '',
    suggestions: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    alert('Feedback submitted successfully!');
    setFormData({
      experience: '',
      expectations: '',
      facilities: '',
      futureInterest: '',
      suggestions: ''
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen py-12">
      {/* Header Section */}
      <div className="mx-auto max-w-4xl mt-20 px-6 lg:px-8 mb-12">
        <div className="text-center ">
          <h1 className="text-5xl font-bold text-blue-500">
            Workshop Feedback
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Your feedback is invaluable to us! Please take a moment to share your thoughts about the workshop. Your insights will help us improve future events.
          </p>
        </div>
      </div>

      {/* Feedback Form */}
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Overall Experience */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                How would you rate your overall experience at the workshop?*
              </label>
              <div className="space-y-3">
                {['Excellent', 'Good', 'Average', 'Poor'].map((option) => (
                  <div key={option} className="flex items-center">
                    <input
                      type="radio"
                      name="experience"
                      value={option}
                      onChange={handleChange}
                      required
                      className="h-5 w-5 text-indigo-600"
                    />
                    <label className="ml-3 text-gray-700">{option}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Expectations */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                Did the workshop meet your expectations?*
              </label>
              <div className="space-y-3">
                {[
                  'Exceeded expectations',
                  'Meet expectations',
                  'Fell short of expectations'
                ].map((option) => (
                  <div key={option} className="flex items-center">
                    <input
                      type="radio"
                      name="expectations"
                      value={option}
                      onChange={handleChange}
                      required
                      className="h-5 w-5 text-indigo-600"
                    />
                    <label className="ml-3 text-gray-700">{option}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Facilities */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                How would you rate the facilities provided (venue, equipment, materials)?*
              </label>
              <div className="space-y-3">
                {['Excellent', 'Good', 'Average', 'Poor'].map((option) => (
                  <div key={option} className="flex items-center">
                    <input
                      type="radio"
                      name="facilities"
                      value={option}
                      onChange={handleChange}
                      required
                      className="h-5 w-5 text-indigo-600"
                    />
                    <label className="ml-3 text-gray-700">{option}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Future Interest */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                Would you be interested in attending similar workshops in the future?*
              </label>
              <div className="space-y-3">
                {['Yes', 'No', 'May be'].map((option) => (
                  <div key={option} className="flex items-center">
                    <input
                      type="radio"
                      name="futureInterest"
                      value={option}
                      onChange={handleChange}
                      required
                      className="h-5 w-5 text-indigo-600"
                    />
                    <label className="ml-3 text-gray-700">{option}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Suggestions */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                Any suggestions for improving the organization of future workshops?*
              </label>
              <textarea
                name="suggestions"
                value={formData.suggestions}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Your suggestions..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-colors disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Submit Feedback
                </>
              )}
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Follow Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="https://www.instagram.com/nexhubcommunity/profilecard/?igsh=bWhicXVwb3A4dGNu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3 rounded-lg bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 transition-colors"
            >
              <Instagram className="h-5 w-5 text-pink-600" />
              <span className="text-gray-800">Instagram</span>
            </a>
            <a
              href="https://chat.whatsapp.com/KzT0nik5nY577q5XsUqOSR?fbclid=PAZXh0bgNhZW0CMTEAAabQ2kNqhwFSc_nPqN6DhtuF3c6UG71e7Nn9zNXPEbkmFlf35zR9UMjU6sk_aem_7N2xtSQHzypmtZnMPJ1gog"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3 rounded-lg bg-gradient-to-r from-green-100 to-emerald-100 hover:from-green-200 hover:to-emerald-200 transition-colors"
            >
              <MessageCircle className="h-5 w-5 text-green-600" />
              <span className="text-gray-800">WhatsApp</span>
            </a>
            <a
              href="https://nexhub-community-lime.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3 rounded-lg bg-gradient-to-r from-blue-100 to-indigo-100 hover:from-blue-200 hover:to-indigo-200 transition-colors"
            >
              <Globe className="h-5 w-5 text-blue-600" />
              <span className="text-gray-800">Website</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;