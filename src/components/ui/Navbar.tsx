"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Navigation items
  const navItems = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "Works", href: "#works", id: "works" },
    { name: "Services", href: "#services", id: "services" },
    { name: "About", href: "#about", id: "about" },
    { name: "Training", href: "#training", id: "training" },
    { name: "Team", href: "#team", id: "team" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Update active section based on scroll position
      const sections = navItems
        .map((item) => ({
          id: item.id,
          element: document.getElementById(item.id),
        }))
        .filter((section) => section.element);

      const currentSection = sections.find((section) => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      setActiveSection(currentSection?.id || "");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  // Smooth scroll to section
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#hero");
                }}
              >
                <div className="flex items-center gap-3">
                  {/* Logo placeholder - replace with actual logo */}
                  {/* <div className="w-12 h-8 bg-gradient-to-r from-gray-800 to-gray-600 rounded-md flex items-center justify-center">
                    <span className="text-white font-bold text-sm">LOGO</span>
                  </div> */}
                  <span
                    className={`font-bold text-xl tracking-tight transition-colors duration-300 ${
                      isScrolled ? "text-gray-900" : "text-white"
                    }`}
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Eagle Eye
                  </span>
                  {/* <Image
                    src="/RLogo.svg"
                    alt="Eagle Eye Logo"
                    width={400}
                    height={120}
                    className="w-48 h-12 rounded-md"
                  /> */}
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-out relative group ${
                        activeSection === item.id
                          ? isScrolled
                            ? "text-gray-900 bg-gray-100"
                            : "text-white bg-white/20"
                          : isScrolled
                          ? "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                      }`}
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {item.name}

                      {/* Active indicator */}
                      {activeSection === item.id && (
                        <motion.div
                          className={`absolute bottom-0 left-1/2 w-1 h-1 rounded-full ${
                            isScrolled ? "bg-gray-800" : "bg-white"
                          }`}
                          layoutId="activeIndicator"
                          style={{ x: "-50%" }}
                        />
                      )}
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <button
                onClick={() => scrollToSection("#contact")}
                className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg ${
                  isScrolled
                    ? "bg-gray-900 text-white hover:bg-gray-800 hover:shadow-gray-900/25"
                    : "bg-white text-gray-900 hover:bg-gray-100 hover:shadow-white/25"
                }`}
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Get Started
              </button>
            </motion.div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  isScrolled
                    ? "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                    : "text-white hover:text-gray-200 hover:bg-white/10"
                }`}
                aria-label="Open menu"
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </motion.div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-4 py-6 space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                        activeSection === item.id
                          ? "text-gray-900 bg-gray-100"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      }`}
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      <div className="flex items-center justify-between">
                        {item.name}
                        {activeSection === item.id && (
                          <div className="w-2 h-2 bg-gray-800 rounded-full animate-pulse"></div>
                        )}
                      </div>
                    </button>
                  </motion.div>
                ))}

                {/* Mobile CTA */}
                <motion.div
                  className="pt-4 mt-4 border-t border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <button
                    onClick={() => scrollToSection("#contact")}
                    className="w-full bg-gray-900 text-white px-6 py-3 rounded-full font-medium text-base hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/25"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Get Started
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
