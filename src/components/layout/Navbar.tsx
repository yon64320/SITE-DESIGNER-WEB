"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navigation, siteConfig } from "@/data/site";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? "bg-offwhite/80 backdrop-blur-xl py-4"
            : "bg-transparent py-6"
        }`}
      >
        <nav className="section-padding flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-50 font-display text-2xl tracking-tight"
          >
            <span className="font-light">Studio</span>{" "}
            <span className="font-medium">Kōdo</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-body font-light tracking-wide transition-colors duration-300 group ${
                  pathname === item.href
                    ? "text-charcoal"
                    : "text-charcoal/50 hover:text-charcoal"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-mocha-500 transition-all duration-500 ${
                    pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="text-sm font-body font-light tracking-wide text-charcoal/50 hover:text-charcoal transition-colors duration-300"
            >
              Discutons →
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 lg:hidden w-8 h-8 flex flex-col items-end justify-center gap-1.5"
            aria-label="Menu"
          >
            <motion.span
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 4 : 0,
                width: isOpen ? 24 : 24,
              }}
              className="block h-px bg-charcoal origin-center"
              style={{ width: 24 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -4 : 0,
                width: isOpen ? 24 : 16,
              }}
              className="block h-px bg-charcoal origin-center"
              style={{ width: 16 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-offwhite"
          >
            <div className="h-full flex flex-col justify-center section-padding">
              <nav className="space-y-2">
                {navigation.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      className={`block text-4xl md:text-5xl font-display font-light py-3 transition-colors duration-300 ${
                        pathname === item.href
                          ? "text-charcoal"
                          : "text-charcoal/30 hover:text-charcoal"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-16 space-y-3"
              >
                <p className="text-sm text-charcoal/40 font-light">
                  {siteConfig.email}
                </p>
                <p className="text-sm text-charcoal/40 font-light">
                  {siteConfig.phone}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
