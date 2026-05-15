import Image from "next/image";
import ebg1 from "@/assets/images/about_page/d850e661-d39e-4870-bf55-53df46b22fc7.png";
import ebg2 from "@/assets/images/about_page/816ceec6-7c6c-4632-941a-6de0210c1a62.png";
import SectionLabel from "@/components/shared/section_label";

const EbgGroup = () => {
  return (
    <section className="w-full bg-ebg-green py-24 px-[47px]">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center gap-10 max-lg:flex-col">
        {/* Left */}
        <div className="w-[678px] max-w-full flex flex-col gap-[120px] max-lg:w-full max-lg:gap-16">
          <SectionLabel text="THE EBG GROUP" />

          <div className="flex flex-col gap-6">
            <div className="border-b border-gold pb-4">
              <h2 className="text-cream font-sans font-normal text-[56px] m-0 max-lg:text-[40px]">
                About the EBG Group
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-muted font-helvetica text-xl leading-8 text-justify m-0">
                Carlton Wellness Salon is supported by EBG Group, a multi-brand
                platform operating across wellness, mobility, hospitality,
                realty, food, lifestyle, technology, services and social impact.
                With a strong foundation in brand building and business
                expansion, EBG creates interconnected ecosystems that combine
                operational structure, customer experience and scalable growth
                across multiple industries.
              </p>
              <p className="text-muted font-helvetica text-xl leading-8 text-justify m-0">
                Through franchise reach, sales capability, city partnerships and
                disciplined execution, EBG provides the infrastructure behind
                Carlton's long-term vision. This support enables Carlton
                Wellness Salon to evolve beyond individual locations into a
                refined, wellness-led salon platform designed for consistent
                luxury experiences, modern scalability and national presence.
              </p>
            </div>
          </div>
        </div>

        {/* Right — stacked images */}
        <div className="flex items-end gap-[15px] shrink-0 max-lg:w-full max-lg:justify-center">
          <div className="w-[257px] flex flex-col gap-6">
            <Image
              src={ebg1}
              alt="EBG 1"
              width={257}
              height={321}
              className="object-cover"
            />
            <div className="h-px bg-gold" />
          </div>
          <div className="w-[398px] flex flex-col gap-6">
            <div className="h-px bg-gold" />
            <Image
              src={ebg2}
              alt="EBG 2"
              width={398}
              height={510}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EbgGroup;
