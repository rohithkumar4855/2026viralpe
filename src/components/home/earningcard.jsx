import location from "../../../public/images/location.png";
import vendor from "../../../public/images/vendor.png";
import gift from "../../../public/images/gift.png";
import referral from "../../../public/images/Overlay.png";

export default function GrowingTogether() {

  const EarningCard = ({
    icon: Icon,
    title,
    amount,
    subtitle,
  }) => {
    return (
      <div className="flex flex-col p-5 border border-gray-200 rounded-xl  bg-white shadow-sm hover:shadow-md transition-shadow ">

        {/* Icon + Title */}
        <div className="flex items-center gap-2 mb-3">
          <div className="text-(--primary-red)  p-1.5 rounded-[9.9px] w-[41px] h-[41px] flex items-center justify-center">
           <img
  src={Icon}
  alt={title}
  className=" object-contain"
/>
          </div>

          <h4 className="text-[12px] font-semibold text-[#6F0014] uppercase tracking-wider">
            {title}
          </h4>

        </div>

        {/* Amount */}
        <h3 className="text-[22px] font-bold text-[#1c1b1b]">
          {amount}
        </h3>

        {/* Subtitle */}
        <p className="text-[12px] text-[#584140] mt-[10.2px]">
          {subtitle}
        </p>

      </div>
    );
  };

  // Card Data
  const earningsData = [
    {
      id: 1,
      icon:location,
      title: "Zonal Royalty",
      amount: "₹ 25,000.00",
      subtitle: "Pending Claim",
    },
    {
      id: 2,
      icon: vendor,
      title: "Vendor Royalty",
      amount: "₹ 25,000.00",
      subtitle: "Pending Claim",
    },
    {
      id: 3,
      icon: gift,
      title: "Total Cashback",
      amount: "₹ 25,000.00",
      subtitle: "Pending Claim",
    },
    {
      id: 4,
      icon: referral,
      title: "Total Referral Bonus",
      amount: "₹ 25,000.00",
      subtitle: "Pending Claim",
    },
  ];

  return (

    <div className="w-full max-w-[1207px] mx-auto mt-[32px] bg-white rounded-[20px] p-8 md:p-10 shadow-sm border border-gray-100">

      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-3xl md:text-[48px] font-semibold tracking-tight mb-2">
          <span className="text-(--primary-red)">
            Growing
          </span>{" "}

          <span className="text-(--text-dark) ">
            Together
          </span>
        </h2>

        <p className="text-[#222222]/80 text-sm md:text-[24px]">
          Collective earnings from our user community
        </p>

      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 ">

        {earningsData.map((item) => (
          <EarningCard
            key={item.id}
            icon={item.icon}
            title={item.title}
            amount={item.amount}
            subtitle={item.subtitle}
          />
        ))}

      </div>

    </div>

  );
}