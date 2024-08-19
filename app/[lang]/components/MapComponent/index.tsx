'use client'

import {
  GoogleMap,
  InfoWindow,
  Marker,
  StreetViewPanorama
} from '@react-google-maps/api'
import { useState } from 'react'

//Map's styling
const defaultMapContainerStyle = {
  width: '100%',
  height: '295px',
  borderRadius: '5%'
}

const defaultMapZoom = 15

//Map options
const defaultMapOptions = {
  zoomControl: true,
  controlSize: 16,
  gestureHandling: 'auto'
}

const MapComponent = ({
  lat,
  lng,
  markerLat,
  markerLng,
  title,
  city,
  street,
  fax,
  phone,
  hrefLink,
  googlePreview
}: any) => {
  const [mapMarker, setMapMarker] = useState(null)
  const [showingInfoWindow, setShowingInfoWindow] = useState(true)

  const onMarkerClick = (props: any) => {
    setShowingInfoWindow(true)
  }

  const onInfoWindowClose = () => {
    setShowingInfoWindow(false)
  }

  const onLoad = (mapMarker: any) => {
    setMapMarker(mapMarker)
  }

  const defaultMapCenter = {
    lat: parseInt(lat),
    lng: parseInt(lng)
  }

  return (
    <div className='w-full'>
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
      >
        <Marker
          onLoad={onLoad}
          position={{
            lat: parseInt(lat),
            lng: parseInt(lng)
          }}
          clickable
          onClick={onMarkerClick}
        >
          {showingInfoWindow === true && (
            <InfoWindow
              position={{
                lat: parseInt(markerLat),
                lng: parseInt(markerLng)
              }}
              onCloseClick={onInfoWindowClose}
            >
              <>
                <div className='text-start'>
                  <h6 className='mb-0'>{title}</h6>
                  <h6>{city}</h6>
                  <p className='mb-1'>{street}</p>
                  <p className='mb-1'>{fax}</p>
                  <p className='mb-1'>{phone}</p>
                  <a
                    className='text-primary text-decoration-underline text-left'
                    target='_blank'
                    href={hrefLink}
                  >
                    {googlePreview}
                  </a>
                </div>
              </>
            </InfoWindow>
          )}
        </Marker>
      </GoogleMap>
    </div>
  )
}

export { MapComponent }
