"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag, Clock, Share2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import parse from "html-react-parser";

interface Blog {
	id: number;
	title: string;
	cover: string;
	details: string;
	author?: string;
	date?: string;
	tags?: string[];
	updatedAt?: string;
}

export default function BlogDetail({
	initialBlog = null,
}: {
	initialBlog?: Blog | null;
}) {
	const { id } = useParams();
	const router = useRouter();
	const [blog, setBlog] = useState<Blog | null>(initialBlog);
	const [loading, setLoading] = useState<boolean>(!initialBlog);
	const [relatedPosts, setRelatedPosts] = useState([]);

	useEffect(() => {
		// If we already have initial data from ISR, skip client-side fetch
		if (initialBlog) {
			setBlog(initialBlog);
			setLoading(false);
			return;
		}

		const fetchBlog = async () => {
			try {
				const response = await fetch(
					`https://app.credixai.com/api/blogs/${id}`
				);
				const data = await response.json();
				setBlog(data?.blog || null);
			} catch (error) {
				console.error("Error fetching blog:", error);
			} finally {
				setLoading(false);
			}
		};

		if (id) {
			fetchBlog();
		}
	}, [id, initialBlog]);

	// Calculate reading time for the blog post
	const readingTime = blog?.details
		? Math.max(
				1,
				Math.ceil(
					blog.details.replace(/<\/?[^>]+(>|$)/g, "").split(/\s+/).length / 200
				)
		  )
		: 0;

	// Extract keywords for better SEO
	const keywords = blog?.details
		? blog.details
				.replace(/<\/?[^>]+(>|$)/g, "")
				.split(/\W+/)
				.filter((word) => word.length > 4)
				.slice(0, 10)
				.join(", ")
		: "";

	// Share functionality
	const handleShare = () => {
		if (navigator.share) {
			navigator.share({
				title: blog?.title || "Blog Post",
				text: `Check out this article: ${blog?.title}`,
				url: window.location.href,
			});
		} else {
			// Fallback for browsers that don't support navigator.share
			navigator.clipboard
				.writeText(window.location.href)
				.then(() => alert("Link copied to clipboard!"))
				.catch((err) => console.error("Failed to copy link:", err));
		}
	};

	if (loading) {
		return <BlogSkeleton />;
	}

	if (!blog) {
		return (
			<div className="container mx-auto px-4 py-12 text-center">
				<h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
				<Link href="/blogs" passHref>
					<Button variant="outline">
						<ArrowLeft className="mr-2 h-4 w-4" />
						Back to Blogs
					</Button>
				</Link>
			</div>
		);
	}

	// Clean content by removing p tags but preserving other HTML
	const cleanContent = blog.details.replace(/<\/?p>/g, "");

	return (
		<>
			{/* Add structured data for this blog post */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BlogPosting",
						headline: blog.title,
						image: blog.cover,
						datePublished: blog.date || new Date().toISOString(),
						dateModified: blog.updatedAt || new Date().toISOString(),
						author: {
							"@type": "Person",
							name: blog.author || "Blog Author",
						},
						publisher: {
							"@type": "Organization",
							name: "Your Blog Name",
							logo: {
								"@type": "ImageObject",
								url: "https://credixai.com/logo.png",
							},
						},
						description: blog.details
							.replace(/<\/?[^>]+(>|$)/g, "")
							.substring(0, 160),
						mainEntityOfPage: {
							"@type": "WebPage",
							"@id": `https://credixai.com/blog/${blog.id}`,
						},
						keywords: keywords,
					}),
				}}
			/>

			<article className="container mx-auto px-4 py-12 max-w-4xl">
				<Link href="/blogs" passHref>
					<Button variant="ghost" className="mb-6 -ml-2">
						<ArrowLeft className="mr-2 h-4 w-4" />
						Back to Blogs
					</Button>
				</Link>

				<header className="mb-8">
					{/* Main heading with keywords for SEO */}
					<h1 className="text-3xl md:text-4xl font-bold mb-4">{blog.title}</h1>

					<div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6 text-sm">
						{blog.author && (
							<div className="flex items-center">
								<User className="h-4 w-4 mr-1" />
								<span itemProp="author">{blog.author}</span>
							</div>
						)}
						{blog.date && (
							<div className="flex items-center">
								<Calendar className="h-4 w-4 mr-1" />
								<time
									dateTime={new Date(blog.date).toISOString()}
									itemProp="datePublished">
									{blog.date}
								</time>
							</div>
						)}
						<div className="flex items-center">
							<Clock className="h-4 w-4 mr-1" />
							<span>{readingTime} min read</span>
						</div>
						<Button
							variant="ghost"
							size="sm"
							className="p-0 h-8"
							onClick={handleShare}>
							<Share2 className="h-4 w-4 mr-1" />
							Share
						</Button>
					</div>

					{/* Tags for SEO and categorization */}
					{blog.tags && blog.tags.length > 0 && (
						<div className="flex flex-wrap gap-2 mb-4">
							{blog.tags.map((tag) => (
								<span
									key={tag}
									className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
									<Tag className="h-3 w-3 mr-1" />
									{tag}
								</span>
							))}
						</div>
					)}

					{/* Hidden meta keywords for SEO */}
					<meta name="keywords" content={keywords} />
				</header>

				{blog.cover && (
					<figure className="mb-8 rounded-lg overflow-hidden">
						<img
							src={`https://app.credixai.com/assets/${blog.cover}`}
							alt={`${blog.title} - Featured Image`}
							className="w-full h-auto object-cover max-h-[500px]"
							itemProp="image"
						/>
						<figcaption className="text-sm text-muted-foreground mt-2 text-center">
							Featured image for {blog.title}
						</figcaption>
					</figure>
				)}

				{/* Blog content with semantic HTML */}
				<section
					className="prose dark:prose-invert max-w-none"
					itemProp="articleBody">
					{parse(blog.details)}
				</section>

				{/* Author bio section for E-A-T signals */}
				{blog.author && (
					<div className="mt-12 p-6 border rounded-lg bg-card">
						<h2 className="text-xl font-bold mb-4">About the Author</h2>
						<div className="flex items-start gap-4">
							<div className="rounded-full bg-muted h-16 w-16 flex items-center justify-center">
								<User className="h-8 w-8 text-muted-foreground" />
							</div>
							<div>
								<h3 className="font-medium">{blog.author}</h3>
								<p className="text-muted-foreground text-sm mt-1">
									Expert writer with years of experience in the industry. Follow
									for more insights on this topic.
								</p>
							</div>
						</div>
					</div>
				)}

				{/* Comments section for user engagement */}
			</article>
		</>
	);
}

function BlogSkeleton() {
	return (
		<div className="container mx-auto px-4 py-12 max-w-4xl">
			<Skeleton className="h-10 w-32 mb-6" />
			<Skeleton className="h-12 w-full mb-4" />
			<div className="flex gap-4 mb-6">
				<Skeleton className="h-5 w-24" />
				<Skeleton className="h-5 w-24" />
				<Skeleton className="h-5 w-24" />
			</div>
			<Skeleton className="h-[400px] w-full mb-8" />
			<div className="space-y-4">
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-3/4" />
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-5/6" />
			</div>
		</div>
	);
}
