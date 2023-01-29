<script lang="ts">
	import { io, Socket } from "socket.io-client";
	import { browser } from "$app/environment";
	import { goto } from "$app/navigation";
	import Status from "$lib/Status.svelte";
	import Messages from "$lib/Messages.svelte";
	import SendForm from "$lib/Send.svelte";
	import { name } from "$/stores";
	import { tick } from "svelte";
	import { onMount } from "svelte";
	import type {
		message,
		user,
		ServerToClientEvents,
		ClientToServerEvents,
	} from "$/types";

	let messages: message[] = [];
	let users: user[] = [];
	let text = "";
	let socket:
		| undefined
		| Socket<ServerToClientEvents, ClientToServerEvents>;

	if (browser && !$name) {
		goto("/");
	} else {
		socket = io();

		socket.on("message", async (message) => {
			messages = [...messages, message];
			await tick();
			window.scrollTo(0, document.body.scrollHeight);
		});

		socket.on("users", (_users) => {
			users = _users;
		});

		onMount(() => {
			socket?.emit("name", $name);
		});
	}

	function sendMessage() {
		socket?.emit("message", {
			author: $name,
			text: text,
			bot: false,
		});
		text = "";
	}
</script>

<Status {users} />
<Messages bind:messages />
<SendForm bind:text {sendMessage} />
