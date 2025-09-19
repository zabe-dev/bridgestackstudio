import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";

export default function Home() {
	return (
		<>
			<Navbar />
			<div className="relative flex flex-1 flex-col px-4 sm:px-8">
				<Header />
				<HeroSection />
			</div>
		</>
	);
}
