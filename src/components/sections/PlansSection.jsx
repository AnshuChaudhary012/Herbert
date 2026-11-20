import Button from "../common/Button";
import SectionHeading from "./SectionHeading";
import { homePageData } from "../../utility/helpers";

function PlanCard({ plan, includedLabel }) {
  return (
    <article className="flex flex-col gap-4 px-2.5 max-md:gap-5.5 max-md:border-b max-md:border-[#e5ddd7] max-md:px-0 max-md:py-7 last:max-md:border-b-0">
      <div className="flex flex-col gap-4.25 max-md:gap-3.5">
        <div className="flex items-center justify-between">
          <h3 className="m-0 text-4xl font-bold tracking-[-0.04em] max-md:text-[28px]">
            {plan.price}
          </h3>
          <span
            className={`rounded-sm px-2.25 py-1.25 text-[11px] max-md:text-[13px] ${plan.name === "Standard" ? "bg-[#ffd766] text-[#27211d]" : plan.name === "Premium" ? "bg-[#ff553e] text-white" : "bg-black text-white"}`}
          >
            {plan.name}
          </span>
        </div>
        <p className="m-0 min-h-26.25 text-[13px] leading-[1.65] text-[#68615c] max-md:min-h-0 max-md:text-sm">
          {plan.text}
        </p>
      </div>
      <div className="flex flex-col gap-5 max-md:gap-6">
        <div className="flex flex-col gap-3 max-md:gap-3.5">
          <h4 className="m-0 text-xs max-md:text-sm">{includedLabel}</h4>
          <p className="m-0 text-xs text-[#57514b] max-md:text-sm">
            <span className="text-[#1a1a1a]">{"\u25cf"}</span> {plan.messages}
          </p>
        </div>
        <Button className="min-h-10.75 w-full max-md:min-h-11" href="/sources">
          Upgrade to {plan.name}
        </Button>
      </div>
    </article>
  );
}

export default function PlansSection() {
  const { plans } = homePageData;
  return (
    <section
      className="flex flex-col gap-11.75 bg-peach px-6 pb-22 pt-22 max-md:gap-8.5 max-md:px-5 max-md:pb-13.75 max-md:pt-16"
      id="plans"
    >
      <SectionHeading
        first={plans.heading[0]}
        accent={plans.heading[1]}
        note={plans.note}
      />
      <div className="mx-auto grid w-full max-w-285 grid-cols-3 gap-10 max-md:grid-cols-1 max-md:gap-0">
        {plans.items.map((plan) => (
          <PlanCard
            key={plan.name}
            plan={plan}
            includedLabel={plans.includedLabel}
          />
        ))}
      </div>
    </section>
  );
}
