import Image from "next/image";
import formBg from "@/assets/images/form_bg.png";
import formImage from "@/assets/images/home_images/form_image.png";
import SectionLabel from "@/components/shared/section_label";
import Form from "@/components/shared/form";

const ContactSection = () => {
  return (
    <section className="w-full relative bg-page-bg" id="contact">
      {/* Background image area */}
      <div className="relative w-full h-[850px] overflow-hidden">
        <Image
          src={formBg}
          alt="Contact Background"
          fill
          className="object-cover"
          priority={false}
        />

        {/* Left: label + heading */}
        <div className="absolute top-[88px] left-10 flex flex-col gap-[58px] z-10">
          <SectionLabel text="Contact Us" />
          <h2 className="w-[528px] max-w-[calc(100vw-80px)] text-cream font-sans font-semibold text-[72px] leading-[87px] m-0 whitespace-pre-line max-lg:text-[48px] max-lg:leading-[60px]">
            {"Let's Start Your\nCarlton Experience."}
          </h2>
        </div>

        {/* Small decoration image */}
        <div className="absolute left-10 top-[444px] z-10 max-md:hidden">
          <Image
            src={formImage}
            alt=""
            width={344}
            height={366}
            className="object-cover"
          />
        </div>

        {/* Form — right side */}
        <div className="absolute left-[759px] top-[209px] w-[568px] z-10 max-xl:left-auto max-xl:right-10 max-xl:w-[480px] max-lg:relative max-lg:left-auto max-lg:top-auto max-lg:right-auto max-lg:w-full max-lg:px-10 max-lg:hidden">
          <Form />
        </div>
      </div>

      {/* Form below image on mobile */}
      <div className="hidden max-lg:block px-10 py-16">
        <Form />
      </div>
    </section>
  );
};

export default ContactSection;
