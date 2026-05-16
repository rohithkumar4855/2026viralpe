import React from 'react';

const PromotionalCards = () => {
  return (
    // Main Container - Max width matches Figma (1206px)
    <div className="w-full max-w-[1206px] mt-[32px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-0">
      
      {/* --- Left Card: Rewards --- */}
      <div className="relative overflow-hidden rounded-[16px] bg-gradient-to-b from-[#FFFDFD] to-[#FCE8E9] p-8 md:p-10 lg:p-12 border border-red-50 shadow-sm flex flex-col h-full min-h-[500px]">
        
        {/* Text Content */}
        <div className="z-10 relative">
          <h2 className="text-[32px] md:text-[38px] lg:text-[42px] font-bold text-[#222222] leading-[1.15] tracking-tight">
            Turn Every Payment <br className="hidden md:block" />
            into <span className="text-[#901C27]">Rewards</span>
          </h2>
          <p className="text-gray-600 text-[15px] md:text-[16px] mt-4 max-w-[280px]">
            Pay bills easily and earn cashback every time.
          </p>
        </div>

        {/* 3D Image Container */}
        {/* Using flex-1 to push the image to the bottom naturally */}
        <div className="flex-1 flex items-end justify-center mt-8 z-10 relative">
          {/* Replace src with your exported 3D wallet image */}
          <img 
            src="/images/wallet-rewards.png" 
            alt="Wallet with Cashback" 
            className="w-full max-w-[320px] object-contain hover:scale-105 transition-transform duration-500"
          />
        </div>
        
      </div>

      {/* --- Right Card: Vouchers --- */}
      <div className="relative overflow-hidden rounded-[16px] bg-gradient-to-b from-[#FFFDFD] to-[#FCE8E9] p-8 md:p-10 lg:p-12 border border-red-50 shadow-sm flex flex-col h-full min-h-[500px]">
        
        {/* Text Content */}
        <div className="z-10 relative">
          <h2 className="text-[32px] md:text-[38px] lg:text-[42px] font-bold text-[#222222] leading-[1.15] tracking-tight">
            Buy <span className="text-[#901C27]">Vouchers</span> & Get <br className="hidden md:block" />
            <span className="text-[#901C27]">Savings</span>
          </h2>
          <p className="text-gray-600 text-[15px] md:text-[16px] mt-4 max-w-[280px]">
            Pay bills easily and earn cashback every time.
          </p>

          {/* Tags / Pills */}
          <div className="flex flex-wrap gap-2 mt-6 max-w-[350px]">
            <span className="px-3 py-1.5 bg-white text-[#901C27] text-[11px] font-bold rounded-full shadow-sm border border-red-50 whitespace-nowrap">
              Easy Redemption
            </span>
            <span className="px-3 py-1.5 bg-white text-[#901C27] text-[11px] font-bold rounded-full shadow-sm border border-red-50 whitespace-nowrap">
              Smart Savings
            </span>
            <span className="px-3 py-1.5 bg-white text-[#901C27] text-[11px] font-bold rounded-full shadow-sm border border-red-50 whitespace-nowrap">
              Verified Offers
            </span>
            <span className="px-3 py-1.5 bg-white text-[#901C27] text-[11px] font-bold rounded-full shadow-sm border border-red-50 whitespace-nowrap">
              Multiple Categories
            </span>
          </div>
        </div>

        {/* 3D Image Container */}
        <div className="flex-1 flex items-end justify-center mt-8 z-10 relative">
          {/* Replace src with your exported 3D gift box image */}
          <img 
            src="/images/gift-voucher.png" 
            alt="Gift Box with Voucher" 
            className="w-full max-w-[320px] object-contain hover:scale-105 transition-transform duration-500"
          />
        </div>

      </div>

    </div>
  );
};

export default PromotionalCards;