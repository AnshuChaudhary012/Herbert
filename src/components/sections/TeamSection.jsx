import Button from "../common/Button";
import SectionHeading from "./SectionHeading";
import { homePageData } from "../../utility/helpers";
import teamMobileImage from "../../assets/images/figma/guide-left.png";
import teamGroupsImage from "../../assets/images/figma/team-groups.png";

export default function TeamSection() {
  const { team } = homePageData;
  return (
    <section className="team-section section-space" id="team">
      <div className="team-copy">
        <SectionHeading first={team.heading[0]} accent={team.heading[1]} />
        <p>{team.description}</p>
      </div>
      <div className="team-art">
        <picture className="team-art__picture">
          <source media="(max-width: 700px)" srcSet={teamMobileImage} />
          <img src={teamGroupsImage} alt="Graduates, a family and medical professionals in front of the Brandenburg Gate" />
        </picture>
      </div>
      <div className="team-details">
        <ul>{team.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
        <Button href="/sources">Learn more</Button>
      </div>
    </section>
  );
}
