// Reusable Intersection Observer Action for SvelteKit
// Usage: <div use:isIntersecting={{threshold: 0.5}} on:intersect={handleIntersect}>...</div>
// Ensure to import the action: import { isIntersecting } from '$lib/utils/isIntersecting';
// Ensure app.d.ts has the following declaration:
/*
interface HTMLAttributes<T> {
			...other declarations
			onintersect?: IntersectionObserverCallback<T>;
		}
*/
/* 
	Example usage in this project with SpanifyText.svelte:
    <h1
        class="heading-fade-in"
        use:isIntersecting={{ threshold: 0.5, once: true }}
        onintersect={(e: CustomEvent<boolean>) => (e.currentTarget as HTMLElement).classList.toggle("show", e.detail)}
    >
        <SpanifyText text="My frequently asked questions" />
    </h1>
*/

export interface IsIntersectingOptions {
	threshold?: number | number[];
	once?: boolean;
	root?: Element | null;
	rootMargin?: string;
}

export function isIntersecting(node: HTMLElement, { threshold = 0.1, once = false, root = null, rootMargin }: IsIntersectingOptions = {}) {
	const observer = new IntersectionObserver(
		(entries) => {
			const e = entries[0];
			if (e.isIntersecting) {
				node.dispatchEvent(new CustomEvent<boolean>("intersect", { detail: true }));
				if (once) observer.disconnect();
			} else if (!once) {
				node.dispatchEvent(new CustomEvent<boolean>("intersect", { detail: false }));
			}
		},
		{ threshold, root, rootMargin }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
