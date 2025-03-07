import { useState } from "react";

export default function Docutech() {
  const [activeTab, setActiveTab] = useState("Trusted by Thousands");

  const tabs = [
    "Trusted by Thousands",
    "SOC-2 Certified",
    "GDPR & HIPAA Compliant",
    "End-to-end encryption",
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8" id="why-choose-us">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl z-30 font-bold text-center mb-6">
        Why Choose Docutech
      </h2>

      {/* Content Wrapper */}
      <div className="flex w-full max-w-5xl">
        {/* Left Tabs */}
        <div className="flex flex-col gap-4 z-30 w-1/3" id="features">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`p-3 w-full text-left cursor-pointer rounded-lg border ${
                activeTab === tab
                  ? "bg-white font-bold text-[#254A76] border-blue-900 shadow-lg shadow-pink-300 relative before:absolute before:-inset-1 before:rounded-lg before:-z-10"
                  : "bg-white border-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Right Content Box */}
        <div className="w-full md:w-[737px] h-[650px] p-8 z-30 bg-white border-gray-900 border-1 rounded-xl ml-6 min-h-[300px]">
          {/* Content Display (You can add descriptions here) */}
          <p className="text-gray-600">
            {activeTab === "Trusted by Thousands"
              ? "Our platform is trusted by thousands of users worldwide."
              : activeTab === "SOC-2 Certified"
              ? "We are SOC-2 certified, ensuring high security standards."
              : activeTab === "GDPR & HIPAA Compliant"
              ? "We comply with GDPR & HIPAA regulations for data protection."
              : "End-to-end encryption keeps your data safe and private."}
          </p>
        </div>
      </div>
    </div>
  );
}
