import Image from "next/image";
import pillars1 from "@/assets/images/about_page/our_pillars_1.png";
import pillars2 from "@/assets/images/about_page/our_pillars_2.jpg";
import SectionLabel from "@/components/shared/section_label";

const pillars = [
  {
    num: "✦ 01",
    title: "Consultation First",
    desc: "Every service begins with an informed conversation. No assumptions, no shortcuts.",
  },
  {
    num: "✦ 02",
    title: "Safer Protocol",
    desc: "Curated products and evidence-led protocols applied by trained professionals only.",
  },
  {
    num: "✦ 03",
    title: "Hygiene Discipline",
    desc: "Non-negotiable sterilisation standards. Tools, surfaces, processes — all documented.",
  },
  {
    num: "✦ 04",
    title: "Transparent Pricing",
    desc: "Non-negotiable sterilisation standards. Tools, surfaces, processes — all documented.",
  },
];

const OurPillars = () => {
  return (
    <section className="w-full px-10 py-[100px]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-[114px]">
        <SectionLabel text="OUR PILLARS" centered />

        <div className="flex gap-5 items-end max-lg:flex-col">
          {/* Pillar cards — 2×2 grid */}
          <div className="flex flex-wrap gap-y-8 gap-x-[19px] w-[669px] shrink-0 max-lg:w-full">
            {pillars.map((p) => (
              <div
                key={p.num}
                className="w-[325px] max-w-full p-8 border border-pillar-border flex flex-col gap-[72px]"
              >
                <span className="text-gold font-helvetica text-[25.6px]">
                  {p.num}
                </span>
                <div className="flex flex-col gap-6">
                  <span className="text-cream font-sans font-medium text-[36px]">
                    {p.title}
                  </span>
                  <p className="text-muted font-helvetica text-xl leading-8 m-0 opacity-80">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Overlapping images */}
          <div className="relative w-[746px] h-[667px] shrink-0 max-lg:w-full max-lg:h-[420px]">
            <Image
              src={pillars1}
              alt="Pillar 1"
              width={498}
              height={612}
              className="absolute left-0 top-[54px] border border-pillar-border object-cover max-lg:w-[70%] max-lg:h-auto"
            />
            <Image
              src={pillars2}
              alt="Pillar 2"
              width={278}
              height={342}
              className="absolute left-[391px] bottom-0 border border-pillar-border object-cover z-[2] max-lg:w-[40%] max-lg:h-auto max-lg:left-auto max-lg:right-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPillars;
