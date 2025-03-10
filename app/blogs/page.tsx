import { Metadata } from "next";

interface Blog {
	id: string;
	title: string;
	details: string;
	cover: string;
}
import { Suspense } from "react";
import Blogs from "@/components/blogs";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata: Metadata = {
	title: "Blog Articles | CredixAI Insights",
	description:
		"Explore our collection of expert articles, insights, and analysis on the latest trends and topics.",
	openGraph: {
		title: "Blog Articles | CredixAI Insights",
		description:
			"Explore our collection of expert articles, insights, and analysis on the latest trends and topics.",
		type: "website",
		images: [
			{
				url: "/logo.png",
				width: 1200,
				height: 630,
				alt: "CredixAI Blog Articles",
			},
		],
	},
};

// Fetch blogs with ISR
async function fetchBlogs() {
	try {
		const response = await fetch("https://app.credixai.com/api/blogs", {
			next: { revalidate: 600 }, // Revalidate ten minutes
		});

		if (!response.ok) {
			throw new Error(`Failed to fetch blogs: ${response.status}`);
		}

		const data = await response.json();
		return data?.data || [];
	} catch (error) {
		console.error("Error fetching blogs:", error);
		return [];
	}
}

export default async function BlogsPage() {
	// Fetch blogs on the server with ISR
	const blogs = await fetchBlogs();

	return (
		<main>
			<Suspense fallback={<BlogsLoading />}>
				<Blogs initialBlogs={blogs} />

				{/* Add structured data for blog listing */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "CollectionPage",
							name: "Blog Articles | CredixAI Insights",
							description:
								"Explore our collection of expert articles, insights, and analysis on the latest trends and topics.",
							url: "https://app.credixai.com/blogs",
							mainEntity: {
								"@type": "ItemList",
								itemListElement: blogs.map((blog: Blog, index: number) => ({
									"@type": "ListItem",
									position: index + 1,
									url: `https://app.credixai.com/blog/${blog.id}`,
									name: blog.title,
								})),
							},
						}),
					}}
				/>
			</Suspense>
		</main>
	);
}

function BlogsLoading() {
	return (
		<div className="container mx-auto px-4 py-12">
			<Skeleton className="h-16 w-64 mx-auto mb-12" />
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{Array(6)
					.fill(0)
					.map((_, i) => (
						<div key={i} className="space-y-4">
							<Skeleton className="h-52 w-full" />
							<Skeleton className="h-8 w-3/4" />
							<Skeleton className="h-20 w-full" />
							<Skeleton className="h-10 w-full" />
						</div>
					))}
			</div>
		</div>
	);
}
