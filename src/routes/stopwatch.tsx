import { createFileRoute } from '@tanstack/react-router'
import { useRef, useState } from 'react'

export const Route = createFileRoute('/stopwatch')({
  component: RouteComponent,
})

function RouteComponent() {
  const [elapsed, setElapsed] = useState(0)
  const [state, setState] = useState<'initial' | 'running' | 'paused'>('initial')
  const intervalRef = useRef<NodeJS.Timeout>(null)

  function start() {
    setState('running')
    intervalRef.current = setInterval(() => {
      setElapsed(prev => prev+ 1)
    }, 1000)
  }

  function pause() {
    setState('paused')
    clear()
  }

  function reset() {
    setState('initial')
    setElapsed(0)
    clear()
  }

  function clear() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border border-gray-500 rounded p-12 flex flex-col gap-4">
        <div>{elapsed} seconds elapsed</div>
        {state === 'initial' && (
          <>
            <button onClick={start} className="bg-green-500 text-white p-2 rounded">Start</button>
          </>
        )}
        {state === 'running' && (
          <>
            <button onClick={pause} className="bg-blue-500 text-white p-2 rounded">Pause</button>
          </>
        )}
        {state === 'paused' && (
          <>
            <div className="flex gap-2">
              <button onClick={start} className="bg-blue-500 text-white p-2 rounded">Resume</button>
              <button onClick={reset} className="bg-red-500 text-white p-2 rounded">Reset</button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
