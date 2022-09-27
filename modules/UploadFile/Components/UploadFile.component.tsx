import React from 'react'
import { Button } from '@mui/material'
import { UploadButton } from '../'

interface IProps {
  name: string
  uploadButton: boolean
  setFile: (arg: File | string) => void
  setPreviewImage: (arg: string) => void
}

const UploadFileComponent: React.FC<IProps> = ({
  name,
  uploadButton,
  setFile,
  setPreviewImage,
}) => {
  const Input = () => {
    return (
      <input
        hidden
        accept="image/*"
        multiple
        type="file"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setFile(event?.target?.files?.[0] || '')
          if (event?.target?.files?.[0]) {
            const file = event.target.files[0]
            const reader = new FileReader()
            reader.onloadend = () => {
              setPreviewImage(reader.result as string)
            }
            reader.readAsDataURL(file)
          }
        }}
      />
    )
  }

  if (!uploadButton)
    return (
      <Button
        variant="contained"
        size="small"
        color="secondary"
        component="label"
      >
        {name}
        <Input />
      </Button>
    )

  return (
    <UploadButton name={name}>
      <Input />
    </UploadButton>
  )
}

export default UploadFileComponent
