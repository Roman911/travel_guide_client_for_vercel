import React from 'react'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box } from '@mui/material'
import { useTypedSelector } from '../../../../hooks'
import { CreateCommentComponent } from '../Components'
import {
  ADDED_ANSWER,
  CREATE_COMMENT,
} from '../../../../apollo/mutations/comments'

const schema = yup.object().shape({
  comment: yup.string().required('Поле не може бути пустим'),
})

interface IFormInput {
  comment: string
}

const defaultValues = {
  comment: '',
}

type Props = {
  isAnswer: boolean
  postId?: string
  commentId?: string
  handleCloseOpenAnswer?: () => void
  refetch: () => void
}

const CreateComment: React.FC<Props> = ({
  isAnswer,
  postId,
  commentId,
  handleCloseOpenAnswer,
  refetch,
}) => {
  const { userData, refreshToken } = useTypedSelector(state => state.user)
  const [createComment] = useMutation(CREATE_COMMENT)
  const [addedCommentAnswer] = useMutation(ADDED_ANSWER)
  const methods = useForm<IFormInput>({
    mode: 'all',
    defaultValues,
    resolver: yupResolver(schema),
  })
  const { handleSubmit } = methods

  const onSubmit: SubmitHandler<IFormInput> = values => {
    console.log(values)
    isAnswer
      ? addedCommentAnswer({
          variables: {
            input: {
              token: refreshToken,
              id: commentId,
              comment: values.comment,
            },
          },
        }).then(data => {
          if (data) {
            methods.reset()
            refetch()
            if (handleCloseOpenAnswer) handleCloseOpenAnswer()
          }
        })
      : createComment({
          variables: {
            input: {
              token: refreshToken,
              postId,
              comment: values.comment,
            },
          },
        }).then(data => {
          if (data) {
            refetch()
            methods.reset()
          }
        })
  }

  return (
    <FormProvider {...methods}>
      <Box component="form" margin="auto" onSubmit={handleSubmit(onSubmit)}>
        <CreateCommentComponent
          userData={userData}
          isAnswer={isAnswer}
          handleCloseOpenAnswer={handleCloseOpenAnswer}
        />
      </Box>
    </FormProvider>
  )
}

export default CreateComment
