export interface PlanTier {
	minTrading: number;
	/** `null` = no upper cap (e.g. $100,000+) */
	maxTrading: number | null;
	dailyReturn: number;
}

export const PLAN_TIERS: PlanTier[] = [
	{ minTrading: 100, maxTrading: 9999, dailyReturn: 2 },
	{ minTrading: 10000, maxTrading: 29999, dailyReturn: 3 },
	{ minTrading: 30000, maxTrading: 49999, dailyReturn: 4 },
	{ minTrading: 50000, maxTrading: 99999, dailyReturn: 5 },
	{ minTrading: 100000, maxTrading: null, dailyReturn: 6 },
];

export const HIGHEST_PLAN_MIN = 100_000;

export const DAILY_RETURN_MIN = PLAN_TIERS[0].dailyReturn;
export const DAILY_RETURN_MAX =
	PLAN_TIERS[PLAN_TIERS.length - 1].dailyReturn;

export function findPlanTier(amount: number): PlanTier | undefined {
	return PLAN_TIERS.find((tier) => {
		if (tier.maxTrading === null) {
			return amount >= tier.minTrading;
		}
		return amount >= tier.minTrading && amount <= tier.maxTrading;
	});
}

export function formatPlanRange(tier: PlanTier): string {
	if (tier.maxTrading === null) {
		return "$100,000+";
	}
	return `$${tier.minTrading.toLocaleString()} - $${tier.maxTrading.toLocaleString()}`;
}

export function formatPlanRangeShort(tier: PlanTier): string {
	if (tier.minTrading >= HIGHEST_PLAN_MIN) {
		return "$100K+";
	}
	return formatPlanRange(tier);
}

export function formatPlanFaqLine(tier: PlanTier): string {
	return `${formatPlanRange(tier)} earns ${tier.dailyReturn}% daily for 90 days, plus capital.`;
}

export function formatPlanTrustPoint(tier: PlanTier): string {
	return `💰 ${formatPlanRange(tier)} → ${tier.dailyReturn}% daily for 90 days`;
}
