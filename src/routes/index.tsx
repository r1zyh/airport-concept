import { createFileRoute } from "@tanstack/react-router";
import { MainPage } from "../pages/main-page/ui";


export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <MainPage />;
}
