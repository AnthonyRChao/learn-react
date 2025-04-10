import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Link
        className="hover:bg-gray-800 border border-gray-500 bg-black p-4 rounded-md"
        to="/rock-paper-scissors"
      >
        Rock Paper Scissors
      </Link>
    </div>
  )
}
