<script lang="ts">
	import { name } from "$/stores";
	export let users = [];
</script>

<aside>
	<ul class="user-list">
		<span>Users: </span>
		{#each users as user}
			<li>{user.name}</li>
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
