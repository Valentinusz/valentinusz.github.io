import { getMessages } from "@/lib/messages";
import { Card, Cards } from "fumadocs-ui/components/card";
import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default async function HomePage(props: PageProps<"/[lang]">) {
  const { lang } = await props.params;
  const { home } = getMessages(lang);
  const { about, learning } = home;

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 py-12">
      <header className="py-8 text-center">
        <h1 className="mb-4 text-6xl font-bold">{home.name}</h1>
        <p className="text-3xl text-fd-muted-foreground">{home.title}</p>
        <nav aria-label="Social profiles" className="mt-6 flex justify-center gap-3">
          <Link
            href="https://github.com/Valentinusz"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card px-4 py-2 text-sm font-medium text-fd-card-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-primary"
          >
            <GithubLogoIcon aria-hidden="true" className="size-5" weight="fill" />
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/b%C3%A1lint-boda"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card px-4 py-2 text-sm font-medium text-fd-card-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-primary"
          >
            <LinkedinLogoIcon aria-hidden="true" className="size-5" weight="fill" />
            LinkedIn
          </Link>
        </nav>
      </header>

      <article className="space-y-4">
        <h2 className="text-2xl font-semibold">{about.heading}</h2>
        <Cards>
          <Card title={about.cv.heading} description={about.cv.description} href={`/${lang}/cv`} />
          <Card
            title={about.projects.heading}
            description={about.projects.description}
            href={`/${lang}/projects`}
          />
        </Cards>
      </article>

      <hr className="w-full border-0 border-t border-fd-border" />

      <article className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold">{learning.heading}</h2>
          <p className="mt-1 text-sm text-fd-muted-foreground">{learning.note}</p>
        </div>
        <Cards>
          <Card
            title={learning.bsc.heading}
            description={learning.bsc.description}
            href="https://github.com/Valentinusz/elte-ik-bsc"
            external
          />
          <Card
            title={learning.bscGuides.heading}
            description={learning.bscGuides.description}
            href="https://valentinusz.github.io/website-old/"
            external
          />
          <Card
            title={learning.guides.heading}
            description={learning.guides.description}
            href={`/${lang}/docs`}
          />
        </Cards>
      </article>
    </div>
  );
}
