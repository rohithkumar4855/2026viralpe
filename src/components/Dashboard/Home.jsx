import { WalletandEarningsCard } from "../../data/EarningData"


const WalletandEarnings = ({ icon, title, amount}) => {
    return (
        <div className="flex flex-col border border-[#000000]/10 rounded-2xl bg-white shadow-sm transition-shadow w-full w-[183px] h-[108px] ">
        
            <div className=" flex flex-col p-3 gap-2 ">
                <div className="text-(--primary-red) gap-2 rounded-[9.33px] flex items-center">
                    <img
                        src={icon}
                        alt={title}
                        className="object-contain w-8 h-8"
                    />
                    <h4 className="text-[11.15px] font-semibold truncate text-[#6F0014] uppercase">
                    {title}
                </h4>
                </div>
                <div> </div>
                 <h3 className="text-[20.82px] font-bold text-[#1c1b1b]">
                {amount}
            </h3>
            </div>

          
           
        </div>
    
    );
};


export default function Home() {
    return (
        <div className="w-full md:max-w-[1217px] mx-auto mt-[32px] bg-white rounded-[20px] p-5 sm:p-8 shadow-sm border border-gray-100">
    <div className="mb-6">
        <h1 className="text-[20px] sm:text-[24px] font-semibold text-gray-900">Wallet & Earnings</h1>
    </div>
    
    {/* Clean, fluid grid layout switching seamlessly from mobile stack up to 6 wide on big desktop monitors */}
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {WalletandEarningsCard.map((item) => (
            <WalletandEarnings
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