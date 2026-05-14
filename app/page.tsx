import HeroSection from "@/components/home_components/hero_section";
import Ticker from "@/components/home_components/ticker";
import IndustryShift from "@/components/home_components/industry_shift";
import WhyCarlton from "@/components/home_components/why_carlton";
import AboutSection from "@/components/home_components/about_section";
import ServicesSection from "@/components/home_components/services_section";
import CarltonStandard from "@/components/home_components/carlton_standard";
import PassportSection from "@/components/home_components/passport_section";
import PartnerSection from "@/components/home_components/partner_section";
import ContactSection from "@/components/about/contact_section";

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
