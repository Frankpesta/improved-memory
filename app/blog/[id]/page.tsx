import { Metadata } from "next";
import BlogDetail from "@/components/blog-detail";

// Define the Blog type
type Blog = {
	id: number;
	title: string;
	details: string;
	author?: string;
	cover: string;
	updatedAt?: string;
};

// This function tells Next.js which routes to pre-generate at build time
export async function generateStaticParams() {
	try {
		const response = await fetch("https://app.credixai.com/api/blogs", {
			next: { revalidate: 600 },
		});
		const data = await response.json();
		const blogs = data?.data || [];

		return blogs.map((blog: Blog) => ({
			id: blog.id.toString(),
		}));
	} catch (error) {
		console.error("Error fetching blogs for static generation:", error);
		return [];
	}
}

// Enhanced metadata for SEO
export async function generateMetadata({
	params,
}: {
	params: { id: string };
}): Promise<Metadata> {
	try {
		const response = await fetch(
			`https://app.credixai.com/api/blogs/${params.id}`,
			{
				next: { revalidate: 600 },
			}
		);
		const data = await response.json();
		const blog = data?.blog;

		if (!blog) {
			return {
				title: "Blog Post Not Found",
			};
		}

		// Extract plain text for description
		const plainText = blog.details.replace(/<\/?[^>]+(>|$)/g, "");
		const description = plainText.substring(0, 160);

		// Extract keywords from content
		const keywords = extractKeywords(plainText);

		return {
			title: blog.title,
			description: description,
			keywords: keywords.join(", "),
			openGraph: {
				title: blog.title,
				description: description,
				url: `https://credixai.com/blog/${params.id}`,
				type: "article",
				publishedTime: blog.date || new Date().toISOString(),
				authors: blog.author ? [blog.author] : "Credixai Team",
				images: [
					{
						url: `https://app.credixai.com/assets/${blog.cover}`,
						width: 1200,
						height: 630,
						alt: blog.title,
					},
				],
			},
			twitter: {
				card: "summary_large_image",
				title: blog.title,
				description: description,
				images: [`https://app.credixai.com/assets/${blog.cover}`],
			},
		};
	} catch (error) {
		return {
			title: "Blog Post",
		};
	}
}

// Helper function to extract keywords from content
function extractKeywords(text: string): string[] {
	// Simple implementation - in production you might use NLP libraries
	const words = text.toLowerCase().split(/\W+/);
	const stopWords = new Set([
		"the",
		"and",
		"a",
		"an",
		"in",
		"on",
		"at",
		"to",
		"for",
		"of",
		"with",
	]);
	const wordCount: { [key: string]: number } = {};

	words.forEach((word) => {
		if (word.length > 3 && !stopWords.has(word)) {
			wordCount[word] = (wordCount[word] || 0) + 1;
		}
	});

	return Object.entries(wordCount)
		.sort((a, b) => b[1] - a[1])
		.slice(0, 10)
		.map((entry) => entry[0]);
}

// Server component that fetches blog data
async function BlogPage({ params }: { params: { id: string } }) {
	// Fetch blog data on the server
	const blogData = await fetchBlogData(params.id);

	// Fetch related posts for internal linking
	//   const relatedPosts = await fetchRelatedPosts(params.id);

	return (
		<main>
			<BlogDetail initialBlog={blogData} />

			{/* Add structured data for this blog post */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BlogPosting",
						headline: blogData?.title,
						image: blogData?.cover,
						datePublished: blogData?.date || new Date().toISOString(),
						dateModified: blogData?.updatedAt || new Date().toISOString(),
						author: {
							"@type": "Person",
							name: blogData?.author || "CredixAI Team",
						},
						publisher: {
							"@type": "Organization",
							name: "CredixAI",
							logo: {
								"@type": "ImageObject",
								url: "https://credixai.com/logo.png",
							},
						},
						description: blogData?.details
							?.replace(/<\/?[^>]+(>|$)/g, "")
							.substring(0, 160),
						mainEntityOfPage: {
							"@type": "WebPage",
							"@id": `https://credixai.com/blog/${params.id}`,
						},
					}),
				}}
			/>
		</main>
	);
}

// Server-side data fetching function with ISR
async function fetchBlogData(id: string) {
	try {
		const response = await fetch(`https://app.credixai.com/api/blogs/${id}`, {
			next: { revalidate: 600 },
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

// Fetch related posts for internal linking
// async function fetchRelatedPosts(currentId: string) {
//   try {
//     const response = await fetch(`https://app.credixai.com/api/blogs`, {
//       next: { revalidate: 600 }
//     });

//     if (!response.ok) {
//       return [];
//     }

//     const data = await response.json();
//     const allPosts = data?.data || [];

//     // Filter out current post and limit to 4 related posts
//     return allPosts
//       .filter(post => post.id.toString() !== currentId)
//       .slice(0, 4);
//   } catch (error) {
//     console.error("Error fetching related posts:", error);
//     return [];
//   }
// }

export default BlogPage;
