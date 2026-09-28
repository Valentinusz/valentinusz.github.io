import { getMessages } from "@/lib/messages";
import {
  CalendarBlank,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  MapPin,
  Phone,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import type { ReactNode } from "react";
import { PrintCVButton } from "@/components/print-cv-button";

const skillsClassName =
  "inline-flex rounded-md border border-fd-border bg-fd-card px-2 py-1 text-xs text-fd-card-foreground";

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-3 border-b-2 border-fd-primary pb-2 text-xl font-semibold">{children}</h2>
  );
}

export default async function CVPage(props: PageProps<"/[lang]/cv">) {
  const { lang } = await props.params;
  const { home, cv } = getMessages(lang);

  return (
    <div
      id="cv-print-root"
      className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-8 md:px-6 lg:grid-cols-[15rem_minmax(0,1fr)]"
    >
      <div className="cv-print-hide flex justify-end lg:col-span-2">
        <PrintCVButton label={cv.exportPdf} />
      </div>

      <header className="cv-print-header grid grid-cols-[auto_minmax(0,1fr)] gap-x-6 gap-y-4 border-b border-fd-border pb-6 lg:col-span-2">
        <div className="flex size-24 items-center justify-center rounded-full border border-fd-border bg-fd-muted text-3xl font-semibold text-fd-muted-foreground">
          BB
        </div>
        <div className="min-w-0">
          <h1 className="text-3xl font-bold tracking-tight">{home.name}</h1>
          <p className="mt-1 text-lg text-fd-muted-foreground">{home.title}</p>
        </div>
        <nav
          aria-label="Contact and social profiles"
          className="col-span-full flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-fd-muted-foreground"
        >
          <a
            className="inline-flex items-center gap-2 whitespace-nowrap hover:text-fd-foreground"
            href="mailto:bb20020402@gmail.com"
          >
            <EnvelopeSimple aria-hidden="true" className="size-4" />
            bb20020402@gmail.com
          </a>
          <a
            className="inline-flex items-center gap-2 whitespace-nowrap hover:text-fd-foreground"
            href="tel:+36306244206"
          >
            <Phone aria-hidden="true" className="size-4" />
            +36 30 624 4206
          </a>
          <Link
            className="inline-flex items-center gap-2 whitespace-nowrap hover:text-fd-foreground"
            href="https://github.com/Valentinusz"
            target="_blank"
            rel="noreferrer"
          >
            <GithubLogo aria-hidden="true" className="size-4" />
            Valentinusz
          </Link>
          <Link
            className="inline-flex items-center gap-2 whitespace-nowrap hover:text-fd-foreground"
            href="https://www.linkedin.com/in/b%C3%A1lint-boda"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinLogo aria-hidden="true" className="size-4" />
            LinkedIn
          </Link>
        </nav>
      </header>

      <aside className="space-y-6">
        <section>
          <SectionHeading>{cv.knowledge}</SectionHeading>
          <div className="flex flex-wrap gap-2">
            {cv.knowledgeSkills.map((skill) => (
              <span className={skillsClassName} key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </section>
        <section>
          <SectionHeading>{cv.learning}</SectionHeading>
          <div className="flex flex-wrap gap-2">
            {cv.learningSkills.map((skill) => (
              <span className={skillsClassName} key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </section>
        <section>
          <SectionHeading>{cv.languages}</SectionHeading>
          <dl className="space-y-2 text-sm">
            <div className="flex justify-between gap-3">
              <dt>{cv.english}</dt>
              <dd className="font-medium text-fd-primary">{cv.englishLevel}</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt>{cv.hungarian}</dt>
              <dd className="font-medium text-fd-primary">{cv.native}</dd>
            </div>
          </dl>
        </section>
      </aside>

      <main className="min-w-0 space-y-8">
        <section>
          <SectionHeading>{cv.about}</SectionHeading>
          <p className="leading-relaxed text-fd-muted-foreground">{cv.aboutText}</p>
        </section>

        <section>
          <SectionHeading>{cv.experience}</SectionHeading>
          <div>
            <h3 className="text-lg font-semibold">{`${cv.developerRole} | thyssenkrupp`}</h3>
            <div className="mt-1 flex flex-wrap gap-x-5 gap-y-1 text-sm text-fd-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <CalendarBlank aria-hidden="true" className="size-4" />
                {cv.period}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin aria-hidden="true" className="size-4" />
                {cv.location}
              </span>
            </div>
            <div className="mt-4 space-y-5">
              {cv.projects.map((project) => (
                <div className="cv-print-item" key={project.name}>
                  <h3 className="font-medium text-fd-foreground">{project.name}</h3>
                  <ul className="mt-1 list-disc space-y-1 ps-5">
                    {project.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <SectionHeading>{cv.education}</SectionHeading>
          <div>
            <h3 className="text-lg font-semibold">
              {`${cv.educationEntry.degree} | ${cv.educationEntry.institution}`}
            </h3>
            <div className="mt-1 flex flex-wrap gap-x-5 gap-y-1 text-sm text-fd-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <CalendarBlank aria-hidden="true" className="size-4" />
                {cv.educationEntry.period}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin aria-hidden="true" className="size-4" />
                {cv.location}
              </span>
            </div>
            <p className="mt-2">{cv.educationEntry.grade}</p>
          </div>
        </section>

        <section>
          <SectionHeading>{cv.other}</SectionHeading>
          <div>
            <h3 className="text-lg font-semibold">
              {`${cv.otherEntry.role} | ${cv.otherEntry.institution}`}
            </h3>
            <div className="mt-1 flex flex-wrap gap-x-5 gap-y-1 text-sm text-fd-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <CalendarBlank aria-hidden="true" className="size-4" />
                {cv.otherEntry.period}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin aria-hidden="true" className="size-4" />
                {cv.location}
              </span>
            </div>
            <div className="mt-3 space-y-3">
              <div>
                <h3 className="font-medium text-fd-foreground">{cv.otherEntry.teaching}</h3>
                <ul className="mt-1 list-disc space-y-1 ps-5">
                  {cv.otherEntry.subjects.map((subject) => (
                    <li key={subject}>{subject}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-fd-foreground">{cv.otherEntry.background}</h3>
                <ul className="mt-1 list-disc space-y-1 ps-5">
                  {cv.otherEntry.backgroundSubjects.map((subject) => (
                    <li key={subject}>{subject}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
