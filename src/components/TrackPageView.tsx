import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    dataLayer?: any[]
  }
}

export function TrackPageView() {
  const location = useLocation()
  const isInitialRender = useRef(true)

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false
      return
    }

    if (typeof window.gtag === 'function') {
      window.gtag('config', 'AW-1031031682', {
        page_path: location.pathname + location.search,
      })
    }
  }, [location.pathname, location.search])

  return null
}
