import React from "react";
const COLORS = {
  light: {
    background: "#FAF6F3",
    primary: "#CC5803",
    surface: "#FFFFFF",
    secondary: "#582b11",
  },
};
export default function TermsScreen() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ background: COLORS.light.background }}
    >
      <div className="w-full max-w-6xl mx-auto mt-10 py-16 px-4 md:px-0">
        <h1
          className="text-4xl md:text-5xl font-extrabold mb-8 text-center"
          style={{
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Terms & Conditions
        </h1>
        <div
          className="text-lg md:text-xl mt-15 leading-relaxed"
          style={{ color: COLORS.light.text }}
        >
          <p className="mb-4">Effective Date: 2024-01-01</p>
          <h2 className="text-2xl font-bold mt-8 mb-2">
            1. Acceptance of Terms
          </h2>
          <p className="mb-4">
            By using Skooty, you agree to these Terms & Conditions. If you do
            not agree, please do not use our services.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-2">2. Use of Service</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Skooty is a ride booking platform connecting users and drivers.
            </li>
            <li>You must be at least 18 years old to use the app.</li>
            <li>
              All rides are subject to driver availability and local
              regulations.
            </li>
            <li>Do not use Skooty for unlawful or dangerous activities.</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-2">
            3. Safety & Liability
          </h2>
          <ul className="list-disc pl-6 mb-4">
            <li>
              We prioritize your safety, but Skooty is not liable for accidents,
              injuries, or losses during rides. Please verify your driver and
              vehicle before starting a trip.
            </li>
            <li>
              In case of emergency, contact local authorities immediately.
            </li>
            <li>Report any suspicious or unsafe behavior to Skooty support.</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-2">
            4. Payments & Refunds
          </h2>
          <ul className="list-disc pl-6 mb-4">
            <li>
              All payments must be made through approved methods in the app.
            </li>
            <li>
              Refunds are subject to our refund policy and may take up to 7
              business days.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-2">
            5. Account Suspension
          </h2>
          <ul className="list-disc pl-6 mb-4">
            <li>
              We reserve the right to suspend or terminate accounts for
              violations of these terms or misuse of the app.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-2">6. Changes to Terms</h2>
          <p className="mb-4">
            We may update these Terms & Conditions at any time. Continued use of
            Skooty means you accept the updated terms.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-2">7. Contact</h2>
          <p>
            If you have questions, contact us at{" "}
            <a
              href="mailto:support@skooty.com"
              className="text-primary underline"
            >
              support@skooty.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
