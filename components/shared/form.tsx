const inputClass =
  "w-full bg-transparent text-white text-lg outline-none placeholder:text-gold/50 font-helvetica";
const labelClass = "block text-gold font-helvetica text-xl mb-2";
const fieldClass = "flex-1 border-b border-gold pb-3";

const Form = () => {
  return (
    <form className="flex flex-col gap-[72px]">
      <div className="flex flex-col gap-12">
        {/* Row 1 */}
        <div className="flex gap-12 max-md:flex-col">
          <div className={fieldClass}>
            <label className={labelClass}>Full name</label>
            <input type="text" name="fullName" className={inputClass} />
          </div>
          <div className={fieldClass}>
            <label className={labelClass}>City</label>
            <input type="text" name="city" className={inputClass} />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex gap-12 max-md:flex-col">
          <div className={fieldClass}>
            <label className={labelClass}>Phone</label>
            <input type="tel" name="phone" className={inputClass} />
          </div>
          <div className={fieldClass}>
            <label className={labelClass}>Email</label>
            <input type="email" name="email" className={inputClass} />
          </div>
        </div>

        {/* Select Interest */}
        <div className="border-b border-gold pb-3 flex justify-between items-center">
          <div className="flex-1">
            <label className={labelClass}>Select Interest</label>
            <select
              name="interest"
              className={`${inputClass} appearance-none cursor-pointer`}
              style={{ background: "transparent" }}
            >
              <option value="" style={{ background: "rgb(13,12,12)" }}>
                Choose one...
              </option>
              <option value="membership" style={{ background: "rgb(13,12,12)" }}>
                Membership
              </option>
              <option value="franchise" style={{ background: "rgb(13,12,12)" }}>
                Franchise
              </option>
            </select>
          </div>
          {/* Chevron */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="shrink-0 text-gold"
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Message */}
        <div className="border-b border-gold pb-3">
          <label className={labelClass}>Message</label>
          <textarea
            name="message"
            rows={1}
            className={`${inputClass} resize-none`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-fit px-8 py-4 bg-white/2 border border-gold text-gold font-helvetica text-base uppercase rounded-[4px] cursor-pointer backdrop-blur-[5px] hover:bg-white/10 transition-colors"
      >
        SUBMIT ENQUIRY
      </button>
    </form>
  );
};

export default Form;
