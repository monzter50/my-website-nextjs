import { Metadata } from "next";

import { CardProject } from "@components/Surfaces";
import PageLayout from "@components/Surfaces/PageLayout";
import { getProjects } from "@lib/projects";
import { getDictionary } from "@root/get-dictionary";
import { Locale } from "@root/i18n-config";

export type PageProps = {
  params: Promise<{
    lang: Locale
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return {
    title: `${dictionary.projects.title} | Monster Codes`,
    description: `${dictionary.projects.title} - Monster Codes`,
  };
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  const [ dictionary, projects ] = await Promise.all([ getDictionary(lang), getProjects() ]);
  const title = dictionary.nav?.project ?? "Projects";

  return (
    <PageLayout
      title={title}
      breadcrumbItems={[ { label: title,
        href: `/${lang}/projects` } ]}
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <CardProject key={project.repoUrl ?? project.title} {...project} />
        ))}
      </div>
    </PageLayout>
  );
}
