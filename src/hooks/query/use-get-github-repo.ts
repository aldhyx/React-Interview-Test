import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "./_key";
import type { GithubRepo } from "@/types";

export function useGetGithubRepo(username?: string) {
  return useQuery({
    enabled: !!username,
    initialData: [],
    queryKey: [QUERY_KEY.GET_GITHUB_REPO, username],
    queryFn: async () => {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      const data = await response.json();
      return data as GithubRepo[];
    },
  });
}
