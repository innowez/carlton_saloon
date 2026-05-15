import ContactSection from "@/components/about/contact_section";
import AboutSection from "@/components/home_components/about_section";
import CarltonStandard from "@/components/home_components/carlton_standard";
import HeroSection from "@/components/home_components/hero_section";
import IndustryShift from "@/components/home_components/industry_shift";
import PartnerSection from "@/components/home_components/partner_section";
import PassportSection from "@/components/home_components/passport_section";
import ServicesSection from "@/components/home_components/services_section";
import Ticker from "@/components/home_components/ticker";
import WhyCarlton from "@/components/home_components/why_carlton";

export default function Home() {
  return (
    <main className="bg-page-bg overflow-x-hidden">
      <HeroSection />
      <Ticker />
      <IndustryShift />
      <WhyCarlton />
      <AboutSection />
      <ServicesSection />
      <CarltonStandard />
      <PassportSection />
      <PartnerSection />
      <ContactSection />
    </main>
  );
}
