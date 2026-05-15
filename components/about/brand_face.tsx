import Image from "next/image";
import brandFace from "@/assets/images/about_page/brand_face.jpg";
import SectionLabel from "@/components/shared/section_label";

const BrandFace = () => {
  return (
    <section className="w-full px-[66px] py-[100px]">
      <div className="max-w-[1440px] mx-auto flex gap-[58px] items-start max-lg:flex-col">
        {/* Left — portrait image */}
        <div className="relative w-[469px] h-[626px] shrink-0 border border-gold/15 overflow-hidden max-lg:w-full max-lg:h-[400px]">
          <Image
            src={brandFace}
            alt="Brand Face"
            fill
            className="object-cover object-top"
          />
          <div className="absolute bottom-8 w-full flex justify-center">
            <span className="text-gold/40 font-sans text-base text-center whitespace-pre-line leading-relaxed">
              {"Official Brand Imagery\nLicensed & Approved Only"}
            </span>
          </div>
        </div>

        {/* Right — content */}
        <div className="w-[781px] max-w-full flex flex-col gap-[116px] max-lg:w-full max-lg:gap-12">
          <SectionLabel text="BRAND FACE" />

          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-9">
              <div className="flex flex-col gap-6">
                <span className="text-white font-helvetica text-xl uppercase tracking-wide">
                  The Future of Wellness Beauty
                </span>
                <h3 className="text-cream font-sans font-normal text-[56px] leading-[67px] m-0 whitespace-pre-line max-lg:text-[40px] max-lg:leading-[50px]">
                  {"Trust & aspiration,\nGrounded in a credible proposition"}
                </h3>
              </div>
              <p className="text-muted font-helvetica text-xl leading-8 text-justify m-0">
                Mrunal Thakur represents Carlton Wellness as a figure of
                confidence, warmth, and modern Indian womanhood — values that
                align with Carlton's wellness-led positioning. Her association
                adds trust and aspiration to the brand narrative.
              </p>
            </div>

            <p className="text-gold/60 font-helvetica text-sm leading-[18.5px] m-0">
              Mrunal Thakur may be presented as the brand face for Carlton
              Wellness only with approved official imagery and licensing. Her
              role is to amplify the brand proposition, not substitute it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandFace;
