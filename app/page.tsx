import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
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
  getStackContent,
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
  const stack = getStackContent();
  const services = getServicesContent();
  const about = getAboutContent();
  const process = getProcessContent();
  const pricing = getPricingContent();
  const faq = getFaqContent();
  const contact = getContactContent();

  return (
    <>
      <Header site={site} />
      <main id="top">
        <Hero hero={hero} />
        <TechStack stack={stack} />
        <Services services={services} />
        <About about={about} />
        <Process process={process} />
        <Pricing pricing={pricing} />
        <Faq faq={faq} />
        <Contact contact={contact} />
      </main>
      <Footer site={site} />
    </>
  );
}
