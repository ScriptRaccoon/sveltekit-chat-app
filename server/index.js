import express from "express";
import { handler } from "../build/handler.js";
import { Server } from "socket.io";
import { setup } from "./io.js";

const PORT = 3000;
const app = express();
const server = app.listen(PORT, () => {
	console.log("server is listening on port", PORT);
});

const io = new Server();
io.attach(server);

setup(io);

app.use(handler);
