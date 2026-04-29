import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from '@tanstack/react-router'
import { getRouter } from './router'
import { Toaster } from 'sonner'

const router = getRouter()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster position="bottom-right" richColors duration={3000} className="sm:!top-auto sm:!bottom-4 sm:!right-4 sm:!left-auto" />
  </StrictMode>,
)
