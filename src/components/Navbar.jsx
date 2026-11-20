import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import Button from "./common/Button";
import SVG from "./common/SVG";
import logo from "../assets/images/logo.png";

const desktopLinkClasses = ({ isActive }) =>
  `border-b py-[9px] text-center md:text-left ${
    isActive
      ? "border-[#27211e] text-[#27211e]"
      : "border-transparent text-[#656565] hover:border-[#27211e] hover:text-[#333]"
  } max-md:grid max-md:min-h-[72px] max-md:place-items-center max-md:py-4 max-md:text-sm max-sm:font-lato max-sm:font-normal max-sm:leading-[1.5] max-sm:tracking-normal`;

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
        className="mx-auto flex h-full w-[calc(100%-48px)] max-w-332 items-center justify-between"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          onClick={closeMenu}
          className="inline-flex items-center"
          aria-label="Herbert home"
        >
          <img
            className="block h-auto max-h-9 w-auto max-w-37.5 object-contain md:max-h-13.5 md:max-w-56.25"
            src={logo}
            alt="Herbert, your AI German visa guide"
          />
        </Link>
        <button
          className="relative left-1 grid size-10 place-items-center border-0 bg-transparent p-0 text-ink focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ink md:hidden"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <SVG name={menuOpen ? "close" : "menu"} />
        </button>
        <div
          id="primary-navigation"
          className={`${menuOpen ? "fixed inset-0 z-21 flex flex-col items-stretch justify-start gap-0 overflow-y-auto overscroll-contain bg-paper px-6 pb-7.5 pt-22.5" : "hidden"} md:static md:z-auto md:flex md:flex-row md:items-center md:gap-8 md:overflow-visible md:bg-transparent md:p-0 md:text-sm`}
          role="dialog"
          aria-modal={menuOpen ? "true" : undefined}
          aria-label="Mobile navigation"
        >
          <Link
            to="/"
            onClick={closeMenu}
            className="absolute left-6 top-3.5 inline-flex items-center md:hidden"
            aria-label="Herbert home"
          >
            <img
              className="block h-auto max-h-9 w-auto max-w-37.5 object-contain"
              src={logo}
              alt="Herbert, your AI German visa guide"
            />
          </Link>
          <button
            className="absolute right-5 top-3 grid size-10 place-items-center border-0 bg-transparent p-0 text-ink focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ink md:hidden"
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <SVG name="close" />
          </button>
          <NavLink
            to="/"
            end
            onClick={closeMenu}
            className={desktopLinkClasses}
          >
            Herbert
          </NavLink>
          <NavLink
            to="/sources"
            onClick={closeMenu}
            className={desktopLinkClasses}
          >
            Sources
          </NavLink>
          <a
            className="border-b border-transparent py-2.25 text-center text-[#656565] hover:border-[#27211e] hover:text-[#333] md:text-left max-md:grid max-md:min-h-18 max-md:place-items-center max-md:py-4 max-md:text-sm max-sm:font-lato max-sm:font-normal max-sm:leading-normal max-sm:tracking-normal"
            href="/#team"
            onClick={closeMenu}
          >
            Our Vision
          </a>
          <Button
            className="mt-6 flex min-h-11.25 px-4 py-3 text-center text-sm leading-[1.35] md:hidden"
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
