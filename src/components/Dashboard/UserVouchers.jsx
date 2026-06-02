import React, { useState } from 'react';
import { Search, ChevronUp, ChevronDown, Check, MessageSquare, IndianRupee, Gift, Percent } from 'lucide-react';
// Assuming you have these SVGs locally. If not, replace them with standard <img> tags or placeholder divs.
import Giftbox from "../../../public/images/giftbox.svg";
import headphones from "../../../public/images/earphones.svg";
import Myntra from "../../../public/images/myntra.png"
import StarBucks from "/images/starbucks.png"
import Nike from "/images/nike.png"
import Trends from "/images/trends.svg"
import ticketicon from "/images/ticketicon.svg"
import { useNavigate } from 'react-router-dom';
import { myvouchersData } from "../../data/Dashboard";
// --- Mock Data for Vouchers ---

const CashbackCard = () => {
    const navigate = useNavigate();
    // --- Filter Sidebar States ---
    const [brandsOpen, setBrandsOpen] = useState(true);
    const [sortOpen, setSortOpen] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedBrands, setSelectedBrands] = useState(['Myntra', 'Nykaa']);
    const [selectedSort, setSelectedSort] = useState([]);

    const brands = ['Myntra', 'Nykaa', 'Zomato', 'Swiggy'];
    const sortOptions = ['Price Low to High', 'Price High to Low', 'A-Z', 'Z-A'];

    const toggleBrand = (brand) => {
        setSelectedBrands(prev =>
            prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
        );
    };

    const toggleSort = (sortOption) => {
        setSelectedSort(prev =>
            prev.includes(sortOption) ? prev.filter(s => s !== sortOption) : [...prev, sortOption]
        );
    };

    // --- Voucher List States ---
    const [activeTab, setActiveTab] = useState('All (09)');
    const [voucherSearch, setVoucherSearch] = useState('');
    const [vouchers, setVouchers] = useState(myvouchersData);
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    const toggleVoucherExpand = (id) => {
        setVouchers(vouchers.map(v =>
            v.id === id ? { ...v, expanded: !v.expanded } : v
        ));
    };

    // --- EXTRACTED FILTER COMPONENT (Used to swap columns on mobile/desktop) ---
    const filterContent = (
        <div className="w-full md:w-auto">
            {/* Mobile Filter Button */}
            <button
                onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                className="md:hidden w-full bg-white border border-gray-200 text-gray-900 py-2.5 px-4 rounded-xl shadow-sm font-bold flex justify-between items-center mb-4"
            >
                Filters
                {isMobileFilterOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {/* Filter Container */}
            <div className={`w-full md:w-[384px] bg-white rounded-xl shadow-sm border border-gray-100 p-5 font-sans text-gray-800 shrink-0 ${isMobileFilterOpen ? 'block' : 'hidden md:block'}`}>
                <h2 className="text-[18px] font-bold text-gray-900 mb-5">Filter</h2>
                <div className="mb-4">
                    <button onClick={() => setBrandsOpen(!brandsOpen)} className="flex items-center justify-between w-full mb-3">
                        <div className="flex items-center">
                            <span className="text-[14px] font-bold text-gray-900">Brands</span>
                            <span className="text-[#8C1822] text-[12px] font-medium ml-1">
                                ({selectedBrands.length.toString().padStart(2, '0')})
                            </span>
                        </div>
                        {brandsOpen ? <ChevronUp size={16} className="text-gray-900" /> : <ChevronDown size={16} className="text-gray-900" />}
                    </button>
                    {brandsOpen && (
                        <div className="space-y-3">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                                <input
                                    type="text"
                                    placeholder="Search brands"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-8 pr-3 py-1.5 bg-white border border-gray-200 rounded-lg text-[13px] placeholder-gray-400 focus:outline-none focus:border-[#8C1822] transition-colors"
                                />
                            </div>
                            <div className="space-y-2.5 pt-1">
                                {brands.map((brand) => (
                                    <label key={brand} className="flex items-center justify-between cursor-pointer group">
                                        <span className="text-[13px] text-gray-700">{brand}</span>
                                        <div
                                            className={`w-[18px] h-[18px] rounded flex items-center justify-center transition-colors border ${selectedBrands.includes(brand) ? 'bg-[#8C1822] border-[#8C1822]' : 'border-gray-300 bg-white group-hover:border-gray-400'}`}
                                            onClick={() => toggleBrand(brand)}
                                        >
                                            {selectedBrands.includes(brand) && <Check size={12} className="text-white" strokeWidth={3} />}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                <hr className="border-gray-100 my-4" />
                <div>
                    <button onClick={() => setSortOpen(!sortOpen)} className="flex items-center justify-between w-full mb-4">
                        <span className="text-[14px] font-bold text-gray-900">Sort By</span>
                        {sortOpen ? <ChevronUp size={16} className="text-gray-900" /> : <ChevronDown size={16} className="text-gray-900" />}
                    </button>
                    {sortOpen && (
                        <div className="space-y-3 ">
                            {sortOptions.map((option) => (
                                <label key={option} className="flex items-center justify-between cursor-pointer group">
                                    <span className="text-[13px] text-gray-700">{option}</span>
                                    <div
                                        className={`w-[18px] h-[18px] rounded flex items-center justify-center transition-colors border ${selectedSort.includes(option) ? 'bg-[#8C1822] border-[#8C1822]' : 'border-gray-300 bg-white group-hover:border-gray-400'}`}
                                        onClick={() => toggleSort(option)}
                                    >
                                        {selectedSort.includes(option) && <Check size={12} className="text-white" strokeWidth={3} />}
                                    </div>
                                </label>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <div className='mx-auto flex min-h-screen p-4 md:p-0'>

            {/* Main Wrapper: flex-col-reverse pushes the Vouchers to the top on mobile */}
            <div className="flex flex-col-reverse md:flex-row gap-6 items-start w-full">

                {/* ========================================== */}
                {/* --- LEFT COLUMN: Promo, Filter, Help --- */}
                {/* ========================================== */}
                <div className="flex flex-col gap-6 w-full md:w-auto">

                    {/* 1. Cashback Promo */}
                    <div className="w-full md:w-[384px] h-auto md:h-[216px] relative bg-[#FFEDEE] rounded-[20px] flex overflow-hidden font-sans shadow-sm shrink-0 border border-rose-100">
                        <div className="w-[60%] md:w-1/2 p-5 md:p-6 flex flex-col justify-between z-10">
                            <div className="flex flex-col gap-2 mt-2 md:mt-0">
                                <h2 className="text-[18px] md:text-[20px] font-bold text-gray-900 leading-tight">
                                    Extra 5% Cashback
                                </h2>
                                <p className="text-[13px] md:text-[14px] text-gray-600 font-medium tracking-wide">
                                    On brand vouchers
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 md:gap-3 mt-4">
                                <button className="bg-[#7c1424] hover:bg-[#63101d] transition-colors text-white font-semibold text-[14px] md:text-[15px] py-2 md:py-2.5 px-5 md:px-6 rounded-xl w-fit whitespace-nowrap">
                                    Shop Now
                                </button>
                                <span className="text-[9px] text-gray-500 font-medium pl-1">
                                    *T&C Apply
                                </span>
                            </div>
                        </div>
                        <div className="w-[40%] md:w-1/2 absolute relative bottom-6 flex items-center justify-center">
                            <img
                                src={Giftbox}
                                alt="Giftbox"
                                className="w-[180px] h-[180px] md:w-[257px] md:h-[257px] max-w-none absolute right-[-40px] md:right-[-20px] top-1/2 transform -translate-y-1/2 object-contain"
                            />
                        </div>
                    </div>

                    {/* 2. Filter Sidebar (VISIBLE ONLY ON DESKTOP in this column) */}
                    <div className="hidden md:block w-full">
                        {filterContent}
                    </div>

                    {/* 3. Need Help Widget */}
                    <div className="w-full md:w-[384px] h-auto md:max-h-[151px] bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col box-border shrink-0">
                        <div className="flex gap-4 md:gap-7 items-center md:items-start">
                            <div className="shrink-0">
                                <img src={headphones} alt="Headphones" className="w-[45px] h-[44px] md:w-[51px] md:h-[50px]" />
                            </div>
                            <div className="flex flex-col w-full">
                                <h4 className="text-[15px] md:text-base font-bold text-gray-900">Need Help?</h4>
                                <p className="text-[11px] md:text-xs text-gray-500 mt-1 max-w-[200px]">
                                    Chat with our support teams
                                </p>
                                <button className="mt-4 md:mt-5 border border-[#6F0014] text-[#6F0014] font-bold text-[13px] md:text-sm px-5 md:px-6 py-2 md:py-2.5 rounded-xl hover:bg-rose-50/50 transition flex items-center justify-center md:justify-start gap-2 w-full md:w-fit cursor-pointer">
                                    <MessageSquare size={16} />
                                    <span>Chat Now</span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                {/* ========================================== */}
                {/* --- RIGHT COLUMN: Summary & List Cards --- */}
                {/* ========================================== */}
                <div className="flex flex-col gap-6 w-full md:w-auto">

                    {/* --- Summary Card --- */}
                    <div className="w-full md:w-[790px] h-auto md:h-[216px] bg-white rounded-[20px] shadow-sm border border-gray-100 p-5 md:p-8 flex flex-col justify-center font-sans box-border shrink-0">
                        <h2 className="text-[20px] md:text-[22px] font-bold text-gray-900 mb-5 md:mb-6">My Vouchers</h2>
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-5 md:gap-0">
                            
                            <div className="flex items-center gap-4 md:gap-5 flex-1 pl-0 md:pl-2">
                                <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-2xl bg-[#FFF0F2] flex flex-shrink-0 items-center justify-center text-[#8C1822]">
                                    <Gift size={24} className="md:w-7 md:h-7" strokeWidth={1.75} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[13px] md:text-[15px] text-gray-500 font-medium">Total Vouchers</span>
                                    <span className="text-[24px] md:text-[32px] font-extrabold text-gray-900 leading-[1.1] mt-1">35</span>
                                    <span className="text-[12px] md:text-[13px] text-gray-500 font-medium mt-1 md:mt-1.5">Across all categories</span>
                                </div>
                            </div>

                            <div className="w-full h-[1px] md:w-[1.5px] md:h-[85px] bg-gray-200 my-1 md:my-0 md:mx-4"></div>
                            
                            <div className="flex items-center gap-4 md:gap-5 flex-1 pl-0 md:pl-12">
                                <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-2xl bg-[#FFF0F2] flex flex-shrink-0 items-center justify-center text-[#8C1822]">
                                    <IndianRupee size={24} className="md:w-7 md:h-7" strokeWidth={1.75} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[13px] md:text-[15px] text-gray-500 font-medium">Total Value</span>
                                    <span className="text-[24px] md:text-[32px] font-extrabold text-gray-900 leading-[1.1] mt-1">₹350.00</span>
                                    <span className="text-[12px] md:text-[13px] text-gray-500 font-medium mt-1 md:mt-1.5">of all vouchers</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* --- Filter Sidebar (VISIBLE ONLY ON MOBILE in this column) --- */}
                    <div className="block md:hidden w-full">
                        {filterContent}
                    </div>

                    {/* --- Voucher List Details Card --- */}
                    <div className="w-full md:w-[800px] h-auto md:h-[605px] overflow-y-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-8 font-sans box-border shrink-0">

                        {/* Header & Search */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-5 md:mb-8 gap-4 md:gap-0">
                            <h2 className="text-[16px] font-medium text-gray-600">My Vouchers</h2>
                            <div className="relative w-full md:w-[320px]">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                <input
                                    type="text"
                                    placeholder="Search by name, service or amount.."
                                    value={voucherSearch}
                                    onChange={(e) => setVoucherSearch(e.target.value)}
                                    className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-[13px] placeholder-gray-400 focus:outline-none focus:border-[#8C1822] transition-colors"
                                />
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="flex gap-2 md:gap-3 mb-6 md:mb-8 overflow-x-auto pb-2 scrollbar-hide">
                            {['All (09)', 'Available', 'Redeemed'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 md:px-6 py-2 rounded-[9.3px] text-[12px] md:text-[13px] font-medium transition-colors border whitespace-nowrap ${activeTab === tab
                                        ? 'bg-[#8C1822] text-white border-[#8C1822]'
                                        : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Accordion List */}
                        <div className="flex flex-col">
                            {vouchers.map((voucher, index) => (
                                <div key={voucher.id} className="border-b border-gray-100 last:border-0 pb-5 md:pb-6 mb-5 md:mb-6 last:pb-0 last:mb-0">

                                    {/* Main Row */}
                                    <div
                                        className="flex justify-between items-center cursor-pointer select-none group"
                                        onClick={() => toggleVoucherExpand(voucher.id)}
                                    >
                                        <div className="flex items-center gap-3 md:gap-4 w-full">
                                            {/* --- FIXED LOGO IMAGE RENDERING --- */}
                                            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shrink-0">
                                                <img
                                                    src={voucher.logoSrc}
                                                    alt={`${voucher.brand} logo`}
                                                    className="w-7 h-7 md:w-8 md:h-8 object-contain"
                                                />
                                            </div>
                                            <div className="flex flex-col w-full pr-2">
                                                <h3 className="text-[15px] md:text-[16px] font-bold text-gray-900">{voucher.brand}</h3>
                                                <div className="text-[11px] md:text-[12px] text-gray-500 mt-1 flex flex-wrap items-center gap-x-1 gap-y-0.5">
                                                    <span>No. of Vouchers: {voucher.count}</span> <span className="hidden sm:inline">•</span> <span className="text-[#00a859] font-semibold w-full sm:w-auto">Total Value: ₹{voucher.totalValue}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-gray-400 group-hover:text-gray-600 transition-colors shrink-0">
                                            {voucher.expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                        </div>
                                    </div>

                                    {/* Expanded Details Area */}
                                    {voucher.expanded && voucher.items.length > 0 && (
                                        <div className="mt-4 md:mt-5 bg-[#FFEDEE66] w-full md:max-w-[712px] h-auto md:max-h-[372px] rounded-xl overflow-hidden" onClick={() => navigate('/voucher-code')}>
                                            {voucher.items.map((item, i) => (
                                                <div key={item.id} >
                                                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 pl-4 md:pl-25 gap-3 sm:gap-0">
                                                        <div className="flex gap-3 md:gap-4 w-full">
                                                            <div className="mt-1 text-[#C45E69] shrink-0">
                                                                <img src={ticketicon} alt="ticket" className="w-[18px] h-[18px] md:w-auto md:h-auto" />
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <span className="text-[15px] md:text-[16px] font-bold text-gray-900">₹{item.amount}</span>
                                                                <span className="text-[11px] md:text-[12px] text-gray-500 mt-1">Order ID: {item.orderId}</span>
                                                                <span className="text-[11px] md:text-[12px] text-gray-500 mt-0.5">Purchased On {item.date}</span>
                                                            </div>
                                                        </div>

                                                        {item.redeemed && (
                                                            <span className="text-[#C45E69] text-[11px] md:text-[12px] font-bold bg-white px-2 py-1 rounded border border-rose-100 self-start sm:self-auto ml-[30px] sm:ml-0 shrink-0">
                                                                Redeemed
                                                            </span>
                                                        )}
                                                    </div>
                                                    {i !== voucher.items.length - 1 && <div className="h-px bg-[#f3d9dc] md:bg-gray-200 mx-4"></div>}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default CashbackCard;