import React from 'react'
import Image from 'next/image'

interface IProps {
  theme: 'dark' | 'light'
  handleClick: () => void
}

const LogoComponent: React.FC<IProps> = ({ theme, handleClick }) => {
  return (
    <Image
      src="/logo.webp"
      layout="fixed"
      width={90}
      height={40}
      alt="Travel guide logo"
      style={{
        filter: theme === 'dark' ? 'invert(1)' : 'invert(0)',
        cursor: 'pointer',
      }}
      onClick={handleClick}
    />
  )
}

export default LogoComponent
