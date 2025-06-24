<script lang="ts">
	import SeoHead from "$lib/components/SeoHead.svelte";
	import { fade } from "svelte/transition";
	import { clickOutside } from "$lib/utils/clickOutside";
	let mapOpen = $state(false);
	let rosslandMapOpen = $state(false);
	let castlegarMapOpen = $state(false);
</script>

<SeoHead
	title="Contact | Rooted In Motion Osteopathy"
	description="Contact Rooted In Motion Osteopathy to book an appointment, ask a question, or get directions to our locations in Rossland and Castlegar, BC."
></SeoHead>

<section class="info">
	<h2>Get in touch with me</h2>
	<div class="location-info">
		<div class="location-info-item">
			<div class="location-info-item-col">
				<span class="material-icons">location_on</span>
			</div>
			<div class="location-info-item-col">
				<h3>Rossland Location</h3>
				<p>Madhu Wellness Collective</p>
				<p>2070 Washington St</p>
				<p>Rossland, BC</p>
				<p>V0G 1Y0</p>
			</div>
		</div>
		<div class="location-info-item">
			<div class="location-info-item-col">
				<span class="material-icons">phone</span>
			</div>
			<div class="location-info-item-col">
				<h3>Phone</h3>
				<p><a href="tel:+12503620021">+1 (250) 362-0021</a></p>
			</div>
		</div>
		<div class="location-info-item">
			<div class="location-info-item-col">
				<span class="material-icons">email</span>
			</div>
			<div class="location-info-item-col">
				<h3>Email</h3>
				<p><a href="mailto:michelle@rootedinmotion.ca">michelle@rootedinmotion.ca</a></p>
			</div>
		</div>
		<div class="location-info-item">
			<div class="location-info-item-col">
				<span class="material-icons">access_alarm</span>
			</div>
			<div class="location-info-item-col">
				<h3>Hours</h3>
				<p>Tuesday : 9AM - 5:30PM</p>
				<p>Wednesday : 9AM - 5PM</p>
			</div>
		</div>
	</div>
	<div class="booking-actions">
		<button
			class="button button-secondary"
			onclick={() => {
				mapOpen = true;
				rosslandMapOpen = true;
			}}>Get Directions</button
		>
		<a href="https://madhucollective.janeapp.com/#/staff_member/42" class="button button-primary">Book Rossland</a>
	</div>
	<hr />
	<div class="location-info">
		<div class="location-info-item">
			<div class="location-info-item-col">
				<span class="material-icons">location_on</span>
			</div>
			<div class="location-info-item-col">
				<h3>Castlegar Location</h3>
				<p>Spectrum Treatment Centre</p>
				<p>2032 Columbia Ave</p>
				<p>Castlegar, BC</p>
				<p>V1N 2W8</p>
			</div>
		</div>
		<div class="location-info-item">
			<div class="location-info-item-col">
				<span class="material-icons">phone</span>
			</div>
			<div class="location-info-item-col">
				<h3>Phone</h3>
				<p><a href="tel:+12503042211">+1 (250) 304-2211</a></p>
			</div>
		</div>
		<div class="location-info-item">
			<div class="location-info-item-col">
				<span class="material-icons">email</span>
			</div>
			<div class="location-info-item-col">
				<h3>Email</h3>
				<p><a href="mailto:michelle@rootedinmotion.ca">michelle@rootedinmotion.ca</a></p>
			</div>
		</div>
		<div class="location-info-item">
			<div class="location-info-item-col">
				<span class="material-icons">access_alarm</span>
			</div>
			<div class="location-info-item-col">
				<h3>Hours</h3>
				<p>Thursday : 11PM - 7PM</p>
			</div>
		</div>
	</div>
	<div class="booking-actions">
		<button
			class="button button-secondary"
			onclick={() => {
				mapOpen = true;
				castlegarMapOpen = true;
			}}>Get Directions</button
		>
		<a href="https://madhucollective.janeapp.com/#/staff_member/42" class="button button-primary">Book Castlegar</a>
	</div>
</section>
<section class="contact-form">
	<h2>Have a question?</h2>

	<form action="https://getform.io/f/ce024891-ecba-493c-a211-5a74cd48f845" method="POST" name="contactForm" id="contactForm">
		<label
			><span>Full Name</span>
			<input type="text" name="name" autocomplete="name" required />
		</label>
		<label
			><span>Email Address</span>
			<input type="text" name="email" autocomplete="email" required />
		</label>
		<label
			><span>Phone Number</span>
			<input type="text" name="phone" autocomplete="tel" required />
		</label>
		<label
			><span>Subject</span>
			<input type="text" name="subject" autocomplete="off" required />
		</label>
		<label class="textarea"
			>Message
			<textarea name="message" maxlength="500"></textarea>
		</label>
		<button class="button button-primary" type="submit">Get in touch</button>
	</form>
</section>
{#if mapOpen}
	<div class="map-overlay" transition:fade>
		<div class="map" use:clickOutside onoutclick={() => (mapOpen = false)}>
			<button
				class="close-map"
				onclick={() => {
					mapOpen = false;
					rosslandMapOpen = false;
					castlegarMapOpen = false;
				}}
				aria-label="Close map"
			>
				<span class="material-icons">close</span>
			</button>
			{#if rosslandMapOpen}
				<iframe
					title="Madhu Wellness Collective's location in Rossland, BC"
					frameborder="0"
					style="border:0"
					loading="lazy"
					src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDjohjZA0cglI5vLCl1uhgEzDBVJWiK0B0&q=Madhu+Wellness+Collective,Rossland,BC"
					allowfullscreen
				>
				</iframe>
			{:else if castlegarMapOpen}
				<iframe
					title="Spectrum Treatment Centre's location in Castlegar, BC"
					frameborder="0"
					style="border:0"
					loading="lazy"
					src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDjohjZA0cglI5vLCl1uhgEzDBVJWiK0B0&q=Spectrum+Treatment+Centre,Castlegar,BC"
					allowfullscreen
				>
				</iframe>
			{/if}
		</div>
	</div>
{/if}

<style>
	/* Conact Info ----------------------------------------------------------------------------- */
	section.info {
		padding-top: 6rem;
	}

	section.info h2,
	section.contact-form h2 {
		text-align: center;
		margin-bottom: 2rem;
		font-size: var(--font-heading-l);
		font-weight: 400;
		line-height: 1;
	}

	div.location-info {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
	}

	div.location-info-item {
		display: flex;
		gap: 1rem;
	}

	div.location-info-item span.material-icons {
		font-size: 2rem;
		color: var(--color-bronze-2);
		transform: translateY(0.25rem);
	}

	div.location-info-item h3,
	div.location-info-item p {
		line-height: 1.6;
	}

	div.location-info-item h3 {
		font-size: var(--font-heading-s);
		font-weight: 400;
		margin: 0;
	}

	div.location-info-item p {
		font-size: var(--font-body-s);
		margin: 0;
		font-weight: 400;
	}

	div.booking-actions {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing-m);
		width: 100%;
		justify-content: center;
		margin-top: 2rem;
	}

	div.booking-actions button.button-secondary {
		color: var(--color-pine-3);
		border-color: var(--color-pine-3);
	}

	@media (hover: hover) {
		div.booking-actions button.button-secondary:hover {
			background-color: var(--color-pine-3);
			color: var(--color-white);
		}
	}

	hr {
		margin: 2rem 0;
		border: none;
		border-top: 2px solid var(--color-pine-2);
		opacity: 0.25;
	}

	@media screen and (min-width: 640px) {
		div.location-info {
			grid-template-columns: repeat(2, 1fr);
			gap: 2rem;
			max-width: 50rem;
			margin: 0 auto;
		}
	}

	@media screen and (min-width: 768px) {
		section.info {
			padding-top: 10rem;
		}

		section.info h2,
		section.contact-form h2 {
			margin-bottom: 4rem;
		}
	}

	@media screen and (min-width: 1280px) {
		div.location-info {
			grid-template-columns: repeat(4, 1fr);
			max-width: unset;
		}

		div.location-info-item h3 {
			font-size: var(--font-body-l);
		}

		div.booking-actions {
			justify-content: flex-start;
		}
	}

	/* Contact Form ---------------------------------------------------------------------------- */
	section.contact-form {
		padding-top: 0;
	}

	section.contact-form form {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
	}

	section.contact-form form label *,
	section.contact-form form label {
		font-family: var(--font-heading);
		font-size: var(--font-heading-s);
		font-weight: 400;
	}

	section.contact-form form label {
		display: grid;
		grid-template-columns: 1fr;
		gap: 0.25rem;
		position: relative;
	}

	section.contact-form form label span::after {
		content: "*";
		color: red;
		margin-left: 0.25rem;
	}

	section.contact-form form input,
	section.contact-form form textarea {
		background-color: transparent;
		border: none;
		transition: 0.1s;
	}

	section.contact-form form input {
		border-bottom: 2px solid var(--color-black);
		padding: 0.25rem 0;
	}

	section.contact-form form textarea {
		border: 2px solid var(--color-black);
		resize: none;
		height: 10rem;
		margin-top: 1rem;
	}
	section.contact-form form textarea:focus-visible,
	section.contact-form form input:focus-visible {
		outline: none;
		border-color: var(--color-bronze-2);
	}

	@media screen and (min-width: 640px) {
		section.contact-form form {
			grid-template-columns: repeat(2, 1fr);
		}

		section.contact-form form label.textarea {
			grid-column: 1 / 3;
		}
	}

	@media screen and (min-width: 1024px) {
		section.contact-form form label *,
		section.contact-form form label {
			font-size: var(--font-body-l);
		}
	}

	@media screen and (min-width: 1280px) {
		section.contact-form form textarea {
			height: 15rem;
		}
	}

	/* Map ------------------------------------------------------------------------------------- */
	div.map-overlay {
		position: fixed;
		inset: 0;
		background-color: #1d201dec;
		z-index: 1000;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}

	div.map {
		position: relative;
		width: 90%;
		max-width: 800px;
		height: 80vh;
		background-color: #fff;
		border-radius: 0.5rem;
		overflow: hidden;
	}

	div.map iframe {
		width: 100%;
		height: 100%;
		border: none;
	}

	button.close-map {
		position: absolute;
		top: 1rem;
		right: 1rem;
		background: transparent;
		border: none;
		cursor: pointer;
		color: var(--color-black);
	}

	button.close-map span.material-icons {
		font-size: 2rem;
		color: var(--color-pine-1);
		transition: 0.2s;
	}

	@media (hover: hover) {
		button.close-map:hover span.material-icons {
			color: var(--color-bronze-3);
		}
	}
</style>
