import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/stopwatch')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/stopwatch"!</div>
}
