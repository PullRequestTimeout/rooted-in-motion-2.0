<script lang="ts">
	import { slide } from "svelte/transition";

	// Quill blog dependencies
	import BlogEditor from "$lib/components/blog/BlogEditor.svelte";
	import { blogOutput } from "$lib/components/blog/blogOutput.svelte";
	import { Delta } from "quill/core";
	import type { BlogPost, BlogPostState } from "$lib/components/blog/blogOutput.svelte";
	import { refreshBlogPosts, blogPostsArr } from "$lib/utils/refreshBlogPosts.svelte";
	import { uiStore } from "$lib/stores/uiStore.svelte";
	import { handleAlertMessage } from "$lib/stores/uiStore.svelte";

	onMount(async () => {
		// Fetch blog posts when the component mounts
		await refreshBlogPosts();
		if (uiStore.blogEditorOpen) {
			blogEditorOpen = true;
		}
	});

	// Components & Utils
	import Confirmation from "$lib/components/Confirmation.svelte";
	import { formatDate } from "$lib/utils/formatDate";

	import { databaseHandlers } from "$lib/firebase/db";
	import { onMount } from "svelte";

	// Edit blog post functionality
	let blogEditorOpen = $state(uiStore.blogEditorOpen || false);
	$effect(() => {
		// Controls toast component visibility. If the blog editor is open, the internal toast will be used instead of the global one.
		if (blogEditorOpen) {
			uiStore.blogEditorOpen = true;
		} else {
			uiStore.blogEditorOpen = false;
		}
	});

	function handleEdit(blog: BlogPost) {
		// Populate the editor with blog data and open the editor
		Object.assign(blogOutput, blog);
		blogEditorOpen = true;
	}

	// Delete blog post functionality
	let confirmationOpen = $state(false);
	let confirmFunc = $state(() => {});
	let confirmMessage = $state("Are you sure you want to delete this post?");
	let bodyMessage = $state("");
	function handleDelete(blog: BlogPost) {
		// Open the confirmation dialog
		confirmationOpen = true;
		bodyMessage = blog.title;
		confirmFunc = async () => {
			await databaseHandlers.deleteBlogPost(blog);
			await refreshBlogPosts();
		};
	}

	let displayDeletedPosts = $state(false);
	function toggleDeletedPosts() {
		displayDeletedPosts = !displayDeletedPosts;
	}

	// Restore blog post functionality
	function handleRestore(blog: BlogPost) {
		// Open the confirmation dialog
		confirmationOpen = true;
		confirmMessage = "Are you sure you want to restore this post to drafts?";
		bodyMessage = blog.title;
		confirmFunc = async () => {
			await databaseHandlers.restoreBlogPost(blog);
			await refreshBlogPosts();
		};
	}

	function handlePermanentDelete(blog: BlogPost) {
		// Open the confirmation dialog
		confirmationOpen = true;
		confirmMessage = "Are you sure you want to permanently delete this post? This action cannot be undone.";
		bodyMessage = blog.title;
		confirmFunc = async () => {
			await databaseHandlers.permanentDeleteBlogPost(blog);
			await refreshBlogPosts();
			handleAlertMessage(`Permanently deleted blog post: ${blog.title}`, 5);
		};
	}
</script>

<section>
	<div class="admin-hero">
		<h2>Blog Admin Panel</h2>
		<p>Welcome to your admin panel. Here you can write and manage blog posts.</p>
		<hr />
	</div>
	<div class="create-post">
		<h3>Create New Post</h3>
		<button class="button button-primary" onclick={() => (blogEditorOpen = true)}><span class="material-icons">add</span>New Blog Post</button>
	</div>
	{#if blogPostsArr.filter((blog: any) => {
		return blog.postState === "draft";
	}).length > 0}
		<hr />
		<div class="draft-posts">
			<h3>Unpublished Drafts</h3>
			<ul class="draft-list">
				{#each blogPostsArr as blog}
					{#if blog.postState === "draft"}
						<li class="blog-item">
							<div>
								<h4>{blog.title}</h4>
								<p class="blog-subtitle">{blog.subtitle}</p>
								<p class="blog-date">{formatDate(blog.date)}</p>
							</div>
							<div class="blog-actions">
								<button
									class="button button-primary"
									onclick={() => {
										handleEdit({ ...blog, delta: blog.delta as Delta, postState: blog.postState as BlogPostState });
									}}><span class="material-icons">edit</span>Edit</button
								>
								<button
									class="button button-secondary"
									onclick={() => handleDelete({ ...blog, delta: blog.delta as Delta, postState: blog.postState as BlogPostState })}
									><span class="material-icons">delete</span>Delete</button
								>
							</div>
						</li>
					{/if}
				{/each}
			</ul>
		</div>
	{/if}
	{#if blogPostsArr.filter((blog: any) => {
		return blog.postState === "published";
	}).length > 0}
		<hr />
		<div class="published-posts">
			<h3>Published Posts</h3>
			<ul class="published-list">
				{#if blogPostsArr.length === 0}
					<li>No published posts available.</li>
				{:else}
					{#each blogPostsArr as blog}
						{#if blog.postState === "published"}
							<li class="blog-item">
								<div>
									<h4>{blog.title}</h4>
									<p class="blog-subtitle">{blog.subtitle}</p>
									<p class="blog-date">{formatDate(blog.date)}</p>
								</div>
								<div class="blog-actions">
									<button
										class="button button-primary"
										onclick={() => {
											handleEdit({ ...blog, delta: blog.delta as Delta, postState: blog.postState as BlogPostState });
										}}><span class="material-icons">edit</span>Edit</button
									>
									<button
										class="button button-secondary"
										onclick={() => handleDelete({ ...blog, delta: blog.delta as Delta, postState: blog.postState as BlogPostState })}
										><span class="material-icons">delete</span>Delete</button
									>
								</div>
							</li>
						{/if}
					{/each}
				{/if}
			</ul>
		</div>
		<hr />
	{/if}

	{#if blogPostsArr.filter((blog: any) => {
		return blog.postState === "deleted";
	}).length > 0}
		<button class="button deleted-posts-button" class:open={displayDeletedPosts} onclick={toggleDeletedPosts}
			>See Deleted Posts <span class="material-icons">arrow_drop_down</span></button
		>
		{#if displayDeletedPosts}
			<div class="deleted-posts" transition:slide={{ duration: 200 }}>
				<h3>Deleted Posts</h3>
				{#each blogPostsArr as blog}
					{#if blog.postState === "deleted"}
						<ul class="deleted-list">
							<li class="blog-item">
								<div>
									<h4>{blog.title}</h4>
									<p class="blog-subtitle">{blog.subtitle}</p>
									<p class="blog-date">{formatDate(blog.date)}</p>
								</div>
								<div class="blog-actions">
									<button
										class="button button-primary"
										onclick={() => {
											handleRestore({ ...blog, delta: blog.delta as Delta, postState: blog.postState as BlogPostState });
										}}><span class="material-icons">restore</span>Restore</button
									>
									<button
										class="button button-secondary"
										onclick={() => handlePermanentDelete({ ...blog, delta: blog.delta as Delta, postState: blog.postState as BlogPostState })}
										><span class="material-icons">delete</span>Permanently Delete</button
									>
								</div>
							</li>
						</ul>
					{/if}
				{/each}
			</div>
		{/if}
		<hr />
	{/if}
</section>

<!-- Reinitialises component to trigger onMount population -->
{#if blogEditorOpen}
	<BlogEditor bind:blogEditorOpen />
{/if}

<Confirmation bind:confirmationOpen {confirmFunc} message={confirmMessage} body={bodyMessage} />

<style>
	section {
		width: 100%;
	}

	h3 {
		font-weight: 400;
	}

	div.admin-hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: var(--spacing-s);
	}

	div.admin-hero h2 {
		font-family: "Oswald", sans-serif;
		font-size: var(--font-heading-l);
		font-weight: 700;
		color: var(--color-pine-6);
	}

	div.admin-hero p {
		font-family: var(--font-heading);
		font-size: var(--font-body-l);
		font-weight: 300;
	}

	div.create-post {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	div.create-post h3 {
		margin: 0;
		transform: translateY(0.2rem);
	}

	ul {
		list-style-type: none;
		display: flex;
		flex-direction: column;
		gap: var(--spacing-s);
		padding: 0;
	}

	li.blog-item {
		background-color: #ffffff50;
		text-align: left;
		display: flex;
		justify-content: space-between;
		gap: var(--spacing-m);
		padding: 1rem;
		border-radius: var(--spacing-s);
		transition: 0.2s;
	}

	li.blog-item:hover {
		background-color: #ffffffa9;
	}

	li.blog-item h4 {
		margin: 0;
		font-size: var(--font-body-l, 1.5rem);
		font-weight: 400;
	}

	li.blog-item p.blog-subtitle {
		font-family: var(--font-heading);
		font-size: var(--font-body-s);
	}

	li.blog-item p.blog-date {
		color: #505050;
		font-style: italic;
	}

	li.blog-item div.blog-actions {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-end;
		gap: var(--spacing-s);
	}

	hr {
		width: 100%;
		border: 1px solid var(--color-pine-3);
		margin: 1rem auto;
		opacity: 0.75;
	}

	button.deleted-posts-button,
	button.deleted-posts-button span {
		transition: 0.2s;
	}

	button.deleted-posts-button.open {
		margin-bottom: 1rem;
	}

	button.deleted-posts-button.open span {
		transform: rotate(180deg);
	}

	button.button-secondary {
		border-color: var(--color-pine-3);
		color: var(--color-pine-3);
	}

	@media (hover: hover) {
		button.button-secondary:hover {
			background-color: var(--color-pine-3);
			color: var(--color-white, #fff);
		}
	}

	@media screen and (min-width: 768px) {
		li.blog-item div.blog-actions {
			flex-direction: row;
			justify-content: flex-end;
			align-items: center;
		}
	}
</style>
