import { useState } from "react";
import Button from "../common/Button";
import SectionHeading from "./SectionHeading";
import { homePageData } from "../../utility/helpers";

function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <article
      className={`self-start rounded-[5px] border border-[#e7e2de] bg-white shadow-[0_2px_7px_rgba(38,28,20,0.03)] ${isOpen ? "shadow-[0_4px_18px_rgba(38,28,20,0.09)]" : ""}`}
    >
      <button
        className="flex w-full items-center justify-between gap-3 border-0 bg-transparent px-4.5 py-3.75 text-left text-[13px] text-[#27221e] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-ink max-md:px-3.5 max-md:text-sm"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span>{question}</span>
        <b className="text-lg font-normal">{isOpen ? "\u2212" : "+"}</b>
      </button>
      {isOpen && (
        <p className="m-0 px-4.5 pb-4.25 text-xs leading-[1.6] text-[#6a625d] max-md:px-3.5 max-md:pb-3.75 max-md:text-[13px]">
          {answer}
        </p>
      )}
    </article>
  );
}

export default function FaqSection() {
  const { faq } = homePageData;
  const [openQuestions, setOpenQuestions] = useState([0]);
  const allQuestionsOpen = openQuestions.length === faq.items.length;
  const itemsByColumn = faq.items
    .map((item, index) => ({ item, index }))
    .sort(
      (first, second) =>
        (first.index % 2) - (second.index % 2) || first.index - second.index,
    );
  const toggleQuestion = (index) =>
    setOpenQuestions((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index],
    );

  return (
    <section
      className="mx-auto flex max-w-295 flex-col gap-11 px-6 py-22 max-md:gap-7.5 max-md:pb-12 max-md:pt-16"
      id="faq"
    >
      <SectionHeading
        first={faq.heading[0]}
        accent={faq.heading[1]}
        note={faq.note}
      />
      <div className="flex flex-col gap-11 max-md:gap-6">
        <div className="grid grid-flow-col grid-cols-2 grid-rows-3 gap-x-5.5 gap-y-3 max-md:flex max-md:flex-col">
          {itemsByColumn.map(({ item: [question, answer], index }) => (
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
          className="mx-auto flex w-max max-md:min-h-11 max-md:text-[13px]"
        >
          {faq.viewAll}
        </Button>
      </div>
    </section>
  );
}
