export interface ILocation {
  _id: string
  title: string
  small_text: string
  latitude: number
  longitude: number
  isType: string
  address: string
  cover: string
}

export interface IViewport {
  center: {
    lat: number
    lng: number
  }
  zoom: number
}

export interface IWaypoint {
  locationId?: string
  latLng: {
    lat: number
    lng: number
  }
  location?: ILocation
}
