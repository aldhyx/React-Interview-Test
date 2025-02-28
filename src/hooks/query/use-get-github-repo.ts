import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "./_key";
import type { GithubRepo } from "@/types";

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export function useGetGithubRepo(props: {
  username?: string;
  expanded: boolean;
}) {
  return useQuery({
    enabled: !!props.username && props.expanded,
    initialData: [],
    queryKey: [QUERY_KEY.GET_GITHUB_REPO, props.username],
    queryFn: async () => {
      const response = await fetch(
        `https://api.github.com/users/${props.username}/repos`,
        {
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || `Error status: ${response.status}`
        );
      }

      const data = await response.json();
      return data as GithubRepo[];
    },
  });
}
