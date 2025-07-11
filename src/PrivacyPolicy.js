import React from "react";
const COLORS = {
    light: {
        background: '#FAF6F3',
        primary: '#CC5803',
        surface: '#FFFFFF',
    },
};
export default function PrivacyPolicyScreen() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: COLORS.light.background }}>
            <div className="w-full max-w-6xl mx-auto mt-10 py-16 px-4 md:px-0">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center" style={{ color: COLORS.light.secondary, fontFamily: 'Poppins, sans-serif' }}>Privacy Policy</h1>
                <div className="text-lg md:text-xl mt-15 leading-relaxed" style={{ color: COLORS.light.text }}>
                    <p className="mb-4">Effective Date: 2024-01-01</p>
                    <p className="mb-4">At Skooty, your privacy is our top priority. This Privacy Policy explains how we collect, use, and protect your information when you use our app and services.</p>
                    <h2 className="text-2xl font-bold mt-8 mb-2">1. Information We Collect</h2>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Personal Information: Name, phone number, email, and payment details for account creation and transactions.</li>
                        <li>Location Data: Real-time and background location for ride booking, navigation, and safety.</li>
                        <li>Usage Data: Device information, app usage, and analytics to improve our services.</li>
                    </ul>
                    <h2 className="text-2xl font-bold mt-8 mb-2">2. How We Use Your Information</h2>
                    <ul className="list-disc pl-6 mb-4">
                        <li>To provide and improve our ride booking services.</li>
                        <li>To process payments and send ride receipts.</li>
                        <li>To ensure your safety and security during rides.</li>
                        <li>To communicate important updates and offers.</li>
                        <li>To comply with legal obligations and resolve disputes.</li>
                    </ul>
                    <h2 className="text-2xl font-bold mt-8 mb-2">3. Data Sharing & Disclosure</h2>
                    <ul className="list-disc pl-6 mb-4">
                        <li>We do <b>not</b> sell your personal data to third parties.</li>
                        <li>We may share data with drivers, payment processors, and law enforcement as required for service and legal compliance.</li>
                        <li>All data sharing is done with strict confidentiality and only as necessary.</li>
                    </ul>
                    <h2 className="text-2xl font-bold mt-8 mb-2">4. Data Security</h2>
                    <p className="mb-4">We use industry-standard encryption and security practices to protect your data. However, no method of transmission over the Internet is 100% secure. We encourage you to use strong passwords and keep your device secure.</p>
                    <h2 className="text-2xl font-bold mt-8 mb-2">5. Your Rights</h2>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Access, update, or delete your personal information at any time via the app or by contacting support.</li>
                        <li>Opt out of marketing communications at any time.</li>
                    </ul>
                    <h2 className="text-2xl font-bold mt-8 mb-2">6. Children’s Privacy</h2>
                    <p className="mb-4">Skooty is not intended for children under 18. We do not knowingly collect data from minors.</p>
                    <h2 className="text-2xl font-bold mt-8 mb-2">7. Changes to This Policy</h2>
                    <p className="mb-4">We may update this Privacy Policy from time to time. We will notify you of any significant changes via the app or email.</p>
                    <h2 className="text-2xl font-bold mt-8 mb-2">8. Contact Us</h2>
                    <p>If you have any questions or concerns, contact us at <a href="mailto:support@skooty.com" className="text-primary underline">support@skooty.com</a>.</p>
                </div>
            </div>
        </div>
    );
} 