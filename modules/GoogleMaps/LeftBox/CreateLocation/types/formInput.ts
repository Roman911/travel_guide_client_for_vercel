export interface IFormInput {
  title: string
  small_text: string
  isType: {
    label: string
    id: string
  }
  address: string
  region: string
  latitude: number
  longitude: number
  token: string
  uploadFile: null
  isTicket: boolean
  tickets: {
    adult: string
    baby: string
    student: string
    pensioner: string
    group: string
  }
}
