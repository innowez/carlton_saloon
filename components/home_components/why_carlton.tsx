import Image from "next/image";
import standards from "@/assets/images/why_carlton_1.png";
import consultation from "@/assets/images/why_calton_02.png";
import membership from "@/assets/images/why_calton_3.png";
import SectionLabel from "@/components/shared/section_label";
import type { StaticImageData } from "next/image";

const cards: {
  img: StaticImageData;
  title: string;
  desc: string;
  imgH: number;
  offset: number;
}[] = [
  {
    img: standards,
    title: "Standards",
    desc: "Defined wellness protocols and service consistency maintained across every Carlton location.",
    imgH: 526,
    offset: 99,
  },
  {
    img: consultation,
    title: "Consultation",
    desc: "Every experience begins with understanding your concerns, preferences, and wellness goals before recommending services.",
    imgH: 625,
    offset: 0,
  },
  {
    img: membership,
    title: "Membership",
    desc: "A connected membership ecosystem offering priority access, personalized experiences, and benefits across multiple cities.",
    imgH: 548,
    offset: 113,
  },
];

const WhyCarlton = () => (
  <section className="w-full px-10 py-[100px]">
    <div className="max-w mx-auto">
      <div className="flex items-start justify-between gap-10 max-lg:flex-col">
        <div className="flex flex-col gap-[70px]">
          <SectionLabel text="WHY CARLTON" />
          <h2 className="w-[645px] max-w-full text-cream font-sans font-semibold text-[48px] leading-[58px] m-0 max-lg:text-[36px] max-lg:leading-[44px]">
            Built Around Standards, Consultation, and Membership.
          </h2>
        </div>
        <p className="w-[412px] max-w-full text-white font-helvetica font-light text-xl leading-8 m-0 mt-[106px] max-lg:mt-0">
          Carlton Wellness is designed to deliver a premium salon experience
          rooted in consistency, hygiene, personalized consultation, and
          long-term customer care. Every experience follows structured standards
          created to build trust across every visit and every city.
        </p>
      </div>

      <div className="mt-16">
        <button className="px-4 py-4 border border-white rounded-[4px] bg-white/2 backdrop-blur-[5px] text-white font-helvetica text-base uppercase cursor-pointer hover:bg-white/10 transition-colors">
          DISCOVER Now
        </button>
      </div>

      <div className="flex gap-5 items-start mt-16 max-lg:flex-col max-lg:gap-12">
        {cards.map((card) => (
          <div
            key={card.title}
            className="w-[440px] max-w-full shrink-0 max-lg:w-full max-lg:mt-0!"
            style={{ marginTop: card.offset }}
          >
            <div
              className="relative w-full rounded-lg overflow-hidden"
              style={{ height: card.imgH }}
            >
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover"
              />
              <h3 className="absolute left-5 bottom-16 text-white font-sans font-semibold text-[36px] m-0">
                {card.title}
              </h3>
            </div>
            <p className="text-white font-helvetica font-light text-xl leading-8 mt-10 m-0">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyCarlton;
