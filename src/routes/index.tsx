import { createFileRoute, useSearch } from "@tanstack/react-router";
import SearchForm from "@/components/search-form";
import CollapsibleItem from "@/components/collapsible-item";
import { z } from "zod";
import { fallback, zodValidator } from "@tanstack/zod-adapter";
import { useSearchGithubUser } from "@/hooks/query/use-search-github-user";
import RepoList from "@/components/repo-list";

const searchSchema = z.object({
  username: fallback(z.string().max(39).optional(), ""),
});

export const Route = createFileRoute("/")({
  component: App,
  validateSearch: zodValidator(searchSchema),
});

function App() {
  const { username } = useSearch({ from: "/" });
  const { data, error, isFetching } = useSearchGithubUser(username);
  const showSearchLabel = !isFetching && username;
  const showUserList = !isFetching && data.length > 0;

  return (
    <div className="mx-auto max-w-2xl p-4">
      <SearchForm isFetching={isFetching} />

      <main className="pt-4">
        {showSearchLabel && (
          <p className="mb-2 text-sm">
            <span className="text-muted-foreground">Showing 5 users for</span>{" "}
            <strong>{username}</strong>.
          </p>
        )}

        {error && (
          <div className="text-sm text-destructive">
            <span>Something went wrong, </span>
            <span>{error.message}</span>
          </div>
        )}

        {showUserList && (
          <ul className="grid grid-cols-1 gap-2">
            {data.map((item) => (
              <li key={item.id}>
                <CollapsibleItem
                  title={item.login}
                  renderComponent={({ expanded }) => (
                    <RepoList expanded={expanded} username={item.login} />
                  )}
                />
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
