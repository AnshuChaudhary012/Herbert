export default function SectionHeading({ first, accent, note }) {
  return (
    <div className="section-heading">
      <h2>
        {first} <span>{accent}</span>
      </h2>
      {note && <p>{note}</p>}
    </div>
  );
}
