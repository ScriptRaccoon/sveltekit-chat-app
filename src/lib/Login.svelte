<script lang="ts">
	import { goto } from "$app/navigation";
	import { name } from "$/stores";
	let name_input = "";
	function handle_login() {
		$name = name_input;
		goto("/chat");
	}
</script>

<form on:submit|preventDefault={handle_login}>
	<label
		>Choose a name&nbsp; <input
			type="text"
			bind:value={name_input}
			required={true}
		/></label
	>

	<button>Start the chat</button>
</form>

<style>
	form {
		padding: 1rem;
	}

	label {
		display: block;
		margin-bottom: 1rem;
	}
</style>
