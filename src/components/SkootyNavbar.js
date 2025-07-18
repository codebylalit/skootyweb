import React from "react";
import { Link } from "react-router-dom";

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
  return (
    <nav
      className="fixed top-0 left-0 w-full z-40 flex items-center bg-white/80 backdrop-blur border-b border-gray-200"
      style={{ height: "72px", background: COLORS.light.background }}
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
          >
            Skooty
          </Link>
        </div>
        <div className="flex items-center gap-4 md:gap-10 h-full">
          <Link
            to="/terms"
            className="text-base md:text-lg font-bold transition"
            style={{ color: COLORS.light.primary }}
          >
            Terms & Conditions
          </Link>
          <Link
            to="/privacy"
            className="text-base md:text-lg font-bold transition"
            style={{ color: COLORS.light.primary }}
          >
            Privacy Policy
          </Link>
          <Link
            to="/contact"
            className="text-base md:text-lg font-bold transition"
            style={{ color: COLORS.light.primary }}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default SkootyNavbar;
