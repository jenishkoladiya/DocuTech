import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
      {
        question: "Are DocuTech signatures legally binding?",
        answer: "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they’re encrypted and tracked, so it’s safer than losing a paper contract in your junk drawer!",
      },
      {
        question: "Are DocuTech signatures legally binding?",
        answer: "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they’re encrypted and tracked, so it’s safer than losing a paper contract in your junk drawer!",
      },
      {
        question: "Are DocuTech signatures legally binding?",
        answer: "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they’re encrypted and tracked, so it’s safer than losing a paper contract in your junk drawer!",
      },
      {
        question: "Are DocuTech signatures legally binding?",
        answer: "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they’re encrypted and tracked, so it’s safer than losing a paper contract in your junk drawer!",
    },
  ];

  const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
  };

  return (
      <div className="max-w-6xl mx-auto py-10" id="faq">
          <h2 className="text-center text-2xl font-bold mb-6">FAQs</h2>
          <div className="max-w-7xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                  <div key={index} className="rounded-2xl overflow-hidden text-opacity-40 shadow-lg">
                      <button
                          className={`flex justify-between items-center overflow-hidden w-full text-left px-5 py-6 pl-8 text-white bg-[#173A66] cursor-pointer transition ${
                              openIndex === index ? "rounded-t-lg shadow-pink-300" : "rounded-lg"
                          }`}
                          onClick={() => toggleFAQ(index)}
                      >
                          <span className="font-semibold">{faq.question}</span>
                          {openIndex === index ? <FiMinus size={20} /> : <FiPlus size={20} />}
                      </button>
                      {openIndex === index && (
                          <div className="bg-white text-gray-700 text-[20px] p-6 border border-pink-300 shadow-pink-300 rounded-b-lg ">
                              {faq.answer}
                          </div>
                      )}
                  </div>
              ))}
          </div>
      </div>
  );
};

export default FAQ;