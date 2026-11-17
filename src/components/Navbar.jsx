import { useState } from "react";
import { NavLink } from "react-router";
import Button from "./common/Button";
import SiteLogo from "./common/SiteLogo";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="nav-wrap" aria-label="Main navigation">
        <SiteLogo className="header-wordmark" />
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <span className="menu-close-icon" aria-hidden="true">
              ×
            </span>
          ) : (
            <span className="menu-list-icon" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          )}
        </button>
        <div
          id="primary-navigation"
          className={`nav-links ${menuOpen ? "is-open" : ""}`}
        >
          <SiteLogo className="mobile-menu-logo" />
          <NavLink to="/" end onClick={() => setMenuOpen(false)}>
            Herbert
          </NavLink>
          <NavLink to="/sources" onClick={() => setMenuOpen(false)}>
            Sources
          </NavLink>
          <a href="/#team" onClick={() => setMenuOpen(false)}>
            Our Vision
          </a>
          <Button
            className="mobile-nav-cta"
            href="/#top"
            onClick={() => setMenuOpen(false)}
          >
            Start your conversation with Herbert
          </Button>
        </div>
      </nav>
    </header>
  );
}
