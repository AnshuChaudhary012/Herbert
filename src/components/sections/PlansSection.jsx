import Button from "../common/Button";
import SectionHeading from "./SectionHeading";
import { homePageData } from "../../utility/helpers";

function PlanCard({ plan, includedLabel }) {
  return (
    <article className="px-2.5 max-md:border-b max-md:border-[#e5ddd7] max-md:px-0 max-md:py-7 last:max-md:border-b-0">
      <div className="mb-4.25 flex items-center justify-between max-md:mb-3.5">
        <h3 className="m-0 text-4xl font-bold tracking-[-0.04em] max-md:text-[28px]">
          {plan.price}
        </h3>
        <span
          className={`rounded-sm px-2.25 py-1.25 text-[11px] max-md:text-[13px] ${plan.name === "Standard" ? "bg-[#ffd766] text-[#27211d]" : plan.name === "Premium" ? "bg-[#ff553e] text-white" : "bg-black text-white"}`}
        >
          {plan.name}
        </span>
      </div>
      <p className="mb-4 mt-0 min-h-26.25 text-[13px] leading-[1.65] text-[#68615c] max-md:mb-5.5 max-md:min-h-0 max-md:text-sm">
        {plan.text}
      </p>
      <h4 className="mb-3 mt-0 text-xs max-md:mb-3.5 max-md:text-sm">
        {includedLabel}
      </h4>
      <p className="mb-5 mt-0 text-xs text-[#57514b] max-md:mb-6 max-md:text-sm">
        <span className="text-[#1a1a1a]">{"\u25cf"}</span> {plan.messages}
      </p>
      <Button className="min-h-10.75 w-full max-md:min-h-11" href="/sources">
        Upgrade to {plan.name}
      </Button>
    </article>
  );
}

export default function PlansSection() {
  const { plans } = homePageData;
  return (
    <section
      className="bg-peach px-6 py-22 max-md:px-5 max-md:pb-13.75 max-md:pt-16"
      id="plans"
    >
      <SectionHeading
        first={plans.heading[0]}
        accent={plans.heading[1]}
        note={plans.note}
      />
      <div className="mx-auto mt-11.75 grid max-w-285 grid-cols-3 gap-10 max-md:mt-8.5 max-md:grid-cols-1 max-md:gap-0">
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
