import React, { useState } from 'react';
import { 
  ArrowRight, 
  BadgeCheck, 
  Zap, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react'; // Make sure to install lucide-react for these icons

export default function PopularVouchers() {
  // State for active category pill
  const [activeCategory, setActiveCategory] = useState('All (09)');

  // Dummy data arrays for easy mapping
  const categories = [
    'All (09)', 'Fashion', 'Entertainment', 'Books', 'Gaming', 
    'Food', 'Beauty', 'Travel', 'Medicine', 'Cosmetics'
  ];

  const vouchers = [
    {
      id: 1,
      brand: 'Myntra',
      priceText: 'Starting Price from ₹200',
      badgeText: '5% Cashback',
      badgeType: 'green', // Used to style the badge dynamically
      logoUrl: '/api/placeholder/80/80' // Replace with actual Myntra logo
    },
    {
      id: 2,
      brand: 'Starbucks',
      priceText: 'Starting Price from ₹200',
      badgeText: 'Get ₹50 Cashback',
      badgeType: 'blue',
      logoUrl: '/api/placeholder/80/80' // Replace with actual Starbucks logo
    },
    {
      id: 3,
      brand: 'Nike',
      priceText: 'Starting Price from ₹200',
      badgeText: '', // No badge shown in design for Nike
      badgeType: 'none',
      logoUrl: '/api/placeholder/80/80' // Replace with actual Nike logo
    },
    {
      id: 4,
      brand: 'Myntra',
      priceText: 'Starting Price from ₹200',
      badgeText: '5% Cashback',
      badgeType: 'green',
      logoUrl: '/api/placeholder/80/80'
    },
    {
      id: 5,
      brand: 'Starbucks',
      priceText: 'Starting Price from ₹200',
      badgeText: '5% Cashback',
      badgeType: 'green',
      logoUrl: '/api/placeholder/80/80'
    }
  ];

  return (
    // Main Container matching Figma Layout (1205px max-width, rounded 20px)
    <div className="w-full max-w-[1205px]  mt-[32px] mx-auto bg-white rounded-[20px] p-8 md:p-10 shadow-sm border border-gray-100">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <h2 className="text-3xl md:text-[32px] font-bold tracking-tight mb-2 text-[#222222]">
            <span className="text-[#8B232A]">Popular</span> Vouchers
          </h2>
          <p className="text-gray-600 text-[15px]">
            Buy vouchers from leading brands and save more on every purchase
          </p>
        </div>
        
        <button className="flex items-center gap-1 text-[#8B232A] font-semibold text-[14px] hover:underline group whitespace-nowrap">
          View More 
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Trust Badges */}
      <div className="flex flex-wrap items-center gap-6 md:gap-10 mt-6">
        <div className="flex items-center gap-2 text-[#8B232A] text-[13px] font-semibold">
          <BadgeCheck size={18} strokeWidth={2.5} /> Verified Brands
        </div>
        <div className="flex items-center gap-2 text-[#8B232A] text-[13px] font-semibold">
          <Zap size={18} strokeWidth={2.5} /> Instant Redeem
        </div>
        <div className="flex items-center gap-2 text-[#8B232A] text-[13px] font-semibold">
          <ShieldCheck size={18} strokeWidth={2.5} /> Secure Payments
        </div>
      </div>

      {/* Category Pills (Scrollable horizontally) */}
      {/* Using a custom class "scrollbar-hide" (requires tailwind-scrollbar-hide plugin or custom css) */}
      <div className="flex items-center gap-3 mt-8 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-[13px] font-medium whitespace-nowrap transition-colors border ${
              activeCategory === cat
                ? 'bg-[#8B232A] text-white border-[#8B232A]'
                : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 shadow-sm'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Vouchers Carousel Section */}
      <div className="relative mt-8">
        
        {/* Left Navigation Arrow */}
        <button className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center text-gray-500 hover:text-[#8B232A] hover:border-gray-200 transition-colors hidden md:flex">
          <ChevronLeft size={20} />
        </button>

        {/* Scrollable Cards Container */}
        <div className="flex overflow-x-auto gap-5 pb-4 scrollbar-hide pt-2 px-1">
          {vouchers.map((voucher) => (
            <div 
              key={voucher.id} 
              className="min-w-[200px] bg-white border border-gray-100 rounded-[16px] p-4 flex flex-col hover:shadow-lg transition-shadow cursor-pointer"
            >
              {/* Badge Area (Preserves height even if empty) */}
              <div className="h-[24px] mb-2">
                {voucher.badgeType !== 'none' && (
                  <span className={`px-2 py-1 rounded-[6px] text-[10px] font-bold ${
                    voucher.badgeType === 'green' 
                      ? 'bg-green-50 text-green-600' 
                      : 'bg-blue-50 text-blue-600'
                  }`}>
                    {voucher.badgeText}
                  </span>
                )}
              </div>

              {/* Brand Logo */}
              <div className="flex-1 flex items-center justify-center py-4">
                <img 
                  src={voucher.logoUrl} 
                  alt={voucher.brand} 
                  className="w-16 h-16 object-contain"
                />
              </div>

              {/* Text Info */}
              <div className="text-center mt-2">
                <h4 className="font-bold text-[#222222] text-[16px]">{voucher.brand}</h4>
                <p className="text-[11px] text-gray-500 mt-1">{voucher.priceText}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Navigation Arrow */}
        <button className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center text-[#8B232A] hover:bg-gray-50 transition-colors hidden md:flex">
          <ChevronRight size={20} />
        </button>

      </div>
    </div>
  );
};

