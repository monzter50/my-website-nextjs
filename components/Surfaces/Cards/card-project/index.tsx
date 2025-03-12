import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@components/ui/card'
import { Badge } from '@components/ui/badge'
import { ExternalLinkIcon, GithubIcon, CodeIcon, AlertCircleIcon } from 'lucide-react'
import { cn } from '@lib/utils'

interface CardProjectProps {
  title: string
  description: string
  href?: string
  repoUrl?: string
  isOnline?: boolean
  technologies?: string[]
  icon?: 'code' | 'web' | 'app' | 'data' | 'ai' | 'game' | 'library' | 'library'
}

export default function CardProject({
  title,
  description,
  href,
  repoUrl,
  isOnline = true,
  technologies = [],
  icon = 'code'
}: CardProjectProps) {
  // Map of icons for different project types
  const icons = {
    code: <CodeIcon className="w-6 h-6" />,
    web: <ExternalLinkIcon className="w-6 h-6" />,
    app: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
            >
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" x2="16" y1="21" y2="21" />
                <line x1="12" x2="12" y1="17" y2="21" />
            </svg>
    ),
    data: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
            >
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            </svg>
    ),
    ai: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
            >
                <path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z" />
                <path d="M12 6a4 4 0 0 0-4 4v10l2-2 2 2 2-2 2 2V10a4 4 0 0 0-4-4z" />
            </svg>
    ),
    game: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
            >
                <line x1="6" x2="10" y1="12" y2="12" />
                <line x1="8" x2="8" y1="10" y2="14" />
                <line x1="15" x2="15.01" y1="13" y2="13" />
                <line x1="18" x2="18.01" y1="11" y2="11" />
                <rect width="20" height="12" x="2" y="6" rx="2" />
            </svg>
    ),
    library: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
            >
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
            </svg>
    )
  }

  return (
        <Card
            className={cn(
              'overflow-hidden transition-all duration-300 hover:shadow-md border-l-4',
              isOnline ? 'border-l-green-500' : 'border-l-gray-300'
            )}
        >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="flex items-center space-x-2">
                    <div
                        className={cn(
                          'p-2 rounded-md',
                          isOnline
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                            : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
                        )}
                    >
                        {icons[icon]}
                    </div>
                    <CardTitle className="text-lg font-medium">{title}</CardTitle>
                </div>
                <div className="flex items-center space-x-1">
                    {isOnline
                      ? (
                        <Badge
                            variant="outline"
                            className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800"
                        >
                            Online
                        </Badge>
                        )
                      : (
                        <Badge
                            variant="outline"
                            className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400 border-gray-200 dark:border-gray-700"
                        >
                            Offline
                        </Badge>
                        )}
                </div>
            </CardHeader>
            <CardContent className="pt-4">
                <p className="text-sm text-muted-foreground">{description}</p>

                {technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-4">
                        {technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                )}
            </CardContent>
            <CardFooter className="flex justify-between pt-2">
                <div className="flex space-x-2">
                    {href && (
                        <Link
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs flex items-center space-x-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                            <ExternalLinkIcon className="w-3 h-3" />
                            <span>Visit</span>
                        </Link>
                    )}
                    {repoUrl && (
                        <Link
                            href={repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs flex items-center space-x-1 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
                        >
                            <GithubIcon className="w-3 h-3" />
                            <span>Code</span>
                        </Link>
                    )}
                </div>
                {!isOnline && (
                    <div className="flex items-center text-xs text-amber-600 dark:text-amber-400">
                        <AlertCircleIcon className="w-3 h-3 mr-1" />
                        <span>Maintenance</span>
                    </div>
                )}
            </CardFooter>
        </Card>
  )
}
