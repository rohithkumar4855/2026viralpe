import React, { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const refundSections = [
    {
        id: 'refund-eligibility',
        title: 'Refund Eligibility',
        subsections: [
            { subtitle: 'Successful Delivery', text: 'Completed and successful provider deliveries are generally not eligible for refund unless mandated by law or provider reversal.' },
            { subtitle: 'Failed/Uncertain Status', text: 'Transactions marked failed or unresolved beyond settlement windows are reviewed for refund or reversal.' }
        ]
    },
    {
        id: 'processing-timeline',
        title: 'Processing Timeline',
        subsections: [
            { subtitle: 'Standard Cycle', text: 'Eligible refunds are initiated after verification and may take additional banking time to reflect in source account/wallet.' },
            { subtitle: 'Communication', text: 'You can track outcomes through transaction status, support tickets, and registered communication channels.' }
        ]
    },
    {
        id: 'partial-duplicate',
        title: 'Partial or Duplicate Cases',
        subsections: [
            { subtitle: 'Partial Settlements', text: 'In case of partial execution/adjustment, only the net eligible amount is processed as refund or credit.' },
            { subtitle: 'Duplicate Charges', text: 'Duplicates are validated against gateway/provider references before corrective action.' }
        ]
    },
    {
        id: 'non-refundable',
        title: 'Non Refundable Cases',
        subsections: [
            { subtitle: 'User Input Errors', text: 'Incorrect number/operator/account details entered by user may be ineligible once provider confirms success.' },
            { subtitle: 'Policy Abuse', text: 'Fraudulent or policy-violating activity is excluded from refund rights and may trigger restrictions.' }
        ]
    },
    {
        id: 'charge-backs',
        title: 'Charge Backs',
        subsections: [
            { subtitle: 'Dispute Path', text: 'Payment disputes and chargebacks are handled as per gateway/acquirer rules and supporting evidence.' },
            { subtitle: 'Impact', text: 'Improper chargebacks can affect account standing and future transaction permissions.' }
        ]
    }
];

export default function RefundPolicy() {
    // Corrected initial active context mapping target key
    const [activeSection, setActiveSection] = useState('refund-eligibility');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const contentRef = useRef(null);
    const sectionRefs = useRef({});

    // Pull current fallback string label configuration dynamically 
    const currentActiveTitle = refundSections.find(s => s.id === activeSection)?.title || 'Refund Policy';

    const handleNavClick = (id) => {
        setActiveSection(id);
        setIsDropdownOpen(false); // Collapses mobile menu panel wrapper container automatically on tap

        const container = contentRef.current;
        const section = sectionRefs.current[id];

        if (container && section) {
            container.scrollTo({
                top: section.offsetTop - 20,
                behavior: "smooth",
            });
        } else {
            // Instant tracking anchor alignment backup safe layer execution 
            section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="w-full max-w-[1217px] mx-auto p-4 md:p-6 select-none">
            <div className="flex flex-col lg:flex-row gap-6 items-start justify-center w-full">

                {/* RESPONSIVE NAVIGATION WRAPPER */}
                <div className="w-full lg:max-w-[370px] shrink-0 z-20">

                    {/* TAP TO INTERACT MOBILE SELECT BAR MENU */}
                    <div className="block lg:hidden w-full">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="w-full flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100 font-semibold text-gray-900 text-base shadow-sm"
                        >
                            <span>{currentActiveTitle}</span>
                            <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                    </div>

                    {/* SIDEBAR NAVIGATION BLOCK */}
                    <div className={`${isDropdownOpen ? 'flex' : 'hidden'} lg:flex flex-col mt-2 lg:mt-0 w-full p-5 bg-white rounded-xl shadow-sm border border-gray-100 max-h-[432px] `}>
                        <h2 className="hidden lg:block text-[20px] font-semibold text-[#1C1B1B] mb-3">
                            Refund Policy
                        </h2>

                        <div className="flex flex-col">
                            {refundSections.map((section) => {
                                const isActive = activeSection === section.id;

                                return (
                                    <div key={section.id} className="flex flex-col">
                                        <button
                                            onClick={() => handleNavClick(section.id)}
                                            className={`w-full flex items-center justify-between py-4 text-sm font-medium transition-all duration-200 relative ${
                                                isActive ? "text-[#C53030] text-[16px] font-bold" : "text-gray-600 hover:text-gray-900"
                                            }`}
                                        >
                                            <span>{section.title}</span>

                                            <svg
                                                className={`w-4 h-4 transition-transform ${isActive ? "text-[#C53030] translate-x-1" : "text-gray-400"}`}
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2.5"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                            </svg>

                                            {isActive && (
                                                <div className="hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rotate-45 border-r border-t border-gray-100" />
                                            )}
                                        </button>
                                        <hr className="border-gray-100" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* MAIN LEGAL CONTENT CONTAINER WINDOW */}
                <div
                    ref={contentRef}
                    className="relative w-full lg:w-[811px] h-[70vh] lg:h-auto lg:max-h-[1277px] p-5 overflow-y-auto overflow-x-hidden flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 custom-scrollbar"
                >
                    {/* Top Version and Log Metadata Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4 gap-4 border-b border-gray-50">
                        <div className="flex items-center text-xs text-gray-500 font-medium">
                            <span className="px-2 py-1 bg-[#FFEDEE] text-[#C53030] rounded-md font-bold mr-2.5">v1.1.0</span>
                            <span>Published on 02 May 2024, 10:46 AM</span>
                        </div>

                        <button className="flex items-center justify-center py-2.5 px-4 gap-2 border border-[#C53030] text-[#C53030] rounded-xl text-sm font-bold hover:bg-[#FFF5F5] transition-colors active:scale-98 shrink-0">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download as PDF
                        </button>
                    </div>

                    {/* Policy Clauses Content List Array */}
                    <div className="flex flex-col pt-5 gap-6">
                        {refundSections.map((section) => (
                            <section
                                key={section.id}
                                ref={(el) => (sectionRefs.current[section.id] = el)}
                                className={`flex flex-col scroll-mt-6 rounded-xl transition-all p-2 ${activeSection === section.id ? 'bg-slate-50/40' : ''}`}
                            >
                                <h3 className="text-base font-bold text-[#C53030] tracking-wide pb-2 border-b border-dashed border-gray-100">
                                    {section.title}
                                </h3>

                                <div className="flex flex-col mt-3 gap-3 pl-1">
                                    {section.subsections.map((sub, idx) => (
                                        <div key={idx} className="flex flex-col">
                                            <h4 className="text-sm font-bold text-gray-900 mb-0.5">
                                                {sub.subtitle}
                                            </h4>
                                            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                                                {sub.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}