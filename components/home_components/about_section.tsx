import Image from "next/image";
import aboutUs1 from "@/assets/images/home_images/about_us_1.png";
import aboutUs2 from "@/assets/images/home_images/about_us_2.png";
import SectionLabel from "@/components/shared/section_label";

const AboutSection = () => (
  <section className="w-full overflow-hidden relative">
    <span className="absolute left-1/2 -translate-x-1/2 top-1.5 z-50 text-cream/90 font-sans font-semibold text-[160px] leading-none pointer-events-none select-none whitespace-nowrap max-lg:hidden">
      About Us
    </span>
    <div className="max-w mx-auto flex max-lg:flex-col">
      {/* Left: green panel */}
      <div className="relative w-1/2 bg-ebg-green flex flex-col min-h-[876px] px-[102px] py-10 max-lg:w-full max-lg:min-h-fit max-lg:px-8 max-lg:py-16">
        {/* Watermark */}

        <div className="relative z-10">
          <SectionLabel text="ABOUT CARLTON" />
        </div>

        <div className="relative z-10 flex flex-col gap-6 mt-[230px] max-lg:mt-12">
          <div className="flex flex-col gap-4">
            <span className="text-white font-helvetica text-xl font-normal">
              THE FUTURE OF WELLNESS BEAUTY
            </span>
            <h2 className="text-cream font-sans font-normal text-[56px] leading-[68px] m-0 max-lg:text-[40px] max-lg:leading-[50px]">
              Redefining Luxury Beauty Through Wellness Standards.
            </h2>
          </div>
          <p className="text-white font-helvetica font-light text-xl leading-8 m-0">
            Carlton Wellness was created to bring a new level of trust, hygiene,
            consultation, and consistency to India&apos;s salon industry. By
            combining luxury experiences with wellness-led standards, Carlton
            delivers personalized care designed around safety, professionalism,
            and long-term customer wellbeing.
          </p>
        </div>

        <div className="relative z-10 mt-[120px] max-lg:mt-12">
          <button className="px-4 py-4 border border-white rounded-[4px] bg-white/2 backdrop-blur-[5px] text-white font-helvetica text-base uppercase cursor-pointer hover:bg-white/10 transition-colors">
            Know More
          </button>
        </div>
      </div>

      {/* Right: stacked images */}
      <div className="w-1/2 flex flex-col max-lg:w-full">
        <div className="relative w-full h-[438px] max-lg:h-[250px]">
          <Image
            src={aboutUs1}
            alt="Carlton Wellness"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full h-[438px] max-lg:h-[250px]">
          <Image
            src={aboutUs2}
            alt="Carlton Wellness"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
