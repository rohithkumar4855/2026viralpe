import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Management from "../pages/Management";
import Login from "../pages/Login";
import Vouchers from "../components/Dashboard/Vouchers"
import VoucherDetails from "../components/Dashboard/VoucherDetails"
import PaymentScreen from "../components/Dashboard/Payments";
import LoginPage from "../components/Dashboard/Userloginpage";
import PaymentSuccess from "../components/Dashboard/PaymentSuccess";
import PrepaidRecharge from "../components/Dashboard/PrepaidRecharge";
import Chooseaplan from "../components/Dashboard/ChooseaPlan";
import FastagRecharge from "../components/Dashboard/FastagRecharge"
import Dthrecharge from "../components/Dashboard/Dthrecharge"
import ReferEarn from "../components/Dashboard/Referearn";
import Transcations from "../components/Dashboard/Transcations"
import Fastagdetails from "../components/Dashboard/Fasttagdetails"
import UserVouchers from "../components/Dashboard/UserVouchers"
import Vouchercode from "../components/Dashboard/VoucherCode"
import Wallet from "../components/Dashboard/Wallet"
import ComingSoon from "../components/Comingsoon";
import Dthdetails from "../components/Dashboard/Dthdetails"
import PrivacyPolicy from "../components/Dashboard/PrivacyPolicy"
import Termsandconditions from "../components/Dashboard/TermsandConditions"
import RefundPolicy from "../components/Dashboard/Refundpolicy";
import Dashboard from "../../src/pages/Dashboard";
import Profile from "../components/Dashboard/MyProfile"
import Faq from "../components/Dashboard/Howcanwehelp"
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/management" element={<Management />} />
      <Route path="/dashboard-details" element={<Dashboard />} />
      <Route path="/login-user" element={<LoginPage />} />
      <Route path="/dashboard" element={<Login />} />
      <Route path="/vouchers" element={<Vouchers />} />
      <Route path="/voucher-details" element={<VoucherDetails />} />
      <Route path="/payment-details" element={<PaymentScreen />} />
      <Route path="/payment-success" element={<PaymentSuccess />} />
      <Route path="/prepaid" element={<PrepaidRecharge />} />
      <Route path="/prepaid-plans" element={<Chooseaplan />} />
      <Route path="/dth" element={< Dthrecharge />} />
      <Route path="/fastag" element={<FastagRecharge />} />
      <Route path="/refer-and-earn" element={< ReferEarn />} />
      <Route path="/transactions" element={< Transcations />} />
      <Route path="/fastag-details" element={< Fastagdetails />} />
      <Route path="/my-vouchers" element={< UserVouchers />} />
      <Route path="/voucher-code" element={< Vouchercode />} />
      <Route path="/wallet" element={< Wallet />} />
      <Route path="/future" element={< ComingSoon />} />
      <Route path="/dthdetails" element={< Dthdetails />} />
      <Route path="/privacy-policy" element={< PrivacyPolicy />} />
      <Route path="/terms-conditions" element={< Termsandconditions />} />
      <Route path="/refund-policy" element={< RefundPolicy />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/faqs" element={<Faq />} />

    </Routes>
  );
}