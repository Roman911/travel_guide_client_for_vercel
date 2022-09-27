export interface IUserData {
  _id: string
  name: string
  email: string
  avatar: string | null
  rating: number
}

export interface IUser {
  userData: IUserData
  refreshToken: string
  accessToken: string
}

export interface IUserProfile extends IUserData {
  aboutMy: null | string
  socials: {
    facebook: null | string
    instagram: null | string
    twitter: null | string
    youtube: null | string
    telegram: null | string
  }
}
