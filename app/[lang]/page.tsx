import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import HomeComponent from './components/HomeComponent/page'

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  return <HomeComponent isHomePage translations={page} />
}
