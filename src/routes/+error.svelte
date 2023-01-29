<script>
	import { page } from "$app/stores";
</script>

<h2>Error</h2>

<div>
	<p>Sorry, something went wrong!</p>

	<pre>{$page.status}: {$page.error.message}</pre>

	<a href="/">Home</a>
</div>

<style>
	h2 {
		padding-block: 1rem;
		text-align: center;
		color: tomato;
	}
	div {
		text-align: center;
		line-height: 2;
	}
	pre {
		font-weight: bold;
		color: var(--dark-font-color);
	}
</style>
