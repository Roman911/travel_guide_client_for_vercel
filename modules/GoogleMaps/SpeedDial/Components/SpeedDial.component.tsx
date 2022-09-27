import React from 'react'
import {
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  SvgIconProps,
} from '@mui/material'
import { AddLocationAlt, Earbuds, Edit } from '@mui/icons-material'

type Props = {
  handleClick: (
    set: 'createDirection' | 'createLocation' | 'locationsList'
  ) => void
}

interface IActionProps {
  icon: React.ReactElement<SvgIconProps>
  name: string
  set: 'createDirection' | 'createLocation' | 'locationsList'
}

const actions: IActionProps[] = [
  {
    icon: <AddLocationAlt />,
    name: 'Створити локацію',
    set: 'createLocation',
  },
  {
    icon: <Earbuds sx={{ transform: 'rotate(90deg)' }} />,
    name: 'Створити маршрут',
    set: 'createDirection',
  },
]

const SpeedDialComponent: React.FC<Props> = ({ handleClick }) => {
  return (
    <SpeedDial
      ariaLabel="SpeedDial openIcon example"
      sx={{ position: 'absolute', bottom: 16, right: 16 }}
      icon={<SpeedDialIcon openIcon={<Edit />} />}
    >
      {actions.map(action => {
        return (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={() => handleClick(action.set)}
          />
        )
      })}
    </SpeedDial>
  )
}

export default SpeedDialComponent
