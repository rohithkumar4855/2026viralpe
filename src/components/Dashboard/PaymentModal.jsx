import React, { useState } from 'react';
import { X, CreditCard, Wallet, Landmark, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Note: Update these paths to match where your assets are actually stored
import Gift from "../../../public/images/gift.svg";
import success from "../../../public/images/success.svg";

export const PaymentModal = ({ 
  popupStage, 
  setPopupStage, 
  totalPrice = 0, 
  totalSavings = 0, 
  categories = [] 
}) => {
  // Local state for the payment tabs
  const [activeTab, setActiveTab] = useState('card');
  const navigate = useNavigate();

  // Don't render anything if the modal is closed
  if (!popupStage) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 antialiased text-slate-800 overflow-y-auto">
      
      {/* POPUP STAGE: BILLING CHANNELS DETAIL PANEL */}
      {popupStage === 'payment' && (
        <div className="w-full max-w-4xl bg-[#faf8f7] rounded-3xl p-8 relative shadow-2xl my-8">
          <button
            onClick={() => setPopupStage(null)}
            className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" strokeWidth={1.5} />
          </button>

          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Complete Your Payment</h1>
            <p className="text-xs text-gray-500 mt-1">Secure and encrypted payment processing</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h2 className="font-medium text-sm text-slate-900">Payment Method</h2>
              <p className="text-xs text-gray-400 mt-0.5">Choose your preferred payment method</p>

              <div className="flex gap-8 mt-6 border-b border-gray-100 pb-3">
                <button
                  onClick={() => setActiveTab('card')}
                  className={`flex items-center gap-2 text-xs font-medium pb-3 -mb-[13px] border-b-2 transition-all ${
                    activeTab === 'card' ? 'border-[#800a1d] text-[#800a1d]' : 'border-transparent text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <CreditCard className="w-4 h-4" /> Card
                </button>
                <button
                  onClick={() => setActiveTab('wallet')}
                  className={`flex items-center gap-2 text-xs font-medium pb-3 -mb-[13px] border-b-2 transition-all ${
                    activeTab === 'wallet' ? 'border-[#800a1d] text-[#800a1d]' : 'border-transparent text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <Wallet className="w-4 h-4" /> Wallet
                </button>
                <button
                  onClick={() => setActiveTab('bank')}
                  className={`flex items-center gap-2 text-xs font-medium pb-3 -mb-[13px] border-b-2 transition-all ${
                    activeTab === 'bank' ? 'border-[#800a1d] text-[#800a1d]' : 'border-transparent text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <Landmark className="w-4 h-4" /> Bank
                </button>
              </div>

              {activeTab === 'card' && (
                <div className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-900 mb-1.5">Card Number</label>
                    <div className="relative">
                      <input
                        type="text" placeholder="4321 •••• •••• 5678" readOnly
                        className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-500 placeholder-gray-400 focus:outline-none select-none cursor-default"
                      />
                      <CreditCard className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-900 mb-1.5">Cardholder Name</label>
                    <input
                      type="text" placeholder="John Doe" readOnly
                      className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-500 placeholder-gray-400 focus:outline-none select-none cursor-default"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-900 mb-1.5">Expiry Date</label>
                      <input
                        type="text" placeholder="12/28" readOnly
                        className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-500 placeholder-gray-400 focus:outline-none select-none cursor-default"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-900 mb-1.5">CVV</label>
                      <input
                        type="password" placeholder="•••" readOnly
                        className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-500 placeholder-gray-400 focus:outline-none select-none cursor-default"
                      />
                    </div>
                  </div>

                  {/* Simple instant trigger click switch button */}
                  <button
                    onClick={() => setPopupStage('success')}
                    className="w-full bg-[#800a1d] hover:bg-[#6b0818] text-white font-medium rounded-xl py-3 text-sm mt-4 transition-colors shadow-sm"
                  >
                    Pay Now
                  </button>
                </div>
              )}

              {activeTab !== 'card' && (
                <div className="h-48 flex flex-col items-center justify-center gap-4 text-sm text-gray-400 italic">
                  <div>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} payment gateway selected.</div>
                  <button
                    onClick={() => setPopupStage('success')}
                    className="not-italic bg-[#800a1d] text-white px-6 py-2 rounded-lg text-xs font-medium hover:bg-[#6b0818] transition-colors"
                  >
                    Pay Now
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h2 className="font-medium text-sm text-slate-900 mb-4">Order Summary</h2>
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between text-gray-500">
                    <span>Subtotal</span>
                    <span className="font-semibold text-slate-800">₹{totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Cashback</span>
                    <span className="font-semibold text-[#12b76a]">-₹{totalSavings.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Tax</span>
                    <span className="font-semibold text-slate-800">₹0.00</span>
                  </div>
                  <hr className="border-gray-100 my-2" />
                  <div className="flex justify-between items-center pt-1">
                    <span className="text-sm font-medium text-slate-900">Total</span>
                    <span className="text-lg font-bold text-[#800a1d]">₹{totalPrice.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-5 pt-3 border-t border-gray-50 text-[10px] text-gray-500 font-medium">
                  <div className="flex items-center gap-1">
                    <span className="text-[#12b76a] text-xs">✓</span> 100% Secure
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[#12b76a] text-xs">⚡</span> Instant Delivery
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2 px-2">
                <span className="text-[11px] text-gray-500 font-medium mr-1">We accept:</span>
                <div className="flex gap-1.5">
                  <div className="p-1.5 bg-white border border-gray-100 rounded-md text-[#800a1d] shadow-sm"><CreditCard className="w-3.5 h-3.5" /></div>
                  <div className="p-1.5 bg-white border border-gray-100 rounded-md text-[#800a1d] shadow-sm"><Wallet className="w-3.5 h-3.5" /></div>
                  <div className="p-1.5 bg-white border border-gray-100 rounded-md text-[#800a1d] shadow-sm"><Landmark className="w-3.5 h-3.5" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* POPUP STAGE: TRANSACTION COMPLETION SUCCESS DIALOG CARD */}
      {popupStage === 'success' && (
        <div className="w-full max-w-[426px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col pb-8 relative my-8 animate-fadeIn animate-duration-200">
          
          <button
            onClick={() => setPopupStage(null)}
            className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-600 bg-white/80 backdrop-blur-xs rounded-full p-1 transition-colors"
          >
            <X size={16} />
          </button>

          <div className="w-full flex justify-center bg-[#eefbf4] py-6 relative">
            <img src={success} alt="Success Background" className="w-full h-auto object-contain max-h-[160px]" />
          </div>

          <div className="text-center mt-6 px-6">
            <h2 className="text-[22px] font-bold text-gray-800 tracking-tight">
              Transaction Successful!
            </h2>
            <h1 className="text-[20px] font-semibold text-[#1C1B1B] mt-2 flex items-center justify-center gap-1">
              ₹{totalPrice}
            </h1>
            <p className="text-[12px] text-[#1C1B1BB2] font-medium -mt-1">
              On {categories[0]?.title || "Brand"} Brand Gift Vouchers
            </p>
          </div>

          <div className="max-h-[260px] max-w-[384px] mt-6 mx-auto bg-[#fff0f2] rounded-[17.37px] p-5 border border-[#ffe0e4] flex flex-col items-center relative overflow-hidden w-[90%]">
            <div className="w-full flex justify-center items-center h-20 relative mb-2">
              <img src={Gift} alt="Gift Reward" className="max-h-[82px] max-w-[131px] object-contain" />
            </div>

            <h3 className="text-[17px] font-bold text-gray-800 text-center">
              Congratulations Mr.X !
            </h3>
            <p className="text-[13px] text-gray-600 font-medium mt-1 text-center">
              You earned <span className="text-[#00a34c] font-bold">₹{totalSavings || 10}</span> Cashback
            </p>

            <div className="w-full mt-4 pt-4 border-t border-[#ffd4d9]/60 space-y-2 text-center text-[12.5px] text-gray-600 font-medium">
              <p>
                Your referral <span className="font-bold text-gray-800">Mr. Bharat</span> earned <span className="text-[#00a34c] font-bold">₹5</span> Referral Bonus
              </p>
              <p className="pt-1">
                Your Pincode <span className="font-bold text-gray-800">500081</span> earned <span className="text-[#00a34c] font-bold">₹2.5</span> Zonal Royalty
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between px-6 mt-8 text-[11px] text-gray-500 font-semibold gap-2">
            <div className="flex items-center gap-1">
              <CheckCircle2 size={14} className="text-[#00a34c] shrink-0" />
              <span>100% Secure Transfer</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle2 size={14} className="text-[#00a34c] shrink-0" />
              <span>Instant Wallet Credit</span>
            </div>
          </div>

          <div className="flex items-center gap-4 px-5 mt-8">
            <button
              onClick={() => setPopupStage(null)}
              className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-700 font-bold text-[14px] hover:bg-gray-50 transition-colors cursor-pointer text-center"
            >
              Back to Home
            </button>
            <button
              onClick={() => { 
                setPopupStage(null); 
                navigate("/orders"); 
              }}
              className="flex-1 py-3 rounded-xl bg-[#800d1e] text-white font-bold text-[14px] hover:opacity-90 transition-opacity cursor-pointer text-center"
            >
              View Details
            </button>
          </div>

        </div>
      )}

    </div>
  );
};

export default PaymentModal;