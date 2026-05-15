import Image from "next/image";
import footerLogo from "@/assets/images/footer-Carlton-logo.png";

const SERVICE_LINKS = [
  "Hair care",
  "Skin care",
  "Grooming",
  "Nails care",
  "Body care",
];
const EXPLORE_LINKS = ["Membership", "Locations", "About Carlton", "Careers"];
const BUSINESS_LINKS = [
  "Franchise Opportunities",
  "Cluster Partnerships",
  "Investor Relations",
];

const FooterCol = ({
  heading,
  links,
}: {
  heading: string;
  links: string[];
}) => (
  <div className="flex flex-col gap-7">
    <span className="text-white font-sans text-[32px]">{heading}</span>
    {links.map((link) => (
      <span
        key={link}
        className="text-white/60 font-helvetica text-xl cursor-pointer hover:text-white/90 transition-colors"
      >
        {link}
      </span>
    ))}
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-page-bg w-full px-10 pt-[66px] pb-10">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-[66px]">
        {/* Top: logo + nav columns */}
        <div className="flex justify-between items-start">
          {/* Logo */}
          <div className="flex flex-col gap-[136px]">
            <div className="relative w-[115px] h-[115px] border border-white/10">
              <Image
                src={footerLogo}
                alt="Carlton Footer Logo"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Nav columns */}
          <div className="w-[770px] flex justify-between">
            <FooterCol heading="SERVICE" links={SERVICE_LINKS} />
            <FooterCol heading="Explore" links={EXPLORE_LINKS} />
            <FooterCol heading="Business" links={BUSINESS_LINKS} />
          </div>
        </div>

        {/* Bottom: gold divider + copyright */}
        <div className="flex flex-col gap-8">
          <div className="w-full h-px bg-gold" />
          <div className="flex justify-between items-center">
            <span className="text-white font-helvetica text-base">
              © 2026 Carlton Wellness. All Rights Reserved.
            </span>
            <span className="text-white font-helvetica text-base tracking-[40px]">
              Privacy Policy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Terms &amp; Conditions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
