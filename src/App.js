import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import PrivacyPolicyScreen from "./pages/PrivacyPolicy";
import TermsScreen from "./pages/Terms";
import ContactScreen from "./pages/Contact";
import "./App.css";
import "./index.css";
import SkootyNavbar from "./components/SkootyNavbar";
import AppDownloadSection from "./components/AppDownloadSection";

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

function App() {
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
