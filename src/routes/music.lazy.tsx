import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/music')({
  component: () => <div>Hello /media/music!</div>
})