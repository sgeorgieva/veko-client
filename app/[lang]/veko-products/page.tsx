import { Metadata } from 'next'
import { Suspense } from 'react'
import { Locale, i18n } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import Loader from '../components/Loader'
import VekoProductsComponent from '../components/VekoProductsComponent'

// import Image from "../../../public/images/portfolio.webp";

export const metadata: Metadata = {
  title: 'VEKO Oil – Veko® продукти',
  description:
    'Frontend Engineer with customer focused entrepreneurial experience',
  keywords:
    'Santiya Georgieva, portfolio, javascript, developer, react, jquery, html, css, figma, adobexd, contact',
  icons: {
    icon: '/favicon.ico'
  },
  verification: {
    google: 'qqWRx7KDlhQ2BEy9j3cl77uXKVaD7FvkYU4XjkM'
  },
  openGraph: {
    title: 'Santiya Georgieva | Frontend Web Developer',
    url:
      process.env.NODE_ENV !== 'production'
        ? process.env.LOCALHOST_SITE_URL
        : process.env.SITE_URL,
    type: 'website',
    description:
      'Frontend Engineer with customer focused entrepreneurial experience'
    // images: `${process.env.NODE_ENV !== 'production' ? '' : process.env.SITE_URL}${Image.src}`,
    // 'http-equiv': 'Content-Security-Policy',
  },
  alternates: {
    canonical: `${process.env.NODE_ENV !== 'production' ? process.env.LOCALHOST_SITE_URL : process.env.SITE_URL}/products`
  },
  other: {
    classification: 'business',
    rating: 'general',
    robots: 'all',
    owner: 'Santiya Georgieva',
    googlebot: 'notranslate'
  }
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default async function VekoProducts({
  params
}: {
  params: { lang: Locale }
}) {
  const { page, navigation } = await getDictionary(params.lang)

  return (
    <Suspense fallback={<Loader />}>
      <VekoProductsComponent
        title={navigation.veko_products}
        translations={page.veko_products}
      />
    </Suspense>
  )
}
