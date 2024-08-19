'use client'

import { Suspense, useEffect, useRef, useState } from 'react'
import { Image } from 'gestalt'
import axios from 'axios'
import { endpoints, linkUrl } from '../../../../../utils/functions'
import Loader from '../../Loader'
import HomeComponent from '../../HomeComponent/page'
import UsedCarPerSingleComponent from '../../UsedCarPerSingleComponent'
import CroppedKiaImage from '../../../../../public/images/cropped-kia-motors.png'

import './usedCarComponent.scss'

export default function UsedCarComponent({ title }: { title: string }) {
  const [isMobile, setIsMobile] = useState(false)
  const [cars, setCars] = useState([])
  const initialized = useRef(false)

  useEffect(() => {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      setIsMobile(true)
    }
  }, [])

  useEffect(() => {
    if (!initialized.current && cars && cars.length === 0) {
      initialized.current = true
      fetchCarsData()
    }
  }, [cars])

  const fetchCarsData = async () => {
    try {
      const response = await axios.get(`${linkUrl()}${endpoints.cars}?page=1`, {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('jwt')}`
        }
      })
      if (response.status === 200) {
        console.log(response)
        // console.log("response: " + JSON.stringify(response));

        setCars(response?.data?.records?.data)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Suspense fallback={<Loader />}>
      <HomeComponent
        isHomePage={false}
        component={
          <div
            className={`used-car-wrapper mt-3 ${
              isMobile ? 'used-car-wrapper-mobile' : ''
            }`}
          >
            <div className='title-contact'>
              <h1 className='pageHeader mb-4'>{title}</h1>
              <Image
                alt='kia-cropped-image'
                src={CroppedKiaImage.src}
                className='test'
              />
            </div>
            <hr />
            <div className='description-contact pageContent'>
              <div className='d-flex row align-items-center mx-auto w-80'>
                {cars &&
                  cars.map(car => (
                    <div className='col-md-4'>
                      <UsedCarPerSingleComponent
                        key={car?.id}
                        model={car?.model}
                        image={car?.image}
                        carId={car?.id}
                        isEdit={false}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        }
      />
    </Suspense>
  )
}
