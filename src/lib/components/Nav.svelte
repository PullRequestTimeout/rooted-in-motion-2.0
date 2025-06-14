<script lang="ts">
	import NavLogo from "./NavLogo.svelte";
	import { slide, fade } from "svelte/transition";
	import { clickOutside } from "$lib/utils/clickOutside";
	import { onMount } from "svelte";

	let open = $state(false);
	function handleToggleMenu() {
		open = !open;
	}

	function openBookingModal() {
		// Logic to open the booking modal
		alert("Booking modal opened!");
	}

	let scrollPosition = $state(0);
	onMount(() => {
		const handleScroll = () => {
			scrollPosition = window.scrollY;
		};
		scrollPosition = window.scrollY;
		window.addEventListener("scroll", handleScroll);
	});
</script>

<header
	class:open
	class:scrolled={scrollPosition > 10}
	use:clickOutside
	onoutclick={() => {
		open = false;
	}}
	class="small-screen-nav"
>
	<a href="/"><NavLogo invertColor={open} /></a>
	<button class="nav-button" onclick={handleToggleMenu} aria-label="Toggle navigation menu" class:open>
		<span></span>
		<span></span>
		<span></span>
	</button>
	{#if open}
		<nav in:slide={{ duration: 300, axis: "y" }} out:slide={{ duration: 300 }} class="mobile-nav" class:open>
			<ul>
				<li out:fade in:fade={{ delay: 2 * 100 }}><a href="/">Home</a></li>
				<hr out:fade in:fade={{ delay: 2.25 * 100 }} />
				<li out:fade in:fade={{ delay: 2.5 * 100 }}><a href="/services">Services</a></li>
				<hr out:fade in:fade={{ delay: 2.75 * 100 }} />
				<li out:fade in:fade={{ delay: 3 * 100 }}><a href="/about">About</a></li>
				<hr out:fade in:fade={{ delay: 3.25 * 100 }} />
				<li out:fade in:fade={{ delay: 3.5 * 100 }}><a href="/blog">Blog</a></li>
				<hr out:fade in:fade={{ delay: 3.75 * 100 }} />
				<li out:fade in:fade={{ delay: 4 * 100 }}><a href="/contact">Contact</a></li>
				<li out:fade in:fade={{ delay: 4.25 * 100 }}><button class="button button-primary" onclick={openBookingModal}>Book Session</button></li>
			</ul>
		</nav>
	{/if}
</header>
<header class="large-screen-nav" class:scrolled={scrollPosition > 10}>
	<a href="/">
		<NavLogo />
	</a>
	<nav>
		<ul>
			<li><a href="/about">About</a></li>
			<li><a href="/services">Services</a></li>
			<li><a href="/blog">Blog</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
		<button class="button button-primary" onclick={openBookingModal}>Book Session</button>
	</nav>
</header>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem var(--padding-inline);
		background-color: transparent;
		position: fixed;
		z-index: 1000;
		width: 100%;
		transition: 0.3s ease-in-out;
	}

	header.open,
	header.scrolled.open {
		background-color: var(--color-footer);
	}

	header.scrolled {
		background-color: var(--color-bronze-5);
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
	}

	header.large-screen-nav {
		display: none;
		transition: background-color 0.2s ease-in-out;
	}

	header.small-screen-nav nav {
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		height: 80vh;
		color: var(--color-white);
		background-color: var(--color-footer);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--spacing-m);
	}

	header.small-screen-nav nav hr {
		width: 8rem;
		border: none;
		border-top: 3px solid var(--color-bronze-1);
	}

	header.small-screen-nav nav ul {
		text-transform: uppercase;
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--spacing-m);
	}

	header.small-screen-nav nav button {
		margin-top: 1rem;
	}

	button.nav-button {
		background: transparent;
		border: none;
		width: 1.75rem;
		height: 1.5rem;
		position: relative;
		transform: rotate(0deg);
		cursor: pointer;
	}

	button.nav-button span {
		display: block;
		position: absolute;
		height: 4px;
		width: 100%;
		background: var(--color-pine-2);
		border-radius: 2px;
		opacity: 1;
		left: 0;
		transition: 0.25s ease-in-out;
	}

	button.nav-button.open span {
		background: var(--color-white);
	}

	button.nav-button span:nth-child(1) {
		top: 0;
	}

	button.nav-button span:nth-child(2) {
		top: 0.5rem;
	}

	button.nav-button span:nth-child(3) {
		top: 1rem;
	}

	button.nav-button.open span:nth-child(1) {
		top: 0.5rem;
		transform: rotate(135deg);
	}

	button.nav-button.open span:nth-child(2) {
		opacity: 0;
		left: -2rem;
	}

	button.nav-button.open span:nth-child(3) {
		top: 0.5rem;
		transform: rotate(-135deg);
	}

	@media (min-width: 1024px) {
		header.small-screen-nav {
			display: none;
		}

		header.large-screen-nav {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 1rem var(--padding-inline);
		}

		header.large-screen-nav nav {
			display: flex;
			align-items: center;
			gap: var(--spacing-l);
		}

		header.large-screen-nav nav ul {
			font-size: 1.2rem;
			display: flex;
			gap: var(--spacing-l);
			list-style: none;
			padding: 0;
			margin: 0;
		}

		header.large-screen-nav nav ul li {
			position: relative;
		}

		header.large-screen-nav nav ul li::after {
			content: "";
			position: absolute;
			bottom: -3px;
			left: 0;
			height: 2.5px;
			width: 0;
			background-color: var(--color-pine-3);
			transition: width 0.3s ease-in-out;
		}

		@media (hover: hover) {
			header.large-screen-nav nav ul li:hover::after {
				width: 100%;
			}
		}
	}
</style>
