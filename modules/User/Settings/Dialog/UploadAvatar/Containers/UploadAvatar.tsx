import React from 'react'
import { UploadAvatarComponent } from '../Components'

interface IProps {
  file: string | File
  editor: any
}

const UploadAvatar: React.FC<IProps> = ({ file, editor }) => {
  const [scale, setScale] = React.useState<number>(100)

  const handleChange = (event: any, newValue: any) => {
    setScale(newValue)
  }

  return (
    <UploadAvatarComponent
      file={file}
      scale={scale}
      handleChange={handleChange}
      editor={editor}
    />
  )
}

export default UploadAvatar
