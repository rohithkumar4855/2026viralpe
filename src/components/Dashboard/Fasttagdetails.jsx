import React, { useState } from 'react';
import { MoreVertical } from 'lucide-react';
import Axisicon from "../../../public/images/axisbankicon.svg";
import Axis from "../../../public/images/axis.svg";
import Bajaj from "../../../public/images/bajaj.svg";
import icic from "../../../public/images/iciclogo.svg";
import idfc from "../../../public/images/idfclogo.svg";
import { ArrowRight } from 'lucide-react';
import discount from "../../../public/images/discount.svg"
import Wallet from "../../../public/images/wallet2.svg"
import lock from "../../../public/images/lock.svg"
import Gift from "../../../public/images/gift.svg"
import headphones from "../../../public/images/earphones.svg"
import Thunder from "../../../public/images/thunder.svg"
import greentick from "../../../public/images/greenTick.svg"
import greenthunder from "../../../public/images/greenthunder.svg"
import FeatureBanner from "./FeatureBanner";
import { FeatureBannerCard2 } from "../../data/Dashboard";
import { banksData, fastagrecentRecharges, fastagReachargeOn, rechargeOptions } from "../../data/Dashboard"
import { PaymentModal } from "./PaymentModal"

const FastagRechargeUI = () => {
  const [selectedAmount, setSelectedAmount] = useState('300');
  const [useWallet, setUseWallet] = useState(true);
  const [popupStage, setPopupStage] = useState(null);

  // --- NEW STATE & LOGIC FOR WALLET SLIDER ---
  const [walletAmount, setWalletAmount] = useState(10);
  const baseAmount = 860;
  const availableWalletBalance = 1175;

  // You can't use more wallet balance than the total recharge amount
  const maxUsable = Math.min(baseAmount, availableWalletBalance);

  // If toggle is off, applied wallet is 0
  const appliedWallet = useWallet ? walletAmount : 0;
  const finalPayable = baseAmount - appliedWallet;
  const sliderPercentage = (walletAmount / maxUsable) * 100;
  
  return (
    <div className='gap-5'>
      <div className="max-w-[1217px] mx-auto  gap-4  flex md:flex-row flex-col  items-start">

        {/* --- NEW FASTAG RECHARGE BOX (LEFT COLUMN) --- */}
        <div className='flex flex-col gap-6 w-full lg:max-w-[837px]'>
          <div className="w-full bg-white rounded-3xl p-8 shadow-sm font-sans flex flex-col justify-between box-border">

            {/* Top Section: Account Details */}
            <div>
              <h1 className="md:md:text-[24px] font-bold md:text-[#1C1B1B] mb-6 tracking-tight">FASTag Recharge</h1>

              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
                {/* User & Vehicle Info */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-pink-50 rounded-xl flex items-center justify-center border border-pink-100 shrink-0">
                    <img src={Axisicon} alt="Axis Bank" className="w-8 h-8 object-contain" />
                  </div>
                  <div>
                    <p className="md:text-lg font-bold md:text-gray-900 leading-tight">AP 05 1234</p>
                    <p className="md:text-[13px] text-[13px] font-medium md:text-gray-500 mt-1">ViralPe Srinivas • Axis Bank • Car</p>
                  </div>
                </div>

                {/* Balances */}
                <div className="flex gap-10 ">
                  <div className="flex flex-col items-start">
                    <span className="md:text-[13px] font-medium md:text-gray-500 mb-1">Current Balance</span>
                    <span className="md:text-[20px] font-bold md:text-[#a5264b]">₹860.00</span>
                  </div>

                  <div className="flex flex-col items-start relative">
                    <span className="md:text-[13px] font-medium md:text-gray-500 mb-1">Recommended Balance</span>
                    <span className="md:text-[20px] font-bold md:text-gray-900">₹1000.00</span>
                  </div>
                </div>
              </div>

              <hr className="border-gray-200" />
            </div>

            {/* Bottom Section: Recharge Amount & Scrollable Cards */}
            <div className="mt-8 ">
              <div className="flex md:flex-row  flex flex-col  md:justify-between mb-6 gap-4">
                <div className="flex items-center relative w-fit">
                  <h2 className="md:text-[22px] font-bold md:text-gray-900 tracking-tight pr-6">Select Recharge Amount</h2>
                  {/* Info Tooltip Icon */}
                </div>

                <div className="relative  ">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 md:text-gray-700 font-bold md:text-[18px]">₹</span>
                  <input
                    type="text"
                    placeholder="Enter Amount"
                    className="pl-9 pr-4 py-[14px]  md:max-w-[293px] border border-gray-200 rounded-[14px] w-full  md:text-sm md:text-gray-800 font-semibold focus:outline-none focus:ring-1 focus:ring-gray-300 placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Horizontal Scroll Cards Container */}
              <div className="flex gap-4  overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {rechargeOptions.map((card, index) => {
                  const isSelected = selectedAmount === card.amount;

                  return (
                    <div
                      key={index}
                      onClick={() => setSelectedAmount(card.amount)}
                      className={`max-h-[90px] max-w-[100px] md:max-w-[123px] md:max-h-[72px] w-full p-2 rounded-[12px] border flex flex-col items-center justify-center  cursor-pointer shrink-0 transition-all duration-200 ${isSelected
                        ? 'border-[#822934] bg-[#fdf8f8]'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                    >
                      <span className="md:text-[24px]  text-[16px] font-extrabold md:text-gray-900 tracking-tight">
                        ₹{card.amount}
                      </span>
                      <span className="bg-[#eaf5ef] md:text-[#1a8b54] text-[10px] md:text-[13px] font-semibold   rounded-[8px] uppercase tracking-wide">
                        {card.cashback}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          <div className="bg-white w-full p-6 rounded-2xl shadow-sm border border-gray-100 shrink-0">
            <h2 className="md:text-[20px] font-bold md:text-gray-900 mb-5">Recent Recharges</h2>

            <div className="flex gap-4 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {fastagrecentRecharges.map((item, index) => (
                <div key={index} className="min-w-[280px] border border-gray-100 rounded-2xl p-4 flex flex-col bg-white shrink-0 hover:border-gray-200 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex gap-3 items-center">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.bg}`}>
                        <img src={item.logo} alt="logo" className="w-8 h-8 object-contain" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold md:text-gray-900 md:text-[14px]">{item.vehicle}</span>
                        <span className="font-bold md:text-[#8C1822] md:text-[13px] mt-0.5">{item.amount}</span>
                        <span className="md:text-[#8C1822] md:text-[11px] font-bold mt-1 cursor-pointer hover:underline">Continue Recharge</span>
                      </div>
                    </div>
                    <button className="md:text-gray-400 hover:md:text-gray-700">
                      <MoreVertical size={18} />
                    </button>
                  </div>
                  <div className="w-full h-px bg-gray-100 my-2"></div>
                  <span className="md:text-gray-400 font-medium md:text-[11px]">Last Recharge: {item.date}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white w-full p-6 rounded-2xl shadow-sm border border-gray-100 shrink-0">
            <div className="flex justify-between items-center mb-5">
              <h2 className="md:text-[20px] font-bold md:text-gray-900">All FASTag Issuers</h2>
              <button className="md:text-[#8C1822] md:text-[13px] font-bold flex items-center gap-1 hover:underline cursor-pointer">
                View More <ArrowRight size={15} />
              </button>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {banksData.map((bank, index) => (
                <div
                  key={index}
                  className="border border-gray-100 shadow-sm rounded-2xl p-4 flex flex-col items-center justify-center md:text-center cursor-pointer min-w-[128px] h-[139px] gap-5 shrink-0 hover:border-gray-200 transition-colors"
                >
                  <img
                    src={bank.logo}
                    alt={bank.name}
                    className="w-[80px] h-[50px] object-contain mx-auto"
                  />
                  <span className="md:text-[11px] font-bold md:text-[#069341] bg-emerald-50 px-3 py-1.5 rounded-md w-full whitespace-nowrap">
                    {bank.cb}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN --- */}
        <div className='flex flex-col gap-3 '>
          <div className="p-3  md:max-w-[348px] md:max-h-[604px] rounded-[16.69px] w-full h-full  bg-white flex flex-col font-sans box-border relative shadow-sm">
            <h2 className="md:text-[22px] font-bold md:text-gray-900 mb-4 tracking-tight">
              Recharge Details
            </h2>

            {/* Account Info */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-[52px] h-[52px] rounded-xl bg-[#fff0f3] flex flex-col items-center justify-center md:text-[#861d33] shrink-0">
                  <img src={Axisicon} />
                </div>
                <div>
                  <div className="font-bold md:text-gray-900 md:text-[15px] mb-0.5">
                    AP 05 1234
                  </div>
                  <div className="md:text-[11px] md:text-gray-500">
                    ViralPe Srinivas . Axis bank . Car
                  </div>
                </div>
              </div>
              <button className="md:text-[#861d33] md:text-[12px] font-semibold hover:underline">
                Change
              </button>
            </div>

            <hr className="border-gray-200 mb-2" />

            {/* Amounts */}
            <div className="flex justify-between items-center mb-3 mt-1">
              <span className="md:text-[14px] md:text-gray-600">Recharge Amount</span>
              <span className="font-bold md:text-[15px] md:text-gray-900">₹{baseAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="md:text-[14px] md:text-gray-600">Tax</span>
              <span className="font-bold md:text-[15px] md:text-gray-900">₹ 00.00</span>
            </div>

            <hr className="border-gray-200 mb-3" />

            {/* Total Payable */}
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold md:text-[#861d33] md:text-[16px]">
                Total Payable
              </span>
              <span className="font-bold md:text-[#861d33] md:text-[17px]">
                ₹ {finalPayable.toFixed(2)}
              </span>
            </div>

            {/* Cashback Banner */}
            <div className="bg-[#eaf5ec] rounded-lg py-2.5 px-3 mb-6 flex items-center">
              <span className="md:text-[13px] md:text-gray-800">
                You Earn <span className="font-bold md:text-[#00a859]">₹22</span> cashback
                on this recharge
              </span>
            </div>

            <hr className="border-gray-200 mb-5" />

            {/* Wallet Toggle */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 md:text-[#861d33] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2v-5z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12H15a2 2 0 00-2 2v0a2 2 0 002 2h6"></path>
                </svg>
                <div>
                  <div className="font-bold md:text-[14px] md:text-gray-900">
                    Use ViralPe Wallet
                  </div>
                  <div className="md:text-[11px] md:text-gray-500 mt-0.5">
                    Available Balance : ₹{availableWalletBalance.toFixed(2)}
                  </div>
                </div>
              </div>
              {/* Toggle Switch */}
              <div
                className={`w-11 h-6 flex items-center shrink-0 rounded-full p-1 cursor-pointer transition-colors duration-300 ${useWallet ? "bg-[#861d33]" : "bg-gray-300"
                  }`}
                onClick={() => setUseWallet(!useWallet)}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${useWallet ? "translate-x-5" : "translate-x-0"
                    }`}
                ></div>
              </div>
            </div>


            {/* FUNCTIONAL SLIDER */}
            <div className={`mt-12 mb-8 px-2 relative w-full transition-opacity duration-300 ${useWallet ? 'opacity-100' : 'opacity-40 pointer-events-none'}`}>

              {/* Invisible interactive range input */}
              <input
                type="range"
                min="0"
                max={maxUsable}
                value={walletAmount}
                onChange={(e) => setWalletAmount(Number(e.target.value))}
                className="absolute top-1/2 -translate-y-1/2 w-full h-8 opacity-0 cursor-pointer z-30 m-0"
              />

              {/* Clean White Tooltip Design */}
              <div
                className="absolute bottom-5 transform -translate-x-1/2 z-20 flex flex-col items-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.08)] transition-all duration-75"
                style={{ left: `${sliderPercentage}%` }}
              >
                {/* Main Bubble */}
                <div className="bg-white px-5 py-2.5 rounded-[14px] font-medium md:text-[16px] md:text-gray-900 tracking-wide">
                  ₹{walletAmount}
                </div>
                {/* Seamless Pointer */}
                <div className="w-3.5 h-3.5 bg-white transform rotate-45 -mt-2 rounded-[2px]"></div>
              </div>

              {/* Track & Thumb */}
              <div className="w-full bg-gray-200 h-[5px] rounded-full relative flex items-center pointer-events-none">
                {/* Filled Track */}
                <div
                  className="bg-[#861d33] h-[5px] rounded-full transition-all duration-75"
                  style={{ width: `${sliderPercentage}%` }}
                ></div>
                {/* Thumb */}
                <div
                  className="w-[26px] h-[26px] bg-[#fff0f3] border-[3px] border-[#861d33] rounded-full absolute shadow-sm z-20 transform -translate-x-1/2 transition-all duration-75"
                  style={{ left: `${sliderPercentage}%` }}
                ></div>
              </div>
            </div>

            {/* Pay Button */}
            <button
              onClick={() => setPopupStage('payment')}
              className="w-full bg-[#861d33] hover:bg-[#6c1729] text-white font-semibold py-3.5 rounded-[10px] md:text-[16px] mb-auto transition-colors">
              Pay ₹{finalPayable.toFixed(2)}
            </button>

            {/* Footer Features */}
            <div className="flex justify-between items-center md:text-[11px] md:text-gray-500 px-1 pb-1 pt-4">
              <div className="flex items-center gap-1.5">
                <img src={greentick} />
                100% Secure Payments
              </div>
              <div className="flex items-center gap-1.5">
                <img src={greenthunder} />
                Instant Recharge
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white w-full h-full md:max-w-[348px] md:max-h-[260px] p-4 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="md:text-lg font-bold mb-4">Why Recharge On ViralPe?</h3>
              <div className="space-y-4">
                {fastagReachargeOn.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center flex-shrink-0">
                      <img src={item.icon} alt={item.title} className="w-5 h-5 object-contain" />
                    </div>
                    <div>
                      <h4 className="md:text-sm font-semibold">{item.title}</h4>
                      <p className="md:text-xs md:text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className='mt-4'>
        <FeatureBanner cards={FeatureBannerCard2} />
      </div>
      <PaymentModal
        popupStage={popupStage}
        setPopupStage={setPopupStage}
        totalPrice={finalPayable}
        totalSavings={appliedWallet}
        categories={[{ title: "FASTag Recharge" }]}
      />
    </div>
  );
};

export default FastagRechargeUI;