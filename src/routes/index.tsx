import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="bg-red-200">TEST</h1>
    </div>
  );
}
