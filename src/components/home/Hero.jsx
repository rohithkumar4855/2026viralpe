import { useState } from "react";
import Container from "../../layout/Container";
import Button from "../ui/Button";
import Appleicon from "../../../public/images/appleicon.png";
import playstoreicon from "../../../public/images/playstoreicon.png";
import homescreen from "../../../public/images/homescreen1.png";

import { ArrowLeft, ChevronDown } from "lucide-react";
import { rechargeData, headings,labels } from "../../data/HomeData";

export default function Heropage() {
    const [activeTab, setActiveTab] = useState(null);

    return (
        <section>
            <div className="max-w-301.75 mx-auto mt-30 flex flex-col lg:flex-row gap-4 lg:gap-7.75 px-4 lg:px-0 items-center lg:items-stretch">
                <div className="flex flex-col gap-4  md:mt-0 bg-(--white) rounded-2xl w-full lg:max-w-181 h-auto md:min-h-[264px] p-5 sm:p-[27.28px] shadow-sm relative overflow-hidden">

                    {/* Default View: Show 4 Icons */}
                  
                        <div className="animate-in fade-in duration-300">
                            <h2 className="font-semibold text-[22px] sm:text-[28px] text-(--text-dark)">
                                Recharge or Pay Mobile Bill
                            </h2>

                            <div className=" flex flex-row  gap-4  md:justify-evenly sm:gap-14.25 mt-4   ">
                                {rechargeData.map((item) => (
                                    <div
                                        key={item.id}
                                        onClick={() => {
                                            setActiveTab(item.id);

                                            window.scrollTo({
                                                top: 0,
                                                behavior: "smooth",
                                            });
                                        }}
                                        className="flex flex-col items-center justify-center pt-2 cursor-pointer hover:scale-105 transition-transform duration-200 w-[45%] sm:w-auto"
                                    >
                                        <img
                                            src={item.icon}
                                            alt={item.alt}
                                            className="object-contain mb-2 "
                                        />
                                        <p className="text-[12px] sm:text-sm font-medium flex flex-col items-center text-gray-800 leading-tight text-center">
                                            <span>{item.title.split(" ")[0]}</span>
                                            <span>{item.title.split(" ")[1]}</span>
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                   

                    {activeTab !== null && (
                        <div className="fixed inset-0 bg-black/30 backdrop-blur-[2px] flex items-center justify-center z-[999] p-4">

                            {/* Modal Box */}
                            <div className="bg-white w-full max-w-[650px] rounded-[20px] px-5 sm:px-7 py-6 shadow-2xl relative animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto">

                                {/* Close Button */}
                                <button
                                    onClick={() => setActiveTab(null)}
                                    className="absolute top-4 right-4 sm:top-5 sm:right-5 text-gray-400 hover:text-black p-2"
                                >
                                    ✕
                                </button>

                                {/* Heading */}
                                <h2 className="font-bold text-[22px] sm:text-[28px] text-(--text-dark) mb-6 sm:mb-8 pr-6">
                                    {headings[activeTab]}
                                </h2>

                                {/* Label */}
                                <label className="text-[13px] sm:text-[14px] font-medium text-(--text-dark) mb-2 block">
                                    {labels[activeTab]}
                                </label>

                                {/* FASTag Inputs */}
                                {activeTab === 4 ? (
                                    <div className="flex flex-col gap-4">

                                        {/* Vehicle Number */}
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Enter Bank Name"
                                                className="w-full border border-gray-200 rounded-[10px] px-4 sm:px-5 py-3 sm:py-4 outline-none text-[14px] sm:text-[15px]"
                                            />
                                        </div>

                                        {/* Mobile Number */}
                                        <div>
                                            <label className="text-[13px] sm:text-[14px] font-medium text-(--text-dark) mb-2 block">
                                                Vehicle Number/Chassis Number/Registered Mobile Number
                                            </label>

                                            <div className="flex border border-gray-200 rounded-[10px] overflow-hidden">
                                                <input
                                                    type="text"
                                                    placeholder="Enter Vehicle Number/Chassis Number/Registered Mobile Number"
                                                    className="flex-1 px-4 sm:px-5 py-3 sm:py-4 outline-none text-[14px] sm:text-[15px] truncate"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex border border-gray-200 rounded-[10px] overflow-hidden">

                                        {(activeTab === 1 || activeTab === 2) && (
                                            <div className="bg-[#FFF0F3] flex items-center gap-1 sm:gap-2 px-3 sm:px-5 shrink-0">
                                                <span className="text-[14px] sm:text-[15px] font-medium">+91</span>
                                                <ChevronDown size={16} />
                                            </div>
                                        )}

                                        <input
                                            type={activeTab === 3 ? "text" : "tel"}
                                            placeholder={
                                                activeTab === 3
                                                    ? "Enter Subscriber ID / Registered Mobile Number"
                                                    : "Enter Mobile Number"
                                            }
                                            className="flex-1 px-4 sm:px-5 py-3 sm:py-4 outline-none text-[14px] sm:text-[15px] min-w-0"
                                        />
                                    </div>
                                )}

                                {/* Button */}
                                <div className="flex justify-center mt-6 sm:mt-8">
                                    <button className="bg-(--primary-red) hover:bg-[#720c1d] h-[48px] transition-colors text-(--white) font-medium w-full sm:w-[220px] rounded-[8px]">
                                        Confirm
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>


                {/* Right Card */}
                <div className="w-full lg:w-110 lg:min-w-110 h-auto lg:h-66 min-h-[264px] bg-[#FFEDEE] rounded-2xl flex flex-col sm:flex-row relative overflow-hidden shrink-0 shadow-sm items-center sm:items-stretch pb-6 sm:pb-0">

                    {/* --- Left Text Content --- */}
                    <div className="flex flex-col pt-6 sm:pt-[23px] px-5 sm:pl-[19px] z-10 w-full sm:w-[240px] items-center sm:items-start text-center sm:text-left">
                        <h2 className="font-bold text-[28px]  leading-[1.2] text-[#222222] mb-3">
                            Recharge or Pay<br className="hidden sm:block" /> Mobile Bill
                        </h2>

                        <p className="text-[16px]  leading-[1.4] text-gray-700 mb-6 ">
                            Collective earnings from our user community
                        </p>

                        <div>
                            <button className="rounded-lg py-[8px] px-[8px] sm:px-[5px] flex flex-row items-center justify-center gap-[6px] text-white bg-[#721c22] transition-colors shadow-sm w-full sm:max-w-[173px] max-h-[40px] sm:max-h-[30px]">
                                <span className="text-[12px] font-medium leading-none mt-[1px]">Download ViralPe App</span>
                                <div className="flex flex-row items-center gap-[4px]">
                                    <img src={playstoreicon} alt="Play Store" className="w-[14px] h-[14px] object-contain" />
                                    <img src={Appleicon} alt="Apple" className="w-[14px] h-[14px] object-contain pb-[1px]" />
                                </div>
                            </button>
                        </div>
                    </div>
                    
                    <div className="relative flex items-center sm:items-start justify-center w-full sm:w-auto mt-6 sm:mt-0">

                        {/* Mobile Card Mockup */}
                        <div className="w-[150px] sm:w-[180px] h-[294px] sm:h-[353.67px] sm:mr-[25px] bg-white rounded-[20px] sm:rounded-[25.2px] border-[5px] sm:border-[6.3px] border-[#222222] flex flex-col items-center mt-2 sm:mt-[70px] shadow-sm relative">

                            <img
                                src="/images/logoname.png"
                                alt="ViralPe Logo"
                                className="object-contain mt-4 w-3/4 sm:w-auto"
                            />
                        </div>

                        {/* Text Boxes */}
                        <div className="flex flex-col gap-2 absolute top-1/2 -translate-y-1/2 sm:translate-y-0 sm:top-auto sm:right-[10px] sm:mt-[150px] z-20 pointer-events-none px-4 sm:px-0">

                            {/* Top Text Box */}
                            <div className="bg-white/95 sm:bg-white w-full sm:w-[222px] h-auto min-h-[31px] py-1 sm:py-0 rounded-[4px] flex items-center justify-center shadow-md sm:shadow-sm px-2">
                                <h1 className="text-[9px] sm:text-[10px] text-[#222222CC] text-center">
                                    Collective earnings from our user community
                                </h1>
                            </div>

                            {/* Bottom Text Box */}
                            <div className="bg-white/95 sm:bg-white w-full sm:w-[222px] h-auto min-h-[31px] py-1 sm:py-0 rounded-[4px] flex items-center justify-center shadow-md sm:shadow-sm ">
                                <h1 className="text-[9px] sm:text-[10px] text-[#222222CC] text-center">
                                    Earn cashback on every recharge & bill payment
                                </h1>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}