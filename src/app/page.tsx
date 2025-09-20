import AboutSection from "@/components/about-section";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import PricingSection from "@/components/pricing-section";
import ServicesSection from "@/components/services-section";

export default function Home() {
	return (
		<div className="relative grid min-w-md grid-cols-[64px_1fr]">
			<Navbar />
			<div className="flex flex-1 flex-col px-4 sm:px-8">
				<Header />
				<HeroSection />
				<AboutSection />
				<ServicesSection />
				<PricingSection />
			</div>
		</div>
	);
}
