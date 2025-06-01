<footer>
	<div class="footer__container">
		<div class="footer__hero">
			<img class="footer__logo" src="logo.svg" alt="rooted in motion logo" />
			<p>
				<a href="mailto:rooted.in.motion@outlook.com"><span title="Shoot me an email!">rooted.in.motion@outlook.com</span></a>
			</p>
			<p>
				<a href="tel:+1(250)362-0021"><span title="Give me a call!">+1 (250) 362-0021</span></a>
			</p>
		</div>
		<div class="footer__quick-links">
			<h3>Quick Links</h3>
			<a href="/">Home</a>
			<a href="/about">About</a>
			<a href="/services">Services</a>
			<a href="/blog">Blog</a>
			<a href="/privacy">Privacy Policy</a>
		</div>
		<div class="footer__bookings">
			<h3>Get In Touch</h3>
			<a href="/pages/contact">Contact</a>
			<a href="https://madhucollective.janeapp.com/#/staff_member/42">Book Session</a>
		</div>
		<div class="footer__socials">
			<a aria-label="Link to Rooted in Motion Instagram page" href="https://www.instagram.com/rooted.in.motionmanualtherapy/">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
					<path
						d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
					/>
				</svg>
			</a>
			<a aria-label="Link to Rooted in Motion Facebook page" href="https://www.facebook.com/rooted.in.motion.manualtherapy">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
					<path
						d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
					/>
				</svg>
			</a>
		</div>
	</div>
	<div class="footer__credits">
		<a href="https://pixelmountain.ca">A<img src="pixelmountainlogo.png" alt="pixel mountain logo" />Creation</a>
	</div>
</footer>

<style>
	footer {
		background-color: var(--color-footer, #1d201d);
		padding: 2em 1em;
	}

	div.footer__container {
		display: flex;
		flex-direction: column;
		gap: 2em;
	}

	.footer__logo {
		width: 12em;
		margin-bottom: 1em;
	}

	footer a,
	footer p,
	footer h3 {
		color: var(--color-white, #fff);
		line-height: 1.6;
	}

	footer h3 {
		font-size: 1.2em;
		font-weight: 600;
	}

	div.footer__credits {
		margin-top: 1.5em;
		text-transform: uppercase;
		font-style: italic;
	}

	div.footer__credits a {
		font-weight: 600;
		display: flex;
		gap: 0.5em;
		align-items: center;
	}

	.footer__credits img {
		width: 14em;
		transform: translateY(-0.3rem);
	}

	.footer__quick-links,
	.footer__bookings {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.footer__quick-links h3,
	.footer__bookings h3 {
		grid-column: 1 / 3;
		margin-bottom: 0.5em;
	}

	.footer__hero,
	.footer__socials,
	.footer__credits {
		display: flex;
	}

	.footer__hero,
	.footer__credits {
		flex-direction: column;
	}

	.footer__socials {
		gap: 2em;
	}

	.footer__socials svg {
		width: 2em;
		fill: #fff;
		transition: 0.3s;
	}

	footer a {
		transition: 0.3s;
	}

	footer a:hover,
	footer a:active {
		color: var(--color-bronze-2, #e59c42);
	}

	footer a:hover img {
		filter: hue-rotate(90deg);
	}

	.footer__socials svg:hover,
	.footer__socials svg:active {
		fill: var(--color-bronze-2, #e59c42);
	}

	@media screen and (min-width: 640px) {
		footer {
			padding: 4em 2em;
		}
	}

	@media screen and (min-width: 768px) {
		footer {
			padding: 4em;
		}

		div.footer__container {
			flex-direction: row;
			justify-content: space-between;
		}

		.footer__logo {
			transform: translateY(-5px);
		}

		.footer__bookings,
		.footer__quick-links {
			display: flex;
			flex-direction: column;
		}

		.footer__socials {
			flex-direction: column;
			gap: 1em;
		}

		.footer__credits {
			margin-top: 4em;
			display: flex;
			justify-content: space-evenly;
			gap: 2em;
			flex-direction: row;
		}
	}

	@media screen and (min-width: 1024px) {
		footer {
			padding: 4em 6em;
		}

		.footer__logo {
			width: 15em;
		}
	}

	@media screen and (min-width: 1280px) {
		footer {
			padding: 4em 8em;
		}
	}

	@media screen and (min-width: 1536px) {
		footer {
			padding: 4em 10em;
		}
	}

	@media screen and (min-width: 1800px) {
		footer {
			padding: 4em 14em;
		}
	}
</style>
