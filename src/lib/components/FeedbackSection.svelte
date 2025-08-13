<script lang="ts">
	import FeedbackCarousel from "$lib/components/FeedbackCarousel.svelte";
</script>

<section class="feedback">
	<img class="feedback-plant-1" src="/assets/images/svgs/plant-9.svg" alt="plant svg" />
	<h2>What my clients think</h2>
	<FeedbackCarousel />
	<div class="feedback-cta">
		<div class="feedback-cta-image">
			<picture>
				<source srcset="/assets/images/treatment-3.webp" type="image/webp" />
				<source srcset="/assets/images/treatment-3.jpg" type="image/jpeg" />
				<img src="/assets/images/treatment-3.jpg" alt="Michelle treating a client" loading="lazy" />
			</picture>
		</div>
		<div class="feedback-cta-text">
			<h2>Specialized care for women, parents, & growing families</h2>
			<p>
				Whether you're healing from injury, navigating hormonal changes, or recovering from birth, I offer personalized, whole-body care focused on
				relieving pain, restoring function, and supporting long-term wellbeing.
			</p>
			<a class="button button-secondary" href="/contact">Book Session</a>
		</div>
	</div>
	<img class="feedback-plant-2" src="/assets/images/svgs/plant-10.svg" alt="plant svg" />
</section>

<style>
	/* Feedback -------------------------------------------------------------------------------- */
	section.feedback {
		background-color: var(--color-greyscale-1);
		position: relative;
	}

	section.feedback h2 {
		text-align: center;
		font-size: var(--font-heading-m);
		font-weight: 400;
		color: var(--color-white);
	}

	section.feedback div.feedback-cta {
		display: grid;
		grid-template-columns: 1fr;
		gap: calc(var(--spacing-m) + 1rem);
	}

	section.feedback div.feedback-cta-image {
		position: relative;
		width: 100%;
	}

	section.feedback div.feedback-cta-image img {
		position: relative;
		width: calc(100% - 1rem);
		max-width: 30rem;
		border-radius: var(--spacing-s);
		filter: drop-shadow(-1rem 1rem 0 var(--color-bronze-6));
		transform: translateX(1rem);
	}

	section.feedback div.feedback-cta-text {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-m);
	}

	section.feedback div.feedback-cta-text a,
	section.feedback div.feedback-cta-text p {
		z-index: 10;
	}

	section.feedback div.feedback-cta h2 {
		text-align: left;
		margin: 0;
	}

	section.feedback div.feedback-cta p {
		font-size: var(--font-body-l);
		font-family: var(--font-heading);
		font-weight: 300;
		line-height: 1.4;
		color: var(--color-white);
	}

	section.feedback img.feedback-plant-1,
	section.feedback img.feedback-plant-2 {
		position: absolute;
	}

	section.feedback img.feedback-plant-1 {
		top: 0;
		right: 10%;
		width: 6rem;
		opacity: 0.5;
	}

	section.feedback img.feedback-plant-2 {
		bottom: -1.5rem;
		right: 10%;
		width: 12rem;
		filter: drop-shadow(0 0 0.15rem var(--color-black));
		z-index: 0;
	}

	@media screen and (min-width: 1024px) {
		section.feedback h2 {
			font-size: var(--font-heading-s);
		}

		section.feedback div.feedback-cta {
			grid-template-columns: 1fr 1fr;
			gap: var(--spacing-xl);
		}

		section.feedback div.feedback-cta-text {
			gap: 2.5rem;
			justify-content: center;
		}

		section.feedback div.feedback-cta-text p {
			font-size: var(--font-body-l);
		}

		section.feedback div.feedback-cta-image img {
			max-width: 40rem;
		}

		section.feedback img.feedback-plant-1 {
			opacity: 1;
		}

		section.feedback img.feedback-plant-2 {
			right: 20%;
			width: 16rem;
			bottom: -2.25rem;
		}
	}

	@media screen and (min-width: 1440px) {
		section.feedback div.feedback-cta-text p {
			font-size: var(--font-body-m);
		}
	}
</style>
