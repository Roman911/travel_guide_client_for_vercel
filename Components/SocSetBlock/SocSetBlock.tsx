import React from "react"
import { IconButton, Stack } from '@mui/material'
import { Instagram, Facebook, Telegram, Twitter, YouTube } from '@mui/icons-material'
import { useColors } from '../../hooks/useColors'

type Props = {
  jc?: string
  color: 'fullcolor' | 'gray'
  socials: {
    facebook: null | string
    instagram: null | string
    twitter: null | string
    youtube: null | string
    telegram: null | string
  }
}

export const SocSetBlock: React.FC<Props> = ({ jc, color }) => {
  const { icon } = useColors()

  const socials = {
    facebook: 'https://www.facebook.com/romalysyk',
    instagram: 'instagram',
    twitter: 'twitter',
    youtube: 'youtube',
    telegram: 'telegram'
  }

  return <Stack flexDirection='row' alignItems='center' spacing={1} justifyContent={jc ? jc : 'flex-start'}>
    {
      socials.facebook && <IconButton href={socials.facebook} target='_blank' sx={{ marginTop: '8px' }}>
        <Facebook sx={{ color: color === 'fullcolor' ? "#3b5998" : icon }} />
      </IconButton>
    }
    {
      socials.twitter && <IconButton>
        <Twitter sx={{ color: color === 'fullcolor' ? "#5ea9dd" : icon }} />
      </IconButton>
    }
    {
      socials.instagram && <IconButton>
        <Instagram sx={{ color: color === 'fullcolor' ? "#fb3958" : icon }} />
      </IconButton>
    }
    {
      socials.telegram && <IconButton>
        <Telegram sx={{ color: color === 'fullcolor' ? "#0088CC" : icon }} />
      </IconButton>
    }
    {
      socials.youtube && <IconButton>
        <YouTube sx={{ color: color === 'fullcolor' ? "#FF0000" : icon }} />
      </IconButton>
    }
  </Stack>
}