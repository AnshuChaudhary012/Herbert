import { useState } from "react";
import Button from "../common/Button";
import SectionHeading from "./SectionHeading";
import { homePageData } from "../../utility/helpers";

function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <article className={`faq-item ${isOpen ? "is-open" : ""}`}>
      <button aria-expanded={isOpen} onClick={onToggle}>
        <span>{question}</span>
        <b>{isOpen ? "\u2212" : "+"}</b>
      </button>
      {isOpen && <p>{answer}</p>}
    </article>
  );
}

export default function FaqSection() {
  const { faq } = homePageData;
  const [openQuestions, setOpenQuestions] = useState([0]);
  const allQuestionsOpen = openQuestions.length === faq.items.length;
  const toggleQuestion = (index) =>
    setOpenQuestions((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index],
    );

  return (
    <section className="faq-section section-space" id="faq">
      <SectionHeading
        first={faq.heading[0]}
        accent={faq.heading[1]}
        note={faq.note}
      />
      <div className="faq-grid">
        {faq.items.map(([question, answer], index) => (
          <FaqItem
            key={question}
            question={question}
            answer={answer}
            isOpen={openQuestions.includes(index)}
            onToggle={() => toggleQuestion(index)}
          />
        ))}
      </div>
      <Button
        type="button"
        onClick={() =>
          setOpenQuestions(
            allQuestionsOpen ? [] : faq.items.map((_, index) => index),
          )
        }
        aria-expanded={allQuestionsOpen}
        className="faq-more"
      >
        {faq.viewAll}
      </Button>
    </section>
  );
}
