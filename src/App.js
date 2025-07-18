import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import PrivacyPolicyScreen from "./PrivacyPolicy";
import TermsScreen from "./Terms";
import ContactScreen from "./Contact";
// import skootyLogo from "./assets/skooty.png"; // Place your logo in src/assets/
import "./App.css";
import "./index.css";

// Color palette for Skooty
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

const skootyLogo = "https://via.placeholder.com/48?text=Logo"; // TEMP: Replace with actual logo path
const riderScreenshot = process.env.PUBLIC_URL + "/Skooty.png";
const driverScreenshot = process.env.PUBLIC_URL + "/SkootyGo.png";
const gplayBadge = process.env.PUBLIC_URL + "/gplay.png";

const APPS = {
  rider: {
    name: "Rider",
    screenshot: riderScreenshot,
    playUrl:
      "https://play.google.com/store/apps/details?id=com.heylalit.skooty",
    description:
      "Book a ride in seconds, track your driver, and enjoy seamless payments. Skooty Rider is your trusted ride booking app for daily commutes and city travel.",
    color: COLORS.light.primary,
  },
  driver: {
    name: "Driver",
    screenshot: driverScreenshot,
    playUrl:
      "https://play.google.com/store/apps/details?id=com.heylalit.skootydriver",
    description:
      "Drive smart, earn fast! SkootyGo Driver lets you accept ride requests, get paid instantly, and manage your trips with ease. Join the SkootyGo driver community today.",
    color: COLORS.light.secondary,
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

function App() {
  const location = useLocation();
  // Show navbar on all pages for consistent navigation
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: COLORS.light.background }}
    >
      <SkootyNavbar />
      <Routes>
        <Route path="/privacy" element={<PrivacyPolicyScreen />} />
        <Route path="/terms" element={<TermsScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route
          path="/"
          element={
            <div
              className="flex-1 w-full flex flex-col items-center justify-between bg-surface rounded-none shadow-none px-4 md:px-12 py-32 md:py-40"
              style={{
                background: COLORS.light.background,
                minHeight: "calc(100vh - 72px - 40px)",
              }}
            >
              {/* App Toggle */}
              <AppDownloadSection />
            </div>
          }
        />
      </Routes>
      {/* Footer */}
      <footer
        className="text-xs text-center pb-4 mt-auto"
        style={{ color: "#aaa" }}
      >
        &copy; {new Date().getFullYear()} Skooty. All rights reserved.
      </footer>
    </div>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;

function AppDownloadSection() {
  const [selected, setSelected] = useState("rider");
  const appKeys = ["rider", "driver"];
  return (
    <div
      className="w-full max-w-8xl flex flex-col md:flex-row gap-16 items-center justify-center px-4 md:px-12 min-h-[70vh] mt-0 pt-0"
      style={{ background: COLORS.light.background }}
    >
      {/* Left: Info Section */}
      <div className="flex-1 flex flex-col items-start justify-center text-left px-0 md:px-8 md:py-0">
        {/* Toggle Tabs at Top */}
        <div className="flex gap-4 mb-8">
          {appKeys.map((key) => (
            <button
              key={key}
              className={`px-7 py-2 rounded-full font-bold text-lg transition border-2 ${
                selected === key
                  ? "bg-orange-600 text-white shadow-md"
                  : "bg-white text-orange-700"
              }`}
              style={{
                color: selected === key ? "#fff" : APPS[key].color,
                borderColor: APPS[key].color,
                background: selected === key ? APPS[key].color : "#fff",
                boxShadow:
                  selected === key ? `0 2px 8px ${APPS[key].color}40` : "none",
              }}
              onClick={() => setSelected(key)}
            >
              {APPS[key].name} App
            </button>
          ))}
        </div>
        <h1
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-4 md:mb-6"
          style={{
            color: COLORS.light.secondary,
            fontFamily: "Poppins, sans-serif",
            letterSpacing: "-0.04em",
          }}
        >
          {selected === "rider" ? "Skooty" : "SkootyGo"}
        </h1>
        <p
          className="text-lg sm:text-2xl md:text-3xl font-semibold mb-4 md:mb-6"
          style={{ color: COLORS.light.primary }}
        >
          {selected === "rider"
            ? "Your Ride, Your Way"
            : "Drive. Earn. Repeat."}
        </p>
        <p
          className="text-base sm:text-lg md:text-xl mb-6 md:mb-8"
          style={{ color: COLORS.light.text, lineHeight: 1.5 }}
        >
          {APPS[selected].description}
        </p>
        {selected === "rider" ? (
          <ul
            className="mb-8 md:mb-10 list-disc pl-5 text-base sm:text-lg md:text-xl font-medium"
            style={{ color: "#3a2a1a" }}
          >
            <li className="mb-1">Instant ride booking</li>
            <li className="mb-1">Live driver tracking</li>
            <li className="mb-1">Secure, cashless payments</li>
            <li className="mb-1">Professional drivers</li>
            <li>24/7 customer support</li>
          </ul>
        ) : (
          <ul
            className="mb-8 md:mb-10 list-disc pl-5 text-base sm:text-lg md:text-xl font-medium"
            style={{ color: "#3a2a1a" }}
          >
            <li className="mb-1">Instant ride requests</li>
            <li className="mb-1">Direct, on-the-spot payments</li>
            <li className="mb-1">Transparent earnings dashboard</li>
            <li className="mb-1">Low 15% support fee</li>
            <li>Flexible schedule</li>
          </ul>
        )}
        <a
          href={APPS[selected].playUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto flex items-center justify-center"
          style={{ maxWidth: 280 }}
        >
          <img
            src={gplayBadge}
            alt={`Get Skooty ${APPS[selected].name} on Google Play`}
            className="w-full h-auto"
            style={{ minWidth: 120 }}
          />
        </a>
      </div>
      {/* Right: Both Screenshots Always Visible */}
      <div className="flex-1 flex flex-row gap-8 items-center justify-center px-0 md:px-8 py-6 md:py-0 w-full">
        <img
          src={APPS["rider"].screenshot}
          alt="Skooty Rider App Screenshot"
          className="w-56 sm:w-64 md:w-80 h-auto rounded-3xl shadow-2xl border-4 mb-2"
          style={{ borderColor: COLORS.light.primary, background: "#fff" }}
        />
        <img
          src={APPS["driver"].screenshot}
          alt="Skooty Driver App Screenshot"
          className="w-56 sm:w-64 md:w-80 h-auto rounded-3xl shadow-2xl border-4 mb-2"
          style={{ borderColor: COLORS.light.secondary, background: "#fff" }}
        />
      </div>
    </div>
  );
}
