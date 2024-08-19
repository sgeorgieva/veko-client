'use client'

import Link from 'next/link'
import HomeComponent from '../HomeComponent/page'

import './vekoProductsComponent.scss'

export default function VekoProductsComponent({ title, translations }) {
  return (
    <HomeComponent
      isHomePage={false}
      component={
        <div className='wrapper'>
          <div className='title'>
            <div className='row d-flex align-items-center'>
              <div className='col-md-12'>
                <h1 className='pageHeader'>{title}</h1>
              </div>
              <hr />
              <h6>
                {translations.text}
                <Link
                  href='https://www.veko-products.com/'
                  className='fw-bold veko-link'
                  target='_blank'
                >
                  {' '}
                  {translations.link}
                </Link>
                .
              </h6>
            </div>
          </div>
        </div>
      }
    />
  )
}
