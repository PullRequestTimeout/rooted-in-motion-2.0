<script lang="ts">
	import { onMount } from "svelte";
	let open: boolean = $state(true);

	onMount(() => {
		open = true;
	});
</script>

{#if open}
	<div class="banner surface">
		<p>Now taking bookings at new location in Castlegar, starting May 1st!</p>
		<button onclick={() => (open = false)}><span class="material-icons">close</span></button>
	</div>
{/if}

<style>
	div.banner {
		position: fixed;
		z-index: 1000;
		width: 100vw;
		bottom: 0;
		border-radius: 0;
		background-color: var(--color-pine-3);
		color: var(--color-white);
		display: flex;
		justify-content: center;
		align-items: center;
		padding: var(--spacing-m) var(--padding-inline);
	}

	div.banner p {
		margin: 0;
		font-size: var(--font-body-m);
	}

	div.banner button {
		background: none;
		border: none;
		color: var(--color-white);
		cursor: pointer;
		position: absolute;
		right: var(--padding-inline);
	}

	div.banner button span.material-icons {
		font-size: var(--font-body-l);
		transition: color 0.3s ease;
	}

	@media (hover: hover) {
		div.banner button:hover span.material-icons {
			color: var(--color-bronze-2);
		}
	}
</style>
