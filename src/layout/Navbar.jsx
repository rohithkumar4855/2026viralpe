import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Menu,
  Search,
  Bell,
  MapPin,
  ChevronDown,
  ChevronRight,
  X,
  Percent
} from "lucide-react";

// --- Shared Imports ---
import logo from "../../public/images/logo.png";
import logouticon from "../../public/images/logout.svg"
import profileicon from "../../public/images/profile.svg"
import voucher from "../../public/images/vouchers.svg"
import wallet from "../../public/images/wallet1.svg"
// --- UserNavbar Specific Imports (SVGs) ---
import vouchers from "../../public/images/vouchers.svg";
import moneyreceiveSvg from "../../public/images/money-receive.svg";
import moneysend from "../../public/images/money-send.svg";
import dthiconSvg from "../../public/images/dthicon.svg";
import fastagiconSvg from "../../public/images/fasttag.svg";
import refer from "../../public/images/refericon.svg";
import transactions from "../../public/images/transcations.svg";
import comingsoon from "../components/Comingsoon"
import home from "/images/home.svg";
// --- Public Navbar Specific Imports (PNGs) ---
import MoneyReceivePng from "../../public/images/money-receive.png";
import dthiconPng from "../../public/images/dthicon.png";
import fastagiconPng from "../../public/images/fastagicon.png";

// ==========================================
// USER NAVBAR COMPONENT (LOGGED IN)
// ==========================================
function UserNavbar({ user }) {
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAllMenuOpen, setIsAllMenuOpen] = useState(false);

  const secondaryNavItems = [
    { name: "All", icon: <Menu size={18} />, path: "/all-services" },
        { name: "DashBoard", icon: <img src={home} alt="Home" />, path: "/dashboard" },
    { name: "Vouchers", icon: <img src={vouchers} alt="Vouchers" className="w-5 h-5 object-contain" />, path: "/Vouchers" },
    { name: "Prepaid Recharge", icon: <img src={moneyreceiveSvg} alt="Vouchers" className="w-5 h-5 object-contain" />, path: "/prepaid" },
    { name: "Postpaid Recharge", icon: <img src={moneysend} alt="Vouchers" className="w-5 h-5 object-contain" />, path: "/prepaid" },
    { name: "DTH Recharge", icon: <img src={dthiconSvg} alt="Vouchers" className="w-5 h-5 object-contain" />, path: "/dth" },
    { name: "FASTag Recharge", icon: <img src={fastagiconSvg} alt="Vouchers" className="w-5 h-5 object-contain" />, path: "/fastag" },
    { name: "Refer & Earn", icon: <img src={refer} alt="Vouchers" className="w-5 h-5 object-contain" />, path: "/refer-and-earn" },
    { name: "Transactions", icon: <img src={transactions} alt="Vouchers" className="w-5 h-5 object-contain" />, path: "/transactions" },
  ];

  const rechargeBillsGroup = [
    { name: "Prepaid Recharge", path: "/prepaid" },
    { name: "Postpaid Recharge", path: "/prepaid" },
    { name: "DTH Recharge", path: "/dth" },
    { name: "FASTag Recharge", path: "/fastag" }
  ];

  const financePayoutsGroup = [
    { name: "My Vouchers", path: "/Vouchers" },
    { name: "My Wallet", path: "/wallet" },
    { name: "Refer & Earn", path: "/refer-and-earn" },
    { name: "My Pincode Dashboard", path: "/pincode-dashboard" }
  ];

  const firstName = user?.name ? user.name.split(" ")[0] : "User";
  const initial = user?.name ? user.name.charAt(0).toUpperCase() : "U";

  return (
    <nav className="sticky top-0 left-0 w-full bg-white z-50 shadow-sm font-sans">

      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 md:px-10 lg:px-[105px]">
  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 py-4 md:h-[100px]">

    {/* Left Side: Logo & Dynamic Greeting */}
    <div className="flex items-center justify-between md:justify-start gap-4 w-full md:w-auto">
      <div className="flex items-center gap-3">
        <div className="cursor-pointer shrink-0" onClick={() => navigate("/dashboard")}>
          <img src={logo} alt="logo" className="w-[60px] h-[60px] md:w-[78px] md:h-[78px] object-contain" />
        </div>
        
        {/* Visible on Mobile & Desktop, adjusted for small viewports */}
        <div className="flex flex-col cursor-default">
          <h1 className="text-gray-900 text-[15px] md:text-[18px] font-semibold leading-tight">
            Hello, {firstName}
          </h1>
          <div className="flex items-center text-gray-500 text-[12px] md:text-[14px] mt-0.5">
            <MapPin size={13} className="text-[#901c27] mr-1 shrink-0" />
            <span>500000</span>
          </div>
        </div>
      </div>

      {/* Mobile Action Controls (Bell & Profile relocated here for easy thumb access on small screens) */}
      <div className="flex items-center gap-2 md:hidden">
        <button className="text-gray-500 hover:text-[#901c27] active:bg-[#FFEDEE] p-2 rounded-full transition-colors cursor-pointer">
          <Bell size={20} />
        </button>

        {/* Profile Dropdown (Mobile) */}
        <div className="relative">
          <div
            className="flex items-center gap-1 cursor-pointer p-1 rounded-xl transition-all"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <div className="bg-[#901c27] w-[36px] h-[36px] rounded-[8px] flex items-center justify-center overflow-hidden shadow-sm shrink-0">
              {user?.photo ? (
                <img src={user.photo} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <h1 className="text-white text-[16px] font-medium">{initial}</h1>
              )}
            </div>
            <ChevronDown size={14} className={`text-gray-500 transition-transform duration-200 ${isProfileOpen ? "rotate-180" : ""}`} />
          </div>
        </div>
      </div>
    </div>

    {/* Center / Right: Search Bar & Desktop Actions */}
    <div className="w-full md:w-auto flex flex-row items-center justify-between md:justify-end gap-4 md:pr-0">
      
      {/* Search Bar container stretches gracefully on mobile */}
      <div className="relative w-full md:w-[320px] lg:w-[385px] rounded-[12px]">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 transition-colors" size={18} />
        <input
          type="text"
          placeholder="Search brands like Myntra, Nike..."
          className="w-full h-[48px] md:h-[54px] bg-white border border-gray-200 text-gray-700 rounded-[12px] py-[10px] pl-12 pr-4 focus:outline-none focus:border-[#901c27]/40 focus:ring-1 focus:ring-[#901c27]/20"
        />
      </div>

      {/* Desktop Actions Block (Hidden on standard mobile viewport layouts) */}
      <div className="hidden md:flex items-center gap-4">
        <button className="text-gray-500 hover:text-[#901c27] hover:bg-[#FFEDEE] p-2.5 rounded-full transition-all duration-200 cursor-pointer">
          <Bell size={22} />
        </button>

        {/* Desktop Profile Dropdown Hook */}
        <div className="relative">
          <div
            className="flex items-center gap-2 cursor-pointer p-1.5 pr-3 rounded-xl transition-all duration-200"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <div className="bg-[#901c27] w-[40px] h-[40px] rounded-[8px] flex items-center justify-center overflow-hidden shadow-sm">
              {user?.photo ? (
                <img src={user.photo} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <h1 className="text-white text-[18px] font-medium">{initial}</h1>
              )}
            </div>
            <ChevronDown size={16} className={`text-gray-500 transition-transform duration-200 ${isProfileOpen ? "rotate-180" : ""}`} />
          </div>
        </div>
      </div>

      {/* Universal Dropdown Drawer Context */}
      {isProfileOpen && (
        <div className="absolute right-4 md:right-0 top-[140px] md:top-auto md:mt-2 w-56 bg-white border border-gray-100 rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] py-2 z-50 animate-fade-in">
          <div className="px-4 py-3 border-b border-gray-100 mb-1">
            <p className="text-sm font-bold text-gray-800 truncate">{user?.name || "User"}</p>
            <p className="text-xs text-gray-500 truncate mt-0.5">{user?.email || "No email provided"}</p>
          </div>

          <div className="p-2 flex flex-col gap-1">
            <button
              onClick={() => { setIsProfileOpen(false); navigate("/profile"); }}
              className="w-full text-left px-3 py-2.5 text-gray-700 hover:bg-[#FFEDEE] hover:text-[#901c27] rounded-lg font-medium transition-all duration-200 cursor-pointer"
            >
              <div className="flex flex-row items-center gap-2">
                <img src={profileicon} alt="" className="w-4 h-4 object-contain" />
                <h4 className="text-[12px]">Profile</h4>
              </div>
            </button>
            <hr className="border-gray-100 my-0.5 mx-2" />
            
            <button
              onClick={() => { setIsProfileOpen(false); navigate("/my-vouchers"); }}
              className="w-full text-left px-3 py-2.5 text-gray-700 hover:bg-[#FFEDEE] hover:text-[#901c27] rounded-lg font-medium transition-all duration-200 cursor-pointer"
            >
              <div className="flex flex-row items-center gap-2">
                <img src={voucher} alt="" className="w-4 h-4 object-contain" />
                <h4 className="text-[12px]">My Vouchers</h4>
              </div>
            </button>
            <hr className="border-gray-100 my-0.5 mx-2" />
            
            <button
              onClick={() => { setIsProfileOpen(false); navigate("/wallet"); }}
              className="w-full text-left px-3 py-2.5 text-gray-700 hover:bg-[#FFEDEE] hover:text-[#901c27] rounded-lg font-medium transition-all duration-200 cursor-pointer"
            >
              <div className="flex flex-row items-center gap-2">
                <img src={wallet} alt="" className="w-4 h-4 object-contain" />
                <h4 className="text-[12px]">My Wallet</h4>
              </div>
            </button>
          </div>

          <div className="border-t border-gray-100 mt-1 pt-1 px-2">
            <button
              onClick={() => {
                localStorage.removeItem("isLoggedIn");
                localStorage.removeItem("userData");
                window.dispatchEvent(new Event("authChange"));
                navigate("/");
              }}
              className="w-full text-left px-3 py-2.5 text-[#C20505] hover:bg-red-50 rounded-lg font-medium transition-all duration-200 cursor-pointer"
            >
              <div className="flex flex-row items-center gap-2">
                <img src={logouticon} alt="" className="w-4 h-4 object-contain" />
                <h4 className="text-[12px]">Logout</h4>
              </div>
            </button>
          </div>
        </div>
      )}

    </div>
  </div>
</div>

      <div className="w-full h-[1px] bg-gray-100"></div>

      {/* --- SECONDARY NAVBAR ITEMS ROW --- */}
      <div className="px-6 md:px-10 lg:px-[115px] py-3 bg-white overflow-x-auto hide-scrollbar border-b border-gray-100">
        <div className="flex items-center gap-2 min-w-max">
          {secondaryNavItems.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                if (item.name === "All") {
                  setIsAllMenuOpen(true);
                } else {
                  navigate(item.path);
                }
              }}
              className="flex items-center gap-2 px-3 py-1 text-gray-600 rounded-[10px] hover:bg-[#FFEDEE] hover:text-[#961a20] cursor-pointer transition-all duration-100 group"
            >
              <span className="text-[#961a20] opacity-80 group-hover:opacity-100 transition-opacity">{item.icon}</span>
              <span className="font-medium text-[14px] whitespace-nowrap">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* --- "ALL" SIDE CONTAINER OVERLAY MODAL --- */}
      {isAllMenuOpen && (
        <div className="fixed inset-0 top-[160px] bg-black/20 z-[100] flex justify-start animate-fade-in">
<div className="fixed left-0 top-[145px] w-[258px] h-[872px] bg-white shadow-2xl z-[100] overflow-y-auto">            
            {/* Header / Close Area */}
           

            <div className="flex flex-col  gap-6">
              {/* Recharge & Pay Bills Section */}
              <div>
                <h3 className="text-[13px] font-bold text-[#901c27] tracking-wider uppercase mb-2 px-6">
                  Recharge & Pay Bills
                </h3>
                <div className="flex flex-col">
                  {rechargeBillsGroup.map((service, i) => (
                    <div key={i} onClick={() => { setIsAllMenuOpen(false); navigate(service.path); }} className="text-[14px] font-medium text-gray-700 hover:text-[#800A1D]  px-6 py-2.5 transition-all duration-200 cursor-pointer block">
                      {service.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Finance & Payouts Section */}
              <div>
                <h3 className="text-[13px] font-bold text-[#901c27] tracking-wider uppercase mb-2 px-6">
                  Finance & Payouts
                </h3>
                <div className="flex flex-col">
                  {financePayoutsGroup.map((service, i) => (
                    <div key={i} onClick={() => { setIsAllMenuOpen(false); navigate(service.path); }} className="text-[14px] font-medium text-gray-700 hover:text-[#800A1D] hover:bg-[#FFEDEE] px-6 py-2.5 transition-all duration-200 cursor-pointer block">
                      {service.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 h-full cursor-pointer" onClick={() => setIsAllMenuOpen(false)}></div>
        </div>
      )}
    </nav>
  );
}

// ==========================================
// MAIN NAVBAR EXPORT (PUBLIC / VIEW)
// ==========================================
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("userData");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    const handleAuthChange = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
      const savedUser = localStorage.getItem("userData");
      setUser(savedUser ? JSON.parse(savedUser) : null);
    };

    window.addEventListener("authChange", handleAuthChange);
    return () => window.removeEventListener("authChange", handleAuthChange);
  }, []);

  if (location.pathname === "/login-user") return null;
  if (isLoggedIn) return <UserNavbar user={user} />;

  const navItems = [
    {
      title: "Recharge & Bills",
      icon: MoneyReceivePng,
      menu: [
        { name: "Prepaid Recharge", path: "/future", icon: <img src={MoneyReceivePng} alt="Prepaid" className="w-5 h-5 object-contain" /> },
        { name: "Post Paid Recharge", path: "/future", icon: <img src={MoneyReceivePng} alt="Postpaid" className="w-5 h-5 object-contain" /> },
        { name: "DTH Recharge", path: "/future", icon: <img src={dthiconPng} alt="DTH" className="w-5 h-5 object-contain" /> },
        { name: "FASTag", path: "/future", icon: <img src={fastagiconPng} alt="FASTag" className="w-[25.8px] h-[24.36px] object-contain" /> },
      ],
    },
    {
      title: "Services",
      icon: MoneyReceivePng,
      isMegaMenu: true,
      columns: [
        [
          { name: "Prepaid Recharge", path: "/future", icon: <img src={MoneyReceivePng} alt="Prepaid" className="w-5 h-5 object-contain" /> },
          { name: "Post Paid Recharge", path: "/future", icon: <img src={MoneyReceivePng} alt="Postpaid" className="w-5 h-5 object-contain" /> },
          { name: "DTH Recharge", path: "/future", icon: <img src={dthiconPng} alt="DTH" className="w-5 h-5 object-contain" /> },
          { name: "FASTag", path: "/future", icon: <img src={fastagiconPng} alt="FASTag" className="w-[25.8px] h-[24.36px] object-contain" /> },
          { type: "header", name: "VOUCHERS" },
          { name: "Gift Vouchers", path: "/future", icon: <img src={fastagiconPng} alt="Gift Vouchers" className="w-[25.8px] h-[24.36px] object-contain" /> },
        ],
        [
          { type: "header", name: "BILL PAYMENTS" },
          { name: "Electricity", path: "/future", icon: <img src={MoneyReceivePng} alt="Electricity" className="w-5 h-5 object-contain" /> },
          { name: "Water", path: "/future", icon: <img src={MoneyReceivePng} alt="Water" className="w-5 h-5 object-contain" /> },
          { name: "Broadband", path: "/future", icon: <img src={dthiconPng} alt="Broadband" className="w-5 h-5 object-contain" /> },
          { name: "LPG Gas", path: "/future", icon: <img src={fastagiconPng} alt="LPG Gas" className="w-[25.8px] h-[24.36px] object-contain" /> },
          { name: "Piped Gas", path: "/future", icon: <img src={fastagiconPng} alt="Piped Gas" className="w-[25.8px] h-[24.36px] object-contain" /> },
          { name: "Insurance", path: "/future", icon: <img src={fastagiconPng} alt="Insurance" className="w-[25.8px] h-[24.36px] object-contain" /> },
          { name: "Loan Payment", path: "/future", icon: <img src={fastagiconPng} alt="Loan Payment" className="w-[25.8px] h-[24.36px] object-contain" /> },
        ]
      ]
    },
    {
      title: "Referral",
      path: "/future"
    }, {
      title: "Company",
      menu: [
        { name: "About Us", icon: <img src={MoneyReceivePng} alt="Prepaid" className="w-5 h-5 object-contain" /> },
        { name: "Contact Us", icon: <img src={MoneyReceivePng} alt="Postpaid" className="w-5 h-5 object-contain" /> },
        { name: "Management ", icon: <img src={MoneyReceivePng} alt="DTH" className="w-5 h-5 object-contain" /> },
        { name: "Branches", icon: <img src={dthiconPng} alt="FASTag" className="w-[25.8px] h-[24.36px] object-contain" /> },
        { name: "Coverage", icon: <img src={fastagiconPng} alt="FASTag" className="w-[25.8px] h-[24.36px] object-contain" /> },
      ]
    },
    {
      title: "Vendors",
      menu: [
        { name: "Retail", hasArrow: true, path: "/future" },
        { name: "Health Care", hasArrow: true, path: "/future" },
        { name: "Transportation & Logistics", hasArrow: true, path: "/future" },
        { name: "Professional Services", hasArrow: true, path: "/future" },
        { name: "Food & Beverages", hasArrow: true, path: "/future" },
        { name: "Financial Services", hasArrow: true, path: "/future" },
        { name: "Entertainment & Lifestyle", hasArrow: true, path: "/future" },
        { name: "Education", hasArrow: true, path: "/future" },
      ]
    },
  ];

  return (
    <>
      {openDropdown !== null && (
  <div className="fixed inset-0 bg-black/50 z-40"></div>
)}

<nav className="fixed top-0 left-0 w-full px-6 md:px-10 pt-[5px] pb-[4.16px] flex items-center justify-between md:justify-evenly bg-white z-50 shadow-sm border-b border-gray-100">
  <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
    <img src={logo} alt="ViralPe Logo" className="w-[90.84px] h-[90.84px]" />
    <h1 className="text-[#901c27] text-[26px] font-bold tracking-tight">ViralPe</h1>
  </div>

  {/* --- DESKTOP NAVBAR --- */}
  <div className="hidden md:flex items-center gap-2 lg:gap-8">
    {navItems.map((item, index) => (
      <div key={index} className="relative flex flex-col items-center" onMouseEnter={() => setOpenDropdown(index)} onMouseLeave={() => setOpenDropdown(null)}>

        {/* Main Nav Items with Hover Background */}
        <div className="flex flex-col items-center cursor-pointer py-2 px-4 rounded-xl transition-all duration-200 mt-2"
          onClick={() => {
            if (item.path) {
              navigate(item.path);
            }
          }}>
          <div className="flex items-center gap-[6px] text-[18px] text-(--primary-red) font-medium">
            {item.title}
            {(item.menu || item.isMegaMenu) && (
              <ChevronDown size={18} className={`transition-transform duration-300 ${openDropdown === index ? "rotate-180 text-[#901c27]" : "text-gray-400"}`} />
            )}
          </div>
          <div className={`h-[3px] bg-[#901c27] rounded-t-full transition-all duration-300 absolute bottom-0 ${openDropdown === index ? "w-[60%]" : "w-0"}`}></div>
        </div>

        {openDropdown === index && (
          <>
            {item.menu && !item.isMegaMenu && (
              <div className="absolute top-[100%] left-1/2 -translate-x-1/2 mt-3 min-w-[260px] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] py-2 z-50 before:content-[''] before:absolute before:-top-6 before:left-0 before:w-full before:h-6 before:bg-transparent">
                <div className="absolute -top-[8px] left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 rounded-sm shadow-[-4px_-4px_10px_rgb(0,0,0,0.04)]"></div>

                <div className="relative z-10 bg-white flex flex-col gap-1">
                  {item.menu.map((menuItem, i) => {
                    const isObject = typeof menuItem === "object";
                    return (
                      <div
                        key={i}
                        onClick={() => {
                          if (menuItem.path) {
                            navigate(menuItem.path);
                            setOpenDropdown(null);
                            return;
                          }

                          if (["About Us", "Contact Us"].includes(menuItem.name?.trim())) {
                            navigate("/about-us");
                            setOpenDropdown(null);
                          }

                          if (menuItem.name?.trim() === "Management") {
                            navigate("/management");
                            setOpenDropdown(null);
                          }
                        }}
                        className="flex items-center justify-between px-4 py-3 hover:bg-[#FFEDEE] hover:text-[#901c27] rounded-xl cursor-pointer transition-all duration-200 group">
                        <div className="flex items-center gap-4">
                          {isObject && menuItem.icon && (
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center group-hover:bg-white transition-colors">
                              {menuItem.icon}
                            </div>
                          )}

                          <span className="text-gray-700 group-hover:text-[#901c27] font-semibold text-[15px] whitespace-nowrap transition-colors">
                            {isObject ? menuItem.name : menuItem}
                          </span>
                        </div>
                        {isObject && menuItem.hasArrow && <ChevronRight size={18} className="text-gray-400 group-hover:text-[#901c27] flex-shrink-0 transition-colors" strokeWidth={2.5} />}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {item.isMegaMenu && (
              <div className="absolute top-[100%] left-1/2 -translate-x-1/2 mt-2 min-w-[600px] bg-white rounded-3xl shadow-[0_20px_50px_rgb(0,0,0,0.15)] z-50 border border-gray-100 overflow-visible animate-fade-in before:content-[''] before:absolute before:-top-6 before:left-0 before:w-full before:h-6 before:bg-transparent">
                <div className="absolute -top-[8px] left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 rounded-sm shadow-[-4px_-4px_10px_rgb(0,0,0,0.04)] z-10"></div>
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#901c27] to-[#e63946]"></div>

                <div className="relative z-20 bg-white flex gap-8 px-8 py-8 rounded-3xl">
                  {item.columns.map((col, colIndex) => (
                    <div key={colIndex} className="flex-1 flex flex-col">
                      {col.map((link, i) => link.type === "header" ? (
                        <h4 key={i} className={`text-[11px] font-extrabold text-gray-400 uppercase tracking-widest mb-3 px-3 ${i !== 0 ? "mt-8" : ""}`}>{link.name}</h4>
                      ) : (
                        <div
                          key={i}
                          onClick={() => {
                            if (link.path) {
                              navigate(link.path);
                              setOpenDropdown(null);
                            }
                          }}
                          className="flex items-center gap-3 py-2.5 px-3 hover:bg-[#FFEDEE] cursor-pointer transition-all duration-200 rounded-xl group"
                        >
                          <div className="flex items-center justify-center w-8 h-8 rounded-lg group-hover:bg-white transition-colors">
                            {link.icon}
                          </div>
                          <span className="text-gray-700 font-semibold text-[14.5px] group-hover:text-[#901c27] transition-colors">
                            {link.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    ))}
  </div>

  {/* Desktop Login Button */}
  <button
    onClick={() => navigate("/login-user")}
    className="hidden md:block font-bold py-[12px] px-[28px] bg-[#901c27] text-white cursor-pointer rounded-xl hover:bg-[#7a1620] hover:shadow-lg hover:-translate-y-[1px] active:translate-y-[0px] transition-all duration-200"
  >
    Login
  </button>

  {/* Mobile Menu Action Trigger Button */}
  <button className="md:hidden text-[#901c27] p-2 hover:bg-gray-100 rounded-lg transition-colors" onClick={() => setIsOpen(!isOpen)}>
    {isOpen ? <X size={28} /> : <Menu size={28} />}
  </button>

  {/* --- FIXED MOBILE DROPDOWN CONTAINER --- */}
  {isOpen && (
    <div className="absolute top-[90px] left-0 w-full bg-white shadow-xl md:hidden flex flex-col p-6 gap-4 h-[calc(100vh-90px)] overflow-y-auto pb-32 animate-slide-right border-t border-gray-100">
      
      {/* Loop Through Nav Items Data On Mobile */}
      {navItems.map((item, index) => (
        <div key={index} className="flex flex-col border-b border-gray-50 pb-3">
          
          {/* Main Title Clickable Link */}
          <div 
            className="flex items-center justify-between text-gray-800 font-semibold text-[18px] py-2 cursor-pointer"
            onClick={() => {
              if (item.path) {
                navigate(item.path);
                setIsOpen(false);
              }
            }}
          >
            <span>{item.title}</span>
          </div>

          {/* Standard Dropdown Menu Sublinks */}
          {item.menu && !item.isMegaMenu && (
            <div className="flex flex-col gap-2 pl-4 mt-1 bg-gray-50/50 rounded-xl p-2">
              {item.menu.map((menuItem, i) => {
                const isObject = typeof menuItem === "object";
                const label = isObject ? menuItem.name : menuItem;
                return (
                  <div
                    key={i}
                    onClick={() => {
                      setIsOpen(false);
                      if (isObject && menuItem.path) return navigate(menuItem.path);
                      if (["About Us", "Contact Us"].includes(label?.trim())) return navigate("/about-us");
                      if (label?.trim() === "Management") return navigate("/management");
                    }}
                    className="flex items-center gap-3 py-2 text-gray-600 font-medium text-[15px] active:text-[#901c27]"
                  >
                    {isObject && menuItem.icon && <div className="w-5 h-5 shrink-0">{menuItem.icon}</div>}
                    <span>{label}</span>
                  </div>
                );
              })}
            </div>
          )}

          {/* Mega Menu Dropdown Sublinks */}
          {item.isMegaMenu && item.columns && (
            <div className="flex flex-col gap-4 pl-4 mt-2 bg-gray-50/50 rounded-xl p-3">
              {item.columns.map((col, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-2">
                  {col.map((link, i) => link.type === "header" ? (
                    <h5 key={i} className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mt-2 first:mt-0">{link.name}</h5>
                  ) : (
                    <div
                      key={i}
                      onClick={() => {
                        if (link.path) {
                          navigate(link.path);
                          setIsOpen(false);
                        }
                      }}
                      className="flex items-center gap-3 py-1.5 text-gray-600 font-medium text-[14.5px]"
                    >
                      {link.icon && <div className="w-5 h-5 shrink-0">{link.icon}</div>}
                      <span>{link.name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Mobile Login Button Wrapper */}
      <div className="mt-4 pt-2">
        <button
          onClick={() => {
            navigate("/login-user");
            setIsOpen(false);
          }}
          className="w-full text-center font-bold py-[14px] bg-[#901c27] text-white rounded-xl active:bg-[#7a1620] transition-all duration-200"
        >
          Login
        </button>
      </div>
    </div>
  )}
</nav>
    </>
  );
}