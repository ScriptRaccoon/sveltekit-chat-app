import express from "express";
import { handler } from "./build/handler.js";
import { Server } from "socket.io";

import type { user } from "./src/types";

const PORT = 3000;
const app = express();
const server = app.listen(PORT, () => {
	console.log("server is listening on port", PORT);
});
app.use(handler);

import type {
	ClientToServerEvents,
	ServerToClientEvents,
	InterServerEvents,
	SocketData,
} from "./src/types";
import { setup_sockets } from "./sockets.js";

const io = new Server<
	ClientToServerEvents,
	ServerToClientEvents,
	InterServerEvents,
	SocketData
>(server);

let users: user[] = [];

setup_sockets(io, users);
