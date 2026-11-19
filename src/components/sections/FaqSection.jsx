import { useState } from "react";
import Button from "../common/Button";
import SectionHeading from "./SectionHeading";
import { homePageData } from "../../utility/helpers";

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
          <article
            className={`faq-item ${openQuestions.includes(index) ? "is-open" : ""}`}
            key={question}
          >
            <button
              aria-expanded={openQuestions.includes(index)}
              onClick={() => toggleQuestion(index)}
            >
              <span>{question}</span>
              <b>{openQuestions.includes(index) ? "−" : "+"}</b>
            </button>
            {openQuestions.includes(index) && <p>{answer}</p>}
          </article>
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
