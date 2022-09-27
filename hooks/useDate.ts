import moment from 'moment'

export const useDate = ({ serverDate, format }: { serverDate: string, format?: string }) => {
  return moment.utc(serverDate).format(format ? format : 'LL')
}