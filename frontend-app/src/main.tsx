import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Login from '@views/login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />
    },
    {
      path: '/login',
      element: <Login />
    }
  ]
)


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
