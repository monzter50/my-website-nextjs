export const i18n = {
    defaultLocale: "es-MX",
    locales: [ "en-US", "es-MX" ]
} as const;

export type Locale = (typeof i18n)["locales"][number]
