import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { IUserData } from '../../types/user'
import { AppState } from '../store'

export interface UserState {
  userData: IUserData | null
  refreshToken: string
  accessToken: string
}

const initialState: UserState = {
  userData: null,
  refreshToken: '',
  accessToken: '',
}

const storageName = 'userData'

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUserData: (
      state,
      action: PayloadAction<{
        user: IUserData
        refreshToken: string
        accessToken: string
      }>
    ) => {
      ;(state.userData = action.payload.user),
        (state.refreshToken = action.payload.refreshToken),
        (state.accessToken = action.payload.accessToken)
    },
    removeUserData: state => {
      ;(state.userData = null),
        (state.accessToken = ''),
        (state.refreshToken = '')
    },
    updateAvatar: (state, action: PayloadAction<string>) => {
      const lS = JSON.parse(localStorage.getItem(storageName) as string)
      lS.user.avatar = action.payload
      localStorage.setItem(storageName, JSON.stringify(lS))
      if (state.userData) {
        //@ts-ignore
        state.userData.avatar = action.payload
      }
    },
  },
})

export const userActions = userSlice.actions

export const selectUser = (state: AppState) => state.user

export default userSlice.reducer
