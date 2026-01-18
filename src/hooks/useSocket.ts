import { SocketContext } from '@/context/SocketContext'
import { useContext } from 'react'
import type { Socket } from 'socket.io-client'

export const useSocket = () => {
  const context = useContext(SocketContext)

  if (!context)
    throw new Error('useSocket must be used within a SocketProvider')

  if (!context.socket || !context.connected)
    throw new Error('Socket is not connected')

  return context as { socket: Socket; connected: boolean }
}
