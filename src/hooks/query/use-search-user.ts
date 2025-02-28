import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "./_key";

// @note: This is just a few data, for more take a look at github api docs
type ReturnData = {
  id: number;
  url: string;
  html_url: string;
  avatar_url: string;
  repos_url: string;
  login: string;
};

export function useSearchUser(username?: string) {
  return useQuery({
    enabled: !!username,
    initialData: [],
    queryKey: [QUERY_KEY.SEARCH_USER, username],
    queryFn: async () => {
      // @TODO: remove
      await new Promise((res) =>
        setTimeout(() => {
          res("");
        }, 5000)
      );
      const response = await fetch(
        `https://api.github.com/search/users?q=${username}&per_page=5`
      );
      const data = await response.json();
      return data.items as ReturnData[];
    },
  });
}
