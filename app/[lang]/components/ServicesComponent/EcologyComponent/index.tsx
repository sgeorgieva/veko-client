'use client'

import { useEffect, useState } from 'react'
import { Icon } from 'gestalt'
import HomeComponent from '../../HomeComponent/page'

import './ecologyComponent.scss'

export default function EcologyComponent({
  title,
  translations
}: {
  title: string
  translations: object
}) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      setIsMobile(true)
    }
  }, [])

  return (
    <HomeComponent
      isHomePage={false}
      component={
        <div className='contact-wrapper'>
          <div className='title-contact'>
            <h1 className={`pageHeader ${isMobile ? '' : 'mb-4'}`}>{title}</h1>
          </div>
          <div className='description-contact pageContent'>
            <div className={`row ${isMobile ? 'flex-column-reverse' : ''}`}>
              <div className='col-md-9'>
                <p>{translations.paragraph}</p>
                <ul>
                  <li>{translations.list_item_one}</li>
                  <li>{translations.list_item_two}</li>
                  <li>{translations.list_item_three}</li>
                  <li>{translations.list_item_four}</li>
                  <li>{translations.list_item_five}</li>
                </ul>
                <p>{translations.paragraph_two}</p>
                <ul>
                  <li>{translations.list_item_seven}</li>
                  <li>{translations.list_item_eight}</li>
                </ul>
                <hr />
                <h5 className='text-uppercase mb-3'>{translations.contacts}</h5>
                <div className='d-flex mb-2'>
                  <Icon icon='phone' color='darkGrey' />
                  <p className='d-flex mb-0 ms-2'>062/ 600 324</p>
                </div>
                <div className='d-flex mb-2'>
                  <Icon icon='phone' color='darkGrey' />
                  <p className='d-flex mb-0 ms-2'>0887 740 189</p>
                </div>
                <div className='d-flex mb-2'>
                  <Icon icon='gmail' color='darkGrey' />
                  <p className='d-flex mb-0 ms-2'>vekovt@abv.bg</p>
                </div>
                <div className='d-flex mt-3'>
                  <Icon icon='file-box' color='darkGrey' />
                  <span className='ms-2'>
                    {translations.copy_permit}&nbsp;
                    <a
                      className='fw-bold pdf-link'
                      href='https://veko-oil.eu/image/data/Dokumenti/Razreshitelno Veko oil 2014.pdf'
                      target='_blank'
                    >
                      {translations.text_here}
                    </a>
                    .
                  </span>
                </div>
              </div>
              <div className='col-md-3'>
                <span
                  className={`ecology-image ${
                    isMobile ? 'mobile-ecology-image' : ''
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      }
    />
  )
}
