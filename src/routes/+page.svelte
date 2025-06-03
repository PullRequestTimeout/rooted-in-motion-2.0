<script lang="ts">
	import SeoHead from "$lib/components/SeoHead.svelte";
	import Faq from "$lib/components/FAQ.svelte";
	import FeedbackCarousel from "$lib/components/FeedbackCarousel.svelte";

	const symptoms = [
		"Back Pain",
		"Neck Pain",
		"Shoulder Pain",
		"Headaches",
		"Joint Pain",
		"Muscle Tension",
		"Stress Relief",
		"Chronic Pain",
		"Sports Injuries",
		"Postural Issues"
	];
</script>

<SeoHead />

<main>
	<section class="hero">
		<div class="hero-text">
			<h2 class="hero-title">
				Providing <span>effective<img src="/assets/images/svgs/chalk-1.svg" class="hero-chalk" alt="chalk outline" /></span> and holistic care for people
				in pain
			</h2>

			<p>Using a dynamic and gentle approach I aim to improve my client’s pain management, movement, and general health.</p>
			<a class="button button-primary" href="https://madhucollective.janeapp.com/#/staff_member/42">Book Session</a>
		</div>
		<div class="hero-image">
			<img class="hero-svg1 svg" src="/assets/images/svgs/plant-1.svg" alt="plant svg" />
			<img class="hero-svg2 svg" src="/assets/images/svgs/plant-2.svg" alt="plant svg" />
			<img class="hero-svg3 svg" src="/assets/images/svgs/plant-3.svg" alt="plant svg" />
			<img class="hero-svg4 svg" src="/assets/images/svgs/plant-4.svg" alt="plant svg" />

			<picture>
				<source srcset="/assets/images/treatment-1.webp" type="image/webp" />
				<source srcset="/assets/images/treatment-1.png" type="image/jpeg" />
				<img src="/assets/images/treatment-1.png" alt="Michelle treating a client" />
			</picture>
		</div>
	</section>
	<section class="symptoms">
		<h2>Symptoms I work with</h2>
		<div class="symptoms-list">
			{#each symptoms as symptom}
				<div class="symptoms-item">
					<button class="button button-primary" aria-label={`${symptom} modal button`}>X</button>
					<p>{symptom}</p>
				</div>
			{/each}
		</div>
		<a href="/services" class="button button-secondary">Read More</a>
		<img class="symptoms-svg" src="/assets/images/svgs/plant-5.svg" alt="plant svg" />
	</section>
</main>

<style>
	/* Hero ------------------------------------------------------------------------------------ */
	section.hero {
		padding: var(--padding-block) var(--padding-inline);
		display: grid;
		grid-template-columns: 1fr;
		background: linear-gradient(#f6e8d5, #edd1ab);
		gap: 1em;
	}

	div.hero-text {
		margin-top: 5em;
		display: flex;
		flex-direction: column;
		gap: 1em;
		margin-bottom: 1em;
	}

	h2.hero-title span {
		position: relative;
	}

	h2.hero-title {
		font-size: 2.5em;
		font-weight: 300;
		line-height: 1.3;
		z-index: +1;
	}

	img.hero-chalk {
		position: absolute;
		left: 0;
		top: 0;
		z-index: -1;
		width: 110%;
		transform: translate(-0.1rem, -0.2rem);
	}

	div.hero-text p {
		font-size: 1.3em;
		line-height: 1.6;
		font-weight: 300;
	}

	div.hero-image {
		justify-self: center;
		position: relative;
	}

	div.hero-image picture img {
		filter: drop-shadow(0px 0px 1em var(--color-bronze-2));
		width: 15em;
	}

	div.hero-image .svg {
		position: absolute;
	}

	img.hero-svg1 {
		right: 11em;
		width: 3em;
	}

	img.hero-svg2 {
		right: 12em;
		top: 1em;
		width: 6em;
	}

	img.hero-svg3 {
		right: 13em;
		top: 4em;
		width: 8em;
	}

	img.hero-svg4 {
		right: 12em;
		top: 10em;
		width: 9em;
	}

	@media screen and (min-width: 640px) {
		section.hero {
			gap: 2em;
		}

		div.hero-text {
			text-align: center;
			align-items: center;
			margin-bottom: unset;
		}

		div.hero-image {
			width: unset;
		}
	}

	@media screen and (min-width: 1024px) {
		section.hero {
			display: grid;
			margin-top: 0;
			grid-template-columns: 1fr 1fr;
		}

		div.hero-text {
			text-align: left;
			align-items: flex-start;
			gap: 1em;
		}

		h2.hero-title {
			font-size: 3em;
			grid-column-start: 1;
		}

		div.hero-text p {
			font-size: 1.6em;
		}

		h2.hero-title,
		div.hero-text p {
			padding: 0;
		}

		div.hero-image {
			justify-self: end;
			align-self: center;
			margin-top: 4em;
			grid-column-start: 2;
		}

		div.hero-image picture img {
			width: 20em;
		}

		img.hero-svg1 {
			right: 14em;
			top: -1em;
			width: 5em;
		}

		img.hero-svg2 {
			right: 16em;
			top: 2em;
			width: 7em;
		}

		img.hero-svg3 {
			right: 17em;
			top: 6em;
			width: 11em;
		}

		img.hero-svg4 {
			right: 16em;
			top: 15em;
			width: 10em;
		}
	}

	@media screen and (min-width: 1280px) {
		h2.hero-title {
			font-size: 3.5em;
		}

		div.hero-image picture img {
			width: 23em;
		}

		img.hero-svg1 {
			right: 16em;
			top: -1em;
			width: 6em;
		}

		img.hero-svg2 {
			right: 18em;
			top: 3em;
			width: 9em;
		}

		img.hero-svg3 {
			right: 20em;
			top: 7em;
			width: 11em;
		}

		img.hero-svg4 {
			right: 18em;
			top: 16em;
			width: 12em;
		}
	}

	@media screen and (min-width: 1800px) {
		h2.hero-title {
			font-size: 5em;
		}

		div.hero-image picture img {
			width: 27em;
		}

		img.hero-svg1 {
			right: 19em;
			top: -1em;
			width: 7em;
		}

		img.hero-svg2 {
			right: 21em;
			top: 2em;
			width: 12em;
			transform: rotate(-20deg);
		}

		img.hero-svg3 {
			right: 23em;
			top: 10em;
			width: 13em;
			transform: rotate(-10deg);
		}

		img.hero-svg4 {
			right: 22em;
			top: 21em;
			width: 12em;
		}
	}

	/* Symptoms -------------------------------------------------------------------------------- */
	section.symptoms {
		position: relative;
		background-color: var(--color-greyscale-1);
		display: flex;
		flex-direction: column;
		align-items: center;
		color: var(--color-white);
		gap: var(--spacing-m);
		overflow: hidden;
	}

	section.symptoms h2 {
		font-size: var(--font-heading-s);
		font-weight: 300;
	}

	section.symptoms h2,
	section.symptoms a,
	section.symptoms div.symptoms-list {
		position: relative;
		z-index: 1;
	}

	section.symptoms div.symptoms-list {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--spacing-m);
	}

	section.symptoms div.symptoms-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--spacing-s);
	}

	section.symptoms div.symptoms-item button {
		background-color: var(--color-bronze-5);
		color: var(--color-white);
		border-radius: var(--spacing-s);
		width: 5rem;
		height: 5rem;
		border: none;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	section.symptoms img.symptoms-svg {
		position: absolute;
		z-index: 0;
		bottom: 0;
		left: 2rem;
		min-height: 20em;
		max-width: unset;
	}

	@media (hover: hover) {
		section.symptoms div.symptoms-item button:hover {
			background-color: var(--color-bronze-2);
		}
	}

	@media screen and (min-width: 640px) {
		section.symptoms div.symptoms-list {
			grid-template-columns: repeat(3, 1fr);
			gap: var(--spacing-l);
		}

		section.symptoms div.symptoms-item:last-child {
			grid-column: 2;
		}

		section.symptoms img.symptoms-svg {
			height: 22rem;
		}
	}

	@media screen and (min-width: 1024px) {
		section.symptoms {
			gap: var(--spacing-l);
		}

		section.symptoms div.symptoms-list {
			grid-template-columns: repeat(5, 1fr);
		}

		section.symptoms div.symptoms-item:last-child {
			grid-column: unset;
		}

		section.symptoms img.symptoms-svg {
			height: 25rem;
		}
	}
</style>
