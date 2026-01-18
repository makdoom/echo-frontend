import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <>
      <p className="text-red-400">hello world</p>
      <Button> click</Button>
    </>
  )
}
