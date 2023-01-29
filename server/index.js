import express from "express";
import { handler } from "../build/handler.js";
import { Server } from "socket.io";

const PORT = 3000;
const app = express();
const server = app.listen(PORT, () => {
	console.log("server is listening on port", PORT);
});

const io = new Server();
io.attach(server);

io.on("connection", (socket) => {
	socket.on("message", (message) => {
		io.emit("message", message);
	});
});

app.use(handler);
