import React from 'react'
import useAnimatedRouter from '../../../../hooks/useAnimatedRouter'
import Link from 'next/link'

import './animatedLink.scss'
export default function AnimatedLink({
  href,
  locale,
  prefetch,
  passHref,
  hasActiveClass,
  children,
  isHover,
  handleMouseEnter,
  handleMouseLeave,
  title,
  name,
  shallow
}: any) {
  const { animatedRoute } = useAnimatedRouter()

  // console.log('passHref', passHref)
  // console.log('locale', locale)
  // console.log('name', name)
  // console.log('href', href)
  // console.log('test', `${locale}${href}`)

  return (
    <section>
      <Link
        href={passHref && locale !== '' ? `${locale}${href}` : href}
        onClick={() => {
          if (passHref && locale !== undefined) {
            console.log('here')

            animatedRoute(`${locale}${href}`)
          } else if (!passHref && locale === '') {
            console.log('here2')
            animatedRoute(href)
          }
        }}
        shallow={shallow}
        locale={locale}
        passHref={prefetch}
        prefetch={passHref}
        className={`${hasActiveClass ? 'active' : ''} ${
          href === 'car-dealership' ? 'pr-0' : ''
        }
          ${
            isHover &&
            (href === '/car-dealership' ||
              href === '/services' ||
              href === '/trade') &&
            name === title
              ? 'active-hover'
              : ''
          }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </Link>
    </section>
  )
}
