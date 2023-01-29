<script lang="ts">
	import { fade } from "svelte/transition";
	import { flip } from "svelte/animate";
	import { name } from "$/stores";
	import type { user } from "$/types";
	export let users: user[] = [];
</script>

<aside>
	<ul class="user-list">
		<span>Users: </span>
		{#each users as user (user.id)}
			<li animate:flip transition:fade>{user.name}</li>
		{/each}
	</ul>
	<p class="login-info">
		You are logged in as <b>{$name}</b>
	</p>
	<a href="/" data-sveltekit-reload>Logout</a>
</aside>

<style>
	aside {
		padding: 0.5rem;
		color: var(--dark-font-color);
		font-size: smaller;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}

	ul {
		list-style-type: none;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.5rem;
	}

	li {
		background-color: var(--bg-color-2);
		padding: 0.2rem 0.4rem;
		border-radius: 0.1rem;
	}

	@media (min-width: 360px) {
		.user-list {
			margin-right: auto;
		}
		aside {
			flex-direction: row;
		}
	}
</style>
