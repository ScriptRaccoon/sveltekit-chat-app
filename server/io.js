export function setup(io) {
	io.on("connection", (socket) => {
		socket.on("message", (message) => {
			io.emit("message", message);
		});
	});
}
