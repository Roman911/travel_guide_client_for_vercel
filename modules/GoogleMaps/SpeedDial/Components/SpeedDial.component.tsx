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
    set: 'createTrip' | 'createLocation' | 'locationsList' | 'location' | 'trip'
  ) => void
}

interface IActionProps {
  icon: React.ReactElement<SvgIconProps>
  name: string
  set: 'createTrip' | 'createLocation' | 'locationsList' | 'location' | 'trip'
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
    set: 'createTrip',
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
