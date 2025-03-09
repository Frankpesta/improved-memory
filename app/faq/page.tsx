import FAQAccordion from "@/components/faq/faq-section";
import PageHeader from "@/components/page-header";

const Page = () => {
	return (
		<div className="container mx-auto bg-gradient-to-b from-primary-50 to-white dark:from-primary-950/50 dark:to-background">
			<PageHeader
				title="Frequently Asked Questions (FAQ) – Credix AI"
				description="At Credix AI, we understand that new investors may have questions about how our AI trading system works, how investments are managed, and how profits are earned. Below, we’ve compiled a list of frequently asked questions to provide clarity and ensure you have all the information you need before getting started."
				align="center"
			/>
			<FAQAccordion />
		</div>
	);
};

export default Page;
