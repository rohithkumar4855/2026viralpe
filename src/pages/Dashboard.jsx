import { Routes, Route } from "react-router-dom";
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

export default function Dashboard() {
    return (
        <>
            <LoginPage />
            < Vouchers />
            <Vouchercode />
            <VoucherDetails />
            < PaymentScreen />
            < PaymentSuccess />
            <PrepaidRecharge />
            <Chooseaplan />
            <FastagRecharge />
            <Dthrecharge />
            <ReferEarn />
            <Transcations />
            <Fastagdetails />
            <UserVouchers />
            <ComingSoon />
            <Dthdetails />
            <PrivacyPolicy />
            <Termsandconditions />

            <RefundPolicy />
        </>
    )
}