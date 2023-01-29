export type message = {
	author: string;
	text: string;
	bot: boolean;
};

export type user = {
	id: string;
	name: string;
};

export type ServerToClientEvents = {
	message: (m: message) => void;
	users: (u: user[]) => void;
};

export type ClientToServerEvents = {
	name: (n: string) => void;
	message: (m: message) => void;
};

export type InterServerEvents = {};

export type SocketData = {
	name: string;
};
