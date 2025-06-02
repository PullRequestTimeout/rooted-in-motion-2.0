<script lang="ts">
	import { slide } from "svelte/transition";

	const faqs = [
		{
			question: "What is Rooted in Motion?",
			answer:
				"Rooted in Motion is a holistic wellness practice that combines movement, mindfulness, and therapeutic techniques to promote physical and mental well-being."
		},
		{
			question: "What services do you offer?",
			answer:
				"We offer a range of services including individual coaching, group workshops, and online courses focused on movement therapy, mindfulness, and personal development."
		},
		{
			question: "How can I book a session?",
			answer: "You can book a session through our website by visiting the 'Book Session' page or by contacting us directly via email or phone."
		},
		{
			question: "Do you offer online sessions?",
			answer: "Yes, we offer both in-person and online sessions to accommodate different preferences and needs."
		},
		{
			question: "What should I expect?",
			answer:
				"During your first session, we will discuss your goals, assess your current state, and create a personalized plan to help you achieve your wellness objectives."
		}
	];

	let openFaqIndex: number | null = null;

	function toggleFaq(i: number) {
		openFaqIndex = openFaqIndex === i ? null : i;
	}
</script>

<section>
	<h3>My frequently asked questions</h3>
	<hr />
	{#each faqs as faq, i}
		<div class="faq-item">
			<button on:click={() => toggleFaq(i)} aria-label="Toggle answer for {faq.question}">
				<h4 class="faq-question">{faq.question}</h4>
				<div class="faq-icon" class:open={openFaqIndex === i}>
					<span></span>
					<span></span>
				</div>
			</button>
			{#if openFaqIndex === i}
				<p transition:slide={{ axis: "y" }} class="faq-answer">{faq.answer}</p>
			{/if}
		</div>
		<hr />
	{/each}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	div.faq-item {
		width: 100%;
	}

	div.faq-item button {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: none;
		border: none;
		padding: 1rem 0;
	}

	div.faq-item button * {
		margin: 0;
	}

	div.faq-item p {
		margin-bottom: 1rem;
	}

	hr {
		width: 100%;
		border: none;
		border-top: 2px solid var(--color-black);
	}

	h3 {
		text-align: center;
		margin-bottom: 1rem;
	}

	h4 {
		text-align: left;
	}

	div.faq-icon {
		width: 1rem;
		height: 1rem;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	div.faq-icon span {
		position: absolute;
		width: 100%;
		height: 3px;
		background-color: var(--color-pine-3);
		transition: transform 0.3s ease;
		border-radius: 2px;
	}

	div.faq-icon span:nth-child(1) {
		transform: rotate(90deg);
	}

	div.faq-icon.open span:nth-child(1) {
		transform: rotate(0deg);
	}

	@media (min-width: 768px) {
		section {
			max-width: 1000px;
			margin: 0 auto;
		}
	}
</style>
