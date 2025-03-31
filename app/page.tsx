import EarningsGuarantee from "@/components/home/earnings-guarantee";
import HeroSection from "@/components/home/hero-section";
import HowItWorks from "@/components/home/how-it-works";
import CapitalProtectionStats from "@/components/home/in-numbers";
import LeadershipTeam from "@/components/home/leadership-team";
import MissionVisionSection from "@/components/home/misson-vision";
import TradingPlans from "@/components/home/pricing";
import FeaturesSection from "@/components/home/why-choose-us";

export default function Home() {
	return (
		<div>
			<HeroSection />
			<FeaturesSection />
			<MissionVisionSection />
			<TradingPlans />
			<EarningsGuarantee />
			<HowItWorks />
			<CapitalProtectionStats />
			<LeadershipTeam />
		</div>
	);
}
