import Button from "./common/Button";
import { homePageData } from "../utility/helpers";
import guideLeftImage from "../assets/images/figma/guide-left.png";
import guideRightImage from "../assets/images/figma/guide-right.png";
import SVG from "./common/SVG";

function ServiceCard({ title, description, icon, featured }) {
  return (
    <article
      className={`min-h-37 rounded-[7px] border border-line bg-white/95 px-5 pb-4.5 pt-6 text-center shadow-[0_5px_22px_rgba(37,25,16,0.06)] max-md:min-h-37 max-md:px-2.5 max-md:py-5 ${featured ? "md:-translate-y-3.25" : ""}`}
    >
      <span className="mx-auto mb-2.5 grid size-8.75 place-items-center rounded-full bg-tag text-[18px] font-bold text-brand max-md:mb-3.5 max-md:size-12">
        <SVG name={icon} />
      </span>
      <h2 className="mb-1.75 mt-0 text-sm font-semibold max-md:text-[15px]">
        {title}
      </h2>
      <p className="m-0 text-xs text-[#8b8580] max-md:text-[13px]">
        {description}
      </p>
    </article>
  );
}

export default function Hero() {
  const { hero } = homePageData;
  return (
    <section
      className="relative flex min-h-193.75 flex-col items-center overflow-hidden bg-paper px-6 pt-24 max-md:min-h-310.5 max-md:px-4.5 max-md:pt-16 lg:min-h-210 xl:min-h-232.5"
      id="top"
      aria-labelledby="hero-title"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.65] [background:repeating-linear-gradient(28deg,transparent_0_57px,rgba(255,145,72,0.12)_58px_59px,transparent_60px_90px)] mask-[linear-gradient(to_bottom,#000_0%,transparent_70%)]"
        aria-hidden="true"
      />
      <div className="relative z-10 w-full max-w-202.5 text-center">
        <h1
          id="hero-title"
          className="mx-auto mb-3.5 mt-7.75 max-w-202.5 text-[clamp(40px,4.45vw,64px)] font-bold leading-[1.08] tracking-[-0.04em] max-md:mb-3.5 max-md:mt-1.5 max-md:max-w-92.5 max-md:text-[clamp(28px,7.3vw,36px)] max-md:leading-[1.12]"
        >
          {hero.titleStart}{" "}
          <span className="text-accent">{hero.titleAccent}</span>{" "}
          {hero.titleEnd}
        </h1>
        <p className="mx-auto mb-6.25 mt-0 max-w-142.5 text-sm leading-[1.7] text-muted max-md:mb-7.25 max-md:max-w-87.5 max-md:text-sm max-md:leading-[1.55]">
          {hero.description}
        </p>
        <Button
          className="max-md:min-h-11 max-md:w-full max-md:max-w-73.75 max-md:px-3.5 max-md:text-sm"
          href="#features"
        >
          {hero.action}
        </Button>
      </div>
      <img
        className="absolute left-[max(6%,calc((100%-1260px)/2))] -top-12 z-0 h-[clamp(520px,49vw,700px)] w-[clamp(200px,18vw,260px)] object-contain object-bottom max-md:left-[5%] max-md:top-63.5 max-md:h-110 max-md:w-[52%] max-md:rounded-[110px_110px_16px_16px] md:max-lg:left-[5%] md:max-lg:top-71.25 md:max-lg:h-92.5 md:max-lg:w-42.5"
        src={guideLeftImage}
        alt="Herbert waving hello"
      />
      <img
        className="absolute right-[max(4%,calc((100%-1320px)/2))] -top-12 z-0 h-[clamp(520px,49vw,700px)] w-[clamp(300px,25vw,360px)] -scale-x-100 object-contain object-bottom max-md:right-[10%] max-md:top-62.5 max-md:h-87.5 max-md:w-[36%] max-md:rounded-[110px_110px_16px_16px] md:max-lg:right-[5%] md:max-lg:top-71.25 md:max-lg:h-92.5 md:max-lg:w-42.5"
        src={guideRightImage}
        alt="Herbert, your German immigration guide"
      />
      <div className="absolute bottom-0 left-1/2 z-10 grid w-[min(100%-48px,1140px)] -translate-x-1/2 grid-cols-3 gap-6 max-md:bottom-6 max-md:w-[calc(100%-46px)] max-md:grid-cols-1 max-md:gap-3">
        {hero.services.map(([title, description, icon], index) => (
          <ServiceCard
            key={title}
            title={title}
            description={description}
            icon={icon}
            featured={index === 1}
          />
        ))}
      </div>
    </section>
  );
}
