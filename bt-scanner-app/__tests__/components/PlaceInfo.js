import React from 'react'
import PlaceInfo from '../../components/PlaceInfo'
import { render } from '@testing-library/react-native'

const place = {
    id: 1, 
    name: "Haaga-Helia ammattikorkeakoulu",
    location: {
      lat: 60.2011301,
      lon: 24.9348275
    },
    bt_devices: {
      latest: 26,
      15.00: 20,
      14.30: 22
    }
}

describe('PlaceInfo', () => {
  it('renders the number of devices found during the latest scan', () => {
    const { debug, getByTestId } = render(
      <PlaceInfo 
        place={place} 
        setActiveLocation={place} 
      />
    )

    debug()

    expect(getByTestId('latestScan')).toHaveTextContent('latest - 26')
  })

  it('renders the number of devices found during the previous scan', () => {
    const { debug, getByTestId } = render(
      <PlaceInfo
        place={place}
        setActiveLocation={place}
      />
    )

    debug()

    expect(getByTestId('previousScan')).toHaveTextContent('15.00 - 20')
  })

  
})