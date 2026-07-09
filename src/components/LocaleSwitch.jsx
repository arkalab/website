import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import { locales } from "../config";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  const options = locales.map((cur) => ({
    value: cur,
    label: t("locale", { locale: cur }),
  }));

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      label={t("label")}
      options={options}
    />
  );
}
