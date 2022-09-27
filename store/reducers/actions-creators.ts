import { createPostActions } from './createPostSlice'
import { googleMapActions } from './googleMapSlice'
import { layoutActions } from './layoutSlice'
//import { mapBoxActions } from './mapBoxSlice'
import { regionActions } from './regionSlice'
import { uploadFileActions } from './uloadFileSlice'
import { userActions } from './userSlice'

export const allActions = {
  ...createPostActions,
  ...googleMapActions,
  ...layoutActions,
  ...regionActions,
  ...uploadFileActions,
  ...userActions,
}
