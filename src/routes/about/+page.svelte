<script lang="ts">
	import FeedbackSection from "$lib/components/FeedbackSection.svelte";
	import SeoHead from "$lib/components/SeoHead.svelte";
	import SpanifyText from "$lib/components/SpanifyText.svelte";
	import { isIntersecting } from "$lib/utils/isIntersecting";
</script>

<SeoHead
	title="About | Rooted In Motion Osteopathy"
	description="Read about Michelle Coish, the osteopath behind Rooted In Motion Osteopathy, and her journey in the field of osteopathy."
></SeoHead>

<svelte:head>
	<style>
		/* Hero ------------------------------------------------------------------------------------ */

		section.hero {
			display: grid;
			grid-template-columns: 1fr;
			padding: unset;
		}

		div.hero-text {
			background-color: #fff;
			padding: 7em 1em 2em 1em;
		}

		h2.hero-title {
			font-family: "Oswald", sans-serif;
			font-weight: 700;
			color: var(--color-pine-6);
			font-size: 5em;
			margin-bottom: 1rem;
		}

		div.hero-text > p {
			font-size: 1.6em;
			font-family: "Raleway", sans-serif;
			line-height: 1.3;
			font-weight: 300;
		}

		div.hero-text div.hero-text-credentials {
			display: flex;
			gap: 0.5rem;
			font-weight: 700;
			font-size: 0.85rem;
		}

		div.hero-text div.hero-text-credentials p {
			background-color: var(--color-pine-5);
			color: var(--color-pine-1);
			padding: 0.25rem 0.75rem;
			border-radius: 1.5rem;
		}

		div.hero-image {
			padding-top: 2em;
			display: flex;
			justify-content: center;
			position: relative;
			background-color: var(--color-bronze-7);
			overflow: hidden;
		}

		div.hero-image img:not(.svg) {
			position: relative;
			transform: translateY(calc(0.75rem + var(--padding-block)));
			z-index: 10;
			width: 20em;
			filter: drop-shadow(1em 1em 1em var(--color-black));
		}

		img.hero-svg1,
		img.hero-svg2,
		img.hero-svg3 {
			position: absolute;
			z-index: 5;
			filter: drop-shadow(1px 1px 3px var(--color-greyscale-1));
		}

		img.hero-svg1,
		img.hero-svg3 {
			width: 7em;
			bottom: 9em;
		}

		img.hero-svg1 {
			transform: translateX(-7em);
		}

		img.hero-svg3 {
			transform: translateX(7em);
		}

		img.hero-svg2 {
			width: 12em;
			bottom: 10em;
		}

		div.hero-circle {
			position: absolute;
			width: 17em;
			aspect-ratio: 1;
			bottom: 4em;
			border-radius: 50%;
			background-color: var(--color-bronze-3);
		}

		@media screen and (min-width: 640px) {
			div.hero-text {
				padding: 9em 2em 4em 2em;
			}

			h2.hero-title {
				font-size: 7em;
			}

			div.hero-image img:not(.svg) {
				width: 25em;
			}

			img.hero-svg1,
			img.hero-svg3 {
				width: 8em;
				bottom: 11em;
			}

			img.hero-svg1 {
				transform: translateX(-9em);
			}

			img.hero-svg3 {
				transform: translateX(9em);
			}

			img.hero-svg2 {
				width: 15em;
				bottom: 11em;
			}

			div.hero-circle {
				width: 22em;
				bottom: 1em;
			}
		}

		@media screen and (min-width: 768px) {
			div.hero-text {
				padding: 9em 4em 4em 4em;
			}
		}

		@media screen and (min-width: 1024px) {
			section.hero {
				grid-template-columns: auto 60%;
			}

			div.hero-text {
				padding: 11em 2em 4em 6em;
			}

			h2.hero-title {
				font-size: 5em;
				margin-bottom: 1rem;
			}
		}

		@media screen and (min-width: 1280px) {
			div.hero-text {
				padding: 9em 2em 4em 8em;
			}

			h2.hero-title {
				font-size: 7em;
			}
		}

		@media screen and (min-width: 1536px) {
			div.hero-text {
				padding: 11em 2em 4em 10em;
			}
		}

		@media screen and (min-width: 1800px) {
			div.hero-text {
				padding: 11em 2em 4em 14em;
			}
		}
	</style>
</svelte:head>

<main>
	<section class="hero">
		<div class="hero-text">
			<h2 class="hero-title">Michelle<br />Coish</h2>
			<div class="hero-text-credentials">
				<p>DOMP</p>
				<p>IBCLC</p>
				<p>BScN</p>
			</div>
			<p>Osteopathic Practitioner & Lactation Consultant</p>
		</div>
		<div class="hero-image">
			<picture>
				<source srcset="/assets/images/profile-1.webp" type="image/webp" />
				<source srcset="/assets/images/profile-1.png" type="image/jpeg" />
				<img src="/assets/images/profile-1.png" alt="Michelle Coish" />
			</picture>
			<img src="/assets/images/svgs/plant-11.svg" alt="plant svg" class="hero-svg1 svg" />
			<img src="/assets/images/svgs/plant-12.svg" alt="plant svg" class="hero-svg2 svg" />
			<img src="/assets/images/svgs/plant-13.svg" alt="plant svg" class="hero-svg3 svg" />
			<div class="hero-circle"></div>
		</div>
	</section>
	<section class="about-me">
		<h2 class="heading-fade-in" use:isIntersecting={{ threshold: 0.5, once: true, class: "show" }}>
			<SpanifyText text="My Story" />
		</h2>
		<p use:isIntersecting class="scroll-fade-up">
			I'm Michelle — an osteopathic practitioner and lactation consultant providing hands-on treatment for pain, tension, feeding issues, and
			hormone-related concerns across all stages of life. My work is shaped by over a decade of clinical experience and a holistic, client-centered
			approach that focuses on uncovering and treating the root cause of each person's concerns.
		</p>
		<p use:isIntersecting class="scroll-fade-up">
			I provide osteopathic treatment in Rossland and Castlegar, BC, and provide virtual lactation consultations to families across Canada. I work
			primarily with women, parents, and growing families — supporting recovery from injury, birth, and chronic stress, as well as navigating
			menstrual concerns, pregnancy, postpartum, and infant feeding challenges. My goal is always to understand the full picture and help restore
			balance, movement, and function.
		</p>
		<p use:isIntersecting class="scroll-fade-up">
			I completed the five-year program at the Canadian School of Osteopathy Manual Practice in Vancouver and hold a Bachelor of Science in Nursing,
			with clinical experience in labour and delivery, pediatrics, and public health. As an International Board Certified Lactation Consultant
			(IBCLC), I integrate infant feeding support into my osteopathic care when needed.
		</p>
		<p use:isIntersecting class="scroll-fade-up">
			I'm a member of Osteopathy BC, and my treatments are eligible for most extended health benefits. Combining osteopathy and lactation consulting,
			I provide comprehensive, compassionate care to help you feel better, move more freely, and feed with confidence.
		</p>
		<p use:isIntersecting class="scroll-fade-up">I'm excited to meet you and support your journey—get in touch to learn how I can help!</p>
	</section>
	<FeedbackSection />
</main>

<style>
	/* My Story -------------------------------------------------------------------------------- */
	section.about-me h2 {
		font-size: 2em;
		font-weight: 400;
	}

	section.about-me p {
		margin: 1em 0;
		font-size: var(--font-body-s);
		line-height: 1.3;
	}

	@media screen and (min-width: 640px) {
		section.about-me h2 {
			font-size: 3em;
			margin-bottom: 1rem;
		}
	}

	@media screen and (min-width: 1024px) {
		section.about-me h2 {
			margin-bottom: 2rem;
		}
	}

	@media screen and (min-width: 1280px) {
		section.about-me p {
			margin: 2rem 0;
			line-height: 1.4;
		}
	}
</style>
