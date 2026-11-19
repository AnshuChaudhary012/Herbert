import Button from "../common/Button";
import { homePageData } from "../../utility/helpers";

export default function CtaPanel() {
  const { cta } = homePageData;
  return (
    <section className="cta-wrap" id="contact">
      <div className="cta-panel">
        <h2>{cta.title[0]}<br />{cta.title[1]}</h2>
        <p>{cta.description}</p>
        <div className="cta-actions">
          <Button href="#features">{cta.primaryAction}</Button>
          <Button href="/sources" variant="outline-light">{cta.secondaryAction}</Button>
        </div>
      </div>
    </section>
  );
}
