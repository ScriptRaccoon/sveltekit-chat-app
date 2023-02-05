<script lang="ts">
	export let text = "";
	export let send_message = () => {};
</script>

<form on:submit|preventDefault={send_message}>
	<input aria-label="message" type="text" bind:value={text} />
	<button>Send message</button>
</form>

<style>
	form {
		padding: 1rem;
		background-color: var(--bg-color-2);
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	input {
		flex-grow: 1;
	}

	@media (min-width: 420px) {
		form {
			flex-direction: row;
		}
	}
</style>
