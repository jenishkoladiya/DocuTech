import { useState } from "react";

const Pricing = () => {
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
    <div className="max-w-6xl mx-auto py-12 px-4" id="pricing">
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

export default Pricing;

