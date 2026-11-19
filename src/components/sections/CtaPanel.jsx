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
    <section
      className="bg-[linear-gradient(180deg,#fffdfa_0_40%,#fff6ef_40%)] px-6 pb-17.5 pt-5 max-md:px-6 max-md:pb-12.5 max-md:pt-4.5"
      id="contact"
    >
      <div className="mx-auto min-h-75 max-w-285 rounded-xl bg-brand px-6 py-13.25 text-center text-white max-md:min-h-0 max-md:px-5 max-md:py-8">
        <h2 className="mb-3.75 mt-0 text-4xl font-bold leading-[1.2] max-md:text-[26px]">
          {title[0]}
          <br />
          {title[1]}
        </h2>
        <p className="mx-auto mb-5.5 mt-0 max-w-125 text-[13px] leading-[1.55]">
          {description}
        </p>
        <div className="flex justify-center gap-3.5 max-md:grid max-md:grid-cols-1 max-md:gap-2.5">
          <Button href={primaryHref} variant="light">
            {primaryAction}
          </Button>
          <Button href={secondaryHref} variant="outline-light">
            {secondaryAction}
          </Button>
        </div>
      </div>
    </section>
  );
}
