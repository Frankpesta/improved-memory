export interface PlanTier {
	name: string;
	badge: string;
	minTrading: number;
	/** `null` = no upper cap (e.g. $100,000+) */
	maxTrading: number | null;
	dailyReturn: number;
}

/** Bronze plan removed — five active tiers aligned with the platform. */
export const PLAN_TIERS: PlanTier[] = [
	{
		name: "Starter Plan",
		badge: "Novice",
		minTrading: 10,
		maxTrading: 4999,
		dailyReturn: 2,
	},
	{
		name: "Silver Plan",
		badge: "Star",
		minTrading: 5000,
		maxTrading: 19999,
		dailyReturn: 4,
	},
	{
		name: "Gold Plan",
		badge: "Pioneer",
		minTrading: 20000,
		maxTrading: 49999,
		dailyReturn: 5,
	},
	{
		name: "Diamond Plan",
		badge: "Elite",
		minTrading: 50000,
		maxTrading: 99999,
		dailyReturn: 6,
	},
	{
		name: "Elite Plan",
		badge: "Master",
		minTrading: 100000,
		maxTrading: 1_000_000,
		dailyReturn: 8,
	},
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
		return `$${tier.minTrading.toLocaleString()}+`;
	}
	return `$${tier.minTrading.toLocaleString()} - $${tier.maxTrading.toLocaleString()}`;
}

export function formatPlanRangeShort(tier: PlanTier): string {
	if (tier.maxTrading === null && tier.minTrading >= HIGHEST_PLAN_MIN) {
		return "$100K+";
	}
	return formatPlanRange(tier);
}

export function formatPlanFaqLine(tier: PlanTier): string {
	return `${tier.name} (${formatPlanRange(tier)}) earns ${tier.dailyReturn}% daily for 90 days, plus capital.`;
}

export function formatPlanTrustPoint(tier: PlanTier): string {
	return `💰 ${tier.name}: ${formatPlanRange(tier)} → ${tier.dailyReturn}% daily for 90 days`;
}
