import React from "react";
import { Shield, Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const EarningsGuarantee = () => {
	return (
		<section className="py-16 bg-gradient-to-b from-white to-neutral-50 dark:from-dark-400 dark:to-dark-300">
			<div className="container mx-auto px-4">
				<div className="max-w-7xl mx-auto">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						{/* Left side - Visual representation */}
						<div className="relative">
							<Card className="bg-white dark:bg-dark-200 overflow-hidden">
								<CardContent className="p-0">
									<div className="p-8">
										<div className="flex flex-col space-y-6">
											{/* Normal Trading Period */}
											<div className="flex items-center space-x-4">
												<div className="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center">
													<Calendar className="h-8 w-8 text-primary-600" />
												</div>
												<div>
													<h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
														Standard Period
													</h3>
													<p className="text-neutral-600 dark:text-neutral-400">
														90 Days Trading Cycle
													</p>
												</div>
											</div>

											<div className="h-8 border-l-2 border-dashed border-primary-300 ml-8" />

											{/* Loss Protection */}
											<div className="flex items-center space-x-4">
												<div className="w-16 h-16 rounded-full bg-accent-100 dark:bg-accent-900/20 flex items-center justify-center">
													<Shield className="h-8 w-8 text-accent-600" />
												</div>
												<div>
													<h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
														Loss Protection
													</h3>
													<p className="text-neutral-600 dark:text-neutral-400">
														Extra Day Added
													</p>
												</div>
											</div>

											<div className="h-8 border-l-2 border-dashed border-primary-300 ml-8" />

											{/* Final Result */}
											<div className="flex items-center space-x-4">
												<div className="w-16 h-16 rounded-full bg-success-100 dark:bg-success-900/20 flex items-center justify-center">
													<ArrowRight className="h-8 w-8 text-success-600" />
												</div>
												<div>
													<h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
														Guaranteed Returns
													</h3>
													<p className="text-neutral-600 dark:text-neutral-400">
														Full Profit Cycle
													</p>
												</div>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>

						{/* Right side - Text content */}
						<div className="space-y-6">
							<h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50">
								How We Ensure You Never Lose a Day's Earnings
							</h2>

							<div className="space-y-4">
								<p className="text-lg text-neutral-700 dark:text-neutral-300">
									If there's ever a day where the AI BOT experiences an
									unprofitable trade, we extend your trading period by one extra
									day, ensuring that you never miss a day of earnings.
								</p>

								<p className="text-lg text-neutral-700 dark:text-neutral-300">
									This means if you were supposed to earn for 90 days and there
									was one unprofitable day, your trading period automatically
									extends to 91 days, so you always receive the full expected
									returns.
								</p>

								<div className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-lg border border-primary-100 dark:border-primary-800">
									<p className="text-lg font-semibold text-primary-900 dark:text-primary-100">
										With Credix AI, your capital is secure, and your profits are
										guaranteed.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EarningsGuarantee;
