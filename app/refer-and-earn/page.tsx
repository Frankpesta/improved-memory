import PageHeader from "@/components/page-header";
import BenefitsSection from "@/components/refer/benefits-section";
import BonusStructureSection from "@/components/refer/bonus-structure";
import CTASection from "@/components/refer/cta";
import GetStartedSection from "@/components/refer/get-started";
import HowItWorksSection from "@/components/refer/how-it-works";
import TipsSection from "@/components/refer/tips";

const Page = () => {
	return (
		<div className="container mx-auto bg-gradient-to-b from-primary-50 to-white dark:from-primary-950/50 dark:to-background">
			<PageHeader
				title="Refer & Earn – Grow Your Wealth with Fidelity Trades AI"
				description="At Fidelity Trades AI, we believe in rewarding our investors not just through daily returns but also by offering an exciting referral program. Our Refer & Earn program allows you to earn additional income by inviting others to invest with us. It's simple, rewarding, and a great way to maximize your earnings while helping others benefit from AI-powered crypto trading."
				align="center"
			/>
			<HowItWorksSection />
			<BonusStructureSection />
			<BenefitsSection />
			<GetStartedSection />
			<TipsSection />
			<CTASection />
		</div>
	);
};

export default Page;
