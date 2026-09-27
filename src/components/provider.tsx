"use client";
import SearchDialog from "@/components/search";
import { I18nProvider, type I18nProviderProps } from "fumadocs-ui/contexts/i18n";
import { SearchProvider } from "fumadocs-ui/contexts/search";
import { RootProvider } from "fumadocs-ui/provider/next";
import { useEffect, type ReactNode } from "react";

export function Provider({ children }: { children: ReactNode }) {
  return <RootProvider search={{ enabled: false }}>{children}</RootProvider>;
}

export function LocaleProvider({ children, ...i18n }: I18nProviderProps) {
  useEffect(() => {
    document.documentElement.lang = i18n.locale ?? i18n.defaultLanguage ?? "en";
  }, [i18n.locale, i18n.defaultLanguage]);

  return (
    <I18nProvider {...i18n}>
      <SearchProvider SearchDialog={SearchDialog}>{children}</SearchProvider>
    </I18nProvider>
  );
}
