import Image from "next/image";
import heroBg from "@/assets/images/home_images/hero-bg.png";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col overflow-hidden h-screen min-h-[900px] w-full">
      {/* Background image */}
      <Image
        src={heroBg}
        alt=""
        fill
        className="object-cover object-center z-0"
        placeholder="blur"
        priority
      />

      {/* Gradient overlay: rgba(0,0,0,0.6) top → rgba(0,0,0,0.18) bottom */}
      <div className="absolute inset-0 z-0 bg-linear-to-b from-black/60 to-black/[18%]" />

      {/* ── Hero content ── */}
      <div className="flex-1 flex items-center justify-center w-full relative z-[5] px-5">
        <div className="w-full max-w-[591px] flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-6 self-stretch">
            {/* Tag line */}
            <p className="text-white font-helvetica text-xl font-normal leading-[19.9px] text-center">
              India&apos;s first Premium Wellness-Led Salon Chain
            </p>

            {/* Heading */}
            <h1
              className="text-white font-sans font-semibold text-center whitespace-pre-line
                           text-[80px] leading-[90px]
                           max-lg:text-[60px] max-lg:leading-[70px]
                           max-md:text-[48px] max-md:leading-[56px]"
            >
              Wellness Beyond Beauty.
            </h1>

            {/* Subtext */}
            <p className="text-white font-helvetica text-xl font-normal leading-8 text-center">
              Luxury beauty experiences built on hygiene, consultation, trained
              professionals, approved products, and nationwide standards.
            </p>
          </div>

          {/* CTA */}
          <button className="flex flex-row justify-center items-center gap-[10px] px-4 py-4 border border-white rounded-[4px] bg-white/[2%] backdrop-blur-[5px] text-white font-helvetica text-base font-normal uppercase cursor-pointer hover:bg-white/10 transition-colors">
            BOOK APPOINTMENT
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
