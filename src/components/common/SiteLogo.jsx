import { Link } from "react-router";
import logo from "../../assets/images/logo.png";

export default function SiteLogo({ className = "", onClick }) {
  return (
    <Link to="/" onClick={onClick} className={`site-logo ${className}`} aria-label="Herbert home">
      <img src={logo} alt="Herbert — Your AI German Visa Guide" />
    </Link>
  );
}
