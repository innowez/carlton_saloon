import SectionLabel from "@/components/shared/section_label";

const passports = [
  {
    title: "Silver Passport",
    desc: "For occasional wellness experiences.",
    offset: 0,
  },
  {
    title: "Gold Passport",
    desc: "Enhanced benefits for regular wellness routines.",
    offset: 49,
  },
  {
    title: "Black Passport",
    desc: "The ultimate Carlton luxury experience.",
    offset: 0,
  },
];

const PassportSection = () => (
  <section className="w-full px-10 py-[100px]">
    <div className="max-w-[1440px] mx-auto flex flex-col gap-[100px]">
      <div className="flex flex-col items-center gap-10 max-w-[743px] mx-auto text-center">
        <SectionLabel text="SERVICES" centered />
        <h2 className="text-cream font-sans font-semibold text-[48px] leading-[58px] m-0 max-lg:text-[36px] max-lg:leading-[44px]">
          A Premium Wellness Membership Designed Around Your Lifestyle.
        </h2>
        <p className="text-white font-helvetica font-light text-xl leading-8 m-0">
          The Carlton Passport gives members access to exclusive wellness
          benefits, priority experiences, personalized support, and seamless
          access across cities.
        </p>
      </div>

      <div className="flex gap-5 items-start max-lg:flex-col max-lg:items-center">
        {passports.map((passport) => (
          <div
            key={passport.title}
            className="w-[440px] max-w-full h-[282px] bg-ebg-green rounded-[48px] px-8 pt-[125px] pb-8 shrink-0 cursor-pointer transition-transform hover:-translate-y-2 max-lg:!mt-0 max-lg:w-full"
            style={{ marginTop: passport.offset }}
          >
            <h4 className="text-cream font-sans font-bold text-[44px] m-0 mb-2 max-lg:text-[36px]">
              {passport.title}
            </h4>
            <p className="text-white font-helvetica text-xl m-0">
              {passport.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PassportSection;
