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
            <p>Custom websites for Indiana small businesses. Thoughtful design, reliable development, and a web partner who stays with you after launch.</p>
            <span className="footer-location">Based in Indiana. Working statewide.</span>
          </div>
          <nav className="footer-column" aria-label="Footer navigation">
            <h2>Explore</h2>
            <a href="#services">Web design services</a>
            <a href="#about">About the studio</a>
            <a href="#process">Our process</a>
            <a href="#pricing">Website pricing</a>
            <a href="#faq">Common questions</a>
          </nav>
          <div className="footer-column footer-contact">
            <h2>Let’s talk</h2>
            <a className="icon-link" href={`mailto:${contact.email}`}><Mail size={15} aria-hidden="true" />{contact.email}</a>
            <a className="icon-link" href={`tel:${contact.phoneHref}`}><Phone size={15} aria-hidden="true" />{contact.phone}</a>
            <a className="footer-project-link" href="#contact">Discuss your website</a>
          </div>
        </div>
        <div className="footer-base">
          <span>{site.footerCopyright}</span>
          <span>Web design & development in Indiana</span>
        </div>
      </div>
    </footer>
  );
}
