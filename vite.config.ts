import { sveltekit } from "@sveltejs/kit/vite";
import type { UserConfig } from "vite";
import { Server } from "socket.io";
import { setup } from "./server/io";

// plugin used for development only
const socket_io_plugin = {
	name: "socket-io-plugin",
	configureServer(server) {
		const io = new Server(server.httpServer);
		setup(io);
	},
};

const config: UserConfig = {
	plugins: [sveltekit(), socket_io_plugin],
};

export default config;
