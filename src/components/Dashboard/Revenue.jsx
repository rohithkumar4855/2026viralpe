import Graph from "../../../public/images/graph.png";
import Graphbar from "../../../public/images/graphBar.png";

export default function Revenue() {

  const statsData = [
    {
      id: 1,
      value: "12",
      label: "Transactions",
    },
    {
      id: 2,
      value: "₹320",
      label: "Cashback Earned",
    },
    {
      id: 3,
      value: "₹200",
      label: "Cashback Claimed",
    },
  ];

  return (
   <div className="w-full max-w-[1217px] h-auto lg:h-[98px] mx-auto mt-[32px] bg-white rounded-[20px] shadow-sm px-6 py-5 flex items-center">
  <div className="w-full flex flex-col md:flex-row lg:flex-row items-center justify-between gap-6">

    {/* Left Section: Earning overview */}
    <div className="flex items-center gap-4 w-full md:w-auto">
      <img
        src={Graph}
        alt="Graph"
        className="w-[46px] h-[46px] object-contain shrink-0"
      />

      <div className="flex flex-col">
        <h3 className="text-[12px] text-[#666666] font-medium">
          This Month
        </h3>
        <h2 className="text-[18px] font-semibold text-[#222222] whitespace-nowrap">
          You Earned ₹320
        </h2>
        <p className="text-[13px] text-green-600">
          +18% growth from last month
        </p>
      </div>
    </div>

    {/* Reusable Stats Section: Changes to a grid layout on mobile/tablet */}
    <div className="grid grid-cols-3 sm:grid-cols-3 md:flex items-center gap-y-4 gap-x-2 w-full md:w-auto justify-items-center">
      {statsData.map((item, index) => (
        <div key={item.id} className="flex items-center w-full justify-center md:w-auto">
          <div className="px-4 lg:px-6 text-center">
            <h1 className="text-[20px] lg:text-[22px] font-bold text-[#222222] line-clamp-1">
              {item.value}
            </h1>
            <p className="text-[12px] lg:text-[13px] text-[#666666] whitespace-nowrap">
              {item.label}
            </p>
          </div>

          {/* Divider Line: Dynamic visibility hidden on mobile layouts */}
          {index !== statsData.length - 1 && (
            <div className="hidden md:block w-[1px] h-[40px] lg:h-[50px] bg-[#E5E5E5]"></div>
          )}
        </div>
      ))}
    </div>

    {/* Right Graph: Centered on mobile layout, correctly positioned on desktop */}
    <div className="md:mr-4 lg:mr-20 shrink-0">
      <img
        src={Graphbar}
        alt="Graph Bar"
        className="w-[120px] object-contain mx-auto"
      />
    </div>

  </div>
</div>
  );
}