import React from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import { Login } from './Login'
import Broswer from './Broswer'

export const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browser",
            element:<Broswer/>
        }

    ])
  return (
    <>
    <div>
        <RouterProvider router={appRouter}></RouterProvider>
    </div>
    </>
  )
}


