<script lang="ts">
	import type { message } from "$/types";

	export let messages: message[] = [];
</script>

<div>
	<ol>
		{#each messages as message}
			<li>
				{#if !message.bot}
					<span class="author">{message.author}:</span>
				{/if}
				<span class:bot={message.bot}>{message.text}</span>
			</li>
		{/each}
	</ol>
</div>

<style>
	div {
		padding: 0.5rem;
		flex-grow: 1;
		overflow-y: auto;
	}
	ol {
		list-style-type: none;
	}
	li {
		margin-bottom: 0.5rem;
	}
	.author {
		color: var(--dark-font-color);
	}
	.bot {
		font-weight: bold;
	}
</style>
