import { LocaleProvider } from "@/components/provider";
import { translations } from "@/lib/layout.shared";
import { i18nProvider } from "fumadocs-ui/i18n";
import { i18n } from "@/lib/i18n";

export default async function Layout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;

  return (
    <LocaleProvider {...i18nProvider(translations, lang)}>
      {children}
    </LocaleProvider>
  );
}

export function generateStaticParams() {
  return i18n.languages.map((lang) => ({ lang }));
}
