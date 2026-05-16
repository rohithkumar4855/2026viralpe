import React from "react";
import { FaTwitter, FaFacebookF, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="w-full bg-[#901C27] mt-[32px] text-white pt-16 pb-6 border-t border-[#901C27]">

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">

        {/* Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-3 lg:pr-4">

            <h2 className="text-[24px] font-bold mb-4">ViralPe</h2>

            <p className="text-[13px] text-white/85 leading-relaxed mb-6 max-w-[280px]">
              Your premium destination for instant mobile recharges, bill payments, and digital services with security.
            </p>

            <p className="text-[14px] font-bold mb-3">Follow Us</p>

            <div className="flex items-center gap-3">
              <FaTwitter size={20} />
              <FaFacebookF size={20} />
              <FaYoutube size={20} />
            </div>

          </div>

          {/* Services */}
          <div>
            <h3 className="text-[14px] font-bold mb-4">Services</h3>
            <ul className="flex flex-col gap-2.5 text-[12px] text-white/85">
              <li>Prepaid</li>
              <li>Postpaid</li>
              <li>DTH</li>
              <li>FASTag</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[14px] font-bold mb-4">Legal</h3>
            <ul className="flex flex-col gap-2.5 text-[12px] text-white/85">
              <li>Privacy Policy</li>
              <li>Terms</li>
              <li>Refund Policy</li>
              <li>Account Deletion</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[14px] font-bold mb-4">Company</h3>
            <ul className="flex flex-col gap-2.5 text-[12px] text-white/85">
              <li>About</li>
              <li>Contact</li>
              <li>Branches</li>
              <li>Coverage</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-[14px] font-bold mb-4">Support</h3>
            <ul className="flex flex-col gap-2.5 text-[12px] text-white/85">
              <li>Contact Us</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Download */}
          <div>
            <h3 className="text-[14px] font-bold mb-4">Download App</h3>

            <div className="flex gap-3">

              <div className="bg-white w-[80px] h-[80px] rounded-md" />

              <div className="flex flex-col gap-2">
                <div className="w-[110px] h-[35px] bg-white rounded" />
                <div className="w-[110px] h-[35px] bg-white rounded" />
              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-white/20 text-center">
          <p className="text-[12px] text-white/70">
            © 2026 ViralPe. All Rights Reserved
          </p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;