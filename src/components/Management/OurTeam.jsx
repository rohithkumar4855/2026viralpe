import { useState } from "react";
import Container from "../../layout/Container";
import { Search } from "lucide-react";
import {teamMembers} from "../../data/HomeData"


export default function Management() {
   

    const [selectedMember, setSelectedMember] = useState(teamMembers[0]);

    return (
       <Container>
    <div className="w-full max-w-[1228px] bg-(--white) rounded-[20px] mx-auto overflow-hidden px-4 py-6 md:p-0">
        
        {/* HEADER & SEARCH SECTION */}
        <div className="text-center mb-6 md:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-[52px] font-semibold leading-tight text-gray-900">
                Our Team
            </h1>
            <p className="text-base sm:text-lg md:text-[24px] text-gray-600 mt-2 px-2">
                The Passionate minds driving our Vision forward
            </p>
            
            <div className="w-full max-w-[385px] mx-auto p-2 mt-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search By name, role..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#A21C26] text-sm md:text-base"
                    />
                    <Search
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={18}
                    />
                </div>
            </div>
        </div>

        {/* MAIN CONTAINER LAYOUT */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-0">
            
            {/* Team Members List (Swipeable Row on Mobile, Sidebar on Desktop) */}
            <div className="w-full md:w-[382px] flex md:flex-col gap-[12px] p-2 md:p-8 md:mt-[12px] md:mb-[29px] overflow-x-auto md:overflow-x-visible md: scroll-smooth snap-x">
                {teamMembers.map((member, index) => {
                    const isSelected = selectedMember.name === member.name;
                    return (
                        <div
                            key={index}
                            onClick={() => setSelectedMember(member)}
                            className={`flex-shrink-0 w-[280px] sm:w-[320px] md:w-[310px] lg:w-[345px] h-[72px] md:h-[80px] flex items-center gap-[12px] rounded-[12px] p-2 cursor-pointer transition-all duration-200 snap-center
                                ${isSelected
                                    ? "bg-white border-2 border-[#A21C26] shadow-md"
                                    : "bg-white border border-[#0000001A] shadow-sm md:shadow-xl"
                                }`}
                        >
                            <div className="w-[48px] h-[48px] md:w-[60px] md:h-[60px] rounded-full md:rounded-[8px] overflow-hidden flex-shrink-0 flex items-center justify-center bg-gray-100">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-sm md:text-[20px] font-semibold text-gray-900 truncate leading-snug">
                                    {member.name}
                                </h3>
                                <p className="text-xs md:text-[12px] font-medium text-[#00000080] truncate mt-0.5">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Dynamic Active Profile Container */}
            <div className="flex flex-col md:flex-row items-center justify-between flex-1 px-2 md:px-8 mt-4 md:mt-0 relative gap-6 md:gap-8">

                {/* Profile Text Details */}
                <div className="w-full md:max-w-[420px] text-center md:text-left z-10订单">
                    <h2 className="text-2xl sm:text-3xl md:text-[44px] leading-tight font-bold text-(--primary-red)">
                        {selectedMember.name}
                    </h2>

                    <p className="text-[#00000080] text-sm sm:text-base md:text-[20px] mt-1 font-medium">
                        {selectedMember.role}
                    </p>

                    <div className="pt-4 md:pt-5 border-t border-gray-100 md:border-none mt-3 md:mt-0">
                        <p className="text-sm sm:text-base md:text-[20px] leading-[1.6] md:leading-[1.8] tracking-[0.5px] text-[#000000cc]">
                            {selectedMember.bio}
                        </p>
                    </div>
                </div>

                {/* Profile Image */}
                <div className="w-full sm:w-[80%] md:w-[380px] flex justify-center md:justify-end items-end md:-translate-y-6">
                    <img
                        src={selectedMember.bigImage}
                        alt={selectedMember.name}
                        className="w-[280px] sm:w-[340px] md:w-full h-auto max-h-[350px] md:max-h-none object-contain rounded-b-[20px] md:rounded-none"
                    />
                </div>
            </div>

        </div>

    </div>
</Container>
    );
}