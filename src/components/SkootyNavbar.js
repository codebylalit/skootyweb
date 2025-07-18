import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";

const COLORS = {
  light: {
    background: "#FAF6F3",
    primary: "#CC5803",
    secondary: "#582b11",
    surface: "#FFFFFF",
    accent: "#CC5803",
    card: "#FFFFFF",
    text: "#582b11",
    tint: "#CC5803",
    icon: "#CC5803",
    tabIconDefault: "#582b11",
    tabIconSelected: "#CC5803",
  },
  dark: {
    background: "#582b11",
    primary: "#CC5803",
    secondary: "#E7D7C9",
    surface: "#222",
    accent: "#CC5803",
    card: "#222",
    text: "#E7D7C9",
    tint: "#CC5803",
    icon: "#CC5803",
    tabIconDefault: "#E7D7C9",
    tabIconSelected: "#CC5803",
  },
};

function SkootyNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);
  const firstLinkRef = useRef(null);
  const closeBtnRef = useRef(null);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Focus trap for accessibility
  useEffect(() => {
    if (!menuOpen) return;
    const focusable = menuRef.current
      ? menuRef.current.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      : [];
    if (focusable.length) {
      (closeBtnRef.current || focusable[0]).focus();
    }
    function handleKeyDown(e) {
      if (e.key === "Tab" && focusable.length) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      } else if (e.key === "Escape") {
        setMenuOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  // Menu links
  const links = [
    { to: "/terms", label: "Terms & Conditions" },
    { to: "/privacy", label: "Privacy Policy" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 w-full z-40 flex items-center bg-white/80 backdrop-blur border-b border-gray-200"
      style={{ height: "72px", background: COLORS.light.background }}
      aria-label="Main navigation"
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 h-full">
        <div className="flex items-center gap-3 h-full">
          <Link
            to="/"
            className="text-3xl md:text-4xl font-extrabold tracking-tight"
            style={{
              color: COLORS.light.primary,
              fontFamily: "Poppins, sans-serif",
              letterSpacing: "-0.04em",
            }}
            tabIndex={0}
          >
            Skooty
          </Link>
        </div>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            // Close (X) icon
            <svg
              className="w-7 h-7 text-orange-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              className="w-7 h-7 text-orange-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-4 md:gap-10 h-full">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-base md:text-lg font-bold transition px-2 py-2 rounded-lg ${
                location.pathname === link.to ? "bg-orange-100" : ""
              }`}
              style={{ color: COLORS.light.primary }}
              tabIndex={0}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-modal="true"
          role="dialog"
        >
          <div
            id="mobile-menu"
            ref={menuRef}
            className="absolute top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-lg flex flex-col pt-8 gap-6 px-6 animate-slide-in"
            style={{
              background: COLORS.light.background,
              transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
              transform: menuOpen ? "translateX(0)" : "translateX(100%)",
            }}
            onClick={(e) => e.stopPropagation()}
            tabIndex={-1}
          >
            {/* Logo at the top */}
            <div className="flex flex-col items-center mb-2">
              <img src={logo} alt="Skooty Logo" className="w-16 h-16 mb-2" />
              <span
                className="text-2xl font-extrabold"
                style={{
                  color: COLORS.light.primary,
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Skooty
              </span>
            </div>
            {/* Close button at top right */}
            <button
              ref={closeBtnRef}
              className="absolute top-4 right-4 p-2 rounded focus:outline-none"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              style={{ color: COLORS.light.primary }}
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex flex-col gap-4 mt-8">
              {links.map((link, idx) => (
                <Link
                  key={link.to}
                  to={link.to}
                  ref={idx === 0 ? firstLinkRef : undefined}
                  className={`text-lg font-bold py-4 px-2 rounded-lg text-center ${
                    location.pathname === link.to ? "bg-orange-100" : ""
                  }`}
                  style={{ color: COLORS.light.primary, fontSize: 20 }}
                  onClick={() => setMenuOpen(false)}
                  tabIndex={0}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default SkootyNavbar;
