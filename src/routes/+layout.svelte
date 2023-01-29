<script lang="ts">
	import "./app.css";
	import Header from "$lib/Header.svelte";
</script>

<svelte:head>
	<title>Chat App</title>
</svelte:head>

<Header />

<slot />
