import { Link } from "react-router";
import Container from "./common/Container";
import logo from "../assets/images/logo.png";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "./common/SVG";

const currentYear = new Date().getFullYear();

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
      ["Frequently Asked Questions", "/#faq"],
      ["Sources", "/sources"],
      ["Visa guidance", "/#contact"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container className="footer-main">
        <div className="footer-brand">
          <Link
            to="/"
            className="site-logo footer-wordmark"
            aria-label="Herbert home"
          >
            <img src={logo} alt="Herbert — Your AI German Visa Guide" />
          </Link>
          <p className="footer-description">
            Explore German visa topics, helpful preparation resources, and links
            to immigration information.
          </p>
        </div>
        {groups.map((group) => (
          <div className="footer-links" key={group.title}>
            <h2>{group.title}</h2>
            {group.links.map(([label, href]) => (
              <a href={href} key={label}>
                {label}
              </a>
            ))}
          </div>
        ))}
        <div className="footer-links social-links">
          <h2>Follow Us</h2>
          <div className="social-icons" aria-label="Social media">
            <span role="img" aria-label="Facebook">
              <FacebookIcon />
            </span>
            <span role="img" aria-label="Instagram">
              <InstagramIcon />
            </span>
            <span role="img" aria-label="LinkedIn">
              <LinkedInIcon />
            </span>
          </div>
        </div>
      </Container>
      <div className="copyright">©{currentYear} Herbert</div>
    </footer>
  );
}
