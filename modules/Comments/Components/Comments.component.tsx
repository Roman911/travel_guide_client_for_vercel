import React from 'react'
import { Box, CircularProgress, Typography } from '@mui/material'
import { CreateComment } from '../'
import { Comment } from './'

type Props = {
  loading: boolean
  postId: string
  refm: (node?: Element | null | undefined) => void
  comments?:
    | {
        _id: string
        comment: string
        createdAt: string
        rating: number
        answers:
          | {
              _id: string
              comment: string
              rating: number
              createdAt: string
              author: {
                name: string
                avatar?: string
              }
            }[]
          | []
        author: {
          name: string
          avatar?: string
        }
      }[]
    | []
  refetch: () => void
}

export const CommentsComponent: React.FC<Props> = ({
  loading,
  postId,
  refm,
  comments,
  refetch,
}) => {
  return (
    <Box ref={refm}>
      <Typography
        variant="h4"
        marginTop={5}
        marginBottom={4}
        sx={{ fontWeight: 100, letterSpacing: '0.25em' }}
      >
        КОМЕНТАРІ
      </Typography>
      <CreateComment isAnswer={false} postId={postId} refetch={refetch} />
      {loading && (
        <Box sx={{ textAlign: 'center', margin: 4 }}>
          <CircularProgress />
        </Box>
      )}
      <Box marginTop={8}>
        {comments?.length !== 0 ? (
          comments?.map(i => {
            return (
              <Comment
                key={i._id}
                item={i}
                isAnswerToComment={false}
                refetch={refetch}
              />
            )
          })
        ) : (
          <Typography variant="h5" fontWeight={100} sx={{ opacity: 0.8 }}>
            Коментарі ще ніхто не залишав. Будьте першим
          </Typography>
        )}
      </Box>
    </Box>
  )
}
