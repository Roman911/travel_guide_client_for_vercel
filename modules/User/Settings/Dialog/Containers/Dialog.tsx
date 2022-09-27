import React from 'react'
import { useMutation } from '@apollo/client'
import { Box } from '@mui/material'
import { useActions, useTypedSelector } from '../../../../../hooks'
import { DialogComponent } from '../Components'
import { uploadFileAPI } from '../../../../../store/reducers/uloadFileSlice'
import { UPDATE_USER_AVATAR } from '../../../../../apollo/mutations/user'

interface IProps {
  isOpen: boolean
  handleClose: () => void
}

const Dialog: React.FC<IProps> = ({ isOpen, handleClose }) => {
  const [createFile, {}] = uploadFileAPI.useCreateFileMutation()
  const { refreshToken } = useTypedSelector(state => state.user)
  const { changeLinearProgress, updateAvatar } = useActions()
  const [updateUserAvatar] = useMutation(UPDATE_USER_AVATAR)
  const [file, setFile] = React.useState<File | string>('')
  const [isDisabled, setDisabled] = React.useState<boolean>(false)
  const [isNewAvatar, setNewAvatar] = React.useState(true)
  const [urlAvatar, setUrlAvatar] = React.useState<string | null>(null)

  const editor = React.useRef(null)

  const onSubmit = async () => {
    if (isNewAvatar) {
      changeLinearProgress(true)
      setDisabled(true)
      //const options = editor.current.getImage().toDataURL()

      await createFile({ url: '/avatar', file } as {
        url: string
        file: string | File
      })
        .then((data: any) => {
          setUrlAvatar(data.data.image)
        })
        .catch(e => console.log(e))
        .finally(() => {
          changeLinearProgress(false)
          setDisabled(false)
        })
    } else {
      if (typeof file === 'string') {
        const url = file.split('/')
        setUrlAvatar(url[url.length - 1])
      }
    }
  }

  React.useEffect(() => {
    if (urlAvatar) {
      updateAvatar(urlAvatar)
      updateUserAvatar({
        variables: {
          input: {
            avatar: urlAvatar,
            token: refreshToken,
          },
        },
      }).then(data => {
        setFile('')
        handleClose()
      })
    }
  }, [urlAvatar])

  const handleCansel = () => {
    setFile('')
  }

  return (
    <Box>
      <DialogComponent
        file={file}
        isDisabled={isDisabled}
        isOpen={isOpen}
        handleCansel={handleCansel}
        handleClose={handleClose}
        onSubmit={onSubmit}
        setFile={setFile}
        setNewAvatar={setNewAvatar}
        editor={editor}
      />
    </Box>
  )
}

export default Dialog
