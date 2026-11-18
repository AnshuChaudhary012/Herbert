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
        <div className="footer-links social-links">
          <h2>Follow Us</h2>
          <div className="social-icons" aria-label="Social media">
            <span role="img" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.4Z" fill="currentColor" /></svg>
            </span>
            <span role="img" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="17.5" cy="6.8" r="1" fill="currentColor" /></svg>
            </span>
            <span role="img" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.4 9.2H3.5V20h2.9V9.2ZM5 4a1.7 1.7 0 1 0 0 3.4A1.7 1.7 0 0 0 5 4Zm15 9.8c0-3.3-1.8-4.9-4.3-4.9-2 0-2.9 1.1-3.4 1.9V9.2H9.4V20h2.9v-5.3c0-1.4.3-2.7 2-2.7 1.6 0 1.6 1.5 1.6 2.8V20h2.9v-6.2Z" fill="currentColor" /></svg>
            </span>
          </div>
        </div>
      </Container>
      <div className="copyright">© {currentYear} Herbert</div>
    </footer>
  );
}
