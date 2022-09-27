import React from 'react'
import { useLazyQuery } from '@apollo/client'
import { useTypedSelector } from '../../../../../../hooks'
import { MainComponents } from '../Components'
import { USER_AVATARS } from '../../../../../../apollo/queries/user'

interface IProps {
  setFile: (arg: File | string) => void
  setNewAvatar: (arg: boolean) => void
}

const Main: React.FC<IProps> = ({ setFile, setNewAvatar }) => {
  const { userData } = useTypedSelector(state => state.user)
  const [userAvatars, { data }] = useLazyQuery(USER_AVATARS)
  const [avatars, setAvatars] = React.useState<string[] | undefined>(undefined)
  const [allAvatars, setAllAvatars] = React.useState(false)
  const avatarsLength = data?.user.avatars.length

  React.useEffect(() => {
    if (data) {
      if (data.user.avatars) {
        if (avatarsLength > 5) {
          setAvatars([...data.user.avatars].reverse().slice(0, 5))
        } else {
          setAvatars([...data.user.avatars].reverse())
        }
      }
    }
  }, [data])

  React.useEffect(() => {
    if (allAvatars) {
      setAvatars([...data.user.avatars].reverse())
    }
  }, [allAvatars])

  React.useEffect(() => {
    userAvatars({
      variables: { userID: userData._id },
    })
  }, [])

  return (
    <MainComponents
      allAvatars={allAvatars}
      avatars={avatars}
      avatarsLength={avatarsLength}
      setAllAvatars={setAllAvatars}
      setFile={setFile}
      setNewAvatar={setNewAvatar}
    />
  )
}

export default Main
