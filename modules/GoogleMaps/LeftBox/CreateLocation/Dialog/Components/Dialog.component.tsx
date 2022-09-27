import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
  Typography,
  styled,
} from '@mui/material'
import { Close } from '@mui/icons-material'
import { SearchBox } from '../../../../'
import { MyController } from '../../../../../../Components'

interface IProps {
  dialog: boolean
  handleClose: () => void
  handleNext: () => void
}

interface DialogTitleProps {
  id: string
  children?: React.ReactNode
  onClose: () => void
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}))

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme => theme.palette.grey[500],
          }}
        >
          <Close />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}

const DialogComponent: React.FC<IProps> = ({
  dialog,
  handleClose,
  handleNext,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={dialog}
    >
      <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        Додати цікаве місце
      </BootstrapDialogTitle>
      <DialogContent dividers>
        <Stack spacing={2} marginBottom={2}>
          <SearchBox
            helperText="Щоб додати локацію, ведіть назву локації або населенний пункт у
            пошук або вкажіть локацію на карті"
            width="100%"
          />
          <MyController
            type="title"
            label="Назва локації"
            multiline={false}
            rows={1}
            size="small"
            helperText="Ведіть назву локації"
          />
          <MyController
            type="address"
            label="Адрес"
            multiline={false}
            rows={1}
            size="small"
            helperText="Ведіть адресу локації"
          />
          <Typography variant="body1">Координати</Typography>
          <Stack direction="row" spacing={1}>
            <Controller
              name="latitude"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  size="small"
                  sx={{ width: '50%' }}
                  label="Широта"
                  variant="outlined"
                />
              )}
            />
            <Controller
              name="longitude"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  size="small"
                  sx={{ width: '50%' }}
                  label="Довгота"
                  variant="outlined"
                />
              )}
            />
          </Stack>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Box paddingTop={1} paddingBottom={1}>
          <Button
            color="secondary"
            onClick={handleNext}
            sx={{ marginRight: 2 }}
          >
            Вибрати на карті
          </Button>
          <Button variant="contained" color="secondary" onClick={handleNext}>
            Продовжити
          </Button>
        </Box>
      </DialogActions>
    </BootstrapDialog>
  )
}

export default DialogComponent
