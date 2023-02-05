<script lang="ts">
	import { page } from "$app/stores";
</script>

<section>
	<h2>Error</h2>
	<pre>{$page.status}: {$page?.error?.message}</pre>
	<br />
	<a href="/">Home</a>
</section>

<style>
	section {
		text-align: center;
	}

	h2 {
		padding-block: 1rem;
		color: yellow;
	}

	pre {
		color: yellow;
	}
</style>
