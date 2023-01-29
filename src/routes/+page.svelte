<script>
	import "./app.css";
	import { io } from "socket.io-client";
	const socket = io();

	let messages = [];

	socket.on("message", (message) => {
		messages = [...messages, message];
	});

	let new_message = "";

	function sendMessage() {
		socket.emit("message", new_message);
		new_message = "";
	}
</script>

<h1>Chat App</h1>

<form on:submit|preventDefault={sendMessage}>
	<label for="message_input">Message</label>
	<input type="text" id="message_input" bind:value={new_message} />
</form>

{#each messages as message}
	<p>{message}</p>
{/each}
