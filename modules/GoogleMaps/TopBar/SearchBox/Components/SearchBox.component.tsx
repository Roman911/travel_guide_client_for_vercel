import React from 'react'
import { Autocomplete, InputAdornment, TextField } from '@mui/material'
import { Search } from '@mui/icons-material'

type Props = {
  helperText?: string
  value: any
  setValue: any
  status: string
  data: any[]
  handleSelect: (val: string) => void
  width: string
}

const SearchBoxComponent: React.FC<Props> = ({
  helperText,
  value,
  setValue,
  status,
  data,
  handleSelect,
  width,
}) => {
  return (
    <Autocomplete
      sx={{ width: width }}
      disablePortal
      id="combo-box-demo"
      onChange={(event, newValue) => {
        handleSelect(newValue)
      }}
      options={
        status === 'OK' ? data.map(({ description }) => description) : []
      }
      fullWidth
      disableClearable
      freeSolo
      renderInput={params => (
        <TextField
          value={value}
          onChange={e => setValue(e.target.value)}
          {...params}
          label="Пошук"
          helperText={helperText}
          InputProps={{
            ...params.InputProps,
            type: 'search',
            endAdornment: (
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  )
}

export default SearchBoxComponent
