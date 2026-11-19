import SectionHeading from "./SectionHeading";
import { homePageData } from "../../utility/helpers";
import featureSignpostImage from "../../assets/images/figma/feature-signpost.png";

function FeatureList({ items, startAt = 1 }) {
  return (
    <div className="feature-list">
      {items.map((item, index) => (
        <article className="feature-item" key={item}>
          <span>{startAt + index}</span>
          <p>{item}</p>
        </article>
      ))}
    </div>
  );
}

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
        <FeatureList items={features.items.slice(0, 3)} />
        <div className="feature-art feature-art--image">
          <img
            src={featureSignpostImage}
            alt="Herbert beside a signpost pointing to work and tourism in Germany"
          />
        </div>
        <FeatureList items={features.items.slice(3)} startAt={4} />
      </div>
    </section>
  );
}
