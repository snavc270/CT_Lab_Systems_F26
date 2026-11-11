import { io } from "socket.io-client";

// One shared connection for the whole app
export const socket = io("http://localhost:3000");
