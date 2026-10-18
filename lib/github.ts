import { IProject, ProjectIcon } from "@lib/types/projects.types";

export const GITHUB_LOGIN = "monzter50";

// Pinned items only exist in the GraphQL API, which always needs a token. A
// fine-grained token with no extra permissions (public repos, read-only) is enough.
const PINNED_QUERY = `
  query Pinned($login: String!) {
    user(login: $login) {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            description
            url
            homepageUrl
            isArchived
            primaryLanguage { name }
            repositoryTopics(first: 6) { nodes { topic { name } } }
          }
        }
      }
    }
  }
`;

export interface PinnedRepository {
  name: string
  description: string | null
  url: string
  homepageUrl: string | null
  isArchived: boolean
  primaryLanguage: { name: string } | null
  repositoryTopics: { nodes: Array<{ topic: { name: string } }> }
}

interface PinnedResponse {
  data?: { user: { pinnedItems: { nodes: PinnedRepository[] } } | null }
  errors?: Array<{ message: string }>
}

const LIBRARY_TOPICS = [ "library", "cli", "npm", "package", "boilerplate", "template" ];

function iconFor(repo: PinnedRepository, topics: string[]): ProjectIcon {
  if (topics.some((topic) => LIBRARY_TOPICS.includes(topic))) return "library";
  if (topics.some((topic) => [ "ai", "llm", "machine-learning" ].includes(topic))) return "ai";
  if (repo.homepageUrl) return "web";
  return "code";
}

/** "my-website-nextjs" → "My Website Nextjs" */
function titleFor(name: string): string {
  return name
    .split(/[-_]/)
    .filter(Boolean)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

export function toProject(repo: PinnedRepository): IProject {
  const topics = repo.repositoryTopics.nodes.map((node) => node.topic.name);
  const technologies = [ repo.primaryLanguage?.name, ...topics ].filter((tech): tech is string => Boolean(tech));

  return {
    title: titleFor(repo.name),
    description: repo.description ?? "",
    href: repo.homepageUrl || undefined,
    repoUrl: repo.url,
    isOnline: !repo.isArchived,
    technologies: Array.from(new Set(technologies)).slice(0, 6),
    icon: iconFor(repo, topics)
  };
}

/**
 * The profile's pinned repositories, or null when there is no token or GitHub
 * fails, so callers can fall back to the static list. Cached for an hour (ISR).
 */
export async function getPinnedProjects(login = GITHUB_LOGIN): Promise<IProject[] | null> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return null;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ query: PINNED_QUERY, variables: { login } }),
      next: { revalidate: 3600, tags: [ "github-pinned" ] }
    });
    if (!response.ok) {
      console.error(`GitHub pinned repositories: HTTP ${response.status}`);
      return null;
    }

    const { data, errors } = (await response.json()) as PinnedResponse;
    if (errors?.length || !data?.user) {
      console.error("GitHub pinned repositories:", errors?.map((error) => error.message).join("; ") ?? "user not found");
      return null;
    }

    const projects = data.user.pinnedItems.nodes.map(toProject);
    return projects.length ? projects : null;
  } catch (error) {
    console.error("GitHub pinned repositories:", error);
    return null;
  }
}
