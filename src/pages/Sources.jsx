import Button from "../components/common/Button";
import { figmaImages } from "../utility/figmaImages";

const regulations = [
  "Work permit requirements",
  "Job-seeking visas",
  "Self-employment regulations",
  "Specific provisions for various professional groups",
];

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
      <span className="hello-tag">Hello!</span>
      <img src={figmaImages.guideHello} alt="Herbert waving hello" />
    </div>
  );
}

function SourceCta() {
  return (
    <section className="cta-wrap" id="contact">
      <div className="cta-panel">
        <h2>Need help with your visa?<br />Explore the resources.</h2>
        <p>Explore the resources referenced on this page and review information that may help you research German visa topics.</p>
        <div className="cta-actions">
          <Button href="/#features">Explore guidance</Button>
          <Button href="/" variant="outline-light">Explore Herbert</Button>
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
        <Button href="#residence">Explore the residence act</Button>
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
          <img src={figmaImages.communityPattern} alt="" aria-hidden="true" />
        </div>
      </section>

      <section className="employment-section section-space">
          <SourcesHeading text="The Employment Regulation describes conditions for foreign nationals working in Germany. Review the current regulation for details on:">Employment <span>Regulation</span></SourcesHeading>
        <div className="employment-content">
          <ul className="regulation-list">{regulations.slice(0, 2).map((item, i) => <li key={item}><b>{i + 1}</b>{item}</li>)}</ul>
          <div className="source-illustration employment-art">
            <img src={figmaImages.guide} alt="Herbert, your German immigration guide" />
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
              <span className="mini-icon" aria-hidden="true">{["⚙", "▤", "◷"][index]}</span>
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
