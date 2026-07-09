import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
const locales = ["en", "pt"];

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = locales.includes(requested as any) ? requested : undefined;

  // Validate that the incoming `locale` parameter is valid
  if (!locale) notFound();

  return {
    locale,
    messages: (await import(`/messages/${locale}.json`)).default,
    // defaultTranslationValues: {
    //   b: (chunks) => <b>{chunks}</b>,
    //   nowrap: (chunks) => <span className="whitespace-nowrap>{chunks}</span>"
    // }
  };
});
