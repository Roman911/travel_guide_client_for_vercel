import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { AppState } from '../store'

export interface LayoutState {
  circleProgress: boolean
  drawerIsOpen: boolean
  linearProgress: boolean
  notifications: { message: string; key: string }[]
  theme: 'light' | 'dark'
}

const initialState: LayoutState = {
  circleProgress: false,
  drawerIsOpen: false,
  linearProgress: false,
  notifications: [],
  theme: 'light',
}

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    addedNotification: (
      state,
      action: PayloadAction<{ message: string; key: string }>
    ) => {
      state.notifications.push(action.payload)
    },
    changeCircleProgress: (state, action: PayloadAction<boolean>) => {
      state.circleProgress = action.payload
    },
    changeDraver: (state, action: PayloadAction<boolean>) => {
      state.drawerIsOpen = action.payload
    },
    changeLinearProgress: (state, action: PayloadAction<boolean>) => {
      state.linearProgress = action.payload
    },
    changeTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload
    },
    removeNotification: (state, action: PayloadAction<string>) => {
      state.notifications.filter(
        notification => notification.key !== action.payload
      )
    },
  },
})

export const layoutActions = layoutSlice.actions

export const selectLayout = (state: AppState) => state.layout

export default layoutSlice.reducer
