import Heropage from '../src/components/home/Hero';
import GrowingTogether from '../src/components/home/EarningCard';
import PopularVouchers from '../src/components/home/Vouchers';
import Customersupport from '../src/components/home/Customersupport';
import PromotionalCards from '../src/components/home/Promotionalcards';
import WhyChooseViralPe from '../src/components/home/Whychoose';
import ReferAndEarn from '../src/components/home/Referandearn';
import SupportBanner from '../src/components/home/Supportbanner';
import FAQSection from '../src/components/home/Faqquestion';
import ContactUs from '../src/components/home/Contactus';

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