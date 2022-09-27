import React from 'react'
import { useActions, useTypedSelector } from '../../../hooks'
import { RegionAutocomplete } from '../Components'

interface IRegionOption {
  label: string
  center: { lat: number; lng: number }
}

interface IProps {
  isMap: boolean
  width?: string
}

export const Regions: React.FC<IProps> = ({ isMap, width }) => {
  const { setRegion, setViewport, setViewportSeeMap } = useActions()
  const { option } = useTypedSelector(state => state.region)

  const setOption = React.useCallback((option: IRegionOption | null) => {
    setRegion(option)
    if (isMap) {
      option
        ? setViewport({
            latitude: option.center.lat,
            longitude: option.center.lng,
            zoom: 7,
          })
        : setViewportSeeMap()
    }
  }, [])

  return (
    <RegionAutocomplete option={option} width={width} setOption={setOption} />
  )
}
