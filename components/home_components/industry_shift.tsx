import Image from "next/image";
import industryShiftImg from "@/assets/images/industry_shift.png";
import SectionLabel from "@/components/shared/section_label";

const IndustryShift = () => (
  <section className="w-full px-6 py-8">
    {/* Desktop */}
    <div className=" mx-auto bg-muted rounded-lg overflow-hidden relative h-[926px] max-lg:hidden">
      <div className="absolute top-10 left-10">
        <SectionLabel text="THE INDUSTRY SHIFT" />
      </div>

      <div className="absolute left-[1017px] top-[88px] w-[829px]">
        <h2 className="text-[#050505] font-sans font-semibold text-[60px] leading-[73px] m-0">
          &nbsp;&nbsp;&nbsp;&nbsp;India Has Salons.
          <br />
          India Now Needs Wellness Salons.
        </h2>
      </div>

      <div className="absolute left-[991px] top-[290px] w-[702px] flex flex-row justify-between items-end gap-6">
        <p className="w-[418px] text-[#333] font-helvetica font-light text-xl leading-7 m-0">
          Carlton Wellness was created to redefine what a premium salon
          experience should feel like — trusted, personalized, and wellness-led.
        </p>
        <button className="shrink-0 px-4 py-4 border border-black rounded-[4px] bg-white/2 backdrop-blur-[5px] text-black font-helvetica text-base uppercase cursor-pointer hover:bg-black/5 transition-colors">
          DISCOVER Now
        </button>
      </div>

      <div className="absolute left-[215px] top-[587px] w-[465px] bg-cream rounded-lg p-8 flex flex-col gap-20">
        <span className="text-[#333] font-sans font-medium text-[44px] leading-[48px] text-center">
          India has salons. Modern consumers need wellness-led beauty built on
          trust, hygiene, and standards.
        </span>
        <span className="text-[#333] font-helvetica font-light text-xl leading-8 text-center">
          Modern beauty needs more than results — it needs hygiene, trust,
          consultation, and consistent care.
        </span>
      </div>

      <div className="absolute left-[604px] top-[422px] w-[424px] h-[528px] border-[8px] border-cream rounded-lg overflow-hidden">
        <Image
          src={industryShiftImg}
          alt="Wellness Salon Interior"
          fill
          className="object-cover"
        />
      </div>
    </div>

    {/* Mobile */}
    <div className="hidden max-lg:flex flex-col gap-8 bg-muted rounded-lg overflow-hidden p-8">
      <SectionLabel text="THE INDUSTRY SHIFT" />
      <h2 className="text-[#050505] font-sans font-semibold text-[40px] leading-[50px] m-0">
        India Has Salons.
        <br />
        India Now Needs Wellness Salons.
      </h2>
      <p className="text-[#333] font-helvetica font-light text-xl leading-7 m-0">
        Carlton Wellness was created to redefine what a premium salon experience
        should feel like — trusted, personalized, and wellness-led.
      </p>
      <button className="w-fit px-4 py-4 border border-black rounded-[4px] bg-white/2 backdrop-blur-[5px] text-black font-helvetica text-base uppercase cursor-pointer">
        DISCOVER Now
      </button>
      <div className="relative w-full h-[300px] border-[8px] border-cream rounded-lg overflow-hidden">
        <Image
          src={industryShiftImg}
          alt="Wellness Salon Interior"
          fill
          className="object-cover"
        />
      </div>
      <div className="bg-cream rounded-lg p-8 flex flex-col gap-8">
        <span className="text-[#333] font-sans font-medium text-[32px] leading-[40px] text-center">
          India has salons. Modern consumers need wellness-led beauty built on
          trust, hygiene, and standards.
        </span>
        <span className="text-[#333] font-helvetica font-light text-xl leading-8 text-center">
          Modern beauty needs more than results — it needs hygiene, trust,
          consultation, and consistent care.
        </span>
      </div>
    </div>
  </section>
);

export default IndustryShift;
