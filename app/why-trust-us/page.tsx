import PageHeader from "@/components/page-header";
import WhyTrustUs from "@/components/why-trust-us/why-trust-us";

const Page = () => {
	return (
		<div className="container mx-auto bg-gradient-to-b from-primary-50 to-white dark:from-primary-950/50 dark:to-background">
			<PageHeader
				title="Why Trust Us"
				description="At Fidelity Trades AI, we understand that trust is the foundation of any successful investment. That’s why we have built a transparent, secure, and profitable AI-driven trading platform designed to give investors peace of mind and consistent returns. Here’s why thousands of investors trust us with their capital."
				align="center"
			/>
			<WhyTrustUs />
		</div>
	);
};

export default Page;
