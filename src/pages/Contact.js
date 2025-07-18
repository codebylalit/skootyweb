import React, { useState } from "react";
const COLORS = {
    light: {
        background: '#FAF6F3',
        primary: '#CC5803',
        secondary: '#582b11',
        surface: '#FFFFFF',
        text: '#582b11',
    },
};
export default function ContactScreen() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };
    return (
        <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: COLORS.light.background }}>
            <div className="w-full max-w-xl mx-auto mt-10 py-16 px-4 md:px-0">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center" style={{ color: COLORS.light.secondary, fontFamily: 'Poppins, sans-serif' }}>Contact Us</h1>
                {submitted ? (
                    <div className="text-center text-xl font-semibold" style={{ color: COLORS.light.primary }}>
                        Thank you for reaching out! We will get back to you soon.
                    </div>
                ) : (
                    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                        <label className="flex flex-col text-lg font-medium" style={{ color: COLORS.light.text }}>
                            Name
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="mt-2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                style={{ background: COLORS.light.surface }}
                            />
                        </label>
                        <label className="flex flex-col text-lg font-medium" style={{ color: COLORS.light.text }}>
                            Email
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="mt-2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                style={{ background: COLORS.light.surface }}
                            />
                        </label>
                        <label className="flex flex-col text-lg font-medium" style={{ color: COLORS.light.text }}>
                            Message
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="mt-2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                style={{ background: COLORS.light.surface }}
                            />
                        </label>
                        <button
                            type="submit"
                            className="mt-4 py-3 px-8 rounded-xl font-bold text-lg shadow-lg transition hover:scale-105"
                            style={{ background: COLORS.light.primary, color: '#fff' }}
                        >
                            Send Message
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
} 