"use client";

import { useState } from "react";
import Image from "next/image";
import salonImg from "@/assets/images/location_page/our_salons.png";
import SectionLabel from "@/components/shared/section_label";

const salons = [
  {
    title: "Carlton London Salon - New Delhi",
    address: "23, Khan Market Complex, New Delhi — 110 003",
    hours: "10:00 AM — 8:00 PM · All days",
    status: "Closed · Opens tomorrow at 10:00 AM",
    isNew: true,
  },
  {
    title: "Carlton London Salon - South Delhi",
    address: "45, Greater Kailash, New Delhi — 110 048",
    hours: "10:00 AM — 8:00 PM · All days",
    status: "Closed · Opens tomorrow at 10:00 AM",
    isNew: false,
  },
  {
    title: "Carlton London Salon - Gurgaon",
    address: "Shop 102, Cyber Hub, Gurugram — 122 002",
    hours: "11:00 AM — 9:00 PM · All days",
    status: "Closed · Opens tomorrow at 11:00 AM",
    isNew: false,
  },
];

const PinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
    <path
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
      fill="rgba(216,200,184,1)"
    />
  </svg>
);

const ClockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
    <circle cx="12" cy="12" r="9" stroke="rgba(216,200,184,1)" strokeWidth="2" />
    <path d="M12 7v5l3 3" stroke="rgba(216,200,184,1)" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const SalonCard = ({
  title,
  address,
  hours,
  status,
  isNew,
}: (typeof salons)[0]) => (
  <div className="flex flex-col p-6 gap-5 bg-[#0c0c0c] rounded-lg w-full shrink-0">
    <div className="relative h-[271px] rounded-lg overflow-hidden">
      <Image src={salonImg} alt={title} fill className="object-cover" />
    </div>
    <div className="flex items-center gap-2">
      <div className="w-[6px] h-[6px] rounded-full bg-gold shrink-0" />
      <span className="text-muted font-helvetica text-xs uppercase tracking-[2px]">
        {isNew ? "Newly Opened" : "Active"}
      </span>
    </div>
    <h3 className="text-white font-sans font-normal text-[30px] leading-[40px] m-0">{title}</h3>
    <div className="h-px bg-gold/15" />
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-4">
        <PinIcon />
        <span className="text-muted font-helvetica text-base">{address}</span>
      </div>
      <div className="flex items-center gap-4">
        <ClockIcon />
        <span className="text-muted font-helvetica text-base">{hours}</span>
      </div>
      <div className="pl-10">
        <span className="text-muted font-helvetica text-base opacity-80">{status}</span>
      </div>
    </div>
    <button className="mt-3 w-full px-6 py-4 border border-white rounded-[4px] bg-white/[2%] backdrop-blur-[5px] text-white font-helvetica text-base uppercase cursor-pointer hover:bg-white/10 transition-colors">
      Book via WhatsApp
    </button>
  </div>
);

const SalonsSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="px-10 py-[100px] max-w-[1440px] mx-auto">
      <div className="flex justify-between items-end mb-10 gap-8 max-lg:flex-col max-lg:items-start">
        <div className="flex flex-col gap-10">
          <SectionLabel text="Our Salons" />
          <h2 className="text-cream font-sans font-semibold text-[48px] leading-none m-0 max-lg:text-[36px]">
            Current locations
          </h2>
        </div>
        <div className="w-[405px] max-w-full h-12 bg-cream rounded-lg flex items-center px-4 gap-4 shrink-0">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="shrink-0">
            <circle cx="11" cy="11" r="7" stroke="#333" strokeWidth="2" />
            <path d="M20 20l-3-3" stroke="#333" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Enter Location or drag pin on map"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none outline-none w-full text-base font-helvetica text-[#333] placeholder:text-[#666]"
          />
        </div>
      </div>

      <div className="flex gap-10 h-[834px] max-lg:flex-col max-lg:h-auto">
        {/* Scrollable list */}
        <div className="w-[497px] max-lg:w-full shrink-0 overflow-y-auto pr-3 flex flex-col gap-6 [scrollbar-width:thin] [scrollbar-color:rgba(201,161,74,0.6)_rgba(247,242,232,0.1)] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-cream/10 [&::-webkit-scrollbar-thumb]:bg-gold/60 [&::-webkit-scrollbar-thumb]:rounded-sm">
          {salons.map((salon) => (
            <SalonCard key={salon.title} {...salon} />
          ))}
        </div>

        {/* Map placeholder */}
        <div className="flex-1 bg-[#1a1a1a] rounded-lg overflow-hidden flex items-center justify-center max-lg:h-[400px]">
          <span className="text-muted font-helvetica text-base opacity-40 select-none">
            Interactive Map
          </span>
        </div>
      </div>
    </section>
  );
};

export default SalonsSection;
