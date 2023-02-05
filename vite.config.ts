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

// plugin used for development only
const socket_io_plugin = {
	name: "socket.io plugin",
	configureServer(server: ViteDevServer) {
		let users: user[] = [];
		if (server.httpServer) {
			console.log("socket.io plugin is running...");
			const io = new Server<
				ClientToServerEvents,
				ServerToClientEvents,
				InterServerEvents,
				SocketData
			>(server.httpServer);
			io.on("connection", (socket) => {
				socket.on("name", async (name) => {
					socket.data.name = name;

					io.emit("message", {
						author: "",
						text: `👋 ${name} has entered the chat`,
						bot: true,
					});

					users.push({ id: socket.id, name: name });
					io.emit("users", users);
				});

				socket.on("message", (message) => {
					io.emit("message", { ...message, bot: false });
				});

				socket.on("disconnect", () => {
					users = users.filter(
						(user) => user.id != socket.id
					);
					io.emit("users", users);
					io.emit("message", {
						author: "",
						text: `🏃‍♀️ ${socket.data.name} has left the chat`,
						bot: true,
					});
				});
			});
		}
	},
};

const config: UserConfig = {
	plugins: [sveltekit(), socket_io_plugin],
};

export default config;
