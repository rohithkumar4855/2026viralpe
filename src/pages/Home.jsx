import Heropage from "../components/home/Hero";
import GrowingTogether from "../components/home/EarningCard";
import PopularVouchers from "../components/home/Vouchers";
import Customersupport from "../components/home/Customersupport";
import PromotionalCards from "../components/home/PromotionalCards";
import WhyChooseViralPe from "../components/home/Whychoose";
import ReferAndEarn from "../components/home/ReferAndEarn";
import SupportBanner from "../components/home/SupportBanner";
import FAQSection from "../components/home/Faqquestion";
import ContactUs from "../components/home/Contactus";

export default function Home() {
  return (
    <>
      <Heropage />
      <GrowingTogether />
      <PopularVouchers />
      <Customersupport />
      <PromotionalCards />
      <WhyChooseViralPe />
      <ReferAndEarn />
      <SupportBanner />
      <FAQSection />
      <ContactUs />
    </>
  );
}