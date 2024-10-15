import { Navigate } from 'react-router-dom'
import { lazy } from 'react'

// import Home from '@/views/home'
// import Test from '@/views/test'

const Home = lazy(() => import('@/views/home'))
const Test = lazy(() => import('@/views/test'))

const router = [
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/test',
    element: <Test />,
  },
]

export default router
