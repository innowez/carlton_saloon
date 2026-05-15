import Image from "next/image";
import watermark from "@/assets/images/about_page/who_we_are_carlton_bg_3ec63012-2031-4cea-9673-13d70f59b469..png";
import SectionLabel from "@/components/shared/section_label";

const WhoWeAre = () => {
  return (
    <section className="relative w-full px-10 py-[100px] overflow-hidden">
      {/* Watermark */}
      <div className="absolute left-[213px] top-0 w-[950px] h-full pointer-events-none opacity-[0.06]">
        <Image
          src={watermark}
          alt=""
          fill
          className="object-contain object-top"
        />
      </div>

      <div className="relative z-[1] flex flex-col gap-[100px] max-w-[1440px] mx-auto">
        <SectionLabel text="WHO WE ARE" />

        <div className="flex justify-between items-start gap-10 max-lg:flex-col">
          <h2 className="w-[552px] max-w-full text-cream font-sans font-light text-[56px] leading-[73px] m-0 whitespace-pre-line shrink-0 max-lg:w-full max-lg:text-[40px] max-lg:leading-[54px]">
            {"A salon built for\ncustomers who demand\nanswers."}
          </h2>

          <div className="w-[670px] max-w-full flex flex-col gap-[14px] max-lg:w-full">
            <p className="text-muted font-helvetica text-xl leading-8 text-justify m-0">
              Customers no longer want beauty without answers. They want to know
              what is being applied, who is applying it, whether it is suitable
              for them, whether tools are clean, whether pricing is transparent
              — and whether they can trust the same standard again.
            </p>
            <p className="text-muted font-helvetica text-xl leading-8 text-justify m-0">
              Carlton Wellness Salon was built precisely for this shift. We
              bring a premium wellness-led approach to beauty and grooming
              through informed consultation, safer product and protocol
              thinking, rigorously trained professionals, and an unwavering
              commitment to hygiene discipline.
            </p>
            <p className="text-muted font-helvetica text-xl leading-8 text-justify m-0">
              Membership continuity, digital records, and EBG Group-backed
              expansion systems ensure that every Carlton experience is
              consistent, documented, and trusted — regardless of which city you
              walk into.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
