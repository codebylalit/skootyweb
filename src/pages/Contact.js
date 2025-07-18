import React, { useState } from "react";
const COLORS = {
  light: {
    background: "#FAF6F3",
    primary: "#CC5803",
    secondary: "#582b11",
    surface: "#FFFFFF",
    card: "#FFFFFF",
    text: "#582b11",
  },
};
export default function ContactScreen() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-2 py-20" style={{ background: COLORS.light.background }}>
      <div className="w-full max-w-xl mx-auto py-10 px-4 sm:px-8 md:px-14 rounded-2xl pb-6" style={{ background: COLORS.light.card, boxShadow: '0 4px 24px 0 ' + COLORS.light.secondary + '22' }}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-center" style={{ color: COLORS.light.secondary, fontFamily: 'Poppins, sans-serif' }}>Contact Us</h1>
        {submitted ? (
          <div className="text-center text-lg sm:text-xl font-semibold" style={{ color: COLORS.light.primary }}>
            Thank you for reaching out! We will get back to you soon.
          </div>
        ) : (
          <form className="flex flex-col gap-5 sm:gap-6" onSubmit={handleSubmit}>
            <label className="flex flex-col text-base sm:text-lg font-medium" style={{ color: COLORS.light.text }}>
              Name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 w-full text-base sm:text-lg"
                style={{ background: COLORS.light.surface, border: '1.5px solid ' + COLORS.light.secondary, color: COLORS.light.text }}
              />
            </label>
            <label className="flex flex-col text-base sm:text-lg font-medium" style={{ color: COLORS.light.text }}>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 w-full text-base sm:text-lg"
                style={{ background: COLORS.light.surface, border: '1.5px solid ' + COLORS.light.secondary, color: COLORS.light.text }}
              />
            </label>
            <label className="flex flex-col text-base sm:text-lg font-medium" style={{ color: COLORS.light.text }}>
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="mt-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 w-full text-base sm:text-lg"
                style={{ background: COLORS.light.surface, border: '1.5px solid ' + COLORS.light.secondary, color: COLORS.light.text }}
              />
            </label>
            <button
              type="submit"
              className="mt-4 py-3 px-8 rounded-xl font-bold text-lg transition hover:scale-105 w-full sm:w-auto"
              style={{ background: COLORS.light.primary, color: COLORS.light.surface, minHeight: 48, boxShadow: '0 2px 8px 0 ' + COLORS.light.primary + '33', marginBottom: 8 }}
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
