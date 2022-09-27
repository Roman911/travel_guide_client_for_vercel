import React from 'react'
import { LayoutForAllPages } from '../'
import { MainLayoutComponent } from '../Components'

interface IProps {
  children: React.ReactNode
  img?: string
}

const MainLayout: React.FC<IProps> = ({ children, img }) => {
  return (
    <MainLayoutComponent img={img}>
      <LayoutForAllPages>{children}</LayoutForAllPages>
    </MainLayoutComponent>
  )
}

export default MainLayout
