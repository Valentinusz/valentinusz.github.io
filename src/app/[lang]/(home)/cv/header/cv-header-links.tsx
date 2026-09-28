import { useCvContext } from "@/app/[lang]/(home)/cv/use-cv-context";

export function CvHeaderLinks() {
  const { contacts } = useCvContext();

  return (
    <nav>
      <ol>
        {contacts.map((contact) => (
          <li key={contact.name}>
            <a>{contact.name}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
