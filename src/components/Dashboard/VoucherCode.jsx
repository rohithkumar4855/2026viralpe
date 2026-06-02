import React, { useState } from 'react';
import { Gift, Share2, Copy, ChevronDown, MessageSquare, ChevronUp, X } from 'lucide-react';
import headphones from "../../../public/images/earphones.svg";
import Myntra from "../../../public/images/myntra.png";
import Addproducticon from "../../../public/images/addproducts.svg";
import Cardicon from "../../../public/images/cardicon.svg";
import voucher from "../../../public/images/voucher.svg";
import code from "../../../public/images/code.svg";

const steps = [
    { iconSrc: Addproducticon, title: 'Add Products', desc: 'Add Products to your cart on Myntra.' },
    { iconSrc: Cardicon, title: 'Go to Payment Page', desc: 'Go to Payment Page.' },
    { iconSrc: voucher, title: 'Select Voucher', desc: 'Select Voucher as Payment Option.' },
    { iconSrc: code, title: 'Enter Voucher Code', desc: 'Enter voucher code to apply the discount.' },
];

const VoucherDetailCard = () => {
    // Accordion visibility tap states
    const [isTermsOpen, setIsTermsOpen] = useState(false);
    const [isVoucherDetailsOpen, setIsVoucherDetailsOpen] = useState(true);

    return (
        <div className="w-full max-w-[1217px] mx-auto p-4 md:p-6 select-none">
            {/* OUTER CONTAINER LAYOUT WRAPPER */}
            <div className="flex flex-col lg:flex-row gap-6 items-start w-full">
                
                {/* LEFT PRIMARY CONTENT COLUMN */}
                <div className="flex flex-col gap-5 w-full flex-1">

                    {/* Top Card: Brand and Cashback Info */}
                    <div className="w-full bg-white border border-gray-100 rounded-[20px] p-6 shadow-sm font-sans box-border">
                        {/* Top Section: Brand and Amount */}
                        <div className="flex items-center gap-4 mb-5">
                            <div className="flex items-center justify-center shrink-0">
                                <img
                                    src={Myntra}
                                    alt="Myntra Logo"
                                    className="w-[73px] h-[63px] object-contain"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[16px] text-[#1C1B1BCC] font-semibold">Myntra</span>
                                <span className="text-[24px] font-bold text-[#1C1B1B] leading-none mt-1">₹700</span>
                            </div>
                        </div>

                        <hr className="border-gray-100 mb-5" />

                        {/* Bottom Section: Purchase Info and Cashback */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4 sm:gap-2 px-2">
                            {/* Left Column: Purchased On */}
                            <div className="flex items-center gap-4 flex-1">
                                <div className="w-[46px] h-[46px] rounded-[14px] bg-[#FFF0F2] flex items-center justify-center flex-shrink-0 text-[#8C1822]">
                                    <Gift size={22} strokeWidth={2} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[12px] text-gray-500 font-medium">Purchased On</span>
                                    <span className="text-[15px] font-bold text-gray-900 mt-0.5 tracking-tight">30 Apr 2026, 10:19 AM</span>
                                </div>
                            </div>

                            {/* Divider: Vertical on desktop, Horizontal on mobile */}
                            <div className="hidden sm:block w-px h-[40px] bg-gray-200 mx-6"></div>
                            <div className="block sm:hidden w-full h-px bg-gray-100 my-1"></div>

                            {/* Right Column: Cashback Earned */}
                            <div className="flex items-center gap-4 flex-1">
                                <div className="w-[46px] h-[46px] rounded-[14px] bg-[#FFF0F2] flex items-center justify-center flex-shrink-0 text-[#8C1822]">
                                    <Gift size={22} strokeWidth={2} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[12px] text-gray-500 font-medium">Cashback Earned</span>
                                    <span className="text-[16px] font-bold text-[#00a859] mt-0.5 tracking-tight">₹30</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Card: Voucher Code Details */}
                    <div className="w-full bg-white border border-gray-100 rounded-[20px] p-6 shadow-sm font-sans box-border">
                        <h2 className="text-[18px] font-bold text-gray-900 mb-6 px-2">Voucher Code</h2>

                        {/* Dashed Box Container */}
                        <div className="w-full max-w-[527px] mx-auto border-[1.5px] border-dashed border-[#8C1822] bg-[#FFEDEE66] rounded-[24.69px] py-10 px-4 sm:px-8 flex flex-col items-center justify-center mb-4">
                            <h3 className="text-[20px] sm:text-[24px] font-semibold text-[#901C27] mb-2 text-center tracking-wide break-all">
                                VPAMY524973648
                            </h3>
                            <p className="text-[14px] sm:text-[15px] text-[#1C1B1B99] text-center max-w-[340px]">
                                This is a unique code. Do not share it with anyone
                            </p>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full mt-6">
                                <button className="w-full sm:flex-1 max-w-[199px] h-[48px] flex items-center justify-center gap-2 py-3 px-4 rounded-[12.35px] border border-[#8C1822] text-[#8C1822] font-semibold text-[15px] hover:bg-rose-50/50 transition-colors active:scale-98">
                                    <Share2 size={18} strokeWidth={2.5} />
                                    <span className="text-[16px]">Share</span>
                                </button>
                                <button className="w-full sm:flex-1 max-w-[230px] h-[48px] flex items-center justify-center gap-2 py-3 px-4 rounded-[12.35px] bg-[#901c27] text-white font-semibold text-[15px] hover:bg-[#6e131b] transition-colors active:scale-98">
                                    <Copy size={18} strokeWidth={2.5} />
                                    <span className="text-[16px]">Copy Code</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* How to Use Section */}
                    <div className="w-full bg-white border border-gray-100 rounded-[20px] p-6 sm:p-8 shadow-sm font-sans box-border">
                        <h2 className="text-[22px] font-bold text-gray-900 mb-8">How to Use?</h2>

                        {/* Horizontal scrolling on small viewports, flat row layout on desktop */}
                        <div className="flex flex-row overflow-x-auto lg:overflow-x-visible items-start justify-between gap-4 pb-3 lg:pb-0 custom-scrollbar">
                            {steps.map((step, index) => (
                                <React.Fragment key={index}>
                                    {/* Step Item */}
                                    <div className="flex flex-col items-center text-center min-w-[140px] sm:min-w-[160px] lg:min-w-0 flex-1">
                                        <div className="w-[60px] h-[60px] rounded-2xl flex items-center justify-center text-[#8C1822] mb-2">
                                            <img
                                                src={step.iconSrc}
                                                alt={step.title}
                                                className="w-[54px] h-[54px] object-contain"
                                            />
                                        </div>
                                        <h3 className="text-[15px] font-bold text-gray-900 mb-1 whitespace-nowrap">{step.title}</h3>
                                        <p className="text-[12px] text-gray-500 leading-tight px-1">{step.desc}</p>
                                    </div>

                                    {/* Responsive Connective Vector Arrows */}
                                    {index < steps.length - 1 && (
                                        <div className="text-[#8C1822] mt-5 flex-shrink-0 opacity-40 hidden sm:block">
                                            <svg width="48" height="24" viewBox="0 0 64 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <line x1="0" y1="12" x2="58" y2="12" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                                                <path d="M54 7L60 12L54 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    {/* Interactive Terms & Conditions Accordion Row */}
                    <div className="w-full bg-white border border-gray-100 rounded-[20px] p-6 shadow-sm font-sans box-border flex flex-col">
                        <div 
                            className="flex items-center justify-between cursor-pointer"
                            onClick={() => setIsTermsOpen(!isTermsOpen)}
                        >
                            <h1 className="text-[18px] font-bold text-gray-900">Terms & Conditions</h1>
                            <ChevronDown size={24} className={`text-gray-500 transition-transform duration-200 ${isTermsOpen ? 'rotate-180' : ''}`} />
                        </div>
                        <div className={`transition-all duration-300 overflow-hidden ${isTermsOpen ? 'max-h-[500px] mt-4' : 'max-h-0'}`}>
                            <div className="text-sm text-gray-600 space-y-2 border-t border-gray-50 pt-3 leading-relaxed">
                                <p>• This voucher code can only be redeemed on official Myntra properties (App / Web).</p>
                                <p>• Multiple vouchers cannot be combined in a single checkout processing sequence.</p>
                                <p>• Validity period cannot be extended post expiration processing window rules.</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* RIGHT SIDEBAR COLUMN WIDGETS LAYOUT */}
                <div className="flex flex-col gap-4 w-full lg:w-[384px] shrink-0">
                    
                    {/* Need Help Box */}
                    <div className="w-full bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                        <div className="flex gap-6 items-start">
                            <div className="shrink-0">
                                <img src={headphones} alt="Headphones" className="w-[51px] h-[50px] object-contain" />
                            </div>
                            <div className="flex flex-col flex-1">
                                <h4 className="text-base font-bold text-gray-900">Need Help?</h4>
                                <p className="text-xs text-gray-500 mt-1 max-w-[200px]">
                                    Chat with our support teams
                                </p>
                                <button className="mt-5 w-fit border border-[#6F0014] text-[#6F0014] font-bold text-sm px-6 py-2.5 rounded-xl hover:bg-rose-50/50 transition flex items-center gap-2 cursor-pointer active:scale-98">
                                    <MessageSquare size={16} />
                                    <span>Chat Now</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Interactive Voucher Details Sidebar Card */}
                    <div className="w-full bg-white border border-gray-100 rounded-[20px] p-6 shadow-sm font-sans box-border flex flex-col">
                        {/* Interactive Header Wrapper */}
                        <div 
                            className="flex items-center justify-between cursor-pointer"
                            onClick={() => setIsVoucherDetailsOpen(!isVoucherDetailsOpen)}
                        >
                            <h2 className="text-[20px] font-bold text-gray-900">Voucher Details</h2>
                            <ChevronUp size={24} className={`text-gray-800 transition-transform duration-200 ${isVoucherDetailsOpen ? '' : 'rotate-180'}`} />
                        </div>

                        {/* Drawer Dropdown Body content element */}
                        <div className={`transition-all duration-300 overflow-hidden ${isVoucherDetailsOpen ? 'max-h-[500px] mt-6' : 'max-h-0'}`}>
                            <div className="flex flex-col gap-4 pb-2">
                                {/* Voucher ID */}
                                <div className="flex items-center justify-between text-[14px]">
                                    <span className="text-gray-500 font-medium">Voucher ID</span>
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-gray-900">VPPE12344567890</span>
                                        <Copy size={16} className="text-[#8C1822] cursor-pointer hover:text-[#6e131b] transition-colors" />
                                    </div>
                                </div>

                                {/* Amount */}
                                <div className="flex items-center justify-between text-[14px]">
                                    <span className="text-gray-500 font-medium">Amount</span>
                                    <span className="font-bold text-gray-900">₹700</span>
                                </div>

                                {/* Amount Paid by UPI */}
                                <div className="flex items-center justify-between text-[14px]">
                                    <span className="text-gray-500 font-medium">Amount Paid by UPI</span>
                                    <span className="font-bold text-gray-900">₹100.00</span>
                                </div>

                                {/* Amount Paid by Wallet */}
                                <div className="flex items-center justify-between text-[14px]">
                                    <span className="text-gray-500 font-medium">Amount Paid by ViralPe Wallet</span>
                                    <span className="font-bold text-gray-900">₹99.00</span>
                                </div>

                                {/* Wallet Transaction ID */}
                                <div className="flex items-center justify-between text-[14px]">
                                    <span className="text-gray-500 font-medium">Wallet Transaction ID</span>
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-gray-900">WLT1234568908</span>
                                        <Copy size={16} className="text-[#8C1822] cursor-pointer hover:text-[#6e131b] transition-colors" />
                                    </div>
                                </div>

                                {/* Date & Time */}
                                <div className="flex items-center justify-between text-[14px]">
                                    <span className="text-gray-500 font-medium">Date & Time</span>
                                    <span className="font-bold text-gray-900">07 May 2026, 10:16AM</span>
                                </div>

                                {/* Transaction Status */}
                                <div className="flex items-center justify-between text-[14px]">
                                    <span className="text-gray-500 font-medium">Transaction Status</span>
                                    <span className="font-bold text-[#00a859]">Success</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default VoucherDetailCard;
