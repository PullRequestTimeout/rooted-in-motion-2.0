<script lang="ts">
	// Imports
	import LoginForm from "$lib/components/LoginForm.svelte";
	import SeoHead from "$lib/components/SeoHead.svelte";
	import AdminPanel from "$lib/components/blog/AdminPanel.svelte";
	import { uiStore } from "$lib/stores/uiStore.svelte";
</script>

<SeoHead title="Blog Admin | Rooted In Motion Osteopathy" description="Manage blog posts and articles for Rooted In Motion's blog."></SeoHead>

<main>
	{#if !uiStore.loggedIn}
		<LoginForm />
	{:else if uiStore.loggedIn}
		<AdminPanel />
	{/if}
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 5rem;
	}
</style>
