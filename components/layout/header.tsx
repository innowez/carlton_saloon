import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

const Header = () => {
  return (
    <>
      {/* ── Nav ── */}
      <header
        className="w-full h-[120px] flex flex-row items-center justify-between bg-white/[1%] fixed top-0 z-50
                         px-10 pt-10 pb-5
                         max-lg:p-5"
      >
        {/* Left nav */}
        <nav className="flex flex-row items-center gap-9 max-lg:gap-[15px] max-md:hidden">
          {[
            { href: "#services", label: "Services" },
            { href: "#about", label: "About" },
            { href: "#locations", label: "Locations" },
            { href: "#franchise", label: "Franchise" },
            { href: "#contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-white font-helvetica text-base leading-[15.9px] hover:opacity-75 transition-opacity"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Logo — centered */}
        <div className="relative w-[88px] h-[60px] flex-shrink-0">
          <Image
            src={logo}
            alt="Company Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* Right nav */}
        <div className="w-[446px] flex flex-row justify-end items-center gap-9 max-lg:gap-[15px] max-md:w-auto">
          <Link
            href="#products"
            className="text-white font-helvetica text-base leading-[15.9px] hover:opacity-75 transition-opacity"
          >
            Products
          </Link>
          <Link
            href="#contact-us"
            className="text-white font-helvetica text-base leading-[15.9px] hover:opacity-75 transition-opacity"
          >
            Contact Us
          </Link>
          <button className="flex flex-row justify-center items-center gap-[10px] px-4 py-4 border border-white rounded-[4px] bg-transparent text-white font-helvetica text-base uppercase cursor-pointer hover:opacity-75 transition-opacity">
            Get Membership
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
