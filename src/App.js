import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import PrivacyPolicyScreen from "./PrivacyPolicy";
import TermsScreen from "./Terms";
import ContactScreen from "./Contact";
// import skootyLogo from "./assets/skooty.png"; // Place your logo in src/assets/
import "./App.css";
import "./index.css";

// Color palette for Skooty
const COLORS = {
  light: {
    background: '#FAF6F3',
    primary: '#CC5803',
    secondary: '#582b11',
    surface: '#FFFFFF',
    accent: '#CC5803',
    card: '#FFFFFF',
    text: '#582b11',
    tint: '#CC5803',
    icon: '#CC5803',
    tabIconDefault: '#582b11',
    tabIconSelected: '#CC5803',
  },
  dark: {
    background: '#582b11',
    primary: '#CC5803',
    secondary: '#E7D7C9',
    surface: '#222',
    accent: '#CC5803',
    card: '#222',
    text: '#E7D7C9',
    tint: '#CC5803',
    icon: '#CC5803',
    tabIconDefault: '#E7D7C9',
    tabIconSelected: '#CC5803',
  },
};

const skootyLogo = "https://via.placeholder.com/48?text=Logo"; // TEMP: Replace with actual logo path
const phoneScreenshot = process.env.PUBLIC_URL + "/screenshot.png";

function SkootyNavbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-40 flex items-center bg-white/80 backdrop-blur border-b border-gray-200" style={{ height: '72px' }}>
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 h-full">
        <div className="flex items-center gap-3 h-full">
          <span className="text-3xl md:text-4xl font-extrabold tracking-tight" style={{ color: COLORS.light.primary, fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.04em' }}>Skooty</span>
        </div>
        <div className="flex items-center gap-4 md:gap-10 h-full">
          <Link to="/terms" className="text-base md:text-lg font-bold transition" style={{ color: COLORS.light.primary }}>
            Terms & Conditions
          </Link>
          <Link to="/privacy" className="text-base md:text-lg font-bold transition" style={{ color: COLORS.light.primary }}>
            Privacy Policy
          </Link>
          <Link to="/contact" className="text-base md:text-lg font-bold transition" style={{ color: COLORS.light.primary }}>
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
    <div className="min-h-screen flex flex-col" style={{ background: COLORS.light.surface }}>
      <SkootyNavbar />
      <Routes>
        <Route path="/privacy" element={<PrivacyPolicyScreen />} />
        <Route path="/terms" element={<TermsScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/" element={
          <div className="flex-1 w-full flex flex-col md:flex-row gap-8 items-center justify-between bg-surface rounded-none shadow-none px-4 md:px-12 py-32 md:py-40" style={{ background: COLORS.light.surface, minHeight: 'calc(100vh - 72px - 40px)' }}>
            {/* Left: Text Content */}
            <div className="flex-1 flex flex-col items-start justify-center text-left px-0 md:px-8 py-6 md:py-0">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-4 md:mb-6" style={{ color: COLORS.light.secondary, fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.04em' }}>Skooty</h1>
              <p className="text-lg sm:text-2xl md:text-3xl font-semibold mb-4 md:mb-6" style={{ color: COLORS.light.primary }}>Your Ride, Your Way</p>
              <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8" style={{ color: COLORS.light.text, lineHeight: 1.5 }}>
                Skooty is your trusted ride booking app, making daily commutes and city travel easy, safe, and affordable. Book a ride in seconds, track your driver, and enjoy seamless payments. Available for all riders on Android.
              </p>
              <ul className="mb-8 md:mb-10 list-disc pl-5 text-base sm:text-lg md:text-xl font-medium" style={{ color: COLORS.light.text }}>
                <li className="mb-1">Instant ride booking</li>
                <li className="mb-1">Live driver tracking</li>
                <li className="mb-1">Secure, cashless payments</li>
                <li className="mb-1">Professional drivers</li>
                <li>24/7 customer support</li>
              </ul>
              <a
                href="https://play.google.com/store/apps/details?id=com.heylalit.skooty"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center font-bold py-4 px-10 rounded-xl transition text-xl shadow-lg hover:scale-105"
                style={{ background: COLORS.light.primary, color: '#fff' }}
              >
                <svg className="w-7 h-7 mr-3" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M325.3 234.3L104.6 13.6C98.2 7.2 89.2 4.7 80.8 7.6c-8.4 2.9-14.1 10.7-14.1 19.6v457.6c0 8.9 5.7 16.7 14.1 19.6 2.2.8 4.5 1.2 6.8 1.2 6.1 0 12.1-2.4 16.5-6.8l220.7-220.7c8.7-8.7 8.7-22.8 0-31.5z" /><path fill="white" d="M371.6 278.6l-46.3 46.3 92.6 92.6c6.2 6.2 16.4 1.8 16.4-7V151.5c0-8.8-10.2-13.2-16.4-7l-92.6 92.6 46.3 46.3c8.7 8.7 8.7 22.8 0 31.5z" /></svg>
                Download Skooty Rider App
              </a>
            </div>
            {/* Right: Phone Screenshot */}
            <div className="flex-1 flex flex-col items-center justify-center px-0 md:px-8 py-6 md:py-0 w-full">
              <img src={phoneScreenshot} alt="Skooty App Screenshot" className="w-64 sm:w-80 md:w-96 h-auto rounded-3xl shadow-2xl border-4 mb-6 md:mb-10" style={{ borderColor: COLORS.light.primary, background: '#fff' }} />
            </div>
          </div>
        } />
      </Routes>
      {/* Footer */}
      <footer className="text-xs text-center pb-4 mt-auto" style={{ color: '#aaa', background: COLORS.light.surface }}>
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