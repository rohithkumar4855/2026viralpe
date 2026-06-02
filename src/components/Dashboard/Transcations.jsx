import React, { useState } from 'react';
import headphones from "../../../public/images/earphones.svg";
import chat from "../../../public/images/chat.svg";
import lock from "../../../public/images/lock.svg";
import gift from "../../../public/images/gift4.svg";
import wallet from "../../../public/images/wallet2.svg";
import limit from "../../../public/images/limit.svg";
import coins from "../../../public/images/coins1.svg";
import bonus from "../../../public/images/bonus.svg";
import cashback from "../../../public/images/cash2.svg";
import circular from "../../../public/images/circular.svg";
import FeatureBanner from "../Dashboard/FeatureBanner";
import { FeatureBannerCard3 } from "../../data/Dashboard";
import {
  Search,
  ChevronUp,
  Calendar,
  ArrowUpRight,
  ArrowDownLeft,
  Filter,
  X
} from 'lucide-react';

// --- DATA ---
const topTransactionData = [
  { id: 1, title: 'WALLET BALANCE', amount: '₹ 5,000.00', subtitle: 'Available to Use', icon: wallet },
  { id: 2, title: 'ZONAL ROYALTY', amount: '₹ 5,000.00', subtitle: 'Total Earned Till Date', icon: wallet },
  { id: 3, title: 'LIFETIME EARNIN...', amount: '₹ 25,000.00', subtitle: 'Total Earned Till Date', icon: coins },
  { id: 4, title: 'TOTAL CASHBACK', amount: '₹ 25,000.00', subtitle: 'Total Cashback In This Month', icon: cashback },
  { id: 5, title: 'REFERRAL BONUS', amount: '₹ 25,000.00', subtitle: 'Pending Claim', icon: bonus },
  { id: 6, title: 'REVERSAL WALLET', amount: '₹ 25,000.00', subtitle: 'Pending Claim', icon: circular },
];

const listTransactions = [
  { id: 1, type: 'Prepaid Recharge', details: 'Airtel Prepaid - 90000 00000', date: '07 May 2026, 10:16 AM', amount: '₹199.00', status: 'Success', iconType: 'out' },
  { id: 2, type: 'Postpaid Recharge', details: 'Airtel Prepaid - 90000 00000', date: '07 May 2026, 10:16 AM', amount: '₹199.00', status: 'Success', iconType: 'out' },
  { id: 3, type: 'DTH Recharge', details: 'Tata Play - 14800007', date: '08 May 2026, 11:30 AM', amount: '₹299.00', status: 'Failed', iconType: 'out' },
  { id: 4, type: 'Referral Bonus', details: 'Referral - Ramesh Kumar', date: '11 May 2026, 09:15 AM', amount: '+ ₹50.00', status: 'Success', iconType: 'in' },
  { id: 5, type: 'Cashback Received', details: 'For Mobile Recharge', date: '09 May 2026, 02:45 PM', amount: '+ ₹50.00', status: 'Success', iconType: 'in' },
  { id: 6, type: 'Wallet Topup', details: 'Added from Bank Account', date: '09 May 2026, 10:00 AM', amount: '+ ₹500.00', status: 'Success', iconType: 'in' },
  { id: 7, type: 'Electricity Bill', details: 'BESCOM - 123456789', date: '10 May 2026, 11:00 AM', amount: '₹1,250.00', status: 'Success', iconType: 'out' }
];

// --- SUB-COMPONENTS ---
const CustomCheckbox = ({ label, checked, onChange }) => (
  <div
    className="flex items-center justify-between cursor-pointer mb-2 group select-none "
    onClick={onChange}
  >
    <span className="text-sm text-gray-600 group-hover:text-gray-900">{label}</span>
    <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all duration-200
      ${checked ? 'bg-[#8a3c46] border-[#8a3c46]' : 'border-gray-300 bg-white hover:border-gray-400'}`}>
      {checked && (
        <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      )}
    </div>
  </div>
);

// --- MAIN LAYOUT COMPONENT ---
const DashboardLayout = () => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Default filter state matching image_0ab947.png
  const [typeFilters, setTypeFilters] = useState({
    'All': true,
    'Recharge & Bills': true,
    'Referral Bonus': false,
    'Zonal Royalty': false,
  });

  const [statusFilters, setStatusFilters] = useState({
    'All': false,
    'Success': false,
    'Pending': false,
    'Failed': false,
  });

  const toggleTypeFilter = (key) => {
    setTypeFilters(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleStatusFilter = (key) => {
    setStatusFilters(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleClearAll = () => {
    setTypeFilters({ 'All': false, 'Recharge & Bills': false, 'Referral Bonus': false, 'Zonal Royalty': false });
    setStatusFilters({ 'All': false, 'Success': false, 'Pending': false, 'Failed': false });
  };

  const activeTypeCount = Object.values(typeFilters || {}).filter(Boolean).length;
  const activeStatusCount = Object.values(statusFilters || {}).filter(Boolean).length;
  const formatCount = (count) => `(${String(count).padStart(2, '0')})`;

  const FilterContent = () => (
    <div className="flex-1 flex flex-col justify-between h-full">
      {/* Transaction Type */}
      <div>
        <div className="flex justify-between items-center mb-3 cursor-pointer">
          <h3 className="font-semibold text-gray-800 text-sm flex items-center gap-1">
            Transaction Type 
            {activeTypeCount > 0 && (
              <span className="text-[#8a3c46] font-bold">{formatCount(activeTypeCount)}</span>
            )}
          </h3>
          <ChevronUp className="w-4 h-4 text-gray-500" />
        </div>
        <div className="space-y-1">
          {Object.entries(typeFilters).map(([label, isChecked]) => (
            <CustomCheckbox
              key={label}
              label={label}
              checked={isChecked}
              onChange={() => toggleTypeFilter(label)}
            />
          ))}
        </div>
      </div>

      <hr className="border-gray-100 " />

      {/* Status */}
      <div>
        <div className="flex justify-between items-center mb-3 cursor-pointer">
          <h3 className="font-semibold text-gray-800 text-sm flex items-center gap-1">
            Status 
            {activeStatusCount > 0 && (
              <span className="text-[#8a3c46] font-bold">{formatCount(activeStatusCount)}</span>
            )}
          </h3>
          <ChevronUp className="w-4 h-4 text-gray-500" />
        </div>
        <div className="space-y-1">
          {Object.entries(statusFilters).map(([label, isChecked]) => (
            <CustomCheckbox
              key={label}
              label={label}
              checked={isChecked}
              onChange={() => toggleStatusFilter(label)}
            />
          ))}
        </div>
      </div>

      <hr className="border-gray-100 " />

      {/* Date Range */}
      <div>
        <div className="flex justify-between items-center mb-2 cursor-pointer">
          <h3 className="font-semibold text-gray-800 text-sm">Date Range</h3>
          <ChevronUp className="w-4 h-4 text-gray-500" />
        </div>
        <div className="flex items-center justify-between border border-gray-200 rounded-lg p-2.5 cursor-pointer hover:border-gray-300 transition-colors bg-white">
          <span className="text-sm text-gray-600">01 May 2026 - 31 May 2026</span>
          <Calendar className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen   ">
      <div className="w-full max-w-6xl mx-auto flex flex-col font-sans  gap-6">

        {/* TOP TRANSACTION SUMMARY CARDS */}
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm flex flex-col justify-between border border-gray-100 w-full min-h-[200px]">
  <h2 className="text-xl font-bold text-gray-900 mb-4 tracking-wide">Transactions</h2>
  
  <div className="flex flex-row lg:flex-nowrap items-center gap-4 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 custom-scrollbar w-full">
    {topTransactionData.map((item) => (
      <div 
        key={item.id} 
        className="w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[calc(16.666%-12px)] border border-gray-100 rounded-2xl p-4 flex flex-col justify-center bg-white shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] shrink-0 lg:shrink"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-[#fcf3f3] p-2 rounded-lg shrink-0">
            <img src={item.icon} alt={item.title} className="w-5 h-5 object-contain" />
          </div>
          <span className="text-[11px] font-bold text-[#8a3c46] uppercase whitespace-nowrap overflow-hidden text-ellipsis">
            {item.title}
          </span>
        </div>
        <h3 className="text-[18px] sm:text-[22px] lg:text-[14px] xl:text-[22px] font-bold text-gray-900 mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
          {item.amount}
        </h3>
        <p className="text-[10px] text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis">
          {item.subtitle}
        </p>
      </div>
    ))}
  </div> 
</div>

        {/* Mobile Filter Sticky/Action Toggle Button */}
        <div className="lg:hidden flex justify-end">
          <button 
            onClick={() => setIsMobileFilterOpen(true)}
            className="flex items-center gap-2 bg-[#8a3c46] text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-md active:scale-95 transition-transform"
          >
            <Filter className="w-4 h-4" />
            Filters {(activeTypeCount + activeStatusCount) > 0 && `(${activeTypeCount + activeStatusCount})`}
          </button>
        </div>

        {/* MIDDLE SECTION: FLEXBOX RESPONSIVE DESIGN */}
        <div className="flex flex-col lg:flex-row gap-6 items-start w-full select-none">

          {/* LEFT FLEX COLUMN: Sidebar widgets (Visible on Desktop) */}
          <div className="hidden lg:flex flex-col gap-6 w-full lg:w-[384px] shrink-0">
            {/* Desktop Filter Widget */}
            <div className="bg-white rounded-xl p-5 shadow-sm border justify-evenly border-gray-100 flex flex-col h-[464px]">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-gray-900">Filter</h2>
                <button onClick={handleClearAll} className="text-sm font-medium text-[#8a3c46] hover:underline cursor-pointer">
                  Clear All
                </button>
              </div>
              <FilterContent />
            </div>

            {/* Need Help Box */}
            <div className="bg-white rounded-xl shadow-sm border p-6 border-gray-100 flex gap-5 h-[151px]">
              <div className="text-[#901c37] shrink-0">
                <img src={headphones} alt="Headphones" className="w-[56px] max-h-[50px] object-contain" />
              </div>
              <div>
                <h3 className="text-[20px] font-semibold mb-1">Need Help?</h3>
                <p className="text-[15px] text-[#1C1B1BB2] mb-3 leading-tight">Chat with our support teams</p>
                <button className="flex items-center gap-2 border border-[#8a3c46] text-[#8a3c46] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#fcf3f3] transition-colors cursor-pointer">
                  <img src={chat} alt="Chat" className="max-w-[18px] w-full h-[18px]" />
                  Chat Now
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT FLEX COLUMN: Scrollable transaction feed */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col w-full flex-1 h-[600px] lg:h-[779px]">
            <div className="p-4 md:p-6 pb-2 border-b border-gray-50 shrink-0">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4 sm:mb-6">
                <span className="text-sm text-gray-500 font-medium">Sort By</span>
                <div className="relative w-full sm:w-auto">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by name, service or amount.."
                    className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm w-full sm:w-72 focus:outline-none focus:border-gray-400 transition-colors"
                  />
                </div>
              </div>
              <h3 className="font-bold text-sm text-gray-900">14 May 2026</h3>
            </div>

            <div className="flex-1 overflow-y-auto p-4 md:p-6 pt-2 custom-scrollbar">
              <div className="flex flex-col">
                {listTransactions.map((tx, index) => (
                  <div key={tx.id}>
                    <div className="flex items-center justify-between py-4 sm:py-5 hover:bg-gray-50/50 px-2 rounded-lg transition-colors group">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#fcf3f3] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          {tx.iconType === 'out' ? (
                            <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#8a3c46]" />
                          ) : (
                            <ArrowDownLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#8a3c46]" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-sm sm:text-[15px] mb-0.5 sm:mb-1">{tx.type}</h4>
                          <p className="text-[11px] sm:text-xs text-gray-500 mb-0.5">{tx.details}</p>
                          <p className="text-[10px] sm:text-xs text-gray-400">{tx.date}</p>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <p className={`font-bold text-sm sm:text-[15px] mb-0.5 sm:mb-1 ${tx.iconType === 'in' ? 'text-green-600' : 'text-gray-900'}`}>
                          {tx.amount}
                        </p>
                        <p className={`text-[11px] sm:text-xs font-medium ${tx.status === 'Success' ? 'text-green-600' : 'text-red-500'}`}>
                          {tx.status}
                        </p>
                      </div>
                    </div>
                    {index !== listTransactions.length - 1 && <hr className="border-gray-100" />}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Embedded Mobile Support Widget */}
          <div className="lg:hidden bg-white rounded-xl shadow-sm border p-5 border-gray-100 flex gap-5 w-full items-center">
            <div className="text-[#901c37] shrink-0">
              <img src={headphones} alt="Headphones" className="w-[48px] object-contain" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-0.5">Need Help?</h3>
              <p className="text-sm text-[#1C1B1BB2] mb-2 leading-tight">Chat with our support teams</p>
              <button className="flex items-center gap-2 border border-[#8a3c46] text-[#8a3c46] px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-[#fcf3f3] transition-colors">
                <img src={chat} alt="Chat" className="w-3.5 h-3.5" />
                Chat Now
              </button>
            </div>
          </div>
        </div>

        {/* Footer Promo Feature Banner */}
        <div className="w-full mt-2">
          <FeatureBanner cards={FeatureBannerCard3} />
        </div>

      </div>

      {/* MOBILE POPUP/DRAWER SHEET (Tap Operation for Mobile) */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end bg-black/40 backdrop-blur-xs transition-opacity">
          <div className="absolute inset-0" onClick={() => setIsMobileFilterOpen(false)} />
          <div className="relative bg-white rounded-t-2xl p-5 shadow-xl max-h-[85vh] flex flex-col overflow-hidden z-10">
            <div className="flex justify-between items-center mb-5 border-b border-gray-100 pb-3">
              <h2 className="text-lg font-bold text-gray-900">Filter Options</h2>
              <div className="flex items-center gap-4">
                <button onClick={handleClearAll} className="text-xs font-semibold text-[#8a3c46] underline">
                  Clear All
                </button>
                <button onClick={() => setIsMobileFilterOpen(false)} className="p-1 text-gray-400 hover:text-gray-700 bg-gray-100 rounded-full">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="overflow-y-auto pb-6">
              <FilterContent />
            </div>
            <div className="pt-3 border-t border-gray-100">
              <button onClick={() => setIsMobileFilterOpen(false)} className="w-full bg-[#8a3c46] text-white py-3 rounded-xl font-bold text-sm tracking-wide shadow-md active:bg-[#6e2f37]">
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;