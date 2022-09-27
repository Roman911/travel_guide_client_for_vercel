import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AppState } from '../store'
import type { ILocation, IViewport } from '../../types/mapBox'

export interface MapBoxState {
  address: string | null
  dialog: boolean
  highlightedId: string | null
  latLng: {
    latitude: number
    longitude: number
  }
  leftBoxView: 'createTrip' | 'createLocation' | 'locationsList' | string
  selected: ILocation | null
  type: string
  viewport: IViewport
}

const SeeTheWholeMap = {
  latitude: 48.6,
  longitude: 31.48,
  zoom: 5.5,
}

const initialState: MapBoxState = {
  address: null,
  dialog: false,
  highlightedId: null,
  latLng: {
    latitude: 0,
    longitude: 0,
  },
  leftBoxView: 'locationsList',
  selected: null,
  type: 'other',
  viewport: SeeTheWholeMap,
}

export const mapBoxSlice = createSlice({
  name: 'mapBox',
  initialState,
  reducers: {
    setAddress: (state, action: PayloadAction<string | null>) => {
      state.address = action.payload
    },
    setDialog: (state, action: PayloadAction<boolean>) => {
      state.dialog = action.payload
    },
    setHighlightedId: (state, action: PayloadAction<string | null>) => {
      state.highlightedId = action.payload
    },
    setLatLng: (
      state,
      action: PayloadAction<{ latitude: number; longitude: number }>
    ) => {
      state.latLng = action.payload
    },
    setLeftBox: (
      state,
      action: PayloadAction<
        'createTrip' | 'createLocation' | 'locationsList' | string
      >
    ) => {
      state.leftBoxView = action.payload
    },
    setSelected: (state, action: PayloadAction<ILocation | null>) => {
      state.selected = action.payload
    },
    setType: (state, action: PayloadAction<string>) => {
      state.type = action.payload
    },
    setViewport: (state, action: PayloadAction<IViewport>) => {
      state.viewport = action.payload
    },
    setViewportSeeMap: state => {
      state.viewport = SeeTheWholeMap
    },
  },
})

export const mapBoxActions = mapBoxSlice.actions

export const selectMapBox = (state: AppState) => state.layout

export default mapBoxSlice.reducer
