'use client';

import React, { useState } from 'react';
import { Upload, FileText, Users, Check, Circle, Square, Triangle } from 'lucide-react';

const JoinOurTeam = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length > 5) {
      alert('You can only upload up to 5 files');
      return;
    }
    setFiles(selectedFiles);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Hero Section */}
      <section className="relative py-24  overflow-hidden">
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center text-black space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight relative">
              <span className="relative inline-block mt-12">
                Join Our <span className='text-blue-500'> Team</span>
                <div className="absolute -top-6 -right-6 w-12 h-12 text-blue-500 animate-spin-slow">
                  <Circle className="w-full h-full" />
                </div>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Be part of a dynamic team that's shaping the future of technology and innovation. 
              At NexHub, we value creativity, passion, and dedication.
            </p>
          </div>
        </div>

        {/* Decorative shapes */}
        <div className="absolute top-20 left-10 text-blue-500/20 animate-float">
          <Triangle className="w-16 h-16" />
        </div>
        <div className="absolute bottom-20 right-10 text-blue-500/20 animate-float-delayed">
          <Square className="w-16 h-16" />
        </div>
      </section>

      {/* Enhanced Recruitment Process */}
      <section className="py-2 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 relative">
            Our  <span className='text-blue-500'>Recruitment </span> Process
            <div className="absolute -top-4 -right-4 w-8 h-8 text-blue-500/30 animate-ping">
              <Circle className="w-full h-full" />
            </div>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <FileText className="w-16 h-16 text-blue-500" />,
                title: "Application Review",
                description: "Submit your application and portfolio. Our team will review your skills and experience."
              },
              {
                icon: <Users className="w-16 h-16 text-blue-500" />,
                title: "Team Interview",
                description: "Meet with our team to discuss your experience, showcase your skills, and learn about NexHub."
              },
              {
                icon: <Check className="w-16 h-16 text-blue-500" />,
                title: "Final Selection",
                description: "Selected candidates will receive an offer to join our dynamic team."
              }
            ].map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 relative group">
                <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <div className="relative space-y-4">
                  <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Application Form */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-10 relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl" />
            
            <h2 className="text-4xl font-bold text-center mb-12 relative">
              Apply Now
              <div className="absolute -top-2 -right-2 w-6 h-6 text-blue-500/30 animate-bounce">
                <Triangle className="w-full h-full" />
              </div>
            </h2>

            {/* Form content remains the same as before */}
            <form className="space-y-6 relative">
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Number*
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Position*
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select Position</option>
                    <option value="video-editor">Video Editor</option>
                    <option value="web-developer">Web Developer</option>
                    <option value="photography">Photography</option>
                    <option value="graphic-designer">Graphic Designer</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Experience*
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  {['College Events', 'Professional', 'Community', 'NA', 'Other'].map((exp) => (
                    <label key={exp} className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="experience"
                        value={exp}
                        className="w-4 h-4 text-blue-500 focus:ring-blue-500"
                      />
                      <span>{exp}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Share your projects here*
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-blue-500 transition-colors">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="text-sm text-gray-600">
                      <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-500 hover:text-blue-600">
                        <span>Upload files</span>
                        <input
                          id="file-upload"
                          type="file"
                          className="sr-only"
                          multiple
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      Upload up to 5 supported files. Max 100 MB per file
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Technical Skills (for Web Developers)*
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  rows="3"
                  placeholder="List your technical skills and frameworks you're familiar with"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Portfolio/Github/LinkedIn
                </label>
                <input
                  type="url"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="https://"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you want to join Nexhub?*
                </label>
                <textarea
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  rows="4"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Have you ever heard about Nexhub?*
                </label>
                <textarea
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  rows="3"
                />
              </div>

              <div className="flex justify-center mt-12">
                <button
                  type="submit"
                  className="px-12 py-4 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinOurTeam;