export type ProjectIcon = "code" | "web" | "app" | "data" | "ai" | "game" | "library";

export interface IProject {
  title: string
  description: string
  href?: string
  repoUrl?: string
  isOnline: boolean
  technologies: string[]
  icon: ProjectIcon
}
