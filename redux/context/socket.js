import React from "react";
import socketio from "socket.io-client";
import { socketbaseUrl } from "../baseUrl";
export const socket = socketio.connect(socketbaseUrl);
export const SocketContext = React.createContext();