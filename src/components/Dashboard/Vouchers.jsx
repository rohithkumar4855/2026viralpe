import React, { useState } from 'react';
import { Search, Ticket, ShoppingBag, ChevronUp, ChevronDown, Check, Star, ShieldCheck, Zap, Lock, Headphones, SlidersHorizontal } from 'lucide-react';

import { useNavigate } from 'react-router-dom';
import FeatureBanner from './FeatureBanner';
import { FeatureBannerCard } from "../../data/Dashboard";
import ticketicon from "/images/ticketicon.svg";
import cart from "/images/cart.svg";
import { vouchersData } from "../../data/Dashboard";


export default function Vouchers() {
    // 1. Navigation Tabs Configuration
    const navigate = useNavigate();
    const [currentNav, setCurrentNav] = useState('Vouchers');
    const navItems = [
        { id: 'All', label: 'All' },
        { id: 'Vouchers', label: 'Vouchers' },
        { id: 'Prepaid', label: 'Prepaid Recharge' },
        { id: 'Postpaid', label: 'Postpaid Recharge' },
        { id: 'DTH', label: 'DTH Recharge' },
        { id: 'FASTag', label: 'FASTag Recharge' },
        { id: 'Refer', label: 'Refer & Earn' },
        { id: 'Transactions', label: 'Transactions' },

    ];

    const renderIcon = (icon) => {
        return (
            <img
                src={icon}
                alt="icon"
                className="w-8.5 h-8.5 object-contain"
            />
        );
    };
    // 2. Filter Sidebar & Categories State Configurations
    const [sections, setSections] = useState({
        brands: true,
        discount: true,
        sortBy: true,
    });

    // Mobile filter overlay state
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    // CHANGED: Defaulting to an empty array so all brands are shown initially
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [brandSearch, setBrandSearch] = useState('');
    const [globalSearch, setGlobalSearch] = useState('');
    const [selectedDiscount, setSelectedDiscount] = useState('');
    const [selectedSort, setSelectedSort] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    // 3. Static Lists
    const brandsList = ['Myntra', 'Nykaa', 'Zomato', 'Swiggy', 'Starbucks', 'Nike', 'Trends'];
    const discountList = ['All', '1% - 5%', '6% - 10%', '11% - 15%'];
    const sortList = ['Price Low to High', 'Price High to Low', 'A-Z', 'Z-A'];

    const categoriesList = [
        { id: 'All', label: 'All (10)' },
        { id: 'Fashion', label: 'Fashion' },
        { id: 'Food', label: 'Food' },
        { id: 'Beauty', label: 'Beauty' },
        { id: 'Entertainment', label: 'Entertainment' },
        { id: 'Books', label: 'Books' },
        { id: 'Gaming', label: 'Gaming' },
        { id: 'Travel', label: 'Travel' }
    ];

    // 4. Products Voucher Mock Data (FIXED: Added category, price, and numeric discount)
  

    // 5. Interactivity Event Actions
    const toggleSection = (section) => {
        setSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    const handleBrandChange = (brandName) => {
        if (selectedBrands.includes(brandName)) {
            setSelectedBrands(selectedBrands.filter(b => b !== brandName));
        } else {
            setSelectedBrands([...selectedBrands, brandName]);
        }
    };

    const handleClearAll = () => {
        setSelectedBrands([]);
        setSelectedDiscount('');
        setSelectedSort('');
        setActiveCategory('All');
        setGlobalSearch('');
    };

    const filteredBrands = brandsList.filter(brand =>
        brand.toLowerCase().includes(brandSearch.toLowerCase())
    );

    // 6. FILTER & SORT FUNCTION (FIXED LOGIC)
    const getFilteredVouchers = () => {
        let result = [...vouchersData];

        // Center Global Search Filter
        if (globalSearch.trim() !== '') {
            const query = globalSearch.toLowerCase();
            result = result.filter(voucher =>
                voucher.brand.toLowerCase().includes(query) ||
                (voucher.tag && voucher.tag.toLowerCase().includes(query))
            );
        }

        // Side Brand Filter
        if (selectedBrands.length > 0) {
            result = result.filter(voucher => selectedBrands.includes(voucher.brand));
        }

        // Center Category Filter (FIXED: Removed broken fallback statement)
        if (activeCategory !== 'All') {
            result = result.filter(voucher => voucher.category === activeCategory);
        }

        // Side Discount Filter (FIXED: Now accurately filters mathematical ranges)
        if (selectedDiscount && selectedDiscount !== 'All') {
            if (selectedDiscount === '1% - 5%') {
                result = result.filter(voucher => voucher.discount >= 1 && voucher.discount <= 5);
            } else if (selectedDiscount === '6% - 10%') {
                result = result.filter(voucher => voucher.discount >= 6 && voucher.discount <= 10);
            } else if (selectedDiscount === '11% - 15%') {
                result = result.filter(voucher => voucher.discount >= 11 && voucher.discount <= 15);
            }
        }

        // Side Sort By Filter (FIXED: Accurately checks true price parameters)
        if (selectedSort) {
            result.sort((a, b) => {
                if (selectedSort === 'A-Z') return a.brand.localeCompare(b.brand);
                if (selectedSort === 'Z-A') return b.brand.localeCompare(a.brand);
                if (selectedSort === 'Price Low to High') return a.price - b.price;
                if (selectedSort === 'Price High to Low') return b.price - a.price;
                return 0;
            });
        }

        return result;
    };
    const logoClasses = {
        Nike: "h-[54px] w-[102px]",
        Trends: "h-[19px] w-[132px]"
    };

    const displayVouchers = getFilteredVouchers();

    return (
        <div className="text-gray-800  font-sans">
            {/* HEADER NAVBAR */}
            {/* MAIN LAYOUT WRAPPER */}
            <div>
                <div className="max-w-7xl pb-8 mx-auto px-4">
                    <div className=" flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

                        {/* TOP ROW (Mobile/Tablet): Title and Action Buttons stay side-by-side */}
                        <div className="flex items-center justify-between w-full    lg:w-auto gap-4">
                            <h1 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                                Vouchers
                            </h1>

                            {/* Action Buttons: Visible side-by-side on Mobile & Tablet */}
                            <div className="flex items-center gap-2 md:gap-3 lg:hidden">
                                <button className="flex items-center justify-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl active:bg-gray-50 shadow-sm transition-all">
                                    <img className="h-4 w-4 " src={ticketicon} />
                                    <span>My Vouchers</span>
                                </button>

                                <button className="flex items-center justify-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl active:bg-gray-50 shadow-sm transition-all">
                                    <img className="h-4 w-4 " src={cart} />
                                    <span>Cart</span>
                                </button>
                            </div>
                        </div>

                        {/* BOTTOM ROW (Mobile/Tablet) / MIDDLE-RIGHT (Laptop): Search & Laptop Buttons Container */}
                        <div className="flex flex-row  gap-3 max-w-4xl">

                            {/* Search Input: Full width on mobile/tablet, constrained size on laptop */}
                            <div className='flex justify-between w-full lg:w-auto'>
                                <div className="flex-1 relative flex-grow lg:max-w-md">
                                    <span className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-3">
                                        <Search className="h-4 w-4 text-gray-400" />
                                    </span>
                                    <input
                                        type="text"
                                        value={globalSearch}
                                        onChange={(e) => setGlobalSearch(e.target.value)}
                                        placeholder="Search brands like Myntra, Nike..."
                                        className=" w-[200px]  md:w-[385px]  h-11 pl-10 pr-4 bg-white border border-gray-200/80 rounded-xl focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700 transition-all shadow-sm text-sm"
                                    />

                                </div>
                                {/* MOBILE ONLY FILTER BUTTON: Sticky at bottom right for easy thumb access */}
                                <div className=" lg:hidden " >
                                    <button
                                        onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                                        className="flex  items-center gap-2 bg-[#8A1C24] text-white px-5 py-3 rounded-[15px] shadow-xl font-bold text-sm tracking-wide active:scale-95 transition-all"
                                    >
                                        <SlidersHorizontal className="w-4 h-4" />
                                        <span>Filter</span>
                                        {selectedBrands.length > 0 && (
                                            <span className="bg-white text-[#8A1C24] text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-black">
                                                {selectedBrands.length}
                                            </span>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Laptop Action Buttons: Hidden on Mobile & Tablet, shows up on Laptop screens (lg) */}
                            <div className="hidden lg:flex items-center gap-3">
                                <button className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl  transition-all shadow-sm min-w-[130px]">
                                    <img className="h-4 w-4 text-[#8A1C24]" src={ticketicon} />
                                    <span>My Vouchers</span>
                                </button>

                                <button className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl  transition-all shadow-sm min-w-[95px]">
                                    <img className="h-4 w-4 " src={cart} />
                                    <span>Cart</span>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="relative ">
                {/* MAIN MAIN CONTAINER GRIDLAYOUT */}
                <div className="flex flex-col  lg:flex-row gap-6 items-start max-w-7xl mx-auto px-4 pb-8 ">
                    <div  >

                        {/* COLUMN 1: SIDEBAR (Filters & Why ViralPe) */}
                        {/* Responsive Setup: Hidden on mobile screens unless isMobileFilterOpen is true */}
                        <div className={`
                    ${isMobileFilterOpen ? 'flex fixed inset-0 z-40 mt-20  p-4 pt-20 justify-center items-center bg ' : 'hidden'} 
                    lg:static lg:bg-transparent lg:p-0 lg:z-auto lg:flex flex-col gap-4 lg:w-[291px] w-full max-w-[291px] mx-auto shrink-0
                `}
                            onClick={() => setIsMobileFilterOpen(false)} // Closes filter if clicking outside card on mobile
                        >
                            <aside
                                className="bg-white w-full max-h-[556px] h-full rounded-[20px] border border-gray-100 p-5 shadow-md lg:shadow-sm select-none overflow-y-auto"
                                onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside filter choices
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-xl font-bold text-gray-900">Filter</h2>
                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={handleClearAll}
                                            className="text-sm font-medium text-[#8A1C24] hover:underline transition-colors"
                                        >
                                            Clear All
                                        </button>
                                        {/* Close switch option inside overlay for mobile users */}
                                        <button onClick={() => setIsMobileFilterOpen(false)} className="lg:hidden text-xs text-[#901C27] font-bold border border-gray-200 px-2 py-1 rounded-md">
                                            Done
                                        </button>
                                    </div>
                                </div>

                                {/* Section 1: Brands */}
                                <div >
                                    <button onClick={() => toggleSection('brands')} className="flex items-center justify-between w-full py-2 text-left">

                                        <span className=" text-[15px] font-bold text-gray-900">
                                            Brands{" "}
                                            {selectedBrands.length > 0 && (
                                                <span className="text-[#901C27] font-semibold">
                                                    ({String(selectedBrands.length).padStart(2, "0")})
                                                </span>
                                            )}
                                        </span>
                                        {sections.brands ? <ChevronUp className="w-4 h-4 text-gray-800 stroke-[2.5]" /> : <ChevronDown className="w-4 h-4 text-gray-800 stroke-[2.5]" />}
                                    </button>
                                    {sections.brands && (
                                        <div className=" ">
                                            <div className="relative w-full">
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <Search className="h-3.5 w-3.5 text-gray-400" />
                                                </span>
                                                <input
                                                    type="text"
                                                    placeholder="Search brands"
                                                    value={brandSearch}
                                                    onChange={(e) => setBrandSearch(e.target.value)}
                                                    className="w-[237px] pl-9 pr-3 py-1.5 text-xs bg-white border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:border-red-700 transition-all"
                                                />
                                            </div>
                                            <div className=" overflow-y-auto pr-1 scrollbar-thin  p-2">
                                                {filteredBrands.map((brand) => {
                                                    const isChecked = selectedBrands.includes(brand);
                                                    return (
                                                        <label key={brand} className="flex items-center justify-between  cursor-pointer group">
                                                            <span className="text-[13px]  text-gray-700 group-hover:text-gray-900 transition-colors">{brand}</span>
                                                            <input type="checkbox" checked={isChecked} onChange={() => handleBrandChange(brand)} className="sr-only" />
                                                            <div className={`w-4 h-4 rounded border transition-all flex items-center justify-center ${isChecked ? 'bg-red-800 border-red-800' : 'border-gray-400 bg-white group-hover:border-gray-600'}`}>
                                                                {isChecked && <Check className="w-3 h-3 text-white stroke-[3]" />}
                                                            </div>
                                                        </label>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <hr className="border-gray-100 my-1" />

                                {/* Section 2: Discount */}
                                <div>
                                    <button onClick={() => toggleSection('discount')} className="flex items-center justify-between w-full text-left">
                                        <span className="text-[15px] font-bold text-gray-900">Discount</span>
                                        {sections.discount ? <ChevronUp className="w-4 h-4 text-gray-800 stroke-[2.5]" /> : <ChevronDown className="w-4 h-4 text-gray-800 stroke-[2.5]" />}
                                    </button>
                                    {sections.discount && (
                                        <div className="  ">
                                            {discountList.map((disc) => {
                                                const isChecked = selectedDiscount === disc;
                                                return (
                                                    <label key={disc} className="flex items-center justify-between cursor-pointer group">
                                                        <span className="text-[13px] text-gray-700 group-hover:text-gray-900 transition-colors">{disc}</span>
                                                        <input type="checkbox" checked={isChecked} onChange={() => setSelectedDiscount(isChecked ? '' : disc)} className="sr-only" />
                                                        <div className={`w-4 h-4 rounded border transition-all flex items-center justify-center ${isChecked ? 'bg-red-800 border-red-800' : 'border-gray-400 bg-white group-hover:border-gray-600'}`}>
                                                            {isChecked && <Check className="w-3 h-3 text-white stroke-[3]" />}
                                                        </div>
                                                    </label>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>

                                <hr className="border-gray-100 my-1" />

                                {/* Section 3: Sort By */}
                                <div>
                                    <button onClick={() => toggleSection('sortBy')} className="flex items-center justify-between w-full  text-left">
                                        <span className="text-[15px] font-bold text-gray-900">Sort By</span>
                                        {sections.sortBy ? <ChevronUp className="w-4 h-4 text-gray-800 stroke-[2.5]" /> : <ChevronDown className="w-4 h-4 text-gray-800 stroke-[2.5]" />}
                                    </button>
                                    {sections.sortBy && (
                                        <div className="mt-1 ">
                                            {sortList.map((sortOption) => {
                                                const isChecked = selectedSort === sortOption;
                                                return (
                                                    <label key={sortOption} className="flex items-center justify-between cursor-pointer group">
                                                        <span className="text-[13px] font-medium text-gray-700 group-hover:text-gray-900 transition-colors">{sortOption}</span>
                                                        <input type="checkbox" checked={isChecked} onChange={() => setSelectedSort(isChecked ? '' : sortOption)} className="sr-only" />
                                                        <div className={`w-4 h-4 rounded border transition-all flex items-center justify-center ${isChecked ? 'bg-red-800 border-red-800' : 'border-gray-400 bg-white group-hover:border-gray-600'}`}>
                                                            {isChecked && <Check className="w-3 h-3 text-white stroke-[3]" />}
                                                        </div>
                                                    </label>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            </aside>
                        </div>
                        {/* "Why ViralPe?" Features Value Card */}
                        <div className="hidden md:block w-full bg-white rounded-[28px] border border-gray-100 p-6 shadow-sm md:mt-7">
                            <h3 className="text-lg font-bold text-gray-950 mb-5">
                                Why <span className="text-[#8A1C24]">ViralPe</span>?
                            </h3>

                            <div className="flex flex-col gap-4">
                                <div className="flex items-start gap-3.5">
                                    <div className="p-2.5 bg-[#FDF2F2] rounded-xl text-[#8A1C24] shrink-0">
                                        <ShieldCheck className="w-5 h-5 stroke-[2]" />
                                    </div>
                                    <div>
                                        <h4 className="text-[13px] font-bold text-[#8A1C24] leading-tight">100% Verified Offers</h4>
                                        <p className="text-[11px] font-medium text-gray-400 mt-0.5">Every voucher is validated before listing</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3.5">
                                    <div className="p-2.5 bg-[#FDF2F2] rounded-xl text-[#8A1C24] shrink-0">
                                        <Zap className="w-5 h-5 stroke-[2]" />
                                    </div>
                                    <div>
                                        <h4 className="text-[13px] font-bold text-[#8A1C24] leading-tight">Instant Code Delivery</h4>
                                        <p className="text-[11px] font-medium text-gray-400 mt-0.5">Code delivered to your wallet immediately</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3.5">
                                    <div className="p-2.5 bg-[#FDF2F2] rounded-xl text-[#8A1C24] shrink-0">
                                        <Lock className="w-5 h-5 stroke-[2]" />
                                    </div>
                                    <div>
                                        <h4 className="text-[13px] font-bold text-[#8A1C24] leading-tight">Secure Payments</h4>
                                        <p className="text-[11px] font-medium text-gray-400 mt-0.5">256-bit SSL encrypted transactions</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3.5">
                                    <div className="p-2.5 bg-[#FDF2F2] rounded-xl text-[#8A1C24] shrink-0">
                                        <Headphones className="w-5 h-5 stroke-[2]" />
                                    </div>
                                    <div>
                                        <h4 className="text-[13px] font-bold text-[#8A1C24] leading-tight">24/7 Customer Support</h4>
                                        <p className="text-[11px] font-medium text-gray-400 mt-0.5">Help available round the clock</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* COLUMN 2: CENTER CONTENT (CATEGORIES & PRODUCT CARDS) */}
                    <main className="grow max-w-[930px] w-full flex flex-col gap-8 ">

                        {/* Horizontal Categories List */}
                        <div className=" w-full bg-white rounded-2xl p-2">
                            <div className="flex items-center space-x-3 overflow-x-auto scrollbar-none py-1 px-2">
                                {categoriesList.map((category) => {
                                    const isActive = activeCategory === category.id;
                                    return (
                                        <button
                                            key={category.id}
                                            onClick={() => setActiveCategory(category.id)}
                                            className={`whitespace-nowrap px-5 py-2 text-sm font-medium rounded-2xl border transition-all duration-200 outline-none select-none
                                            ${isActive
                                                    ? 'bg-[#8A1C24] text-white border-[#8A1C24] shadow-sm'
                                                    : 'bg-white text-gray-800 border-gray-200 '
                                                }`}
                                        >
                                            {category.label}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Product Brand Cards Grid Viewport */}
                        <div className="flex flex-wrap gap-4 justify-evenly">
                            {displayVouchers.map((voucher) => (
                                <div
                                    key={voucher.id}
                                    onClick={() => navigate('/voucher-details', { state: voucher })}
                                    className="rounded-[15.45px] bg-white border border-gray-100/70 pt-6 p-2 shadow-sm hover:shadow-md transition-all flex flex-col items-center relative min-h-[157px] w-[calc(50%-8px)] sm:w-[calc(50%-8px)] md:w-[calc(20%-13px)] max-w-[163px]"
                                >
                                    {/* Cashback Header Badges */}
                                    {!voucher.noHeaderTag && (
                                        <div className={`absolute top-0 left-0 text-[10px] font-bold px-3 py-1 rounded-br-xl rounded-tl-2xl shadow-xs tracking-tight
                                            ${voucher.isPromo
                                                ? 'bg-[#EBF3FF] text-blue-700 border-b border-r border-blue-100'
                                                : 'bg-[#EAFDF3] text-[#149B52]'
                                            }`}
                                        >
                                            {voucher.tag}
                                        </div>
                                    )}

                                    {/* Image Container */}
                                    <div className="flex-1 flex items-center justify-center mt-6 px-2 w-full ">
                                        <img
                                            src={voucher.logo}
                                            alt={voucher.brand}
                                            className={` object-contain ${logoClasses[voucher.brand] || "max-h-[73px] max-w-[86px]"}`}
                                        />
                                    </div>

                                    {/* Brand & Price Stack */}
                                    <div className="flex flex-col items-center  text-center mt-3 w-full">
                                        <h3 className="text-[17px] font-bold text-gray-900 leading-none">
                                            {voucher.brand}
                                        </h3>
                                    </div>
                                    <p className="text-[11px] text-[#6B7280] tracking-tight mt-1 ">
                                        {voucher.price}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* No Results Message State */}
                        {displayVouchers.length === 0 && (
                            <div className="w-full py-12 flex flex-col items-center justify-center bg-white rounded-3xl border border-gray-100">
                                <p className="text-gray-500 font-medium">No vouchers found matching your filters.</p>
                                <button onClick={handleClearAll} className="mt-3 text-[#8A1C24] text-sm font-semibold hover:underline">Clear all filters</button>
                            </div>
                        )}
                    </main>
                </div>

                 <div className="block md:hidden  w-full bg-white rounded-[28px] border border-gray-100 p-6 shadow-sm md:mt-7">
                            <h3 className="text-lg font-bold text-gray-950 mb-5">
                                Why <span className="text-[#8A1C24]">ViralPe</span>?
                            </h3>

                            <div className="flex flex-col gap-4">
                                <div className="flex items-start gap-3.5">
                                    <div className="p-2.5 bg-[#FDF2F2] rounded-xl text-[#8A1C24] shrink-0">
                                        <ShieldCheck className="w-5 h-5 stroke-[2]" />
                                    </div>
                                    <div>
                                        <h4 className="text-[13px] font-bold text-[#8A1C24] leading-tight">100% Verified Offers</h4>
                                        <p className="text-[11px] font-medium text-gray-400 mt-0.5">Every voucher is validated before listing</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3.5">
                                    <div className="p-2.5 bg-[#FDF2F2] rounded-xl text-[#8A1C24] shrink-0">
                                        <Zap className="w-5 h-5 stroke-[2]" />
                                    </div>
                                    <div>
                                        <h4 className="text-[13px] font-bold text-[#8A1C24] leading-tight">Instant Code Delivery</h4>
                                        <p className="text-[11px] font-medium text-gray-400 mt-0.5">Code delivered to your wallet immediately</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3.5">
                                    <div className="p-2.5 bg-[#FDF2F2] rounded-xl text-[#8A1C24] shrink-0">
                                        <Lock className="w-5 h-5 stroke-[2]" />
                                    </div>
                                    <div>
                                        <h4 className="text-[13px] font-bold text-[#8A1C24] leading-tight">Secure Payments</h4>
                                        <p className="text-[11px] font-medium text-gray-400 mt-0.5">256-bit SSL encrypted transactions</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3.5">
                                    <div className="p-2.5 bg-[#FDF2F2] rounded-xl text-[#8A1C24] shrink-0">
                                        <Headphones className="w-5 h-5 stroke-[2]" />
                                    </div>
                                    <div>
                                        <h4 className="text-[13px] font-bold text-[#8A1C24] leading-tight">24/7 Customer Support</h4>
                                        <p className="text-[11px] font-medium text-gray-400 mt-0.5">Help available round the clock</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                <div className='mt-6'>
                    <FeatureBanner cards={FeatureBannerCard} />
                </div>

            </div>


        </div>
    );
}