import React from "react";
import Referandearn from "../../../public/images/refer-graphic.png";

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
      className="w-[95%] lg:w-full max-w-[1206px] mt-6 md:mt-[32px] mx-auto min-h-auto md:min-h-[452px] rounded-[20px] overflow-hidden flex flex-col md:flex-row items-center justify-between p-6 sm:p-8 md:p-12 relative shadow-sm"
      style={{
        background: "linear-gradient(356.22deg, #FFFFFF 34.73%, #FEC846 77.12%, #FF9500 106.83%)",
      }}
    >
      {/* Left Column */}
      <div className="flex flex-col z-10 w-full md:w-[55%] mb-10 md:mb-0 items-center md:items-start text-center md:text-left">
        
        {/* Heading */}
        <h2 className="text-[32px] sm:text-[40px] md:text-[46px] font-bold leading-[1.1] tracking-tight mb-2 sm:mb-3">
          <span className="text-[#901C27] text-[40px] sm:text-[46px] md:text-[52px] font-semibold">
            Refer
          </span>{" "}
          <span className="text-[#222222] font-semibold">
            & Earn
          </span>
        </h2>

        <p className="text-[14px] sm:text-[15px] md:text-[20px] text-[#222222CC] mb-6 md:mb-8 font-medium">
          Share ViralPe and start earning from your circle.
        </p>

        {/* Steps */}
        <div className="flex flex-col gap-5 sm:gap-6 text-left w-full max-w-[400px] md:max-w-none">
          {steps.map((step) => (
            <div key={step.id} className="flex items-start gap-3 sm:gap-4">
              
              {/* Number */}
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-[10px] sm:rounded-[12.5px] bg-[#901C27] text-white text-[15px] sm:text-[18.19px] flex items-center justify-center font-semibold flex-shrink-0 shadow-sm mt-0.5">
                {step.id}
              </div>

              {/* Text */}
              <div>
                <h3 className="font-bold text-[#222222] text-[16px] sm:text-[18.19px] leading-snug">
                  {step.title}
                </h3>
                <p className="text-[12px] sm:text-[13px] text-gray-800 mt-1">
                  {step.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Right Card */}
      <div className="z-10 w-full md:w-[45%] flex justify-center md:justify-end">
        
        <div className="bg-white/90 md:bg-[linear-gradient(356.22deg,#FFFFFF_34.73%,#FEC846_77.12%,#FF9500_106.83%)] mt-2 md:mt-[32px] rounded-[16px] p-5 sm:p-6 w-full max-w-[420px] shadow-xl flex flex-col items-center border-glassmorphism border border-gray-200">
          
          {/* Image Area */}
          <div className="w-full bg-transparent rounded-[16px] mb-4 sm:mb-6 flex justify-center items-center p-2 sm:p-4">
            <img
              src={Referandearn}
              alt="Refer and Earn App"
              className="w-full max-w-[160px] sm:max-w-[220px] bg-transparent h-auto object-contain"
            />
          </div>

          {/* Form Title */}
          <h3 className="font-bold text-[18px] md:text-[20px] text-[#222222] mb-1 text-center">
            Your Referral Code
          </h3>

          <p className="text-[14px] md:text-[16px] text-[#222222CC] mb-4 md:mb-5 text-center px-2">
            Enter a code or share yours with your network
          </p>

          {/* Input */}
          <div className="w-full max-h-[50px] md:max-h-[57px] max-w-full sm:max-w-[337px] flex items-center bg-white border border-gray-200 rounded-[12px] p-1 sm:p-1.5 shadow-sm focus-within:border-gray-400 transition-colors">
            
            <input
              type="text"
              placeholder="Referral Code"
              className="flex-1 px-2 sm:px-3 bg-transparent outline-none text-[13px] md:text-[14px] text-gray-700 placeholder-gray-400 min-w-0"
            />

            <button className="bg-[#901C27] transition-colors text-white text-[14px] md:text-[16px] font-semibold py-2 md:py-2.5 px-4 md:px-6 rounded-[8px] whitespace-nowrap shadow-sm shrink-0">
              Refer
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferAndEarn;