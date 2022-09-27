import React from 'react'
import {
  useActions,
  useAuth,
  useNotifier,
  useTypedSelector,
} from '../../../../hooks'
import { LinearProgress } from '../../'

type Props = {
  children: React.ReactNode
}

const LayoutForAllPages: React.FC<Props> = ({ children }) => {
  useAuth()
  useNotifier()
  const { linearProgress } = useTypedSelector(state => state.layout)
  const { changeLinearProgress } = useActions()

  React.useEffect(() => {
    changeLinearProgress(false)
  }, [])

  return (
    <>
      {linearProgress && <LinearProgress />}
      {children}
    </>
  )
}

export default React.memo(LayoutForAllPages)
