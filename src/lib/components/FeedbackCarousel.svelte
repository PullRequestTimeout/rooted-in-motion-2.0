<script lang="ts">
	import emblaCarouselSvelte from "embla-carousel-svelte";
	let emblaApi: any;
	let options = { loop: true };
	let selectedIndex = 0;
	let slideCount = 0;

	function onInit(event: any) {
		emblaApi = event.detail;
		slideCount = emblaApi.slideNodes().length;
		selectedIndex = emblaApi.selectedScrollSnap();
		emblaApi.on("select", updateSelectedIndex);
	}

	function updateSelectedIndex() {
		selectedIndex = emblaApi.selectedScrollSnap();
	}

	const feedback = [
		"I've had my second treatment with Michelle and she doesn't disappoint. Both times I came in with a lot of restriction and tightness throughout my mid back and rib cage. I felt so free and loose and able to move again after both treatments. She is a very skilled and intuitive healer. ",
		"I came into my appointment with Michelle with a two week long migraine. I left with tons of energy, no headache, and still migraine free two days after my appointment!",
		"I had a fall on my mountain bike and Michelle helped me by mobilizing my back and shoulder. She was super thorough and made sure I was comfortable and that we weren't pushing too hard into the pain. I left feeling so much better!"
	];

	function scrollPrev() {
		emblaApi && emblaApi.scrollPrev();
	}
	function scrollNext() {
		emblaApi && emblaApi.scrollNext();
	}
	function scrollTo(index: number) {
		emblaApi && emblaApi.scrollTo(index);
	}
</script>

<div class="embla" use:emblaCarouselSvelte={{ options, plugins: [] }} onemblaInit={onInit}>
	<div class="embla__container">
		{#each feedback as text, index}
			<div class="embla__slide">
				<span class="material-icons">format_quote</span>
				<p>{text}</p>
				<span class="material-icons">format_quote</span>
			</div>
		{/each}
	</div>
	<div class="embla__buttons">
		<button onclick={scrollPrev} aria-label="Previous slide"><span class="material-icons">arrow_back_ios</span></button>
		<div class="embla__dots">
			{#each Array(feedback.length) as _, i}
				<button
					class:selected={selectedIndex === i}
					onclick={() => scrollTo(i)}
					aria-label={`Go to slide ${i + 1}`}
					aria-current={selectedIndex === i}
				></button>
			{/each}
		</div>
		<button onclick={scrollNext} aria-label="Next slide"><span class="material-icons">arrow_forward_ios</span></button>
	</div>
</div>

<style>
	div.embla {
		margin-top: var(--spacing-l);
		width: 100%;
		position: relative;
		overflow: hidden;
		margin-bottom: var(--spacing-l);
	}

	div.embla__container {
		display: flex;
	}

	div.embla__slide {
		min-width: 100%;
		height: 100%;
		font-size: var(--font-body-s);
		color: var(--color-white);
		text-align: center;
		display: flex;
		justify-content: center;
		gap: var(--spacing-xs);
	}

	div.embla__slide span {
		font-size: 2rem;
		color: var(--color-bronze-4);
		opacity: 0.75;
		margin: 0;
	}

	div.embla__slide span:first-child {
		transform: scaleX(-1);
	}

	div.embla__slide span:last-child {
		place-self: end;
	}

	div.embla__slide p {
		max-width: 600px;
		line-height: 1.4;
		font-weight: 300;
		font-size: var(--font-body-l);
		margin: 0;
	}

	div.embla__buttons {
		position: relative;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		margin-top: 1rem;
	}

	div.embla__buttons button {
		background: transparent;
		border: none;
		border-radius: 50%;
		width: 2.5rem;
		height: 2.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
		cursor: pointer;
	}

	@media (hover: hover) {
		div.embla__buttons button {
			opacity: 0.5;
			transition: 0.2s;
		}

		div.embla__buttons button:hover {
			opacity: 1;
		}
	}

	div.embla__buttons button span {
		color: var(--color-bronze-2);
		font-size: 2rem;
	}

	div.embla__dots {
		display: flex;
		gap: 1.5rem;
	}

	div.embla__dots button {
		background: var(--color-white);
		width: 0.75rem;
		height: 0.75rem;
		border-radius: 50%;
		padding: 0;
	}

	div.embla__dots button.selected,
	div.embla__dots button[aria-current="true"] {
		opacity: 1;
	}

	@media screen and (min-width: 1024px) {
		div.embla {
			margin-bottom: var(--spacing-xl);
		}

		div.embla__slide p {
			font-size: var(--font-body-l);
		}
	}
</style>
