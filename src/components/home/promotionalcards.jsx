import React from 'react';
import cashback from "../../../public/images/cashbacklogo.png";
import gift from "../../../public/images/giftbox.svg";

const PromotionalCards = () => {
  return (
    <div className="w-full max-w-301.5 mt-8 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-0">

      {/* --- Left Card: Rewards --- */}
      <div className="relative overflow-hidden rounded-2xl bg-[linear-gradient(178.95deg,#901C27_-176.79%,#FFFFFF_78.79%)] p-6 sm:p-8 md:p-10 lg:p-12 border border-red-50 shadow-sm flex flex-col h-auto md:h-183.25 w-full md:min-w-148.25 min-h-[400px] md:min-h-0">

        {/* Text Content */}
        <div className="z-10 relative">
          <h2 className="font-outfit text-[26px] sm:text-[32px] md:text-[48px] lg:text-[42px] font-semibold text-[#222222] leading-[1.15] tracking-tight">
            Turn Every Payment <br className="hidden md:block" />
            into <span className="text-[#901C27]">Rewards</span>
          </h2>
          <p className="text-[#222222CC] text-[14px] sm:text-[16px] md:text-[24px] mt-2 sm:mt-4 ">
            Pay bills easily and earn cashback every time.
          </p>
        </div>


        <div className="flex-1 flex items-end justify-center mt-6 sm:mt-8 z-10 relative">
          <img
            src={cashback}
            alt="Wallet with Cashback"
            className="w-full max-h-[300px] sm:max-h-[350px] md:max-h-[733px] max-w-[593px] object-contain transition-transform duration-500"
          />
        </div>

      </div>

      {/* --- Right Card: Vouchers --- */}
      <div className="relative overflow-hidden rounded-2xl bg-[linear-gradient(178.95deg,#901C27_-176.79%,#FFFFFF_78.79%)] p-6 sm:p-8 md:p-10 lg:p-12 border border-red-50 shadow-sm flex flex-col h-auto md:h-183.25 w-full md:min-w-148.25 min-h-[480px] md:min-h-0">

        {/* Text Content */}
        <div className="z-10 relative">
          {/* Note: Updated inner span text sizes to be responsive, otherwise they force 48px on mobile */}
          <h2 className="font-outfit text-[26px] sm:text-[32px] md:text-[48px] lg:text-[42px] font-bold text-[#222222] leading-[1.15] tracking-tight">
            Buy <span className="text-[#901C27] text-[26px] sm:text-[32px] md:text-[48px]">Vouchers</span> & Get <br className="hidden md:block" />
            <span className="text-[#901C27] text-[26px] sm:text-[32px] md:text-[48px]">Savings</span>
          </h2>
        </div>

        {/* Added dynamic bottom padding for mobile to prevent text overlap with the absolute image */}
        <div className='relative z-10 flex flex-col flex-1 pb-[180px] sm:pb-[220px] md:pb-0'>
          <p className="text-[#222222CC] text-[14px] sm:text-[16px] md:text-[24px] mt-2 sm:mt-4">
            Pay bills easily and earn cashback every time.
          </p>

          {/* Tags / Pills */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-6 ">
            <span className="w-auto px-4 md:px-0 md:w-[149px] h-[36px] md:h-[43px] rounded-[22.53px] bg-white text-[#901C27] text-[12px] sm:text-[14px] font-semibold flex items-center justify-center whitespace-nowrap shadow-sm md:shadow-none">
              Easy Redemption
            </span>

            <span className="w-auto px-4 md:px-0 md:w-[149px] h-[36px] md:h-[43px] rounded-[22.53px] bg-white text-[#901C27] text-[12px] sm:text-[14px] font-semibold flex items-center justify-center whitespace-nowrap shadow-sm md:shadow-none">
              Smart Savings
            </span>

            <span className="w-auto px-4 md:px-0 md:w-[149px] h-[36px] md:h-[43px] rounded-[22.53px] bg-white text-[#901C27] text-[12px] sm:text-[14px] font-semibold flex items-center justify-center whitespace-nowrap shadow-sm md:shadow-none">
              Verified Offers
            </span>

            <span className="w-auto px-4 md:px-0 md:w-[149px] h-[36px] md:h-[43px] rounded-[22.53px] bg-white text-[#901C27] text-[12px] sm:text-[14px] font-semibold flex items-center justify-center whitespace-nowrap shadow-sm md:shadow-none">
              Multiple Categories
            </span>
          </div>

          <div className="absolute bottom-[-10px] left-0 right-0 flex justify-center pointer-events-none">
            <img
              src={gift}
              alt="Gift Box with Voucher"
              className="w-[85%] max-w-[250px] sm:max-w-[320px] md:max-w-[420px] object-contain transition-transform duration-500 drop-shadow-2xl pointer-events-auto"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default PromotionalCards;