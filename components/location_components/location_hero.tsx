import Image from "next/image";
import heroImg from "@/assets/images/location_page/hero_image.png";

const stats = [
  { value: "12", label: "Active salons" },
  { value: "8", label: "Cities" },
  { value: "311", label: "City vision" },
];

const LocationHero = () => (
  <section className="relative h-[900px] overflow-hidden">
    <Image src={heroImg} alt="Carlton salon interior" fill className="object-cover" priority />
    <div className="absolute inset-0 bg-black/40" />

    {/* Left content */}
    <div className="absolute left-10 top-[306px] max-w-[600px] max-lg:left-6 max-lg:top-[160px]">
      <h1 className="text-white font-sans font-semibold text-[80px] leading-[90px] m-0 mb-6 max-lg:text-[52px] max-lg:leading-[62px]">
        Find Your<br />Carlton Experience
      </h1>
      <p className="text-white font-helvetica text-xl leading-8 m-0 mb-8 opacity-90">
        Premium wellness destinations across India.<br />
        Every salon a sanctuary. Every visit, an occasion.
      </p>
      <button className="px-10 py-5 border border-white rounded-[4px] bg-white/[2%] backdrop-blur-[5px] text-white font-helvetica text-base uppercase cursor-pointer hover:bg-white/10 transition-colors">
        Find a store
      </button>
    </div>

    {/* Right stats */}
    <div className="absolute right-10 top-[243px] flex flex-col gap-6 items-end text-right max-lg:hidden">
      {stats.map((stat, idx) => (
        <div key={stat.label} className="flex flex-col items-end gap-3">
          <span className="text-gold font-sans font-light text-[60px] leading-none">{stat.value}</span>
          <span className="text-muted font-helvetica text-base uppercase tracking-[2.25px]">{stat.label}</span>
          {idx < 2 && <div className="w-px h-[67px] bg-gold" />}
        </div>
      ))}
    </div>
  </section>
);

export default LocationHero;
