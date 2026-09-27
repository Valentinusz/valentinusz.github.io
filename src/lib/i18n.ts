import { defineI18n } from "fumadocs-core/i18n";

const hungarian = "hu";

export const defaultLanguage = hungarian;

export const i18n = defineI18n({
  defaultLanguage,
  languages: ["en", hungarian],
});
