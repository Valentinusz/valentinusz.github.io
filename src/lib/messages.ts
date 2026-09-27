import en from "@/messages/en.json";
import hu from "@/messages/hu.json";

const messages = { en, hu };

type Locale = keyof typeof messages;

function isLocale(locale: string): locale is Locale {
  return Object.hasOwn(messages, locale);
}

export function getMessages(locale: string) {
  if (!isLocale(locale)) {
    throw new Error(`Unsupported locale: ${locale}`);
  }

  return messages[locale];
}
