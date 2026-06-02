import React, { useState } from 'react';
import { User, Shield, Bell, ChevronRight, UploadCloud } from 'lucide-react';

export default function AccountProfile() {
  // Track which menu item is currently selected for the left card UI
  const [activeTab, setActiveTab] = useState('Personal Information');

  return (
    <div className="mx-auto">
      <div className="md:flex-row flex flex-col gap-6 p-3 md:p-6">
        
        {/* ========================================== */}
        {/* LEFT CARD (Account Menu)                   */}
        {/* ========================================== */}
        <div className="w-full md:max-w-[370px] h-auto md:max-h-[284px] bg-white rounded-[20px] shadow-[0_4px_24px_rgb(0,0,0,0.02)] pb-2 relative">
          <h2 className="text-[20px] font-bold text-gray-900 mb-2 px-6 pt-4">Account</h2>
          
          <div className="flex flex-col">
            
            {/* Active Item: Personal Information */}
            <div 
              onClick={() => setActiveTab('Personal Information')}
              className={`relative flex items-center justify-between py-4 px-6 border-b border-gray-100 cursor-pointer transition-colors ${
                activeTab !== 'Personal Information' ? 'hover:bg-gray-50' : ''
              }`}
            >
              <div className="flex items-center gap-4">
                <User 
                  className={activeTab === 'Personal Information' ? "text-[#901c27]" : "text-[#8e3a43] opacity-70"} 
                  size={22} 
                  strokeWidth={1.5} 
                />
                <div className="flex flex-col">
                  <span className={`${activeTab === 'Personal Information' ? "text-[#901c27]" : "text-gray-800"} font-bold text-[15px]`}>
                    Personal Information
                  </span>
                  <span className="text-gray-400 text-[13px] mt-0.5">Name,Email,Mobile</span>
                </div>
              </div>
              <ChevronRight 
                className={activeTab === 'Personal Information' ? "text-[#901c27]" : "text-gray-800 font-bold"} 
                size={18} 
                strokeWidth={activeTab === 'Personal Information' ? 2 : 2.5} 
              />
              
              {/* White Triangle pointing to the right card (Hidden on Mobile) */}
              {activeTab === 'Personal Information' && (
                <div className="hidden md:block absolute -right-[12px] top-1/2 -translate-y-1/2 w-0 h-0 
                              border-t-[10px] border-t-transparent 
                              border-b-[10px] border-b-transparent 
                              border-l-[12px] border-l-white z-10 drop-shadow-sm"></div>
              )}
            </div>

            {/* Inactive Item: KYC Verification */}
            <div 
              onClick={() => setActiveTab('KYC Verification')}
              className={`relative flex items-center justify-between py-4 px-6 border-b border-gray-100 cursor-pointer transition-colors ${
                activeTab !== 'KYC Verification' ? 'hover:bg-gray-50' : ''
              }`}
            >
              <div className="flex items-center gap-4">
                <Shield 
                  className={activeTab === 'KYC Verification' ? "text-[#901c27]" : "text-[#8e3a43] opacity-70"} 
                  size={22} 
                  strokeWidth={1.5} 
                />
                <div className="flex flex-col">
                  <span className={`${activeTab === 'KYC Verification' ? "text-[#901c27]" : "text-gray-800"} font-bold text-[15px]`}>
                    KYC Verification
                  </span>
                  <span className="text-gray-400 text-[13px] mt-0.5">Verify your identity</span>
                </div>
              </div>
              <ChevronRight 
                className={activeTab === 'KYC Verification' ? "text-[#901c27]" : "text-gray-800 font-bold"} 
                size={18} 
                strokeWidth={activeTab === 'KYC Verification' ? 2 : 2.5} 
              />
              
              {/* White Triangle pointing to the right card (Hidden on Mobile) */}
              {activeTab === 'KYC Verification' && (
                <div className="hidden md:block absolute -right-[12px] top-1/2 -translate-y-1/2 w-0 h-0 
                              border-t-[10px] border-t-transparent 
                              border-b-[10px] border-b-transparent 
                              border-l-[12px] border-l-white z-10 drop-shadow-sm"></div>
              )}
            </div>

            {/* Inactive Item: Notification Preferences */}
            <div 
              onClick={() => setActiveTab('Notification Preferences')}
              className={`relative flex items-center justify-between py-4 px-6 cursor-pointer rounded-b-[20px] transition-colors ${
                activeTab !== 'Notification Preferences' ? 'hover:bg-gray-50' : ''
              }`}
            >
              <div className="flex items-center gap-4">
                <Bell 
                  className={activeTab === 'Notification Preferences' ? "text-[#901c27]" : "text-[#8e3a43] opacity-70"} 
                  size={22} 
                  strokeWidth={1.5} 
                />
                <div className="flex flex-col">
                  <span className={`${activeTab === 'Notification Preferences' ? "text-[#901c27]" : "text-gray-800"} font-bold text-[15px]`}>
                    Notification Preferences
                  </span>
                  <span className="text-gray-400 text-[13px] mt-0.5">Manage alerts</span>
                </div>
              </div>
              <ChevronRight 
                className={activeTab === 'Notification Preferences' ? "text-[#901c27]" : "text-gray-800 font-bold"} 
                size={18} 
                strokeWidth={activeTab === 'Notification Preferences' ? 2 : 2.5} 
              />
              
              {/* White Triangle pointing to the right card (Hidden on Mobile) */}
              {activeTab === 'Notification Preferences' && (
                <div className="hidden md:block absolute -right-[12px] top-1/2 -translate-y-1/2 w-0 h-0 
                              border-t-[10px] border-t-transparent 
                              border-b-[10px] border-b-transparent 
                              border-l-[12px] border-l-white z-10 drop-shadow-sm"></div>
              )}
            </div>

          </div>
        </div>

        {/* ========================================== */}
        {/* RIGHT CARD (Dynamic Content Area)          */}
        {/* ========================================== */}
        <div className="w-full md:w-[811px] h-auto md:h-[438px] bg-white rounded-[20px] shadow-[0_4px_24px_rgb(0,0,0,0.02)] p-6 md:p-8 flex flex-col justify-between gap-8 md:gap-0">
          
          <div>
            {/* Dynamic Title based on selected tab */}
            <h2 className="text-[20px] font-bold text-gray-900 mb-6 md:mb-8 text-center md:text-left">
              {activeTab}
            </h2>
            
            {/* --- TAB 1: Personal Information Content --- */}
            {activeTab === 'Personal Information' && (
              <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-start gap-8 md:gap-0">
                
                {/* Form Inputs */}
                <div className="w-full md:w-[380px] flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[14px] font-bold text-gray-800">First Name</label>
                    <input 
                      type="text" 
                      defaultValue="Viral"
                      className="w-full px-4 py-3 rounded-[10px] border border-gray-100 bg-white text-gray-700 text-[14px] focus:outline-none focus:border-[#901c27] focus:ring-1 focus:ring-[#901c27] transition-all"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[14px] font-bold text-gray-800">Last Name</label>
                    <input 
                      type="text" 
                      defaultValue="Sreenivas"
                      className="w-full px-4 py-3 rounded-[10px] border border-gray-100 bg-white text-gray-700 text-[14px] focus:outline-none focus:border-[#901c27] focus:ring-1 focus:ring-[#901c27] transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[14px] font-bold text-gray-800">Email</label>
                    <input 
                      type="email" 
                      defaultValue="viralpesreenivas@gmail.com"
                      className="w-full px-4 py-3 rounded-[10px] border border-gray-100 bg-white text-gray-500 text-[14px] focus:outline-none focus:border-[#901c27] focus:ring-1 focus:ring-[#901c27] transition-all"
                    />
                  </div>
                </div>

                {/* Profile Avatar Circle */}
                <div className="pr-0 md:pr-[90px] pt-0 md:pt-2">
                  <div className="w-[145px] h-[145px] rounded-full border-[3px] border-[#F1C40F] flex items-center justify-center p-1.5 shadow-sm mx-auto">
                    <div className="w-full h-full rounded-full bg-[#821323] flex items-center justify-center">
                      <span className="text-white text-[42px] font-semibold tracking-wide">SS</span>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* --- TAB 2: KYC Verification Content --- */}
            {activeTab === 'KYC Verification' && (
              <div className="flex flex-col items-center justify-center py-6 md:py-10 text-center">
                <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center mb-5 text-[#821323]">
                   <Shield size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-[18px] font-bold text-gray-900">Verify Your Identity</h3>
                <p className="text-[14px] text-gray-500 mt-2 max-w-[350px]">
                  Please upload a valid government-issued ID to complete your account verification.
                </p>
                <button className="mt-8 px-8 py-3 bg-[#821323] hover:bg-[#6e101d] text-white rounded-xl font-bold text-[14px] flex items-center gap-2 shadow-sm transition-colors">
                  <UploadCloud size={18} />
                  Upload Documents
                </button>
              </div>
            )}

            {/* --- TAB 3: Notification Preferences Content --- */}
            {activeTab === 'Notification Preferences' && (
              <div className="flex flex-col gap-6 w-full md:w-[80%]">
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div className="flex flex-col pr-4">
                    <span className="text-[15px] font-bold text-gray-900">Email Notifications</span>
                    <span className="text-[13px] text-gray-500 mt-1">Receive updates, promotions, and account alerts via email.</span>
                  </div>
                  {/* Custom Toggle Switch */}
                  <div className="w-12 h-[26px] bg-[#821323] rounded-full relative cursor-pointer shrink-0 shadow-inner">
                    <div className="w-[20px] h-[20px] bg-white rounded-full absolute top-[3px] right-[3px] shadow-sm"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div className="flex flex-col pr-4">
                    <span className="text-[15px] font-bold text-gray-900">SMS Alerts</span>
                    <span className="text-[13px] text-gray-500 mt-1">Get instant text messages for security and login attempts.</span>
                  </div>
                  {/* Custom Toggle Switch (Off state) */}
                  <div className="w-12 h-[26px] bg-gray-200 rounded-full relative cursor-pointer shrink-0 shadow-inner">
                    <div className="w-[20px] h-[20px] bg-white rounded-full absolute top-[3px] left-[3px] shadow-sm"></div>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Dynamic Action Buttons at the bottom (Only show 'Save' on specific tabs) */}
          {activeTab === 'Personal Information' && (
            <div className="flex justify-center mb-2 mt-4 md:mt-0">
              <button className="w-full md:w-[180px] py-3 bg-[#821323] hover:bg-[#6e101d] text-white rounded-xl font-bold text-[15px] shadow-md transition-colors duration-200">
                Save
              </button>
            </div>
          )}
          
        </div>

      </div>
    </div>
  );
}