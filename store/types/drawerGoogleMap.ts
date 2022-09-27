export interface DrawerGMState {
  drawerIsOpen: boolean
  locationID: string
}

export enum DrawerGMActionTypes {
  OPEN_DRAWER = 'DRAWER_GM:OPEN_DRAWER',
  CLOSE_DRAWER = 'DRAWER_GM:CLOSE_DRAWER',
}

interface OpenDrawerAction {
  type: DrawerGMActionTypes.OPEN_DRAWER
  payload: string
}

interface CloseDrawerAction {
  type: DrawerGMActionTypes.CLOSE_DRAWER
}

export type DrawerGMAction = OpenDrawerAction | CloseDrawerAction
