<script lang="ts">
	import SeoHead from "$lib/components/SeoHead.svelte";
	import FeedbackSection from "$lib/components/FeedbackSection.svelte";

	// Import blog posts
	import type { PageData } from "./$types";
	const { data }: { data: PageData } = $props();
	import type { BlogPost } from "$lib/components/blog/blogOutput.svelte";

	// Import utils
	import { formatDate } from "$lib/utils/formatDate";
	const blogPostsArr = data.publishedBlogPosts.sort((a: BlogPost, b: BlogPost) => b.date.localeCompare(a.date));
</script>

<SeoHead
	title="Blog | Rooted In Motion Osteopathy"
	description="Read blog articles published by Rooted In Motion on topics related to osteopathy, pediatric and early-life care, and wellness."
></SeoHead>

<main>
	<section class="blog-header">
		<h1>Blog</h1>
		<p>All our latest articles about Osteopathy and Lactation Support</p>
	</section>
	<section class="blog-posts">
		<!-- Blog posts -->
		{#if blogPostsArr.length === 0}
			<p>No blog posts yet, check again soon!</p>
		{:else}
			<h2>Latest Articles</h2>
			<div class="blog-posts-container">
				{#each blogPostsArr as post}
					<div class="blog-card surface">
						{#if post.heroImage}
							<img src={post.heroImage} alt={`${post.title} hero image`} />
						{/if}
						<div>
							<p>{post.author} — <span>{formatDate(post.date)}</span></p>
						</div>
						<h3>{post.title}</h3>
						<p>{post.subtitle}</p>
						<a class="button-link" href={`/blog/${post.slug}`}>Read More </a>
					</div>
				{/each}
			</div>
		{/if}
	</section>
	<FeedbackSection />
</main>

<style>
	main {
		background: linear-gradient(var(--color-bronze-5), #e9c69aff);
	}

	section.blog-header {
		display: flex;
		flex-direction: column;
		padding: 7em var(--padding-inline) 2em var(--padding-inline);
	}

	section.blog-header h1 {
		font-family: "Oswald", sans-serif;
		font-weight: 700;
		line-height: 1;
		color: var(--color-pine-6);
		font-size: 5em;
	}

	section.blog-header p {
		font-size: var(--font-body-l);
		font-family: "Raleway", sans-serif;
		line-height: 1.3;
		font-weight: 300;
		max-width: 80%;
	}

	section.blog-posts p {
		font-size: var(--font-body-m);
		font-family: "Raleway", sans-serif;
		line-height: 1.5;
	}

	div.blog-posts-container {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: 1rem;
	}

	div.blog-card {
		width: 100%;
		height: 100%;
		padding: 1rem;
		border-radius: 0.5rem;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		transition: transform 0.2s;
		display: flex;
		flex-direction: column;
	}
	div.blog-card h3 {
		margin: 0;
		font-size: 1.5rem;
	}

	div.blog-card p span {
		font-style: italic;
	}

	div.blog-card a {
		margin-top: auto;
	}

	div.blog-card:hover {
		transform: translateY(-0.25rem);
	}

	@media screen and (min-width: 768px) {
		div.blog-posts-container {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media screen and (min-width: 1024px) {
		div.blog-posts-container {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media screen and (min-width: 1280px) {
		div.blog-posts-container {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	@media screen and (min-width: 1600px) {
		div.blog-posts-container {
			grid-template-columns: repeat(5, 1fr);
		}
	}

	@media screen and (min-width: 768px) {
		section.blog-header h1 {
			font-size: 6em;
		}
	}

	@media screen and (min-width: 1280px) {
		section.blog-header h1 {
			font-size: 7em;
		}

		section.blog-header p {
			font-size: calc(var(--font-body-l) * 1.2);
		}
	}

	@media screen and (min-width: 1600px) {
		section.blog-header h1 {
			font-size: 8em;
		}
	}
</style>
