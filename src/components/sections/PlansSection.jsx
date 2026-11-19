import Button from "../common/Button";
import SectionHeading from "./SectionHeading";
import { homePageData } from "../../utility/helpers";

function PlanCard({ plan, includedLabel }) {
  return (
    <article className="plan-card">
      <div className="plan-title">
        <h3>{plan.price}</h3>
        <span className={`plan-badge badge--${plan.name.toLowerCase()}`}>
          {plan.name}
        </span>
      </div>
      <p>{plan.text}</p>
      <h4>{includedLabel}</h4>
      <p className="message-count">
        <span>{"\u25cf"}</span> {plan.messages}
      </p>
      <Button href="/sources">Upgrade to {plan.name}</Button>
    </article>
  );
}

export default function PlansSection() {
  const { plans } = homePageData;
  return (
    <section className="plans-section section-space" id="plans">
      <SectionHeading
        first={plans.heading[0]}
        accent={plans.heading[1]}
        note={plans.note}
      />
      <div className="plans-grid">
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
