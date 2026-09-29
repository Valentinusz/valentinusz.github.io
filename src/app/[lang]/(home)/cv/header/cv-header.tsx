import { CvHeaderLinks } from "@/app/[lang]/(home)/cv/header/cv-header-links";
import type { CvModel } from "@/app/[lang]/(home)/cv/cv-model";

interface CvHeaderProps {
  cv: CvModel;
}

export function CvHeader({ cv }: CvHeaderProps) {
  const { firstName, lastName, title } = cv;

  return (
    <header className="grid gap-x-6 gap-y-4 border-b border-fd-border pb-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
      <div className="min-w-0">
        <h1 className="text-3xl font-bold tracking-tight">
          {firstName} {lastName}
        </h1>
        <h2 className="mt-1 text-lg text-fd-muted-foreground">{title}</h2>
      </div>
      <div className="min-w-0 md:justify-self-end">
        <CvHeaderLinks contacts={cv.contacts} />
      </div>
    </header>
  );
}
