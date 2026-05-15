"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

const leftLinks = [
  { href: "/", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/location", label: "Locations" },
  { href: "/franchise", label: "Franchise" },
  { href: "/contact", label: "Contact" },
];

const rightLinks = [
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full h-[120px] flex flex-row items-center justify-between bg-white/[1%] fixed top-0 z-50 px-10 pt-10 pb-5 max-lg:p-5 max-md:h-[80px]">
        {/* Left nav — hidden below md */}
        <nav className="flex flex-row items-center gap-9 max-lg:gap-[15px] max-md:hidden">
          {leftLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="text-white font-helvetica text-base leading-[15.9px] hover:opacity-75 transition-opacity"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Hamburger — shown below md */}
        <button
          className="hidden max-md:flex flex-col justify-center gap-[5px] cursor-pointer p-1 w-8 h-8"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`block w-6 h-[2px] bg-white transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`block w-6 h-[2px] bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-[2px] bg-white transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>

        {/* Logo — centered */}
        <div className="relative w-[88px] h-[60px] flex-shrink-0 max-md:h-[44px]">
          <Image src={logo} alt="Carlton London" fill className="object-contain" />
        </div>

        {/* Right nav — hidden below md */}
        <div className="w-[446px] flex flex-row justify-end items-center gap-9 max-lg:gap-[15px] max-md:hidden">
          {rightLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="text-white font-helvetica text-base leading-[15.9px] hover:opacity-75 transition-opacity"
            >
              {label}
            </Link>
          ))}
          <button className="flex flex-row justify-center items-center gap-[10px] px-4 py-4 border border-white rounded-[4px] bg-transparent text-white font-helvetica text-base uppercase cursor-pointer hover:opacity-75 transition-opacity">
            Get Membership
          </button>
        </div>

        {/* Right spacer — keeps logo centered on mobile */}
        <div className="w-8 hidden max-md:block" />
      </header>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="fixed top-[80px] inset-x-0 z-40 md:hidden bg-black/95 backdrop-blur-md flex flex-col px-8 py-6 gap-0">
          {[...leftLinks, ...rightLinks].map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="text-white font-helvetica text-lg py-4 border-b border-white/10 hover:opacity-75 transition-opacity"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <button className="mt-6 px-4 py-4 border border-white rounded-[4px] bg-transparent text-white font-helvetica text-base uppercase cursor-pointer hover:opacity-75 transition-opacity">
            Get Membership
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
