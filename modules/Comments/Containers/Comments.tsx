import React from "react"
import { useLazyQuery } from '@apollo/client'
import { useInView } from 'react-intersection-observer'
import { CommentsComponent } from '../Components'
import { COMMENTS } from '../../../apollo/queries/comments'

type Props = {
  postId: string
}

export const Comments: React.FC<Props> = ({ postId }) => {
  const { ref, inView } = useInView({ threshold: 0 })
  const [comments, { loading, error, data, refetch }] = useLazyQuery(COMMENTS)

  React.useEffect(() => {
    if (inView) comments({ variables: { postId } })
  }, [inView])

  return <CommentsComponent refm={ref} loading={loading} postId={postId} comments={data?.comments} refetch={refetch} />
}