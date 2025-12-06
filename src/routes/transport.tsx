import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/transport')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/transport"!</div>
}
