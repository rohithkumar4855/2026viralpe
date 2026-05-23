import React, { useState } from 'react';
import { MoreVertical } from 'lucide-react';
import Axisicon from "../../../public/images/Axisbankicon.svg"; // Assuming you have this
// import IdfcLogo from "../../../public/images/idfc.svg";
// import BajajLogo from "../../../public/images/bajaj.svg";

const FastagRechargeUI = () => {
  const [selectedAmount, setSelectedAmount] = useState('300');

  const rechargeOptions = [
    { amount: '200', cashback: '5% Cashback' },
    { amount: '300', cashback: '10% Cashback' },
    { amount: '350', cashback: '12% Cashback' },
    { amount: '250', cashback: '6% Cashback' },
    { amount: '400', cashback: '8% Cashback' },
    { amount: '100', cashback: '3% Cashback' },
  ];

  // Dummy data for recent recharges
  const recentRecharges = [
    { id: 1, vehicle: 'AP 10 2345', amount: '₹500', date: '01 May 2026,10:09AM', bank: 'IDFC FIRST Bank' },
    { id: 2, vehicle: 'AP 10 2345', amount: '₹500', date: '01 May 2026,10:09AM', bank: 'BAJAJ FINSERV' },
    { id: 3, vehicle: 'AP 10 2345', amount: '₹500', date: '01 May 2026,10:09AM', bank: 'Axis Bank' },
  ];

  return (
    <div className="max-w-[1440px] mx-auto pt-25   ">
      {/* --- NEW FASTAG RECHARGE BOX --- */}
      <div className="w-full max-w-[837px] bg-white rounded-3xl p-8 shadow-sm font-sans flex flex-col justify-between box-border">

        {/* Top Section: Account Details */}
        <div>
          <h1 className="text-[24px] font-bold text-[#1C1B1B] mb-6 tracking-tight">FASTag Recharge</h1>

          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
            {/* User & Vehicle Info */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-pink-50 rounded-xl flex items-center justify-center border border-pink-100">
                <img src={Axisicon} alt="Axis Bank" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <p className="text-lg font-bold text-gray-900 leading-tight">AP 05 1234</p>
                <p className="text-[13px] font-medium text-gray-500 mt-1">ViralPe Srinivas • Axis Bank • Car</p>
              </div>
            </div>

            {/* Balances */}
            <div className="flex gap-10">
              <div className="flex flex-col items-start">
                <span className="text-[13px] font-medium text-gray-500 mb-1">Current Balance</span>
                <span className="text-[20px] font-bold text-[#a5264b]">₹860.00</span>
              </div>

              <div className="flex flex-col items-start relative">
                <span className="text-[13px] font-medium text-gray-500 mb-1">Recommended Balance</span>
                <span className="text-[20px] font-bold text-gray-900">₹1000.00</span>
              </div>
            </div>
          </div>

          <hr className="border-gray-200" />
        </div>

        {/* Bottom Section: Recharge Amount & Scrollable Cards */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center relative">
              <h2 className="text-[22px] font-bold text-gray-900 tracking-tight">Select Recharge Amount</h2>
              {/* Info Tooltip Icon */}
              <div className="absolute -right-8 -top-3 w-7 h-7 bg-[#8c7a76] text-white rounded-full flex items-center justify-center text-sm font-serif italic shadow-md border-2 border-white cursor-help z-10">
                i
              </div>
            </div>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700 font-bold text-[18px]">₹</span>
              <input
                type="text"
                placeholder="Enter Amount"
                className="pl-9 pr-4 py-[14px] border border-gray-200 rounded-[14px] w-[260px] text-sm text-gray-800 font-semibold focus:outline-none focus:ring-1 focus:ring-gray-300 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Horizontal Scroll Cards Container */}
          <div className="flex gap-4 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {rechargeOptions.map((card, index) => {
              const isSelected = selectedAmount === card.amount;

              return (
                <div
                  key={index}
                  onClick={() => setSelectedAmount(card.amount)}
                  className={`min-w-[135px] p-[16px] rounded-xl border flex flex-col items-center justify-center gap-[8px] cursor-pointer shrink-0 transition-all duration-200 ${isSelected
                    ? 'border-[#822934] bg-[#fdf8f8]'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                >
                  <span className="text-[22px] font-extrabold text-gray-900 tracking-tight">
                    ₹{card.amount}
                  </span>
                  <span className="bg-[#eaf5ef] text-[#1a8b54] text-[11px] font-extrabold py-[4px] px-[10px] rounded-md uppercase tracking-wide">
                    {card.cashback}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
      <div className="w-full max-w-[837px] bg-white max-w-[837px] w-full max-h-[226px] rounded-[20px]">
        <h2 className="text-[26px] font-bold text-[#1C1B1B] mb-6 tracking-tight">Recent Recharges</h2>

        <div className="flex gap-5 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {recentRecharges.map((recharge) => (
            <div
              key={recharge.id}
              className="w-[340px] bg-white border border-gray-200 rounded-[24px] p-[20px] shrink-0 shadow-sm flex flex-col"
            >
              <div className="flex justify-between items-start">
                <div className="flex gap-4">
                  {/* Bank Logo Box */}
                  <div className="w-[64px] h-[64px] bg-[#FFF0F0] rounded-[18px] flex items-center justify-center p-2 border border-red-50">
                    {/* Replace this div with actual <img src={IdfcLogo} /> */}
                    <span className="text-[10px] font-bold text-[#8B1A21] text-center leading-tight">
                      {recharge.bank.split(' ')[0]}
                    </span>
                  </div>

                  {/* Recharge Details */}
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-900 text-[18px]">{recharge.vehicle}</span>
                    <span className="font-bold text-[#8B1A21] text-[16px] mt-[2px]">{recharge.amount}</span>
                    <span className="font-semibold text-[#8B1A21] text-[14px] mt-1 cursor-pointer hover:underline">
                      Continue Recharge
                    </span>
                  </div>
                </div>

                {/* More Options Menu */}
                <button className="text-gray-400 hover:text-gray-600 transition-colors mt-1">
                  <MoreVertical size={24} strokeWidth={2.5} />
                </button>
              </div>

              {/* Divider line */}
              <div className="w-full h-[1px] bg-gray-100 my-[14px]"></div>

              {/* Footer Date */}
              <span className="text-[13px] text-gray-500 font-medium">
                Last Recharge: {recharge.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FastagRechargeUI;