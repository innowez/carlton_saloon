import Image from "next/image";
import heroBg from "@/assets/images/about_page/about_hero.png";

const AboutHero = () => {
  return (
    <section className="relative w-full h-[900px] bg-[#050505] overflow-hidden">
      <Image
        src={heroBg}
        alt="Hero Background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Content — centered horizontally, starts at 240px from top */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[240px] w-[900px] max-w-full flex flex-col items-center gap-[31px] z-[2] px-5">
        <span className="text-white font-helvetica text-xl uppercase text-center tracking-wide">
          About Carlton Wellness Salon
        </span>

        <h1 className="text-cream font-sans font-light text-[80px] leading-[114px] text-center m-0 whitespace-pre-line max-lg:text-[56px] max-lg:leading-[80px]">
          {"Beauty with standards.\nWellness with\ndiscipline."}
        </h1>

        {/* Gold divider */}
        <div className="w-[60px] h-px bg-gold" />

        <span className="text-muted font-helvetica text-xl tracking-[2.3px] text-center uppercase">
          Premium &nbsp;·&nbsp; Transparent &nbsp;·&nbsp; Wellness-Led
        </span>
      </div>
    </section>
  );
};

export default AboutHero;
