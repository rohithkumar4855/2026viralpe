import { useNavigate } from "react-router-dom";
import Home from "../components/Dashboard/Home";
import Revenue from "../components/Dashboard/Revenue";
import Heropage from "../components/home/Hero";
import PopularVouchers from "../components/home/Vouchers";
import RecentTranscationcard from "../components/Dashboard/RecentTranscation";
import FeatureBanner from "../components/Dashboard/FeatureBanner";
import Vouchers from "../components/Dashboard/Vouchers"
import { FeatureBannerCard } from  "../data/Dashboard"
export default function loginpage() {
   const navigate = useNavigate();
   
   const handleLogin = () => {
    // Store login state
    localStorage.setItem("isLoggedIn", "true");

    // Dispatch event to tell Navbar to switch to UserNavbar
    window.dispatchEvent(new Event("authChange"));
    navigate("/");
  };

  return (
    <div className="gap-4">
      <Home />
      <Revenue />
      <Heropage />
      <PopularVouchers />
      <RecentTranscationcard/>
  <FeatureBanner cards={FeatureBannerCard} />    </div>
  );
}