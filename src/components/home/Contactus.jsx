import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="w-full max-w-[1206px] mt-[32px] mx-auto min-h-[503px] bg-white rounded-[20px] shadow-sm border border-gray-100 flex flex-col md:flex-row overflow-hidden">

      {/* Left Side */}
      <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">

        <h2 className="text-[40px] md:text-[46px] font-bold text-[#222222] tracking-tight mb-4 leading-none">
          Contact Us
        </h2>

        <p className="text-[15px] text-gray-600 leading-relaxed mb-10 max-w-[420px]">
          We are committed to processing the information in order to contact you and talk about your project.
        </p>

        <div className="flex flex-col gap-6">

          <div className="flex items-center gap-4">
            <Mail className="text-[#901C27]" size={20} strokeWidth={2} />
            <span className="text-[14px] font-medium text-[#222222]">
              example@teamwebflow.com
            </span>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="text-[#901C27]" size={20} strokeWidth={2} />
            <span className="text-[14px] font-medium text-[#222222]">
              4074 Ebert Summit Suite 375
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="text-[#901C27]" size={20} strokeWidth={2} />
            <span className="text-[14px] font-medium text-[#222222]">
              +44 123 654 7890
            </span>
          </div>

        </div>

      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white">

        <form className="flex flex-col gap-5 w-full max-w-[480px]">

          {/* Name */}
          <div className="relative">
            <input
              type="text"
              id="name"
              placeholder=" "
              className="w-full border border-gray-200 rounded-[8px] px-4 py-3.5 text-[14px] outline-none focus:border-[#901C27] transition-colors peer"
            />

            <label
              htmlFor="name"
              className="absolute left-4 top-3.5 text-[14px] text-gray-500 transition-all peer-focus:-top-2.5 peer-focus:text-[12px] peer-focus:bg-white peer-focus:px-1 peer-focus:text-[#901C27] peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:text-[12px] peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:px-1 pointer-events-none"
            >
              Name<span className="text-red-500">*</span>
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              id="email"
              placeholder=" "
              className="w-full border border-gray-200 rounded-[8px] px-4 py-3.5 text-[14px] outline-none focus:border-[#901C27] transition-colors peer"
            />

            <label
              htmlFor="email"
              className="absolute left-4 top-3.5 text-[14px] text-gray-500 transition-all peer-focus:-top-2.5 peer-focus:text-[12px] peer-focus:bg-white peer-focus:px-1 peer-focus:text-[#901C27] peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:text-[12px] peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:px-1 pointer-events-none"
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
              className="w-full border border-gray-200 rounded-[8px] px-4 py-3.5 text-[14px] outline-none focus:border-[#901C27] transition-colors resize-none peer"
            />

            <label
              htmlFor="message"
              className="absolute left-4 top-3.5 text-[14px] text-gray-500 transition-all peer-focus:-top-2.5 peer-focus:text-[12px] peer-focus:bg-white peer-focus:px-1 peer-focus:text-[#901C27] peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:text-[12px] peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:px-1 pointer-events-none"
            >
              Message
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#901C27] hover:bg-[#7a1620] text-white font-semibold text-[15px] py-4 rounded-[8px] transition-colors mt-2 shadow-sm"
          >
            Submit
          </button>

        </form>

      </div>

    </div>
  );
};

export default ContactUs;