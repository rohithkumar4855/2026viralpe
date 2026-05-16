import React from "react";
import {
  Headset,
  MessageSquareText,
  Mail,
} from "lucide-react";

const SupportBanner = () => {

  const supportOptions = [
    {
      id: 1,
      icon: Headset,
      title: "Need Help?",
      subtitle: "We're here 24/7 for you",
      actionText: "+91 90000 00000",
    },
    {
      id: 2,
      icon: MessageSquareText,
      title: "Live Chat",
      subtitle: "Chat With Our Support\nTeam",
      actionText: "",
    },
    {
      id: 3,
      icon: Mail,
      title: "Email Support",
      subtitle: "We're here 24/7 for you",
      actionText: "Support@ViralPe.com",
    },
  ];

  return (

    <div className="w-full max-w-[1206px] mt-[32px] mx-auto bg-[#901C27] rounded-[20px] shadow-md overflow-hidden">

      {/* Wrapper */}
      <div className="flex flex-col md:flex-row items-center justify-between py-6 md:py-10 divide-y md:divide-y-0 md:divide-x divide-white/20">

        {supportOptions.map((option) => {

          const Icon = option.icon;

          return (

            <div
              key={option.id}
              className="flex flex-col items-center text-center flex-1 w-full py-8 md:py-2 px-4"
            >

              {/* Icon Box */}
              <div className="w-[56px] h-[56px] bg-white rounded-[16px] flex items-center justify-center text-[#901C27] mb-5 shadow-sm">

                <Icon
                  size={26}
                  strokeWidth={2}
                />

              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-[17px] tracking-wide mb-1.5">
                {option.title}
              </h3>

              {/* Subtitle */}
              <p className="text-white/80 text-[13.5px] whitespace-pre-line leading-relaxed mb-2.5 min-h-[40px]">
                {option.subtitle}
              </p>

              {/* Action Text */}
              {option.actionText && (
                <p className="text-white font-bold text-[15px] tracking-wide">
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