import React from 'react'
import { TripInfoComponent } from '../Components'

interface IProps {
  isCard: boolean
  trip_value: {
    distance: number
    travel_time: number
    waypoints: number
  }
}

const TripInfo: React.FC<IProps> = ({
  isCard,
  trip_value: { distance, travel_time, waypoints },
}) => {
  const dst = (distance / 1000).toFixed(2)

  const ood = (time: number, arg: number) => {
    return time % arg
  }

  travel_time = travel_time - ood(travel_time, 60)

  let hv = (ood(travel_time, 3600) / 60).toString()
  const hr = (travel_time - ood(travel_time, 3600)) / 3600

  let time = ''

  if (hr > 0) time = hr + 'г'

  const d = (t: string) => {
    if (t.length < 2) {
      hv = '0' + t
      d(hv)
    }
  }
  d(hv)

  time = time + ' ' + hv + 'хв'

  return (
    <TripInfoComponent
      dst={dst}
      isCard={isCard}
      time={time}
      waypoints={waypoints}
    />
  )
}

export default TripInfo
