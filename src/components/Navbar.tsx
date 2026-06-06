"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#visit", label: "Visit" },
  { href: "#services", label: "Services" },
  { href: "#ministries", label: "Ministries" },
  { href: "#connect", label: "Connect" },
  { href: "#location", label: "Location" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 24);
    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  const goToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setIsOpen(false);
    if (!href.startsWith("#")) return;
    event.preventDefault();

    const target = document.querySelector(href);
    if (!target) return;

    const top = target.getBoundingClientRect().top + window.scrollY - 84;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "nav-blur border-b border-white/15 bg-navy-950/90 py-3 shadow-lg"
          : "nav-blur bg-navy-950/30 py-5"
      }`}
    >
      <div className="section-shell flex items-center justify-between gap-4">
        <a
          href="#home"
          onClick={(event) => goToSection(event, "#home")}
          className="flex min-w-0 items-center gap-3 text-white"
          aria-label="Highland Hills Baptist Church home"
        >
          <Image
            src="/highland-hills-baptist-logo.svg"
            alt="Highland Hills Baptist Church"
            width={300}
            height={85}
            className="h-auto w-44 sm:w-56"
            priority
          />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => goToSection(event, link.href)}
              className="hhbc-nav-link rounded-md px-4 py-2 text-sm font-semibold transition-colors hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.youtube.com/@highlandhillsbaptistchurch4533/streams"
            target="_blank"
            rel="noopener noreferrer"
            className="button-light lift-link ml-2 rounded-md border border-white/25 bg-white px-5 py-2.5 text-sm font-bold hover:bg-sky-100"
          >
            Watch Live
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/25 bg-white/10 text-white lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`lg:hidden ${
          isOpen ? "block" : "hidden"
        } border-t border-white/10 bg-navy-950/96 px-4 pb-5 pt-4 shadow-xl`}
      >
        <nav className="mx-auto flex max-w-md flex-col gap-1" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => goToSection(event, link.href)}
              className="hhbc-nav-link rounded-md px-4 py-3 text-base font-semibold hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.youtube.com/@highlandhillsbaptistchurch4533/streams"
            target="_blank"
            rel="noopener noreferrer"
            className="button-light mt-3 rounded-md bg-white px-4 py-3 text-center text-base font-bold"
          >
            Watch Live
          </a>
        </nav>
      </div>
    </header>
  );
}
