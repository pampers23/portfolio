import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from '@tanstack/react-router'
import { getRouter } from './router'
import { Toaster } from 'sonner'
import Loader from './components/loader'

const router = getRouter()

const Root = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 10000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Loader />

  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="bottom-right" richColors duration={3000} className="sm:!top-auto sm:!bottom-4 sm:!right-4 sm:!left-auto" />
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
) 