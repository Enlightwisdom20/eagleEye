"use client";
import { useState, ChangeEvent, FormEvent } from "react";

type FormData = {
    fullName: string;
    email: string;
    phone: string;
    message: string;
};

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Thank you for your message! We will get back to you soon.");
        setFormData({
            fullName: "",
            email: "",
            phone: "",
            message: "",
        });
    };

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border border-[#ccc] rounded-xl px-5 py-3 text-[#333] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600"
                required
            />

            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full border border-[#ccc] rounded-xl px-5 py-3 text-[#333] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600"
                required
            />

            <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your Mobile Number"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={10}
                className="w-full border border-[#ccc] rounded-xl px-5 py-3 text-[#333] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600"
            />

            <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full border border-[#ccc] rounded-xl px-5 py-3 text-[#333] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600"
                required
            ></textarea>

            <button
                type="submit"
                className="bg-black text-white font-semibold py-3 px-6 rounded-xl hover:bg-gray-800 transition duration-300"
            >
                Send Message
            </button>
        </form>
    );
}
