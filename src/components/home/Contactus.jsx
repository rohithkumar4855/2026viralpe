import React from "react";
import Mobilechat from "../../../public/images/mobile-chat.png";
import Emailicon from "../../../public/images/email.png";
import locationicon from "../../../public/images/property-location.png";

const ContactUs = () => {
  return (
    <div className="w-[95%] lg:w-full max-w-[1206px] mt-6 md:mt-[32px] mx-auto min-h-auto md:min-h-[503px] bg-white rounded-[16px] md:rounded-[20px] shadow-sm border border-gray-100 flex flex-col md:flex-row overflow-hidden">

      {/* Left Side */}
      <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center">

        <h2 className="text-[32px] sm:text-[40px] md:text-[52px] font-semibold text-[#222222] tracking-tight mb-3 md:mb-4 leading-[1.1] md:leading-none">
          Contact Us
        </h2>

        <p className="text-[15px] sm:text-[16px] md:text-[18px] text-[#222222CC] leading-relaxed mb-8 md:mb-10 max-w-[420px]">
          We are committed to processing the information in order to contact you and talk about your project.
        </p>

        <div className="flex flex-col gap-5 md:gap-6">

          <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
            <img
              src={Emailicon}
              alt="Email"
              className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] object-contain shrink-0"
            />
            <span className="text-[13px] sm:text-[14px] font-medium text-[#222222] break-all sm:break-normal">
              example@teamwebflow.com
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
            <img
              src={locationicon}
              alt="Location"
              className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] object-contain shrink-0"
            />
            <span className="text-[13px] sm:text-[14px] font-medium text-[#222222]">
              4074 Ebert Summit Suite 375
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
            <img
              src={Mobilechat}
              alt="Phone"
              className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] object-contain shrink-0"
            />
            <span className="text-[13px] sm:text-[14px] font-medium text-[#222222]">
              +44 123 654 7890
            </span>
          </div>

        </div>

      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white border-t md:border-t-0 md:border-l border-gray-50">

        <form className="flex flex-col gap-4 md:gap-5 w-full max-w-full md:max-w-[470px] mx-auto md:mx-0">

          {/* Name */}
          <div className="relative">
            <input
              type="text"
              id="name"
              placeholder=" "
              className="w-full border border-gray-200 rounded-[8px] px-4 py-3 sm:py-3.5 text-[14px] outline-none focus:border-[#901C27] transition-colors peer"
            />

            <label
              htmlFor="name"
              className="absolute left-4 top-3 sm:top-3.5 text-[14px] text-[#1C1B1B] transition-all peer-focus:-top-2.5 peer-focus:text-[12px] peer-focus:bg-white peer-focus:px-1 peer-focus:text-[#901C27] peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:text-[12px] peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:px-1 pointer-events-none"
            >
              Name<span className="text-red-500 text-[16px]">*</span>
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              id="email"
              placeholder=" "
              className="w-full border border-gray-200 rounded-[8px] px-4 py-3 sm:py-3.5 text-[14px] outline-none focus:border-[#901C27] transition-colors peer"
            />

            <label
              htmlFor="email"
              className="absolute left-4 top-3 sm:top-3.5 text-[14px] text-[#1C1B1B] transition-all peer-focus:-top-2.5 peer-focus:text-[12px] peer-focus:bg-white peer-focus:px-1 peer-focus:text-[#901C27] peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:text-[12px] peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:px-1 pointer-events-none"
            >
              Email<span className="text-red-500">*</span>
            </label>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              id="message"
              placeholder=" "
              rows={4}
              className="w-full border border-gray-200 rounded-[8px] px-4 py-3 sm:py-3.5 text-[14px] outline-none focus:border-[#901C27] transition-colors resize-none peer"
            />

            <label
              htmlFor="message"
              className="absolute left-4 top-3 sm:top-3.5 text-[14px] text-[#1C1B1B] transition-all peer-focus:-top-2.5 peer-focus:text-[12px] peer-focus:bg-white peer-focus:px-1 peer-focus:text-[#901C27] peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:text-[12px] peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:px-1 pointer-events-none"
            >
              Message
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#901C27] hover:bg-[#7a1620] text-white font-semibold text-[14px] sm:text-[15px] py-3.5 sm:py-4 rounded-[8px] transition-colors mt-1 sm:mt-2 shadow-sm"
          >
            Submit
          </button>

        </form>

      </div>

    </div>
  );
};

export default ContactUs;