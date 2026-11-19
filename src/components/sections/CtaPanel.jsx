import Button from "../common/Button";
import { homePageData } from "../../utility/helpers";

export default function CtaPanel({
  title = homePageData.cta.title,
  description = homePageData.cta.description,
  primaryAction = homePageData.cta.primaryAction,
  primaryHref = "#features",
  secondaryAction = homePageData.cta.secondaryAction,
  secondaryHref = "/sources",
}) {
  return (
    <section className="cta-wrap" id="contact">
      <div className="cta-panel">
        <h2>
          {title[0]}
          <br />
          {title[1]}
        </h2>
        <p>{description}</p>
        <div className="cta-actions">
          <Button href={primaryHref}>{primaryAction}</Button>
          <Button href={secondaryHref} variant="outline-light">
            {secondaryAction}
          </Button>
        </div>
      </div>
    </section>
  );
}
