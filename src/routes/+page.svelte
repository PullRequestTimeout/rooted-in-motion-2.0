<script lang="ts">
	import SeoHead from "$lib/components/SeoHead.svelte";
	import Faq from "$lib/components/FAQ.svelte";
	import FeedbackCarousel from "$lib/components/FeedbackCarousel.svelte";
</script>

<SeoHead />

<main>
	<section class="home-hero">
		<div class="home-hero__text">
			<h2 class="home-hero__title">
				Providing <span>effective<img src="/assets/images/svgs/chalk-1.svg" class="home-hero__chalk" alt="chalk outline" /></span> and holistic care for
				people in pain
			</h2>

			<p>Using a dynamic and gentle approach I aim to improve my client’s pain management, movement, and general health.</p>
			<a class="button button-primary" href="https://madhucollective.janeapp.com/#/staff_member/42">Book Session</a>
		</div>
		<div class="home-hero__image">
			<img class="home-hero__svg1 svg" src="/assets/images/svgs/plant-1.svg" alt="plant svg" />
			<img class="home-hero__svg2 svg" src="/assets/images/svgs/plant-2.svg" alt="plant svg" />
			<img class="home-hero__svg3 svg" src="/assets/images/svgs/plant-3.svg" alt="plant svg" />
			<img class="home-hero__svg4 svg" src="/assets/images/svgs/plant-4.svg" alt="plant svg" />

			<picture>
				<source srcset="/assets/images/treatment-1.webp" type="image/webp" />
				<source srcset="/assets/images/treatment-1.png" type="image/jpeg" />
				<img src="/assets/images/treatment-1.png" alt="Michelle treating a client" />
			</picture>
		</div>
	</section>
</main>

<style>
	.home-hero {
		padding: var(--padding-block) var(--padding-inline);
		display: grid;
		grid-template-columns: 1fr;
		background: linear-gradient(#f6e8d5, #edd1ab);
		gap: 1em;
	}

	.home-hero__text {
		margin-top: 5em;
		display: flex;
		flex-direction: column;
		gap: 1em;
		margin-bottom: 1em;
	}

	.home-hero__title span {
		position: relative;
	}

	.home-hero__title {
		font-size: 2.5em;
		font-weight: 300;
		line-height: 1.3;
		z-index: +1;
	}

	.home-hero__chalk {
		position: absolute;
		left: 0;
		top: 0;
		z-index: -1;
		width: 110%;
		transform: translate(-0.1rem, -0.2rem);
	}

	.home-hero__text p {
		font-size: 1.3em;
		line-height: 1.6;
		font-weight: 300;
	}

	.home-hero__image {
		justify-self: center;
		position: relative;
	}

	.home-hero__image picture img {
		filter: drop-shadow(0px 0px 1em var(--color-bronze-2));
		width: 15em;
	}

	.home-hero__image .svg {
		position: absolute;
	}

	.home-hero__svg1 {
		right: 11em;
		width: 3em;
	}

	.home-hero__svg2 {
		right: 12em;
		top: 1em;
		width: 6em;
	}

	.home-hero__svg3 {
		right: 13em;
		top: 4em;
		width: 8em;
	}

	.home-hero__svg4 {
		right: 12em;
		top: 10em;
		width: 9em;
	}

	@media screen and (min-width: 640px) {
		.home-hero {
			gap: 2em;
		}

		.home-hero__text {
			text-align: center;
			align-items: center;
			margin-bottom: unset;
		}

		.home-hero__image {
			width: unset;
		}
	}

	@media screen and (min-width: 1024px) {
		.home-hero {
			display: grid;
			margin-top: 0;
			grid-template-columns: 1fr 1fr;
		}

		.home-hero__text {
			text-align: left;
			align-items: flex-start;
			gap: 1em;
		}

		.home-hero__title {
			font-size: 3em;
			grid-column-start: 1;
		}

		.home-hero__text p {
			font-size: 1.6em;
		}

		.home-hero__title,
		.home-hero__text p {
			padding: 0;
		}

		.home-hero__image {
			justify-self: end;
			align-self: center;
			margin-top: 4em;
			grid-column-start: 2;
		}

		.home-hero__image picture img {
			width: 20em;
		}

		.home-hero__svg1 {
			right: 14em;
			top: -1em;
			width: 5em;
		}

		.home-hero__svg2 {
			right: 16em;
			top: 2em;
			width: 7em;
		}

		.home-hero__svg3 {
			right: 17em;
			top: 6em;
			width: 11em;
		}

		.home-hero__svg4 {
			right: 16em;
			top: 15em;
			width: 10em;
		}
	}

	@media screen and (min-width: 1280px) {
		.home-hero__title {
			font-size: 3.5em;
		}

		.home-hero__image picture img {
			width: 23em;
		}

		.home-hero__svg1 {
			right: 16em;
			top: -1em;
			width: 6em;
		}

		.home-hero__svg2 {
			right: 18em;
			top: 3em;
			width: 9em;
		}

		.home-hero__svg3 {
			right: 20em;
			top: 7em;
			width: 11em;
		}

		.home-hero__svg4 {
			right: 18em;
			top: 16em;
			width: 12em;
		}
	}

	@media screen and (min-width: 1800px) {
		.home-hero__title {
			font-size: 5em;
		}

		.home-hero__image picture img {
			width: 27em;
		}

		.home-hero__svg1 {
			right: 19em;
			top: -1em;
			width: 7em;
		}

		.home-hero__svg2 {
			right: 21em;
			top: 2em;
			width: 12em;
			transform: rotate(-20deg);
		}

		.home-hero__svg3 {
			right: 23em;
			top: 10em;
			width: 13em;
			transform: rotate(-10deg);
		}

		.home-hero__svg4 {
			right: 22em;
			top: 21em;
			width: 12em;
		}
	}
</style>
