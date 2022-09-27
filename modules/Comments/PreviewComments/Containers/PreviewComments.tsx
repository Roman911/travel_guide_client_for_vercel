import React from 'react'
import { useQuery } from '@apollo/client'
import { CircularProgress } from '@mui/material'
import { useColors } from '../../../../hooks'
import { COMMENTS_FOR_PREVIEW } from '../../../../apollo/queries/comments'
import { PreviewCommentsComponent } from '../Components'

interface IProps {
  postId: string
}

const PreviewComments: React.FC<IProps> = ({ postId }) => {
  const { loading, error, data } = useQuery(COMMENTS_FOR_PREVIEW, {
    variables: { postId },
  })
  const { icon } = useColors()

  if (!loading) <CircularProgress size={14} sx={{ marginLeft: 1 }} />

  return <PreviewCommentsComponent data={data} icon={icon} />
}

export default PreviewComments
