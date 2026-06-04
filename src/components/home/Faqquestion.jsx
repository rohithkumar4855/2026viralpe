import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqs } from "../../data/HomeData";
const FAQSection = () => {
  const [openId, setOpenId] = useState(1);

  const toggleQuestion = (id) => {
    setOpenId(openId === id ? null : id);
  };

 

  return (
    <div className="w-[95%] lg:w-full max-w-[1206px] mt-6 md:mt-[32px] mx-auto bg-white rounded-[16px] md:rounded-[20px] p-5 sm:p-8 md:p-12 shadow-sm border border-gray-50">

      {/* Header */}
      <h2 className="text-[28px] sm:text-[36px] md:text-[52px] font-semibold text-[var(--text-dark)] mb-6 md:mb-8 tracking-tight leading-tight">
        Frequently Asked Questions
      </h2>

      {/* FAQ List */}
      <div className="flex flex-col">

        {faqs.map((faq) => {
          const isOpen = openId === faq.id;

          return (
            <div
              key={faq.id}
              className="border-b border-gray-100 last:border-0 py-4 sm:py-6 first:pt-0"
            >

              {/* Question */}
              <button
                onClick={() => toggleQuestion(faq.id)}
                className="w-full flex items-center justify-between text-left"
              >

                <span className="text-[15px] sm:text-[16px] md:text-[20px] font-semibold text-[var(--text-dark)] pr-4 sm:pr-8 leading-snug">
                  {faq.question}
                </span>

                <div className="text-[var(--primary-red)] flex-shrink-0">
                  {isOpen ? (
                    <ChevronUp size={20} strokeWidth={2.5} className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <ChevronDown size={20} strokeWidth={2.5} className="w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                </div>

              </button>

              {/* Answer */}
              {isOpen && (
                <div className="mt-3 md:mt-4 pr-4 md:pr-12">
                  <p className="text-[13px] sm:text-[14px] md:text-[18px] text-[var(--text-light)] leading-[1.6] md:leading-[1.7]">
                    {faq.answer}
                  </p>
                </div>
              )}

            </div>
          );
        })}

      </div>

    </div>
  );
};

export default FAQSection;