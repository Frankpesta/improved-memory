export interface PlanTier {
	name: string;
	badge: string;
	minTrading: number;
	/** `null` = no upper cap (e.g. $100,000+) */
	maxTrading: number | null;
	dailyReturn: number;
	durationDays: number;
}

export const PLAN_TIERS: PlanTier[] = [
	{
		name: "Starter Plan",
		badge: "Novice",
		minTrading: 50,
		maxTrading: 999,
		dailyReturn: 2,
		durationDays: 14,
	},
	{
		name: "Silver Plan",
		badge: "Star",
		minTrading: 1000,
		maxTrading: 9999,
		dailyReturn: 4,
		durationDays: 14,
	},
	{
		name: "Gold Plan",
		badge: "Pioneer",
		minTrading: 10000,
		maxTrading: 49999,
		dailyReturn: 5,
		durationDays: 14,
	},
	{
		name: "Diamond Plan",
		badge: "Elite",
		minTrading: 50000,
		maxTrading: 999999,
		dailyReturn: 6,
		durationDays: 14,
	},
];

export const HIGHEST_PLAN_MIN = PLAN_TIERS[PLAN_TIERS.length - 1].minTrading;

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
		return `$${tier.minTrading.toLocaleString()}+`;
	}
	return `$${tier.minTrading.toLocaleString()} - $${tier.maxTrading.toLocaleString()}`;
}

export function formatPlanRangeShort(tier: PlanTier): string {
	if (tier.maxTrading === null && tier.minTrading >= HIGHEST_PLAN_MIN) {
		return `$${(tier.minTrading / 1000).toLocaleString()}K+`;
	}
	return formatPlanRange(tier);
}

export function formatPlanFaqLine(tier: PlanTier): string {
	return `${tier.name} (${formatPlanRange(tier)}) earns ${tier.dailyReturn}% daily for ${tier.durationDays} days, plus capital.`;
}

export function formatPlanTrustPoint(tier: PlanTier): string {
	return `💰 ${tier.name}: ${formatPlanRange(tier)} → ${tier.dailyReturn}% daily for ${tier.durationDays} days`;
}
