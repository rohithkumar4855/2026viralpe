import React from 'react';

import Appleicon from "../../../public/images/appleicon.png";
import playstoreicon from "../../../public/images/playstoreicon.png";
import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { ReachargeOn, RecentRecharges, AllNetwork } from "../../data/Dashboard";
import FeatureBanner from './FeatureBanner';

import { FeatureBannerCard } from "../../data/Dashboard";
const renderIcon = (icon) => {
    return (
        <img
            src={icon}
            alt="icon"
            className="w-8.5 h-8.5 object-contain"
        />
    );
};
export default function RechargeDashboard() {
    const navigate = useNavigate();

   
    return (

        <div className='w-full'>
            <div className="min-h-screen font-sans text-slate-800">
                {/* FIX 1: Changed `md:flex-col flex-row` to `flex-col` and added padding for smaller devices */}
                <div className="max-w-7xl flex flex-col mx-auto space-y-6 px-4 py-6 md:px-8">

                    {/* SECTION 1: Prepaid Recharge Form & Why ViralPe */}
                    {/* FIX 2: Changed `md:flex-row` to `lg:flex-row` because 837px + 348px won't fit side-by-side on a 768px tablet */}
                    <div className="flex flex-col lg:flex-row gap-6 items-stretch w-full">

                        <div className="bg-white p-6 rounded-[20px] shadow-sm max-w-[500px] md:max-w-[837px] w-full md:max-h-[260px] border border-slate-100 flex flex-col justify-between mx-auto lg:mx-0">
                            <div>
                                <h2 className="text-xl font-bold mb-6">Prepaid Recharge</h2>
                                <label className="block text-sm font-medium text-gray-600 mb-2">Mobile Number</label>
                                <div className="flex gap-2">
                                    <select className="rounded-l-xl px-3 bg-[#FFEDEE] font-bold focus:outline-none">
                                        <option>+91</option>
                                    </select>
                                    <input
                                        type="tel"
                                        placeholder="Enter Mobile Number"
                                        className="flex-1 -ml-2 border border-slate-200 max-w-[763px] rounded-r-xl px-4 py-3 w-full focus:outline-none"
                                    />
                                </div>
                            </div>
                            <button onClick={() => navigate('/prepaid-plans')} className="mt-8 bg-[#6F0014] text-white font-semibold py-3 px-12 rounded-xl self-center hover:bg-[#85031b] transition-colors cursor-pointer">
                                Confirm
                            </button>
                        </div>

                        <div className="bg-white max-w-[348px] w-full max-h-[278px] p-4 rounded-[13.78px] shadow-sm border border-slate-100 mx-auto lg:mx-0 overflow-y-auto custom-scrollbar">
                            <h3 className="text-lg font-bold mb-4">Why Recharge On ViralPe?</h3>
                            <div className="space-y-4">
                                {ReachargeOn.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center flex-shrink-0">
                                            <img src={item.icon} alt={item.title} className="w-5 h-5 object-contain" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold">{item.title}</h4>
                                            <p className="text-xs text-gray-500">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* SECTION 2: Recent Recharges */}
                    <div className="bg-white max-w-[1217px] w-full max-h-[226px] p-4 rounded-[20px] shadow-sm border border-slate-100 mx-auto flex flex-col">
                        <h2 className="text-xl font-bold mb-4">Recent Recharges</h2>
                        {/* FIX 3: Added horizontal scrolling `overflow-x-auto` to prevent breaking height constraints on mobile */}
                        <div className="flex flex-row gap-4 overflow-x-auto pb-2 scrollbar-hide">
                            {RecentRecharges.map((item, index) => (
                                <div key={index} className="border border-slate-100 rounded-xl p-4 min-w-[260px] max-w-[279px] w-full max-h-[135px] flex flex-col shrink-0">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex gap-4 items-center">
                                            <div className='p-2 bg-[#FFEDEE] rounded-2xl w-[60px] h-[60px] flex items-center justify-center flex-shrink-0'>
                                                <img src={item.icon} alt="operator icon" className="w-10 h-10 object-contain" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm text-gray-900">{item.number}</p>
                                                <p className="text-[#901c27] font-bold text-sm mt-0.5">{item.price}</p>
                                                <button className="text-xs text-[#901c27] mt-1 block">Continue Recharge</button>
                                            </div>
                                        </div>
                                        <button className="text-gray-400 hover:text-gray-600 text-lg">⋮</button>
                                    </div>
                                    <div className="border-t border-dashed border-slate-200 pt-2 text-[10px] text-gray-400 truncate">
                                        Last Recharge: 01 May 2026, 10:09AM
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SECTION 3: Operators & App Banner */}
                    <div className="flex flex-col lg:flex-row gap-5 max-w-[1217px] w-full mx-auto">

                        {/* Network Operators List */}
                        <div className="bg-white p-4 max-w-[752px] w-full max-h-[226px] rounded-[20px] shadow-sm border border-slate-100 flex flex-col justify-between mx-auto lg:mx-0">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-bold text-gray-900">All Network Operators</h2>
                                <button className="text-[#901c27] font-semibold text-sm flex items-center gap-1 cursor-pointer whitespace-nowrap">
                                    View More
                                </button>
                            </div>

                            {/* FIX 4: Added horizontal scrolling `overflow-x-auto` and `shrink-0` */}
                            <div className="flex flex-row gap-4 overflow-x-auto pb-2 scrollbar-hide">
                                {AllNetwork.map((op, idx) => (
                                    <div key={idx} className="border border-slate-100 rounded-xl p-4 flex flex-col items-center justify-center text-center bg-white shadow-sm hover:border-rose-200 transition-colors shrink-0 min-w-[100px]">
                                        <div className="w-12 h-12 flex items-center justify-center mb-3">
                                            <img src={op.icon} alt={op.name} className="w-full h-full object-contain" />
                                        </div>
                                        <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md w-full whitespace-nowrap">
                                            {op.cb}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Marketing Banner */}
                        <div className="max-w-[457px] p-3 w-full max-h-[226px] bg-[#FFEDEE] rounded-[20px] flex flex-row relative overflow-hidden shrink-0 shadow-sm mx-auto lg:mx-0">
                            {/* --- Left Text Content --- */}
                            <div className="flex flex-col z-10 w-[240px]">
                                <h2 className="font-bold text-xl text-[20px] md:text-[28px] leading-[1.2] text-[#222222] mb-3">
                                    Recharge or Pay<br />Mobile Bill
                                </h2>

                                <p className="text-[12px] md:text-[16px] leading-[1.4] text-gray-700 max-w-[180px]">
                                    Collective earnings from our user community
                                </p>

                                <div className='flex flex-col gap-2 mt-1'>
                                    <button className="rounded-lg py-[8px] px-[5px] flex flex-row items-center gap-[6px] text-white bg-[#721c22] transition-colors shadow-sm max-w-[140px] md:max-w-[173px] max-h-[30px] w-full">
                                        <span className="text-[10px] md:text-[12px] font-medium leading-none mt-[1px]">Download ViralPe App</span>
                                        <div className="flex flex-row items-center gap-[4px]">
                                            <img src={playstoreicon} alt="Play Store" className="w-[14px] h-[14px] object-contain" />
                                        </div>
                                    </button>
                                    <button className="rounded-lg py-[10px] px-[5px] flex flex-row items-center gap-[6px] text-white bg-[#721c22] transition-colors shadow-sm max-w-[140px] md:max-w-[173px] max-h-[30px] w-full">
                                        <span className="text-[10px] md:text-[12px] font-medium leading-none mt-[1px]">Download ViralPe App</span>
                                        <div className="flex flex-row items-center gap-[4px]">
                                            <img src={Appleicon} alt="Apple" className="w-[14px] h-[14px] object-contain pb-[1px]" />
                                        </div>
                                    </button>
                                </div>
                            </div>

                            <div className="relative flex items-start">
                                {/* Mobile Card */}
                                <div className="w-[160px] md:w-[180px] h-[300px] md:h-[353.67px]  md:mr-[25px] bg-white rounded-[25.2px] border-[6.3px] border-[#222222] flex flex-col items-center mt-[40px] shadow-sm relative shrink-0">
                                    <img
                                        src="/images/logoname.png"
                                        alt="ViralPe Logo"
                                        className="object-contain mt-4"
                                    />
                                </div>

                                {/* Text Boxes */}
                                {/* FIX 5: Changed syntax error `left-[px]` to `left-2 md:left-[10px]` */}
                                <div className="flex flex-col gap-2 absolute md:-left-4 md:right-2   md:right-[10px] mt-[120px]">
                                    {/* Top Text Box */}
                                    <div className="bg-white w-[160px] md:w-[222px] h-[31px] rounded-[4px] flex items-center justify-center shadow-sm">
                                        <h1 className="text-[9px] md:text-[10px] text-[#222222CC] truncate px-1">
                                            Collective earnings from our user community
                                        </h1>
                                    </div>

                                    {/* Bottom Text Box */}
                                    <div className="bg-white w-[160px] md:w-[222px] h-[31px] rounded-[4px] flex items-center justify-center shadow-sm">
                                        <h1 className="text-[9px] md:text-[10px] text-[#222222CC] truncate px-1">
                                            Earn cashback on every recharge & bill payment
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <FeatureBanner cards={FeatureBannerCard} />
                    </div>

                </div>
            </div>
        </div>

    );
}