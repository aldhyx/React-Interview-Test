import { useGetGithubRepo } from "@/hooks/query/use-get-github-repo";
import { Loader2, Star } from "lucide-react";

const RepoList = (props: { expanded: boolean; username: string }) => {
  const { data, error, isFetching } = useGetGithubRepo(props.username);
  const showRepoList = !isFetching && data.length > 0;

  if (isFetching) {
    return (
      <div className="flex gap-2 p-4 text-sm items-center">
        <Loader2 className="animate-spin size-4" />
        <span>Getting repos...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-sm text-destructive">
        <span>Something went wrong, </span>
        <span>{error.message}</span>
      </div>
    );
  }

  if (data.length <= 0) {
    return (
      <div className="p-4 text-sm text-muted-foreground">No repos found.</div>
    );
  }

  return (
    <ul className="pl-8 grid grid-cols-1 gap-2 mt-2">
      {showRepoList &&
        data.map((item) => (
          <li
            key={item.id}
            role="button"
            tabIndex={0}
            className="bg-muted-foreground/15 p-4 rounded flex justify-between items-start gap-12"
          >
            <div>
              <span className="font-bold block">{item.name}</span>
              <span className="text-sm">{item.description || "-"}</span>
            </div>

            <div className="flex items-center gap-2">
              <span>{item.stargazers_count}</span>
              <Star className="fill-foreground size-4" />
            </div>
          </li>
        ))}
    </ul>
  );
};

export default RepoList;
