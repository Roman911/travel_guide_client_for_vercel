import { DrawerGMAction, DrawerGMActionTypes } from '../types/drawerGoogleMap'

export const openDrawerGM = (locationID: string): DrawerGMAction => {
  return { type: DrawerGMActionTypes.OPEN_DRAWER, payload: locationID }
}

export const closeDrawerGM = (): DrawerGMAction => {
  return { type: DrawerGMActionTypes.CLOSE_DRAWER }
}
