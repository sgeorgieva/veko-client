'use client'

import { Suspense } from 'react'
import Link from 'next/link'
import Loader from '../../Loader'
import HomeComponent from '../../HomeComponent/page'
import VekoOilImage from '../../../../../public/images/VEKO-products_logo.png'
import OsramImage from '../../../../../public/images/Osram.png'
import BaldwinFiltersImage from '../../../../../public/images/baldwin-filters.png'
import FleetguardImage from '../../../../../public/images/fleetguard-300x236.png'

import './autoConsumablesComponent.scss'

export default function AutoConsumablesComponent({
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
          <div className='auto-consumables-wrapper'>
            <div className='title-contact'>
              <h1 className='pageHeader mb-4'>{title}</h1>
            </div>
            <hr />
            <h5>{official_dealer}</h5>
            <div className='row d-flex align-items-baseline flex-nowrap py-4 text-center'>
              <Link
                href='https://veko-shop.com/'
                className='w-25'
                target='_blank'
              >
                <img src={VekoOilImage.src} alt='veko-oil-image' />
              </Link>
              <Link
                href='https://www.osram.com/cb/products/'
                className='w-25'
                target='_blank'
              >
                <img src={OsramImage.src} alt='osram-image' />
              </Link>
              <Link
                href='https://www.valvolineglobal.com/en-eur/'
                className='w-25'
                target='_blank'
              >
                <img
                  src={BaldwinFiltersImage.src}
                  alt='baldwin-filters-image'
                />
              </Link>
              <Link
                href='https://www.fleetguard-filtrum.com/'
                className='w-25'
                target='_blank'
              >
                <img src={FleetguardImage.src} alt='fleetguard-image' />
              </Link>
            </div>
          </div>
        }
      />
    </Suspense>
  )
}
