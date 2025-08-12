<script lang="ts">
	import SeoHead from "$lib/components/SeoHead.svelte";
	import Faq from "$lib/components/FAQ.svelte";
	import { symptoms } from "$lib/data/symptoms";
	import { osteoFaqs, lactationFaqs } from "$lib/data/faqs";
</script>

<SeoHead
	title="Services | Rooted In Motion Osteopathy"
	description="Explore the services offered by Rooted In Motion Osteopathy, including osteopathy, lactation consulting, and more."
></SeoHead>

<section class="hero">
	<div class="hero-text">
		<h1>Our <br />Services</h1>
		<p>Providing Osteopathic Treatment and Lactation Consultation to the West Kootenays</p>
	</div>
	<div class="hero-image">
		<img src="/assets/images/svgs/plant-16.svg" alt="plant svg" class="svg hero-svg-3" />
		<img src="/assets/images/svgs/plant-15.svg" alt="plant svg" class="svg hero-svg-2" />
		<img src="/assets/images/svgs/plant-14.svg" alt="plant svg" class="svg hero-svg-1" />
		<picture>
			<source srcset="/assets/images/profile-3.webp" type="image/webp" />
			<source srcset="/assets/images/profile-3.png" type="image/jpeg" />
			<img src="/assets/images/profile-3.png" alt="Michelle treating a client" />
		</picture>
	</div>
</section>

<section class="osteo">
	<img class="symptoms-svg" src="/assets/images/svgs/plant-5.svg" alt="plant svg" />
	<div class="osteo-text">
		<h2>Osteopathic Manual Therapy</h2>
		<p>
			Osteopathy is a gentle, hands-on approach to manual therapy that considers the whole body. Treatment focuses on how your muscles, joints,
			fascia, blood vessels, and nerves all work together—helping to relieve pain, improve movement, and restore overall function. I support clients
			of all ages and stages, using an individualized approach to get to the root of your symptoms.
		</p>
	</div>
	<div class="osteo-image">
		<picture>
			<source srcset="/assets/images/treatment-4.webp" type="image/webp" />
			<source srcset="/assets/images/treatment-4.jpg" type="image/jpeg" />
			<img src="/assets/images/treatment-4.jpg" alt="Michelle treating a client" />
		</picture>
	</div>
</section>
<section class="symptoms">
	<h2>Symptoms I work with</h2>
	<div class="symptoms-list">
		{#each symptoms as symptom, i}
			<div class="symptoms-item">
				<button class="button button-primary" aria-label={`${symptom.title} modal button`}>
					<img src={`assets/images/svgs/symptom-${i + 1}.svg`} alt={`${symptom.title} icon`} />
					<img src={`assets/images/svgs/symptom-${i + 1}-white.svg`} alt={`${symptom.title} icon`} />
				</button>
				<p>{symptom.title}</p>
			</div>
		{/each}
	</div>
	<a href="/services" class="button button-secondary">Read More</a>
</section>
<section class="osteo-faq">
	<h2>Questions I get asked about Osteopathy</h2>
	<Faq darkMode={true} faqs={osteoFaqs} />
</section>

<section class="lactation"></section>
<section>
	<Faq faqs={lactationFaqs} />
</section>

<style>
	/* Hero ------------------------------------------------------------------------------------ */
	section.hero {
		display: grid;
		grid-template-columns: 1fr;
		background: linear-gradient(#00000000, #e9c69aff);
	}

	section.hero div.hero-text {
		padding: 7em 0 2em 0;
	}

	section.hero div.hero-text br {
		height: 0;
		width: 0;
	}

	section.hero div.hero-text h1 {
		font-family: "Oswald", sans-serif;
		font-weight: 700;
		line-height: 1;
		color: var(--color-pine-6);
		font-size: 5em;
	}

	section.hero div.hero-text p {
		font-size: var(--font-heading-s);
		font-family: "Raleway", sans-serif;
		line-height: 1.3;
		font-weight: 300;
		max-width: 80%;
	}

	section.hero div.hero-image {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	section.hero div.hero-image picture img {
		width: 15rem;
		filter: drop-shadow(0px 0px 1em var(--color-bronze-2));
	}

	section.hero div.hero-image .svg {
		position: absolute;
	}

	section.hero div.hero-image .hero-svg-1 {
		right: calc(50% - 1rem);
		bottom: 0;
		height: 8em;
	}

	section.hero div.hero-image .hero-svg-2 {
		right: calc(50% + 5rem);
		bottom: 8rem;
		height: 6em;
	}

	section.hero div.hero-image .hero-svg-3 {
		right: calc(50% + 5.5rem);
		bottom: 14rem;
		height: 4em;
	}

	@media screen and (min-width: 640px) {
		section.hero div.hero-image picture img {
			width: 20rem;
		}

		section.hero div.hero-image .hero-svg-1 {
			right: calc(50%);
			bottom: 1rem;
			height: 10em;
		}

		section.hero div.hero-image .hero-svg-2 {
			right: calc(50% + 7rem);
			bottom: 11rem;
			height: 8em;
		}

		section.hero div.hero-image .hero-svg-3 {
			right: calc(50% + 8rem);
			bottom: 18rem;
			height: 6em;
		}
	}

	@media screen and (min-width: 768px) {
		section.hero div.hero-text h1 {
			font-size: 6em;
		}
	}

	@media screen and (min-width: 1024px) {
		section.hero {
			grid-template-columns: 1fr 1fr;
			align-items: center;
			gap: var(--spacing-l);
		}

		section.hero div.hero-text {
			/* height: 100%; */
			padding: 0;
			display: grid;
			grid-template-rows: 1fr;
			align-items: center;
		}

		section.hero div.hero-image {
			justify-content: flex-end;
			padding-top: 2rem;
		}

		section.hero div.hero-image picture img {
			width: 18rem;
		}

		section.hero div.hero-text p {
			font-size: var(--font-body-l);
		}

		section.hero div.hero-image .hero-svg-1 {
			right: 10rem;
		}

		section.hero div.hero-image .hero-svg-2 {
			right: 15rem;
		}

		section.hero div.hero-image .hero-svg-3 {
			right: 15rem;
		}
	}

	@media screen and (min-width: 1280px) {
		section.hero div.hero-image {
			padding-top: 4rem;
		}

		section.hero div.hero-text h1 {
			font-size: 7em;
		}

		section.hero div.hero-text p {
			font-size: calc(var(--font-body-l) * 1.2);
		}

		section.hero div.hero-image picture img {
			width: 22rem;
		}

		section.hero div.hero-image .hero-svg-1 {
			right: 13rem;
			bottom: 2rem;
		}

		section.hero div.hero-image .hero-svg-2 {
			right: 19rem;
			bottom: 13rem;
		}

		section.hero div.hero-image .hero-svg-3 {
			right: 19rem;
			bottom: 20rem;
		}
	}

	@media screen and (min-width: 1440px) {
		section.hero div.hero-image picture img {
			width: 24rem;
		}

		section.hero div.hero-image .hero-svg-1 {
			right: 15rem;
			bottom: 3rem;
		}

		section.hero div.hero-image .hero-svg-2 {
			right: 22rem;
			bottom: 15rem;
		}

		section.hero div.hero-image .hero-svg-3 {
			right: 22rem;
			bottom: 23rem;
		}
	}

	@media screen and (min-width: 1600px) {
		section.hero div.hero-text h1 {
			font-size: 8em;
		}

		section.hero div.hero-image picture img {
			width: 26rem;
		}

		section.hero div.hero-image .hero-svg-1 {
			right: 18rem;
			bottom: 4rem;
			height: 12rem;
		}

		section.hero div.hero-image .hero-svg-2 {
			right: 25rem;
			bottom: 17rem;
			height: 10rem;
		}

		section.hero div.hero-image .hero-svg-3 {
			right: 23rem;
			bottom: 25rem;
			height: 8rem;
		}
	}

	/* Osteopathy ------------------------------------------------------------------------------ */
	section.osteo {
		position: relative;
		background-color: var(--color-greyscale-1);
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-m);
		overflow: hidden;
	}

	section.osteo img.symptoms-svg {
		position: absolute;
		z-index: 0;
		top: 0;
		right: -2rem;
		min-height: 20em;
		max-width: unset;
		rotate: 180deg;
	}

	section.osteo div {
		position: relative;
		z-index: 1;
	}

	section.osteo div.osteo-text {
		color: var(--color-white);
	}

	section.osteo div.osteo-text h2 {
		font-size: var(--font-heading-m);
		font-weight: 400;
	}

	section.osteo div.osteo-text p {
		font-size: var(--font-body-l);
		line-height: 1.3;
		font-weight: 300;
	}

	section.osteo div.osteo-image {
		padding: 0 1rem 1rem 0;
	}

	section.osteo div.osteo-image img {
		border-radius: var(--spacing-s);
		box-shadow: 1rem 1rem 0 var(--color-bronze-3);
	}

	@media screen and (min-width: 640px) {
		section.osteo {
			gap: var(--spacing-l);
		}
	}

	@media screen and (min-width: 1024px) {
		section.osteo {
			grid-template-columns: 1fr 1fr;
			gap: var(--spacing-xl);
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
		padding-block: 0;
	}

	section.symptoms h2 {
		font-size: var(--font-heading-s);
		font-weight: 400;
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
		text-align: center;
		max-width: 25rem;
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
		display: grid;
		grid-template-areas: "stack";
		padding: 0;
	}

	section.symptoms div.symptoms-item button img {
		grid-area: stack;
		height: 4rem;
		width: 3rem;
		transition: opacity 0.3s ease-in-out;
	}

	section.symptoms div.symptoms-item button img:last-child {
		opacity: 0;
	}

	section.symptoms div.symptoms-item button:hover img:first-child {
		opacity: 0;
	}

	section.symptoms div.symptoms-item button:hover img:last-child {
		opacity: 1;
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

		section.osteo img.symptoms-svg {
			height: 22rem;
		}
	}

	@media screen and (min-width: 1024px) {
		section.symptoms {
			gap: var(--spacing-l);
		}

		section.symptoms div.symptoms-list {
			grid-template-columns: repeat(5, 1fr);
			max-width: 50rem;
		}

		section.symptoms div.symptoms-item:last-child {
			grid-column: unset;
		}

		section.osteo img.symptoms-svg {
			height: 25rem;
		}
	}

	/* Osteopathy FAQ -------------------------------------------------------------------------- */
	section.osteo-faq {
		background-color: var(--color-greyscale-1);
	}

	section.osteo-faq h2 {
		text-align: center;
		font-size: var(--font-heading-s);
		font-weight: 400;
	}

	section.osteo-faq * {
		color: var(--color-white);
	}
</style>
