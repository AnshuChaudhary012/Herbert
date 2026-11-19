import SectionHeading from "./SectionHeading";
import { homePageData } from "../../utility/helpers";
import featureSignpostImage from "../../assets/images/figma/feature-signpost.png";

export default function FeaturesSection() {
  const { features } = homePageData;
  return (
    <section className="features-section section-space" id="features">
      <SectionHeading
        first={features.heading[0]}
        accent={features.heading[1]}
        note={features.note}
      />
      <div className="feature-layout">
        <div className="feature-list">
          {features.items.slice(0, 3).map((item, index) => (
            <article className="feature-item" key={item}>
              <span>{index + 1}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
        <div className="feature-art feature-art--image">
          <img
            src={featureSignpostImage}
            alt="Herbert beside a signpost pointing to work and tourism in Germany"
          />
        </div>
        <div className="feature-list">
          {features.items.slice(3).map((item, index) => (
            <article className="feature-item" key={item}>
              <span>{index + 4}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
