import { useState } from "react";
import { NavLink } from "react-router";
import Button from "./common/Button";
import SiteLogo from "./common/SiteLogo";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="relative z-20 h-[62px] bg-[#fffdfa]/96 min-[701px]:h-[82px]">
      <nav className="mx-auto flex h-full w-[calc(100%-28px)] max-w-[1328px] items-center justify-between min-[701px]:w-[calc(100%-48px)]" aria-label="Main navigation">
        <SiteLogo className="header-wordmark" onClick={() => setMenuOpen(false)} />
        <button
          className="menu-toggle hidden"
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
          className={`nav-links flex items-center gap-8 text-sm ${menuOpen ? "is-open" : ""}`}
        >
          <SiteLogo className="mobile-menu-logo" onClick={() => setMenuOpen(false)} />
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
            href="/#features"
            onClick={() => setMenuOpen(false)}
          >
            Explore Herbert’s guidance
          </Button>
        </div>
      </nav>
    </header>
  );
}
