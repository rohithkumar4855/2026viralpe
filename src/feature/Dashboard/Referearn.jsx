import React from 'react';
import threepeople from "../../../public/images/Threepeople.svg"
import twopeople from "../../../public/images/Twopeople.svg"
import coins from "../../../public/images/coins.svg";
import friendsicon from "../../../public/images/friends.svg";
import refericon from "../../../public/images/Referlink.svg"
import twocoinicon from "../../../public/images/Twocoins.svg";
import { ArrowRight } from "lucide-react";

import {
  Share2,
  Copy,
  Users,
  CheckCircle,
  Wallet,
  ChevronRight,
  Info,
  ShieldCheck,
  Gift,
  Clock
} from 'lucide-react';
import Refer from "/images/refer.svg";
import referopenbox from "/images/referopenbox.svg";

export default function ReferAndEarnFlex() {
  // Mock Data
  const referralCode = "VIRALPE2026";
  const referralLink = "https://viralpe.app.link.Viralpe";

  const myReferrals = [
    { id: 1, name: "Arun Kumar", phone: "+91 90000 00000", date: "02 May 2026, 10:30 AM", amount: "₹25", status: "Earned" },
    { id: 2, name: "Bhavna Singh", phone: "+91 91000 11111", date: "03 May 2026, 11:00 AM", amount: "₹15", status: "Pending" },
    { id: 3, name: "Chirag Mehta", phone: "+91 91200 22222", date: "04 May 2026, 12:00 PM", amount: "₹45", status: "Earned" },
    { id: 4, name: "Arun Kumar", phone: "+91 90000 00000", date: "02 May 2026, 10:30 AM", amount: "₹25", status: "Earned" },
  ];

  const topReferrers = [
    { rank: 1, name: "Rohit Sharma", amount: "₹9,680.00" },
    { rank: 2, name: "Virat Kohli", amount: "₹8,250.00" },
    { rank: 3, name: "Jasprit Bumrah", amount: "₹7,500.00" },
    { rank: 9, name: "Srinivas", amount: "₹3,900.00", isCurrentUser: true },
    { rank: 4, name: "KL Rahul", amount: "₹3,820.00" },
  ];

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  const referralSteps = [
    {
      id: 1,
      title: "1. Share your Code/Link",
      description: "Share your referral code or link with your friends",
      icon: <img src={refericon} />
    },
    {
      id: 2,
      title: "2. Friend Joins & Transacts",
      description: "Your friend signs up and completed their first transaction",
      icon: <img src={friendsicon} />
    },
    {
      id: 3,
      title: "3. You Earn Rewards",
      description: "You earn ₹25 instantly once your friend's transaction is successful.",
      icon: <img src={twocoinicon} />
    }
  ];

  const metricsData = [
    {
      id: 'total-referrals',
      label: 'Total Referrals',
      value: '21',
      subtext: 'Friends Joined',
      icon: <img src={threepeople} />,
    },
    {
      id: 'successful-referrals',
      label: 'Successful Referrals',
      value: '14',
      subtext: 'Completed Transaction',
      icon: <img src={twopeople} />,

    },
    {
      id: 'total-earned',
      label: 'Total Earned',
      value: '₹525.00',
      subtext: 'Lifetime Earnings',
      icon: <img src={coins} />,

    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] p-4 mt-20 md:p-8 font-sans text-gray-800 ">

      {/* Outer Layout Wrapper */}
      <div className="max-w-[1208px] w-full justify-between mx-auto flex flex-col lg:flex-row gap-6 ">

        {/* LEFT COLUMN (Width: 721px) */}
        <div className="flex flex-col gap-6 w-full  min-w-[721px] relative">

          {/* 1. Hero Banner */}
          <div className="bg-white rounded-3xl relative shadow-sm border border-gray-100 flex flex-col justify-between w-full">

            {/* Top Section: Text on Left, Image on Right */}
            <div className="flex flex-col md:flex-row  max-w-[721px] w-full p-5" >

              {/* Text Content */}
              <div className="flex flex-col gap-4 max-w-[333px] w-full ">
                <p className="text-sm font-semibold text-gray-500">Refer & Earn with ViralPe</p>
                <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">
                  Refer Your Friends & <br />
                  Earn <span className="text-[#901C27]">Exciting Rewards!</span>
                </h1>
                <p className="text-sm text-gray-600">
                  Your friends get a great experience and you earn cashback successful referral.
                </p>
                <div>
                  <button className="bg-[#780A1D] hover:bg-[#5A0715] text-white font-medium py-3 px-8 rounded-xl flex items-center gap-2 transition duration-200 shadow-md">
                    <Share2 size={18} />
                    Refer Now
                  </button>
                </div>
              </div>

              {/* Illustration Area */}
              <div className="w-full max-w-[318px] flex justify-center">
                <img src={Refer} alt='refer illustration' className="w-full object-contain" />
              </div>
              {/* Bottom Section: Pink Card (Now properly stacked below the top section) */}
              <div className="bg-[#FFF5F6] rounded-2xl max-w-[629px] w-full max-h-[96px] h-full item-center p-4 flex flex-col md:flex-row absolute bottom-0">

                {/* Referral Code Box */}
                <div className="flex-1 flex flex-col ">
                  
                  <span className="text-[13px] text-[#1C1B1BB2]">Your Referral Code</span>
                  <div className="max-w-[200px] w-full max-h-[33px] bg-white rounded-xl border border-pink-100 p-4 gap-4 flex flex-row  items-center">
                    <span className='text-[13px] text-[#1C1B1B]'>{referralCode}</span>

                    <div className="flex  gap-4 text-[#901C27]">
                      <button onClick={() => handleCopy(referralCode)} className="hover:opacity-70 transition">
                        <Copy size={16} />
                      </button>
                      <button >
                        <Share2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Share Link Box */}
                <div className=" flex flex-1 flex-col ">
                  <span className="text-[13px] text-[#1C1B1BB2]">Share your Link</span>
                  <div className="max-w-[284px] w-full max-h-[33px] bg-white rounded-xl border border-pink-100 p-4 gap-4   flex flex-row  items-center">
                    <span className="  text-[13px] text-[#1C1B1B]">{referralLink}</span>
                    <div className="flex gap-4 text-[#901C27] ">
                      <button onClick={() => handleCopy(referralLink)} className="hover:opacity-70 transition">
                        <Copy size={16} />
                      </button>
                      <button >
                        <Share2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>



          </div>

          {/* 2. Earnings Breakdown */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col w-full lg:h-[196px] overflow-hidden">
            <div className="p-6 pb-4">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Earnings Breakdown</h2>
              <div className="flex flex-row justify-between gap-4">
                {metricsData.map((metric) => (
                  <div key={metric.id} className="flex flex-1 items-start gap-3">
                    <div className={`p-3 rounded-xl ${metric.bgClass} flex-shrink-0`}>
                      {metric.icon}
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[11px] text-gray-500 font-medium">{metric.label}</p>
                      <p className="text-lg md:text-xl font-bold text-gray-900 leading-tight my-0.5">{metric.value}</p>
                      <p className="text-[11px] text-gray-400">{metric.subtext}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Green Footer Bar */}
            <div className="bg-[#EAF5EC] text-[#2D7A3E] w-full py-2.5 flex items-center justify-center gap-2 text-xs font-medium mt-auto">
              <Gift size={14} /> You will earn ₹25 for each successful referral.
            </div>
          </div>

          {/* 3. My Referrals List */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 w-full lg:h-[255px] flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">My Referrals</h2>
              <button className="text-sm font-bold text-[#780A1D] flex items-center gap-1 ">
                View All
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="flex flex-col divide-y divide-gray-100 overflow-y-auto pr-2 custom-scrollbar">
              {myReferrals.map((user) => (
                <div key={user.id} className="py-3.5 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#780A1D] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-sm font-bold text-gray-900">{user.name}</h4>
                      <div className="flex items-center gap-3 text-[11px] text-gray-500 mt-0.5">
                        <span>{user.phone}</span>
                        <span className="w-[3px] h-[3px] rounded-full bg-gray-300"></span>
                        <span>{user.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right flex flex-col items-end">
                    <p className="text-base font-bold text-gray-900">{user.amount}</p>
                    <span className={`text-[11px] font-semibold mt-0.5 ${user.status === 'Earned' ? 'text-green-600' : 'text-amber-500'}`}>
                      {user.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Bottom Banner */}
          <div className="bg-[#901C27] text-white rounded-2xl p-8 py-0 flex flex-row justify-between items-center overflow-hidden w-full lg:h-[180px]">
            <div className="space-y-2 py-6">
              <h3 className="text-[24px] font-bold">Refer More, Earn More!</h3>
              <p className="text-[15px] ">
                There's no limit on how much you can earn.<br /> Keep referring and keep earning!
              </p>
            </div>
            <div>
              <img src={referopenbox} alt='refer box' className="max-w-[211px] w-full  max-h-[211px]" />
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN (Width: 463px) */}
        <div className="flex flex-col gap-6 w-full ">

          {/* 1. Earnings & Withdrawal Widget */}
          <div className="bg-gradient-to-r from-[#1F0608] to-[#911922] text-white rounded-3xl p-8 shadow-md flex flex-col w-full lg:h-[417px] justify-between relative overflow-hidden">
            <div>
              <p className="text-sm font-medium text-white/80 mb-2">Your Earnings</p>
              <h2 className="text-4xl font-extrabold tracking-tight">₹1,225.00</h2>
            </div>

            <div className="w-full h-[1px] bg-white/10 my-4"></div>

            <div className="flex justify-between items-center w-full">
              <div className="flex-1 pr-4 border-r border-white/10">
                <p className="text-2xl font-bold mb-1">₹825.00</p>
                <p className="text-xs text-white/70">Confirmed Earnings</p>
              </div>
              <div className="flex-1 pl-6">
                <p className="text-2xl font-bold mb-1 flex items-center gap-1">
                  ₹400.00
                </p>
                <p className="text-xs text-white/70 flex items-center gap-1">
                  <Info size={12} /> Pending Earnings
                </p>
              </div>
            </div>

            <div className="mt-8 relative z-10 flex flex-col items-center">
              <button className="w-full bg-white text-[#4E0F1A] font-bold py-4 px-4 rounded-xl hover:bg-gray-100 transition duration-150 text-base shadow-lg">
                Withdraw Earnings
              </button>
              <p className="text-xs mt-3 text-white/60">Minimum withdraw amount is ₹200</p>
            </div>

            <div className="absolute bottom-6 left-8 flex items-center gap-1.5 text-xs text-green-400 font-medium">
              <ShieldCheck size={14} /> Safe & Secure Payments
            </div>
          </div>

          {/* 2. How It Works */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 w-full lg:h-[405px]">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-gray-900">How it Works?</h3>
              <button className="text-xs font-bold text-[#780A1D] ">T&C Apply</button>
            </div>

            <div className="flex flex-col relative px-2">
              {referralSteps.map((step, index) => (
                <div key={step.id} className="flex items-start gap-5 relative group">
                  {/* Dotted Line Connector */}
                  {index !== referralSteps.length - 1 && (
                    <div className="absolute left-[1.35rem] top-14 bottom-[-1.5rem] w-px border-l-2 border-dotted border-gray-300"></div>
                  )}

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl border border-gray-100 bg-white shadow-sm flex items-center justify-center flex-shrink-0 z-10">
                    {step.icon}
                  </div>

                  {/* Text */}
                  <div className="flex flex-col pb-8">
                    <h3 className="text-base font-bold text-gray-900">{step.title}</h3>
                    <p className="text-sm text-gray-500 mt-1.5 leading-relaxed pr-4">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Top Referrers */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 w-full lg:h-[342px] flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Top Referrers</h3>
              <button className="text-sm font-bold text-[#780A1D] flex items-center gap-1 ">
                View All   <ArrowRight size={14} />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {topReferrers.map((referrer, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#780A1D] flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                      {referrer.rank}
                    </div>
                    <div className="w-9 h-9 rounded-full bg-gray-200 flex-shrink-0"></div>
                    <span className="text-sm font-bold text-gray-900">
                      {referrer.name} {referrer.isCurrentUser && <span className="text-[#780A1D]">(You)</span>}
                    </span>
                  </div>
                  <span className="text-base font-bold text-gray-900">{referrer.amount}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}