import React from 'react'
import { useActions } from '../../../hooks'
import { UploadFileComponent } from '../Components'

interface IProps {
  name: string
  uploadButton: boolean
  setFile: (arg: File | string) => void
  setNewAvatar?: (arg: boolean) => void
}

const UploadFile: React.FC<IProps> = ({
  name,
  uploadButton,
  setFile,
  setNewAvatar,
}) => {
  const { setPreviewImage } = useActions()

  React.useEffect(() => {
    if (setNewAvatar) {
      setNewAvatar(true)
    }
  }, [])

  return (
    <UploadFileComponent
      name={name}
      uploadButton={uploadButton}
      setFile={setFile}
      setPreviewImage={setPreviewImage}
    />
  )
}

export default UploadFile
