"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface Blog {
	id: number;
	title: string;
	cover: string;
	details: string;
	author?: string;
	date?: string;
}

// Modified to accept initial data from server component
export default function BlogDetail({
	initialBlog = null,
}: {
	initialBlog?: Blog | null;
}) {
	const { id } = useParams();
	const [blog, setBlog] = useState<Blog | null>(initialBlog);
	const [loading, setLoading] = useState<boolean>(!initialBlog);

	useEffect(() => {
		// If we already have initial data, skip client-side fetch
		if (initialBlog) return;

		const fetchBlog = async () => {
			try {
				const response = await fetch(
					`https://app.credixai.com/api/blogs/${id}`
				);
				const data = await response.json();
				setBlog(data?.data || null);
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

	return (
		<div className="container mx-auto px-4 py-12 max-w-4xl">
			<Link href="/blogs" passHref>
				<Button variant="ghost" className="mb-6 -ml-2">
					<ArrowLeft className="mr-2 h-4 w-4" />
					Back to Blogs
				</Button>
			</Link>

			<div className="mb-8">
				<h1 className="text-3xl md:text-4xl font-bold mb-4">{blog.title}</h1>

				<div className="flex items-center text-muted-foreground mb-6 text-sm">
					{blog.author && (
						<div className="flex items-center mr-6">
							<User className="h-4 w-4 mr-1" />
							<span>{blog.author}</span>
						</div>
					)}
					{blog.date && (
						<div className="flex items-center">
							<Calendar className="h-4 w-4 mr-1" />
							<span>{blog.date}</span>
						</div>
					)}
				</div>
			</div>

			{blog.cover && (
				<div className="mb-8 rounded-lg overflow-hidden">
					<img
						src={`https://app.credixai.com/assets/${blog.cover}`}
						alt={blog.title}
						className="w-full h-auto object-cover max-h-[500px]"
					/>
				</div>
			)}

			{/* Blog content without p tags */}
			<div
				className="prose dark:prose-invert max-w-none"
				dangerouslySetInnerHTML={{
					__html: blog.details.replace(/<\/?p>/g, ""),
				}}
			/>
		</div>
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
