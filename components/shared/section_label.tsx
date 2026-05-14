const SectionLabel = ({
  text,
  centered = false,
}: {
  text: string;
  centered?: boolean;
}) => (
  <div
    className={`flex items-center gap-[14px] ${centered ? "justify-center" : ""}`}
  >
    <span className="text-gold font-helvetica text-[32px] leading-[32px] select-none">
      [
    </span>
    <span className="text-white font-helvetica text-xl leading-0">{text}</span>
    <span className="text-gold font-helvetica text-[32px] leading-[32px] select-none">
      ]
    </span>
  </div>
);

export default SectionLabel;
