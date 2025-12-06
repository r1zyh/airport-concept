import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/departure')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/Departure"!</div>
}
