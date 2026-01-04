import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import StudyDesk from './Components/StudyDesk'
import Materials from './Components/Materials'
import Courses from './Components/Courses'
import Community from './Components/Community'
import Settings from './Components/Settings.jsx'
import NotFound from './Components/NotFound'
import Login from './Components/Login.jsx'
import RequireAuth from './Components/RequireAuth'
import { AuthProvider } from './hooks/AuthContext.jsx'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <RequireAuth><App /></RequireAuth>,
    children: [
      { index: true, element: <Home /> },
      { path: 'study-desk', element: <StudyDesk /> },
      { path: 'materials', element: <Materials /> },
      { path: 'courses', element: <Courses /> },
      { path: 'community', element: <Community /> },
      { path: 'settings', element: <Settings /> },
    ],
  },
  { path: '*', element: <NotFound /> },
])
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  console.warn('Missing Publishable Key - ClerkProvider will not be used')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {PUBLISHABLE_KEY ? (
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </ClerkProvider>
    ) : (
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    )}
  </StrictMode>,
)
