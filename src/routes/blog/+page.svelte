<script lang="ts">
	import SeoHead from "$lib/components/SeoHead.svelte";
	import FeedbackSection from "$lib/components/FeedbackSection.svelte";

	// Import blog posts
	import type { PageData } from "./$types";
	const { data }: { data: PageData } = $props();
	import type { BlogPost } from "$lib/components/blog/blogOutput.svelte";

	// Import utils
	import { formatDate } from "$lib/utils/formatDate";
	import { isIntersecting } from "$lib/utils/isIntersecting";
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
			<div class="blog-posts-container group-stagger-fade" use:isIntersecting>
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
		<img class="plant-svg" src="/assets/images/svgs/plant-13.svg" alt="plant svg" />
	</section>
	<FeedbackSection />
</main>

<style>
	main {
		background: linear-gradient(var(--color-bronze-5), var(--color-bronze-4));
		overflow: hidden;
	}

	section.blog-header {
		position: relative;
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

	section.blog-posts {
		padding-top: var(--spacing-m);
		position: relative;
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

	div.blog-card img {
		border-radius: var(--spacing-xs);
		width: 100%;
		height: auto;
		margin-bottom: var(--spacing-s);
	}

	div.blog-card h3 {
		margin: 0;
		font-size: 1.5rem;
		font-weight: 400;
	}

	div.blog-card p {
		font-style: italic;
		font-weight: 300;
		font-size: var(--font-body-s);
	}

	div.blog-card a {
		margin-top: auto;
		color: var(--color-pine-3);
	}

	div.blog-card:hover {
		transform: translateY(-0.25rem);
	}

	img.plant-svg {
		position: absolute;
		bottom: -4rem;
		right: 0rem;
		width: 15rem;
		height: auto;
		rotate: -70deg;
		opacity: 0.5;
		z-index: 0;
	}

	section.blog-posts *:not(img.plant-svg) {
		position: relative;
		z-index: 1;
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

		section.blog-header p {
			max-width: 60%;
			margin-top: var(--spacing-m);
		}

		img.plant-svg {
			width: 18rem;
			rotate: -80deg;
			opacity: 0.75;
			right: 1rem;
			bottom: -5rem;
		}
	}

	@media screen and (min-width: 1280px) {
		img.plant-svg {
			width: 20rem;
		}
	}

	@media screen and (min-width: 1600px) {
		div.blog-posts-container {
			grid-template-columns: repeat(4, 1fr);
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
