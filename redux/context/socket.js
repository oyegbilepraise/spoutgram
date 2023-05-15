import React from "react";
import socketio from "socket.io-client";
import { baseUrl } from "../baseUrl";
// import { SOCKET_URL } from "config";


const SOCKET_URL = baseUrl
// const SOCKET_URL = "https://spoutgram.onrender.com"

export const socket = socketio.connect(SOCKET_URL);
export const SocketContext = React.createContext();