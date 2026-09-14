import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

/**
 * Reads a markdown file's YAML frontmatter and returns it as typed data.
 * All copy for this site lives in frontmatter fields (no markdown body is
 * used), so editors can change text without touching component code.
 */
function readContent<T>(fileName: string): T {
  const filePath = path.join(CONTENT_DIR, fileName);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data } = matter(raw);
  return data as T;
}

export interface HeroContent {
  eyebrow: string;
  headlineLines: string[];
  headlineAccent: string;
  lead: string;
  ctaSecondary: string;
}

export interface StackContent {
  eyebrow: string;
  description: string;
  layers: { tag: string; name: string }[];
}

export interface ServicesContent {
  eyebrow: string;
  heading: string;
  description: string;
  cards: { num: string; title: string; body: string }[];
}

export interface AboutContent {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  stats: { value: string; label: string }[];
  compareEyebrow: string;
  compareTemplate: { heading: string; items: string[] };
  compareBridge: { heading: string; items: string[] };
}

export interface ProcessContent {
  eyebrow: string;
  heading: string;
  description: string;
  stages: { key: string; title: string; body: string }[];
}

export interface PricingPlan {
  key: string;
  title: string;
  desc: string;
  price: string;
  priceNote: string;
  popular: boolean;
  features: string[];
}

export interface PricingContent {
  eyebrow: string;
  heading: string;
  description: string;
  plans: PricingPlan[];
}

export interface FaqContent {
  eyebrow: string;
  heading: string;
  description: string;
  items: { q: string; a: string }[];
}

export interface ContactContent {
  eyebrow: string;
  heading: string;
  description: string;
  email: string;
  emailNote: string;
  phone: string;
  phoneHref: string;
  phoneNote: string;
  location: string;
}

export interface SiteContent {
  brand: string;
  nav: { label: string; href: string }[];
  navCta: string;
  footerCopyright: string;
  footerCredit: string;
}

export const getHeroContent = () => readContent<HeroContent>("hero.md");
export const getStackContent = () => readContent<StackContent>("stack.md");
export const getServicesContent = () =>
  readContent<ServicesContent>("services.md");
export const getAboutContent = () => readContent<AboutContent>("about.md");
export const getProcessContent = () =>
  readContent<ProcessContent>("process.md");
export const getPricingContent = () =>
  readContent<PricingContent>("pricing.md");
export const getFaqContent = () => readContent<FaqContent>("faq.md");
export const getContactContent = () =>
  readContent<ContactContent>("contact.md");
export const getSiteContent = () => readContent<SiteContent>("site.md");
