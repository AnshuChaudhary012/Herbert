import Button from "../components/common/Button";
import CtaPanel from "../components/sections/CtaPanel";
import SectionHeading from "../components/sections/SectionHeading";
import sourcesGateGroupsImage from "../assets/images/figma/sources-gate-groups.png";
import sourcesEmploymentSignpostImage from "../assets/images/figma/sources-employment-signpost.png";
import SVG from "../components/common/SVG";

const regulations = [
  "Work permit requirements",
  "Job-seeking visas",
  "Self-employment regulations",
  "Specific provisions for various professional groups",
];

const visaTopics = [
  { title: "Visa application processes", icon: "visa-process" },
  { title: "Required documentation", icon: "visa-documents" },
  { title: "Visa fees and processing times", icon: "visa-time" },
];

function GuideIllustration() {
  return (
    <div className="relative grid min-h-80 place-items-center max-md:min-h-72.5">
      <img
        className="h-90 w-[min(75%,300px)] object-contain object-bottom max-md:h-76.25 max-md:w-55"
        src={sourcesGateGroupsImage}
        alt="People gathered by the Brandenburg Gate"
      />
    </div>
  );
}

function RegulationList({ items, startAt }) {
  return (
    <ul className="m-0 grid list-none gap-9 p-0 max-md:gap-5.5">
      {items.map((item, index) => (
        <li className="flex flex-col gap-3 text-[13px] leading-normal max-md:gap-2.5 max-md:text-sm" key={item}>
          <b className="mx-auto grid size-7.5 place-items-center rounded-full bg-brand text-[15px] font-bold text-white max-md:mx-0 max-md:size-8.5">
            {startAt + index}
          </b>
          {item}
        </li>
      ))}
    </ul>
  );
}

function VisaTopicCard({ title, icon }) {
  return (
    <article className="grid min-h-32.5 content-center justify-items-center gap-2.5 rounded-md bg-white p-4.5 text-center shadow-[0_5px_20px_rgba(37,25,16,0.04)] max-md:min-h-30 max-md:p-3.5">
      <span className="grid size-8.75 place-items-center rounded-full bg-tag text-brand">
        <SVG name={icon} />
      </span>
      <p className="m-0 max-w-37.5 text-[13px] max-md:text-[13px]">{title}</p>
    </article>
  );
}

function SourceSectionHeading({ children, note }) {
  return (
    <SectionHeading
      align="left"
      headingClassName="text-[32px] max-md:text-[25px]"
      noteClassName="mb-[18px] max-md:mb-3"
      note={note}
    >
      {children}
    </SectionHeading>
  );
}

export default function Sources() {
  return (
    <main>
      <section className="relative flex min-h-91.25 flex-col items-center gap-6.25 overflow-hidden px-6 pb-0 pt-19.25 text-center max-md:min-h-105 max-md:gap-6.5 max-md:px-6 max-md:pb-12.5 max-md:pt-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.65] [background:repeating-linear-gradient(28deg,transparent_0_57px,rgba(255,145,72,0.12)_58px_59px,transparent_60px_90px)] mask-[linear-gradient(to_bottom,#000_0%,transparent_70%)]"
          aria-hidden="true"
        />
        <div className="relative z-10 flex flex-col items-center gap-3 max-md:gap-3.75">
          <h1 className="mx-auto max-w-185 text-[clamp(36px,4vw,50px)] font-bold leading-[1.08] tracking-[-0.04em] max-md:text-[clamp(29px,8vw,36px)] max-md:leading-[1.15]">
            The Foundations of{" "}
            <span className="text-accent">
              German
              <br />
              Immigration
            </span>{" "}
            Expertise
          </h1>
          <p className="my-0 mx-auto max-w-170 text-sm leading-[1.7] text-muted max-md:leading-[1.55]">
            Herbert, our AI chatbot, is built on a comprehensive understanding
            of German immigration law. To ensure accuracy and reliability,
            Herbert&apos;s knowledge base is derived from the following
            authoritative sources:
          </p>
        </div>
        <Button className="max-md:min-h-11 max-md:text-[13px]" href="#contact">
          Contact Us
        </Button>
      </section>

      <section
        className="mx-auto grid min-h-115 max-w-310 grid-cols-2 items-center gap-13.5 px-6 py-22 max-md:min-h-0 max-md:grid-cols-1 max-md:gap-5 max-md:px-6.5 max-md:py-13.5"
        id="residence"
      >
        <div className="col-start-1 row-start-1 max-md:col-start-1 max-md:row-auto">
          <SourceSectionHeading note="The Aufenthaltsgesetz is the cornerstone of German immigration law. This act governs:">
            Residence <span className="text-accent">Act</span>
          </SourceSectionHeading>
        </div>
        <div className="col-start-2 row-span-2 row-start-1 max-md:col-start-1 max-md:row-auto">
          <GuideIllustration />
        </div>
        <div className="col-start-1 row-start-2 flex flex-col gap-4.5 text-sm leading-[1.65] text-copy max-md:col-start-1 max-md:row-auto">
          <ul className="m-0 list-disc pl-5">
            <li>Entry into Germany</li>
            <li>Residence permits</li>
            <li>Employment regulations for foreigners</li>
            <li>Integration measures</li>
          </ul>
          <p className="m-0">
            Herbert utilizes this act to provide precise information on legal
            residence requirements and pathways to living in Germany.
          </p>
        </div>
      </section>

      <section className="grid min-h-115 grid-cols-2 items-center gap-13.5 bg-peach px-[max(24px,calc((100%-1240px)/2))] py-22 max-md:min-h-0 max-md:grid-cols-1 max-md:gap-5 max-md:px-6.5 max-md:py-13.5">
        <div className="order-1 max-md:order-2">
          <SourceSectionHeading note="As part of the Schengen Area, Germany adheres to this code for border control. Herbert's knowledge of the Schengener Grenzkodex covers:">
            Schengen Borders <span className="text-accent">Code</span>
          </SourceSectionHeading>
          <ul className="list-disc pl-5 text-[13px] leading-[1.65] text-copy max-md:text-sm">
            <li>Short-term stay regulations</li>
            <li>Entry requirements for the Schengen Area</li>
            <li>Border crossing procedures</li>
          </ul>
        </div>
        <div className="order-0 grid min-h-80 place-items-center overflow-hidden rounded-none bg-transparent max-md:min-h-72.5">
          <img
            className="block h-full min-h-90 w-full object-contain max-md:min-h-70"
            src={sourcesGateGroupsImage}
            alt="Graduates, a family and medical professionals outside the Brandenburg Gate"
          />
        </div>
      </section>

      <section className="flex flex-col items-center gap-10.5 bg-paper px-6 pb-22 pt-22 text-center max-md:gap-7 max-md:px-5 max-md:pb-13.75 max-md:pt-14.5">
        <div className="mx-auto max-w-190">
          <SectionHeading
            note="This regulation details the conditions under which foreign nationals can work in Germany. Herbert's training in the Beschäftigungsverordnung allows for accurate guidance on:"
            noteClassName="mb-0"
          >
            Employment <span className="text-accent">Regulation</span>
          </SectionHeading>
        </div>
        <div className="grid w-full max-w-262.5 grid-cols-[1fr_1.2fr_1fr] items-center gap-6.25 max-md:grid-cols-2 max-md:gap-x-3 max-md:gap-y-5">
          <RegulationList items={regulations.slice(0, 2)} startAt={1} />
          <div className="relative col-start-2 row-start-1 grid min-h-70 place-items-center overflow-hidden max-md:col-span-2 max-md:col-start-1 max-md:row-start-1 max-md:min-h-85">
            <img
              className="h-107.5 w-[min(100%,330px)] object-contain object-bottom max-md:h-82.5"
              src={sourcesEmploymentSignpostImage}
              alt="Herbert beside a signpost pointing to work and tourism in Germany"
            />
          </div>
          <RegulationList items={regulations.slice(2)} startAt={3} />
        </div>
      </section>

      <section className="grid grid-cols-[1.1fr_1fr] items-center gap-17.5 bg-peach px-[max(24px,calc((100%-1140px)/2))] py-22 max-md:grid-cols-1 max-md:gap-8 max-md:px-6.5 max-md:py-11.5">
        <div className="grid grid-cols-2 gap-4.5 max-md:gap-3">
          {visaTopics.map((topic) => (
            <VisaTopicCard key={topic.title} {...topic} />
          ))}
        </div>
        <div>
          <SourceSectionHeading note="This code standardizes procedures for short-stay visas in the Schengen Area. Herbert's understanding of the Visa-Kodex ensures accurate information on:">
            Visa <span className="text-accent">Code</span>
          </SourceSectionHeading>
          <Button
            className="max-md:min-h-11 max-md:text-[13px]"
            href="#visa-handbook"
          >
            Learn more
          </Button>
        </div>
      </section>

      <section
        className="mx-auto grid min-h-115 max-w-310 grid-cols-2 items-center gap-13.5 px-6 py-22 max-md:min-h-0 max-md:grid-cols-1 max-md:gap-5 max-md:px-6.5 max-md:py-13.5"
        id="visa-handbook"
      >
        <div>
          <SourceSectionHeading note="The Visumhandbuch is a comprehensive internal document used by the Federal Foreign Office and German embassies. Spanning approximately 1,000 pages, it provides detailed guidelines on visa issuance. Herbert's training on this resource offers:">
            Visa <span className="text-accent">Handbook</span>
          </SourceSectionHeading>
          <ul className="list-disc pl-5 text-[13px] leading-[1.65] text-copy max-md:text-sm">
            <li>In-depth insights into visa application assessment</li>
            <li>Clarification on complex cases and exceptions</li>
            <li>Nuanced interpretations of immigration laws and regulations</li>
          </ul>
        </div>
        <GuideIllustration />
      </section>

      <div className="mx-auto w-[calc(100%-52px)] max-w-285 pb-10 max-md:pb-8">
        <p className="m-0 rounded-[5px] border border-[#eee5de] p-4.25 text-xs leading-[1.6] text-[#6c645e] max-md:p-4.5 max-md:text-sm">
          By basing its knowledge on these official sources, Herbert provides
          you with accurate, up-to-date, &amp; reliable information on German
          immigration processes. Our commitment to using these authoritative
          resources ensures that you receive guidance aligned with current
          German immigration laws &amp; practices.
        </p>
      </div>
      <CtaPanel
        title={["Need Help in Your Visa?", "Ask Herbert Now!"]}
        description="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam."
        primaryAction="Start your conversation"
        primaryHref="/#features"
        secondaryAction="Learn More"
        secondaryHref="/"
      />
    </main>
  );
}
