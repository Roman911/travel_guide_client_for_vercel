import React from 'react'
import Image from 'next/image'
import { Box, ButtonBase, styled } from '@mui/material'

interface IProps {
  handleClick: () => void
}

const SeeTheWholeMapComponent: React.FC<IProps> = ({ handleClick }) => {
  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'absolute',
    bottom: 10,
    right: 90,
    padding: 8,
    paddingTop: 16,
    borderRadius: '50%',
    transition: '300ms',
    ':hover': {
      background: 'rgba(255, 255, 255, 0.4)',
    },
  }))

  return (
    <ImageButton onClick={handleClick}>
      <Image src="/ukraina_contur.webp" layout="fixed" width={74} height={50} />
    </ImageButton>
  )
}

export default SeeTheWholeMapComponent
