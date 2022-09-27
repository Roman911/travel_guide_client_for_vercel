import React from 'react'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete'
import { useActions } from '../../../../../hooks'
import { SearchBoxComponent } from '../Components'

interface ISearchProps {
  helperText?: string
  width: string
}

interface IProps extends ISearchProps {
  defaultValue: string
  onSelectAddress: (
    address: string,
    lat: number | null,
    lng: number | null
  ) => void
}

const ReadySearchBox: React.FC<IProps> = ({
  helperText,
  defaultValue,
  onSelectAddress,
  width,
}) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({ debounce: 300, defaultValue })
  const { setAddress, setLatLng } = useActions()

  const handleSelect = async (address: string) => {
    setAddress(address)
    setValue(address, false)
    clearSuggestions()
    try {
      console.log(address)
      const results = await getGeocode({
        address,
      })
      const { lat, lng } = getLatLng(results[0])
      setLatLng({ lat, lng })
      onSelectAddress(address, lat, lng)
    } catch (error) {
      console.error(`😱 Error:`, error)
    }
  }

  return (
    <SearchBoxComponent
      helperText={helperText}
      value={value}
      setValue={setValue}
      status={status}
      data={data}
      handleSelect={handleSelect}
      width={width}
    />
  )
}

const SearchBox: React.FC<ISearchProps> = ({ helperText, width }) => {
  const defaultValue = ''
  const { setViewport } = useActions()

  return (
    <ReadySearchBox
      helperText={helperText}
      onSelectAddress={(
        _address: string,
        lat: null | number,
        lng: null | number
      ) => {
        if (lat && lng) {
          setViewport({
            center: {
              lat,
              lng,
            },
            zoom: 12,
          })
        }
      }}
      defaultValue={defaultValue}
      width={width}
    />
  )
}

export default SearchBox
