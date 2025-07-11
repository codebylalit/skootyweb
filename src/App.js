import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import PrivacyPolicyScreen from "./PrivacyPolicy";
import TermsScreen from "./Terms";
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
const phoneScreenshot = "https://play-lh.googleusercontent.com/1Qw8Qw8Qw8Qw8Qw8Qw8Qw8Qw8Qw8Qw8Qw8Qw8Qw8Qw8Qw8Qw8Qw8Qw8Qw=w480-h960-rw"; // Replace with actual screenshot

function SkootyNavbar() {
  return (
    <nav className="fixed top-10 left-0 w-full z-40 flex items-center" style={{ height: '96px' }}>
      <div className="w-full max-w-none flex items-center justify-between px-80 h-full">
        <div className="flex items-center gap-5 h-full">
          <span className="text-5xl md:text-6xl font-extrabold tracking-tight" style={{ color: COLORS.light.primary, fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.04em' }}>Skooty</span>
        </div>
        <div className="flex items-center gap-10 h-full">
          <Link to="/terms" className="text-lg md:text-2xl font-bold transition" style={{ color: COLORS.light.primary }}>
            Terms & Conditions
          </Link>
          <Link to="/privacy" className="text-lg md:text-2xl font-bold transition" style={{ color: COLORS.light.primary }}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </nav>
  );
}

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <div className="min-h-screen flex flex-col" style={{ background: COLORS.light.surface }}>
      {/* Show navbar only on home page */}
      {isHome && <SkootyNavbar />}
      <Routes>
        <Route path="/privacy" element={<PrivacyPolicyScreen />} />
        <Route path="/terms" element={<TermsScreen />} />
        <Route path="/" element={
          <div className="flex-1 w-full flex flex-col md:flex-row gap-10 items-center justify-between bg-surface rounded-none shadow-none p-60 md:p-60" style={{ background: COLORS.light.surface, minHeight: 'calc(100vh - 64px - 40px)' }}>
            {/* Left: Text Content */}
            <div className="flex-1 flex flex-col items-start justify-center text-left px-6 md:px-16 py-10 md:py-0">
              <h1 className="text-7xl md:text-9xl font-extrabold mb-6" style={{ color: COLORS.light.secondary, fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.04em' }}>Skooty</h1>
              <p className="text-2xl md:text-4xl font-semibold mb-6" style={{ color: COLORS.light.primary }}>Your Ride, Your Way</p>
              <p className="text-lg md:text-2xl mb-8" style={{ color: COLORS.light.text, lineHeight: 1.5 }}>
                Skooty is your trusted ride booking app, making daily commutes and city travel easy, safe, and affordable. Book a ride in seconds, track your driver, and enjoy seamless payments. Available for both users and drivers on Android.
              </p>
              <ul className="mb-10 list-disc pl-7 text-lg md:text-xl font-medium" style={{ color: COLORS.light.text }}>
                <li className="mb-2">Instant ride booking</li>
                <li className="mb-2">Live driver tracking</li>
                <li className="mb-2">Secure, cashless payments</li>
                <li className="mb-2">Professional drivers</li>
                <li>24/7 customer support</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href="https://play.google.com/store/apps/details?id=com.skooty.user"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center font-bold py-4 px-10 rounded-xl transition text-xl shadow-lg hover:scale-105"
                  style={{ background: COLORS.light.primary, color: '#fff' }}
                >
                  <svg className="w-7 h-7 mr-3" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M325.3 234.3L104.6 13.6C98.2 7.2 89.2 4.7 80.8 7.6c-8.4 2.9-14.1 10.7-14.1 19.6v457.6c0 8.9 5.7 16.7 14.1 19.6 2.2.8 4.5 1.2 6.8 1.2 6.1 0 12.1-2.4 16.5-6.8l220.7-220.7c8.7-8.7 8.7-22.8 0-31.5z" /><path fill="white" d="M371.6 278.6l-46.3 46.3 92.6 92.6c6.2 6.2 16.4 1.8 16.4-7V151.5c0-8.8-10.2-13.2-16.4-7l-92.6 92.6 46.3 46.3c8.7 8.7 8.7 22.8 0 31.5z" /></svg>
                  Download for Users
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.skooty.driver"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center font-bold py-4 px-10 rounded-xl transition text-xl shadow-lg hover:scale-105"
                  style={{ background: COLORS.light.secondary, color: '#fff' }}
                >
                  <svg className="w-7 h-7 mr-3" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M325.3 234.3L104.6 13.6C98.2 7.2 89.2 4.7 80.8 7.6c-8.4 2.9-14.1 10.7-14.1 19.6v457.6c0 8.9 5.7 16.7 14.1 19.6 2.2.8 4.5 1.2 6.8 1.2 6.1 0 12.1-2.4 16.5-6.8l220.7-220.7c8.7-8.7 8.7-22.8 0-31.5z" /><path fill="white" d="M371.6 278.6l-46.3 46.3 92.6 92.6c6.2 6.2 16.4 1.8 16.4-7V151.5c0-8.8-10.2-13.2-16.4-7l-92.6 92.6 46.3 46.3c8.7 8.7 8.7 22.8 0 31.5z" /></svg>
                  Download for Drivers
                </a>
              </div>
            </div>
            {/* Right: Phone Screenshot */}
            <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-16 py-10 md:py-0">
              <img src={phoneScreenshot} alt="Skooty App Screenshot" className="w-72 md:w-96 h-auto rounded-3xl shadow-2xl border-4 mb-10" style={{ borderColor: COLORS.light.primary, background: '#fff' }} />
              <a
                href="https://play.google.com/store/apps/details?id=com.skooty.user"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center font-bold py-4 px-16 rounded-xl transition text-2xl shadow-lg hover:scale-105"
                style={{ background: COLORS.light.primary, color: '#fff' }}
              >
                Download App
              </a>
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