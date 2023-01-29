<script lang="ts">
	import { name } from "$/stores";
</script>

<p>
	You are logged in as <b>{$name}</b>
</p>

<style>
	p {
		text-align: right;
		font-size: smaller;
		padding: 0.5rem;
		color: var(--dark-font-color);
	}
</style>
