import { useState } from "react";
import Hero from "../components/Hero";
import Button from "../components/common/Button";
import { figmaImages } from "../utility/figmaImages";
const features = [
  "Find out which visa you might want",
  "Help prepare for your visa interview",
  "Receive a checklist with all necessary documents",
  "Practice your German interactively with Herbert",
  "Write your CV / Motivation Letter with Herbert",
  "Let Herbert guide you through your fresh start in Germany once you get there.",
];
const plans = [
  {
    price: "$5/mo",
    name: "Basic",
    text: "Ideal for newcomers! Get quick and clear answers to your basic questions about German immigration policies.",
    messages: "10 Messages",
  },
  {
    price: "$10/mo",
    name: "Standard",
    text: "The go-to resource for thorough visa application preparation. Ensure you have all the necessary information and answers.",
    messages: "25 Messages",
  },
  {
    price: "$20/mo",
    name: "Premium",
    text: "Have Herbert accompany you throughout your entire visa application journey, with extensive message credits.",
    messages: "50 Messages",
  },
];
const questions = [
  [
    "What is Herbert?",
    "Herbert is an AI-powered assistant designed to help with German visa and immigration processes. It provides guidance, answers questions, and helps you navigate the requirements and procedures involved.",
  ],
  [
    "How accurate is the information provided by Herbert?",
    "Herbert bases its guidance on official German immigration resources. Always check the current requirements with the responsible authority.",
  ],
  [
    "How can I access Herbert?",
    "Start a conversation with Herbert from this page to get help with your questions.",
  ],
  [
    "How can Herbert help me with my visa application?",
    "Herbert can help you understand visa options, prepare a document checklist, and practice for an interview.",
  ],
  [
    "Is Herbert available in multiple languages?",
    "Herbert offers language assistance to help you prepare for life in Germany.",
  ],
  [
    "Can Herbert help me fill out my application forms?",
    "Herbert can guide you through the information requested on common application forms.",
  ],
];

function SectionHeading({ first, accent, note }) {
  return (
    <div className="section-heading">
      <h2>
        {first} <span>{accent}</span>
      </h2>
      {note && <p>{note}</p>}
    </div>
  );
}

function CtaPanel() {
  return (
    <section className="cta-wrap" id="contact">
      <div className="cta-panel">
        <h2>
          Need Help in Your Visa?
          <br />
          Ask Herbert Now!
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit phasellus mollis sit aliquam sit nullam.</p>
        <div className="cta-actions">
          <Button href="#top">Start your conversation</Button>
          <Button href="/sources" variant="outline-light">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [openQuestion, setOpenQuestion] = useState(0);
  return (
    <main>
      <Hero />

      <section className="features-section section-space" id="features">
        <SectionHeading
          first="Herbert Main"
          accent="Features"
          note="Lorem ipsum dolor sit amet consectetur. Tellus ipsum semper eget ornare justo netus proin lacus sed."
        />
        <div className="feature-layout">
          <div className="feature-list">
            {features.slice(0, 3).map((item, i) => (
              <article className="feature-item" key={item}>
                <span>{i + 1}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
          <div className="feature-art feature-art--image">
            <img src={figmaImages.guide} alt="Herbert helping people prepare for their move" />
          </div>
          <div className="feature-list">
            {features.slice(3).map((item, i) => (
              <article className="feature-item" key={item}>
                <span>{i + 4}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="plans-section section-space" id="plans">
        <SectionHeading
          first="Friendly Pricing"
          accent="Plans"
          note="Lorem ipsum dolor sit amet consectetur adipiscing elit sed."
        />
        <div className="plans-grid">
          {plans.map((plan) => (
            <article className="plan-card" key={plan.name}>
              <div className="plan-title">
                <h3>{plan.price}</h3>
                <span
                  className={"plan-badge badge--" + plan.name.toLowerCase()}
                >
                  {plan.name}
                </span>
              </div>
              <p>{plan.text}</p>
              <h4>What’s included?</h4>
              <p className="message-count">
                <span>●</span> {plan.messages}
              </p>
              <Button href="#contact">Upgrade to {plan.name}</Button>
            </article>
          ))}
        </div>
      </section>
      <section className="team-section section-space" id="team">
        <div className="team-copy">
          <SectionHeading first="Team" accent="& Resources" />
          <p>
            Lorem ipsum dolor sit amet consectetur. Tellus ipsum semper eget
            ornare justo netus proin lacus sed vitae pellentesque cursus.
          </p>
        </div>
        <div className="team-art">
          <img src={figmaImages.community} alt="Illustration of the Brandenburg Gate and people in Berlin" />
        </div>
        <div className="team-details">
          <p>Herbert guides you through:</p>
          <ul>
            <li>Single entrepreneur (yourself)</li>
            <li>Outsourced development to freelancers</li>
            <li>Budget: $15,000</li>
          </ul>
          <Button href="/sources">Learn more</Button>
        </div>
      </section>
      <section className="faq-section section-space" id="faq">
        <SectionHeading
          first="Frequently Asked"
          accent="Questions"
          note="Help users find quick answers to common questions about Herbert, our AI-powered assistant for German visas and immigration processes."
        />
        <div className="faq-grid">
          {questions.map(([question, answer], i) => (
            <article
              className={"faq-item " + (openQuestion === i ? "is-open" : "")}
              key={question}
            >
              <button
                aria-expanded={openQuestion === i}
                onClick={() => setOpenQuestion(openQuestion === i ? -1 : i)}
              >
                <span>{question}</span>
                <b>{openQuestion === i ? "−" : "+"}</b>
              </button>
              {openQuestion === i && <p>{answer}</p>}
            </article>
          ))}
        </div>
        <Button href="#faq" className="faq-more">
          View All
        </Button>
      </section>
      <CtaPanel />
    </main>
  );
}
