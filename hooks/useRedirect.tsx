import React from 'react'
import { useRouter } from 'next/router'
import { useTypedSelector } from './'

function Redirect(props: { href: string }) {
  //const { href } = useTypedSelector(state => state.getBack)
  const router = useRouter()

  React.useEffect(() => {
    router.push(props.href).then()
  }, [])

  return null
}

export default Redirect
