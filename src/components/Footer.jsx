import SiteLogo from "./common/SiteLogo";
import Container from "./common/Container";

const currentYear = new Date().getFullYear();

const groups = [
  { title: "Quick Links", links: [["Services", "/#features"], ["About Us", "/#team"], ["Features", "/#features"], ["Plans", "/#plans"]] },
  { title: "Support", links: [["Frequently Asked Questions", "/#faq"], ["Sources", "/sources"], ["Visa guidance", "/#contact"]] },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container className="footer-main">
        <div className="footer-brand"><SiteLogo className="footer-wordmark" /><p className="footer-description">Explore German visa topics, helpful preparation resources, and links to immigration information.</p></div>
        {groups.map((group) => <div className="footer-links" key={group.title}><h2>{group.title}</h2>{group.links.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</div>)}
        <div className="footer-links social-links"><h2>Explore</h2><a href="/sources">German immigration sources</a><a href="/#features">Herbert guidance</a></div>
      </Container>
      <div className="copyright">© {currentYear} Herbert</div>
    </footer>
  );
}
