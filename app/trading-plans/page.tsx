import TradingPlans from "@/components/home/pricing";
import PageHeader from "@/components/page-header";
import TradingPlansProcess from "@/components/trading-plans/investment-plans";

const Page = () => {
	return (
		<div className="container mx-auto bg-gradient-to-b from-primary-50 to-white dark:from-primary-950/50 dark:to-background">
			<PageHeader
				title="Trading Plans – Credix AI"
				description="At Credix AI, we offer a range of trading plans designed to suit different levels of investors, from beginners to high-net-worth individuals. Our AI-powered trading system ensures consistent daily returns, and our risk management strategies guarantee that your capital remains protected. With our automated AI trading, your funds work for you 24/7, generating passive income while you sit back and watch your portfolio grow."
				align="center"
			/>
			<TradingPlansProcess />
			<TradingPlans />
		</div>
	);
};

export default Page;
