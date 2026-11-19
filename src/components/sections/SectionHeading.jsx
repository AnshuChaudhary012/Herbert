export default function SectionHeading({
  first,
  accent,
  note,
  className = "section-heading",
  children,
}) {
  return (
    <div className={className}>
      <h2>
        {children ?? (
          <>
            {first} <span>{accent}</span>
          </>
        )}
      </h2>
      {note && <p>{note}</p>}
    </div>
  );
}
