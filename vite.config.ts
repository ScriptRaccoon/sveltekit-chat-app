import { sveltekit } from "@sveltejs/kit/vite";
import type { UserConfig, ViteDevServer } from "vite";
import { Server } from "socket.io";
import type {
	user,
	ClientToServerEvents,
	ServerToClientEvents,
	InterServerEvents,
	SocketData,
} from "./src/types";
import { setup_sockets } from "./sockets";

const socket_io_plugin = {
	name: "socket.io plugin",
	configureServer(server: ViteDevServer) {
		let users: user[] = [];
		console.log("socket.io plugin is running...");
		const io = new Server<
			ClientToServerEvents,
			ServerToClientEvents,
			InterServerEvents,
			SocketData
		>(server.httpServer!);
		setup_sockets(io, users);
	},
};

const config: UserConfig = {
	plugins: [sveltekit(), socket_io_plugin],
};

export default config;
