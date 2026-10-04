import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { FiMenu, FiX } from "react-icons/fi";
import { nav, navCta, site } from "../data/site";
import { asset } from "../utils/asset";
import "./Navbar.css";

// Top navigation. Menu items come from src/data/site.js.
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  // The mobile menu remembers the page it was opened on, so it closes itself on navigation.
  const [openedOn, setOpenedOn] = useState(null);
  const open = openedOn === pathname;
  const setOpen = (value) => setOpenedOn(value ? pathname : null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll while the mobile menu is open; close it with Escape.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpenedOn(null);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="container nav-bar">
        <Link to="/" className="brand" aria-label={`${site.name} — home`}>
          <img className="brand-logo" src={asset("images/omniwave-emblem.png")} alt="" width="34" height="34" />
          <span className="brand-name">{site.shortName}</span>
          <span className="brand-sub">Lab · {site.affiliationShort}</span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>

        <nav id="primary-nav" className={`nav${open ? " is-open" : ""}`} aria-label="Main">
          <ul>
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) => `nav-link${isActive ? " is-active" : ""}`}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to={navCta.to} className="btn btn--sm nav-cta">
            {navCta.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}
