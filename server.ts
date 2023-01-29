import express from "express";
import { handler } from "./build/handler.js";
import { Server } from "socket.io";

import type { message, user } from "./src/types";

const PORT = 3000;
const app = express();
const server = app.listen(PORT, () => {
	console.log("server is listening on port", PORT);
});

interface ServerToClientEvents {
	message: (m: message) => void;
	users: (u: user[]) => void;
}

interface ClientToServerEvents {
	name: (n: string) => void;
	message: (m: message) => void;
}

interface InterServerEvents {}

interface SocketData {
	name: string;
}

const io = new Server<
	ClientToServerEvents,
	ServerToClientEvents,
	InterServerEvents,
	SocketData
>();

io.attach(server);

io.on("connection", (socket) => {
	let users: user[] = [];

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

app.use(handler);
