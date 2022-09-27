import React from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { Box } from '@mui/material'
import { useMutation } from '@apollo/client'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useActions, useTypedSelector } from '../../../../../hooks'
import { Dialog } from '../'
import { CreateLocationComponent } from '../Components'
import { CREATE_LOCATION } from '../../../../../apollo/mutations/locations'
import { uploadFileAPI } from '../../../../../store/reducers/uloadFileSlice'
import { tickets } from '../config'
import type { IFormInput } from '../types/formInput'
import { defaultValues } from './defaultValues'

const schema = yup.object().shape({
  title: yup.string().min(5).max(100).required('Поле не може бути пустим'),
  small_text: yup
    .string()
    .min(10)
    .max(600)
    .required('Поле не може бути пустим'),
  address: yup.string().min(10).max(160).required('Поле не може бути пустим'),
  latitude: yup.number().required('Поле не може бути пустим'),
  longitude: yup.number().required('Поле не може бути пустим'),
})

interface IProps {
  handleClick: () => void
}

const CreateLocation: React.FC<IProps> = ({ handleClick }) => {
  const {
    user: { refreshToken },
    googleMap: { address, dialog, latLng },
    uploadFile: { previewImage },
  } = useTypedSelector(state => state)
  const [createFile] = uploadFileAPI.useCreateFileMutation()
  const {
    addedNotification,
    changeLinearProgress,
    setLatLng,
    setPreviewImage,
    setRegion,
    setType,
  } = useActions()
  const [file, setFile] = React.useState<string | File>('')
  const [isDisabled, setDisabled] = React.useState(false)
  const [CreateLocation] = useMutation(CREATE_LOCATION)
  const methods = useForm<IFormInput>({
    mode: 'all',
    defaultValues,
    resolver: yupResolver(schema),
  })

  const { handleSubmit, setValue } = methods

  const onSubmit: SubmitHandler<IFormInput> = async values => {
    const {
      address,
      title,
      small_text,
      isTicket,
      isType,
      latitude,
      longitude,
      region,
    } = values
    setDisabled(true)
    changeLinearProgress(true)

    const arr: string[] = []
    if (!isTicket) {
      tickets.forEach(i => {
        //@ts-ignore
        if (values.tickets[i.id].length !== 0) {
          //@ts-ignore
          arr.push(`${i.label}: ${values.tickets[i.id]}грн`)
        }
      })
    }

    if (file) {
      await createFile({ url: '', file })
        .then(data => {
          //@ts-ignore
          const cover = data.data.image
          const input = {
            token: refreshToken,
            title,
            small_text,
            isTicket,
            isType: isType.id,
            address,
            region,
            cover,
            latitude,
            longitude,
            tickets: arr,
          }
          CreateLocation({
            variables: {
              input,
            },
          })
            .then(data => {
              addedNotification({
                message: 'Локація ушпішно добавлена',
                key: `${new Date().getTime()}+${Math.random()}`,
              })
              methods.reset()
              setLatLng({ lat: 0, lng: 0 })
              setFile('')
              setPreviewImage('')
              setRegion(null)
              setType('other')
              setValue('isType', {
                label: 'Інше',
                id: 'other',
              })
            })
            .finally(() => {
              changeLinearProgress(false)
              setDisabled(false)
            })
        })
        .catch(error =>
          methods.setError('uploadFile', {
            type: 'custom',
            message: 'Добавте обкладинку',
          })
        )
    }
  }

  React.useEffect(() => {
    if (latLng) {
      methods.setValue('latitude', latLng.lat)
      methods.setValue('longitude', latLng.lng)
    }
  }, [latLng])

  React.useEffect(() => {
    if (address) {
      const strToArr = address.split(', ')
      methods.setValue('title', strToArr[0])
      if (strToArr.length > 1) {
        strToArr.forEach(i => {
          if (i.includes('область')) {
            methods.setValue('region', i)
          }
        })
        methods.setValue(
          'address',
          strToArr.slice(1, strToArr.length).join(', ')
        )
      } else {
        methods.setValue('address', address)
      }
    }
  }, [address])

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        margin="auto"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ height: '100%', overflowY: 'auto' }}
      >
        <CreateLocationComponent
          isDisabled={isDisabled}
          handleClick={handleClick}
          previewImage={previewImage}
          setType={setType}
          setFile={setFile}
        />
      </Box>
      <Dialog dialog={dialog} />
    </FormProvider>
  )
}

export default CreateLocation
