import React from 'react'
import { CircularProgressComponent } from '../Components'

interface IProps {
  marginTop: number
}

const CircularProgress: React.FC<IProps> = ({ marginTop }) => {
  return <CircularProgressComponent marginTop={marginTop} />
}

export default CircularProgress
