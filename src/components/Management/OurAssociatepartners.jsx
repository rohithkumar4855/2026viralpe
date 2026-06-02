import Container from "../../layout/Container";
import { Search } from "lucide-react";
import {associatePartners} from "../../data/HomeData"
function PartnerCard({ name, role, imageUrl }) {
    return (
        <div className="relative max-h-[228.21px] w-[221.47px] rounded-[20px]  shadow-md hover:shadow-xl flex justify-center">
            <div className="max-w-[221px] max-h-[228px] overflow-hidden">
                {/* Profile Image */}
                <img
                    src={imageUrl}
                    alt={name}
                    className=" relative"
                />

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 w-full p-5 z-10 bg-gradient-to-t from-black/90 via-black/30 to-transparent">
                    <h2 className="text-white text-[18px] md:text-[20px] font-bold leading-tight">
                        {name}
                    </h2>

                    <p className="text-gray-300 text-[12px] md:text-[13px] mt-1">
                        {role}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function Management() {

   
    return (
       <Container>
    <div className="w-full max-w-[1228px] mx-auto bg-white rounded-[20px] px-4 py-6 md:px-10 md:py-10">

        {/* Header */}
        <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-[52px] font-semibold text-gray-900 leading-tight">
                Our Associate Partners
            </h1>

            <p className="text-base sm:text-lg md:text-[24px] text-[#00000080] mt-2 px-2">
                The passionate minds driving our vision forward.
            </p>

            {/* Search */}
            <div className="w-full max-w-[385px] mx-auto mt-5 px-2">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search by name, role..."
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-[10px] text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
                    />

                    <Search
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        size={18}
                    />
                </div>
            </div>
        </div>

        {/* Flexbox Cards Container */}
        <div className="flex flex-wrap items-stretch justify-center gap-3 sm:gap-4 md:gap-[15.41px]">
            {associatePartners.map((partner, index) => (
                <div 
                    key={index} 
                    className="w-[calc(50%-6px)] sm:w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)] xl:w-[calc(20%-13px)] flex-grow-0 flex-shrink-0"
                >
                    <PartnerCard
                        name={partner.name}
                        role={partner.role}
                        imageUrl={partner.image}
                    />
                </div>
            ))}
        </div>
        
    </div>
</Container>
    );
}