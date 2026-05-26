// data.js
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


export const WalletandEarningsCard =[
  {
    id: 1,
    icon: "/images/location.png", // Direct root path
    title: "Wallet Balance",
    amount: "₹ 5,000.00",
  
  },
  {
    id: 2,
    icon: "/images/vendor.png",
    title: "Zonal Royalty",
    amount: "₹ 5,000.00",

  },
  {
    id: 3,
    icon: "/images/gift.png",
    title: "Lifetime earnings",
     amount: "₹ 5,000.00",

  },
  {
    id: 4,
    icon: "/images/overlay.png",
    title: "Total Cashback",
    amount: "₹ 5,000.00",

  },
   {
    id: 5,
    icon: "/images/overlay.png",
    title: " Referral Bonus",
    amount: "₹ 5,000.00",
    
  },
   {
    id: 6,
    icon: "/images/overlay.png",
    title: "Reversal Wallet",
    amount: "₹5,000.00",

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
        icon: '/images/lock.png',
        isRating: false,
    },
    {
        id: "instant-delivery",
        title: "Instant Code Delivery",
        description: "Get Vouchers In Seconds",
        icon: '/images/thunder.png',
        isRating: false,
    },
    {
        id: "customer-support",
        title: "24/7 Customer Support",
        description: "Help available round the clock",
        icon: '/images/headphones.png',
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
        icon: '/images/lock.png',
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
        icon: '/images/headphones.png',
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
    icon: '/images/lock.png'
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
    icon: '/images/wallet1.svg'
  }
];
