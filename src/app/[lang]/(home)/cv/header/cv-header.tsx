import { CvHeaderLinks } from "@/app/[lang]/(home)/cv/header/cv-header-links";
import { useCvContext } from "@/app/[lang]/(home)/cv/use-cv-context";

export function CvHeader() {
  const { firstName, lastName, title } = useCvContext();

  return (
    <header>
      <div>
        <h1>
          {firstName} {lastName}
        </h1>
        <h2>{title}</h2>
      </div>
      <div>
        <CvHeaderLinks />
      </div>
    </header>
  );
}
