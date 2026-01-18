import { Button } from '@/components/ui/button'
import { useSocket } from '@/hooks/useSocket'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState, type ChangeEvent } from 'react'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const { socket } = useSocket()
  const [message, setMessage] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value)
  }
  const handleClick = () => {
    socket.emit('event:message', message)
  }

  const handleRecieveMessage = (data: any) => {
    console.log(data)
  }

  useEffect(() => {
    if (!socket) return
    socket.on('message', handleRecieveMessage)

    return () => {
      socket.off('message')
    }
  }, [socket])

  return (
    <>
      <p className="text-red-400">hello world</p>
      <input placeholder="enter message" onChange={handleChange} />
      <Button onClick={handleClick}> click</Button>
    </>
  )
}
