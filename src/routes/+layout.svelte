<script lang="ts">
	import { onMount } from "svelte";
	import Toast from "$lib/components/Toast.svelte";
	import { uiStore } from "$lib/stores/uiStore.svelte";
	import { auth } from "$lib/firebase/firebase";
	import "material-icons/iconfont/filled.css";
	import Nav from "$lib/components/Nav.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import BookingModal from "$lib/components/BookingModal.svelte";

	onMount(() => {
		uiStore.loading = true;
		// Set up Firebase authentication state listener
		const unsubscribe = auth.onAuthStateChanged(async (user: any) => {
			if (!user) {
				uiStore.loggedIn = false;
				uiStore.loading = false;
			}

			if (user) {
				uiStore.loggedIn = true;
				uiStore.loading = false;
			}
		});
		return unsubscribe;
	});
</script>

<Nav />
<slot />
<Footer />
<Toast />
<BookingModal />
