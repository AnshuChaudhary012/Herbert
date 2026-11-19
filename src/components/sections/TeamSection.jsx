import Button from "../common/Button";
import SectionHeading from "./SectionHeading";
import { homePageData } from "../../utility/helpers";
import teamMobileImage from "../../assets/images/figma/guide-left.png";
import teamGroupsImage from "../../assets/images/figma/team-groups.png";

export default function TeamSection() {
  const { team } = homePageData;
  return (
    <section
      className="mx-auto grid min-h-140 max-w-307.5 grid-cols-[0.9fr_1.3fr] grid-rows-[auto_auto] gap-x-15 gap-y-0 px-0 py-22 max-md:grid-cols-1 max-md:grid-rows-[auto_auto_auto] max-md:gap-5 max-md:px-6"
      id="team"
    >
      <div className="col-start-1 row-start-1 max-md:col-start-1 max-md:row-start-1">
        <SectionHeading
          first={team.heading[0]}
          accent={team.heading[1]}
          align="left"
          headingClassName="max-md:text-[26px]"
        />
        <p className="text-[13px] leading-[1.65] text-[#6e6762] max-md:text-sm">
          {team.description}
        </p>
      </div>
      <div className="relative col-start-2 row-span-2 row-start-1 grid min-h-115 place-items-center overflow-hidden bg-transparent max-md:col-start-1 max-md:row-span-1 max-md:row-start-2 max-md:min-h-75">
        <img
          className="hidden h-full max-h-125 w-full object-contain md:block"
          src={teamGroupsImage}
          alt="Graduates, a family and medical professionals in front of the Brandenburg Gate"
        />
        <img
          className="block h-75 max-h-80 w-[78%] object-contain md:hidden"
          src={teamMobileImage}
          alt="Herbert waving hello"
        />
      </div>
      <div className="col-start-1 row-start-2 self-start max-md:col-start-1 max-md:row-start-3">
        <ul className="my-3 mb-5.5 pl-4.75 max-md:mt-4">
          {team.details.map((detail) => (
            <li
              className="text-[13px] leading-[1.65] text-[#6e6762] max-md:text-sm"
              key={detail}
            >
              {detail}
            </li>
          ))}
        </ul>
        <Button href="/sources">Learn more</Button>
      </div>
    </section>
  );
}
