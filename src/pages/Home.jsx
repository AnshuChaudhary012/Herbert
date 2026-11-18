import { useState } from "react";
import Hero from "../components/Hero";
import Button from "../components/common/Button";
import { figmaImages } from "../utility/figmaImages";
const features = [
  "Find out which visa you might want",
  "Receive a checklist with all necessary documents",
  "Write your CV / Motivation Letter with Herbert",
  "Help prepare for your visa interview",
  "Practice your German interactively with Herbert",
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
    "Requirements can change and may depend on your situation. Use the sources page and confirm current details with the responsible authority.",
  ],
  [
    "How can I access Herbert?",
    "Browse the guidance and source information available on this website.",
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
        <p>Explore visa topics, review useful resources, and get guidance as you prepare to move to Germany.</p>
        <div className="cta-actions">
          <Button href="#features">Start your conversation</Button>
          <Button href="/sources" variant="outline-light">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [openQuestions, setOpenQuestions] = useState([0]);
  const allQuestionsOpen = openQuestions.length === questions.length;
  const toggleQuestion = (index) => setOpenQuestions((current) => current.includes(index)
    ? current.filter((item) => item !== index)
    : [...current, index]);
  return (
    <main>
      <Hero />

      <section className="features-section section-space" id="features">
        <SectionHeading
          first="Herbert Main"
          accent="Features"
          note="Explore practical topics that can help you prepare for a move to Germany."
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
            <img src={figmaImages.featureSignpost} alt="Herbert beside a signpost pointing to work and tourism in Germany" />
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
          note="Explore the service options and confirm current pricing and availability before purchase."
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
              <Button href="/sources">Upgrade to {plan.name}</Button>
            </article>
          ))}
        </div>
      </section>
      <section className="team-section section-space" id="team">
        <div className="team-copy">
          <SectionHeading first="Team" accent="& Resources" />
          <p>
            Herbert brings together practical visa guidance, helpful resources, and clear next steps for people planning a new life and career in Germany.
          </p>
        </div>
        <div className="team-art">
          <picture className="team-art__picture">
            <source media="(max-width: 700px)" srcSet={figmaImages.teamMobile} />
            <img src={figmaImages.teamGroups} alt="Graduates, a family and medical professionals in front of the Brandenburg Gate" />
          </picture>
        </div>
        <div className="team-details">
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
          note="Quick answers about Herbert and the guidance available on this site."
        />
        <div className="faq-grid">
          {questions.map(([question, answer], i) => (
            <article
              className={"faq-item " + (openQuestions.includes(i) ? "is-open" : "")}
              key={question}
            >
              <button
                aria-expanded={openQuestions.includes(i)}
                onClick={() => toggleQuestion(i)}
              >
                <span>{question}</span>
                <b>{openQuestions.includes(i) ? "−" : "+"}</b>
              </button>
              {openQuestions.includes(i) && <p>{answer}</p>}
            </article>
          ))}
        </div>
        <Button type="button" onClick={() => setOpenQuestions(allQuestionsOpen ? [] : questions.map((_, index) => index))} aria-expanded={allQuestionsOpen} className="faq-more">
          View All
        </Button>
      </section>
      <CtaPanel />
    </main>
  );
}
