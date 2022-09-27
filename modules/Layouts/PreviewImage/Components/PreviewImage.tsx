import React from 'react'
import Image from 'next/image'
import { Box } from '@mui/material'

type Props = {
  children?: React.ReactNode
  img: string
}

const PreviewImage: React.FC<Props> = ({ children, img }) => {
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100vh' }}>
      <Image
        alt="Mountains"
        priority={true}
        src={img}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      {children}
    </Box>
  )
}

export default PreviewImage
