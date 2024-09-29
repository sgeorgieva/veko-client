'use client'

import { Suspense } from 'react'
import Link from 'next/link'
import Loader from '../../Loader'
import HomeComponent from '../../HomeComponent/page'
import MonbatImage from '../../../../../public/images/Monbat-logo.png'
import BoschImage from '../../../../../public/images/bosch-logo-simple.png'
import GigaWattImage from '../../../../../public/images/GIGAWATT-Logo.png'

import './accumulatorsComponent.scss'

export default function AccumulatorsComponent({
  title,
  official_dealer
}: {
  title: string
  official_dealer: string
}) {
  return (
    <Suspense fallback={<Loader />}>
      <HomeComponent
        isHomePage={false}
        component={
          <div className='accumulators-wrapper'>
            <div className='title-contact'>
              <h1 className='pageHeader mb-4'>{title}</h1>
            </div>
            <hr />
            <h5>{official_dealer}</h5>
            <div className='row d-flex align-items-baseline flex-nowrap py-4 text-center'>
              <Link
                href='https://www.monbat.com/monbat/'
                className='w-25'
                target='_blank'
              >
                <img src={MonbatImage.src} alt='monbat-image' />
              </Link>
              <Link
                href='https://euro-oil.eu/Lukoil-produktov-katalog/'
                className='w-25'
                target='_blank'
              >
                <img src={BoschImage.src} alt='bosch-image' />
              </Link>
              <Link
                href='https://www.valvolineglobal.com/en-eur/'
                className='w-25'
                target='_blank'
              >
                <img src={GigaWattImage.src} alt='gigawatt-image' />
              </Link>
            </div>
          </div>
        }
      />
    </Suspense>
  )
}
