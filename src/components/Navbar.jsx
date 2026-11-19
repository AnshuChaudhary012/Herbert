import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import Button from "./common/Button";
import logo from "../assets/images/logo.png";

const desktopLinkClasses = ({ isActive }) =>
  `border-b py-[9px] text-center md:text-left ${
    isActive
      ? "border-[#27211e] text-[#27211e]"
      : "border-transparent text-[#656565] hover:border-[#27211e] hover:text-[#333]"
  } max-md:grid max-md:min-h-[72px] max-md:place-items-center max-md:py-4 max-md:text-sm`;

function MenuIcon({ open }) {
  return (
    <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      {open ? (
        <>
          <circle cx="12" cy="12" r="10" />
          <path d="m9 9 6 6m0-6-6 6" />
        </>
      ) : (
        <>
          <circle cx="5" cy="6" r="1.25" fill="currentColor" stroke="none" />
          <circle cx="5" cy="12" r="1.25" fill="currentColor" stroke="none" />
          <circle cx="5" cy="18" r="1.25" fill="currentColor" stroke="none" />
          <path d="M10 6h11M10 12h11M10 18h11" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") closeMenu();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <header className="relative z-20 h-16 bg-paper/96 md:h-20">
      <nav
        className="mx-auto flex h-full w-[calc(100%-48px)] max-w-[1328px] items-center justify-between"
        aria-label="Main navigation"
      >
        <Link to="/" onClick={closeMenu} className="inline-flex items-center" aria-label="Herbert home">
          <img
            className="block h-auto max-h-[36px] w-auto max-w-[150px] object-contain md:max-h-[54px] md:max-w-[225px]"
            src={logo}
            alt="Herbert, your AI German visa guide"
          />
        </Link>
        <button
          className="grid size-10 place-items-center border-0 bg-transparent p-0 text-ink focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ink md:hidden"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <MenuIcon open={menuOpen} />
        </button>
        <div
          id="primary-navigation"
          className={`${menuOpen ? "fixed inset-0 z-[21] flex flex-col items-stretch justify-start gap-0 overflow-y-auto overscroll-contain bg-paper px-[26px] pb-[30px] pt-[90px]" : "hidden"} md:static md:z-auto md:flex md:flex-row md:items-center md:gap-8 md:overflow-visible md:bg-transparent md:p-0 md:text-sm`}
          role="dialog"
          aria-modal={menuOpen ? "true" : undefined}
          aria-label="Mobile navigation"
        >
          <Link
            to="/"
            onClick={closeMenu}
            className="absolute left-6 top-[18px] inline-flex items-center md:hidden"
            aria-label="Herbert home"
          >
            <img className="block h-auto max-h-[36px] w-auto max-w-[150px] object-contain" src={logo} alt="Herbert, your AI German visa guide" />
          </Link>
          <button
            className="absolute right-6 top-[18px] grid size-10 place-items-center border-0 bg-transparent p-0 text-ink focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ink md:hidden"
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <MenuIcon open />
          </button>
          <NavLink to="/" end onClick={closeMenu} className={desktopLinkClasses}>
            Herbert
          </NavLink>
          <NavLink to="/sources" onClick={closeMenu} className={desktopLinkClasses}>
            Sources
          </NavLink>
          <a
            className="border-b border-transparent py-[9px] text-center text-[#656565] hover:border-[#27211e] hover:text-[#333] md:text-left max-md:grid max-md:min-h-[72px] max-md:place-items-center max-md:py-4 max-md:text-sm"
            href="/#team"
            onClick={closeMenu}
          >
            Our Vision
          </a>
          <Button
            className="mt-6 flex min-h-[45px] px-4 py-3 text-center text-sm leading-[1.35] md:hidden"
            href="/#contact"
            onClick={closeMenu}
          >
            Start your conversation with Herbert
          </Button>
        </div>
      </nav>
    </header>
  );
}
