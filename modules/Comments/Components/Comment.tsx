import React from 'react'
import {
  Box,
  Button,
  IconButton,
  Link,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import { ChevronLeft } from '@mui/icons-material'
import { useDate } from '../../../hooks/useDate'
import { Avatar } from '../../'
import { Rating } from '../../../Components'
import { CreateComment } from '../'

type Props = {
  isAnswerToComment: boolean
  item: {
    _id: string
    comment: string
    createdAt: string
    rating: number
    answers?:
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
  }
  refetch: () => void
}

export const Comment: React.FC<Props> = ({
  item,
  isAnswerToComment,
  refetch,
}) => {
  const [isAnswer, setIsAnswer] = React.useState(false)
  const { _id, comment, rating, createdAt, author, answers } = item

  const handleClickOpenAnswer = () => setIsAnswer(true)
  const handleCloseOpenAnswer = () => setIsAnswer(false)

  return (
    <Stack
      direction="row"
      marginTop={2}
      marginBottom={isAnswerToComment ? 1 : 5}
    >
      <Avatar
        size={60}
        userData={{ avatar: author.avatar, name: author.name }}
      />
      <Box width="100%" sx={{ paddingLeft: '30px' }}>
        <Stack direction="row" justifyContent="space-between">
          <Link
            variant="h6"
            underline="none"
            sx={{
              color: '#3d4042',
              transition: '300ms',
              ':hover': { color: '#db4454' },
            }}
          >
            {author.name}
          </Link>
          <Box textAlign="end">
            <Typography
              display="inline-block"
              variant="body2"
              fontSize="12px"
              color="#a0a0a0"
            >
              {useDate({ serverDate: createdAt })}
            </Typography>
            <Box>
              <IconButton size="small">
                <ChevronLeft sx={{ transform: 'rotate(90deg)' }} />
              </IconButton>
              <IconButton size="small">
                <ChevronLeft sx={{ transform: 'rotate(270deg)' }} />
              </IconButton>
              <Rating rating={rating} />
            </Box>
          </Box>
        </Stack>
        <Paper elevation={2} sx={{ margin: '10px 0', padding: '20px 15px' }}>
          <Typography variant="body1">{comment}</Typography>
        </Paper>
        {!isAnswerToComment && (
          <Button
            onClick={handleClickOpenAnswer}
            sx={{
              fontSize: '11px',
              textTransform: 'uppercase',
              color: 'rgba(0,0,0,.6)',
              transition: '300ms',
              ':hover': { color: '#db4454' },
            }}
          >
            відповісти
          </Button>
        )}
        {isAnswer && (
          <CreateComment
            isAnswer={true}
            commentId={_id}
            handleCloseOpenAnswer={handleCloseOpenAnswer}
            refetch={refetch}
          />
        )}
        {answers?.length !== 0 &&
          answers?.map(i => {
            return (
              <Comment
                key={i._id}
                item={i}
                isAnswerToComment={true}
                refetch={refetch}
              />
            )
          })}
      </Box>
    </Stack>
  )
}
