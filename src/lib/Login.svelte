<script lang="ts">
	import { goto } from "$app/navigation";
	import { name } from "$/stores";
	let my_name = "";
	function handle_login() {
		$name = my_name;
		goto("/chat");
	}
</script>

<form on:submit|preventDefault={handle_login}>
	<label
		>Choose a name&nbsp; <input
			type="text"
			bind:value={my_name}
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
