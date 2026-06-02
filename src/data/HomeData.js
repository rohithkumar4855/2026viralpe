import myntra from  "../../public/images/myntra.png";
import starbucks from "../../public/images/starbucks.png";
import nike from "../../public/images/nike.png";
import Headphoneicon from "../../public/images/headphone.svg";
import Messageicon from "../../public/images/textbox.png";
import Mailicon from "../../public/images/envelope.png";
import verified from "../../public/images/verified1.png"
import people from "../../public/images/people.png"
import Gift from "../../public/images/gift1.png"
import Bulb from  "../../public/images/bulb.png"
import shakehands from "../../public/images/shakehands.png"
import Threepeople from "../../public/images/threepeople.png"
import image from "/images/owner.png";
import image2 from "/images/owner2.png";
import owner2 from "/images/owner-2.svg";
import owner3 from "/images/owner-4.svg";
import owner4 from "/images/owner-5.svg";
import image1 from "/images/owner-3.png";


export const rechargeData = [
    {
        id: 1,
        title: "Prepaid Recharge",
        icon: "/images/recharge.png",
        alt: "Prepaid",
    },
    {
        id: 2,
        title: "Postpaid Recharge",
        icon: "/images/recharge.png",
        alt: "Postpaid",
    },
    {
        id: 3,
        title: "DTH Recharge",
        icon: "/images/dthicon.png",
        alt: "DTH",
    },
    {
        id: 4,
        title: "FASTag Recharge",
        icon: "/images/fastagicon.png",
        alt: "FASTag",
    },
];

export const headings = {
    1: "Prepaid Recharge",
    2: "Postpaid Recharge",
    3: "DTH Recharge",
    4: "FASTag Recharge",
};

export const labels = {
    1: "Mobile Number",
    2: "Mobile Number",
    3: "Subscriber ID/Registered Mobile Number",
    4: "Bank",
};


export const WalletandEarningsCard =[
  {
    id: 1,
    icon: "/images/wallet.svg", // Direct root path
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

  export const vouchers = [
    {
      id: 1,
      brand: 'Myntra',
      priceText: 'Starting Price from ₹200',
      badgeText: '5% Cashback',
      badgeType: 'green',
      logoUrl: myntra
    },
    {
      id: 2,
      brand: 'Starbucks',
      priceText: 'Starting Price from ₹200',
      badgeText: 'Get ₹50 Cashback',
      badgeType: 'blue',
      logoUrl: starbucks
    },
    {
      id: 3,
      brand: 'Nike',
      priceText: 'Starting Price from ₹200',
      badgeText: '',
      badgeType: 'none',
      logoUrl: nike
    },
    {
      id: 4,
      brand: 'Myntra',
      priceText: 'Starting Price from ₹200',
      badgeText: '5% Cashback',
      badgeType: 'green',
      logoUrl: myntra
    },
    {
      id: 5,
      brand: 'Starbucks',
      priceText: 'Starting Price from ₹200',
      badgeText: '5% Cashback',
      badgeType: 'green',
      logoUrl: starbucks
    },
    {
      id: 6,
      brand: 'Myntra',
      priceText: 'Starting Price from ₹200',
      badgeText: '5% Cashback',
      badgeType: 'green',
      logoUrl: myntra
    },
    {
      id: 7,
      brand: 'Myntra',
      priceText: 'Starting Price from ₹200',
      badgeText: '5% Cashback',
      badgeType: 'green',
      logoUrl: myntra
    },
  ];




  export const steps = [
    {
      id: 1,
      title: "Share Your Code",
      description: "Send your referral code to friends and family.",
    },
    {
      id: 2,
      title: "They Sign Up",
      description: "Your referral joins ViralPe using your code.",
    },
    {
      id: 3,
      title: "You Earn Rewards",
      description: "Get cashback credited straight to your wallet.",
    },
  ];



  export const supportOptions = [
    {
      id: 1,
      icon: Headphoneicon,
      title: "Need Help?",
      subtitle: "We're here 24/7 for you",
      actionText: "+91 90000 00000",
    },
    {
      id: 2,
      icon: Messageicon,
      title: "Live Chat",
      subtitle: "Chat With Our Support\nTeam",
      actionText: "",
    },
    {
      id: 3,
      icon: Mailicon,
      title: "Email Support",
      subtitle: "We're here 24/7 for you",
      actionText: "Support@ViralPe.com",
    },
  ];



   export const faqs = [
    {
      id: 1,
      question: "How do I redeem a voucher?",
      answer:
        'Redeeming a voucher typically involves entering a unique code during the checkout process on a retailer\'s website/app, or presenting a QR code/code in-store. For online purchases, locate the "gift card" or "promo code" section at payment, enter the code, and click apply to deduct the amount.',
    },
    {
      id: 2,
      question: "What if my recharge fails?",
      answer:
        "If your recharge fails, the amount will be refunded within 3-5 business days automatically.",
    },
    {
      id: 3,
      question: "When will I get Cashback?",
      answer:
        "Cashback is credited instantly to your wallet after successful transaction.",
    },
  ];



export const cardsData = [
  {
    id: 1,
    image: verified,
    title: "SSL Secured",
    description: "We Prioritize the trust of our users and ensure highest standards of security in everything we do."
    },
  {
    id: 2,
    image: people,
    title: "Bank Level Security",
    description: "We Prioritize the trust of our users and ensure highest standards of security in everything we do."
  },
  {
  id: 3,
    image: Gift,
    title: "Fraud Protection",
    description: "We believe in celebrating every transaction by offering rewards and giving back to society."
  },
  {
    id: 4,
    image: Bulb,
    title: "KYC verified",
    description: "We constantly innovate to create simple, smart and impactful solutions for a better digital tomorrow.",
  },
  {
    id: 5,
    image: shakehands,
    title: "Privacy First",
    description: "We operate with transparency, honesty and fairness in all our interactions."
  },
  {
    id: 6,
    image:Threepeople,
    title: "ISO Certified",
    description: "We empower Individuals, businesses and communities to grow, earn and create a better future together",
  },
];  

 export const teamMembers = [
        {
            name: "Dr. P R Srinivasan",
            role: "Chairman & Managing Director",
            image: image,
            bigImage: image2,
            bio: "ViralPe is a smart fintech platform that transforms everyday payments into rewarding experiences. Users can pay bills, recharge services, and make transactions seamlessly while earning cashback or reward points on each payment."
        },
        {
            name: "Ms. Aditi Sharma",
            role: "Chief Financial Officer",
            image: owner4,
            bigImage: image2,
            bio: "Aditi manages our comprehensive financial frameworks, ensuring high scalability and resource optimization. She steers fiscal compliance and capital allocation models to secure our expansion trajectories."
        },
        {
            name: "Dr. Neha Verma",
            role: "Vice President of Research",
            image: owner3,
            bigImage: image2,
            bio: "Neha guides our product innovation strategy through intensive analytics and predictive design algorithms. Her research lays down the technological foundational pillars behind our real-time architectures."
        },
        {
            name: "Mr. Sanjay Patel",
            role: "Head of Marketing",
            image: owner2,
            bigImage: image2,
            bio: "Sanjay leads our cross-border branding framework strategies, expanding our digital market footprint. His campaigns bridge user engagement with intuitive product experiences globally."
        },
        {
            name: "Ms. Priya Iyer",
            role: "Director of Human Resources",
            image: owner4,
            bigImage: image2,
            bio: "Priya orchestrates our organizational workforce planning strategy and cultural optimization initiatives. She is dedicated to nurturing internal engineering talents and driving structural evolution."
        },
        {
            name: "Mr.Rajesh Gupta",
            role: "Chief Technology Officer",
            image: owner4,
            bigImage: image2,
            bio: "Rajesh leads our technological innovation and development initiatives, ensuring we stay at the forefront of industry advancements. His expertise drives the creation of scalable and efficient solutions."
        },
        {
            name: "Ms.Priya Sharma",
            role: "Marketing Manager",
            image: owner3,
            bigImage: image2,
            bio: "Priya  oversees our operational excellence and process optimization strategies. His leadership ensures seamless execution of our business initiatives and maintains high standards of service delivery."
        }
    ];


    export  const associatePartners = [
            { name: "Dr. P R Srinivasan", role: "Chairman & Managing Director", image: image1 },
            { name: "Ms. A B Gupta", role: "Chief Financial Officer", image: image1 },
            { name: "Mr. G H Kumar", role: "Head of Sales", image: image1 },
            { name: "Ms. E F Khan", role: "Director of Marketing", image: image1 },
            { name: "Mr. C D Patel", role: "Chief Technology Officer", image: image1 },
            { name: "Dr. I J Verma", role: "Chief Operations Officer", image: image1 },
            { name: "Dr. S T Iyer", role: "Research and Development Lead", image: image1 },
            { name: "Ms. K L Singh", role: "HR Manager", image: image1 },
            { name: "Ms. U V Sharma", role: "Brand Strategist", image: image1 },
            { name: "Mr. M N Reddy", role: "Product Manager", image: image1 },
            { name: "Dr. P R Srinivasan", role: "Chairman & Managing Director", image: image1 },
            { name: "Ms. A B Gupta", role: "Chief Financial Officer", image: image1 },
            { name: "Mr. G H Kumar", role: "Head of Sales", image: image1 },
            { name: "Ms. E F Khan", role: "Director of Marketing", image: image1 },
            { name: "Mr. C D Patel", role: "Chief Technology Officer", image: image1 },
            { name: "Dr. I J Verma", role: "Chief Operations Officer", image: image1 },
            { name: "Dr. S T Iyer", role: "Research and Development Lead", image: image1 },
            { name: "Ms. K L Singh", role: "HR Manager", image: image1 },
            { name: "Ms. U V Sharma", role: "Brand Strategist", image: image1 },
            { name: "Mr. M N Reddy", role: "Product Manager", image: image1 },
             { name: "Dr. I J Verma", role: "Chief Operations Officer", image: image1 },
            { name: "Dr. S T Iyer", role: "Research and Development Lead", image: image1 },
            { name: "Ms. K L Singh", role: "HR Manager", image: image1 },
            { name: "Ms. U V Sharma", role: "Brand Strategist", image: image1 },
            { name: "Mr. M N Reddy", role: "Product Manager", image: image1 },
        ];
    