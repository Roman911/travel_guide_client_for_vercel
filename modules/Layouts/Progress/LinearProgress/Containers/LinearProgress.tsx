import React from 'react'
import { LinearProgressComponents } from '../Components'

const LinearProgress: React.FC = () => {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress > 95) {
          return 99
        }
        const diff = Math.random() * 10
        return Math.min(oldProgress + diff, 100)
      })
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return <LinearProgressComponents progress={progress} />
}

export default LinearProgress
