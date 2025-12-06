import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/arrival')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/arrival"!</div>
}
