<script lang="ts">
	// Imports
	import { authHandlers } from "$lib/firebase/auth";
	import { handleAlertMessage } from "$lib/stores/uiStore.svelte";
	import { onMount } from "svelte";

	// State management
	let email: string = $state("");
	let password: string = $state("");
	type InputType = "text" | "password";
	let inputType: InputType = $state("password");
	let forgotPassword: boolean = $state(false);
	let rememberUser: boolean = $state(false);

	function handleLogin(event: Event) {
		event.preventDefault();
		// Reme
		handleRememberUser();
		if (!email || !password) {
			handleAlertMessage("Please fill in all fields.");
			return;
		}
		authHandlers.login(email, password).catch((error) => {
			handleAlertMessage(error.message.toString());
		});
	}

	function handleForgotPassword(event: Event) {
		event.preventDefault();
		if (!email) {
			handleAlertMessage("Please enter your email address.");
			return;
		}
		authHandlers.resetPassword(email).then(() => {
			forgotPassword = false;
		});
	}

	function handleRememberUser() {
		if (rememberUser) {
			localStorage.setItem("email", email);
		} else {
			localStorage.removeItem("email");
		}
	}

	onMount(() => {
		const storedEmail = localStorage.getItem("email");
		if (storedEmail) {
			email = storedEmail;
			rememberUser = true;
		}
	});
</script>

<form onsubmit={handleLogin} class="surface">
	<div class="form-container">
		<!-- <img src="" alt=""> [Logo] -->
		{#if !forgotPassword}
			<h2>Welcome back</h2>
			<label
				>Email address:<span class="required">*</span>
				<input class="text-input" type="email" placeholder="email@example.com" bind:value={email} required />
			</label>
			<label
				>Password:<span class="required">*</span>
				<div class="password-input">
					<input class="text-input" type={inputType} placeholder="**********" bind:value={password} required />
					<button
						type="button"
						onclick={(event) => {
							event.preventDefault();
							inputType = inputType === "password" ? "text" : "password";
						}}
					>
						{#if inputType === "password"}
							<span class="material-icons">visibility</span>
						{:else if inputType === "text"}
							<span class="material-icons">visibility_off</span>
						{/if}
					</button>
				</div>
			</label>
			<label>
				<input
					type="checkbox"
					bind:checked={rememberUser}
					onchange={() => {
						if (rememberUser === false) {
							email = "";
						}
					}}
				/> Remember me
			</label>
			<div class="login-actions">
				<button class="button button-primary" type="submit">Log In</button>
				<button class="button button-link" type="button" onclick={() => (forgotPassword = true)}>Forgot Password?</button>
			</div>
		{:else if forgotPassword}
			<h2>Reset Password</h2>
			<label
				>Email address:<span class="required">*</span>
				<input class="text-input" type="email" placeholder="email@example.com" bind:value={email} required />
			</label>
			<div class="login-actions">
				<button class="button button-primary" onclick={handleForgotPassword}>Send Password Reset</button>
				<button class="button button-link" type="button" onclick={() => (forgotPassword = false)}>Back to Login</button>
			</div>
		{/if}
	</div>
</form>

<style>
	form {
		width: fit-content;
	}

	form h2 {
		text-align: center;
	}

	label span.required {
		color: var(--color-error, red);
	}

	label input {
		margin-top: var(--spacing-s);
	}

	div.password-input span.material-icons {
		transform: translateY(0.25rem);
	}

	div.form-container {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-m);
	}

	div.password-input {
		position: relative;
	}

	div.password-input button {
		position: absolute;
		right: var(--spacing-s, 0.25rem);
		top: 50%;
		transform: translateY(-50%);
		background: none;
		border: none;
		cursor: pointer;
	}

	div.login-actions {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: var(--spacing-m);
	}
</style>
