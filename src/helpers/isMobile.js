import { useState, useEffect, useCallback } from 'react'

export const useIsMobile = () => {
  const media = useCallback(() => {
    if (window.matchMedia('(min-width: 20px) and (max-width: 600px)').matches) {
      return 500
    }
    if (window.matchMedia('(min-width: 600px) and (max-width: 769px)').matches) {
      return 768
    }

    if (window.matchMedia('(min-width: 769px) and (max-width: 1180px)').matches) {
      return 1024
    }
    if (window.matchMedia('(min-width: 1181px) and (max-width: 1281px)').matches) {
      return 1280
    }
    if (window.matchMedia('(min-width: 1281px) and (max-width: 1400px)').matches) {
      return 1366
    }
    if (window.matchMedia('(min-width: 1400px) and (max-width: 1919px)').matches) {
      return 1680
    }
    if (window.matchMedia('(min-width: 1920px) and (max-width: 2000px)').matches) {
      return 1920
    }
    return 2300
  }, [])

  const currentSize = media()
  const [size, setSize] = useState(currentSize)

  const onResize = useCallback(() => {
    const currentSize = media()
    setSize(currentSize)
  }, [setSize, media])

  useEffect(() => {
    window.addEventListener('resize', onResize)
    return function cleanup() {
      window.removeEventListener('resize', onResize)
    }
  }, [onResize])

  return { isMobile: size <= 768, size }
}