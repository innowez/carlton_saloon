import AboutHero from "@/components/about/about_hero";
import WhoWeAre from "@/components/about/who_we_are";
import OurPillars from "@/components/about/our_pillars";
import EbgGroup from "@/components/about/ebg_group";
import BrandFace from "@/components/about/brand_face";
import ContactSection from "@/components/about/contact_section";

export default function AboutPage() {
  return (
    <main className="bg-page-bg overflow-x-hidden">
      <AboutHero />
      <WhoWeAre />
      <OurPillars />
      <EbgGroup />
      <BrandFace />
      <ContactSection />
    </main>
  );
}
