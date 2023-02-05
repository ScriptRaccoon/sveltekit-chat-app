import { sveltekit } from "@sveltejs/kit/vite";
import type { UserConfig, ViteDevServer } from "vite";
import { attach_sockets } from "./sockets";

const socket_io_plugin = {
	name: "socket.io plugin",
	configureServer(server: ViteDevServer) {
		attach_sockets(server.httpServer!);
	},
};

const config: UserConfig = {
	plugins: [sveltekit(), socket_io_plugin],
};

export default config;
