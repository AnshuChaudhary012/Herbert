import Button from "./common/Button";
import { homePageData } from "../utility/helpers";
import guideLeftImage from "../assets/images/figma/guide-left.png";
import guideRightImage from "../assets/images/figma/guide-right.png";
import {
  DocumentChecklistIcon,
  FormsIcon,
  LanguageAssistanceIcon,
} from "./common/SVG";

const serviceIcons = {
  forms: FormsIcon,
  documents: DocumentChecklistIcon,
  language: LanguageAssistanceIcon,
};

export default function Hero() {
  const { hero } = homePageData;
  return (
    <section
      className="hero-section relative flex flex-col items-center overflow-hidden px-6 pt-24 max-[700px]:px-4.5 max-[700px]:pt-16"
      id="top"
      aria-labelledby="hero-title"
    >
      <div className="hero-lines" aria-hidden="true" />
      <div className="hero-copy relative z-10 w-full max-w-202.5 text-center max-[700px]:static">
        <h1 id="hero-title">
          {hero.titleStart} <span>{hero.titleAccent}</span> {hero.titleEnd}
        </h1>
        <p>{hero.description}</p>
        <Button href="#features">{hero.action}</Button>
      </div>
      <img
        className="hero-person hero-person--left"
        src={guideLeftImage}
        alt="Herbert waving hello"
      />
      <img
        className="hero-person hero-person--right"
        src={guideRightImage}
        alt="Herbert, your German immigration guide"
      />
      <div className="service-cards">
        {hero.services.map(([title, text, icon]) => {
          const Icon = serviceIcons[icon];
          return (
            <article className="service-card" key={title}>
              <span className="mini-icon">
                <Icon />
              </span>
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
