<script lang="ts">
	import { slide } from "svelte/transition";
	import { isIntersecting } from "$lib/utils/isIntersecting";

	let openFaqIndex: number | null = $state(null);

	function toggleFaq(i: number) {
		openFaqIndex = openFaqIndex === i ? null : i;
	}

	let { faqs = $bindable([]), darkMode = $bindable(false) } = $props();
</script>

<div use:isIntersecting class="group-stagger-fade">
	<hr style={`border-color: ${darkMode ? "#fff" : "var(--color-black)"};`} />
	{#each faqs as faq, i}
		<div class="faq-item">
			<button onclick={() => toggleFaq(i)} aria-label="Toggle answer for {faq.question}">
				<h4 style={`color: ${darkMode ? "#fff" : "var(--color-black)"};`} class="faq-question">{faq.question}</h4>
				<div class="faq-icon" class:open={openFaqIndex === i}>
					<span></span>
					<span></span>
				</div>
			</button>
			{#if openFaqIndex === i}
				<div style={`color: ${darkMode ? "#fff" : "var(--color-black)"};`} transition:slide={{ axis: "y" }} class="faq-answer">
					{#each faq.answer as answer}
						{#if answer.element === "p"}
							<p>{answer.content}</p>
						{:else if answer.element === "ul"}
							<ul>
								{#if Array.isArray(answer.content)}
									{#each answer.content as item}
										<li>{item}</li>
									{/each}
								{/if}
							</ul>
						{:else if answer.element === "a"}
							{#if typeof answer.content === "object" && answer.content !== null && "href" in answer.content && "text" in answer.content}
								<a href={answer.content.href}>{answer.content.text}</a>
							{/if}
						{/if}
					{/each}
				</div>
			{/if}
		</div>
		<hr style={`border-color: ${darkMode ? "#fff" : "var(--color-black)"};`} />
	{/each}
</div>

<style>
	div.group-stagger-fade {
		width: 100%;
	}

	h4 {
		text-align: left;
		font-size: var(--font-body-l);
		font-family: var(--font-body);
		font-weight: 400;
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
		padding: 0.75rem 0;
	}

	div.faq-item button * {
		margin: 0;
	}

	div.faq-item div.faq-answer * {
		margin: 0;
		font-size: var(--font-body-m);
		font-weight: 300;
		line-height: 1.4;
	}

	div.faq-item div.faq-answer {
		margin-bottom: var(--spacing-m);
		display: flex;
		flex-direction: column;
		gap: var(--spacing-s);
	}

	div.faq-item div.faq-answer a {
		color: var(--color-pine-3);
		text-decoration: underline;
		font-weight: 400;
	}

	hr {
		width: 100%;
		border: none;
		border-top: 2px solid var(--color-black);
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

	@media screen and (min-width: 1024px) {
		h4 {
			font-size: var(--font-body-l);
		}

		div.faq-item p {
			font-size: var(--font-body-l);
		}
	}
</style>
