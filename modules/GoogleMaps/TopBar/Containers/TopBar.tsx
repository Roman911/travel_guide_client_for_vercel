import React from 'react'
import { useTypedSelector } from '../../../../hooks'
import { SearchBox } from '../'
import { TopBarComponent } from '../Components'

interface IProps {
  widthLeftBox: string
}

const TopBar: React.FC<IProps> = ({ widthLeftBox }) => {
  const { theme } = useTypedSelector(state => state.layout)

  return (
    <TopBarComponent theme={theme} widthLeftBox={widthLeftBox}>
      <SearchBox width="33.3333%" />
    </TopBarComponent>
  )
}

export default TopBar
