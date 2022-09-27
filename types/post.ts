import { IUserData } from '.'

export interface IPost {
  _id: string
  title: string
  tags: string[]
  small_text: string
  cover: string
  editor: string
  link: string
  likes: string[]
  views: number
  travelMode?: string[]
  trip_value?: {
    distance: number
    travel_time: number
    waypoints: number
  }
  createdAt: string
  author: IUserData
}

export interface IFormInput {
  title: string
  type_material: { label: string; id: string } | null
  link: string
  work_time: string
  tags: string
  small_text: string
  how_to_get_there: string
  uploadFile: null
}

export enum types {
  TYPE_MATERIAL = 'type_material',
  TITLE = 'title',
  LINK = 'link',
  WORK_TIME = 'work_time',
  TAGS = 'tags',
  SMALL_TEXT = 'small_text',
  HOW_TO_GET_THERE = 'how_to_get_there',
}
