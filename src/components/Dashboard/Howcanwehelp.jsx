import React, { useState, useEffect, useRef } from 'react';
import { Send, Image, Loader2 } from 'lucide-react';
import voucher from "/images/voucher.svg";

const ChatSupportAI = () => {
  // --- State for FAQ Accordion ---
  const [openIndex, setOpenIndex] = useState(0);

  // --- State for Chat Panel ---
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'support',
      text: "Hi! I am your AI assistant. How can I help you with your account, transactions, or general queries today?",
      time: '08:20 AM',
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isAiTyping, setIsAiTyping] = useState(false);
  const chatEndRef = useRef(null);

  // --- Support Cards Static Data (Fixed) ---
  const supportCards = [
    {
      id: 1,
      icon: voucher,
      title: "How vouchers work?",
    },
    {
      id: 2,
      icon: voucher, // Swap with a gift icon variable if needed
      title: "How refer and earn works?",
    },
    {
      id: 3,
      icon: voucher,
      title: "How refer and earn works?",
    },
    {
      id: 4,
      icon: voucher,
      title: "How refer and earn works?",
    },
    {
      id: 5,
      icon: voucher,
      title: "How refer and earn works?",
    }
  ];

  // FAQ Static Data
  const faqData = [
    {
      id: 1,
      title: 'Question 1',
      content: (
        <ul className="list-disc pl-5 space-y-3 text-gray-600 text-sm md:text-base leading-relaxed">
          <li>Valid for all registered ViralPe users with completed KYC verification.</li>
          <li>One voucher per user per transaction. Cannot be split across multiple orders.</li>
          <li>Cannot be combined with other discount codes, bank offers, or promotional vouchers.</li>
          <li className="list-none pt-2">
            <a href="#" className="font-semibold text-black underline hover:text-gray-700 transition-colors">
              View Full Terms
            </a>
          </li>
        </ul>
      ),
    },
    {
      id: 2,
      title: 'Question 2',
      content: <p className="text-gray-600 text-sm">To verify your profile, go to Settings &gt; KYC verification and upload your document.</p>,
    },
    {
      id: 3,
      title: 'Question 3',
      content: <p className="text-gray-600 text-sm">Vouchers are credited immediately post successful payment processing.</p>,
    },
    {
      id: 4,
      title: 'Question 4',
      content: <p className="text-gray-600 text-sm">Refunds usually take 5-7 business days to reflect back into your bank account.</p>,
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Auto scroll to bottom when new messages arrive
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isAiTyping]);

  // Pure Text AI Intent Response Processing
  const processAiPrompt = (prompt) => {
    const lowercasePrompt = prompt.toLowerCase();
    let textResponse = "Thank you for reaching out. I've received your query and am looking into it. Can you please provide more details?";

    if (lowercasePrompt.includes('sales') || lowercasePrompt.includes('revenue') || lowercasePrompt.includes('quarter')) {
      textResponse = "Our quarterly sales report shows excellent progress. Profits scaled up significantly during Q3, driven by new account acquisitions.";
    } else if (lowercasePrompt.includes('traffic') || lowercasePrompt.includes('user') || lowercasePrompt.includes('visitor')) {
      textResponse = "Our traffic analytics indicate steady growth over the past 5 months. Daily active users peaked dramatically over the last week.";
    } else if (lowercasePrompt.includes('viralpe') || lowercasePrompt.includes('account')) {
      textResponse = "To create a ViralPe account, open the app and sign up. Creating an account is 100% free with no monthly maintenance fees.";
    }

    return textResponse;
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const currentTime = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userPrompt = inputValue;

    // 1. Add User message to stream
    setMessages((prev) => [...prev, { id: Date.now(), sender: 'user', text: userPrompt, time: currentTime() }]);
    setInputValue('');
    setIsAiTyping(true);

    // 2. Simulate AI Processing Delay
    setTimeout(() => {
      const aiTextResponse = processAiPrompt(userPrompt);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'support',
          text: aiTextResponse,
          time: currentTime(),
        }
      ]);
      setIsAiTyping(false);
    }, 1200);
  };

  return (
    <div className=" flex flex-col items-center min-h-screen">
      <div className="text-4xl flex flex-col gap-5 relative">
        <h1>How can we help you?</h1>
        <i className="bi bi-search absolute bottom-0 -left-10"></i>
        <input type='text' placeholder='search ' className='border rounded-2xl p-2 pl-20 -ml-14 w-[367px] h-[54px] text-xl' />
      </div>
      {/* Horizontal Carousel List */}
      <div className="w-full max-w-[1216px] flex gap-4 p-2 overflow-x-auto scrollbar-hide">
        {supportCards.map((card) => (
          <div
            key={card.id}
            className="flex items-center gap-3 bg-white px-5 py-3.5 rounded-xl border border-gray-100 shadow-sm whitespace-nowrap cursor-pointer hover:border-gray-200 transition-all"
          >
            {/* Render the icon */}
            <img src={card.icon} alt="" className="w-5 h-5 object-contain" />

            {/* Render the text */}
            <span className="text-sm font-medium text-gray-800">{card.title}</span>
          </div>
        ))}
      </div>

      {/* Grid Layout Containers */}
      <div className="w-full max-w-[1216px] flex flex-col lg:flex-row items-start justify-center gap-8">

        {/* FAQ Component Section */}
        <div className="w-full lg:max-w-[592px] min-h-[549px] bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">FAQ's</h2>

          <div className="divide-y divide-gray-100">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={item.id} className="py-3 first:pt-0 last:pb-0">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center text-left py-2 font-semibold text-gray-800 hover:text-black focus:outline-none transition-colors"
                  >
                    <span className="text-base md:text-lg">{item.title}</span>
                    {/* Chevron Icon */}
                    <svg
                      className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>

                  {/* Expandable Content Container */}
                  <div
                    className={`grid transition-all duration-200 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'
                      }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-2 text-gray-600">
                        {item.content}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Chat Support Component Section */}
        <div className="flex flex-col h-[549px] w-full lg:max-w-[592px] bg-white border border-gray-100 shadow-xl rounded-xl overflow-hidden font-sans">
          {/* Header */}
          <div className="px-6 py-5 border-b border-gray-100 bg-white flex items-center justify-between flex-shrink-0">
            <div>
              <h1 className="text-xl font-bold text-gray-900">AI Support Assistant</h1>
              <p className="text-xs text-green-500 font-medium flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse"></span> Online
              </p>
            </div>
          </div>

          {/* Chat Messages Display Area */}
          <div className="flex-1 overflow-y-auto p-6 bg-slate-50/50 space-y-6">
            <div className="flex justify-center">
              <span className="bg-gray-200/60 text-gray-700 text-[11px] px-3 py-1 rounded-md font-medium uppercase tracking-wider">
                Today
              </span>
            </div>

            <div className="space-y-6">
              {messages.map((msg) => {
                const isSupport = msg.sender === 'support';
                return (
                  <div
                    key={msg.id}
                    className={`flex flex-col max-w-[85%] min-w-0 ${isSupport ? 'mr-auto items-start' : 'ml-auto items-end'}`}
                  >
                    {/* Text Message Bubble */}
                    <div
                      className={`p-4 rounded-2xl text-[14px] leading-relaxed shadow-sm ${isSupport
                        ? 'bg-white text-gray-800 rounded-tl-none border border-gray-100'
                        : 'bg-rose-50 text-gray-900 rounded-tr-none'
                        }`}
                    >
                      {msg.text}
                    </div>

                    {/* Message Timestamp */}
                    <span className="text-[10px] text-gray-400 mt-1.5 px-1 tracking-wide">
                      {msg.time}
                    </span>
                  </div>
                );
              })}

              {isAiTyping && (
                <div className="flex items-center gap-2 mr-auto bg-white border border-gray-100 p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-500">
                  <Loader2 size={16} className="animate-spin text-[#8B1E2B]" />
                  <span>AI typing...</span>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>
          </div>

          {/* Message Input Bar Footer */}
          <div className="p-4 border-t border-gray-100 bg-white flex-shrink-0">
            <form onSubmit={handleSend} className="flex items-center gap-3">
              <div className="relative flex-1 flex items-center border border-gray-200 rounded-lg bg-white px-4 py-3 focus-within:border-gray-400 transition-colors">
                <input
                  type="text"
                  placeholder="Type your question here..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full bg-transparent text-gray-700 placeholder-gray-400 outline-none pr-10 text-[14px]"
                />
                <button
                  type="button"
                  className="absolute right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <Image size={18} strokeWidth={1.5} />
                </button>
              </div>
              <button
                type="submit"
                className="flex items-center justify-center bg-[#8B1E2B] hover:bg-[#721823] text-white p-3.5 rounded-xl transition-colors shadow-md"
              >
                <Send size={16} fill="currentColor" className="transform rotate-45 -translate-x-0.5 -translate-y-0.5" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ChatSupportAI;