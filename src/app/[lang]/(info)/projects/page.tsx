import { CardProject } from "@components/Surfaces";
import PageLayout from "@components/Surfaces/PageLayout";

const projects = [
    {
        title: "LearnAla",
        description:
      "LearnAla es tu plataforma personalizada que facilita la gestión de contenido, mide los resultados y optimiza el tiempo y recursos de tu organización.",
        href: "https://www.learnala.com/",
        isOnline: true,
        technologies: [ "React", "Django", "Postgress", "Mui", "AWS" ],
        icon: "web"
    },
    {
        title: "Monster Codes",
        description:
      "MonsterCodes es un portafolio personalizada para recrear lo que se ha aprendido y enseñar lo aprendido.",
        href: "https://www.monstercodes.dev/en-US/",
        repoUrl: "https://github.com/monzter50/my-website-nextjs/tree/main",
        isOnline: true,
        technologies: [ "React", "Nextjs", "Typescript" ],
        icon: "web"
    },
    {
        title: "Cli Library",
        description:
      "Cli Library es un template de biblioteca de comandos para la terminal que te ayuda a crear proyectos de manera mas rapida y eficiente.",
        repoUrl: "https://github.com/monzter50/cli-library",
        isOnline: true,
        technologies: [ "Javascript", "Typescript", "Nodejs", "tsup", "ESLint", "Jest", "CLI" ],
        icon: "library"
    },
    {
        title: "Boilerplate API Core Library",
        description:
      "Boilerplate API Core Library es un template de biblioteca que te ayuda a crear APIs de manera mas rapida y eficiente.",
        repoUrl: "https://github.com/monzter50/boilerplate-api-core-library",
        isOnline: true,
        technologies: [ "Javascript", "Typescript", "Nodejs", "tsup", "ESLint", "Jest" ],
        icon: "library"
    }
];

const breadcrumbItems = [
    { label: "Projects",
        href: "/projects" }
];

export default function Page() {
    return (
        <PageLayout
            title="Projects"
            breadcrumbItems={breadcrumbItems}
        >
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <div key={index} className="mb-2">
                        <CardProject
                            title={project.title}
                            description={project.description}
                            href={project.href}
                            repoUrl={project.repoUrl}
                            isOnline={project.isOnline}
                            technologies={project.technologies}
                            icon={project.icon as any}
                        />
                    </div>
                ))}
            </div>
        </PageLayout>
    );
}
