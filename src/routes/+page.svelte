<script lang="ts">
	import SeoHead from "$lib/components/SeoHead.svelte";
	import FAQ from "$lib/components/FAQ.svelte";
	import FeedbackSection from "$lib/components/FeedbackSection.svelte";
	import SpanifyText from "$lib/components/SpanifyText.svelte";
	import { homeFaqs } from "$lib/data/faqs";
	import { openBookingModal } from "$lib/stores/uiStore.svelte";
	import { isIntersecting } from "$lib/utils/isIntersecting";
</script>

<SeoHead />

<svelte:head>
	<link rel="preload" as="image" href="/assets/images/treatment-1.png" />
	<link rel="preload" as="image" href="/assets/images/svgs/plant-1.svg" />
	<link rel="preload" as="image" href="/assets/images/svgs/plant-2.svg" />
	<link rel="preload" as="image" href="/assets/images/svgs/plant-3.svg" />
	<link rel="preload" as="image" href="/assets/images/svgs/plant-4.svg" />
	<link rel="preload" as="image" href="/assets/images/svgs/chalk-1.svg" />

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
			width: 15rem;
			height: auto;
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
	</style>
</svelte:head>

<main>
	<section class="hero">
		<div class="hero-text">
			<h2 class="hero-title">
				Providing <span>holistic<img src="/assets/images/svgs/chalk-1.svg" class="hero-chalk" alt="chalk outline" /></span> care for all ages and stages
			</h2>

			<p>Osteopathy and lactation support to relieve pain, restore function, and help you feel more like yourself.</p>
			<button class="button button-primary" onclick={openBookingModal}>Book Session</button>
		</div>
		<div class="hero-image">
			<img class="hero-svg1 svg" src="/assets/images/svgs/plant-1.svg" alt="plant svg" fetchpriority="high" />
			<img class="hero-svg2 svg" src="/assets/images/svgs/plant-2.svg" alt="plant svg" fetchpriority="high" />
			<img class="hero-svg3 svg" src="/assets/images/svgs/plant-3.svg" alt="plant svg" fetchpriority="high" />
			<img class="hero-svg4 svg" src="/assets/images/svgs/plant-4.svg" alt="plant svg" fetchpriority="high" />

			<picture>
				<source srcset="/assets/images/treatment-1.webp" type="image/webp" />
				<source srcset="/assets/images/treatment-1.png" type="image/jpeg" />
				<img src="/assets/images/treatment-1.png" alt="Michelle treating a client" width="240px" height="302px" fetchpriority="high" />
			</picture>
		</div>
	</section>
	<section class="services">
		<h2 class="heading-fade-in" use:isIntersecting>
			<SpanifyText text="Services I provide" />
		</h2>
		<div class="services-container">
			<div class="services-card scroll-fade-up" use:isIntersecting>
				<div class="services-card-heading">
					<div class="services-card-icon">
						<img src="/assets/images/svgs/services-1.svg" alt="osteo svg" />
					</div>
					<h3>Osteopathy</h3>
					<p class="subtitle">Gentle, hands-on treatment for pain and mobility</p>
				</div>
				<hr />
				<p>
					Osteopathy uses gentle, manual techniques to relieve pain, improve mobility, and support recovery from injury. Suitable for all ages, it
					focuses on restoring balance and promoting overall wellbeing through a whole-body approach.
				</p>
			</div>
			<div class="services-card scroll-fade-up" use:isIntersecting>
				<div class="services-card-heading">
					<div class="services-card-icon">
						<img src="/assets/images/svgs/services-2.svg" alt="lactation svg" />
					</div>
					<h3>Lactation Consultation</h3>
					<p class="subtitle">Personalised support for your breastfeeding journey</p>
				</div>
				<hr />
				<p>
					As an IBCLC-certified consultant, I provide personalised guidance to help with latching, positioning, and milk supply. Whether in person or
					online, sessions are tailored to meet your baby’s needs and support your feeding goals with confidence.
				</p>
			</div>
			<div class="services-card scroll-fade-up" use:isIntersecting>
				<div class="services-card-heading">
					<div class="services-card-icon">
						<img src="/assets/images/svgs/services-3.svg" alt="osteo svg" />
					</div>
					<h3>Combination Treatment</h3>
					<p class="subtitle">Integrated care for body and breastfeeding</p>
				</div>
				<hr />
				<p>
					This treatment blends osteopathic care with lactation support, addressing both physical discomfort and feeding challenges. It’s a holistic
					option for new parents seeking complete, gentle care during postpartum recovery.
				</p>
			</div>
		</div>
		<a href="/services" class="button button-secondary">See Services</a>
		<img class="services-svg" src="/assets/images/svgs/plant-5.svg" alt="plant svg" />
	</section>
	<section class="benefits">
		<div class="benefits-text">
			<h2 use:isIntersecting class="scroll-fade-up">
				Could <span>osteopathy<img src="/assets/images/svgs/chalk-1.svg" alt="chalk outline" /></span> help you feel better?
			</h2>
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
		<div class="benefits-image scroll-fade-up" use:isIntersecting>
			<picture>
				<source srcset="/assets/images/treatment-2.webp" type="image/webp" />
				<source srcset="/assets/images/treatment-2.jpg" type="image/jpeg" />
				<img src="/assets/images/treatment-2.jpg" alt="Michelle treating a client" loading="lazy" />
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
		<div class="vision-image scroll-fade-up" use:isIntersecting>
			<picture>
				<source srcset="/assets/images/profile-2.webp" type="image/webp" />
				<source srcset="/assets/images/profile-2.png" type="image/jpeg" />
				<img src="/assets/images/profile-2.png" alt="Michelle treating a client" loading="lazy" />
			</picture>
			<img src="assets/images/svgs/plant-8.svg" alt="svg of a plant" class="benefits-svg-1 svg" />
		</div>
	</section>
	<section class="promise">
		<h2 use:isIntersecting class="heading-fade-in">
			<span> <SpanifyText text="What to expect" /> <img src="/assets/images/svgs/chalk-3.svg" alt="chalk" /></span>
		</h2>
		<div class="promise-cards">
			<div class="promise-card scroll-fade-up" use:isIntersecting>
				<h3>Personalized Care</h3>
				<p>No two people are the same — your session is shaped around your unique needs.</p>
			</div>
			<div class="promise-card scroll-fade-up" use:isIntersecting>
				<h3>Whole-Body Focus</h3>
				<p>We work with the body as a whole, not just isolated symptoms.</p>
			</div>
			<div class="promise-card scroll-fade-up" use:isIntersecting>
				<h3>Sustainable Relief</h3>
				<p>I support your body's long-term healing and function for lasting comfort and improved movement.</p>
			</div>
		</div>
		<div class="promise-contact">
			<img src="/assets/images/svgs/arrow-1.svg" alt="arrow" />
			<div class="promise-link">
				<p>Wondering if this type of care could help you?</p>
				<a href="/contact" use:isIntersecting class="scroll-fade-up">Let's connect<img src="/assets/images/svgs/chalk-4.svg" alt="chalk line" /></a>
			</div>
			<img src="/assets/images/svgs/arrow-1.svg" alt="arrow" />
		</div>
	</section>
	<FeedbackSection />
	<section class="faq">
		<h3 class="heading-fade-in" use:isIntersecting>
			<SpanifyText text="My frequently asked questions" />
		</h3>
		<FAQ faqs={homeFaqs} />
	</section>
</main>

<style>
	/* Services -------------------------------------------------------------------------------- */
	section.services {
		position: relative;
		background-color: var(--color-greyscale-1);
		color: var(--color-white);
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	section.services h2 {
		font-size: var(--font-heading-m);
		text-align: center;
		font-weight: 300;
		margin-bottom: 2rem;
	}

	section.services h2,
	section.services div.services-container,
	section.services a.button {
		position: relative;
		z-index: 1;
	}

	section.services img.services-svg {
		position: absolute;
		z-index: 0;
		bottom: 0;
		left: 2rem;
		min-height: 20em;
		max-width: unset;
	}

	section.services div.services-container {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-m);
	}

	div.services-card {
		max-width: 25rem;
		color: var(--color-black);
		border-radius: var(--spacing-s);
		background-color: var(--color-bronze-5);
		overflow: hidden;
		padding: var(--spacing-l) var(--spacing-m);
		box-shadow: 0 0 1rem #00000080;
		display: flex;
		flex-direction: column;
		gap: var(--spacing-s);
		justify-content: center;
		align-items: center;
	}

	div.services-card div.services-card-heading {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: var(--spacing-xs);
		height: fit-content;
	}

	div.services-card div.services-card-icon {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1rem;
		background-color: #ffffff40;
		box-shadow: 0 0.25rem 0.25rem #212c2105;
		border-radius: 50%;
	}

	div.services-card img {
		height: 3.5rem;
	}

	div.services-card h3 {
		font-size: var(--font-heading-s);
		font-weight: 400;
		margin-bottom: 0;
	}

	div.services-card h3,
	div.services-card p {
		text-align: center;
	}

	div.services-card p {
		font-size: var(--font-body-s);
		line-height: 1.4;
		font-family: var(--font-heading);
	}

	div.services-card hr {
		border: none;
		border-top: 2px solid var(--color-pine-2);
		opacity: 0.5;
		width: 65%;
		margin-bottom: 0.5rem;
	}

	div.services-card p.subtitle {
		font-weight: 300;
		max-width: 85%;
	}

	section.services a.button {
		margin-top: var(--spacing-l);
	}

	@media screen and (min-width: 640px) {
		section.services img.services-svg {
			height: 22rem;
		}
	}

	@media screen and (min-width: 1024px) {
		section.services div.services-container {
			flex-direction: row;
		}

		div.services-card {
			flex: 1;
			transition: 0.3s;
		}

		div.services-card:nth-of-type(2) {
			translate: 0 2rem;
		}

		/* This fixes a visual stutter */
		div.services-card:nth-of-type(1),
		div.services-card:nth-of-type(3) {
			translate: 0 0.01rem;
		}

		section.services a.button {
			margin-top: calc(var(--spacing-xl) + 1rem);
		}

		section.services h2 {
			margin-bottom: var(--spacing-xl);
		}

		section.services img.services-svg {
			height: 25rem;
		}
	}

	@media screen and (min-width: 1280px) {
		section.services div.services-container {
			gap: var(--spacing-l);
		}

		div.services-card {
			padding: var(--spacing-m) var(--spacing-l);
		}
	}

	@media (hover: hover) {
		div.services-card:hover {
			transform: translateY(-0.35rem);
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
		font-size: var(--font-heading-m);
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
		div.benefits-text h2 {
			font-size: var(--font-heading-s);
		}

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
		top: 100%;
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
		color: var(--color-pine-2);
		text-align: center;
	}

	section.promise div.promise-link img {
		scale: 1.1;
		translate: 0.5rem 0;
	}

	@media screen and (min-width: 1024px) {
		section.promise {
			gap: var(--spacing-l);
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
			margin: 0 auto;
		}

		section.faq h3 {
			font-size: var(--font-heading-s);
			margin-bottom: calc(var(--spacing-m) + var(--spacing-l));
		}
	}
</style>
