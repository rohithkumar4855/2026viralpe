const renderIcon = (icon) => (
  <img
    src={icon}
    alt="icon"
    className="w-8.5 h-8.5 object-contain"
  />
);
// src/data/EarningsData.jsx

export const EarningsData = ({ data = [] }) => {
  return (
    <div className="flex flex-row items-center justify-between gap-4 h-full overflow-x-auto pb-2">
      {data.map((item) => (
        <div
          key={item.id}
          className="min-w-[183px] w-full max-h-[120px] h-full border border-gray-100 rounded-2xl p-4 flex flex-col justify-center bg-white shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)]"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-[#fcf3f3] p-2 rounded-lg">
              <img
                src={item.icon}
                alt={item.title}
                className="w-5 h-5 object-contain"
              />
            </div>
            <span className="text-[11px] font-bold text-[#8a3c46] uppercase">
              {item.title}
            </span>
          </div>
          
          <h3 className="text-[22px] font-bold text-gray-900 mb-1">
            {item.amount}
          </h3>
          
          {/* This ensures the spacing doesn't break if a subtitle is missing */}
          {item.subtitle && (
            <p className="text-[10px] text-gray-500">
              {item.subtitle}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};