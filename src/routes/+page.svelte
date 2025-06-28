<script lang="ts">
	import SeoHead from "$lib/components/SeoHead.svelte";
	import FAQ from "$lib/components/FAQ.svelte";
	import { symptoms } from "$lib/data/symptoms";
	import FeedbackSection from "$lib/components/FeedbackSection.svelte";
	import { homeFaqs } from "$lib/data/faqs";
</script>

<SeoHead />

<main>
	<section class="hero">
		<div class="hero-text">
			<h2 class="hero-title">
				Providing <span>holistic<img src="/assets/images/svgs/chalk-1.svg" class="hero-chalk" alt="chalk outline" /></span> care for all ages and stages
			</h2>

			<p>Osteopathy and lactation support to relieve pain, restore function, and help you feel more like yourself.</p>
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
			<h2>Could <span>osteopathy<img src="/assets/images/svgs/chalk-1.svg" alt="chalk outline" /></span> help you feel better?</h2>
			<p>
				Osteopathy addresses the body as a whole — easing tension, improving movement, and helping you feel more like yourself. Osteopathic treatment
				may help to:
			</p>
			<ul>
				<li>Relieve pain and discomfort</li>
				<li>Improve mobility and circulation</li>
				<li>Reduce stress and restore balance</li>
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
	<section class="vision">
		<div class="vision-text">
			<p>"My goal is to find the root cause of your pain, symptoms, or reduced range of motion so you can get back to the activities you love."</p>
			<a href="/about" class="button button-primary">Read About Michelle</a>
		</div>
		<div class="vision-image">
			<picture>
				<source srcset="/assets/images/profile-2.webp" type="image/webp" />
				<source srcset="/assets/images/profile-2.png" type="image/jpeg" />
				<img src="/assets/images/profile-2.png" alt="Michelle treating a client" />
			</picture>
			<img src="assets/images/svgs/plant-8.svg" alt="svg of a plant" class="benefits-svg-1 svg" />
		</div>
	</section>
	<section class="promise">
		<h2><span>What to expect<img src="/assets/images/svgs/chalk-3.svg" alt="chalk" /></span></h2>
		<div class="promise-cards">
			<div class="promise-card">
				<h3>Personalized Care</h3>
				<p>No two people are the same — your session is shaped around your unique needs.</p>
			</div>
			<div class="promise-card">
				<h3>Whole-Body Focus</h3>
				<p>We work with the body as a whole, not just isolated symptoms.</p>
			</div>
			<div class="promise-card">
				<h3>Sustainable Relief</h3>
				<p>I support your body's long-term healing and function for lasting comfort and improved movement.</p>
			</div>
		</div>
		<div class="promise-contact">
			<img src="/assets/images/svgs/arrow-1.svg" alt="arrow" />
			<div class="promise-link">
				<p>Wondering if this type of care could help you?</p>
				<a href="/contact">Let's connect<img src="/assets/images/svgs/chalk-4.svg" alt="chalk line" /></a>
			</div>
			<img src="/assets/images/svgs/arrow-1.svg" alt="arrow" />
		</div>
	</section>
	<FeedbackSection />
	<section class="faq">
		<h3>My frequently asked questions</h3>
		<FAQ faqs={homeFaqs} />
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
		font-family: var(--font-heading);
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
		transform: translate(-0.1rem, -0.1rem);
		scale: 1.15;
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
		font-weight: 400;
	}

	div.benefits-text h2 span {
		font-family: var(--font-heading);
		position: relative;
		width: 100%;
	}

	div.benefits-text h2 span img {
		position: absolute;
		left: 0;
		top: 0;
		z-index: -1;
		transform: translate(0.1rem, -0.75rem);
		scale: 1.1;
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
			font-size: var(--font-heading-s);
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

	/* Vision ---------------------------------------------------------------------------------- */
	section.vision {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto auto;
		gap: var(--spacing-l);
	}

	div.vision-image {
		grid-row: 1;
		position: relative;
		display: grid;
		display: grid;
		grid-template-columns: 1fr;
		place-items: center;
		width: 100%;
	}

	div.vision-image picture img {
		position: relative;
		z-index: 100;
		width: 16em;
		justify-self: center;
		filter: drop-shadow(1rem 1rem 1rem #212c2190);
	}

	div.vision-image > img {
		position: absolute;
		justify-self: center;
		z-index: -1;
		width: 24rem;
		min-width: 24rem;
		bottom: -4rem;
		transform: translateX(-0.5rem);
	}

	div.vision-text {
		grid-row: 2;
		display: flex;
		flex-direction: column;
		gap: var(--spacing-m);
		align-items: center;
		text-align: center;
	}

	div.vision-text p {
		font-family: var(--font-heading);
		font-weight: 300;
		font-size: var(--font-body-l);
		line-height: 1.2;
	}

	@media screen and (min-width: 1024px) {
		section.vision {
			grid-template-columns: 1.5fr 1fr;
			grid-template-rows: unset;
			gap: var(--spacing-m);
		}

		div.vision-image {
			grid-row: unset;
			align-self: center;
		}

		div.vision-text {
			grid-row: unset;
			align-items: flex-start;
			justify-content: center;
			text-align: left;
			gap: var(--spacing-l);
		}

		div.vision-text p {
			font-size: var(--font-body-xl, 1.6rem);
			line-height: 1.6;
		}
	}

	@media screen and (min-width: 640px) {
		div.vision-image picture img {
			width: 18rem;
		}

		div.vision-image > img {
			width: 28em;
			min-width: 28em;
			bottom: -4.5em;
		}
	}

	@media screen and (min-width: 1280px) {
		div.vision-image picture img {
			width: 20rem;
		}

		div.vision-image > img {
			width: 32em;
			min-width: 32em;
			bottom: -5.5em;
		}
	}

	@media screen and (min-width: 1800px) {
		div.vision-image picture img {
			width: 22rem;
		}

		div.vision-image > img {
			width: 32em;
			min-width: 32em;
		}
	}

	/* Promise --------------------------------------------------------------------------------- */
	section.promise {
		padding-top: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--spacing-m);
	}

	section.promise h2 {
		font-size: var(--font-heading-s);
		text-align: center;
		font-weight: 400;
	}

	section.promise h2 span {
		font-family: var(--font-heading);
		position: relative;
		width: 100%;
	}

	section.promise h2 span img {
		position: absolute;
		translate: 0rem 0.75rem;
		z-index: -1;
		scale: 0.7;
	}

	section.promise .promise-cards {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		gap: var(--spacing-m);
		margin-top: var(--spacing-m);
	}

	section.promise .promise-card {
		max-width: 25rem;
		max-height: 15rem;
		background-color: var(--color-pine-2);
		color: var(--color-white);
		padding: var(--spacing-m) var(--spacing-l);
		border-radius: var(--spacing-s);
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	section.promise .promise-card h3 {
		font-size: 1.5rem;
		margin-bottom: var(--spacing-xs);
	}

	section.promise div.promise-contact > img {
		display: none;
	}

	section.promise div.promise-contact p {
		font-size: var(--font-body-l);
		font-family: var(--font-heading);
		text-align: center;
	}

	section.promise div.promise-link {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	section.promise div.promise-link a {
		font-size: var(--font-body-xl, 1.6rem);
		text-decoration: none;
		color: var(--color-bronze-1);
		text-align: center;
	}

	section.promise div.promise-link img {
		scale: 1.1;
		translate: 0.5rem 0;
	}

	@media screen and (min-width: 768px) {
		section.promise {
			gap: var(--spacing-l);
		}

		section.promise h2 span img {
			bottom: -2rem;
		}

		section.promise .promise-cards {
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: unset;
		}

		section.promise .promise-card {
			max-width: 30rem;
		}

		section.promise div.promise-contact > img {
			display: block;
			width: 4rem;
			margin-bottom: var(--spacing-xs);
		}

		section.promise div.promise-contact {
			display: flex;
			align-items: center;
			gap: var(--spacing-xs);
		}

		section.promise div.promise-contact > img:last-child {
			transform: scaleX(-1);
		}
	}

	@media screen and (min-width: 1280px) {
		section.promise .promise-cards {
			gap: var(--spacing-l);
		}

		section.promise .promise-card {
			padding: var(--spacing-l) var(--spacing-m);
		}

		section.promise div.promise-contact > img {
			width: 6rem;
		}
	}

	/* FAQ ------------------------------------------------------------------------------------- */
	section.faq h3 {
		font-size: var(--font-heading-m);
		font-weight: 400;
		text-align: center;
		margin-bottom: var(--spacing-l);
	}

	@media screen and (min-width: 1024px) {
		section.faq {
			max-width: 80%;
			margin: 0 auto;
		}

		section.faq h3 {
			font-size: var(--font-heading-s);
		}
	}
</style>
