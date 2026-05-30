import React, { useState } from 'react';
import jio from "/images/jio.svg"
import airtel from "/images/airtel.svg"
import Vi from "../../../public/images/Vi.svg";
import Bsnl from "../../../public/images/bsnl.svg"
import tata from "../../../public/images/tataicon.svg"
import Frame_1 from "../../../public/images/Frame_1.png";
import Frame_2 from "../../../public/images/Frame_2.png";
import Appleicon from "../../../public/images/appleicon.png";
import playstoreicon from "../../../public/images/playstoreicon.png";
import thunder from "../../../public/images/thunder.svg";
import wallet from "../../../public/images/wallet1.svg";
import Greenthunder from "../../../public/images/greenthunder.svg";
import Greentick from "../../../public/images/greenTick.svg";
import discount from "../../../public/images/discount.svg";
import lock from "../../../public/images/lock.png"
import dishtv from "../../../public/images/dishtvicon.svg";
import gift from "../../../public/images/gift.svg";
import headphones from "../../../public/images/headphones.png";
import sundirect from "../../../public/images/sundirecticon.svg";
import { ArrowRight } from "lucide-react";
import FeatureBanner from '../Dashboard/FeatureBanner';
import { FeatureBannerCard } from "../../data/Dashboard";

// Mock Data for Recharge Plans
const plansData = [
    {
        id: 1,
        price: 299,
        plan: "HD Value Plus",
        cashback: "5% Cashback",
        validity: "28 Days",
        desc: "Add-On data pack..."
    },
    {
        id: 2,
        price: 499,
        plan: "Family Entertainment",
        cashback: "20% Cashback",
        validity: "90 Days",
        desc: "Ultimate plan..."
    }
];

const recentRecharges = [
    {
        image: tata,
        name: "Tata Play",
        id: "149805048",
        amount: "₹456",
        daysLeft: "25 Days Left",
        badgeClass: "text-[#2E7D32] bg-[#E8F5E9]",
        imageClass: "h-[36px] w-[36px]",
    },
    {
        image: dishtv,
        name: "DishTV",
        id: "90809 879988",
        amount: "₹456",
        daysLeft: "12 Days Left",
        badgeClass: "text-[#E65100] bg-[#FFF3E0]",
        imageClass: "h-[50px] w-[50px]",
    },
    {
        image: sundirect,
        name: "DishTV", 
        id: "90809 879988",
        amount: "₹456",
        daysLeft: "2 Days Left",
        badgeClass: "text-[#D32F2F] bg-[#FFEBEE]",
        imageClass: "h-[46px] w-[46px]",
    },
];

const dthOperators = [
    { type: "tata", logo: tata, label: "Tata Play", cashback: "5% Cashback" },
    { type: "dish", logo: dishtv, label: "Dish TV", cashback: "5% Cashback" },
    { type: "airtel", logo: airtel, label: "Airtel Digital TV", cashback: "5% Cashback" },
    { type: "sun", logo: sundirect, label: "Sun Direct", cashback: "5% Cashback" },
];

const categories = ['Made for You (06)', 'Popular', 'Monthly', 'Long-validity', 'Add-on Packs '];

export default function PrepaidRechargeSection() {
    const [selectedPlan, setSelectedPlan] = useState(plansData[0]);
    const [activeCategory, setActiveCategory] = useState('Made for You (06)');
    const [useWallet, setUseWallet] = useState(false);

    const subtotal = selectedPlan ? selectedPlan.price : 0;
    const cashbackAmount = selectedPlan ? Math.round((subtotal * parseInt(selectedPlan.cashback)) / 100) : 0;

    return (
        <div>
            <div className="min-h-screen p-4 md:p-8 font-sans antialiased text-gray-800">
                {/* Main container switches to stacked column layouts on tablet/mobile screens */}
                <div className="max-w-[1217px] mx-auto flex flex-col lg:flex-row justify-between gap-6">

                    {/* LEFT & CENTER: Main Selection Panel */}
                    <div className="flex flex-col gap-4 w-full lg:w-[837px]">

                        {/* Main Container Card - Cleared hardcoded mobile heights */}
                        <div className="bg-white min-h-[564px] rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 max-w-full">
                            <h2 className="text-xl font-bold mb-4 text-gray-900">DTH Recharge</h2>

                            {/* Top Identity Block */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-dashed border-gray-200 pb-6 mb-7">
                                <div className="flex items-center gap-3">
                                    <img src={tata} className='h-[36px] w-[36px]' alt="Tata" />
                                    <div>
                                        <div className="font-bold text-gray-900 break-all">14890765567</div>
                                        <div className="text-xs text-gray-400">TATA Play . +91 98987 48393</div>
                                    </div>
                                </div>

                                {/* Quick History Button */}
                                <div className="flex items-center gap-3 bg-white border-2 border-gray-100 rounded-xl p-3 sm:px-4">
                                    <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center text-pink-500 shrink-0">
                                        <img src={thunder} alt="quick-plan" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-semibold text-gray-900">Recharge with Last Plan</div>
                                        <div className="text-xs text-gray-500">₹156 • 28 Days</div>
                                    </div>
                                </div>
                            </div>

                            {/* Sub Header Search Menu */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 mt-6 sm:mt-10">
                                <h2 className="text-xl font-bold text-gray-900">Choose a Plan</h2>

                                <div className="flex items-center gap-2 w-full sm:w-auto">
                                    <div className="relative flex-1 sm:w-64">
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.603 10.602Z" />
                                            </svg>
                                        </span>
                                        <input
                                            type="text"
                                            placeholder="Search for a plan..."
                                            className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-400 transition"
                                        />
                                    </div>
                                    <button className="p-2 border border-gray-200 rounded-xl hover:bg-gray-50 text-gray-600 transition shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Categories Horizontal Scroll */}
                            <div className="flex overflow-x-auto pb-4 mb-6 no-scrollbar gap-3">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`whitespace-nowrap px-4 py-1.5 rounded-[12px] text-xs font-semibold tracking-wide border transition ${activeCategory === cat
                                            ? 'bg-[#901c27] border-amber-950 text-white'
                                            : 'bg-white border-gray-200 text-gray-500 hover:border-gray-300'
                                        }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>

                            {/* Plans Container - Replaced Grid with Flexbox */}
                            <div className='mt-6 sm:mt-10'>
                                <div className="flex flex-wrap gap-4">
                                    {plansData.map((plan) => {
                                        const isSelected = selectedPlan?.id === plan.id;
                                        return (
                                            <div
                                                key={plan.id}
                                                onClick={() => setSelectedPlan(plan)}
                                                className={`cursor-pointer rounded-2xl p-5 border transition-all flex flex-col justify-between relative w-full sm:w-[calc(50%-8px)] ${isSelected
                                                    ? 'border-red-800 bg-red-50/10 ring-1 ring-[#901C27] hover:bg-[#FFEDEE66]'
                                                    : 'border-gray-200 hover:border-gray-300 bg-white'
                                                }`}
                                            >
                                                <div>
                                                    {/* Top Banner Tag */}
                                                    <div className="absolute top-3 left-0 rounded-br-[20px] rounded-tl-[20px] -translate-y-1/2 bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-100">
                                                        {plan.cashback}
                                                    </div>

                                                    {/* Info Row */}
                                                    <div className="flex items-baseline justify-between mt-2 mb-4 gap-2">
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-base sm:text-xl font-semibold text-gray-900">{plan.plan}</span>
                                                        </div>
                                                        <div className="flex gap-4 text-right shrink-0">
                                                            <div>
                                                                <div className="text-[10px] uppercase tracking-wider text-gray-400">Validity</div>
                                                                <div className="text-xs font-bold text-gray-800">{plan.validity}</div>
                                                            </div>
                                                            <div>
                                                                <div className="text-[10px] uppercase tracking-wider text-gray-400">Price</div>
                                                                <div className="text-xs font-bold text-gray-800">₹{plan.price}</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Description */}
                                                    <p className="text-xs text-gray-500 leading-relaxed mb-6 line-clamp-3">
                                                        {plan.desc}
                                                    </p>
                                                </div>

                                                {/* Action Button */}
                                                <button
                                                    className={`w-full py-2 rounded-xl text-xs font-bold transition ${isSelected
                                                        ? 'bg-white border border-red-800 text-red-800'
                                                        : 'bg-white border border-red-800/30 text-red-800 hover:bg-red-50/50'
                                                    }`}
                                                >
                                                    {isSelected ? '✓ Selected' : `Recharge ₹${plan.price}`}
                                                </button>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Recent Recharges Card - Replaced Grid with Flexbox */}
                        <div className="w-full bg-white rounded-2xl p-4 sm:p-8 border border-gray-100 shadow-sm">
                            <h2 className="text-xl font-bold mb-6">Recent Recharges</h2>
                            <div className="flex flex-wrap gap-4">
                                {recentRecharges.map((recharge, index) => (
                                    <div
                                        key={index}
                                        className="border border-gray-100 rounded-2xl p-4 flex flex-col justify-between min-h-[131px] relative hover:shadow-md transition bg-white w-full sm:w-[calc(50%-8px)] md:w-[calc(33.333%-11px)]"
                                    >
                                        <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                            </svg>
                                        </button>

                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-12 h-12 rounded-xl flex items-center justify-center p-1 bg-white border border-gray-50 shrink-0">
                                                <img
                                                    src={recharge.image}
                                                    alt={recharge.name}
                                                    className={`${recharge.imageClass} object-contain`}
                                                />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm text-gray-900">{recharge.name}</h4>
                                                <p className="text-xs text-gray-400 font-medium">{recharge.id}</p>
                                                <p className="text-xs font-bold text-gray-800 mt-0.5">{recharge.amount}</p>
                                            </div>
                                        </div>

                                        <span className={`inline-block self-start text-[11px] font-semibold px-2.5 py-1 rounded-md ${recharge.badgeClass}`}>
                                            {recharge.daysLeft}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* All DTH Operators Card - Replaced Grid with Flexbox */}
                        <div className="w-full bg-white rounded-2xl p-4 sm:p-8 border border-gray-100 shadow-sm">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold">All DTH Operators</h2>
                                <a href="#view-all" className="text-[#800A1D] text-xs font-bold flex items-center gap-1 hover:underline">
                                    View More
                                    <ArrowRight size={14} />
                                </a>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                {dthOperators.map((operator, index) => (
                                    <div
                                        key={index}
                                        className="border border-gray-100 rounded-2xl p-4 flex flex-col items-center justify-between hover:shadow-md transition bg-white w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] md:w-[calc(25%-12px)] h-[140px]"
                                    >
                                        <div className="w-20 h-16 my-auto flex items-center justify-center">
                                            <img
                                                src={operator.logo}
                                                alt={operator.label}
                                                className="max-h-full max-w-full object-contain"
                                            />
                                        </div>
                                        <div className="w-full text-center mt-2">
                                            <span className="text-[10px] sm:text-[11px] font-bold text-[#2E7D32] bg-[#E8F5E9] px-2 py-1 rounded-[8px] block truncate">
                                                {operator.cashback}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Summary Sidebar Panel */}
                    <div className="flex flex-col gap-4 w-full lg:w-[348px]">

                        {/* Checkout Breakdown Card */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 w-full min-h-[500px] lg:h-[607px] flex flex-col justify-between">
                            <div>
                                <h2 className="text-lg font-bold mb-4 text-gray-900">Recharge Details</h2>

                                {/* Target Number */}
                                <div className="flex items-center justify-between pb-4 border-b border-dashed border-gray-200 mb-4">
                                    <div className="flex items-center gap-3">
                                        <img src={jio} alt="Operator" />
                                        <div>
                                            <div className="text-sm font-bold text-gray-900">+91 90000 00000</div>
                                            <div className="text-[11px] text-gray-400">Jio • Andhra Pradesh</div>
                                        </div>
                                    </div>
                                    <button className="text-xs font-semibold text-[#901c27]">Change</button>
                                </div>

                                {/* Price Calculations */}
                                <div className="space-y-3 text-sm text-gray-600 border-b border-dashed border-gray-200 pb-4 mb-4">
                                    <div className="flex justify-between">
                                        <span>Subtotal</span>
                                        <span className="font-semibold text-gray-900">₹{subtotal.toFixed(2)}</span>
                                    </div>

                                    {cashbackAmount > 0 && (
                                        <div className="flex justify-between text-emerald-600 font-medium">
                                            <span>Cashback Applied</span>
                                            <span>- ₹{cashbackAmount.toFixed(2)}</span>
                                        </div>
                                    )}

                                    <div className="flex justify-between items-center pt-2 border-t border-dashed border-gray-200">
                                        <span className="font-bold text-gray-900">Grand Total</span>
                                        <span className="text-lg font-extrabold text-red-800">
                                            ₹{(subtotal - cashbackAmount).toFixed(2)}
                                        </span>
                                    </div>
                                </div>

                                {/* Savings Notice */}
                                {cashbackAmount > 0 && (
                                    <div className="bg-emerald-50 text-emerald-700 text-xs font-medium p-2.5 rounded-xl text-center mb-5">
                                        You save ₹{cashbackAmount.toFixed(2)} on this recharge!
                                    </div>
                                )}

                                {/* Wallet Toggle Row */}
                                <div className="flex items-center justify-between bg-gray-50 border border-gray-100 p-3 rounded-xl mb-5">
                                    <div className="flex items-center gap-3">
                                        <div className="text-red-800 shrink-0">
                                            <img src={wallet} alt="Wallet" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-gray-900">Use ViralPe Wallet</div>
                                            <div className="text-[10px] text-gray-400">Available Balance : ₹175.00</div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => setUseWallet(!useWallet)}
                                        className={`w-9 h-5 flex items-center rounded-full p-0.5 transition-colors duration-200 focus:outline-none shrink-0 ${useWallet ? 'bg-red-800' : 'bg-gray-300'}`}
                                    >
                                        <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${useWallet ? 'translate-x-4' : 'translate-x-0'}`} />
                                    </button>
                                </div>
                            </div>

                            <div>
                                {/* Payment Button */}
                                <button className="w-full bg-[#901c27] text-white font-bold py-3 rounded-xl text-sm transition shadow-sm hover:bg-[#73141e]">
                                    Pay ₹{(subtotal - cashbackAmount).toFixed(2)}
                                </button>

                                {/* Badges Footer */}
                                <div className="flex justify-between items-center mt-5 text-[11px] sm:text-[12px] text-[#1C1B1BCC] px-1 gap-2">
                                    <span className="flex items-center gap-1">
                                        <img src={Greentick} alt="secure" />
                                        100% Secure
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <img src={Greenthunder} alt="instant" />
                                        Instant Recharge
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Promo banner 5% cashback */}
                        <div className="bg-[#FFF2F4] rounded-2xl p-6 relative overflow-hidden flex items-center justify-between border border-[#FFE1E5] w-full min-h-[120px]">
                            <div className="w-full max-w-[220px]">
                                <h4 className="text-[18px] sm:text-[20px] font-semibold text-[#1C1B1B]">
                                    Extra 5% Cashback
                                </h4>
                                <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                                    On DTH Recharge of ₹500 or more
                                </p>
                                <span className="text-[9px] text-gray-400 block mt-3 font-medium">
                                    *T&C Apply
                                </span>
                            </div>
                            <img src={gift} alt="Promo Gift" className="shrink-0" />
                        </div>

                        {/* Need Help Box */}
                        <div className="w-full min-h-[140px] bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center">
                            <div className="flex gap-4 sm:gap-[28px] w-full">
                                <div className="max-w-[50px] max-h-[50px] rounded-full h-12 w-12 shrink-0">
                                    <img src={headphones} className="h-full w-full" alt="Support" />
                                </div>
                                <div className="flex flex-col w-full">
                                    <h4 className="text-base font-bold text-gray-900">Need Help?</h4>
                                    <p className="text-xs text-gray-400 mt-1 mb-3 font-medium">
                                        Chat with our support teams
                                    </p>
                                    <button className="border border-[#800A1D] text-[#800A1D] font-bold text-xs px-4 py-2.5 rounded-xl hover:bg-[#800A1D] hover:text-white transition duration-200 flex items-center justify-center gap-2 self-start">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                        Chat Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div>
                <FeatureBanner cards={FeatureBannerCard} />
            </div>
        </div>
    );
}