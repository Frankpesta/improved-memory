import type { Metadata } from "next";
import BlogDetail from "@/components/blog-detail";

// Define the Blog interface
interface Blog {
	id: number;
	title: string;
	details: string;
	cover: string;
	date: string;
}

// This function tells Next.js which routes to pre-generate at build time
export async function generateStaticParams() {
	try {
		// Fetch all blog posts to get their IDs
		const response = await fetch("https://app.credixai.com/api/blogs", {
			next: { revalidate: 3600 }, // Revalidate data every hour
		});
		const data = await response.json();
		const blogs = data?.data || [];

		// Return an array of objects with the id parameter
		return blogs.map((blog: Blog) => ({
			id: blog.id.toString(),
		}));
	} catch (error) {
		console.error("Error fetching blogs for static generation:", error);
		return []; // Return empty array if fetch fails
	}
}

// Optional: Add metadata for SEO
export async function generateMetadata({
	params,
}: {
	params: { id: string };
}): Promise<Metadata> {
	try {
		const response = await fetch(
			`https://app.credixai.com/api/blogs/${params.id}`,
			{
				next: { revalidate: 3600 }, // Revalidate data every hour
			}
		);
		const data = await response.json();
		console.log(data);
		const blog = data?.blog;

		if (!blog) {
			return {
				title: "Blog Post Not Found",
			};
		}

		return {
			title: blog.title,
			description: blog.details.replace(/<\/?p>/g, "").substring(0, 160),
		};
	} catch (error) {
		return {
			title: "Blog Post",
		};
	}
}

// Server component that fetches blog data
async function BlogPage({ params }: { params: { id: string } }) {
	// Fetch blog data on the server
	const blogData = await fetchBlogData(params.id);

	// Pass the pre-fetched data to the client component
	return <BlogDetail initialBlog={blogData} />;
}

// Server-side data fetching function with ISR
async function fetchBlogData(id: string) {
	try {
		const response = await fetch(`https://app.credixai.com/api/blogs/${id}`, {
			next: { revalidate: 3600 }, // Revalidate this data every hour
		});

		if (!response.ok) {
			throw new Error(`Failed to fetch blog: ${response.status}`);
		}

		const data = await response.json();
		return data?.blog || null;
	} catch (error) {
		console.error("Error fetching blog data:", error);
		return null;
	}
}

export default BlogPage;
