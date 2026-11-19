import { Link } from "react-router";
import Container from "./common/Container";
import logo from "../assets/images/logo.png";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "./common/SVG";

const groups = [
  {
    title: "Quick Links",
    links: [
      ["Services", "/#features"],
      ["About Us", "/#team"],
      ["Features", "/#features"],
      ["Plans", "/#plans"],
    ],
  },
  {
    title: "Support",
    links: [
      ["Help Center", "/#faq"],
      ["Terms & Conditions", "/sources"],
      ["Privacy Policy", "/sources"],
    ],
  },
];

function SocialIcon({ label, children }) {
  return (
    <span className="grid size-8 place-items-center rounded-full bg-tag text-brand max-md:size-[38px]" role="img" aria-label={label}>
      {children}
    </span>
  );
}

function FooterLinks({ title, links }) {
  return (
    <div>
      <h2 className="mb-[18px] mt-1 text-[13px] font-semibold max-md:mb-[10px] max-md:text-sm">{title}</h2>
      {links.map(([label, href]) => (
        <a className="mb-[10px] block text-xs text-[#605953] hover:text-[#e56d3b] max-md:text-[13px]" href={href} key={label}>
          {label}
        </a>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-peach">
      <Container className="grid grid-cols-[2fr_1fr_1.15fr_1fr] gap-[42px] px-6 pb-9 pt-[45px] max-md:grid-cols-2 max-md:gap-x-[15px] max-md:gap-y-[26px] max-md:pb-[25px] max-md:pt-[34px]">
        <div className="max-md:col-span-2">
          <Link to="/" className="inline-flex items-center" aria-label="Herbert home">
            <img className="block h-auto max-h-16 w-auto max-w-[208px] object-contain max-md:max-h-[52px] max-md:max-w-[290px]" src={logo} alt="Herbert, your AI German visa guide" />
          </Link>
          <p className="mb-[5px] mt-[14px] max-w-[330px] text-xs leading-[1.6] text-[#5e5751]">
            Lorem ipsum dolor sit amet consectetur. Fusce tortor etiam vitae
            velit mi sed mattis tempor tristique. Purus sed phasellus metus
            lectus auctor.
          </p>
        </div>
        {groups.map((group) => (
          <FooterLinks key={group.title} {...group} />
        ))}
        <div className="max-md:col-span-2">
          <h2 className="mb-[18px] mt-1 text-[13px] font-semibold max-md:mb-[10px] max-md:text-sm">Follow Us</h2>
          <div className="flex gap-[10px]" aria-label="Social media">
            <SocialIcon label="Facebook"><FacebookIcon /></SocialIcon>
            <SocialIcon label="Instagram"><InstagramIcon /></SocialIcon>
            <SocialIcon label="LinkedIn"><LinkedInIcon /></SocialIcon>
          </div>
        </div>
      </Container>
      <div className="border-t border-[#eee2d8] px-3 py-[14px] text-center text-[11px] text-[#6d655e] max-md:text-xs">
        Copyright &copy; 2024 herbert, All rights reserved
      </div>
    </footer>
  );
}
