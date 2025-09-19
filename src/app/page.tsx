import AboutSection from "@/components/about-section";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";

export default function Home() {
	return (
		<>
			<Header />
			<HeroSection />
			<AboutSection />
			<ServicesSection />
		</>
	);
}
