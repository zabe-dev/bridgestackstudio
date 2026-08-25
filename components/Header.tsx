"use client";

import { SiteContent } from "@/lib/content";
import { useState } from "react";

export default function Header({ site }: { site: SiteContent }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <nav className="nav">
        <a href="#top" className="brand">
          <svg
            className="brand-mark"
            viewBox="0 0 26 26"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2 20 L7 10 L13 16 L19 8 L24 20"
              stroke="#f5a623"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="2"
              y1="22"
              x2="24"
              y2="22"
              stroke="#eeece3"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          {site.brand.toUpperCase()}
        </a>

        <ul className="nav-links">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        <div className="nav-cta">
          <a href="#contact" className="btn btn-solid">
            {site.navCta}
          </a>
        </div>
        <div className="mobile-menu">
          <button type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}>
            Menu
          </button>
          <ul id="mobile-navigation" hidden={!menuOpen}>
            {site.nav.map((item) => (
              <li key={item.href}><a href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a></li>
            ))}
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>{site.navCta}</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
