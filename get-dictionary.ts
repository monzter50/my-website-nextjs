import 'server-only'
import type { Locale } from './i18n-config'

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  'en-US': async () => await import('./locales/en-US/common.json').then((module) => module.default),
  'es-MX': async () => await import('./locales/es-MX/common.json').then((module) => module.default)
}

export const getDictionary = async (locale: Locale) =>
  await (dictionaries?.[locale]?.() ?? dictionaries['es-MX']())
