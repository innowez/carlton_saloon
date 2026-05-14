import SectionLabel from "@/components/shared/section_label";
import HairWellnessIcon from "@/assets/icons/Frame 26.svg";
import SkinWellnessIcon from "@/assets/icons/Frame 27.svg";
import GroomingIcon from "@/assets/icons/Frame 28.svg";
import NailsIcon from "@/assets/icons/Frame 33.svg";
import BridalOccasionIcon from "@/assets/icons/Frame 34.svg";
import ProductsAftercareIcon from "@/assets/icons/Frame 35.svg";
import Image from "next/image";

const services = [
  {
    icon: HairWellnessIcon,
    title: "Hair Wellness",
    desc: "Precision styling, scalp-focused care, colour consultation, nourishment rituals, and long-term hair wellness solutions.",
  },
  {
    icon: SkinWellnessIcon,
    title: "Skin Wellness",
    desc: "Glow-focused skin rituals designed around consultation, hygiene, skin suitability, and consistent care.",
  },
  {
    icon: GroomingIcon,
    title: "Grooming",
    desc: "Modern grooming experiences for men and women with comfort, precision, and professional care at every step.",
  },
  {
    icon: NailsIcon,
    title: "Nails",
    desc: "Premium nail care and finishing experiences delivered with hygiene-first standards and refined detailing.",
  },
  {
    icon: BridalOccasionIcon,
    title: "Bridal & Occasion",
    desc: "Luxury beauty preparation for weddings, celebrations, and milestone moments with personalized consultation and planning.",
  },
  {
    icon: ProductsAftercareIcon,
    title: "Products & Aftercare",
    desc: "Curated professional products and aftercare guidance designed to support your wellness journey beyond the salon.",
  },
];

const ServicesSection = () => (
  <section className="w-full px-10 py-[100px]">
    <div className="max-w mx-auto flex flex-col gap-[113px]">
      <div className="flex flex-col items-center gap-10">
        <SectionLabel text="SERVICES" centered />
        <h2 className="text-cream font-sans font-semibold text-[48px] leading-[58px] text-center m-0 max-lg:text-[36px] max-lg:leading-[44px]">
          Wellness Experiences Crafted Around You.
        </h2>
      </div>

      <div className="grid grid-cols-3 max-lg:grid-cols-1">
        {services.map((service, i) => {
          const isLastRow = i >= 3;
          const isLastCol = (i + 1) % 3 === 0;
          return (
            <div
              key={service.title}
              className={[
                "min-h-[550px] flex flex-col justify-between px-10 py-6 max-lg:min-h-0 max-lg:py-10 max-lg:gap-8 max-lg:border-b max-lg:border-r-0 max-lg:border-pillar-border",
                !isLastCol ? "border-r border-pillar-border" : "",
                !isLastRow ? "border-b border-pillar-border" : "",
              ]
                .join(" ")
                .trim()}
            >
              {/* <service.icon className="text-gold text-[96px] leading-none select-none" /> */}
              <Image
                src={service.icon}
                alt={service.title}
                width={96}
                height={96}
              />
              <div className="flex flex-col gap-6">
                <h3 className="text-cream font-sans font-semibold text-[36px] m-0">
                  {service.title}
                </h3>
                <p className="text-white font-helvetica font-light text-xl leading-8 m-0">
                  {service.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ServicesSection;
