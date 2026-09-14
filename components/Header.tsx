"use client";
import { MessageCircle } from "lucide-react";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SiteContent } from "@/lib/content";
export default function Header({ site }: { site: SiteContent }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 821px)");
    const closeOnDesktop = () => { if (desktop.matches) setMenuOpen(false); };
    const closeOutside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setMenuOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    document.addEventListener("pointerdown", closeOutside);
    return () => {
      desktop.removeEventListener("change", closeOnDesktop);
      document.removeEventListener("pointerdown", closeOutside);
    };
  }, []);
  return (
    <header
      ref={headerRef}
      className={`site-header${menuOpen ? " menu-is-open" : ""}`}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setMenuOpen(false);
          document.getElementById("menu-toggle")?.focus();
        }
      }}
    >
      <nav className="wrap nav" aria-label="Main navigation">
        <a
          href="#top"
          className="brand menu-brand"
          aria-label={`${site.brand} home`}
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/brand/logo-light.png"
            width={640}
            height={110}
            alt={site.brand}
            priority
          />
        </a>
        <ul className="nav-links">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <a className="btn btn-dark nav-cta" href="#contact">
          <MessageCircle size={16} aria-hidden="true" /> Let’s talk
        </a>
        <button
          id="menu-toggle"
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="menu-icon" aria-hidden="true"><span /><span /></span>
        </button>
      </nav>
      <div className="mobile-menu-panel" aria-hidden={!menuOpen} inert={!menuOpen}>
        <div className="mobile-menu-inner">
          <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation">
            <p className="mobile-menu-caption">Explore the studio</p>
            <ul>
              {site.nav.map((item, index) => (
                <li key={item.href}>
                  <a href={item.href} onClick={() => setMenuOpen(false)}>
                    <span className="mobile-link-number" aria-hidden="true">0{index + 1}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mobile-menu-footer">
              <p>Something in mind?<br /><span>Let’s make it happen.</span></p>
              <a className="btn btn-solid" href="#contact" onClick={() => setMenuOpen(false)}><MessageCircle size={16} aria-hidden="true" />Let’s talk</a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
