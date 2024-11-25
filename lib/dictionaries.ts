import 'server-only'
import type { Locale } from '@/i18n.config'

const dictionaries = {
  en: () => import('@/content/en.json').then(module => module.default),
  fr: () => import('@/content/fr.json').then(module => module.default)
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()