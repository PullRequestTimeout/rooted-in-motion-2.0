<script lang="ts">
	import SeoHead from "$lib/components/SeoHead.svelte";
	import Faq from "$lib/components/FAQ.svelte";
	import FeedbackCarousel from "$lib/components/FeedbackCarousel.svelte";
	import { symptoms } from "$lib/data/symptoms";
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
		<img class="symptoms-svg" src="/assets/images/svgs/plant-5.svg" alt="plant svg" />
	</section>
	<section class="benefits">
		<div class="benefits-text">
			<h2>Do <span>you<img src="/assets/images/svgs/chalk-2.svg" alt="chalk outline" /></span> need osteopathy?</h2>
			<p>
				If you are having difficulty moving freely due to pain, reduced range of motion, or decreased strength, you may benefit from working with an
				osteopath.
			</p>
			<ul>
				<li>Modulate pain</li>
				<li>Increase joint mobility</li>
				<li>Induce relaxation</li>
			</ul>
		</div>
		<div class="benefits-image">
			<picture>
				<source srcset="/assets/images/treatment-2.webp" type="image/webp" />
				<source srcset="/assets/images/treatment-2.jpg" type="image/jpeg" />
				<img src="/assets/images/treatment-2.jpg" alt="Michelle treating a client" />
			</picture>
			<div class="benefits-image-shadow"></div>
			<img src="assets/images/svgs/plant-6.svg" alt="svg of a plant" class="benefits-svg-1 svg" />
			<img src="assets/images/svgs/plant-7.svg" alt="svg of a plant" class="benefits-svg-2 svg" />
		</div>
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
			max-width: 50rem;
		}

		section.symptoms div.symptoms-item:last-child {
			grid-column: unset;
		}

		section.symptoms img.symptoms-svg {
			height: 25rem;
		}
	}

	/* Benefits -------------------------------------------------------------------------------- */
	section.benefits {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-l);
		background-color: var(--color-bronze-6);
	}

	div.benefits-text {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-m);
		font-weight: 300;
	}

	div.benefits-text h2 {
		font-size: var(--font-heading-s);
		position: relative;
		z-index: 1;
	}

	div.benefits-text h2 span {
		position: relative;
		width: 100%;
	}

	div.benefits-text h2 span img {
		position: absolute;
		left: 0;
		top: 0;
		z-index: -1;
		width: 110%;
		transform: translate(0.1rem, 0.2rem);
	}

	div.benefits-text p,
	div.benefits-text ul {
		font-size: var(--font-body-l);
		line-height: 1.2;
	}

	div.benefits-text ul {
		padding: 0;
		list-style: none;
		list-style-type: none;
	}

	div.benefits-text ul li::before {
		content: "✔";
		color: var(--color-pine-3);
		margin-right: var(--spacing-m);
	}

	div.benefits-image {
		position: relative;
		justify-self: center;
		align-self: center;
		margin: var(--spacing-m);
	}

	div.benefits-image img:not(.svg) {
		position: relative;
		z-index: 10;
		width: 15em;
		justify-self: center;
		border-radius: var(--spacing-s);
		filter: drop-shadow(0 0 0.5rem var(--color-black));
	}

	div.benefits-image-shadow {
		position: absolute;
		background-color: var(--color-pine-4);
		border-radius: 0.5em;
		width: 15em;
		aspect-ratio: 3 / 4;
		top: 1em;
		left: 1em;
		z-index: 0;
	}

	div.benefits-image .svg {
		position: absolute;
		bottom: -1em;
		width: 5em;
	}

	div.benefits-image img.benefits-svg-1 {
		left: -2.5rem;
	}

	div.benefits-image img.benefits-svg-2 {
		right: -2.5rem;
	}

	@media screen and (min-width: 640px) {
		div.benefits-text {
			text-align: center;
		}

		div.benefits-text ul {
			display: flex;
			gap: var(--spacing-s);
			justify-content: center;
		}
	}

	@media screen and (min-width: 768px) {
		div.benefits-image img:not(.svg),
		div.benefits-image-shadow {
			width: 20em;
		}

		div.benefits-image img.svg {
			width: 7rem;
		}

		div.benefits-image img.benefits-svg-1 {
			left: -4rem;
		}

		div.benefits-image img.benefits-svg-2 {
			right: -4rem;
		}
	}

	@media screen and (min-width: 1024px) {
		section.benefits {
			grid-template-columns: 1.5fr 1fr;
			gap: var(--spacing-m);
		}

		div.benefits-text {
			text-align: left;
		}

		div.benefits-text h2 {
			font-size: var(--font-heading-m);
		}

		div.benefits-text ul {
			display: unset;
		}

		div.benefits-text p,
		div.benefits-text ul {
			font-size: var(--font-body-xl, 1.6rem);
		}

		div.benefits-image img:not(.svg),
		div.benefits-image-shadow {
			width: 15rem;
		}

		div.benefits-image img.svg {
			width: 5rem;
		}

		div.benefits-image img.benefits-svg-1 {
			left: -3rem;
		}

		div.benefits-image img.benefits-svg-2 {
			right: -3rem;
		}
	}

	@media screen and (min-width: 1280px) {
		div.benefits-text {
			gap: var(--spacing-l);
		}

		div.benefits-text p,
		div.benefits-text ul {
			line-height: 1.6;
		}

		div.benefits-image img:not(.svg),
		div.benefits-image-shadow {
			width: 20rem;
		}

		div.benefits-image img.svg {
			width: 7rem;
		}

		div.benefits-image img.benefits-svg-1 {
			left: -4rem;
		}

		div.benefits-image img.benefits-svg-2 {
			right: -4rem;
		}
	}
</style>
