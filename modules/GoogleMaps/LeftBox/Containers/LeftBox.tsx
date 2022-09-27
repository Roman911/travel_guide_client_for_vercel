import React from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useActions, useTypedSelector } from '../../../../hooks'
import { LeftBoxLayout } from '../Components'
import type { ILocation } from '../../types/location'

interface ICreateLocationProps {
  handleClick: () => void
}

interface ILocationProps extends ICreateLocationProps {
  widthLeftBox: string
}

interface ILocationsProps {
  data?: {
    total_locations: number
    locations: ILocation[]
  }
  loading?: boolean
}

interface IProps extends ILocationsProps {
  widthLeftBox: string
}

interface ITripProps {
  rout: string | string[]
  widthLeftBox: string
}

const Trip = dynamic<ITripProps>(() => import('../Trip/Containers/Trip') as any)
const LocationsList = dynamic<ILocationsProps>(
  () => import('../LocationsList/Containers/LocationList') as any
)
const Location = dynamic<ILocationProps>(
  () => import('../Location/Containers/Location') as any
)
const CreateLocation = dynamic<ICreateLocationProps>(
  () => import('../CreateLocation/Containers/CreateLocation') as any
)

const LeftBox: React.FC<IProps> = ({ widthLeftBox, data, loading }) => {
  const router = useRouter()
  const { leftBoxView } = useTypedSelector(state => state.googleMap)
  const { setLeftBox, setSelected } = useActions()

  const handleClick = () => {
    setLeftBox('locationsList')
    router.push('')
    setSelected(null)
  }

  const rout = () => {
    switch (leftBoxView) {
      case 'createTrip': {
        return <LocationsList data={data} loading={loading} />
      }
      case 'createLocation': {
        return <CreateLocation handleClick={handleClick} />
      }
      case 'location': {
        return (
          <Location widthLeftBox={widthLeftBox} handleClick={handleClick} />
        )
      }
      case 'trip': {
        return <Trip rout={router.query.tripID} widthLeftBox={widthLeftBox} />
      }
      default: {
        return <LocationsList data={data} loading={loading} />
      }
    }
  }

  return <LeftBoxLayout widthLeftBox={widthLeftBox}>{rout()}</LeftBoxLayout>
}

export default LeftBox
