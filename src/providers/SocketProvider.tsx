import { SocketContext } from '@/context/SocketContext'
import { socket } from '@/lib/socket'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import type { Socket } from 'socket.io-client'

const SocketProvider = ({ children }: { children: ReactNode }) => {
  const socketRef = useRef<Socket | null>(null)
  const [connected, setConnected] = useState(false)

  useEffect(() => {
    if (!socketRef.current?.connected) {
      socketRef.current = socket
    }

    const _socket = socketRef.current
    _socket.connect()

    _socket.on('connect', () => setConnected(true))
    _socket.on('disconnect', () => setConnected(false))
    _socket.on('connect_error', (error) =>
      console.warn('Socket connection error:', error),
    )

    return () => {
      // _socket.disconnect()
    }
  }, [])

  return (
    <SocketContext.Provider value={{ socket: socketRef.current, connected }}>
      {children}
    </SocketContext.Provider>
  )
}

export default SocketProvider
