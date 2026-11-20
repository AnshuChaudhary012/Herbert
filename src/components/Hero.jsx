import Button from "./common/Button";
import { homePageData } from "../utility/helpers";
import guideLeftImage from "../assets/images/figma/guide-left.png";
import guideRightImage from "../assets/images/figma/guide-right.png";
import SVG from "./common/SVG";

function ServiceCard({ title, description, icon, featured }) {
  return (
    <article
      className={`flex min-h-37 flex-col items-center gap-2.5 rounded-[7px] border border-line bg-white/95 px-5 pb-4.5 pt-6 text-center shadow-[0_5px_22px_rgba(37,25,16,0.06)] max-md:min-h-37 max-md:gap-3.5 max-md:px-2.5 max-md:py-5 ${featured ? "md:-translate-y-3.25" : ""}`}
    >
      <span className="grid size-8.75 place-items-center rounded-full bg-tag text-[18px] font-bold text-brand max-md:size-12">
        <SVG name={icon} />
      </span>
      <div className="flex flex-col items-center gap-1.75">
        <h2 className="m-0 text-sm font-semibold max-md:text-[15px]">
          {title}
        </h2>
        <p className="m-0 text-xs text-[#8b8580] max-md:text-[13px]">
          {description}
        </p>
      </div>
    </article>
  );
}

export default function Hero() {
  const { hero } = homePageData;
  return (
    <section
      className="relative grid min-h-193.75 grid-cols-[1.15fr_0.85fr] items-start overflow-hidden bg-paper px-6 pt-0 max-md:min-h-310.5 max-md:px-4.5 max-md:pb-6 max-md:pt-16 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)_minmax(0,1fr)]"
      id="top"
      aria-labelledby="hero-title"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.65] [background:repeating-linear-gradient(28deg,transparent_0_57px,rgba(255,145,72,0.12)_58px_59px,transparent_60px_90px)] mask-[linear-gradient(to_bottom,#000_0%,transparent_70%)]"
        aria-hidden="true"
      />
      <div className="z-10 col-span-2 row-start-1 flex w-full max-w-202.5 flex-col items-center gap-6.25 justify-self-center pt-1.5 text-center max-md:gap-7.25 md:col-span-3 md:pt-31.75">
        <div className="flex flex-col gap-3.5">
          <h1
            id="hero-title"
            className="mx-auto max-w-202.5 text-[clamp(40px,4.45vw,64px)] font-bold leading-[1.08] tracking-[-0.04em] max-md:max-w-92.5 max-md:text-[clamp(28px,7.3vw,36px)] max-md:leading-[1.12]"
          >
            {hero.titleStart}{" "}
            <span className="text-accent">{hero.titleAccent}</span>{" "}
            {hero.titleEnd}
          </h1>
          <p className="mx-auto my-0 max-w-142.5 text-sm leading-[1.7] text-muted max-md:max-w-87.5 max-md:text-sm max-md:leading-[1.55]">
            {hero.description}
          </p>
        </div>
        <Button
          className="max-md:min-h-11 max-md:w-full max-md:max-w-73.75 max-md:px-3.5 max-md:text-sm"
          href="#features"
        >
          {hero.action}
        </Button>
      </div>
      <img
        className="col-start-1 row-start-2 h-110 w-full justify-self-center object-contain object-bottom max-md:rounded-[110px_110px_16px_16px] md:col-start-1 md:row-start-1 md:h-[clamp(340px,45.28vw,652px)] md:w-[clamp(200px,18vw,260px)] md:self-end"
        src={guideLeftImage}
        alt="Herbert waving hello"
      />
      <img
        className="col-start-2 row-start-2 h-87.5 w-full justify-self-center -scale-x-100 object-contain object-bottom max-md:rounded-[110px_110px_16px_16px] md:col-start-3 md:row-start-1 md:h-[clamp(340px,45.28vw,652px)] md:w-[clamp(300px,25vw,360px)] md:self-end"
        src={guideRightImage}
        alt="Herbert, your German immigration guide"
      />
      <div className="col-span-2 row-start-3 mx-auto grid w-[calc(100%-10px)] grid-cols-1 gap-3 md:col-span-3 md:row-start-2 md:w-full md:max-w-285 md:grid-cols-3 md:gap-6">
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
