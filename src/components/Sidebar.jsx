import React, { useState } from "react";

// STEP TITLES
const steps = [
  { label: "Basic Information" },
  { label: "Education Qualification" },
  { label: "Physical Lifestyle" },
  { label: "Family Details" },
  { label: "Upload Photo" },
];

// MAIN COMPONENT
export default function ProfileSetup() {
  const [currentStep, setCurrentStep] = useState(0);

  // Decide which form to render based on the active step
  const renderStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <BasicInformationForm />;
      case 1:
        return <EducationQualificationForm />;
      case 2:
        return <PhysicalLifestyleForm />;
      case 3:
        return <FamilyDetailsForm />;
      case 4:
        return <UploadPhotoForm />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Container for the side menu + form content */}
      <div className="mx-auto max-w-5xl bg-white rounded shadow flex">
        {/* Sidebar for steps */}
        <div className="w-1/3 border-r">
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`w-full text-left px-4 py-3 
                border-b 
                ${
                  currentStep === index
                    ? "bg-green-700 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                } 
                transition-colors
              `}
            >
              {step.label}
            </button>
          ))}
        </div>

        {/* Main content area */}
        <div className="w-2/3 p-6">
          {renderStepContent(currentStep)}
        </div>
      </div>
    </div>
  );
}

// ========== STEP FORMS (placeholders) ==========

// STEP 1: Basic Information
function BasicInformationForm() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Basic Information</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input
            type="text"
            className="border border-gray-300 rounded w-full p-2"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Date of Birth</label>
          <input
            type="date"
            className="border border-gray-300 rounded w-full p-2"
          />
        </div>
        {/* Add other fields as needed */}
        <button
          type="button"
          className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-900"
        >
          Save & Continue
        </button>
      </form>
    </div>
  );
}

// STEP 2: Education Qualification
function EducationQualificationForm() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Education Qualification</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Highest Qualification</label>
          <select className="border border-gray-300 rounded w-full p-2">
            <option value="">Select qualification</option>
            <option value="HighSchool">High School</option>
            <option value="Bachelors">Bachelor's</option>
            <option value="Masters">Master's</option>
            {/* etc. */}
          </select>
        </div>
        {/* Add other fields as needed */}
        <button
          type="button"
          className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-900"
        >
          Save & Continue
        </button>
      </form>
    </div>
  );
}

// STEP 3: Physical Lifestyle
function PhysicalLifestyleForm() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Physical Lifestyle</h2>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Height</label>
            <select className="border border-gray-300 rounded w-full p-2">
              <option value="">Select</option>
              <option value="5ft">5 ft</option>
              <option value="5.5ft">5.5 ft</option>
              {/* etc. */}
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium">Weight</label>
            <select className="border border-gray-300 rounded w-full p-2">
              <option value="">Select</option>
              <option value="50kg">50 kg</option>
              <option value="60kg">60 kg</option>
              {/* etc. */}
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium">Blood Group</label>
            <select className="border border-gray-300 rounded w-full p-2">
              <option value="">Select</option>
              <option value="A+">A+</option>
              <option value="O+">O+</option>
              {/* etc. */}
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium">Body Type</label>
            <select className="border border-gray-300 rounded w-full p-2">
              <option value="">Select</option>
              <option value="Slim">Slim</option>
              <option value="Average">Average</option>
              <option value="Athletic">Athletic</option>
              <option value="Heavy">Heavy</option>
            </select>
          </div>
        </div>
        {/* Add other fields as needed */}
        <button
          type="button"
          className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-900"
        >
          Save & Continue
        </button>
      </form>
    </div>
  );
}

// STEP 4: Family Details
function FamilyDetailsForm() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Family Details</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Father's Name</label>
          <input
            type="text"
            className="border border-gray-300 rounded w-full p-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Mother's Name</label>
          <input
            type="text"
            className="border border-gray-300 rounded w-full p-2"
          />
        </div>
        {/* Add other fields as needed */}
        <button
          type="button"
          className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-900"
        >
          Save & Continue
        </button>
      </form>
    </div>
  );
}

// STEP 5: Upload Photo
function UploadPhotoForm() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Upload Photo</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Profile Photo</label>
          <input type="file" className="border border-gray-300 rounded w-full" />
        </div>
        <div className="flex items-center space-x-2">
          <label className="font-medium">Profile Display on Website?</label>
          <div className="flex items-center space-x-1">
            <input type="radio" name="display" value="Yes" /> <span>Yes</span>
            <input type="radio" name="display" value="No" /> <span>No</span>
          </div>
        </div>
        {/* Add other fields as needed */}
        <button
          type="button"
          className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-900"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
