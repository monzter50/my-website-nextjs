/**
 * @jest-environment node
 */
import { getPinnedProjects, PinnedRepository, toProject } from "@lib/github";

const repo = (overrides: Partial<PinnedRepository> = {}): PinnedRepository => ({
  name: "my-website-nextjs",
  description: "Personal site",
  url: "https://github.com/monzter50/my-website-nextjs",
  homepageUrl: "https://www.monstercodes.dev",
  isArchived: false,
  primaryLanguage: { name: "TypeScript" },
  repositoryTopics: { nodes: [ { topic: { name: "nextjs" } }, { topic: { name: "typescript" } } ] },
  ...overrides
});

describe("toProject", () => {
  it("maps a pinned repository to a project card", () => {
    expect(toProject(repo())).toEqual({
      title: "My Website Nextjs",
      description: "Personal site",
      href: "https://www.monstercodes.dev",
      repoUrl: "https://github.com/monzter50/my-website-nextjs",
      isOnline: true,
      technologies: [ "TypeScript", "nextjs", "typescript" ],
      icon: "web"
    });
  });

  it("handles missing optional fields", () => {
    const project = toProject(repo({ description: null, homepageUrl: "", primaryLanguage: null, repositoryTopics: { nodes: [] } }));
    expect(project).toMatchObject({ description: "", href: undefined, technologies: [], icon: "code" });
  });

  it("marks libraries and archived repositories", () => {
    const project = toProject(repo({ isArchived: true, repositoryTopics: { nodes: [ { topic: { name: "cli" } } ] } }));
    expect(project).toMatchObject({ icon: "library", isOnline: false });
  });
});

describe("getPinnedProjects", () => {
  const originalFetch = global.fetch;
  const originalToken = process.env.GITHUB_TOKEN;
  beforeEach(() => {
    delete process.env.GITHUB_TOKEN;
  });
  afterEach(() => {
    global.fetch = originalFetch;
    process.env.GITHUB_TOKEN = originalToken;
    if (originalToken === undefined) delete process.env.GITHUB_TOKEN;
  });

  it("returns null without a token so callers use the fallback", async () => {
    global.fetch = jest.fn();
    await expect(getPinnedProjects()).resolves.toBeNull();
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it("returns null when GitHub answers with errors", async () => {
    process.env.GITHUB_TOKEN = "token";
    jest.spyOn(console, "error").mockImplementation(() => {});
    global.fetch = jest.fn().mockResolvedValue({ ok: true, json: async () => ({ errors: [ { message: "Bad credentials" } ] }) });
    await expect(getPinnedProjects()).resolves.toBeNull();
  });

  it("maps the pinned repositories", async () => {
    process.env.GITHUB_TOKEN = "token";
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ data: { user: { pinnedItems: { nodes: [ repo() ] } } } })
    });
    const projects = await getPinnedProjects();
    expect(projects?.[0].title).toBe("My Website Nextjs");
    expect(global.fetch).toHaveBeenCalledWith("https://api.github.com/graphql", expect.objectContaining({
      headers: expect.objectContaining({ Authorization: "bearer token" })
    }));
  });
});
