import type { NextPage } from 'next'
import React from 'react'
import { useRouter } from 'next/router'
import { useActions } from '../hooks'
import { MainLayout, MapWrapperComponent } from '../modules'

const Maps: NextPage = () => {
  const router = useRouter()
  const { setLeftBox, setBounds, setViewportSeeMap, setWaypoints } =
    useActions()
  console.log('render: pages, Maps', router.query)

  React.useEffect(() => {
    if (router.query.locationID) {
      setLeftBox('location')
    } else if (router.query?.tripID) {
      setLeftBox('trip')
    } else {
      setWaypoints(null)
      setBounds([])
      setViewportSeeMap()
    }
  }, [router])

  return (
    <MainLayout>
      <MapWrapperComponent />
    </MainLayout>
  )
}

export default Maps
