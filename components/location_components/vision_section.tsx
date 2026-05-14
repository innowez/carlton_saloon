import Image from "next/image";
import expansionImg from "@/assets/images/location_page/expansion.png";
import SectionLabel from "@/components/shared/section_label";

const phases = [
  { phase: "Phase I", desc: "Metros · Active" },
  { phase: "Phase II", desc: "Tier 1 · 2026–27" },
  { phase: "Phase III", desc: "Tier 2 · Beyond" },
];

const VisionSection = () => (
  <section className="bg-ebg-green flex overflow-hidden min-h-[634px] max-lg:flex-col">
    <div className="w-1/2 px-10 py-20 flex flex-col justify-center max-lg:w-full max-lg:py-16 max-lg:px-6">
      <div className="mb-9">
        <SectionLabel text="Expansion" />
      </div>
      <h2 className="text-cream font-sans font-semibold text-[48px] leading-[58px] m-0 mb-6 max-lg:text-[36px] max-lg:leading-[44px]">
        A salon in<br />every city<br />that matters.
      </h2>
      <p className="text-muted font-helvetica text-base leading-6 m-0 mb-9 max-w-[500px]">
        Our ambition is to bring the Carlton experience to 311 cities across India — not overnight,
        but with the deliberate care that defines everything we do.
      </p>
      <div className="flex gap-5 flex-wrap">
        {phases.map((p) => (
          <div key={p.phase} className="border-b border-gold pb-3 w-[118px]">
            <div className="text-gold font-sans text-[28px] mb-2">{p.phase}</div>
            <div className="text-muted font-helvetica text-xs uppercase tracking-[1px]">{p.desc}</div>
          </div>
        ))}
      </div>
    </div>
    <div className="w-1/2 relative max-lg:w-full max-lg:h-[350px]">
      <Image src={expansionImg} alt="Carlton expansion across India" fill className="object-cover" />
    </div>
  </section>
);

export default VisionSection;
