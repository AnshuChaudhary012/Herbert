import Button from "./common/Button";
import { figmaImages } from "../utility/figmaImages";

const services = [
  ["Interactive Forms", "Simplify visa application forms", "forms"],
  ["Document Checklist", "Personalized document preparation", "documents"],
  ["Language Assistance", "German language skills assessment", "language"],
];

function ServiceIcon({ type }) {
  if (type === "forms") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="15" rx="3" /><path d="M3 9h18M7 7h.01M10 7h.01M13 7h.01" /></svg>;
  }
  if (type === "documents") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h8l5 5v12a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" /><path d="M14 3v6h6M8 14h5M8 17h4" /></svg>;
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h10v14H4zM14 8h6v11h-6" /><path d="M7 9h4M7 12h4M16 12l2 3M18 12l-2 3" /></svg>;
}

export default function Hero() {
  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <div className="hero-lines" aria-hidden="true" />
      <div className="hero-copy">
        <span className="hello-tag">Hello!</span>
        <h1 id="hero-title">
          Navigating <span>German Bureaucracy</span> with ease
        </h1>
        <p>Herbert Visa: Your AI-powered assistant for German visa and immigration processes</p>
        <Button href="#features">Start your conversation with Herbert</Button>
      </div>
      <img className="hero-person hero-person--left" src={figmaImages.guideHello} alt="Herbert waving hello" />
      <img className="hero-person hero-person--right" src={figmaImages.guide} alt="Herbert, your German immigration guide" />
      <div className="service-cards">
        {services.map(([title, text, icon]) => (
          <article className="service-card" key={title}>
            <span className="mini-icon"><ServiceIcon type={icon} /></span>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
