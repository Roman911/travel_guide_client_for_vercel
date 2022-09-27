import type { IPost } from '../../../../types/post'

export interface IPropsComponent {
  post: IPost
  refm: (node?: Element | null | undefined) => void
  useDate: ({
    serverDate,
    format,
  }: {
    serverDate: string
    format?: string
  }) => string
  handleClickToUser: (userId: string) => void
  steps: {
    label: string
  }[]
  colors: {
    darkGray: string
    icon: string
  }
  style: {
    position: string
    top: string
  }
  isTrip: boolean
}
