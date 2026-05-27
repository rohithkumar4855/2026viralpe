import React from "react";

const renderIcon = (icon) => (
  <img
    src={icon}
    alt="icon"
    className="w-8.5 h-8.5 object-contain"
  />
);

export default function FeatureBanner({ cards = [] }) {

  return (
    <div className="max-w-[1210px] md:max-h-[118px] rounded-[24px] bg-[#FFEDEE] px-1 py-8 md:px-8 lg:px-16 mx-auto gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-6">
        {cards.map((feature) => (
          <div key={feature.id} className="flex items-center gap-4 min-w-0">
            <div className="flex h-11.75 w-11.75 flex-shrink-0 items-center justify-center rounded-[18px] bg-white text-[#8C1822] shadow-sm">
              {renderIcon(feature.icon)}
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-[16px] font-semibold text-(--primary-red)">
                {feature.title}
              </h3>

              {feature.isRating ? (
                <div className="mt-1 flex items-center gap-1">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className="h-4 w-4 fill-current text-yellow-400"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                  <span className="ml-1 text-[14px] text-[#1C1B1BCC]">
                    {feature.description}
                  </span>
                </div>
              ) : (
                <p className="mt-1 text-sm text-[#1C1B1BCC]">
                  {feature.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


