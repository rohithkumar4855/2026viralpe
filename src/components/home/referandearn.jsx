import React from "react";

const ReferAndEarn = () => {

  const steps = [
    {
      id: 1,
      title: "Share Your Code",
      description: "Send your referral code to friends and family.",
    },
    {
      id: 2,
      title: "They Sign Up",
      description: "Your referral joins ViralPe using your code.",
    },
    {
      id: 3,
      title: "You Earn Rewards",
      description: "Get cashback credited straight to your wallet.",
    },
  ];

  return (

    <div
      className="w-full max-w-[1206px] mt-[32px] mx-auto min-h-[452px] rounded-[20px] overflow-hidden flex flex-col md:flex-row items-center justify-between p-8 md:p-12 relative shadow-sm"
      style={{
        background:
          "radial-gradient(circle at 30% 50%, #FF9500 0%, #FEC846 50%, #FFF4DE 100%)",
      }}
    >

      {/* Left Column */}
      <div className="flex flex-col z-10 w-full md:w-[55%] mb-10 md:mb-0">

        {/* Heading */}
        <h2 className="text-[40px] md:text-[46px] font-bold leading-[1.1] tracking-tight mb-3">

          <span className="text-[#901C27]">
            Refer
          </span>{" "}

          <span className="text-[#222222]">
            & Earn
          </span>

        </h2>

        <p className="text-[15px] md:text-[16px] text-gray-800 mb-8 font-medium">
          Share ViralPe and start earning from your circle.
        </p>

        {/* Steps */}
        <div className="flex flex-col gap-6">

          {steps.map((step) => (
            <div
              key={step.id}
              className="flex items-start gap-4"
            >

              {/* Number */}
              <div className="w-8 h-8 rounded-full bg-[#901C27] text-white flex items-center justify-center font-bold text-[14px] flex-shrink-0 shadow-sm mt-0.5">
                {step.id}
              </div>

              {/* Text */}
              <div>

                <h3 className="font-bold text-[#222222] text-[16px] leading-snug">
                  {step.title}
                </h3>

                <p className="text-[13px] text-gray-800 mt-1">
                  {step.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* Right Card */}
      <div className="z-10 w-full md:w-[45%] flex justify-end">

        <div className="bg-white mt-[32px] rounded-[24px] p-6 w-full max-w-[420px] shadow-xl flex flex-col items-center">

          {/* Image Area */}
          <div className="w-full bg-[#FFF8EB] rounded-[16px] mb-6 flex justify-center items-center p-4">

            <img
              src="/images/refer-graphic.png"
              alt="Refer and Earn App"
              className="w-full max-w-[220px] h-auto object-contain"
            />

          </div>

          {/* Form Title */}
          <h3 className="font-bold text-[18px] text-[#222222] mb-1">
            Your Referral Code
          </h3>

          <p className="text-[13px] text-gray-500 mb-5 text-center">
            Enter a code or share yours with your network
          </p>

          {/* Input */}
          <div className="w-full flex items-center bg-white border border-gray-200 rounded-[12px] p-1.5 shadow-sm focus-within:border-gray-400 transition-colors">

            <input
              type="text"
              placeholder="Referral Code"
              className="flex-1 px-3 bg-transparent outline-none text-[14px] text-gray-700 placeholder-gray-400"
            />

            <button className="bg-[#901C27] hover:bg-[#7a1620] transition-colors text-white text-[14px] font-semibold py-2.5 px-6 rounded-[8px] whitespace-nowrap shadow-sm">
              Refer
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ReferAndEarn;