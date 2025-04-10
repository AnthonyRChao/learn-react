import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Link
        className="text-blue-300 hover:text-blue-600 bg-white p-4 rounded-md"
        to="/rock-paper-scissors"
      >
        Rock Paper Scissors
      </Link>
    </div>
  )
}
