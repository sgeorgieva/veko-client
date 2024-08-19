'use client'

import { Suspense, useEffect, useState } from 'react'
import Loader from '../../Loader'
import HomeComponent from '../../HomeComponent/page'
import Link from 'next/link'

import './brandsComponent.scss'

export default function BrandsComponent({ translations }) {
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
          <div className='contact-wrapper'>
            <div className='title-contact'>
              <div className='row d-flex align-items-center'>
                <div className='col-md-8'>
                  <h1 className='pageHeader'>{translations.title}</h1>
                </div>
                <div className='col-md-4'>
                  <div className='col-md-3'>
                    <span className='cars-image kia-logo' />
                  </div>
                </div>
              </div>
            </div>
            <div className='description-contact pageContent'>
              <div className='row'>
                <div className='col-md-9'>
                  <h6>
                    {translations.kia_description_part_one}{' '}
                    <Link href='https://kiaruse.com' target='_blank'>
                      <span className='fw-bolder'>
                        &quot;{translations.kia_title}&quot;
                      </span>
                    </Link>{' '}
                    {translations.kia_description_part_two}
                  </h6>
                  <div className='row'></div>
                </div>
                <div className='col-md-3'>
                  <span
                    className={`cars-image ${
                      isMobile ? 'kia-mobile-image' : 'kia-image'
                    }`}
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <span
                    className={`cars-image subaru-logo ${
                      isMobile ? 'subaru-mobile-logo' : ''
                    }`}
                  />
                </div>
                <div className='col-md-12'>
                  <p>{translations.subaru_description}</p>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <span
                    className={`cars-image subaru-image ${
                      isMobile ? 'subaru-mobile-image' : ''
                    }`}
                  />
                </div>
              </div>
              <div className='row text-end'>
                <div className='col-md-12'>
                  <span className='cars-image dongfeng-logo' />
                </div>
                <p>{translations.dongfeng_description}</p>
              </div>
              <div className='row d-flex align-items-center mt-5'>
                <div className='col-md-2'>
                  <span className='cars-image gaz-logo' />
                </div>
                <div className='col-md-8'>
                  {translations.talaria_description}
                </div>
                <div className='col-md-2'>
                  <span className='cars-image talaria-logo' />
                </div>
              </div>
            </div>
          </div>
        }
      />
    </Suspense>
  )
}
