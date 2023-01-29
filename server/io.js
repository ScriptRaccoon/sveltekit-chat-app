export function setup(io) {
	const users = [];
	io.on("connection", (socket) => {
		console.log("connected with", socket.id);
		socket.on("name", (name) => {
			socket.name = name;
			io.emit("message", {
				author: "",
				text: `👋 ${name} has entered the chat`,
				bot: true,
			});
		});
		socket.on("message", (message) => {
			io.emit("message", { ...message, bot: false });
		});
		socket.on("disconnect", () => {
			console.log("socket disconnected", socket.id);
			io.emit("message", {
				author: "",
				text: `🏃‍♀️ ${socket.name} has left the chat`,
				bot: true,
			});
		});
	});
}
