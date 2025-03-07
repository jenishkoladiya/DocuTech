import { useState } from "react";

const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      id: 1,
      name: "FREE",
      price: 0,
      benefits: ["5 documents a month", "Activity timeline"],
      buttonText: "Select Plan",
      highlight: "No Credit Card required",
      bgColor: "bg-white text-gray-900",
    },
    {
      id: 2,
      name: "Premium",
      price: billingCycle === "monthly" ? 10 : 100,
      benefits: [
        "Unlimited documents",
        "Unlimited signees",
        "Activity timeline",
        "Certificate of completion",
      ],
      buttonText: "Select Plan",
      bgColor: "bg-[#173A66] text-white",
    },
    {
      id: 3,
      name: "Teams",
      price: billingCycle === "monthly" ? 8 : 80,
      benefits: [
        "Everything from Premium",
        "Team management",
        "Transferable contracts",
      ],
      extra: "Minimum total of USD 24/month",
      buttonText: "Select Plan",
      bgColor: "bg-[#173A66] text-white",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-center text-2xl font-bold mb-6">
        Pick your plan. We make this part easy too.
      </h2>

      {/* Toggle Monthly / Annual */}
      <div className="flex justify-center mb-10">
        <div className="flex bg-gray-200 rounded-full p-1">
          <button
            className={`px-6 py-2 text-sm font-medium rounded-full transition ${
              billingCycle === "monthly"
                ? "bg-[#173A66] text-white"
                : "text-gray-700"
            }`}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </button>
          <button
            className={`px-6 py-2 text-sm font-medium rounded-full transition ${
              billingCycle === "annually"
                ? "bg-[#173A66] text-white"
                : "text-gray-700"
            }`}
            onClick={() => setBillingCycle("annually")}
          >
            Annually
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative p-8 px-11 rounded-xl border border-black min-h-[500px] shadow-lg shadow-pink-300 flex flex-col ${plan.bgColor} `}
          >
            {/* Plan Title */}
            <h3 className="text-[25px] font-bold">{plan.name}</h3>

            {/* Price Section */}
            <div className="mt-2 flex">
              <span className="text-[20px] font-medium leading-none mr-1 mt-2">USD</span>
              <span className="text-4xl font-bold mr-1">{plan.price}</span>
              <span className="text-sm font-medium leading-none mt-2">
                {billingCycle === "monthly" ? "/Month" : "/Year"}
              </span>
            </div>

            {/* Extra Text (Teams Plan) */}
            {plan.extra && (
              <p className="text-sm font-medium mt-5">{plan.extra}</p>
            )}

            {/* Highlight (Free Plan) */}
            {plan.highlight && (
              <span className="text-[13px] bg-gray-200 text-gray-600 py-1 px-3 rounded mt-5 inline-block">
                {plan.highlight}
              </span>
            )}

            {/* Benefits List */}
            <ul className="mt-5 space-y-2 text-[20px]">
              {plan.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  • {benefit}
                </li>
              ))}
            </ul>

            {/* Monthly total line (Only for Teams) */}
            {plan.id === 3 && (
              <div className="flex justify-between mt-10 text-[20px]">
                <span>Monthly total</span>
                <span>USD 24</span>
              </div>
            )}

            {/* Select Plan Button (at bottom) */}
            <button
              className={`mt-auto w-full font-medium py-2 rounded-full shadow transition cursor-pointer ${
                plan.id === 1
                  ? "bg-[#173A66] text-white hover:bg-[#122b4d]"
                  : "bg-white text-[#173A66] hover:bg-gray-100"
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;










// function Pricing() {
//   const [billingCycle, setBillingCycle] = useState("monthly");
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-8">
//       {/* Title */}
//       <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
//         Pick your plan. We make this part easy too.
//       </h2>

//       {/* Toggle Switch */}
//       <div className="flex justify-center mb-8">
//                 <div className="flex bg-gray-200 rounded-full p-1">
//                     <button
//                         className={`px-6 py-2 text-sm font-medium rounded-full transition ${
//                             billingCycle === "monthly"
//                                 ? "bg-[#173A66] text-white"
//                                 : "text-gray-700"
//                         }`}
//                         onClick={() => setBillingCycle("monthly")}
//                     >
//                         Monthly
//                     </button>
//                     <button
//                         className={`px-6 py-2 text-sm font-medium rounded-full transition ${
//                             billingCycle === "annually"
//                                 ? "bg-[#173A66] text-white"
//                                 : "text-gray-700"
//                         }`}
//                         onClick={() => setBillingCycle("annually")}
//                     >
//                         Annually
//                     </button>
//                 </div>
//             </div>


//       {/* Pricing Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-5xl">
//         {/* Free Plan */}
//         <div className="border border-gray-300 shadow-lg p-6 rounded-lg min-h-[400px] flex flex-col justify-between">
//           <div>
//             <h3 className="text-xl font-bold">FREE</h3>
//             <p className="text-gray-600">
//               USD <span className="text-3xl font-bold">0</span> /Month
//             </p>
//             <span className="inline-block text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded mt-2">
//               No Credit Card required
//             </span>
//             <ul className="mt-4 text-gray-600">
//               <li>• 5 documents a month</li>
//               <li>• Activity timeline</li>
//             </ul>
//           </div>
//           <button className="bg-blue-900 text-white w-full py-2 rounded-full mt-6">
//             Select Plan
//           </button>
//         </div>

//         {/* Premium Plan */}
//         <div className="bg-blue-900 text-white shadow-lg p-6 rounded-lg min-h-[400px] flex flex-col justify-between">
//           <div>
//             <h3 className="text-xl font-bold">Premium</h3>
//             <p className="text-gray-300">
//               USD <span className="text-3xl font-bold">10</span> /Month
//             </p>
//             <ul className="mt-4">
//               <li>• Unlimited documents</li>
//               <li>• Unlimited signees</li>
//               <li>• Activity timeline</li>
//               <li>• Certificate of completion</li>
//             </ul>
//           </div>
//           <button className="bg-white text-blue-900 w-full py-2 rounded-full mt-6">
//             Select Plan
//           </button>
//         </div>

//         {/* Teams Plan */}
//         <div className="bg-blue-900 text-white shadow-lg p-6 rounded-lg min-h-[400px] flex flex-col justify-between">
//           <div>
//             <h3 className="text-xl font-bold">Teams</h3>
//             <p className="text-gray-300">
//               USD <span className="text-3xl font-bold">8</span> /Month per month
//             </p>
//             <p className="text-sm text-gray-300">
//               Minimum total of <span className="font-bold">USD 24/month</span>
//             </p>
//             <ul className="mt-4">
//               <li>• Everything from Premium</li>
//               <li>• Team management</li>
//               <li>• Transferable contracts</li>
//             </ul>
//           </div>
//           <p className="text-gray-300 text-sm text-right">Monthly total USD 24</p>
//           <button className="bg-white text-blue-900 w-full py-2 rounded-full mt-6">
//             Select Plan
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Pricing;