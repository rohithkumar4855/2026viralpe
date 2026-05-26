import React from "react";
import { useNavigate } from "react-router-dom";
import Barcode from "../../public/images/barcode.png";
import Googleplay from "../../public/images/googleplay.png";
import Appstore from "../../public/images/appstore.png";
import { FaTwitter, FaFacebookF, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="w-full bg-[#901C27] mt-[32px] text-white pt-16 pb-6 border-t border-[#901C27]">
      <div className="max-w-[1206px] mx-auto px-6 md:px-10">
        
        {/* Top Section - Using Flexbox to distribute all 7 columns naturally */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-4 mb-12">
          
          {/* 1. Brand */}
          <div className="lg:max-w-[280px]">
            <h2 
              className="text-[25.52px] font-bold mb-4 cursor-pointer" 
              onClick={() => navigate("/")}
            >
              ViralPe
            </h2>
            <p className="text-[12px] text-white/90 leading-relaxed mb-6">
              Your premium destination for instant mobile recharges, bill payments, and digital services with Luminous Payments security.
            </p>
            <p className="text-[14px] font-bold mb-3">Follow Us</p>
            <div className="flex items-center gap-2.5">
              <div className="bg-white text-[#901C27] w-[26px] h-[26px] rounded-[4px] flex items-center justify-center cursor-pointer">
                <FaTwitter size={15} />
              </div>
              <div className="bg-white text-[#901C27] w-[26px] h-[26px] rounded-[4px] flex items-center justify-center cursor-pointer">
                <FaFacebookF size={15} />
              </div>
              <div className="bg-white text-[#901C27] w-[26px] h-[26px] rounded-[4px] flex items-center justify-center cursor-pointer">
                <FaYoutube size={15} />
              </div>
            </div>
          </div>

          {/* 2. Services */}
          <div>
            <h3 className="text-[14px] font-semibold mb-5">Services</h3>
            <ul className="flex flex-col gap-3.5 text-[12px] font-light text-white/90">
              <li className="cursor-pointer hover:underline" onClick={() => navigate("/prepaid")}>Prepaid</li>
              <li className="cursor-pointer hover:underline" onClick={() => navigate("/future")}>Postpaid</li>
              <li className="cursor-pointer hover:underline" onClick={() => navigate("/dth")}>DTH</li>
              <li className="cursor-pointer hover:underline" onClick={() => navigate("/fastag")}>FASTag</li>
            </ul>
          </div>

          {/* 3. Legal */}
          <div>
            <h3 className="text-[14px] font-semibold mb-5">Legal</h3>
            <ul className="flex flex-col gap-3.5 text-[12px] font-light text-white/90">
              <li className="cursor-pointer hover:underline" onClick={() => navigate("/privacy-policy")}>Privacy Policy</li>
              <li className="cursor-pointer hover:underline" onClick={() => navigate("/terms-conditions")}>Terms of Service</li>
              <li className="cursor-pointer hover:underline" onClick={() => navigate("/refund-policy")}>Refund Policy</li>
              <li className="cursor-pointer hover:underline" onClick={() => navigate("/future")}>Sub Processors</li>
              <li className="cursor-pointer hover:underline" onClick={() => navigate("/future")}>Account Deletion</li>
            </ul>
          </div>

          {/* 4. Company */}
          <div>
            <h3 className="text-[14px] font-semibold mb-5">Company</h3>
            <ul className="flex flex-col gap-3.5 text-[12px] font-light text-white/90">
              <li className="cursor-pointer hover:underline" onClick={() => navigate("/about-us")}>About ViralPe</li>
              <li className="cursor-pointer hover:underline" onClick={() => navigate("/future")}>Contact ViralPe</li>
              <li className="cursor-pointer hover:underline" onClick={() => navigate("/management")}>Management</li>
              <li className="cursor-pointer hover:underline" onClick={() => navigate("/future")}>Branches</li>
              <li className="cursor-pointer hover:underline" onClick={() => navigate("/future")}>Coverage</li>
            </ul>
          </div>

          {/* 5. Vendors */}
          <div>
            <h3 className="text-[14px] font-semibold mb-5">Vendors</h3>
            <ul className="flex flex-col gap-3.5 text-[12px] font-light text-white/90">
              <li className="cursor-pointer hover:underline" onClick={() => navigate("/future")}>Retail</li>
              <li className="cursor-pointer hover:underline" onClick={() => navigate("/future")}>Healthcare</li>
              <li className="cursor-pointer hover:underline" onClick={() => navigate("/future")}>Food & Beverages</li>
              <li className="cursor-pointer hover:underline" onClick={() => navigate("/future")}>Financial Services</li>
              <li className="cursor-pointer hover:underline" onClick={() => navigate("/future")}>Entertainment & Lifestyle</li>
              <li className="cursor-pointer hover:underline" onClick={() => navigate("/future")}>Education</li>
              <li className="cursor-pointer hover:underline" onClick={() => navigate("/future")}>Professional Services</li>
            </ul>
          </div>

          {/* 6. Support */}
          <div>
            <h3 className="text-[14px] font-semibold mb-5">Support</h3>
            <ul className="flex flex-col gap-3.5 text-[12px] font-light text-white/90">
              <li className="cursor-pointer hover:underline" onClick={() => navigate("/future")}>Contact Us</li>
              <li className="cursor-pointer hover:underline" onClick={() => navigate("/future")}>Faq's</li>
            </ul>
          </div>

          {/* 7. Download App */}
          <div>
            <h3 className="text-[14px] font-semibold mb-2">Download App</h3>
            <p className="text-[12px] font-light text-white/90 mb-4">
              Scan to download the ViralPe App
            </p>
            <div className="flex flex-row items-center gap-3">
              <img
                src={Barcode}
                alt="QR Code"
                className="w-[72px] h-[72px] object-contain bg-white p-1 rounded-sm"
              />
              <div className="flex flex-col gap-2.5">
                <img
                  src={Googleplay}
                  alt="Google Play"
                  className="w-[100px] h-auto object-contain cursor-pointer"
                />
                <img
                  src={Appstore}
                  alt="App Store"
                  className="w-[100px] h-auto object-contain cursor-pointer"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        

      </div>
       <div className="pt-6 border-t border-white/10 text-center">
          <p className="text-[12px] text-white/70">
            © 2026 ViralPe. All Rights Reserved
          </p>
        </div>
    </footer>
  );
};

export default Footer;