import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { AppState } from '../store'

export interface UploadFileState {
  previewImage: string
}

const initialState: UploadFileState = {
  previewImage: '',
}

export const uploadFileSlice = createSlice({
  name: 'uploadFile',
  initialState,
  reducers: {
    setPreviewImage: (state, action: PayloadAction<string>) => {
      state.previewImage = action.payload
    },
  },
})

export const uploadFileActions = uploadFileSlice.actions

export const selectUploadFile = (state: AppState) => state.uploadFile

export default uploadFileSlice.reducer

export const uploadFileAPI = createApi({
  reducerPath: 'uploadFileAPI',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_APP_HOST_API }),
  endpoints: build => ({
    createFile: build.mutation<
      { url: string; file: string | File },
      { url: string; file: string | File }
    >({
      query: ({ url, file }) => {
        let formData = new FormData()
        formData.append('image', file)
        return {
          url,
          method: 'POST',
          body: formData,
        }
      },
    }),
  }),
})
