import Button from "./common/Button";
import { homePageData } from "../utility/helpers";
import guideBelowMdImage from "../assets/images/figma/guide-below-md.png";

function ServiceCard({ title, description, index, featured }) {
  const gradientId = `service-icon-gradient-${index}`;

  return (
    <article
      className={`flex min-h-37 flex-col items-center gap-2.5 rounded-[7px] border border-line bg-white/95 px-5 pb-4.5 pt-6 text-center shadow-[0_5px_22px_rgba(37,25,16,0.06)] max-md:min-h-37 max-md:gap-3.5 max-md:px-2.5 max-md:py-5 ${featured ? "md:-translate-y-3.25" : ""}`}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
          fill={`url(#${gradientId})`}
          fillOpacity="0.15"
        />
        <path
          d="M34 20.6666V19C34 16.7 32.1333 14.8333 29.8333 14.8333H18.1667C15.8667 14.8333 14 16.7 14 19V20.6666H34ZM30.25 16.5C30.9417 16.5 31.5 17.0583 31.5 17.75C31.5 18.4416 30.9417 19 30.25 19C29.5583 19 29 18.4416 29 17.75C29 17.0583 29.5583 16.5 30.25 16.5ZM26.9167 16.5C27.6083 16.5 28.1667 17.0583 28.1667 17.75C28.1667 18.4416 27.6083 19 26.9167 19C26.225 19 25.6667 18.4416 25.6667 17.75C25.6667 17.0583 26.225 16.5 26.9167 16.5ZM23.5833 16.5C24.275 16.5 24.8333 17.0583 24.8333 17.75C24.8333 18.4416 24.275 19 23.5833 19C22.8917 19 22.3333 18.4416 22.3333 17.75C22.3333 17.0583 22.8917 16.5 23.5833 16.5ZM34 22.3333V29C34 31.3 32.1333 33.1666 29.8333 33.1666H18.1667C15.8667 33.1666 14 31.3 14 29V22.3333H34Z"
          fill="#FF9748"
        />
        <defs>
          <linearGradient
            id={gradientId}
            x1="72.7396"
            y1="-1.5"
            x2="-9.26158"
            y2="43.7826"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF4C24" />
            <stop offset="1" stopColor="#FFE36C" />
          </linearGradient>
        </defs>
      </svg>
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
      className="relative grid min-h-125 content-start items-start overflow-hidden bg-paper px-6 pb-8 pt-12 max-md:min-h-125 max-md:px-4.5 max-md:pb-6 max-md:pt-12"
      id="top"
      aria-labelledby="hero-title"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.65] [background:repeating-linear-gradient(28deg,transparent_0_57px,rgba(255,145,72,0.12)_58px_59px,transparent_60px_90px)] mask-[linear-gradient(to_bottom,#000_0%,transparent_70%)]"
        aria-hidden="true"
      />
      <div className="z-10 flex w-full max-w-202.5 flex-col items-center gap-6.25 justify-self-center pt-0 text-center max-md:gap-7.25 md:pt-8">
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
        className="mt-19.5 mr-1.5 -ml-2.5 h-72.5 w-[calc(100%-44px)] justify-self-center object-contain object-bottom md:hidden"
        src={guideBelowMdImage}
        alt="Herbert waving hello"
      />

      <div className="mt-10.75 mx-auto grid w-[calc(100%-10px)] grid-cols-1 gap-3  md:w-full md:max-w-285 md:grid-cols-3 md:gap-6">
        {hero.services.map(([title, description], index) => (
          <ServiceCard
            key={title}
            title={title}
            description={description}
            index={index}
            featured={index === 1}
          />
        ))}
      </div>
    </section>
  );
}
