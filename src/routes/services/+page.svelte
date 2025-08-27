<script lang="ts">
	import SeoHead from "$lib/components/SeoHead.svelte";
	import Faq from "$lib/components/FAQ.svelte";
	import { symptoms } from "$lib/data/symptoms";
	import { osteoFaqs, lactationFaqs } from "$lib/data/faqs";
	import { fade } from "svelte/transition";
	import { clickOutside } from "$lib/utils/clickOutside";
	import { openBookingModal } from "$lib/stores/uiStore.svelte";

	let modalOpen = $state(false);
	let modalContent = $state<{ title: string; description: string[] }>({ title: "", description: [] });
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

<section class="osteo" id="osteopathy">
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
	<h2>What brings people in</h2>
	<div class="symptoms-list">
		{#each symptoms as symptom, i}
			<div class="symptoms-item">
				<button
					class="button button-primary"
					aria-label={`${symptom.title} modal button`}
					onclick={() => {
						modalOpen = true;
						modalContent = { title: symptom.title, description: symptom.description };
					}}
				>
					<img src={`assets/images/svgs/symptom-${i + 1}.svg`} alt={`${symptom.title} icon`} />
					<img src={`assets/images/svgs/symptom-${i + 1}-white.svg`} alt={`${symptom.title} icon`} />
				</button>
				<p>{symptom.title}</p>
			</div>
		{/each}
	</div>
	<button class="button button-secondary" onclick={openBookingModal}>Book Session</button>
</section>
<section class="osteo-faq">
	<h2>Questions I get asked about Osteopathy</h2>
	<Faq darkMode={true} faqs={osteoFaqs} />
</section>

<div class="boob-background">
	<section class="osteo lactation" id="lactation">
		<div class="osteo-text">
			<h2>Lactation Consultation</h2>
			<p>
				Whether you're exclusively breastfeeding, pumping, combo feeding, or using formula, I provide in person and virtual consults to help you meet
				your feeding goals with confidence. From newborn feeding challenges to complex cases, I combine IBCLC expertise with a whole-person approach
				that centers your values and your baby's needs. In person consults available in Rossland, BC and virtual consults are available across Canada.
			</p>
		</div>
		<div class="osteo-image">
			<picture>
				<source srcset="/assets/images/profile-4.webp" type="image/webp" />
				<source srcset="/assets/images/profile-4.jpg" type="image/jpeg" />
				<img src="/assets/images/profile-4.jpg" alt="Michelle holding her IBCLC certification" />
			</picture>
		</div>
	</section>
	<section class="symptoms lactation">
		<h2>Feeding concerns I work with</h2>
		<div class="symptoms-list">
			{#each symptoms as symptom, i}
				<div class="symptoms-item">
					<button
						class="button button-primary"
						aria-label={`${symptom.title} modal button`}
						onclick={() => {
							modalOpen = true;
							modalContent = { title: symptom.title, description: symptom.description };
						}}
					>
						<img src={`assets/images/svgs/symptom-${i + 1}.svg`} alt={`${symptom.title} icon`} />
						<img src={`assets/images/svgs/symptom-${i + 1}-white.svg`} alt={`${symptom.title} icon`} />
					</button>
					<p>{symptom.title}</p>
				</div>
			{/each}
		</div>
		<button class="button button-primary" onclick={openBookingModal}>Book Session</button>
	</section>
	<section class="osteo-faq lactation">
		<h2>Questions I get asked about Lactation Consultation</h2>
		<Faq faqs={lactationFaqs} />
	</section>
</div>
<section class="pricing">
	<h2>Pricing</h2>
	<div class="pricing-section">
		<h3>Osteopathy</h3>
		<div class="pricing-item">
			<p class="pricing-item-heading">60 min Osteopathic Treatment</p>
			<div></div>
			<p>$135</p>
		</div>
		<div class="pricing-item">
			<p class="pricing-item-heading">60 min Pediatric Osteopathic Treatment</p>
			<div></div>
			<p>$135</p>
		</div>
		<div class="pricing-item">
			<p class="pricing-item-heading">75 min Osteopathic Treatment</p>
			<div></div>
			<p>$160</p>
		</div>
		<div class="pricing-item">
			<p class="pricing-item-heading">90 min Osteopathic Treatment</p>
			<div></div>
			<p>$180</p>
		</div>
	</div>
	<div class="pricing-section">
		<h3>Lactation Consultation</h3>
		<div class="pricing-item">
			<p class="pricing-item-heading">20 min Discovery Call</p>
			<div></div>
			<p>FREE</p>
		</div>
		<div class="pricing-item">
			<p class="pricing-item-heading">90 min Initial In-Person Consultation</p>
			<div></div>
			<p>$180</p>
		</div>
		<div class="pricing-item">
			<p class="pricing-item-heading">60 min Follow-Up In-Person Consultation</p>
			<div></div>
			<p>$135</p>
		</div>
		<div class="pricing-item">
			<p class="pricing-item-heading">60 min Virtual Consultation - Initial or Followup</p>
			<div></div>
			<p>$135</p>
		</div>
	</div>
	<div class="pricing-section">
		<h3>Osteopathy & Lactation Combination Session</h3>
		<div class="pricing-item">
			<p class="pricing-item-heading">90 min Osteopathy + Lactation Consultation</p>
			<div></div>
			<p>$180</p>
		</div>
	</div>
	<img class="pricing-svg" src="/assets/images/svgs/plant-17.svg" alt="plant svg" />
</section>

{#if modalOpen}
	<div class="modal-overlay" transition:fade={{ duration: 200 }}>
		<div class="modal-content" use:clickOutside onoutclick={() => (modalOpen = false)}>
			<button class="modal-close" onclick={() => (modalOpen = false)}><span class="material-icons">close</span></button>
			<h2>{modalContent.title}</h2>
			<ul>
				{#each modalContent.description as description}
					<li>{description}</li>
				{/each}
			</ul>
		</div>
	</div>
{/if}

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
			grid-template-columns: auto 40%;
			gap: var(--spacing-xl);
		}

		section.osteo div.osteo-text {
			display: flex;
			flex-direction: column;
			justify-content: center;
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
	section.symptoms button,
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
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: calc(0.5rem + var(--padding-block));
	}

	section.osteo-faq h2 {
		text-align: center;
		font-size: var(--font-heading-s);
		font-weight: 400;
		margin-bottom: var(--spacing-l);
		max-width: 80%;
	}

	section.osteo-faq * {
		color: var(--color-white);
	}

	@media screen and (min-width: 1024px) {
		section.osteo-faq h2 {
			margin-bottom: calc(var(--spacing-l) + var(--spacing-m));
		}
	}

	/* Lactation ------------------------------------------------------------------------------- */
	div.boob-background {
		position: relative;
	}

	div.boob-background::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: url("/assets/images/boob-background.png") repeat;
		background-size: 30rem;
	}

	section.osteo.lactation {
		background-color: transparent;
		pointer-events: auto;
	}
	section.osteo.lactation div.osteo-text {
		color: var(--color-black);
	}

	section.osteo-faq.lactation {
		background-color: transparent;
		position: relative;
		z-index: 10;
	}

	section.osteo-faq.lactation h2 {
		color: var(--color-black);
	}

	section.symptoms.lactation {
		background-color: transparent;
		color: var(--color-black);
	}

	section.symptoms.lactation div.symptoms-item button {
		background-color: var(--color-bronze-7);
		transition: 0.2s;
	}

	section.symptoms.lactation div.symptoms-item button:hover {
		background-color: var(--color-bronze-2);
	}

	/* Pricing ------------------------------------------------------------------------------- */
	section.pricing {
		background-color: var(--color-bronze-6);
		overflow: hidden;
		position: relative;
	}

	section.pricing h2,
	section.pricing div.pricing-section {
		position: relative;
		z-index: 1;
	}

	section.pricing h2 {
		font-size: var(--font-heading-m);
		font-weight: 400;
		text-align: center;
	}

	section.pricing div.pricing-section {
		margin-bottom: var(--spacing-l);
	}

	section.pricing h3 {
		font-weight: 400;
		font-size: var(--font-body-l);
		margin-bottom: 0.5rem;
	}

	section.pricing p {
		font-size: var(--font-body-s);
		font-weight: 300;
		margin-block: 0;
		display: flex;
		align-items: end;
	}

	section.pricing p.pricing-item-heading {
		min-width: 40vw;
		overflow-wrap: break-word;
	}

	section.pricing div.pricing-item {
		display: flex;
		justify-content: space-between;
		margin-bottom: 0.5rem;
	}

	section.pricing div.pricing-item div {
		width: 100%;
		border-bottom: 2px dotted var(--color-black);
		margin: 0 0.5rem;
		translate: 0 -0.3rem;
	}

	section.pricing img.pricing-svg {
		position: absolute;
		bottom: -0.5rem;
		left: 0;
		z-index: 0;
		opacity: 0.3;
		height: 20rem;
	}

	@media screen and (min-width: 640px) {
		section.pricing p {
			font-size: var(--font-body-l);
		}

		section.pricing p.pricing-item-heading {
			min-width: fit-content;
		}

		section.pricing img.pricing-svg {
			height: 25rem;
		}
	}

	@media screen and (min-width: 1024px) {
		section.pricing img.pricing-svg {
			height: unset;
			opacity: 0.4;
		}
	}

	/* Modal ----------------------------------------------------------------------------------- */
	div.modal-overlay {
		position: fixed;
		cursor: pointer;
		z-index: 1000;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.75);
		backdrop-filter: blur(2px);
		display: flex;
		justify-content: center;
		align-items: center;
		padding: var(--padding-block) var(--padding-inline);
	}

	div.modal-content {
		position: relative;
		cursor: auto;
		background: var(--color-bronze-6);
		padding: var(--spacing-m);
		border-radius: var(--spacing-s);
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
		max-width: 40rem;
		max-height: calc(100vh - 2rem);
		overflow-y: auto;
	}

	div.modal-content h2 {
		font-size: var(--font-heading-s);
		font-weight: 400;
		text-align: center;
	}

	div.modal-content li {
		font-size: var(--font-body-l);
		font-weight: 300;
		margin-bottom: 0.25rem;
	}

	button.modal-close {
		background: none;
		border: none;
		cursor: pointer;
		position: absolute;
		top: 1rem;
		right: 1rem;
	}

	button.modal-close span {
		font-size: 1.5rem;
		transition: color 0.2s;
	}

	@media (hover: hover) {
		button.modal-close span:hover {
			color: var(--color-bronze-2);
		}
	}

	@media screen and (min-width: 1024px) {
		div.modal-content {
			padding: var(--spacing-l);
		}

		div.modal-content li {
			font-size: var(--font-body-m);
		}

		button.modal-close span {
			font-size: 2rem;
		}
	}
</style>
