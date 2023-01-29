import { sveltekit } from "@sveltejs/kit/vite";
import type { UserConfig } from "vite";
import { Server } from "socket.io";

// plugin used for development only
const socket_io_plugin = {
	name: "socket-io-plugin",
	configureServer(server) {
		console.log("socket io plugin is running...");
		const io = new Server(server.httpServer);
		io.on("connection", (socket) => {
			socket.on("message", (message) => {
				io.emit("message", message);
			});
		});
	},
};

const config: UserConfig = {
	plugins: [sveltekit(), socket_io_plugin],
};

export default config;
