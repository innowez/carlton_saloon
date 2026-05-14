import SectionLabel from "@/components/shared/section_label";
import Image from "next/image";
import Calton_svg from "@/assets/icons/calton_letter.svg";

const standards1 = [
  {
    title: "Consultation",
    desc: "Understanding your lifestyle, concerns, and beauty goals before every service.",
  },
  {
    title: "Responsibility",
    desc: "Ethical recommendations focused on customer wellbeing and long-term care.",
  },
  {
    title: "Luxury Hygiene",
    desc: "Premium hygiene protocols maintained across all touchpoints.",
  },
  {
    title: "Training",
    desc: "Continuous professional training for every Carlton expert.",
  },
];

const standards2 = [
  {
    title: "Approved Products",
    desc: "Professional-grade products selected for safety, quality, and performance.",
  },
  {
    title: "Outcome Transparency",
    desc: "Clear communication about services, expectations, and aftercare.",
  },
  {
    title: "Nationwide Standards",
    desc: "A consistent Carlton experience across every city.",
  },
];

const CarltonStandard = () => (
  <section className="w-full px-6 py-8">
    <div className=" rounded-lg overflow-hidden bg-muted">
      <div className=" mx-auto p-10 flex flex-col gap-20">
        <SectionLabel text="THE CARLTON STANDARD" />

        <div className="flex justify-between items-end gap-10 max-lg:flex-col max-lg:items-start">
          <h2 className="w-[645px] max-w-full text-black font-sans font-semibold text-[48px] leading-[58px] m-0 whitespace-pre-line max-lg:text-[36px] max-lg:leading-[44px]">
            {"A Framework Built Around"} <br />
            <span className="italic font-normal">
              Trust, Safety, and Consistency.
            </span>
          </h2>
          <p className="w-[508px] max-w-full text-[#050505] font-helvetica font-light text-xl leading-8 m-0">
            Carlton follows a structured wellness-first methodology designed to
            deliver a premium and standardized customer experience across every
            salon.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
          {standards1.map((s) => (
            <div
              key={s.title}
              className="flex flex-col gap-3 text-center max-lg:text-left"
            >
              <h4 className="font-sans font-normal text-[36px] text-black m-0">
                {s.title}
              </h4>
              <p className="font-helvetica font-light text-xl leading-8 text-[#050505] m-0">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <Image src={Calton_svg} alt="Calton_svg" className="w-full h-auto" />
      </div>

      <div className=" mx-auto p-10 flex flex-col gap-20">
        <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
          {standards2.map((s) => (
            <div
              key={s.title}
              className="flex flex-col gap-3 text-center max-lg:text-left"
            >
              <h4 className="font-sans font-normal text-[36px] text-black m-0">
                {s.title}
              </h4>
              <p className="font-helvetica font-light text-xl leading-8 text-[#050505] m-0">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CarltonStandard;
