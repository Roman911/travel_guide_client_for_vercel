import type { IPost } from '../../../types'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useInView } from 'react-intersection-observer'
import { useActions } from '../../../hooks'
import { useColors, useDate } from '../../../hooks'
import { PostComponent } from '../Components'
import { PostSkeleton } from '../'

interface IProps {
  post: IPost
  isTrip: boolean
}

const steps = [
  { label: 'Історичні факти Підгорецького замку' },
  { label: 'Період найбільшого розквіту Підгорецького замку' },
  { label: 'Період занепаду замку' },
  { label: 'Світлий день в історії замку' },
  { label: 'Легенда Підгорецької фортеці' },
]

const Post: React.FC<IProps> = ({ post, isTrip }) => {
  const router = useRouter()
  const { changeLinearProgress, setLocations } = useActions()
  const { ref, inView } = useInView({ threshold: 0 })
  const { darkGray, icon } = useColors()
  const style = inView
    ? { position: 'absolute', top: 'auto' }
    : { position: 'fixed', top: '100px' }

  const handleClickToUser = (userId: string) => {
    changeLinearProgress(true)
    router.push(`/profile/${userId}`)
  }

  useEffect(() => {
    setLocations(null)
  }, [])

  if (!post) return <PostSkeleton />

  return (
    <PostComponent
      post={post}
      steps={steps}
      refm={ref}
      style={style}
      useDate={useDate}
      colors={{ darkGray, icon }}
      handleClickToUser={handleClickToUser}
      isTrip={isTrip}
    />
  )
}

export default Post
