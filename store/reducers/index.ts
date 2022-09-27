import { combineReducers } from 'redux'
import createPostReducer from './createPostSlice'
import googleMapReducer from './googleMapSlice'
import layoutReducer from './layoutSlice'
//import mapBoxReducer from './mapBoxSlice'
import regionReducer from './regionSlice'
import uploadFileReducer, { uploadFileAPI } from './uloadFileSlice'
import userReducer from './userSlice'

export const rootReducer = combineReducers({
  createPost: createPostReducer,
  googleMap: googleMapReducer,
  layout: layoutReducer,
  //mapBox: mapBoxReducer,
  region: regionReducer,
  uploadFile: uploadFileReducer,
  user: userReducer,
  [uploadFileAPI.reducerPath]: uploadFileAPI.reducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const UploadFileAPI = uploadFileAPI
