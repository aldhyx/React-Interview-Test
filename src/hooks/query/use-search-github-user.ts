import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "./_key";
import type { GithubUser } from "@/types";

export function useSearchGithubUser(username?: string) {
  return useQuery({
    enabled: !!username,
    initialData: [],
    queryKey: [QUERY_KEY.SEARCH_GITHUB_USER, username],
    queryFn: async () => {
      const response = await fetch(
        `https://api.github.com/search/users?q=${username}&per_page=5`
      );
      const data = await response.json();
      return data.items as GithubUser[];
    },
  });
}
