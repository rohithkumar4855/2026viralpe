import React from "react";
import { BadgeCheck, Lock, Zap } from "lucide-react";
import Homescreen from "../../../public/images/homescreen.png";
// import Graph from "../../../public/images/graphic.png";
import Homeframe from "../../../public/images/homeframe.svg";

const WhyChooseViralPe = () => {
  return (
    <div className="w-[95%] lg:w-full max-w-[1206px] mx-auto mt-6 md:mt-[32px] min-h-auto lg:min-h-[747px] bg-white rounded-[20px] shadow-sm flex flex-col lg:flex-row relative overflow-hidden lg:overflow-visible">

      {/* Left Column */}
      <div className="w-full lg:max-w-[558px] p-6 sm:p-8 lg:p-5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left z-10 ml-0 lg:ml-[54px] mt-4 lg:mt-0">

        <h2 className="text-[28px] sm:text-[40px] md:text-[52px] font-semibold text-[#222222] tracking-tight mb-4 md:mb-6 leading-tight">
          Why Choose <span className="text-[#901C27]">ViralPe</span>?
        </h2>

        <p className="text-[14px] sm:text-[18px] md:text-[20px] lg:text-[24px] text-[#222222CC] mb-6 md:mb-8 tracking-tight leading-snug">
          ViralPe is a smart fintech platform that transforms everyday payments into rewarding experiences. Users can pay bills, recharge services, and make transactions seamlessly while earning cashback or reward points on each payment.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-8 md:mb-10">

          <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FCF0F1] text-[#901C27] rounded-full text-[11px] sm:text-[13px] font-bold border border-red-50">
            <BadgeCheck size={16} strokeWidth={2.5} className="w-4 h-4 sm:w-auto sm:h-auto" />
            Easy Redemption
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FCF0F1] text-[#901C27] rounded-full text-[11px] sm:text-[13px] font-bold border border-red-50">
            <Lock size={16} strokeWidth={2.5} className="w-4 h-4 sm:w-auto sm:h-auto" />
            Secure Payments
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FCF0F1] text-[#901C27] rounded-full text-[11px] sm:text-[13px] font-bold border border-red-50">
            <Zap size={16} strokeWidth={2.5} className="w-4 h-4 sm:w-auto sm:h-auto" />
            Instant Cashback
          </div>

        </div>

        {/* Button */}
        <button className="bg-[#901C27] w-full max-w-[164px] text-white font-bold text-[16px] md:text-[20px] py-2 md:py-3 rounded-[8px] shadow-sm hover:bg-[#7a1620] transition-colors">
          Start Recharge
        </button>

      </div>

      {/* Right Column */}
      <div className="w-full lg:w-1/2 relative flex items-center justify-center min-h-[350px] sm:min-h-[450px] lg:min-h-full bg-white/50 pt-8 lg:pt-0 pb-8 lg:pb-0 mt-4 lg:mt-0">

        {/* Background Graphic */}
        {/* <div
          className="bg-gradient-to-b from-[#901C27] to-[#FFD5D9] absolute opacity-60 bottom-65 left-0 w-full h-[40%] bg-contain bg-bottom bg-no-repeat opacity-40 z-0 "
          style={{
            backgroundImage: `url(${Graph})`,
          }}
        /> */}

        {/* Phone Mockup */}
        <img
          src={Homeframe}  
          alt="ViralPe App Mockup"
          className="w-[65%] max-w-[280px] sm:max-w-[350px] lg:max-w-none lg:w-[519px] h-auto lg:h-[639px] object-contain relative z-10 drop-shadow-2xl"
        />

        {/* Tooltip 1 */}
        
      </div>
    </div>
  );
};

export default WhyChooseViralPe;