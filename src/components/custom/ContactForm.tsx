"use client";
import { sendContactEmail } from "@/lib/actions";
import { useState } from "react";

export default function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  const handleSubmit = async (formData: FormData) => {
    setErrors({});
    const result = await sendContactEmail(formData);
    if (result.success) {
      console.log("Form submitted");
      alert("Thank you for your message! We will get back to you soon.");
    } else {
      setErrors(result.errors || {});
    }
  };

  return (
    <form className="space-y-6" action={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        className="w-full border border-[#ccc] rounded-xl px-5 py-3 text-[#333] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600"
        required
      />

      {errors.name && <p className="text-red-500">{errors.name[0]}</p>}

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        className="w-full border border-[#ccc] rounded-xl px-5 py-3 text-[#333] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600"
        required
      />
      {errors.email && <p className="text-red-500">{errors.email[0]}</p>}

      <input
        type="tel"
        name="phone"
        placeholder="Enter your Mobile Number"
        inputMode="numeric"
        pattern="[0-9]*"
        maxLength={10}
        className="w-full border border-[#ccc] rounded-xl px-5 py-3 text-[#333] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600"
      />
      {errors.phone && <p className="text-red-500">{errors.phone[0]}</p>}

      <textarea
        rows={4}
        name="message"
        placeholder="Your Message"
        className="w-full border border-[#ccc] rounded-xl px-5 py-3 text-[#333] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600"
        required
      ></textarea>
      {errors.message && <p className="text-red-500">{errors.message[0]}</p>}

      <button
        type="submit"
        className="bg-black text-white font-semibold py-3 px-6 rounded-xl hover:bg-gray-800 transition duration-300"
      >
        Send Message
      </button>
    </form>
  );
}
