import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainRoute from './Routes/MainRoute'
import AuthProvider from './AuthProvider/AuthProvider'





createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
  <RouterProvider router={MainRoute} />
  </AuthProvider>
  </StrictMode>,
)
