import React from 'react'
import { useSnackbar } from 'notistack'
import { useActions, useTypedSelector } from '../hooks'

let displayed: string[] = []

export const useNotifier = () => {
  const { enqueueSnackbar } = useSnackbar()
  const { notifications } = useTypedSelector(state => state.layout)
  const { removeNotification } = useActions()

  const storeDisplayed = (id: string) => (displayed = [...displayed, id])
  const removeDisplayed = (id: string) =>
    (displayed = [...displayed.filter(key => id !== key)])

  React.useEffect(() => {
    notifications.forEach(({ key, message }) => {
      if (displayed.includes(key)) return

      enqueueSnackbar(message)
      removeNotification(key)
      removeDisplayed(key)
      storeDisplayed(key)
    })
  }, [notifications, removeNotification])
}
