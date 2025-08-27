<script>
	import { uiStore, closeBookingModal } from "$lib/stores/uiStore.svelte";
	import { clickOutside } from "$lib/utils/clickOutside";
	import { fade } from "svelte/transition";
</script>

{#if uiStore.bookingModalOpen}
	<div class="modal" class:open={uiStore.bookingModalOpen} transition:fade={{ duration: 100 }}>
		<div class="modal-content surface" use:clickOutside onoutclick={closeBookingModal}>
			<button class="close" onclick={closeBookingModal}><span class="material-icons">close</span></button>
			<h2 out:fade in:fade={{ delay: 1 * 100 }}>Book Session:</h2>
			<a out:fade in:fade={{ delay: 1.25 * 100 }} href="https://madhucollective.janeapp.com/#/staff_member/42">Rossland</a>
			<hr out:fade in:fade={{ delay: 1.5 * 100 }} />
			<a out:fade in:fade={{ delay: 1.75 * 100 }} href="https://spectrumtreatmentcentre.janeapp.com/#/staff_member/29">Castlegar</a>
			<hr out:fade in:fade={{ delay: 2 * 100 }} />
			<a out:fade in:fade={{ delay: 2.25 * 100 }} href="/contact">Virtual</a>
		</div>
	</div>
{/if}

<style>
	:global(body:has(div.modal.open)) {
		overflow: hidden;
		max-height: 100vh;
	}

	@media (min-width: 1024px) {
		:global(body:has(div.modal.open) header nav) {
			translate: -1rem 0;
		}
	}

	div.modal {
		position: fixed;
		z-index: 1000;
		inset: 0;
		background: #1d201de3;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		backdrop-filter: blur(2px);
	}

	div.modal-content {
		cursor: auto;
		position: relative;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		background-color: var(--color-footer);
		color: var(--color-white);
		text-align: center;
		width: calc(100% - calc(var(--padding-inline) * 2));
		height: 70%;
		max-width: 400px;
	}

	div.modal-content button.close {
		background: none;
		border: none;
		cursor: pointer;
		position: absolute;
		top: 1rem;
		right: 1rem;
	}

	div.modal-content button.close span {
		font-size: 1.5rem;
		color: var(--color-pine-3);
		transition: 0.2s;
	}

	div.modal-content h2 {
		font-weight: 400;
		margin-bottom: var(--spacing-l);
	}

	div.modal-content hr {
		border: none;
		border-top: 2px solid var(--color-bronze-2);
		width: 8rem;
	}

	div.modal-content a {
		text-transform: uppercase;
		transition: 0.2s;
	}

	@media (hover: hover) {
		div.modal-content button.close:hover span {
			color: var(--color-bronze-3);
		}

		div.modal-content a:hover {
			color: var(--color-bronze-3);
		}
	}
</style>
