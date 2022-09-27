import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AppState } from '../store'
import type { IViewport } from '../../types/mapBox'

export interface RegionState {
  option: {
    label: string
    center: { lat: number; lng: number }
  } | null
}

const initialState: RegionState = {
  option: null,
}

export const regionSlice = createSlice({
  name: 'region',
  initialState,
  reducers: {
    setRegion: (
      state,
      action: PayloadAction<{
        label: string
        center: { lat: number; lng: number }
      } | null>
    ) => {
      state.option = action.payload
    },
    setRegionAndVievport: (
      state,
      action: PayloadAction<{
        region: {
          label: string
          center: { lat: number; lng: number }
        } | null
        vievport: IViewport
      }>
    ) => {
      state.option = action.payload.region
      //dispatch(mapBoxActions.setViewport(action.payload.vievport))
    },
  },
})

export const regionActions = regionSlice.actions

export const selectRerion = (state: AppState) => state.layout

export default regionSlice.reducer
