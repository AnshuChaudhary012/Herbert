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
        <h2>Need Help in Your Visa?<br />Ask Herbert Now!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit phasellus mollis sit aliquam sit nullam.</p>
        <div className="cta-actions">
          <Button href="/#top">Start your conversation</Button>
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
        <p>Herbert, our AI chatbot, is built on a comprehensive understanding of German immigration law. To ensure accuracy and reliability, Herbert&apos;s knowledge base is derived from the following authoritative sources:</p>
        <Button href="#residence">Contact Us</Button>
      </section>

      <section className="source-row section-space" id="residence">
        <div className="source-copy">
          <SourcesHeading text="The Aufenthaltsgesetz is the cornerstone of German immigration law. This act governs:">Residence <span>Act</span></SourcesHeading>
        </div>
        <GuidePlaceholder />
        <div className="source-detail">
          <ul><li>Entry into Germany</li><li>Residence permits</li><li>Employment regulations for foreigners</li><li>Integration measures</li></ul>
          <p>Herbert utilizes this act to provide precise information on legal residence requirements and pathways to living in Germany.</p>
        </div>
      </section>

      <section className="source-row source-row--reverse section-space">
        <div className="source-copy">
          <SourcesHeading text="As part of the Schengen Area, Germany adheres to this code for border control. Herbert&apos;s knowledge of the Schengener Grenzkodex covers:">Schengen Borders <span>Code</span></SourcesHeading>
          <ul><li>Short-term stay regulations</li><li>Entry requirements for the Schengen Area</li><li>Border crossing procedures</li></ul>
        </div>
        <div className="source-illustration source-building">
          <img src={figmaImages.community} alt="Illustration of the Brandenburg Gate and people in Berlin" />
        </div>
      </section>

      <section className="employment-section section-space">
        <SourcesHeading text="This regulation details the conditions under which foreign nationals can work in Germany. Herbert&apos;s training in the Beschäftigungsverordnung allows for accurate guidance on:">Employment <span>Regulation</span></SourcesHeading>
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
          <SourcesHeading text="This code standardizes procedures for short-stay visas in the Schengen Area. Herbert&apos;s understanding of the Visa-Kodex ensures accurate information on:">Visa <span>Code</span></SourcesHeading>
          <Button href="#visa-handbook">Learn More</Button>
        </div>
      </section>

      <section className="source-row section-space" id="visa-handbook">
        <div className="source-copy">
          <SourcesHeading text="The Visumhandbuch is a comprehensive internal document used by the Federal Foreign Office and German embassies. Spanning approximately 1,000 pages, it provides detailed guidelines on visa issuance. Herbert&apos;s training on this resource offers:">Visa <span>Handbook</span></SourcesHeading>
          <ul><li>In-depth insights into visa application assessment</li><li>Clarification on complex cases and exceptions</li><li>Nuanced interpretations of immigration laws and regulations</li></ul>
        </div>
        <GuidePlaceholder />
      </section>

      <p className="sources-note">By basing its knowledge on these official sources, Herbert provides you with accurate, up-to-date, &amp; reliable information on German immigration processes. Our commitment to using these authoritative resources ensures that you receive guidance aligned with current German immigration laws &amp; practices.</p>
      <SourceCta />
    </main>
  );
}
