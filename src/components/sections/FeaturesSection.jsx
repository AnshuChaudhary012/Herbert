import SectionHeading from "./SectionHeading";
import { homePageData } from "../../utility/helpers";
import featureSignpostImage from "../../assets/images/figma/feature-signpost.png";

function FeatureList({ items, startAt = 1 }) {
  return (
    <div className="grid grid-rows-3 content-center gap-8 max-md:contents">
      {items.map((item, index) => (
        <article
          className="flex flex-col gap-3.5 text-center max-md:gap-2.5 max-md:text-left"
          key={item}
        >
          <span className="mx-auto grid size-8.5 place-items-center rounded-full bg-brand text-[15px] font-bold text-white max-md:mx-0">
            {startAt + index}
          </span>
          <p className="my-0 mx-auto max-w-61.25 text-sm leading-normal max-md:max-w-none max-md:text-[15px]">
            {item}
          </p>
        </article>
      ))}
    </div>
  );
}

export default function FeaturesSection() {
  const { features } = homePageData;
  return (
    <section
      className="relative flex flex-col gap-11 px-6 pb-22 pt-23 max-md:gap-6.5 max-md:px-5 max-md:pb-15.5 max-md:pt-18.5"
      id="features"
    >
      <SectionHeading
        first={features.heading[0]}
        accent={features.heading[1]}
        note={features.note}
      />
      <div className="mx-auto grid w-full max-w-280 grid-cols-[1fr_1.1fr_1fr] items-center gap-7 max-md:grid-cols-2 max-md:gap-x-3.5 max-md:gap-y-6">
        <div className="relative col-start-2 row-start-1 row-span-3 grid min-h-125 place-items-center bg-none max-md:col-span-2 max-md:col-start-1 max-md:row-auto max-md:row-span-1 max-md:min-h-87.5">
          <img
            className="block h-125 w-[min(100%,390px)] object-contain object-bottom max-md:h-87.5"
            src={featureSignpostImage}
            alt="Herbert beside a signpost pointing to work and tourism in Germany"
          />
        </div>
        <div className="max-md:contents md:col-start-1 md:row-span-3">
          <FeatureList items={features.items.slice(0, 3)} />
        </div>
        <div className="max-md:contents md:col-start-3 md:row-span-3">
          <FeatureList items={features.items.slice(3)} startAt={4} />
        </div>
      </div>
    </section>
  );
}
