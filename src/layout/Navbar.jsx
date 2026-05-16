import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../../public/images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Navigation Items
  const navItems = [
    {
      title: "Recharge & Bills",
      menu: ["Mobile Recharge", "Electricity", "DTH", "Water Bill"],
    },
    {
      title: "Services",
      menu: ["Insurance", "Loans", "Credit Card"],
    },
    {
      title: "Referral",
      menu: ["Invite Friends", "Rewards"],
    },
    {
      title: "Company",
      menu: ["About Us", "Careers", "Contact"],
    },
    {
      title: "Vendors",
      menu: ["Become Vendor", "Vendor Login"],
    },
  ];

  return (
    <nav className="max-w-360 w-full mx-auto px-10 flex items-center justify-between md:justify-evenly bg-white z-100 relative">

      <div className="flex items-center">
        <img
          src={logo}
          alt="ViralPe Logo"
          className="w-[90.84px] h-[90.84px]"
        />

        <h1 className="text-(--primary-red) text-[26px]">
          ViralPe
        </h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-10">
        {navItems.map((item, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setOpenDropdown(index)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            {/* Nav Item */}
            <div className="flex items-center gap-[9.5px] cursor-pointer text-lg text-(--primary-red)">
              {item.title}
              <ChevronDown size={16} />
            </div>

            {/* Dropdown */}
            {openDropdown === index && (
              <div className="absolute top-full left-0 mt-3 min-w-55 bg-white shadow-lg rounded-lg py-3 z-200">
                {item.menu.map((menuItem, i) => (
                  <p
                    key={i}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer whitespace-nowrap"
                  >
                    {menuItem}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop Login */}
      <button className="hidden md:block login-btn font-semibold py-[12.19px] px-[23.93px] bg-(--primary-red) text-white cursor-pointer rounded-lg">
        Login
      </button>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-(--primary-red)"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-22 left-0 w-full bg-white shadow-lg md:hidden flex flex-col p-6 gap-6">

          {navItems.map((item, index) => (
            <div key={index}>
              <div className="flex items-center justify-between text-(--primary-red) text-lg font-medium">
                {item.title}
              </div>

              <div className="flex flex-col gap-2 mt-2 pl-3">
                {item.menu.map((menuItem, i) => (
                  <p key={i} className="text-gray-600">
                    {menuItem}
                  </p>
                ))}
              </div>
            </div>
          ))}

          <button className="font-semibold py-3 px-6 bg-(--primary-red) text-white rounded-lg">
            Login
          </button>

        </div>
      )}
    </nav>
  );
}