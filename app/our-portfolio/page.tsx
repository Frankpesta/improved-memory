import PageHeader from "@/components/page-header";
import PortfolioPage from "@/components/portfolio/portolio-section";

const Page = () => {
	return (
		<div className="container mx-auto bg-gradient-to-b from-primary-50 to-white dark:from-primary-950/50 dark:to-background">
			<PageHeader
				title="Our Portfolio – Fidelity Trades AI"
				description="At Fidelity Trades AI, our AI-powered trading technology delivers consistent returns by leveraging the best market opportunities. Our diversified portfolio ensures stable and profitable investment cycles, making us a trusted choice for over 18,000+ investors worldwide. Below is an overview of our investment portfolio, including our AI trading strategies, capital allocations, and historical performance."
				align="center"
			/>
			<PortfolioPage />
		</div>
	);
};

export default Page;
