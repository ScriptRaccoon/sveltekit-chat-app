<script>
	export let text = "";
	export let sendMessage = () => {};
</script>

<form on:submit|preventDefault={sendMessage}>
	<input aria-label="message" type="text" bind:value={text} />
	<button>Send message</button>
</form>

<style>
	form {
		padding: 1rem;
		background-color: var(--bg-color-2);
		display: flex;
		gap: 1rem;
	}

	input {
		flex-grow: 1;
	}

	@media (max-width: 360px) {
		form {
			flex-direction: column;
		}
	}
</style>
