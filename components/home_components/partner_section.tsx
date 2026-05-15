import Image from "next/image";
import partnerImg from "@/assets/images/about_us_2.png";
import interiorImg from "@/assets/images/about_us_1.png";
import SectionLabel from "../shared/section_label";
// import SectionLabel from "@/components/shared/section_label";

const PartnerSection = () => (
  <section className="w-full relative border-y border-gold">
    <div className="mx-auto flex max-lg:flex-col">
      {/* Left image */}
      <div className="relative w-[513px] h-[713px] shrink-0 max-lg:hidden">
        <Image src={partnerImg} alt="Partner" fill className="object-cover" />
        <div className="absolute left-[14px] inset-y-0 w-px bg-gold" />
      </div>

      {/* Right content */}
      <div className="flex-1 px-16 py-12 flex flex-col gap-14 relative max-lg:px-8 max-lg:py-16">
        <SectionLabel text="PARTNER WITH US" />

        <div className="flex flex-col gap-14 max-w-[579px]">
          <div className="flex flex-col gap-6">
            <h2 className="text-cream font-sans font-semibold text-[48px] leading-[58px] m-0 whitespace-pre-line max-lg:text-[36px] max-lg:leading-[44px] max-lg:whitespace-normal">
              {"Build With India's Next Luxury\nWellness Brand."}
            </h2>
            <div className="flex flex-col gap-4">
              <span className="text-white font-helvetica font-medium text-2xl">
                Franchisee-Invested, Company-Operated
              </span>
              <p className="text-white font-helvetica text-xl leading-8 m-0">
                Invest in a professionally managed Carlton wellness salon while
                operations, standards, branding, and customer experience are
                managed by Carlton experts.
              </p>
            </div>
          </div>
          <button className="w-fit px-4 py-4 border border-white rounded-[4px] bg-white/2 backdrop-blur-[5px] text-white font-helvetica text-base uppercase cursor-pointer hover:bg-white/10 transition-colors">
            BECOME A FICO PARTNER
          </button>
        </div>

        {/* Small accent image */}
        <div className="absolute right-0 top-[216px] w-[230px] h-[278px] border-[3px] border-gold overflow-hidden max-xl:hidden">
          <Image
            src={interiorImg}
            alt="Carlton Interior"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

export default PartnerSection;
