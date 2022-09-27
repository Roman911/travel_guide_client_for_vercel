import React from 'react'
import { useActions, useTypedSelector } from './'

const storageName = 'userData'

export const useAuth = () => {
  const { userData } = useTypedSelector(state => state.user)
  const { addUserData } = useActions()
  React.useEffect(() => {
    if (!userData) {
      const data = JSON.parse(localStorage.getItem(storageName) as string)
      if (data) addUserData(data)
    }
  }, [userData])
}
