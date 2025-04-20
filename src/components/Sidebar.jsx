import React, { useState } from "react";

const steps = [
  { label: "Basic Information" },
  { label: "Education Qualification" },
  { label: "Physical Lifestyle" },
  { label: "Family Details" },
  { label: "Upload Photo" },
];

export default function ProfileSetup() {
  const [currentStep, setCurrentStep] = useState(0);

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
    <div className="min-h-screen bg-gray-100 p-4 mt-20">
      <div className="mx-auto max-w-6xl bg-white rounded shadow flex flex-col md:flex-row overflow-hidden">
        <aside className="w-full md:w-1/3 border-r bg-gray-50">
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`w-full text-left px-4 py-3 border-b transition-colors duration-300 font-semibold text-sm md:text-base ${
                currentStep === index
                  ? "bg-rose-500 text-white"
                  : "hover:bg-gray-200 text-gray-700"
              }`}
            >
              {step.label}
            </button>
          ))}
        </aside>

        <main className="w-full md:w-2/3 p-6">
          {renderStepContent(currentStep)}
        </main>
      </div>
    </div>
  );
}

function BasicInformationForm() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-rose-600">Basic Information</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput label="Full Name" placeholder="Enter your name" />
        <FormInput label="Date of Birth" type="date" />
        <FormInput label="WhatsApp Mobile No" type="tel" placeholder="Enter WhatsApp number" />
        <FormInput label="Country" placeholder="Enter country" />
        <FormInput label="State" placeholder="Enter state" />
        <FormInput label="City" placeholder="Enter city" />
        <FormInput label="Place of Birth" placeholder="Enter place of birth" />
        <FormSelect label="Marital Status" options={["Single", "Married", "Divorced", "Widowed"]} />
        <FormInput label="Reason of Separation" placeholder="Enter reason of separation" />
        <FormInput label="Number of Children & Their Ages" placeholder="e.g. 2 children: 5, 7" />
        <FormInput label="Duration of Separation" placeholder="e.g. 2 years" />
        <SubmitButton />
      </form>
    </section>
  );
}

function EducationQualificationForm() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-rose-600">Education Qualification</h2>
      <form className="space-y-4">
        <FormSelect label="Highest Qualification" options={["High School", "Bachelor's", "Master's"]} />
        <FormTextarea label="About Myself" placeholder="Tell us something about yourself" />
        <FormInput label="Occupation" placeholder="e.g. Software Engineer" />
        <FormInput label="Annual Income" placeholder="e.g. $60,000" />
        <FormSelect label="Employed In" options={["Private Sector", "Government", "Self Employed", "Not Working"]} />
        <FormTextarea label="House Address" placeholder="Enter your residential address" />
        <FormInput label="Office Location" placeholder="City or address of office" />
        <SubmitButton />
      </form>
    </section>
  );
}

function PhysicalLifestyleForm() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-rose-600">Physical Lifestyle</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormSelect label="Height" options={["5 ft", "5.5 ft", "6 ft"]} />
        <FormSelect label="Weight" options={["50 kg", "60 kg", "70 kg"]} />
        <FormSelect label="Blood Group" options={["A+", "O+", "B+", "AB+"]} />
        <FormSelect label="Body Type" options={["Slim", "Average", "Athletic", "Heavy"]} />
        <SubmitButton />
      </form>
    </section>
  );
}

function FamilyDetailsForm() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-rose-600">Family Details</h2>
      <form className="space-y-4">
        <FormInput label="Father's Name" />
        <FormInput label="Mother's Name" />
        <SubmitButton />
      </form>
    </section>
  );
}

function UploadPhotoForm() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-rose-600">Upload Photo</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Profile Photo</label>
          <input type="file" className="border border-gray-300 rounded w-full" />
        </div>
        <div className="flex items-center space-x-4">
          <span className="font-medium">Display profile on website?</span>
          <label className="inline-flex items-center">
            <input type="radio" name="display" value="Yes" className="mr-2" /> Yes
          </label>
          <label className="inline-flex items-center">
            <input type="radio" name="display" value="No" className="mr-2" /> No
          </label>
        </div>
        <SubmitButton text="Submit" />
      </form>
    </section>
  );
}

// === Shared Components ===
function FormInput({ label, type = "text", placeholder = "" }) {
  return (
    <div>
      <label className="block mb-1 font-medium">{label}</label>
      <input type={type} placeholder={placeholder} className="border border-gray-300 rounded w-full p-2" />
    </div>
  );
}

function FormSelect({ label, options }) {
  return (
    <div>
      <label className="block mb-1 font-medium">{label}</label>
      <select className="border border-gray-300 rounded w-full p-2">
        <option value="">Select</option>
        {options.map((opt, idx) => (
          <option key={idx} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

function FormTextarea({ label, placeholder = "" }) {
  return (
    <div>
      <label className="block mb-1 font-medium">{label}</label>
      <textarea className="border border-gray-300 rounded w-full p-2" rows="3" placeholder={placeholder}></textarea>
    </div>
  );
}

function SubmitButton({ text = "Save & Continue" }) {
  return (
    <button className="px-4 py-2 bg-rose-500 text-white rounded hover:bg-rose-400 transition mt-4">
      {text}
    </button>
  );
}
