"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, BookOpen, ChevronRight, Calendar } from "lucide-react";

interface Blog {
	id: number;
	title: string;
	cover: string;
	details: string;
	author?: string;
	date?: string;
}

// Modified to accept initial data from server component
export default function Blogs({
	initialBlogs = [],
}: {
	initialBlogs?: Blog[];
}) {
	const [blogs, setBlogs] = useState<Blog[]>(initialBlogs);
	const [loading, setLoading] = useState<boolean>(!initialBlogs.length);

	useEffect(() => {
		// If we already have initial data, skip client-side fetch
		if (initialBlogs.length > 0) {
			setLoading(false);
			return;
		}

		const fetchBlogs = async () => {
			try {
				const response = await fetch("https://app.credixhub.com/api/blogs");
				const data = await response.json();
				setBlogs(data?.data || []);
			} catch (error) {
				console.error("Error fetching blogs:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchBlogs();
	}, [initialBlogs]);

	return (
		<div className="container mx-auto px-4 py-12">
			{/* Hero Header Section - Enhanced with more semantic HTML */}
			<header className="mb-12 text-center">
				<h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-500 to-green-600 bg-clip-text text-transparent dark:from-primary-500 dark:to-green-400">
					Insights & Perspectives
				</h1>
				<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
					Discover the latest trends, insights, and expert opinions on topics
					that matter to you.
				</p>
			</header>

			{/* Loading State */}
			{loading ? (
				<div
					className="flex flex-col items-center justify-center py-12"
					aria-live="polite"
					aria-busy="true">
					<Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
					<p className="text-muted-foreground">Loading fresh content...</p>
				</div>
			) : (
				<>
					{/* Blog Grid - Enhanced with semantic HTML and accessibility */}
					<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{blogs.map((blog) => (
							<article key={blog.id} className="h-full">
								<Card className="overflow-hidden border border-border/40 transition-all duration-200 hover:shadow-md hover:border-primary-500/20 dark:hover:shadow-lg dark:hover:shadow-primary-500/5 dark:hover:border-primary-500/30 dark:bg-card h-full flex flex-col">
									<div className="relative h-52 overflow-hidden border-b border-border/10 dark:border-border/20">
										<img
											src={`https://app.credixhub.com/assets/${blog.cover}`}
											alt={`Featured image for ${blog.title}`}
											className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
											loading="lazy"
										/>
									</div>
									<CardHeader className="pb-2">
										<CardTitle className="text-xl">
											<Link
												href={`/blog/${blog.id}`}
												className="hover:text-primary transition-colors"
												title={blog.title}>
												{blog.title}
											</Link>
										</CardTitle>
										{blog.date && (
											<div className="flex items-center text-sm text-muted-foreground mt-1">
												<Calendar className="h-3.5 w-3.5 mr-1" />
												<time dateTime={new Date(blog.date).toISOString()}>
													{new Date(blog.date).toLocaleDateString("en-US", {
														year: "numeric",
														month: "long",
														day: "numeric",
													})}
												</time>
											</div>
										)}
									</CardHeader>
									<CardContent className="flex-grow">
										<div
											className="text-muted-foreground line-clamp-3 h-[4.5rem]"
											dangerouslySetInnerHTML={{
												__html:
													blog.details
														.replace(/<\/?p>/g, "") // Remove p tags
														.substring(0, 120) + "...",
											}}
										/>
									</CardContent>
									<CardFooter className="pt-0 mt-auto">
										<Link href={`/blog/${blog.id}`} className="w-full" passHref>
											<Button
												variant="outline"
												className="w-full group hover:bg-primary hover:text-primary-foreground dark:border-primary/30 dark:hover:bg-primary/90 dark:text-foreground">
												<BookOpen className="mr-2 h-4 w-4" />
												Read Article
												<ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
											</Button>
										</Link>
									</CardFooter>
								</Card>
							</article>
						))}
					</section>

					{/* Empty State */}
					{blogs.length === 0 && !loading && (
						<div className="text-center py-12 rounded-lg border border-border/40 bg-card/50 dark:bg-card/30 p-8">
							<p className="text-muted-foreground">
								No blog posts found. Check back soon!
							</p>
						</div>
					)}
				</>
			)}
		</div>
	);
}
