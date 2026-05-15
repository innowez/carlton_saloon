import ExpansionSection from "@/components/location_components/expansion_section";
import ExperienceTiers from "@/components/location_components/experience_tiers";
import LocationHero from "@/components/location_components/location_hero";
import SalonsSection from "@/components/location_components/salons_section";
import VisionSection from "@/components/location_components/vision_section";

export default function LocationPage() {
  return (
    <main className="bg-page-bg overflow-x-hidden">
      <LocationHero />
      <SalonsSection />
      <ExpansionSection />
      <VisionSection />
      <ExperienceTiers />
    </main>
  );
}
