import { sveltekit } from "@sveltejs/kit/vite";
import type { UserConfig } from "vite";

const config: UserConfig = {
	plugins: [
		sveltekit(),
		{
			name: "socket.io plugin",
			configureServer(server) {
				console.log("I am injected into the vite dev server");
			},
		},
	],
};

export default config;
