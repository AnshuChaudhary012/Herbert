export default function SectionHeading({
  first,
  accent,
  note,
  className = "",
  children,
  align = "center",
  headingClassName = "",
  noteClassName = "",
}) {
  return (
    <div className={`${className} ${align === "center" ? "text-center" : "text-left"}`}>
      <h2 className={`m-0 text-[clamp(28px,3.33vw,48px)] font-bold leading-[1.15] tracking-[-0.035em] max-md:text-[clamp(25px,7vw,32px)] ${headingClassName}`}>
          {children ?? (
          <>
            {first} <span className="text-accent">{accent}</span>
          </>
        )}
      </h2>
      {note && (
        <p className={`${align === "center" ? "mx-auto" : "mx-0"} mt-[15px] max-w-[610px] text-[13px] leading-[1.65] text-muted max-md:mt-[14px] max-md:leading-[1.55] ${noteClassName}`}>
          {note}
        </p>
      )}
    </div>
  );
}
