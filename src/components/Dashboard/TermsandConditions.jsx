import React, { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const sections = [
    {
        id: 'acceptance',
        title: 'Acceptance',
        subsections: [
            { subtitle: 'Binding Agreement', text: 'By accessing or using ViralPe services, you agree to these Terms of Service and applicable policies.' },
            { subtitle: 'Scope', text: 'These terms govern all platform features including recharge, bill payments, vouchers, referrals, and wallet operations.' }
        ]
    },
    {
        id: 'eligibility',
        title: 'Eligibility & Account',
        subsections: [
            { subtitle: 'Accurate Information', text: 'You must provide truthful account details and keep profile data updated.' },
            { subtitle: 'Account Security', text: 'You are responsible for account credentials, OTP handling, and transaction PIN confidentiality.' }
        ]
    },
    {
        id: 'acceptable-use',
        title: 'Acceptable Use',
        subsections: [
            { subtitle: 'Prohibited Conduct', text: 'Fraud, misuse, reverse engineering, unauthorized automation, and abusive behavior are strictly prohibited.' },
            { subtitle: 'Compliance', text: 'You agree to comply with all applicable legal, regulatory, and payment ecosystem requirements.' }
        ]
    },
    {
        id: 'billing-refunds',
        title: 'Billing & Refunds',
        subsections: [
            { subtitle: 'Charges', text: 'Applicable charges, fees, and taxes may vary by service and are shown before confirmation when applicable.' },
            { subtitle: 'Refunds', text: 'Refund and reversal handling follows our published refund policy and provider settlement outcomes.' }
        ]
    },
    {
        id: 'user-content',
        title: 'User Content & Ownership',
        subsections: [
            { subtitle: 'Your Content', text: 'You retain rights to lawful content you submit; you grant us required usage rights to operate the service.' },
            { subtitle: 'Platform Material', text: 'Brand assets, software, and proprietary content remain the property of ViralPe and licensors.' }
        ]
    },
    {
        id: 'termination',
        title: 'Termination',
        subsections: [
            { subtitle: 'Suspension', text: 'Accounts may be suspended or terminated for violations, security risks, or legal requirements.' },
            { subtitle: 'Effect', text: 'On termination, access may be revoked and unresolved obligations remain enforceable.' }
        ]
    },
    {
        id: 'disclaimers',
        title: 'Disclaimers & Liability',
        subsections: [
            { subtitle: 'Service Availability', text: 'Services depend on third-party providers and may experience delays, outages, or errors beyond our direct control.' },
            { subtitle: 'Liability Limits', text: 'To the extent permitted by law, liability is limited and excludes indirect, incidental, or consequential damages.' }
        ]
    },
    {
        id: 'governing-law',
        title: 'Governing Law',
        subsections: [
            { subtitle: 'Jurisdiction', text: 'These terms are governed by applicable laws in India and subject to competent jurisdiction as required.' }
        ]
    },
    {
        id: 'changes',
        title: 'Changes to Terms',
        subsections: [
            { subtitle: 'Updates', text: 'We may revise terms periodically. Continued use after updates indicates acceptance of revised terms.' }
        ]
    }
];

export default function TermsAndConditions() {
    // Fixed initial state value to match data keys
    const [activeSection, setActiveSection] = useState('acceptance');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const contentRef = useRef(null);
    const sectionRefs = useRef({});

    // Find label match for mobile dropdown button header text
    const currentActiveTitle = sections.find(s => s.id === activeSection)?.title || 'Terms & Conditions';

    const handleNavClick = (id) => {
        setActiveSection(id);
        setIsDropdownOpen(false); // Closes the mobile navigation dropdown menu automatically

        const container = contentRef.current;
        const section = sectionRefs.current[id];

        if (container && section) {
            container.scrollTo({
                top: section.offsetTop - 20,
                behavior: "smooth",
            });
        } else {
            // Backup smooth viewport scrolling if container defaults to layout limits on small devices
            section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="w-full max-w-[1217px] mx-auto p-4 md:p-6 select-none">
            <div className="flex flex-col lg:flex-row gap-6 items-start justify-center w-full">

                {/* SIDEBAR NAVIGATION COLUMN */}
                <div className="w-full lg:max-w-[370px] shrink-0 z-20">

                    {/* MOBILE DROPDOWN TRIGGER INTERACTION BAR */}
                    <div className="block lg:hidden w-full">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="w-full flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100 font-semibold text-gray-900 text-base"
                        >
                            <span>{currentActiveTitle}</span>
                            <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                    </div>

                    {/* PURE FLEXBOX LINK LINKS LIST PANEL */}
                    <div className={`${isDropdownOpen ? 'flex' : 'hidden'} lg:flex flex-col mt-2 lg:mt-0 w-full p-5 bg-white rounded-xl shadow-sm border border-gray-100 max-h-[573px] `}>
                        <h2 className="hidden lg:block text-[20px] font-semibold text-[#1C1B1B] mb-3">
                            Terms & Conditions
                        </h2>
                        
                        <div className="flex flex-col">
                            {sections.map((section) => {
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

                {/* MAIN CONTENT TEXT CONTAINER AREA */}
                <div
                    ref={contentRef}
                    className="relative w-full lg:w-[811px] h-[70vh] lg:h-auto lg:max-h-[1277px] p-5 overflow-y-auto overflow-x-hidden flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 custom-scrollbar"
                >
                    {/* Top Version Header Bar */}
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

                    {/* Main Legal Copy Stack */}
                    <div className="flex flex-col pt-5 gap-6">
                        {sections.map((section) => (
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