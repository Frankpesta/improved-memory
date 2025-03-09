import { Suspense } from "react";
import Blogs from "@/components/blogs";
import { Skeleton } from "@/components/ui/skeleton";

// Fetch blogs with ISR
async function fetchBlogs() {
	try {
		const response = await fetch("https://app.credixai.com/api/blogs", {
			next: { revalidate: 3600 }, // Revalidate every hour
		});

		if (!response.ok) {
			throw new Error(`Failed to fetch blogs: ${response.status}`);
		}

		const data = await response.json();
		console.log(data?.data);
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
		<Suspense fallback={<BlogsLoading />}>
			<Blogs initialBlogs={blogs} />
		</Suspense>
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
