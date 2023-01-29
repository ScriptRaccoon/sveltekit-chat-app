<script>
	import io from "socket.io-client";
	import { browser } from "$app/environment";
	import { goto } from "$app/navigation";
	import Status from "$lib/Status.svelte";
	import Messages from "$lib/Messages.svelte";
	import SendForm from "$lib/Send.svelte";
	import { name } from "$/stores";
	import { tick } from "svelte";
	import { onMount } from "svelte";

	if (browser && !$name) {
		goto("/");
	}

	const socket = io();

	let messages = [];
	let text = "";

	socket.on("message", async (message) => {
		messages = [...messages, message];
		await tick();
		window.scrollTo(0, document.body.scrollHeight);
	});

	function sendMessage() {
		socket.emit("message", {
			author: $name,
			text: text,
		});
		text = "";
	}

	onMount(() => {
		socket.emit("name", $name);
	});
</script>

<Status />
<Messages bind:messages />
<SendForm bind:text {sendMessage} />
