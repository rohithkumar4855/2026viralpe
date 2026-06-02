// data.js

import Myntra from "/images/myntra.png"
import StarBucks from "/images/starbucks.png"
import Nike from "/images/nike.png"
import Trends from "/images/trends.svg"
import myntra from "/images/myntra.png";
import starbucks from "/images/starbucks.png";
import jio from "/images/jio.svg"
import airtel from "/images/airtel.svg"
import Thunder from "/images/thunder.svg"
import discount from "/images/discount.svg"
import Wallet from "/images/wallet2.svg"
import lock from "/images/lock.svg"
import Vi from "/images/vi.svg";
import Bsnl from "/images/bsnl.svg"
import tata from "/images/tataicon.svg";
import airteldth from "/images/airtelicon.svg";
import dishtv from "/images/dishtvicon.svg";
import sundirect from "/images/sundirecticon.svg";
import Axis from "/images/axis.svg";
import Bajaj from "/images/bajaj.svg";
import icic from "/images/iciclogo.svg";
import idfc from "/images/idfclogo.svg";
import gift from "/images/gift4.svg";
import wallet from "/images/wallet1.svg";
import limit from "/images/limit.svg";
import coins from "/images/coins1.svg";
import bonus from "/images/bonus.svg";
import cashback from "/images/cash2.svg";
import circular from "/images/circular.svg";

export const earningsData = [
  {
    id: 1,
    icon: "/images/location.png", // Direct root path
    title: "Zonal Royalty",
    amount: "₹ 25,000.00",
  },
  {
    id: 2,
    icon: "/images/vendor.png",
    title: "Vendor Royalty",
    amount: "₹ 25,000.00",
  },
  {
    id: 3,
    icon: "/images/gift.png",
    title: "Total Cashback",
    amount: "₹ 25,000.00",
  },
  {
    id: 4,
    icon: "/images/overlay.png",
    title: "Total Referral Bonus",
    amount: "₹ 25,000.00",
  },
];



export const statsData = [
  {
    id: 1,
    value: "12",
    label: "Transactions",
  },
  {
    id: 2,
    value: "₹320",
    label: "Cashback Earned",
  },
  {
    id: 3,
    value: "₹200",
    label: "Cashback Claimed",
  },
];
// export in Revenue.jsx


// data.js
export const transactionData = [
  {
    id: '1',
    logoUrl: '/images/myntra.png',
    title: 'Myntra Voucher Purchase',
    date: '06 May 2026, 02:48PM',
    amount: 300,
    isPositive: false,
    status: 'Success'
  },
  {
    id: '2',
    logoUrl: '/images/myntra.png',
    title: 'Cashback on Myntra',
    date: '06 May 2026, 02:48PM',
    amount: 300,
    isPositive: true,
    status: 'Credited'
  },
  {
    id: '3',
    logoUrl: '/images/starbucks.png',
    title: 'Starbucks Voucher Purchase',
    date: '06 May 2026, 02:48PM',
    amount: 300,
    isPositive: false,
    status: 'Success'
  },
  {
    id: '4',
    logoUrl: '/images/starbucks.png',
    title: 'Starbucks Voucher Purchase',
    date: '06 May 2026, 02:48PM',
    amount: 300,
    isPositive: false,
    status: 'Credited'
  }
];

export const referralData = {
  avatars: [
    "https://i.pravatar.cc/100?img=1",
    "https://i.pravatar.cc/100?img=2",
    "https://i.pravatar.cc/100?img=3"
  ],
  extraAvatarsCount: 6,
  bonusAmount: 100,
  friendsJoinedWeek: 3,
  totalEarned: 200
};



export const FeatureBannerCard = [
  {
    id: "secure-payments",
    title: "100% Secure Payments",
    description: "256-bit SSL Encrypted",
    icon: '/images/lock.svg',
    isRating: false,
  },
  {
    id: "instant-delivery",
    title: "Instant Code Delivery",
    description: "Get Vouchers In Seconds",
    icon: '/images/thunder.svg',
    isRating: false,
  },
  {
    id: "customer-support",
    title: "24/7 Customer Support",
    description: "Help available round the clock",
    icon: '/images/headphone.svg',
    isRating: false,
  },
  {
    id: "trusted-users",
    title: "Trusted By 1M+ Users",
    description: "4.8/5",
    icon: '/images/vector.svg',
    isRating: true,
  },
];

export const FeatureBannerCard2 = [
  {
    id: "secure-payments",
    title: "100% Secure Payments",
    description: "256-bit SSL Encrypted",
    icon: '/images/lock.svg',
    isRating: false,
  },
  {
    id: "instant-delivery",
    title: "Accepted At All Toll plazas",
    description: "All Over the India",
    icon: '/images/fastagicon.png',
    isRating: false,
  },
  {
    id: "customer-support",
    title: "24/7 Customer Support",
    description: "Help available round the clock",
    icon: '/images/headphone.svg',
    isRating: false,
  },
  {
    id: "trusted-users",
    title: "Trusted By 1M+ Users",
    description: "4.8/5",
    icon: '/images/vector.svg',
    isRating: true,
  },
];


export const FeatureBannerCard3 = [
  {
    "id": 1,
    "title": "100% Secure",
    "description": "Your data and earnings are completely safe",
    icon: '/images/lock.svg'
  },
  {
    "id": 2,
    "title": "No Limits",
    "description": "Refer unlimited friends and earn unlimited rewards",
    icon: '/images/limit.svg'
  },
  {
    "id": 3,
    "title": "Instant Rewards",
    "description": "Get ₹25 instantly in your wallet",
    icon: '/images/gift4.svg'
  },
  {
    "id": 4,
    "title": "Easy Withdrawals",
    "description": "Withdraw your earnings to bank or wallet anytime",
    icon: '/images/wallet2.svg'
  }
];

export const features = [
  {
    id: "secure-payments",
    title: "100% Secure Payments",
    description: "256-bit SSL Encrypted",
    icon: '/images/lock.png',
    isRating: false,
  },
  {
    id: "instant-delivery",
    title: "Instant Code Delivery",
    description: "Get Vouchers In Seconds",
    icon: '/images/Thunder.svg',
    isRating: false,
  },
  {
    id: "customer-support",
    title: "24/7 Customer Support",
    description: "Help available round the clock",
    icon: '/images/Headphones.png',
    isRating: false,
  },
  {
    id: "trusted-users",
    title: "Trusted By 1M+ Users",
    description: "4.8/5",
    icon: '/images/Vector.svg',
    isRating: true,
  },
];

export const voucherData = [
  { id: 1, brand: 'Myntra', logo: Nike, tag: 'Get ₹50 Cashback', isPromo: true, category: 'Fashion', price: 200, discount: 5 },
  { id: 2, brand: 'Starbucks', logo: myntra, tag: '5% Cashback', isPromo: false, category: 'Food', price: 150, discount: 5 },
  { id: 3, brand: 'Starbucks', logo: starbucks, tag: '5% Cashback', isPromo: false, category: 'Food', price: 150, discount: 5 },
  { id: 4, brand: 'Starbucks', logo: myntra, tag: '5% Cashback', isPromo: false, category: 'Food', price: 150, discount: 5 },
  { id: 5, brand: 'Starbucks', logo: Nike, tag: '5% Cashback', isPromo: false, category: 'Food', price: 150, discount: 5 },
  { id: 6, brand: 'Starbucks', logo: myntra, tag: '5% Cashback', isPromo: false, category: 'Food', price: 150, discount: 5 },
  { id: 7, brand: 'Starbucks', logo: myntra, tag: '5% Cashback', isPromo: false, category: 'Food', price: 150, discount: 5 }
];

export const vouchersData = [
  { id: 1, brand: 'Myntra', logo: Myntra, tag: 'Get ₹50 Cashback', isPromo: true, category: 'Fashion', price: "Starting Price from ₹200", discount: 5 },
  { id: 2, brand: 'Starbucks', logo: StarBucks, tag: '5% Cashback', isPromo: false, category: 'Food', price: "Starting Price from ₹200", discount: 5 },
  { id: 3, brand: 'Nike', logo: Nike, tag: 'Starting Price from ₹200', isPromo: false, noHeaderTag: true, category: 'Fashion', price: "Starting Price from ₹200", discount: 12 },
  { id: 4, brand: 'Myntra', logo: Myntra, tag: 'Get ₹50 Cashback', isPromo: true, category: 'Fashion', price: "Starting Price from ₹200", discount: 4 },
  { id: 5, brand: 'Starbucks', logo: StarBucks, tag: '5% Cashback', isPromo: false, category: 'Food', price: "Starting Price from ₹200", discount: 5 },
  { id: 6, brand: 'Nike', logo: Nike, tag: 'Starting Price from ₹200', isPromo: false, noHeaderTag: true, category: 'Fashion', price: "Starting Price from ₹200", discount: 14 },
  { id: 7, brand: 'Trends', logo: Trends, tag: 'Get ₹50 Cashback', isPromo: true, category: 'Fashion', price: "Starting Price from ₹200", discount: 3 },
  { id: 8, brand: 'Starbucks', logo: StarBucks, tag: '5% Cashback', isPromo: false, category: 'Food', price: "Starting Price from ₹200", discount: 5 },
  { id: 9, brand: 'Trends', logo: Trends, tag: '5% Cashback', isPromo: false, category: 'Fashion', price: "Starting Price from ₹200", discount: 8 },
  { id: 10, brand: 'Nike', logo: Nike, tag: '10% OFF', isPromo: false, category: 'Beauty', price: "Starting Price from ₹200", discount: 10 },
  { id: 11, brand: 'Starbucks', logo: StarBucks, tag: '5% Cashback', isPromo: false, category: 'Food', price: "Starting Price from ₹200", discount: 5 },
  { id: 12, brand: 'Nike', logo: Nike, tag: 'Starting Price from ₹200', isPromo: false, noHeaderTag: true, category: 'Fashion', price: "Starting Price from ₹200", discount: 14 },
  { id: 13, brand: 'Trends', logo: Trends, tag: 'Get ₹50 Cashback', isPromo: true, category: 'Fashion', price: "Starting Price from ₹200", discount: 3 },
  { id: 14, brand: 'Starbucks', logo: StarBucks, tag: '5% Cashback', isPromo: false, category: 'Food', price: "Starting Price from ₹200", discount: 5 },
  { id: 15, brand: 'Trends', logo: Trends, tag: '5% Cashback', isPromo: false, category: 'Fashion', price: "Starting Price from ₹200", discount: 8 },
  { id: 16, brand: 'Nike', logo: Nike, tag: '10% OFF', isPromo: false, category: 'Beauty', price: "Starting Price from ₹200", discount: 10 },
  { id: 17, brand: 'Starbucks', logo: StarBucks, tag: '5% Cashback', isPromo: false, category: 'Food', price: "Starting Price from ₹200", discount: 5 },
  { id: 18, brand: 'Nike', logo: Nike, tag: 'Starting Price from ₹200', isPromo: false, noHeaderTag: true, category: 'Fashion', price: "Starting Price from ₹200", discount: 14 },
  { id: 19, brand: 'Trends', logo: Trends, tag: 'Get ₹50 Cashback', isPromo: true, category: 'Fashion', price: "Starting Price from ₹200", discount: 3 },
  { id: 20, brand: 'Starbucks', logo: StarBucks, tag: '5% Cashback', isPromo: false, category: 'Food', price: "Starting Price from ₹200", discount: 5 },
  { id: 21, brand: 'Trends', logo: Trends, tag: '5% Cashback', isPromo: false, category: 'Fashion', price: "Starting Price from ₹200", discount: 8 },
  { id: 22, brand: 'Nike', logo: Nike, tag: '10% OFF', isPromo: false, category: 'Beauty', price: "Starting Price from ₹200", discount: 10 },
  { id: 23, brand: 'Myntra', logo: Myntra, tag: 'Get ₹50 Cashback', isPromo: true, category: 'Fashion', price: "Starting Price from ₹200", discount: 5 },
  { id: 24, brand: 'Starbucks', logo: StarBucks, tag: '5% Cashback', isPromo: false, category: 'Food', price: "Starting Price from ₹200", discount: 5 },
  { id: 25, brand: 'Nike', logo: Nike, tag: 'Starting Price from ₹200', isPromo: false, noHeaderTag: true, category: 'Fashion', price: "Starting Price from ₹200", discount: 12 },
];



//prepaid 
export const ReachargeOn = [
  { title: 'Instant Recharge', desc: 'Recharge in just a seconds', icon: Thunder },
  { title: 'Best Plans', desc: 'Compare and choose the best plans', icon: discount },
  { title: 'Earn Cashback', desc: 'Earn cashback on every recharge', icon: Wallet },
  { title: 'Secure Payments', desc: '256-bit SSL encrypted transactions', icon: lock },
];

export const RecentRecharges = [
  { number: "+91 90000 90000", price: "₹456", icon: airtel },
  { number: "+91 90000 90000", price: "₹456", icon: airtel },
  { number: "+91 90000 90000", price: "₹456", icon: jio },
  { number: "+91 90000 90000", price: "₹456", icon: airtel },
];

export const AllNetwork = [
  { icon: airtel, name: 'Airtel', cb: '5% Cashback' },
  { icon: Bsnl, name: 'BSNL', cb: '15% Cashback' },
  { icon: jio, name: 'Jio', cb: '10% Cashback' },
  { icon: Vi, name: 'Vi', cb: '20% Cashback' },
  { icon: Vi, name: 'Vi', cb: '20% Cashback' },
];


// Mock Data for Recharge Plans
export const plansData = [
  {
    id: 1,
    price: 450,
    badge: 'Popular',
    cashback: '5% Cashback',
    validity: '28 Days',
    data: 'Unlimited',
    desc: 'Add-On data pack for ULD users; Includes Unlimited Data, 28 days, No SV. Valid on ULD Hero plan T&C Apply',
  },
  {
    id: 2,
    price: 900,
    badge: 'Exclusive',
    cashback: '20% Cashback',
    validity: '90 Days',
    data: '200GB',
    desc: 'Ultimate plan with 200GB data and additional benefits like international calling. Valid on Elite plan T&C Apply',
  },
  {
    id: 3,
    price: 1000,
    badge: 'Best Deal',
    cashback: '20% Cashback',
    validity: '90 Days',
    data: '200GB',
    desc: 'Offers 200GB data valid for 90 days, includes unlimited calls and texts. Valid on Ultimate plan T&C Apply',
  },
  {
    id: 4,
    price: 500,
    badge: 'Value Pick',
    cashback: '10% Cashback',
    validity: '30 Days',
    data: '100GB',
    desc: 'Offers 100GB data valid for 30 days, includes access to select streaming services. Valid on Basic plan T&C Apply',
  },
  {
    id: 5,
    price: 750,
    badge: 'Top Choice',
    cashback: '15% Cashback',
    validity: '60 Days',
    data: '150GB',
    desc: 'Offers 150GB data valid for 60 days, including priority customer service. Valid on Premium plan T&C Apply',
  },
  {
    id: 6,
    price: 600,
    badge: 'Best Value',
    cashback: '10% Cashback',
    validity: '30 Days',
    data: '100GB',
    desc: 'Includes a 100GB data pack with rollover benefits. Valid on SuperSaver plan T&C Apply',
  },
];


//DTH recharge

export const recentdthRecharges = [
  {
    image: tata,
    name: "Tata Play",
    id: "149805048",
    amount: "₹456",
    daysLeft: "25 Days Left",
    badgeClass: "text-[#2E7D32] bg-[#E8F5E9]",
    imageClass: "h-[36px] w-[36px]",
  },
  {
    image: dishtv,
    name: "DishTV",
    id: "90809 879988",
    amount: "₹456",
    daysLeft: "12 Days Left",
    badgeClass: "text-[#E65100] bg-[#FFF3E0]",
    imageClass: "h-[50px] w-[50px]",
  },
  {
    image: sundirect,
    name: "DishTV",
    id: "90809 879988",
    amount: "₹456",
    daysLeft: "2 Days Left",
    badgeClass: "text-[#D32F2F] bg-[#FFEBEE]",
    imageClass: "h-[46px] w-[46px]",
  },
];


export const dthOperators = [
  { type: "tata", logo: tata, label: "Tata Play", cashback: "5% Cashback" },
  { type: "dish", logo: dishtv, label: "Dish TV", cashback: "5% Cashback" },
  { type: "airtel", logo: airteldth, label: "Airtel Digital TV", cashback: "5% Cashback" },
  { type: "sun", logo: sundirect, label: "Sun Direct", cashback: "5% Cashback" },
];


export const dthplansData = [
    {
        id: 1,
        price: 299,
        plan: "HD Value Plus",
        cashback: "5% Cashback",
        validity: "28 Days",
        desc: "Add-On data pack..."
    },
    {
        id: 2,
        price: 499,
        plan: "Family Entertainment",
        cashback: "20% Cashback",
        validity: "90 Days",
        desc: "Ultimate plan..."
    }
];

//Fastag

export const banksData = [
    { id: 1, name: "Axis Bank", logo: Axis, cb: "5% Cashback" },
    { id: 2, name: "Bajaj Finserv", logo: Bajaj, cb: "5% Cashback" },
    { id: 3, name: "IDFC First Bank", logo: idfc, cb: "5% Cashback" },
    { id: 4, name: "ICICI Bank", logo: icic, cb: "5% Cashback" },
    { id: 5, name: "Axis Bank", logo: Axis, cb: "5% Cashback" },
    { id: 6, name: "Bajaj Finserv", logo: Bajaj, cb: "5% Cashback" },
    { id: 7, name: "IDFC First Bank", logo: idfc, cb: "5% Cashback" },
    { id: 8, name: "ICICI Bank", logo: icic, cb: "5% Cashback" },
    { id: 9, name: "Axis Bank", logo: Axis, cb: "20% Cashback" }, // specific to screenshot
    { id: 10, name: "Bajaj Finserv", logo: Bajaj, cb: "5% Cashback" },
    { id: 11, name: "IDFC First Bank", logo: idfc, cb: "5% Cashback" },
    { id: 12, name: "ICICI Bank", logo: icic, cb: "5% Cashback" },
    { id: 13, name: "Axis Bank", logo: Axis, cb: "5% Cashback" },
    { id: 14, name: "Bajaj Finserv", logo: Bajaj, cb: "5% Cashback" },
    { id: 15, name: "IDFC First Bank", logo: idfc, cb: "5% Cashback" },
];

export const recentRecharges = [
    { id: 1, logo: idfc, vehicle: "AP 10 2345", amount: "₹500", date: "01 May 2026, 10:09AM", bg: "bg-[#faeaea]" },
    { id: 2, logo: Bajaj, vehicle: "AP 10 2345", amount: "₹500", date: "01 May 2026, 10:09AM", bg: "bg-[#eaf3fc]" },
    { id: 3, logo: icic, vehicle: "AP 10 2345", amount: "₹500", date: "01 May 2026, 10:09AM", bg: "bg-[#faeaea]" },
];


export const reachargefastag = [
    { title: 'Instant Recharge', desc: 'Recharge in just a seconds', icon: Thunder },
    { title: 'Best Plans', desc: 'Compare and choose the best plans', icon: discount },
    { title: 'Earn Cashback', desc: 'Earn cashback on every recharge', icon: Wallet },
    { title: 'Secure Payments', desc: '256-bit SSL encrypted transactions', icon: lock },
];

export const fastagrecentRecharges = [
    { id: 1, logo: idfc, vehicle: "AP 10 2345", amount: "₹500", date: "01 May 2026, 10:09AM", bg: "bg-[#faeaea]" },
    { id: 2, logo: Bajaj, vehicle: "AP 10 2345", amount: "₹500", date: "01 May 2026, 10:09AM", bg: "bg-[#eaf3fc]" },
    { id: 3, logo: icic, vehicle: "AP 10 2345", amount: "₹500", date: "01 May 2026, 10:09AM", bg: "bg-[#faeaea]" },
  ];


 export  const fastagReachargeOn = [
    { title: 'Instant Recharge', desc: 'Recharge in just a seconds', icon: Thunder },
    { title: 'Best Plans', desc: 'Compare and choose the best plans', icon: discount },
    { title: 'Earn Cashback', desc: 'Earn cashback on every recharge', icon: Wallet },
    { title: 'Secure Payments', desc: '256-bit SSL encrypted transactions', icon: lock },
  ];


   export const rechargeOptions = [
    { amount: '200', cashback: '5% Cashback' },
    { amount: '300', cashback: '10% Cashback' },
    { amount: '350', cashback: '12% Cashback' },
    { amount: '250', cashback: '6% Cashback' },
    { amount: '400', cashback: '8% Cashback' },
    { amount: '100', cashback: '3% Cashback' },
  ];



    export const myReferrals = [
    { id: 1, name: "Arun Kumar", phone: "+91 90000 00000", date: "02 May 2026, 10:30 AM", amount: "₹25", status: "Earned" },
    { id: 2, name: "Bhavna Singh", phone: "+91 91000 11111", date: "03 May 2026, 11:00 AM", amount: "₹15", status: "Pending" },
    { id: 3, name: "Chirag Mehta", phone: "+91 91200 22222", date: "04 May 2026, 12:00 PM", amount: "₹45", status: "Earned" },
    { id: 4, name: "Arun Kumar", phone: "+91 90000 00000", date: "02 May 2026, 10:30 AM", amount: "₹25", status: "Earned" },
  ];

 export const topReferrers = [
    { rank: 1, name: "Rohit Sharma", amount: "₹9,680.00" },
    { rank: 2, name: "Virat Kohli", amount: "₹8,250.00" },
    { rank: 3, name: "Jasprit Bumrah", amount: "₹7,500.00" },
    { rank: 9, name: "Srinivas", amount: "₹3,900.00", isCurrentUser: true },
    { rank: 4, name: "KL Rahul", amount: "₹3,820.00" },
  ];


  export const myvouchersData = [
      {
          id: 'myntra-1',
          brand: 'Myntra',
          logoSrc: Myntra, // Using the import directly
          count: 3,
          totalValue: 1400,
          expanded: true,
          items: [
              { id: 'v1', amount: 700, orderId: 'VPEMY100987789', date: '30 Apr 2024, 10:19 AM', redeemed: false },
              { id: 'v2', amount: 700, orderId: 'VPEMY100987789', date: '30 Apr 2024, 10:19 AM', redeemed: true },
              { id: 'v3', amount: 700, orderId: 'VPEMY100987789', date: '30 Apr 2024, 10:19 AM', redeemed: false },
          ]
      },
      {
          id: 'starbucks-1',
          brand: 'Starbucks',
          logoSrc: StarBucks, 
          count: 3,
          totalValue: 1400,
          expanded: false,
          items: []
      },
      {
          id: 'nike-1',
          brand: 'Nike',
          logoSrc: Nike, 
          count: 3,
          totalValue: 1400,
          expanded: false,
          items: []
      },
      {
          id: 'trends-1',
          brand: 'Reliance Trends',
          logoSrc: Trends, 
          count: 3,
          totalValue: 1400,
          expanded: false,
          items: []
      }
  ];
  


 export const topTransactionData = [
    { id: 1, title: 'WALLET BALANCE', amount: '₹ 5,000.00', subtitle: 'Available to Use', icon: wallet },
    { id: 2, title: 'ZONAL ROYALTY', amount: '₹ 5,000.00', subtitle: 'Total Earned Till Date', icon: wallet },
    { id: 3, title: 'LIFETIME EARNIN...', amount: '₹ 25,000.00', subtitle: 'Total Earned Till Date', icon: coins },
    { id: 4, title: 'TOTAL CASHBACK', amount: '₹ 25,000.00', subtitle: 'Total Cashback In This Month', icon: cashback },
    { id: 5, title: 'REFERRAL BONUS', amount: '₹ 25,000.00', subtitle: 'Pending Claim', icon: bonus },
    { id: 6, title: 'REVERSAL WALLET', amount: '₹ 25,000.00', subtitle: 'Pending Claim', icon: circular },
];
export const listTransactions = [
    { id: 1, type: 'Prepaid Recharge', details: 'Airtel Prepaid - 90000 00000', date: '07 May 2026, 10:16 AM', amount: '₹199.00', status: 'Success', iconType: 'out' },
    { id: 2, type: 'Postpaid Recharge', details: 'Airtel Prepaid - 90000 00000', date: '07 May 2026, 10:16 AM', amount: '₹199.00', status: 'Success', iconType: 'out' },
    { id: 3, type: 'DTH Recharge', details: 'Tata Play - 14800007', date: '08 May 2026, 11:30 AM', amount: '₹299.00', status: 'Failed', iconType: 'out' },
    { id: 4, type: 'Referral Bonus', details: 'Referral - Ramesh Kumar', date: '11 May 2026, 09:15 AM', amount: '+ ₹50.00', status: 'Success', iconType: 'in' },
    { id: 5, type: 'Cashback Received', details: 'For Mobile Recharge', date: '09 May 2026, 02:45 PM', amount: '+ ₹50.00', status: 'Success', iconType: 'in' },
    { id: 6, type: 'Wallet Topup', details: 'Added from Bank Account', date: '09 May 2026, 10:00 AM', amount: '+ ₹500.00', status: 'Success', iconType: 'in' },
    { id: 7, type: 'Electricity Bill', details: 'BESCOM - 123456789', date: '10 May 2026, 11:00 AM', amount: '₹1,250.00', status: 'Success', iconType: 'out' }
];


export const securityFeatures = [
    { id: 1, title: "100% Secure", description: "Your data and earnings are completely safe", icon: lock },
    { id: 2, title: "No Limits", description: "Refer unlimited friends and earn unlimited rewards", icon: limit },
    { id: 3, title: "Instant Rewards", description: "Get ₹25 instantly in your wallet", icon: gift },
    { id: 4, title: "Easy Withdrawals", description: "Withdraw your earnings to bank or wallet anytime", icon: wallet }
];


