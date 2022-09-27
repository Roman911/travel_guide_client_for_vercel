import React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material'
import { Close } from '@mui/icons-material'
import { Main, UploadAvatar } from '../'

interface IProps {
  file: File | string
  isDisabled: boolean
  isOpen: boolean
  handleCansel: () => void
  handleClose: () => void
  onSubmit: () => void
  editor: any
  setFile: (arg: File | string) => void
  setNewAvatar: (arg: boolean) => void
}

const DialogComponent: React.FC<IProps> = ({
  file,
  isDisabled,
  isOpen,
  handleCansel,
  handleClose,
  onSubmit,
  editor,
  setFile,
  setNewAvatar,
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        handleClose(), handleCansel()
      }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth={true}
      maxWidth="sm"
    >
      <IconButton
        onClick={handleClose}
        color="secondary"
        sx={{
          marginTop: 0,
          position: 'absolute',
          top: 14,
          right: 4,
        }}
      >
        <Close />
      </IconButton>
      <DialogTitle
        textAlign="center"
        sx={{ borderBottom: '1px solid hsla(0,0%,89.8%,.8)' }}
      >
        Оновити основну світлину
      </DialogTitle>
      <DialogContent sx={{ marginTop: 3 }}>
        {file === '' ? (
          <Main setFile={setFile} setNewAvatar={setNewAvatar} />
        ) : (
          <UploadAvatar editor={editor} file={file} />
        )}
      </DialogContent>
      {file !== '' && (
        <DialogActions sx={{ paddingBottom: 3, paddingRight: 3 }}>
          <Button
            variant="text"
            color="secondary"
            onClick={handleCansel}
            disabled={isDisabled}
          >
            Скасувати
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={onSubmit}
            disabled={isDisabled}
          >
            Зберегти
          </Button>
        </DialogActions>
      )}
    </Dialog>
  )
}

export default DialogComponent
