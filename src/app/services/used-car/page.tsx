import UsedCarComponent from '../../../app/components/ServicesComponent/UsedCarComponent';
import { Metadata } from 'next';

// import Image from "../../../public/images/portfolio.webp";

export const metadata: Metadata = {
  title: 'VEKO Oil – Ecology',
  description: 'Frontend Engineer with customer focused entrepreneurial experience',
  keywords: 'Santiya Georgieva, portfolio, javascript, developer, react, jquery, html, css, figma, adobexd, contact',
  icons: {
    icon: '/favicon.ico',
  },
  verification: {
    google: 'qqWRx7KDlhQ2BEy9j3cl77uXKVaD7FvkYU4XjkM'
  },
  openGraph: {
    title: 'Santiya Georgieva | Frontend Web Developer',
    url: process.env.NODE_ENV !== 'production' ? process.env.LOCALHOST_SITE_URL : process.env.SITE_URL,
    type: 'website', 
    description: 'Frontend Engineer with customer focused entrepreneurial experience',
    // images: `${process.env.NODE_ENV !== 'production' ? '' : process.env.SITE_URL}${Image.src}`,
    // 'http-equiv': 'Content-Security-Policy',
  },
  alternates: {
    canonical: `${process.env.NODE_ENV !== 'production' ? process.env.LOCALHOST_SITE_URL : process.env.SITE_URL}/contact`,
  },
  other: {
    classification: 'business',
    rating: 'general',
    robots: 'all',
    owner: 'Santiya Georgieva',
    googlebot: 'notranslate'
  }
}

export default function UsedCar() {
  return <UsedCarComponent />
}