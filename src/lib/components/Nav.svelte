<script lang="ts">
	let open = $state(false);
	function handleToggleMenu() {
		open = !open;
	}
</script>

<header class="small-screen-nav">
	<a href="/"><img src="/logo.svg" alt="Rooted in Motion logo" class="logo" /></a>
	<button class="nav-button" onclick={handleToggleMenu} aria-label="Toggle navigation menu" class:open>
		<span></span>
		<span></span>
		<span></span>
	</button>
	<nav class:open>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/contact">Contact</a></li>
			<li><a href="/blog">Blog</a></li>
		</ul>
	</nav>
</header>
<header class="large-screen-nav">
	<a href="/"><img src="/logo.svg" alt="Rooted in Motion logo" class="logo" /></a>
	<nav>
		<ul>
			<li><a href="/about">About</a></li>
			<li><a href="/services">Services</a></li>
			<li><a href="/contact">Contact</a></li>
			<li><a href="/blog">Blog</a></li>
		</ul>
	</nav>
</header>

<style>
	header.large-screen-nav {
		display: none;
	}

	button.nav-button {
		background: transparent;
		border: none;
		width: 2rem;
		height: 1.5rem;
		position: relative;
		transform: rotate(0deg);
		transition: 0.5s ease-in-out;
		cursor: pointer;
	}

	button.nav-button span {
		display: block;
		position: absolute;
		height: 4px;
		width: 100%;
		background: var(--color-primary, #374937);
		border-radius: 2px;
		opacity: 1;
		left: 0;
		transition: 0.25s ease-in-out;
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
</style>
