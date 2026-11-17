import { Link } from "react-router";

export default function SiteLogo({ className = "" }) {
  return (
    <Link to="/" className={`site-logo ${className}`.trim()} aria-label="Herbert home">
      <img src="/favicon.svg" alt="" />
      <span className="site-logo__copy">
        <span className="site-logo__name">Herbert</span>
        <span className="site-logo__tagline">Your AI German Visa Guide</span>
      </span>
    </Link>
  );
}
