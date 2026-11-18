import Button from "../components/common/Button";
import { figmaImages } from "../utility/figmaImages";

const regulations = [
  "Work permit requirements",
  "Job-seeking visas",
  "Self-employment regulations",
  "Specific provisions for various professional groups",
];

function TopicIcon({ type }) {
  if (type === "process") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="2" /><path d="m12 7 1.5 3.5L17 12l-3.5 1.5L12 17l-1.5-3.5L7 12l3.5-1.5L12 7Z" fill="currentColor" /></svg>;
  }
  if (type === "documents") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h8l5 5v12a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M14 3v6h6M8 14h8M8 17h6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M12 6v6l4 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
}

function SourcesHeading({ children, text }) {
  return (
    <div className="sources-heading">
      <h2>{children}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function GuidePlaceholder() {
  return (
    <div className="source-illustration source-person">
      <img src={figmaImages.guideHello} alt="Herbert waving hello" />
    </div>
  );
}

function SourceCta() {
  return (
    <section className="cta-wrap" id="contact">
      <div className="cta-panel">
        <h2>Need Help in Your Visa?<br />Ask Herbert Now!</h2>
        <p>Explore visa topics, review useful resources, and get guidance as you prepare to move to Germany.</p>
        <div className="cta-actions">
          <Button href="/#features">Start your conversation</Button>
          <Button href="/" variant="outline-light">Learn More</Button>
        </div>
      </div>
    </section>
  );
}

export default function Sources() {
  return (
    <main className="sources-page">
      <section className="sources-hero section-space">
        <div className="hero-lines" aria-hidden="true" />
        <h1>The Foundations of <span>German<br />Immigration</span> Expertise</h1>
        <p>This page introduces key German and European rules related to immigration. Use the links to review current requirements with the responsible authorities.</p>
        <Button href="#contact">Contact Us</Button>
      </section>

      <section className="source-row section-space" id="residence">
        <div className="source-copy">
          <SourcesHeading text="The Aufenthaltsgesetz is the cornerstone of German immigration law. This act governs:">Residence <span>Act</span></SourcesHeading>
        </div>
        <GuidePlaceholder />
        <div className="source-detail">
          <ul><li>Entry into Germany</li><li>Residence permits</li><li>Employment regulations for foreigners</li><li>Integration measures</li></ul>
          <p>Review the current text of the Residence Act to learn about legal residence requirements and pathways for living in Germany.</p>
        </div>
      </section>

      <section className="source-row source-row--reverse section-space">
        <div className="source-copy">
          <SourcesHeading text="As part of the Schengen Area, Germany follows this code for border control. The Schengener Grenzkodex covers:">Schengen Borders <span>Code</span></SourcesHeading>
          <ul><li>Short-term stay regulations</li><li>Entry requirements for the Schengen Area</li><li>Border crossing procedures</li></ul>
        </div>
        <div className="source-illustration source-building">
          <img src={figmaImages.sourcesGateGroups} alt="Graduates, a family and medical professionals outside the Brandenburg Gate" />
        </div>
      </section>

      <section className="employment-section section-space">
          <SourcesHeading text="The Employment Regulation describes conditions for foreign nationals working in Germany. Review the current regulation for details on:">Employment <span>Regulation</span></SourcesHeading>
        <div className="employment-content">
          <ul className="regulation-list">{regulations.slice(0, 2).map((item, i) => <li key={item}><b>{i + 1}</b>{item}</li>)}</ul>
          <div className="source-illustration employment-art">
            <img src={figmaImages.sourcesEmploymentSignpost} alt="Herbert beside a signpost pointing to work and tourism in Germany" />
          </div>
          <ul className="regulation-list">{regulations.slice(2).map((item, i) => <li key={item}><b>{i + 3}</b>{item}</li>)}</ul>
        </div>
      </section>

      <section className="visa-code-section section-space">
        <div className="visa-code-cards">
          {[
            "Visa application processes",
            "Required documentation",
            "Visa fees and processing times",
          ].map((title, index) => (
            <article key={title}>
            <span className="mini-icon" aria-hidden="true"><TopicIcon type={["process", "documents", "time"][index]} /></span>
              <p>{title}</p>
            </article>
          ))}
        </div>
        <div className="source-copy">
          <SourcesHeading text="The Visa Code sets common procedures for short-stay visa applications in the Schengen Area. It covers topics such as:">Visa <span>Code</span></SourcesHeading>
          <Button href="#visa-handbook">View visa handbook</Button>
        </div>
      </section>

      <section className="source-row section-space" id="visa-handbook">
        <div className="source-copy">
          <SourcesHeading text="The German Foreign Office publishes a visa handbook for use in visa processing. Consult the current handbook and the responsible mission for applicable guidance:">Visa <span>Handbook</span></SourcesHeading>
          <ul><li>In-depth insights into visa application assessment</li><li>Clarification on complex cases and exceptions</li><li>Nuanced interpretations of immigration laws and regulations</li></ul>
        </div>
        <GuidePlaceholder />
      </section>

      <p className="sources-note">Immigration requirements can change and depend on individual circumstances. Always verify details with the relevant German authority or embassy before acting.</p>
      <SourceCta />
    </main>
  );
}
