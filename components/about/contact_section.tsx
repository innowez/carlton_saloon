import Image from "next/image";
import formBg from "@/assets/images/form_bg.png";
import formImage from "@/assets/images/home_images/form_image.png";
import SectionLabel from "@/components/shared/section_label";
import Form from "@/components/shared/form";

const ContactSection = () => {
  return (
    <section className="w-full relative bg-page-bg" id="contact">
      {/* Background image stretches full section height */}
      <div className="relative w-full overflow-hidden min-h-[850px] max-lg:min-h-0">
        <Image
          src={formBg}
          alt="Contact Background"
          fill
          className="object-cover"
          priority={false}
        />

        {/* Content — absolute on desktop, flex-col on mobile */}
        <div className="relative z-10 max-lg:flex max-lg:flex-col max-lg:gap-12 max-lg:px-10 max-lg:py-16 max-md:px-6">
          {/* Label + heading */}
          <div className="absolute top-[88px] left-10 flex flex-col gap-[58px] max-lg:relative max-lg:top-auto max-lg:left-auto">
            <SectionLabel text="Contact Us" />
            <h2 className="w-[528px] max-w-[calc(100vw-80px)] text-cream font-sans font-semibold text-[72px] leading-[87px] m-0 whitespace-pre-line max-lg:text-[48px] max-lg:leading-[60px]">
              {"Let's Start Your\nCarlton Experience."}
            </h2>
          </div>

          {/* Decoration image — desktop only */}
          <div className="absolute left-10 top-[444px] max-lg:hidden">
            <Image
              src={formImage}
              alt=""
              width={344}
              height={366}
              className="object-cover"
            />
          </div>

          {/* Form */}
          <div className="absolute left-[759px] top-[209px] w-[568px] max-xl:left-auto max-xl:right-10 max-xl:w-[480px] max-lg:relative max-lg:left-auto max-lg:top-auto max-lg:right-auto max-lg:w-full">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
