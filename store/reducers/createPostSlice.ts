import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AppState } from '../store'

interface IAddedValuesWithLocation {
  locationID?: string
  title: string
  region: string | null
  small_text: string
}

export interface CreatePostState extends IAddedValuesWithLocation {
  type_material: { label: string; id: string } | null
  link: string | null
  work_time: string | null
  tags: string[]
}

const initialState: CreatePostState = {
  type_material: {
    label: 'Новини',
    id: 'new',
  },
  link: null,
  work_time: null,
  tags: [],
  locationID: '',
  title: '',
  region: null,
  small_text: '',
}

export const createPostSlice = createSlice({
  name: 'createPost',
  initialState,
  reducers: {
    setPostWithLocation: (
      state,
      action: PayloadAction<IAddedValuesWithLocation>
    ) => {
      ;(state.locationID = action.payload.locationID),
        (state.title = action.payload.title),
        (state.small_text = action.payload.small_text),
        (state.region = action.payload.region)
    },
    setTypeMaterial: (
      state,
      action: PayloadAction<{ label: string; id: string } | null>
    ) => {
      state.type_material = action.payload
    },
  },
})

export const createPostActions = createPostSlice.actions

export const selectCreatePost = (state: AppState) => state.layout

export default createPostSlice.reducer
