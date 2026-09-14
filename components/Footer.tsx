import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import { ContactContent, SiteContent } from "@/lib/content";

export default function Footer({ site, contact }: { site: SiteContent; contact: ContactContent }) {
  return (
    <footer className="studio-footer">
      <div className="wrap">
        <div className="footer-main">
          <div className="footer-intro">
            <a href="#top" className="footer-wordmark" aria-label={`${site.brand} home`}>
              <Image src="/brand/logo-dark.png" width={640} height={110} alt={site.brand} />
            </a>
            <p>Search-ready service pages, reliable development, and a web partner focused on helping more leads reach you.</p>
            <span className="footer-location">Based in Indiana. Working statewide.</span>
          </div>
          <nav className="footer-column" aria-label="Footer navigation">
            <h2>SITE LINKS</h2>
            <a href="#services">WHAT WE DO</a>
            <a href="#about">WHY WORK WITH US</a>
            <a href="#process">HOW PROJECTS WORK</a>
            <a href="#pricing">PRICING</a>
            <a href="#faq">FAQs</a>
          </nav>
          <div className="footer-column footer-contact">
            <h2>CONTACT</h2>
            <a className="icon-link" href={`mailto:${contact.email}`}><Mail size={15} aria-hidden="true" />{contact.email}</a>
            <a className="icon-link" href={`tel:${contact.phoneHref}`}><Phone size={15} aria-hidden="true" />{contact.phone}</a>
          </div>
        </div>
        <div className="footer-base">
          <span>{site.footerCopyright}</span>
          <span>Website strategy, development & management in Indiana</span>
        </div>
      </div>
    </footer>
  );
}
