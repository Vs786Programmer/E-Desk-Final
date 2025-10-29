import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import StudyDesk from './Components/StudyDesk'
import Materials from './Components/Materials'
import Courses from './Components/Courses'
import Community from './Components/Community'
import Settings from './Components/Settings'
import NotFound from './Components/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
