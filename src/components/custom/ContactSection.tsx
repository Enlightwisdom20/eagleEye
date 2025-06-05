import ContactForm from "./ContactForm";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-black py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left: Text Content */}
        <div className="text-center md:text-left">
          <h2
            className="text-2xl sm:text-[2.5rem] font-normal text-white mb-4 leading-none tracking-wider"
            style={{
              fontFamily: "vinila, sans-serif",
              fontStyle: "normal",
              letterSpacing: "0.01em",
              fontWeight: "700",
            }}
          >
            Get in{" "}
            <span
              className="text-gray-400"
              style={{
                fontFamily: "vinila, sans-serif",
                fontWeight: "700",
              }}
            >
              Touch
            </span>
          </h2>
          <p
            className="text-gray-300 font-medium mb-8 text-base sm:text-lg leading-relaxed"
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: "400",
            }}
          >
            Have questions or want to work with us? We would love to hear from
            you. Fill out the form and we will get back to you soon.
          </p>

          <ul className="space-y-4 text-gray-400 font-medium">
            <li>
              <Mail className="inline-block text-white mr-2 w-5 h-5 align-middle" />
              info@theeagleseye.in
            </li>
            <li>
              <Phone className="inline-block text-white mr-2 w-5 h-5 align-middle" />{" "}
              +91 9790957217
            </li>
            <li>
              <MapPin className="inline-block text-white mr-2 w-5 h-5 align-middle" />
              No 3, Zacharia Colony, Choolaimedu, Chennai - 600094
            </li>
          </ul>

          {/* Industries We Cater */}
          <div className="mt-12 mb-8">
            <h3
              className="text-xl font-medium text-white mb-6 tracking-wide"
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: "500",
              }}
            >
              Industries We <span className="text-gray-400">Cater</span>
            </h3>
            <div className="grid grid-cols-2 gap-3 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                <span>Healthcare</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                <span>Interior Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                <span>Food & Beverage</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                <span>Education</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                <span>Technology</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                <span>Wellness</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                <span>Beauty & Fashion</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                <span>Event Management</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                <span>Real Estate</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                <span>Retail & E-commerce</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form Card */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#ddd]">
          <ContactForm />
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto mt-20 pt-12 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Social Media Links */}
          <div className="flex space-x-6 text-2xl">
            <Link
              href="https://www.facebook.com/theeagleeyein"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Facebook className="w-6 h-6" />
            </Link>
            <Link
              href="
https://www.linkedin.com/in/erlindascarlet02/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-400 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="
https://www.instagram.com/theeagleeye.in
"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-400 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p
              className="text-gray-400 text-sm font-medium"
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: "400",
              }}
            >
              © {new Date().getFullYear()} The Eagles Eye. All rights reserved.
            </p>
            <p
              className="text-gray-500 text-xs mt-1"
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: "300",
              }}
            >
              Designed & Developed with ❤️ in Chennai
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
