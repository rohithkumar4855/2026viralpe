import React from "react";
import { supportOptions } from "../../data/HomeData";

const SupportBanner = () => {
  return (

    <div className="w-[95%] lg:w-full max-w-[1206px] min-h-auto md:min-h-[221px] mt-6 md:mt-[32px] mx-auto bg-[#901C27] rounded-[16px] md:rounded-[20px] shadow-md flex items-center justify-center overflow-hidden p-4 sm:p-6 md:p-8">

      {/* Wrapper - Forced to flex-row and divide-x for all devices */}
      <div className="w-full max-w-[900px] flex flex-row items-start sm:items-center justify-between md:divide-x divide-white/30 md:divide-white/50">

        {supportOptions.map((option) => {

          return (

            <div
              key={option.id}
              className="flex flex-col items-center text-center flex-1 w-full sm:px-2 md:px-0"
            >

              {/* Icon Box */}
              <div className="w-[36px] h-[36px] sm:w-[48px] sm:h-[48px] md:w-[57px] md:h-[57px] bg-white rounded-[10px] md:rounded-[12px] flex items-center justify-center text-[#901C27] shadow-sm">
                <img
                  src={option.icon}
                  alt={option.title}
                  className="w-[20px] h-[20px] sm:w-[28px] sm:h-[28px] md:w-[36px] md:h-[36px] object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-[11px] sm:text-[14px] md:text-[15px] tracking-wide mt-2 md:mt-[13px] leading-tight">
                {option.title}
              </h3>

              {/* Subtitle */}
              <p className="text-white/80 text-[9px] sm:text-[12px] md:text-[15px] whitespace-pre-line leading-tight md:leading-relaxed mb-1 sm:mb-2 md:mb-2.5 min-h-[20px] md:min-h-[25px]">
                {option.subtitle}
              </p>

              {/* Action Text */}
              {option.actionText && (
                <p className="text-white font-bold text-[9px] sm:text-[13px] md:text-[15px] tracking-wide break-all sm:break-normal">
                  {option.actionText}
                </p>
              )}

            </div>
          );
        })}

      </div>

    </div>
  );
};

export default SupportBanner;