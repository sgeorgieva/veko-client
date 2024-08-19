'use client'

import { Suspense, useEffect, useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Loader from '../Loader'
import { usePathname, useRouter } from 'next/navigation'
import BrandsImage from '../../../../public/images/brands.png'
import UsedCarImage from '../../../../public/images/autocenters.png'

import './carDealershipComponent.scss'

const BrandsComponent = dynamic(() => import('./BrandsComponent'), {
  suspense: true
})
const CarCentersComponent = dynamic(() => import('./CarCentersComponent'), {
  suspense: true
})
const HomeComponent = dynamic(() => import('../HomeComponent/page'), {
  suspense: true
})

export default function CarDealershipComponent({ translations }) {
  const router = useRouter()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      setIsMobile(true)
    }
  }, [])

  return (
    <Suspense fallback={<Loader />}>
      <HomeComponent
        isHomePage={false}
        component={
          <div className='wrapper'>
            <div className='title'>
              <div
                className={`row d-flex align-items-center ${
                  isMobile ? 'w-90 mx-auto' : ''
                }`}
              >
                <div className='col-md-12'>
                  <h1 className='pageHeader mb-3'>
                    {translations.car_delership}
                  </h1>
                </div>
              </div>
            </div>
            <div className={`description ${isMobile ? 'text-center' : ''}`}>
              <div
                className={`d-flex align-items-center flex-nowrap py-4 ${
                  isMobile ? 'flex-column' : 'row'
                }`}
              >
                <Link
                  href='/car-dealership/brands'
                  onClick={() => router.push('/car-dealership/brands')}
                  children={<BrandsComponent />}
                  className={`${isMobile ? '' : 'w-25'}`}
                >
                  <img src={BrandsImage.src} alt='ecology-image' />
                  <h5 className='fw-bold text-uppercase py-3 text-center'>
                    {translations.brands}
                  </h5>
                </Link>
                <Link
                  href='/car-dealership/car-centers'
                  onClick={() => router.push('/car-dealership/car-centers')}
                  children={<CarCentersComponent />}
                  className={`${isMobile ? '' : 'w-25 ms-5'}`}
                >
                  <img src={UsedCarImage.src} alt='used-car-image' />
                  <h5 className='fw-bold text-uppercase py-3 text-center'>
                    {translations.car_centers}
                  </h5>
                </Link>
              </div>
            </div>
          </div>
        }
      />
    </Suspense>
  )
}
