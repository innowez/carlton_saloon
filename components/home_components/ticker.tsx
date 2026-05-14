const items = [
  "Multi-City Membership",
  "Certified Professionals",
  "Personalized Consultation",
  "Hygiene-First Standards",
  "Premium Approved Products",
];

const repeated = [...items, ...items];

const Ticker = () => (
  <div className="w-full h-8 bg-page-bg overflow-hidden flex items-center">
    <div
      className="flex items-center gap-[54px] pl-10 animate-ticker shrink-0"
      style={{ width: "max-content" }}
    >
      {repeated.flatMap((item, i) => [
        <span key={`t${i}`} className="text-gold font-sans font-semibold text-2xl whitespace-nowrap">
          {item}
        </span>,
        <div key={`d${i}`} className="w-[11px] h-[11px] bg-gold rounded-full shrink-0" />,
      ])}
    </div>
  </div>
);

export default Ticker;
