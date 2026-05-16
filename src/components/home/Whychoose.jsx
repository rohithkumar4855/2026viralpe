import React from "react";
import { BadgeCheck, Lock, Zap } from "lucide-react";

const WhyChooseViralPe = () => {
  return (
    <div className="w-full max-w-[1206px] mx-auto mt-[32px] min-h-[747px] bg-white rounded-[20px] shadow-sm flex flex-col lg:flex-row relative overflow-hidden">

      {/* Left Column */}
      <div className="w-full lg:w-1/2 p-8 md:p-12 lg:pl-[116px] flex flex-col justify-center z-10">

        <h2 className="text-[40px] md:text-[48px] font-bold text-[#222222] leading-[1.2] tracking-tight mb-6">
          Why Choose <span className="text-[#901C27]">ViralPe</span>?
        </h2>

        <p className="text-[16px] text-gray-600 leading-[1.6] mb-8 max-w-[480px]">
          ViralPe is a smart fintech platform that transforms everyday payments into rewarding experiences. Users can pay bills, recharge services, and make transactions seamlessly while earning cashback or reward points on each payment.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap gap-3 mb-10">

          <div className="flex items-center gap-2 px-4 py-2 bg-[#FCF0F1] text-[#901C27] rounded-full text-[13px] font-bold border border-red-50">
            <BadgeCheck size={16} strokeWidth={2.5} />
            Easy Redemption
          </div>

          <div className="flex items-center gap-2 px-4 py-2 bg-[#FCF0F1] text-[#901C27] rounded-full text-[13px] font-bold border border-red-50">
            <Lock size={16} strokeWidth={2.5} />
            Secure Payments
          </div>

          <div className="flex items-center gap-2 px-4 py-2 bg-[#FCF0F1] text-[#901C27] rounded-full text-[13px] font-bold border border-red-50">
            <Zap size={16} strokeWidth={2.5} />
            Instant Cashback
          </div>

        </div>

        {/* Button */}
        <button className="bg-[#901C27] hover:bg-[#7a1620] text-white font-bold text-[15px] py-3.5 px-8 rounded-[8px] transition-colors shadow-sm">
          Start Recharge
        </button>

      </div>

      {/* Right Column */}
      <div className="w-full lg:w-1/2 relative flex items-center justify-center min-h-[500px] lg:min-h-full bg-white/50">

        {/* Background Graphic */}
        <div
          className="absolute bottom-0 left-0 w-full h-[40%] bg-contain bg-bottom bg-no-repeat opacity-40 z-0"
          style={{
            backgroundImage: "url('/images/pink-city-silhouette.png')",
          }}
        />

        {/* Phone Mockup */}
        <img
          src="/images/viralpe-app-mockup.png"
          alt="ViralPe App Mockup"
          className="w-[280px] md:w-[320px] h-auto object-contain relative z-10 drop-shadow-2xl"
        />

        {/* Tooltip 1 */}
        <div className="absolute top-[15%] lg:top-[20%] left-[5%] lg:left-[10%] bg-white rounded-[12px] px-5 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.08)] z-20 border border-gray-100">
          <p className="text-[#222222] font-semibold text-[13px] md:text-[14px]">
            Pay Bills in Seconds
          </p>
        </div>

        {/* Tooltip 2 */}
        <div className="absolute top-[40%] lg:top-[45%] right-[5%] lg:-right-[5%] bg-white rounded-[12px] p-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)] z-20 max-w-[180px] md:max-w-[200px] border border-gray-100">
          <p className="text-[#222222] font-semibold text-[13px] md:text-[14px] leading-snug">
            Set up automatic payments for peace of mind
          </p>
        </div>

        {/* Tooltip 3 */}
        <div className="absolute bottom-[20%] lg:bottom-[15%] left-[2%] lg:left-0 bg-white rounded-[12px] px-5 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.08)] z-20 border border-gray-100">
          <p className="text-[#222222] font-semibold text-[13px] md:text-[14px]">
            Track your spending in real-time
          </p>
        </div>

      </div>
    </div>
  );
};

export default WhyChooseViralPe;