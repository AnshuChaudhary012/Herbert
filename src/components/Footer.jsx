import SiteLogo from "./common/SiteLogo";
import Container from "./common/Container";

const groups = [
  { title: "Quick Links", links: [["Services", "/#features"], ["About Us", "/#team"], ["Features", "/#features"], ["Plans", "/#plans"]] },
  { title: "Support", links: [["Help Center", "/#faq"], ["Terms & Conditions", "#"], ["Privacy Policy", "#"]] },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container className="footer-main">
        <div className="footer-brand"><SiteLogo className="footer-wordmark" /><p className="footer-description">Lorem ipsum dolor sit amet consectetur. Fusce tortor etiam vitae velit mi sed mattis tempor tristique. Purus sed phasellus metus lectus auctor.</p></div>
        {groups.map((group) => <div className="footer-links" key={group.title}><h2>{group.title}</h2>{group.links.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</div>)}
        <div className="footer-links social-links"><h2>Follow Us</h2><div className="social-icons" aria-label="Social media"><span aria-hidden="true">f</span><span aria-hidden="true">◎</span><span aria-hidden="true">in</span></div></div>
      </Container>
      <div className="copyright">Copyright © 2024 Herbert, All rights reserved</div>
    </footer>
  );
}
