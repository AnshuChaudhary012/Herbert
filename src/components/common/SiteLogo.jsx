import { Link } from "react-router";
import logo from "../../assets/images/logo.png";

export default function SiteLogo({ className = "" }) {
  return (
    <Link to="/" className={`site-logo ${className}`} aria-label="Herbert home">
      <img src={logo} alt="Herbert" />
    </Link>
  );
}
