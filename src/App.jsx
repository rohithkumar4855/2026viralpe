import './globals.css'
import Heropage from './components/home/Hero';
import GrowingTogether from './components/home/earningcard';
import PopularVouchers from './components/home/vouchers';
import Customersupport from './components/home/customersupport';
import PromotionalCards from './components/home/promotionalcards';
import ReferAndEarn from './components/home/referandearn';
import SupportBanner from './components/home/supportbanner';
import WhyChooseViralPe from './components/home/Whychoose';
import FAQSection from './components/home/Faqquestion';
import ContactUs from './components/home/Contactus';
function App() {

  return (
    <>
    
    <Heropage/>
    <GrowingTogether/>
    <PopularVouchers/>
    <Customersupport/>
    <PromotionalCards/>
    <WhyChooseViralPe/>
    <ReferAndEarn/>
    <SupportBanner/>
    <FAQSection/>
    <ContactUs/>
    </>
  )
}

export default App
