import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';
import {i18n} from "@/lib/i18n";
import { uiTranslations } from 'fumadocs-ui/i18n';

export const translations = i18n
    .translations()
    .extend(uiTranslations())
    .add({
      en: {
        displayName: 'English',
      },
      hu: {
        displayName: 'Hungarian',
      },
    });

export function baseOptions(locale: string): BaseLayoutProps {
  return {
    nav: {
      // JSX supported
      title: appName,
    },
    links: [
      {
        text: locale === "hu" ? "Dokumentáció" : "Docs",
        url: `/${locale}/docs`,
      },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
