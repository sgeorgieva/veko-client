export const i18n = {
  defaultLocale: 'bg',
  locales: ['bg', 'en'],
  localeDetection: false
} as const

export type Locale = (typeof i18n)['locales'][number]
