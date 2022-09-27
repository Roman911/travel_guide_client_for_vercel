import React, { useState } from 'react'
import type { NextPage } from 'next'
import { useLazyQuery, useMutation } from '@apollo/client'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { EditorState, convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box } from '@mui/material'
import { useActions, useTypedSelector } from '../hooks'
import { uploadFileAPI } from '../store/reducers/uloadFileSlice'
import { CreatePost, MainLayout } from '../modules'
import { CREATE_POST } from '../apollo/mutations/post'
import { UPDATE_LINK_TO_POST } from '../apollo/mutations/locations'
import { IFormInput } from '../types/post'

const schema = yup.object().shape({
  title: yup.string().required('Поле не може бути пустим'),
  small_text: yup.string().required('Поле не може бути пустим'),
})

export interface IForm extends IFormInput {
  editor: EditorState
}

const defaultValues = {
  title: '',
  type_material: {
    label: 'Новини',
    id: 'new',
  },
  link: '',
  work_time: '',
  tags: '',
  small_text: '',
  how_to_get_there: '',
  editor: EditorState.createEmpty(),
  uploadFile: null,
}

const CreatePostPage: NextPage = () => {
  const [file, setFile] = useState<string | File>('')
  const [disabled, setDisabled] = useState(false)
  const {
    createPost: { locationID, region },
    user: { refreshToken },
  } = useTypedSelector(state => state)
  const [createPost] = useMutation(CREATE_POST)
  const { addedNotification, changeLinearProgress, setPreviewImage } =
    useActions()
  const [createFile] = uploadFileAPI.useCreateFileMutation()
  const [updateLinkToPost] = useMutation(UPDATE_LINK_TO_POST)

  const methods = useForm<IFormInput>({
    mode: 'onTouched',
    defaultValues,
    resolver: yupResolver(schema),
  })
  const { handleSubmit, setError, reset } = methods

  const onSubmit: SubmitHandler<IForm> = async values => {
    const {
      title,
      small_text,
      tags,
      type_material,
      link,
      work_time,
      how_to_get_there,
      editor,
    } = values
    setDisabled(true)
    changeLinearProgress(true)

    if (file) {
      await createFile({ url: '/create-post', file })
        .then(data => {
          //@ts-ignore
          const cover = data.data.image
          const input = {
            token: refreshToken,
            title,
            small_text,
            region,
            cover,
            tags: tags.split(', '),
            type_material: type_material?.id,
            location: locationID,
            link,
            work_time,
            how_to_get_there,
            editor: draftToHtml(convertToRaw(editor.getCurrentContent())),
          }
          createPost({ variables: { input } })
            .then(data => {
              addedNotification({
                message: 'Статя ушпішно добавлена',
                key: `${new Date().getTime()}+${Math.random()}`,
              })
              console.log(data.data.createPost._id)
              setPreviewImage('')
              setFile('')
              reset()
              updateLinkToPost({
                variables: {
                  input: {
                    locationID,
                    linkToPost: data.data.createPost._id,
                  },
                },
              })
            })
            .finally(() => {
              changeLinearProgress(false)
              setDisabled(false)
            })
        })
        .catch(error =>
          setError('uploadFile', {
            type: 'custom',
            message: 'Добавте обкладинку',
          })
        )
    }
  }

  return (
    <MainLayout>
      <FormProvider {...methods}>
        <Box component="form" margin="auto" onSubmit={handleSubmit(onSubmit)}>
          <CreatePost setFile={setFile} disabled={disabled} />
        </Box>
      </FormProvider>
    </MainLayout>
  )
}

export default CreatePostPage
