import React, { useState } from 'react';
import { User, Shield, Bell, ChevronRight } from 'lucide-react';

export default function AccountProfile() {
  // Track which menu item is currently selected for the left card UI
  const [activeTab, setActiveTab] = useState('Personal Information');

  return (
    <div className="min-h-screen flex mx-auto font-sans ">
      <div className="flex gap-6 items-start">
        
        {/* ========================================== */}
        {/* LEFT CARD (Account Menu)                   */}
        {/* ========================================== */}
        <div className="w-[370px] h-[284px] bg-white rounded-[20px] shadow-[0_4px_24px_rgb(0,0,0,0.02)] pb-2 relative">
          <h2 className="text-[20px] font-bold text-gray-900 mb-2 px-6 pt-4">Account</h2>
          
          <div className="flex flex-col">
            
            {/* Active Item: Personal Information */}
            <div 
              onClick={() => setActiveTab('Personal Information')}
              className={`relative flex items-center justify-between py-4 px-6 border-b border-gray-100 cursor-pointer transition-colors ${
                activeTab !== 'Personal Information' ? 'hover:bg-white' : ''
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
              
              {/* White Triangle pointing to the right card */}
              {activeTab === 'Personal Information' && (
                <div className="absolute -right-[12px] top-1/2 -translate-y-1/2 w-0 h-0 
                              border-t-[10px] border-t-transparent 
                              border-b-[10px] border-b-transparent 
                              border-l-[12px] border-l-white z-10 drop-shadow-sm"></div>
              )}
            </div>

            {/* Inactive Item: KYC Verification */}
            <div 
              onClick={() => setActiveTab('KYC Verification')}
              className={`relative flex items-center justify-between py-4 px-6 border-b border-gray-100 cursor-pointer transition-colors ${
                activeTab !== 'KYC Verification' ? 'hover:bg-white' : ''
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
              
              {/* White Triangle pointing to the right card */}
              {activeTab === 'KYC Verification' && (
                <div className="absolute -right-[12px] top-1/2 -translate-y-1/2 w-0 h-0 
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
                  <span className="text-gray-400 text-[13px] mt-0.5">Verify your identity</span>
                </div>
              </div>
              <ChevronRight 
                className={activeTab === 'Notification Preferences' ? "text-[#901c27]" : "text-gray-800 font-bold"} 
                size={18} 
                strokeWidth={activeTab === 'Notification Preferences' ? 2 : 2.5} 
              />
              
              {/* White Triangle pointing to the right card */}
              {activeTab === 'Notification Preferences' && (
                <div className="absolute -right-[12px] top-1/2 -translate-y-1/2 w-0 h-0 
                              border-t-[10px] border-t-transparent 
                              border-b-[10px] border-b-transparent 
                              border-l-[12px] border-l-white z-10 drop-shadow-sm"></div>
              )}
            </div>

          </div>
        </div>

        {/* ========================================== */}
        {/* RIGHT CARD (Personal Information Form)     */}
        {/* ========================================== */}
        <div className="w-[811px] h-[438px] bg-white rounded-[20px] shadow-[0_4px_24px_rgb(0,0,0,0.02)] p-8 flex flex-col justify-between">
          
          <div>
            <h2 className="text-[20px] font-bold text-gray-900 mb-8">Personal Information</h2>
            
            <div className="flex justify-between items-start">
              
              {/* Form Inputs */}
              <div className="w-[380px] flex flex-col gap-4">
                
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
              <div className="pr-[90px] pt-2">
                {/* Outer Yellow Ring */}
                <div className="w-[145px] h-[145px] rounded-full border-[3px] border-[#F1C40F] flex items-center justify-center p-1.5 shadow-sm">
                  {/* Inner Red Circle */}
                  <div className="w-full h-full rounded-full bg-[#821323] flex items-center justify-center">
                    <span className="text-white text-[42px] font-semibold tracking-wide">SS</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-center mb-2">
            <button className="w-[180px] py-3 bg-[#821323] hover:bg-[#6e101d] text-white rounded-xl font-bold text-[15px] shadow-md transition-colors duration-200">
              Save
            </button>
          </div>
          
        </div>

      </div>
    </div>
  );
}