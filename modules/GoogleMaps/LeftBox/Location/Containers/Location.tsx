import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLazyQuery } from '@apollo/client'
import { useActions } from '../../../../../hooks'
import { CircularProgress } from '../../../../'
import { LocationComponent } from '../Components'
import { LOCATION } from '../../../../../apollo/queries/locations'

interface IProps {
  widthLeftBox: string
  handleClick: () => void
}

const Location: React.FC<IProps> = ({ widthLeftBox, handleClick }) => {
  const router = useRouter()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const { setPostWithLocation, setTypeMaterial, setSelected, setViewport } =
    useActions()
  const [location, { loading, error, data }] = useLazyQuery(LOCATION)

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleCreatePost = () => {
    router.push('/create-post')
    setPostWithLocation({
      locationID: data?.location._id,
      title: data?.location.title,
      region: data?.location.region,
      small_text: data?.location.small_text,
    })
    setTypeMaterial({
      label: 'Цікаві місця',
      id: 'post',
    })
    setAnchorEl(null)
  }

  const handlePost = (url: string | null) => {
    router.push(`/posts/${url}`)
  }

  useEffect(() => {
    if (router.query.locationID) {
      location({
        variables: { locationID: router.query.locationID },
      })
    }
  }, [router])

  useEffect(() => {
    if (data) {
      setSelected(data.location)
      setViewport({
        center: {
          lat: data.location.latitude,
          lng: data.location.longitude,
        },
        zoom: 12,
      })
    }
  }, [data])

  if (!data || loading) return <CircularProgress marginTop={6} />

  if (error) return <h5>Error</h5>

  return (
    <LocationComponent
      anchorEl={anchorEl}
      location={data?.location}
      open={open}
      widthLeftBox={widthLeftBox}
      handleClick={handleClick}
      handleClose={handleClose}
      handleOpenMenu={handleOpenMenu}
      handleCreatePost={handleCreatePost}
      handlePost={handlePost}
    />
  )
}

export default Location
