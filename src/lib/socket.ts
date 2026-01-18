import { io, Socket } from 'socket.io-client'
const SOCKET_URL = import.meta.env.VITE_SOCKET_URL ?? 'http://localhost:8080'

export const socket: Socket = io(SOCKET_URL, {
  autoConnect: false,
  reconnection: true,
  transports: ['websocket'],
  withCredentials: true,
})
