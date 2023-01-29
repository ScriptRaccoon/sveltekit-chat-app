export function setup(io) {
	let users = [];
	io.on("connection", (socket) => {
		console.log("connected with", socket.id);
		socket.on("name", async (name) => {
			socket.name = name;
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
			console.log("socket disconnected", socket.id);
			io.emit("message", {
				author: "",
				text: `🏃‍♀️ ${socket.name} has left the chat`,
				bot: true,
			});
		});
	});
}
