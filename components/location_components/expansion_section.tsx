import Image from "next/image";
import comingSoonImg from "@/assets/images/location_page/coming_soon.png";
import SectionLabel from "@/components/shared/section_label";

const cities = [
  { name: "Kolkata", state: "West Bengal" },
  { name: "Ahmedabad", state: "Gujarat" },
  { name: "Kochi", state: "Kerala" },
];

const ExpansionSection = () => (
  <section className="relative h-[524px] my-[100px] overflow-hidden max-lg:h-auto">
    <Image src={comingSoonImg} alt="Expansion background" fill className="object-cover max-lg:hidden" />
    <div className="absolute inset-0 bg-black/60 max-lg:hidden" />

    <div className="absolute inset-0 flex justify-center max-lg:relative max-lg:inset-auto max-lg:bg-page-bg max-lg:px-6 max-lg:py-16">
      <div className="w-full max-w-[1440px] px-10 py-20 flex flex-col max-lg:px-0 max-lg:py-0">
        <div className="mb-9">
          <SectionLabel text="Expansion" />
        </div>
        <h2 className="text-cream font-sans font-semibold text-[48px] leading-none m-0 mb-16 max-lg:text-[36px] max-lg:mb-10">
          Coming soon
        </h2>
        <div className="flex gap-5 max-lg:flex-col">
          {cities.map((city) => (
            <div
              key={city.name}
              className="flex-1 p-6 bg-[#141414]/90 flex flex-col gap-5 border border-white/5"
            >
              <div className="border border-gold/70 px-3 py-[6px] w-fit">
                <span className="text-gold font-helvetica text-xs uppercase tracking-[2px]">Planned</span>
              </div>
              <h4 className="text-white font-sans font-normal text-[30px] m-0">{city.name}</h4>
              <span className="text-gold font-helvetica text-xs uppercase">{city.state}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExpansionSection;
