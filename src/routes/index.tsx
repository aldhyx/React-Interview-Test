import { createFileRoute, useSearch } from "@tanstack/react-router";
import SearchForm from "@/components/search-form";
import CollapsibleItem from "@/components/collapsible-item";
import { Loader2, Star } from "lucide-react";
import { z } from "zod";
import { fallback, zodValidator } from "@tanstack/zod-adapter";
import { useSearchUser } from "@/hooks/query/use-search-user";

const searchSchema = z.object({
  username: fallback(z.string().max(39).optional(), ""),
});

export const Route = createFileRoute("/")({
  component: App,
  validateSearch: zodValidator(searchSchema),
});

function App() {
  const { username } = useSearch({ from: "/" });
  const { status, data, error, isFetching } = useSearchUser(username);
  const showSearchLabel = !isFetching && username;
  const showUserList = !isFetching && data.length > 0;

  // @todo: remove
  console.log({ status, data, error, isFetching });

  return (
    <div className="mx-auto max-w-2xl p-4">
      <SearchForm defaultUsername={username} isFetching={isFetching} />

      <main className="pt-4">
        {showSearchLabel && (
          <p className="mb-2 text-sm">
            <span className="text-muted-foreground">Showing 5 users for</span>{" "}
            <strong>{username}</strong>.
          </p>
        )}

        {showUserList && (
          <ul className="grid grid-cols-1 gap-2">
            {data.map((item) => (
              <li key={item.id}>
                <CollapsibleItem title={item.login}></CollapsibleItem>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
