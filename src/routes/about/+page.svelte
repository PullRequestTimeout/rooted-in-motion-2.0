<script lang="ts">
	import FeedbackSection from "$lib/components/FeedbackSection.svelte";
	import SeoHead from "$lib/components/SeoHead.svelte";
</script>

<SeoHead
	title="About | Rooted In Motion Osteopathy"
	description="Read about Michelle Coish, the osteopath behind Rooted In Motion Osteopathy, and her journey in the field of osteopathy."
></SeoHead>

<main>
	<section class="hero">
		<div class="hero-text">
			<h2 class="hero-title">Michelle<br />Coish</h2>
			<p>
				Helping with pain and movement by addressing the <span class="hero-chalk"
					><img src="/assets/images/svgs/chalk-4.svg" alt="chalk svg" />
					root&nbsp;cause</span
				>
			</p>
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
		<h2>My Story</h2>
		<p>
			I'm a manual therapist in my fourth year of study at the Canadian School of Osteopathy Manual Practice, one of the few five-year programs in
			Canada. I practice out of Madhu Wellness Collective, a multidisciplinary health clinic and yoga studio in Rossland, BC, as well as Spectrum
			Treatment Centre in Castlegar, BC. My therapeutic approach is informed by my years of post-secondary study, athletic conditioning, and
			self-study of various healing modalities, helping me to offer a holistic approach to my clients' health and wellness needs.
		</p>
		<p>
			In 2016, I discovered Rossland and was immediately captivated by its stunning landscapes and friendly community. After working as a registered
			nurse at the Kootenay Boundary Regional Hospital for three years, I decided to embark on a new career path as a manual therapist.
		</p>
		<p>
			Having always been fascinated by the human body's complexity and healing abilities, I earned a Bachelor of Science in Nursing in 2012 and
			primarily worked in labor and delivery, pediatrics, and public health. However, after experiencing burnout and seeing many patients suffer from
			chronic pain and illness with mixed results from Western medicine, I turned to manual therapy to pursue a proactive and holistic approach to
			health.
		</p>
		<p>
			In 2018, I was introduced to osteopathic manual therapy and immediately drawn to its client-centered approach and recognition of the
			interconnectedness of the body's systems. Having experienced the benefits of this therapy firsthand, I am committed to making it more accessible
			to our community through affordable student rates. As a practitioner, my goal is to identify the root cause of my clients' concerns and provide
			long-lasting relief. Above all, I am passionate about helping my clients discover their innate health and wellness.
		</p>
		<p>
			If you're ready to discover the benefits of osteopathic manual therapy and achieve long-lasting relief from your pain and symptoms, let's
			connect! Book a session with me today and take the first step towards optimizing your health and wellness.
		</p>
	</section>
	<FeedbackSection />
</main>

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

	div.hero-text p {
		font-size: 1.6em;
		font-family: "Raleway", sans-serif;
		line-height: 1.3;
	}

	span.hero-chalk {
		position: relative;
		font-family: var(--font-heading);
		font-weight: 400;
	}

	span.hero-chalk img {
		position: absolute;
		width: 100%;
		bottom: -0.5rem;
		left: 0;
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
		transform: translateY(calc(0.2em + var(--padding-block)));
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
			margin-bottom: 2rem;
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

	/* My Story -------------------------------------------------------------------------------- */
	section.about-me h2 {
		font-size: 2em;
		font-weight: 400;
	}

	section.about-me p {
		margin: 1em 0;
		font-size: var(--font-body-m);
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
