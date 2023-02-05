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
	<div>
		<label for="nameInput">Choose a name</label>
		<input
			id="nameInput"
			type="text"
			bind:value={my_name}
			required={true}
		/>
	</div>
	<button>Start the chat</button>
</form>

<style>
	form {
		padding: 1rem;
	}
	div {
		margin-bottom: 1rem;
	}
</style>
