import WhatsAppChat from "@/components/WhatsAppChat";
import ReferralBanner from "@/components/ReferralBanner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import {
  getSiteContent,
  getHeroContent,
  getServicesContent,
  getAboutContent,
  getProcessContent,
  getPricingContent,
  getFaqContent,
  getContactContent,
} from "@/lib/content";

export default function Home() {
  const site = getSiteContent();
  const hero = getHeroContent();
  const services = getServicesContent();
  const about = getAboutContent();
  const process = getProcessContent();
  const pricing = getPricingContent();
  const faq = getFaqContent();
  const contact = getContactContent();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "Organization", "@id": "https://bridgestackstudio.com/#organization", name: site.brand, url: "https://bridgestackstudio.com/", logo: "https://bridgestackstudio.com/brand/mark.png", email: contact.email, telephone: contact.phoneHref, description: "Independent web design and development studio serving small businesses across Indiana.", areaServed: { "@type": "State", name: "Indiana" } },
          { "@type": "WebSite", "@id": "https://bridgestackstudio.com/#website", url: "https://bridgestackstudio.com/", name: site.brand, inLanguage: "en-US", publisher: { "@id": "https://bridgestackstudio.com/#organization" } },
          { "@type": "Service", "@id": "https://bridgestackstudio.com/#web-design", name: "Indiana small business web design and development", serviceType: "Custom website design, development, hosting, and maintenance", provider: { "@id": "https://bridgestackstudio.com/#organization" }, areaServed: { "@type": "State", name: "Indiana" }, url: "https://bridgestackstudio.com/#services" }
        ]
      }).replace(/</g, "\\u003c") }} />
      <ReferralBanner />
      <Header site={site} />
      <main id="main-content" tabIndex={-1}>
        <div id="top" />
        <Hero hero={hero} />
        <Services services={services} />
        <About about={about} />
        <Process process={process} />
        <Pricing pricing={pricing} />
        <Faq faq={faq} />
        <Contact contact={contact} />
      </main>
      <Footer site={site} contact={contact} />
      <WhatsAppChat phone={contact.phoneHref} />
    </>
  );
}
