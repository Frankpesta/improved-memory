import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	output: "export",
	trailingSlash: true, // Adds trailing slashes to avoid 404 errors
	images: {
		unoptimized: true, // Ensures images work without optimization
	},
};

export default nextConfig;
