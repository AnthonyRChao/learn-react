import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex gap-4 justify-center">
      <Link
        className="hover:bg-gray-800 border border-gray-500 bg-black p-4 rounded-md w-48 text-center"
        to="/rock-paper-scissors"
      >
        Rock Paper Scissors
      </Link>
      <Link
        className="hover:bg-gray-800 border border-gray-500 bg-black p-4 rounded-md w-48 text-center"
        to="/stopwatch"
      >
        Stopwatch
      </Link>
    </div>
  )
}
