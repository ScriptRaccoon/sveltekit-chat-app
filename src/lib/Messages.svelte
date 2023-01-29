<script>
	export let messages = [];
</script>

<div>
	<ol>
		{#each messages as message}
			<li>
				<span class="author">{message.author}:</span>
				<span>{message.text}</span>
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
</style>
