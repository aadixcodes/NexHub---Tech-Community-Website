"use client";

import React, { useState } from "react";
import {
  Upload,
  FileText,
  Users,
  Check,
  Circle,
  Square,
  Triangle,
} from "lucide-react";
import Swal from "sweetalert2";

const JoinOurTeam = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    collegeName: "",
    course: "",
    year: "",
    semester: "",
    position: "",
    specifyPosition: "",
    experience: "",
    technicalSkills: "",
    projectURL: "",
    portfolioURL: "",
    githubURL: "",
    linkedinURL: "",
    instagramURL: "",
    whyJoin: "",
    heardAbout: "",
    privacyPolicy: "",
    selfDeclaration: "",
  });

  const [files, setFiles] = useState([]);
  const [fileNames, setFileNames] = useState([]);
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: "",
  });

  const [selectedPosition, setSelectedPosition] = useState("");

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };
  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleExperienceChange = (e) => {
    setFormData({
      ...formData,
      experience: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length > 5) {
      alert("You can only upload up to 5 files");
      return;
    }
    setFiles(selectedFiles);
    setFileNames(selectedFiles.map((file) => file.name));
  };

  const handlePositionChange = (e) => {
    const { name, value } = e.target;
    setSelectedPosition(value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Updates 'year', 'semester', or 'position' dynamically
      specifyPosition:
        name === "position" && value === "Other"
          ? prevData.specifyPosition
          : "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({
      submitting: true,
      submitted: false,
      error: false,
      message: "",
    });

    // REPLACE THIS URL with your actual deployed Google Apps Script URL
    const SHEET_URL =
      "https://script.google.com/macros/s/AKfycbxE18TX0oWV0fvnpZvfprZLmkq48Zz4BTTFiU7lPj7mc-gU4qPxMVxNuC9URisT4QHMzQ/exec";

    try {
      // Create form data for submission
      const submitData = new FormData();

      // Add all form fields
      Object.keys(formData).forEach((key) => {
        submitData.append(key, formData[key]);
      });

      // Add file names as comma-separated string
      submitData.append("fileNames", fileNames.join(", "));

      // Send the data to Google Sheets
      await fetch(SHEET_URL, {
        method: "POST",
        body: submitData,
        mode: "no-cors",
      });

      // Reset form and show success message
      setFormData({
        fullName: "",
        email: "",
        contactNumber: "",
        collegeName: "",
        course: "",
        year: "",
        semester: "",
        position: "",
        specifyPosition: "",
        experience: "",
        technicalSkills: "",
        projectURL: "",
        portfolioURL: "",
        githubURL: "",
        linkedinURL: "",
        instagramURL: "",
        whyJoin: "",
        heardAbout: "",
        privacyPolicy: "",
        selfDeclaration: "",
      });
      setFiles([]);
      setFileNames([]);

      // After successful submission, show success alert
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Your application has been submitted successfully!",
        confirmButtonColor: "#3B82F6",
      });
    } catch (error) {
      console.error("Submission error:", error);

      // Show error alert
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "There was an error submitting your application. Please try again.",
        confirmButtonColor: "#3B82F6",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center text-black space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight relative">
              <span className="relative inline-block mt-12">
                Join Our <span className="text-blue-500"> Team</span>
                <div className="absolute -top-6 -right-6 w-12 h-12 text-blue-500 animate-spin-slow">
                  <Circle className="w-full h-full" />
                </div>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Be part of a dynamic team that's shaping the future of technology
              and innovation. At NexHub, we value creativity, passion, and
              dedication.
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
            Our <span className="text-blue-500">Recruitment </span> Process
            <div className="absolute -top-4 -right-4 w-8 h-8 text-blue-500/30 animate-ping">
              <Circle className="w-full h-full" />
            </div>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <FileText className="w-16 h-16 text-blue-500" />,
                title: "Application Review",
                description:
                  "Submit your application and portfolio. Our team will review your skills and experience.",
              },
              {
                icon: <Users className="w-16 h-16 text-blue-500" />,
                title: "Team Interview",
                description:
                  "Meet with our team to discuss your experience, showcase your skills, and learn about NexHub.",
              },
              {
                icon: <Check className="w-16 h-16 text-blue-500" />,
                title: "Final Selection",
                description:
                  "Selected candidates will receive an offer to join our dynamic team.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 relative group"
              >
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

            {/* Status messages */}
            {status.submitted && (
              <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-700 rounded">
                <p className="font-medium">{status.message}</p>
              </div>
            )}

            {status.error && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
                <p className="font-medium">{status.message}</p>
              </div>
            )}

            {/* Form content */}
            <form className="space-y-6 relative" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-gray-700 mb-3 font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-5 py-3 border-2 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-3 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-3 border-2 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-gray-700 mb-3 font-medium">
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    required
                    name="contactNumber"
                    placeholder="Enter your contact no."
                    value={formData.contactNumber}
                    onChange={handleChange}
                    className="w-full px-5 py-3 border-2 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-3 font-medium">
                    College/Institution Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your college/institution name"
                    name="collegeName"
                    value={formData.collegeName}
                    onChange={handleChange}
                    className="w-full px-5 py-3 border-2 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-gray-700 mb-3 font-medium">
                    Course/Branch *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="B.Tech/Computer Science..."
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-5 py-3 border-2 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-3 font-medium">
                    Year of study *
                  </label>
                  <select
                    required
                    name="year"
                    value={formData.year}
                    onChange={handlePositionChange}
                    className="w-full px-5 py-3 border-2 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all"
                  >
                    <option value="">Select year</option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                  </select>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-gray-700 mb-3 font-medium">
                    Semester *
                  </label>
                  <select
                    required
                    name="semester"
                    value={formData.semester}
                    onChange={handlePositionChange}
                    className="w-full px-5 py-3 border-2 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all"
                  >
                    <option value="">Select Semester</option>
                    <option value="1st Semester">1st Semester</option>
                    <option value="2nd Semester">2nd Semester</option>
                    <option value="3rd Semester">3rd Semester</option>
                    <option value="4th Semester">4th Semester</option>
                    <option value="5th Semester">5th Semester</option>
                    <option value="6th Semester">6th Semester</option>
                    <option value="7th Semester">7th Semester</option>
                    <option value="8th Semester">8th Semester</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-3 font-medium">
                    Apply for which Position *
                  </label>
                  <select
                    required
                    name="position"
                    value={formData.position}
                    onChange={handlePositionChange}
                    className="w-full px-5 py-3 border-2 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all"
                  >
                    <option value="">Select Position</option>
                    <option value="Video Editor">Video Editor</option>
                    <option value="Web Developer">Web Developer</option>
                    <option value="Photography">Photography</option>
                    <option value="Graphic Designer">Graphic Designer</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Conditional Other Position Field */}
              {selectedPosition === "Other" && (
                <div>
                  <label className="block text-gray-700 mb-3 font-medium">
                    Please Specify Your Position *
                  </label>
                  <input
                    type="text"
                    required
                    name="specifyPosition"
                    value={formData.specifyPosition}
                    onChange={handleChange}
                    placeholder="Enter your position"
                    className="w-full px-5 py-3 border-2 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Do you have any prior experience *
                  <span className="text-sm text-gray-500 block mt-1">
                    {/* such as participation in college events, involvement in a community, or professional work experience? */}
                  </span>
                </label>
                <input
                  type="text"
                  required
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="Enter any relevant experience, such as college events, community involvement, or professional work."
                  className="w-full px-5 py-3 border-2 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project URL (Google Drive Link) *
                  <span className="text-sm text-gray-500 block mt-1">
                    Please upload your project to Google Drive and share a
                    public link
                  </span>
                </label>
                <input
                  type="url"
                  required
                  name="projectURL"
                  value={formData.projectURL}
                  onChange={handleChange}
                  placeholder="https://drive.google.com/..."
                  className="w-full px-5 py-3 border-2 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Technical Skills (for Web Developers)*
                </label>
                <textarea
                  name="technicalSkills"
                  value={formData.technicalSkills}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  rows="3"
                  placeholder="List your technical skills and frameworks you're familiar with"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Portfolio
                </label>
                <input
                  type="url"
                  name="portfolioURL"
                  value={formData.portfolioURL}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="https://www.yourdomain.com/"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Github
                </label>
                <input
                  type="url"
                  name="githubURL"
                  value={formData.githubURL}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="https://www.github.com/username="
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  LinkedIn
                </label>
                <input
                  type="url"
                  name="linkedinURL"
                  value={formData.linkedinURL}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="https://www.linkedin.com/username="
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Instagram
                </label>
                <input
                  type="url"
                  name="instagramURL"
                  value={formData.instagramURL}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="https://www.instagram.com/username="
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you want to join Nexhub?*
                </label>
                <textarea
                  name="whyJoin"
                  value={formData.whyJoin}
                  onChange={handleChange}
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
                  name="heardAbout"
                  value={formData.heardAbout}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  rows="3"
                />
              </div>

              {/* Privacy & Declaration Checkboxes */}
              <div className="space-y-4 mt-8">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacyPolicy"
                    name="privacyPolicy"
                    checked={formData.privacyPolicy}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                  <label
                    htmlFor="privacyPolicy"
                    className="text-sm text-gray-600"
                  >
                    I have read and agree to the Privacy Policy and Terms &
                    Conditions of NexHub *
                  </label>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="declaration"
                    name="selfDeclaration"
                    checked={formData.selfDeclaration}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                  <label
                    htmlFor="declaration"
                    className="text-sm text-gray-600"
                  >
                    I hereby declare that all the information provided above is
                    true to the best of my knowledge *
                  </label>
                </div>
              </div>

              <div className="flex justify-center mt-12">
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="px-12 py-4 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status.submitting ? "Submitting..." : "Submit Application"}
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
