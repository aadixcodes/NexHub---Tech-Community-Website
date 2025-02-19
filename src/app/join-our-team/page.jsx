// "use client";

// import React, { useState } from "react";
// import {
//   Upload,
//   FileText,
//   Users,
//   Check,
//   Circle,
//   Square,
//   Triangle,
// } from "lucide-react";
// import { useRouter } from 'next/navigation';
// import Swal from 'sweetalert2';

// const JoinOurTeam = () => {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     contactNumber: "",
//     position: "",
//     specifyPosition: "",
//     experience: "",
//     technicalSkills: "",
//     portfolioURL: "",
//     githubURL: "",
//     linkedinURL: "",
//     instagramURL: "",
//     whyJoin: "",
//     heardAbout: "",
//   });

//   const [files, setFiles] = useState([]);
//   const [fileNames, setFileNames] = useState([]);
//   const [status, setStatus] = useState({
//     submitting: false,
//     submitted: false,
//     error: false,
//     message: "",
//   });

//   const [selectedPosition, setSelectedPosition] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleExperienceChange = (e) => {
//     setFormData({
//       ...formData,
//       experience: e.target.value,
//     });
//   };

//   const handleFileChange = (e) => {
//     const selectedFiles = Array.from(e.target.files);
//     if (selectedFiles.length > 5) {
//       alert("You can only upload up to 5 files");
//       return;
//     }
//     setFiles(selectedFiles);
//     setFileNames(selectedFiles.map((file) => file.name));
//   };

//   const handlePositionChange = (e) => {
//     const value = e.target.value;
//     setSelectedPosition(value);
//     setFormData((prevData) => ({
//       ...prevData,
//       position: value,
//       specifyPosition: value === "Other" ? prevData.specifyPosition : "",
//     }));
//   };

//   const toBase64 = (file) => new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result.split(',')[1]);
//     reader.onerror = error => reject(error);
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus({
//       submitting: true,
//       submitted: false,
//       error: false,
//       message: "",
//     });

//     // REPLACE THIS URL with your actual deployed Google Apps Script URL
//     const SHEET_URL = "https://script.google.com/macros/s/AKfycbzyTNoL6wz7ehKFdfOlO0-k9xGJwpBYxMLLNyEzRH9llVCTqSb0aML1WDaFABEdgyR0Fw/exec";

//     try {
//       // Process files if they exist
//       let processedFiles = [];
//       if (files.length > 0) {
//         processedFiles = await Promise.all(files.map(async (file) => ({
//           name: file.name,
//           type: file.type,
//           content: await toBase64(file)
//         })));
//       }

//       // Create submission data
//       const submitData = {
//         fullName: formData.fullName,
//         email: formData.email,
//         contactNumber: formData.contactNumber,
//         position: formData.position === 'Other' ? formData.specifyPosition : formData.position,
//         experience: formData.experience,
//         technicalSkills: formData.technicalSkills,
//         portfolioURL: formData.portfolioURL,
//         githubURL: formData.githubURL,
//         linkedinURL: formData.linkedinURL,
//         instagramURL: formData.instagramURL,
//         whyJoin: formData.whyJoin,
//         heardAbout: formData.heardAbout,
//         files: processedFiles
//       };

//       // Send data to Apps Script
//       await fetch(SHEET_URL, {
//         method: 'POST',
//         body: JSON.stringify(submitData),
//         mode: 'no-cors'
//       });

//       // Reset form
//       setFormData({
//         fullName: "",
//         email: "",
//         contactNumber: "",
//         position: "",
//         specifyPosition: "",
//         experience: "",
//         technicalSkills: "",
//         portfolioURL: "",
//         githubURL: "",
//         linkedinURL: "",
//         instagramURL: "",
//         whyJoin: "",
//         heardAbout: "",
//       });
//       setFiles([]);
//       setFileNames([]);
//       setSelectedPosition('');

//       setStatus({
//         submitting: false,
//         submitted: true,
//         error: false,
//         message: "Your application has been submitted successfully!"
//       });

//       // Show success alert
//       Swal.fire({
//         icon: 'success',
//         title: 'Application Submitted Successfully',
//         text: 'Thank you for your application. We will review it and get back to you soon.',
//       }).then((result) => {
//         if (result.isConfirmed) {
//           window.location.href = '/';
//         }
//       });

//     } catch (error) {
//       console.error("Submission error:", error);
//       setStatus({
//         submitting: false,
//         submitted: false,
//         error: true,
//         message: "There was an error submitting your application. Please try again."
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Enhanced Hero Section */}
//       <section className="relative py-24 overflow-hidden">
//         <div className="container mx-auto px-4 relative">
//           <div className="max-w-4xl mx-auto text-center text-black space-y-8">
//             <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight relative">
//               <span className="relative inline-block mt-12">
//                 Join Our <span className="text-blue-500"> Team</span>
//                 <div className="absolute -top-6 -right-6 w-12 h-12 text-blue-500 animate-spin-slow">
//                   <Circle className="w-full h-full" />
//                 </div>
//               </span>
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-600">
//               Be part of a dynamic team that's shaping the future of technology
//               and innovation. At NexHub, we value creativity, passion, and
//               dedication.
//             </p>
//           </div>
//         </div>

//         {/* Decorative shapes */}
//         <div className="absolute top-20 left-10 text-blue-500/20 animate-float">
//           <Triangle className="w-16 h-16" />
//         </div>
//         <div className="absolute bottom-20 right-10 text-blue-500/20 animate-float-delayed">
//           <Square className="w-16 h-16" />
//         </div>
//       </section>

//       {/* Enhanced Recruitment Process */}
//       <section className="py-2 md:py-20 bg-white relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white" />
//         <div className="container mx-auto px-4 relative">
//           <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 relative">
//             Our <span className="text-blue-500">Recruitment </span> Process
//             <div className="absolute -top-4 -right-4 w-8 h-8 text-blue-500/30 animate-ping">
//               <Circle className="w-full h-full" />
//             </div>
//           </h2>
//           <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//             {[
//               {
//                 icon: <FileText className="w-16 h-16 text-blue-500" />,
//                 title: "Application Review",
//                 description:
//                   "Submit your application and portfolio. Our team will review your skills and experience.",
//               },
//               {
//                 icon: <Users className="w-16 h-16 text-blue-500" />,
//                 title: "Team Interview",
//                 description:
//                   "Meet with our team to discuss your experience, showcase your skills, and learn about NexHub.",
//               },
//               {
//                 icon: <Check className="w-16 h-16 text-blue-500" />,
//                 title: "Final Selection",
//                 description:
//                   "Selected candidates will receive an offer to join our dynamic team.",
//               },
//             ].map((step, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 relative group"
//               >
//                 <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
//                 <div className="relative space-y-4">
//                   <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
//                     {step.icon}
//                   </div>
//                   <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
//                   <p className="text-gray-600">{step.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Application Form */}
//       <section className="py-20 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent" />
//         <div className="container mx-auto px-4 relative">
//           <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-10 relative">
//             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl" />
//             <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl" />

//             <h2 className="text-4xl font-bold text-center mb-12 relative">
//               Apply Now
//               <div className="absolute -top-2 -right-2 w-6 h-6 text-blue-500/30 animate-bounce">
//                 <Triangle className="w-full h-full" />
//               </div>
//             </h2>

//             {/* Status messages */}
//             {status.submitted && (
//               <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-700 rounded">
//                 <p className="font-medium">{status.message}</p>
//               </div>
//             )}

//             {status.error && (
//               <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
//                 <p className="font-medium">{status.message}</p>
//               </div>
//             )}

//             {/* Form content */}
//             <form className="space-y-6 relative" onSubmit={handleSubmit}>
//               <div className="grid md:grid-cols-2 gap-8">
//                 <div>
//                   <label className="block text-gray-700 mb-3 font-medium">
//                     Full Name *
//                   </label>
//                   <input
//                     type="text"
//                     required
//                     name="fullName"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     className="w-full px-5 py-3 border-2 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 mb-3 font-medium">
//                     Email Address *
//                   </label>
//                   <input
//                     type="email"
//                     required
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full px-5 py-3 border-2 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all"
//                   />
//                 </div>
//               </div>

//               <div className="grid md:grid-cols-2 gap-8">
//                 <div>
//                   <label className="block text-gray-700 mb-3 font-medium">
//                     Contact Number *
//                   </label>
//                   <input
//                     type="tel"
//                     required
//                     name="contactNumber"
//                     value={formData.contactNumber}
//                     onChange={handleChange}
//                     className="w-full px-5 py-3 border-2 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 mb-3 font-medium">
//                     Position *
//                   </label>
//                   <select
//                     required
//                     name="position"
//                     value={formData.position}
//                     onChange={handlePositionChange}
//                     className="w-full px-5 py-3 border-2 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all"
//                   >
//                     <option value="">Select Position</option>
//                     <option value="Video Editor">Video Editor</option>
//                     <option value="Web Developer">Web Developer</option>
//                     <option value="Photography">Photography</option>
//                     <option value="Graphic Designer">Graphic Designer</option>
//                     <option value="Other">Other</option>
//                   </select>
//                 </div>
//               </div>

//               {/* Conditional Other Position Field */}
//               {selectedPosition === "Other" && (
//                 <div>
//                   <label className="block text-gray-700 mb-3 font-medium">
//                     Please Specify Your Position *
//                   </label>
//                   <input
//                     type="text"
//                     required
//                     name="specifyPosition"
//                     value={formData.specifyPosition}
//                     onChange={handleChange}
//                     placeholder="Enter your position"
//                     className="w-full px-5 py-3 border-2 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all"
//                   />
//                 </div>
//               )}

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Experience*
//                 </label>
//                 <div className="grid md:grid-cols-2 gap-4">
//                   {[
//                     "College Events",
//                     "Professional",
//                     "Community",
//                     "NA",
//                     "Other",
//                   ].map((exp) => (
//                     <label key={exp} className="flex items-center space-x-3">
//                       <input
//                         type="radio"
//                         name="experience"
//                         value={exp}
//                         checked={formData.experience === exp}
//                         onChange={handleExperienceChange}
//                         className="w-4 h-4 text-blue-500 focus:ring-blue-500"
//                         required={formData.experience === ""}
//                       />
//                       <span>{exp}</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Share your projects here ( mp4 videos or images only )
//                 </label>
//                 <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
//                   <div className="space-y-1 text-center">
//                     <Upload className="mx-auto h-12 w-12 text-gray-400" />
//                     <div className="flex text-sm text-gray-600">
//                       <label
//                         htmlFor="file-upload"
//                         className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500"
//                       >
//                         <span>Upload files</span>
//                         <input
//                           id="file-upload"
//                           name="file-upload"
//                           type="file"
//                           className="sr-only"
//                           multiple
//                           onChange={handleFileChange}
//                           accept="video/mp4,image/*"
//                         />
//                       </label>
//                       <p className="pl-1">or drag and drop</p>
//                     </div>
//                     <p className="text-xs text-gray-500">
//                       MP4 or image files up to 100MB each
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Technical Skills (for Web Developers)*
//                 </label>
//                 <textarea
//                   name="technicalSkills"
//                   value={formData.technicalSkills}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                   rows="3"
//                   placeholder="List your technical skills and frameworks you're familiar with"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Portfolio
//                 </label>
//                 <input
//                   type="url"
//                   name="portfolioURL"
//                   value={formData.portfolioURL}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                   placeholder="https://www.yourdomain.com/"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Github
//                 </label>
//                 <input
//                   type="url"
//                   name="githubURL"
//                   value={formData.githubURL}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                   placeholder="https://www.github.com/username="
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   LinkedIn
//                 </label>
//                 <input
//                   type="url"
//                   name="linkedinURL"
//                   value={formData.linkedinURL}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                   placeholder="https://www.linkedin.com/username="
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Instagram
//                 </label>
//                 <input
//                   type="url"
//                   name="instagramURL"
//                   value={formData.instagramURL}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                   placeholder="https://www.instagram.com/username="
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Why do you want to join Nexhub?*
//                 </label>
//                 <textarea
//                   name="whyJoin"
//                   value={formData.whyJoin}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                   rows="4"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Have you ever heard about Nexhub?*
//                 </label>
//                 <textarea
//                   name="heardAbout"
//                   value={formData.heardAbout}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                   rows="3"
//                 />
//               </div>

//               <div className="flex justify-center mt-12">
//                 <button
//                   type="submit"
//                   disabled={status.submitting}
//                   className="px-12 py-4 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   {status.submitting ? "Submitting..." : "Submit Application"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default JoinOurTeam;


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

const JoinOurTeam = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    position: "",
    specifyPosition: "",
    experience: "",
    technicalSkills: "",
    portfolioURL: "",
    githubURL: "",
    linkedinURL: "",
    instagramURL: "",
    whyJoin: "",
    heardAbout: "",
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
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
    const value = e.target.value;
    setSelectedPosition(value);
    setFormData((prevData) => ({
      ...prevData,
      position: value,
      specifyPosition: value === "Other" ? prevData.specifyPosition : "",
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
      "https://script.google.com/macros/s/AKfycbw0qPlpXDrun6ZjBq5lIOZ7OnyNYuLAd-HiO4qrhVmS0qrf3rta0WG8NTjl2tJQu1E5Jw/exec";

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
        position: "",
        specifyPosition: "",
        experience: "",
        technicalSkills: "",
        portfolioURL: "",
        githubURL: "",
        linkedinURL: "",
        instagramURL: "",
        whyJoin: "",
        heardAbout: "",
      });
      setFiles([]);
      setFileNames([]);

      setStatus({
        submitting: false,
        submitted: true,
        error: false,
        message: "Your application has been submitted successfully!",
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({
          submitting: false,
          submitted: false,
          error: false,
          message: "",
        });
      }, 5000);
    } catch (error) {
      console.error("Submission error:", error);
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        message:
          "There was an error submitting your application. Please try again.",
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
                    value={formData.contactNumber}
                    onChange={handleChange}
                    className="w-full px-5 py-3 border-2 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-3 font-medium">
                    Position *
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
                  Experience*
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "College Events",
                    "Professional",
                    "Community",
                    "NA",
                    "Other",
                  ].map((exp) => (
                    <label key={exp} className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="experience"
                        value={exp}
                        checked={formData.experience === exp}
                        onChange={handleExperienceChange}
                        className="w-4 h-4 text-blue-500 focus:ring-blue-500"
                        required={formData.experience === ""}
                      />
                      <span>{exp}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Share your projects here ( mp4 videos only ) ( optional )*
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-blue-500 transition-colors">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-blue-500 hover:text-blue-600"
                      >
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
                    {fileNames.length > 0 && (
                      <div className="mt-2 text-sm text-left">
                        <p className="font-medium">Selected files:</p>
                        <ul className="list-disc pl-5">
                          {fileNames.map((name, i) => (
                            <li key={i}>{name}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div> */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Share your projects here ( mp4 videos or images only )
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500"
                      >
                        <span>Upload files</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          multiple
                          onChange={handleFileChange}
                          accept="video/mp4,image/*"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      MP4 or image files up to 100MB each
                    </p>
                  </div>
                </div>
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