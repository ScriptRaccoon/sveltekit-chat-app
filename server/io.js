export function setup(io) {
	io.on("connection", (socket) => {
		socket.on("name", (name) => {
			io.emit("message", {
				author: "",
				text: `${name} has entered the chat 👋`,
				bot: true,
			});
		});
		socket.on("message", (message) => {
			io.emit("message", { ...message, bot: false });
		});
	});
}
