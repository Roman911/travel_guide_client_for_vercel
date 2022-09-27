import React from 'react'
import { Box, Slider, Stack } from '@mui/material'
import { ZoomOutMap } from '@mui/icons-material'
import AvatarEditor from 'react-avatar-editor'

interface IProps {
  file: string | File
  scale: number
  handleChange: (event: any, newValue: any) => void
  editor: any
}

const UploadAvatarComponent: React.FC<IProps> = ({
  file,
  scale,
  handleChange,
  editor,
}) => {
  return (
    <Box textAlign="center">
      <AvatarEditor
        ref={editor}
        image={file}
        width={250}
        height={250}
        border={50}
        borderRadius={250}
        color={[255, 255, 255, 0.6]}
        scale={scale / 100}
        rotate={0}
      />
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <ZoomOutMap />
        <Slider
          aria-label="Volume"
          value={scale}
          onChange={(event, newValue) => handleChange(event, newValue)}
          min={100}
          max={300}
          defaultValue={100}
        />
      </Stack>
    </Box>
  )
}

export default UploadAvatarComponent
