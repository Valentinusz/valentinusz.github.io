import { CvContact } from "@/app/[lang]/(home)/cv/cv-model";

interface CvHeaderLinksProps {
  contacts: CvContact[];
}

export function CvHeaderLinks({ contacts }: CvHeaderLinksProps) {
  return (
    <nav aria-label="Contact and social profiles">
      <ol className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-fd-muted-foreground">
        {contacts.map((contact) => (
          <li key={contact.name}>
            <a className="inline-flex items-center gap-2 whitespace-nowrap hover:text-fd-foreground">
              {contact.name}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
