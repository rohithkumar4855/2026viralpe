"use client";

import React, { useState, useRef } from 'react';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import lockicon from "../../../public/images/lock.png";
import verified from "../../../public/images/verified.png";
import Thunder from "../../../public/images/thunder.png";
import myntra from "../../../public/images/myntra.png";
import starbucks from "../../../public/images/starbucks.png";
import nike from "../../../public/images/nike.png";

export default function PopularVouchers() {
  const [activeCategory, setActiveCategory] = useState('All (09)');

  // Create a reference for the scrollable container
  const carouselRef = useRef(null);

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
      badgeType: 'green',
      logoUrl: myntra
    },
    {
      id: 2,
      brand: 'Starbucks',
      priceText: 'Starting Price from ₹200',
      badgeText: 'Get ₹50 Cashback',
      badgeType: 'blue',
      logoUrl: starbucks
    },
    {
      id: 3,
      brand: 'Nike',
      priceText: 'Starting Price from ₹200',
      badgeText: '',
      badgeType: 'none',
      logoUrl: nike
    },
    {
      id: 4,
      brand: 'Myntra',
      priceText: 'Starting Price from ₹200',
      badgeText: '5% Cashback',
      badgeType: 'green',
      logoUrl: myntra
    },
    {
      id: 5,
      brand: 'Starbucks',
      priceText: 'Starting Price from ₹200',
      badgeText: '5% Cashback',
      badgeType: 'green',
      logoUrl: starbucks
    },
    {
      id: 6,
      brand: 'Myntra',
      priceText: 'Starting Price from ₹200',
      badgeText: '5% Cashback',
      badgeType: 'green',
      logoUrl: myntra
    },
    {
      id: 7,
      brand: 'Myntra',
      priceText: 'Starting Price from ₹200',
      badgeText: '5% Cashback',
      badgeType: 'green',
      logoUrl: myntra
    },
  ];

  // Navigation handlers
  const handleScrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -240, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 240, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-[95%] max-w-[1205px] mt-6 md:mt-[32px] mx-auto bg-white rounded-[20px] p-5 sm:p-8 md:p-[60px] shadow-sm border border-gray-100">

      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <h2 className="text-[28px] sm:text-3xl md:text-[48px] font-semibold tracking-tight mb-2 text-[#222222] leading-tight">
            <span className="text-[#8B232A]">Popular</span> Vouchers
          </h2>
          <p className="text-gray-600 text-[14px] sm:text-base md:text-[24px] leading-snug">
            Buy vouchers from leading brands and save more on every purchase
          </p>
        </div>

        <button className="flex items-center gap-1 text-(--primary-red) font-medium text-[14px] sm:text-[16px] group whitespace-nowrap self-start md:self-auto mt-2 md:mt-0">
          View More
          <ArrowRight size={16} className="transition-transform font-medium" />
        </button>
      </div>

      {/* Trust Badges */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3.25 mt-5 sm:mt-6">
        <div className="flex items-center rounded-[23px] p-1.5 sm:p-2 bg-[#FCF9F8] gap-1.5 sm:gap-2 text-(--primary-red) text-[12px] sm:text-[15px] font-semibold tracking-wider">
          <img
            src={verified}
            alt="verified"
            className="w-4 h-4 sm:w-auto sm:h-auto object-contain"
          />   Verified Brands
        </div>

        <div className="flex items-center rounded-[23px] p-1.5 sm:p-2 bg-[#FCF9F8] gap-1.5 sm:gap-2 text-(--primary-red) text-[12px] sm:text-[15px] font-semibold tracking-wider">
          <img
            src={Thunder}
            alt="instant"
            className="w-4 h-4 sm:w-auto sm:h-auto object-contain"
          />   Instant Redeem
        </div>
        <div className="flex items-center rounded-[23px] p-1.5 sm:p-2 bg-[#FCF9F8] gap-1.5 sm:gap-2 text-(--primary-red) text-[12px] sm:text-[15px] font-semibold tracking-wider">
          <img
            src={lockicon}
            alt="secure"
            className="w-4 h-4 sm:w-auto sm:h-auto object-contain"
          />    Secure Payments
        </div>
      </div>

      {/* Category Pills (Scrollable horizontally) */}
      <div className="flex items-center gap-2 sm:gap-3 mt-6 sm:mt-8 pb-2 overflow-x-auto scrollbar-hide [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`h-[34.26px] px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-[12px] sm:text-[13px] font-medium whitespace-nowrap transition-all duration-300 flex items-center justify-center ${activeCategory === cat
              ? 'bg-(--primary-red) text-white shadow-md'
              : 'bg-gradient-to-r from-[#f1eeee] via-white to-white text-[#1C1B1B] shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.09)]'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Vouchers Carousel Section */}
      <div className="relative mt-6 sm:mt-8 max-w-[1069px]">
        {/* Left Navigation Arrow */}
        <button
          onClick={handleScrollLeft}
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-xl shadow-md border border-gray-100 items-center justify-center text-gray-500 hover:text-[#8B232A] hover:border-gray-200 transition-colors hidden md:flex"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Scrollable container with completely hidden native scrollbars */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto gap-[12px] md:gap-[20px] scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-4"
        >
          {vouchers.map((voucher) => (
            <div
              key={voucher.id}
              className="relative min-w-[160px] w-[160px] h-[160px] md:min-w-[217px] md:w-[217px] md:h-[204px] border border-gray-100 rounded-[16px] md:rounded-[21px] p-2 hover:shadow-lg transition-shadow cursor-pointer flex-shrink-0 bg-white"
            >

              {/* Badge */}
              {voucher.badgeType !== 'none' && (
                <span
                  className={`absolute top-0 left-0 text-[8px] md:text-[10px] font-bold px-2 md:px-3 py-1 rounded-br-[10px] md:rounded-br-[12px] rounded-tl-[16px] md:rounded-tl-[21px] shadow-sm tracking-tight z-10 ${voucher.badgeType === 'green'
                    ? 'bg-green-50 text-green-600'
                    : 'bg-blue-50 text-blue-600'
                    }`}
                >
                  {voucher.badgeText}
                </span>
              )}

              {/* Brand Logo */}
              <div className="flex items-center justify-center h-[90px] md:h-[120px]">
                <img
                  src={voucher.logoUrl}
                  alt={voucher.brand}
                  className="max-w-[80px] h-[70px] md:max-w-[113px] md:h-[98px] object-contain"
                />
              </div>

              {/* Text Info */}
              <div className="text-center mt-1 md:mt-2">
                <h4 className="font-bold text-[#222222] text-[13px] md:text-[16px]">
                  {voucher.brand}
                </h4>

                <p className="text-[10px] md:text-[11px] text-gray-500 mt-0.5 md:mt-1 leading-tight md:leading-normal">
                  {voucher.priceText}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Navigation Arrow */}
        <button
          onClick={handleScrollRight}
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-xl shadow-md border border-gray-100 items-center justify-center text-[#8B232A] hover:bg-gray-50 transition-colors hidden md:flex"
        >
          <ChevronRight size={20} />
        </button>

      </div>
    </div>
  );
}