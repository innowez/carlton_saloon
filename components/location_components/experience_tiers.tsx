import SectionLabel from "@/components/shared/section_label";

const tiers = [
  {
    num: "01",
    title: "Signature Salon",
    sub: "The Carlton Standard",
    text: "Our core format. Full-service wellness delivered with the precision and hospitality that defines Carlton. Found in premium neighbourhoods.",
  },
  {
    num: "02",
    title: "Grande Salon",
    sub: "Elevated Wellness",
    text: "A larger, more immersive experience. Extended service menus, private suites, and dedicated consultation spaces for those who want more.",
  },
  {
    num: "03",
    title: "Carlton Flagship",
    sub: "The Full Sanctuary",
    text: "Selected cities host a Carlton Flagship — our most complete expression of luxury wellness. A destination in its own right.",
  },
];

const ExperienceTiers = () => (
  <section className="px-10 py-[100px] max-w-[1440px] mx-auto">
    <div className="mb-9">
      <SectionLabel text="Carlton Experience" />
    </div>
    <h2 className="text-cream font-sans font-semibold text-[48px] leading-none m-0 mb-16 max-lg:text-[36px]">
      Every salon,<br />a distinct experience
    </h2>
    <div className="flex border border-gold/70 max-lg:flex-col">
      {tiers.map((tier, idx) => (
        <div
          key={tier.num}
          className={[
            "flex-1 p-8 flex flex-col gap-10",
            idx < 2
              ? "border-r border-gold/70 max-lg:border-r-0 max-lg:border-b max-lg:border-gold/70"
              : "",
          ]
            .join(" ")
            .trim()}
        >
          <span className="text-gold font-helvetica text-[26px]">✦ {tier.num}</span>
          <div className="flex flex-col gap-6">
            <div>
              <h5 className="text-cream font-sans text-[36px] m-0 mb-3 max-lg:text-[28px]">
                {tier.title}
              </h5>
              <span className="text-gold font-helvetica text-base uppercase tracking-[0.5px]">
                {tier.sub}
              </span>
            </div>
            <p className="text-muted font-helvetica text-xl leading-8 m-0 opacity-80 max-lg:text-lg">
              {tier.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ExperienceTiers;
