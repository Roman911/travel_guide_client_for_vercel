import React, { useEffect, useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import { useInView } from 'react-intersection-observer'
import { useActions, useTypedSelector } from '../../../../../hooks'
import { LocationsListComponent } from '../Components'
import type { ILocation } from '../../../types/location'
import { LOCATIONS_AND_TP } from '../../../../../apollo/queries/locations'

const LocationsList: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0 })
  const [page, setPage] = useState(1)
  const [locationsList, setLocationsList] = useState<[] | ILocation[]>([])
  const { bounds } = useTypedSelector(state => state.googleMap)
  const { setLocations } = useActions()
  const [locations, { loading, error, data }] = useLazyQuery(LOCATIONS_AND_TP)

  useEffect(() => {
    locations({
      variables: {
        input: { types: [], region: '', debounced: bounds },
      },
    }).then(data => {
      if (data) {
        setLocations(data?.data?.locationsAndTP)
      }
    })
  }, [bounds])

  useEffect(() => {
    if (!data) {
      setLocationsList([])
      setPage(1)
    } else if (data) {
      setLocationsList(prev => [
        ...prev,
        ...data.locationsAndTP.locations.slice((page - 1) * 12, page * 12),
      ])
    }
  }, [data, page])

  useEffect(() => {
    if (
      inView &&
      locationsList.length < (data ? data.locationsAndTP.locations.length : 0)
    ) {
      setPage(prev => prev + 1)
    }
  }, [inView])

  return (
    <LocationsListComponent
      locations={locationsList}
      total_locations={data?.locationsAndTP.total_locations}
      loading={loading}
      refm={ref}
    />
  )
}

export default LocationsList
