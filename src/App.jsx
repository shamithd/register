import { useState } from 'react';
import React from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    age: '',
    fatherName: '',
    motherName: '',
    city: '',
    state: '',
    country: '',
    college: '',
    semester: '',
    skills: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-100 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border-2 border-teal-300">
        <div className="bg-gradient-to-r from-teal-500 to-cyan-600 py-6 px-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-4 left-4 w-12 h-12 rounded-full border-4 border-white"></div>
            <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full border-4 border-white"></div>
          </div>
          <h1 className="text-3xl font-bold text-white text-center">Student Registration</h1>
          <p className="text-teal-100 text-center mt-2 font-medium">Complete your profile details</p>
        </div>
        
        <form onSubmit={handleSubmit} className="py-8 px-8 bg-gradient-to-b from-white to-teal-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div className="col-span-2">
              <h2 className="text-xl font-medium text-teal-800 mb-4 border-b-2 border-teal-200 pb-2 flex items-center">
                <span className="bg-teal-500 text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2 text-sm">1</span>
                Personal Information
              </h2>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-teal-700">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border-2 border-teal-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 bg-teal-50"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-teal-700">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border-2 border-teal-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 bg-teal-50"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-teal-700">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                min="1"
                className="w-full px-3 py-2 border-2 border-teal-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 bg-teal-50"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-teal-700">Skills</label>
              <input
                type="text"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="e.g. Programming, Design, Writing"
                className="w-full px-3 py-2 border-2 border-teal-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 bg-teal-50"
              />
            </div>
            
            {/* Family Information */}
            <div className="col-span-2 mt-6">
              <h2 className="text-xl font-medium text-teal-800 mb-4 border-b-2 border-teal-200 pb-2 flex items-center">
                <span className="bg-teal-500 text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2 text-sm">2</span>
                Family Information
              </h2>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-teal-700">Father's Name</label>
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border-2 border-teal-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 bg-teal-50"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-teal-700">Mother's Name</label>
              <input
                type="text"
                name="motherName"
                value={formData.motherName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border-2 border-teal-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 bg-teal-50"
              />
            </div>
            
            {/* Location Information */}
            <div className="col-span-2 mt-6">
              <h2 className="text-xl font-medium text-teal-800 mb-4 border-b-2 border-teal-200 pb-2 flex items-center">
                <span className="bg-teal-500 text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2 text-sm">3</span>
                Location Information
              </h2>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-teal-700">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border-2 border-teal-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 bg-teal-50"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-teal-700">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border-2 border-teal-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 bg-teal-50"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-teal-700">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border-2 border-teal-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 bg-teal-50"
              />
            </div>
            
            {/* Education Information */}
            <div className="col-span-2 mt-6">
              <h2 className="text-xl font-medium text-teal-800 mb-4 border-b-2 border-teal-200 pb-2 flex items-center">
                <span className="bg-teal-500 text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2 text-sm">4</span>
                Education Information
              </h2>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-teal-700">College/University</label>
              <input
                type="text"
                name="college"
                value={formData.college}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border-2 border-teal-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 bg-teal-50"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-teal-700">Current Semester</label>
              <input
                type="text"
                name="semester"
                value={formData.semester}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border-2 border-teal-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 bg-teal-50"
              />
            </div>
            
            {/* Submit Button */}
            <div className="col-span-2 mt-8">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-3 px-4 rounded-lg hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-300 font-bold text-lg shadow-md"
              >
                Complete Registration
              </button>
            </div>
          </div>
        </form>
      </div>
      
      <div className="text-center mt-6 text-teal-800 text-sm font-medium">
        <p>Student Registration Portal</p>
        <p className="mt-1">© {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </div>
  );
}

export default App;
