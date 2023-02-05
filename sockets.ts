import type { IncomingMessage, ServerResponse, Server } from "http";
import { Server as ioServer } from "socket.io";

import type {
	ClientToServerEvents,
	ServerToClientEvents,
	InterServerEvents,
	SocketData,
	user,
} from "./src/types";

export function attach_sockets(
	server: Server<typeof IncomingMessage, typeof ServerResponse>
) {
	let users: user[] = [];

	const io = new ioServer<
		ClientToServerEvents,
		ServerToClientEvents,
		InterServerEvents,
		SocketData
	>(server);

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
			users = users.filter((user) => user.id != socket.id);
			io.emit("users", users);
			io.emit("message", {
				author: "",
				text: `🏃‍♀️ ${socket.data.name} has left the chat`,
				bot: true,
			});
		});
	});
}
